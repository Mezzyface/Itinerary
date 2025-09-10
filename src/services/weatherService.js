// Weather service for fetching real-time weather data
// Uses WeatherAPI.com (more reliable activation)

const WEATHER_API_BASE = 'http://api.weatherapi.com/v1'

export class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.cache = new Map()
    this.cacheTimeout = 10 * 60 * 1000 // 10 minutes
  }

  // Generate cache key for coordinates
  getCacheKey(lat, lng, type = 'current') {
    return `${type}_${lat.toFixed(2)}_${lng.toFixed(2)}`
  }

  // Check if cached data is still valid
  isCacheValid(cacheEntry) {
    return cacheEntry && (Date.now() - cacheEntry.timestamp) < this.cacheTimeout
  }

  // Get from cache or fetch new data
  async getFromCacheOrFetch(key, fetchFn) {
    const cached = this.cache.get(key)
    if (this.isCacheValid(cached)) {
      return cached.data
    }

    try {
      const data = await fetchFn()
      this.cache.set(key, { data, timestamp: Date.now() })
      return data
    } catch (error) {
      // Return cached data even if expired, if available
      if (cached?.data) {
        console.warn('Using expired cache due to API failure:', error.message)
        return cached.data
      }
      throw error
    }
  }

  // Get weather for specific date and coordinates
  async getWeatherForDate(lat, lng, date) {
    const cacheKey = this.getCacheKey(lat, lng, `date_${date}`)
    
    if (!this.apiKey) {
      console.warn('Weather API key not provided, using mock data')
      return this.getMockWeather()
    }

    return this.getFromCacheOrFetch(cacheKey, async () => {
      const today = new Date()
      const targetDate = new Date(date)
      const diffInDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24))
      
      let endpoint, response
      
      if (diffInDays > 10) {
        // Too far in future, use historical data from previous year for same date
        const previousYear = targetDate.getFullYear() - 1
        const historicalDate = `${previousYear}-${date.substring(5)}`
        endpoint = `${WEATHER_API_BASE}/history.json?key=${this.apiKey}&q=${lat},${lng}&dt=${historicalDate}`
      } else if (diffInDays >= 0) {
        // Future date within 10 days - use forecast
        endpoint = `${WEATHER_API_BASE}/forecast.json?key=${this.apiKey}&q=${lat},${lng}&days=${Math.min(diffInDays + 1, 10)}`
      } else {
        // Past date - use historical weather
        endpoint = `${WEATHER_API_BASE}/history.json?key=${this.apiKey}&q=${lat},${lng}&dt=${date}`
      }
      
      response = await fetch(endpoint, { timeout: 5000 })
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      
      // Extract weather data based on endpoint type
      let weatherData
      if (endpoint.includes('current')) {
        weatherData = data.current
      } else if (endpoint.includes('forecast')) {
        const forecastDay = data.forecast.forecastday.find(day => day.date === date) || data.forecast.forecastday[0]
        weatherData = forecastDay.day
      } else if (endpoint.includes('history')) {
        weatherData = data.forecast.forecastday[0].day
      }
      
      return {
        temp: `${Math.round(weatherData.temp_f || weatherData.maxtemp_f)}°F`,
        condition: weatherData.condition.text,
        icon: this.getWeatherEmoji(weatherData.condition.text),
        description: weatherData.condition.text.toLowerCase(),
        humidity: weatherData.humidity || weatherData.avghumidity,
        windSpeed: Math.round(weatherData.wind_mph || weatherData.maxwind_mph),
        timestamp: Date.now(),
        isHistorical: diffInDays < 0 || diffInDays > 10,
        isForecast: diffInDays >= 0 && diffInDays <= 10,
        usedPreviousYear: diffInDays > 10
      }
    }).catch(error => {
      // Only log error once per session to avoid spam
      if (!this._hasLoggedError) {
        console.warn('Weather API unavailable, using fallback data:', error.message)
        this._hasLoggedError = true
      }
      return this.getMockWeather()
    })
  }

  // Get current weather for coordinates (legacy method)
  async getCurrentWeather(lat, lng) {
    return this.getWeatherForDate(lat, lng, new Date().toISOString().split('T')[0])
  }

  // Get weather forecast for next 5 days
  async getForecast(lat, lng) {
    if (!this.apiKey) {
      console.warn('Weather API key not provided, using mock forecast')
      return this.getMockForecast()
    }

    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/forecast?lat=${lat}&lon=${lng}&appid=${this.apiKey}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`)
      }

      const data = await response.json()
      
      return data.list.map(item => ({
        date: new Date(item.dt * 1000).toISOString().split('T')[0],
        temp: `${Math.round(item.main.temp)}°C`,
        condition: item.weather[0].main,
        icon: this.getWeatherEmoji(item.weather[0].main),
        description: item.weather[0].description
      }))
    } catch (error) {
      console.error('Failed to fetch forecast:', error)
      return this.getMockForecast()
    }
  }

  // Convert weather condition to emoji
  getWeatherEmoji(condition) {
    const conditionLower = condition.toLowerCase()
    const emojiMap = {
      'sunny': '☀️',
      'clear': '☀️',
      'partly cloudy': '⛅',
      'cloudy': '☁️',
      'overcast': '☁️',
      'rain': '🌧️',
      'light rain': '🌦️',
      'heavy rain': '🌧️',
      'shower': '🌦️',
      'drizzle': '🌦️',
      'thunderstorm': '⛈️',
      'snow': '❄️',
      'sleet': '🌨️',
      'fog': '🌫️',
      'mist': '🌫️',
      'haze': '🌫️'
    }
    
    // Find the best match
    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (conditionLower.includes(key)) {
        return emoji
      }
    }
    
    return '🌤️' // Default
  }

  // Fallback mock weather data
  getMockWeather() {
    return {
      temp: '72°F',
      condition: 'Partly Cloudy',
      icon: '⛅',
      description: 'partly cloudy',
      humidity: 65,
      windSpeed: 8
    }
  }

  // Fallback mock forecast data
  getMockForecast() {
    const conditions = ['Clear', 'Clouds', 'Rain', 'Partly Cloudy']
    const temps = [18, 20, 22, 25, 19]
    
    return Array.from({ length: 5 }, (_, i) => {
      const condition = conditions[i % conditions.length]
      return {
        date: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000)
          .toISOString().split('T')[0],
        temp: `${temps[i]}°C`,
        condition,
        icon: this.getWeatherEmoji(condition),
        description: condition.toLowerCase()
      }
    })
  }
}

// Export singleton instance
export const weatherService = new WeatherService(
  // API key would be loaded from environment or config
  import.meta.env.VITE_OPENWEATHER_API_KEY || null
)