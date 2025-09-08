// Weather service for fetching real-time weather data
// Uses OpenWeatherMap API (requires API key)

const WEATHER_API_BASE = 'https://api.openweathermap.org/data/2.5'

export class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  // Get current weather for coordinates
  async getCurrentWeather(lat, lng) {
    if (!this.apiKey) {
      console.warn('Weather API key not provided, using mock data')
      return this.getMockWeather()
    }

    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/weather?lat=${lat}&lon=${lng}&appid=${this.apiKey}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`)
      }

      const data = await response.json()
      
      return {
        temp: `${Math.round(data.main.temp)}°C`,
        condition: data.weather[0].main,
        icon: this.getWeatherEmoji(data.weather[0].main),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind?.speed || 0
      }
    } catch (error) {
      console.error('Failed to fetch weather:', error)
      return this.getMockWeather()
    }
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
    const emojiMap = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Fog': '🌫️',
      'Haze': '🌫️'
    }
    return emojiMap[condition] || '🌤️'
  }

  // Fallback mock weather data
  getMockWeather() {
    return {
      temp: '22°C',
      condition: 'Partly Cloudy',
      icon: '⛅',
      description: 'partly cloudy',
      humidity: 65,
      windSpeed: 12
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
  process.env.OPENWEATHER_API_KEY || null
)