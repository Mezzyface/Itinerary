import { useWeather } from '../hooks/useWeather'

const WeatherDisplay = ({ coordinates, fallbackWeather, date, variant = 'compact' }) => {
  const { weather, loading, error } = useWeather(coordinates, fallbackWeather, date)

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm">
        <span className="animate-spin">🔄</span>
        <span className="shiba-text-muted">Loading weather...</span>
      </div>
    )
  }

  if (error && !weather) {
    return (
      <div className="flex items-center space-x-2 text-sm">
        <span>🌤️</span>
        <span className="shiba-text-muted">Weather unavailable</span>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className="shiba-card shiba-glow-blue border border-blue-500/30 rounded p-4 bg-blue-500/5">
        <h3 className="text-blue-400 font-bold mb-3 flex items-center space-x-2">
          <span>🌤️</span>
          <span>
            {weather?.usedPreviousYear ? 'Historical Weather (Previous Year)' :
             weather?.isHistorical ? 'Historical Weather' : 
             weather?.isForecast ? 'Weather Forecast' : 
             'Current Weather'}
          </span>
          {error && (
            <span className="text-xs text-yellow-400 shiba-terminal-only">(cached)</span>
          )}
          {weather?.usedPreviousYear && (
            <span className="text-xs text-purple-400">📅</span>
          )}
          {weather?.isHistorical && !weather?.usedPreviousYear && (
            <span className="text-xs text-orange-400">📚</span>
          )}
          {weather?.isForecast && (
            <span className="text-xs text-green-400">🔮</span>
          )}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="shiba-text-secondary">Temperature:</span>
              <span className="text-blue-400 font-mono">{weather.temp}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="shiba-text-secondary">Condition:</span>
              <span className="flex items-center space-x-1">
                <span>{weather.icon}</span>
                <span className="shiba-text-primary">{weather.condition}</span>
              </span>
            </div>
          </div>
          
          {weather.humidity && weather.windSpeed && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="shiba-text-secondary">Humidity:</span>
                <span className="font-mono shiba-text-accent">{weather.humidity}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="shiba-text-secondary">Wind:</span>
                <span className="font-mono shiba-text-accent">{weather.windSpeed} m/s</span>
              </div>
            </div>
          )}
        </div>
        
        {weather.description && (
          <div className="mt-3 pt-3 border-t shiba-glass-border">
            <span className="text-xs shiba-text-muted capitalize">{weather.description}</span>
          </div>
        )}
        
        {error && (
          <div className="mt-2 text-xs text-yellow-400 shiba-organic-only">
            ⚠️ Using cached weather data
          </div>
        )}
      </div>
    )
  }

  // Compact variant (default)
  return (
    <div className="flex items-center space-x-1 text-sm">
      <span className="text-lg">{weather.icon}</span>
      <span className="shiba-text-accent font-medium">{weather.temp}</span>
      {weather.condition && variant === 'compact-plus' && (
        <span className="shiba-text-secondary">- {weather.condition}</span>
      )}
      {error && (
        <span className="text-xs text-yellow-400 ml-1 shiba-terminal-only">*</span>
      )}
    </div>
  )
}

export default WeatherDisplay