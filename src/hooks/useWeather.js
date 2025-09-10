import { useState, useEffect } from 'react'
import { weatherService } from '../services/weatherService'

export const useWeather = (coordinates, fallbackWeather, date) => {
  const [weather, setWeather] = useState(fallbackWeather)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!coordinates?.lat || !coordinates?.lng) {
        setWeather(fallbackWeather)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const weatherData = date 
          ? await weatherService.getWeatherForDate(coordinates.lat, coordinates.lng, date)
          : await weatherService.getCurrentWeather(coordinates.lat, coordinates.lng)
        setWeather(weatherData)
      } catch (err) {
        setError(err.message)
        setWeather(fallbackWeather) // Use fallback data on error
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [coordinates?.lat, coordinates?.lng, date, fallbackWeather])

  return { weather, loading, error }
}

export const useWeatherForecast = (coordinates) => {
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchForecast = async () => {
      if (!coordinates?.lat || !coordinates?.lng) {
        return
      }

      setLoading(true)
      setError(null)

      try {
        const forecastData = await weatherService.getForecast(
          coordinates.lat, 
          coordinates.lng
        )
        setForecast(forecastData)
      } catch (err) {
        setError(err.message)
        setForecast([]) // Empty forecast on error
      } finally {
        setLoading(false)
      }
    }

    fetchForecast()
  }, [coordinates?.lat, coordinates?.lng])

  return { forecast, loading, error }
}