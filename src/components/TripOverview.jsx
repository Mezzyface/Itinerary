import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import WeatherDisplay from './WeatherDisplay'

const TripOverview = ({ tripData, onDaySelect }) => {
  return (
    <div className="min-h-screen shiba-fade-in" style={{background: 'var(--shiba-bg-primary)', color: 'var(--shiba-text-primary)'}}>
      <div className="container mx-auto px-4 py-6">
        {/* Dynamic Header */}
        <div className="shiba-window rounded-t-lg p-3 mb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
              </div>
              <div className="shiba-text-muted text-sm ml-4 shiba-terminal-title">
                <span className="shiba-terminal-only font-mono">trip-itinerary@shiba:~</span>
                <span className="shiba-organic-only">🌸 Japan Adventure Planning</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Dynamic Content Container */}
        <div className="shiba-content-container rounded-b-lg p-6">
          {/* Trip Header */}
          <div className="mb-8">
            <div className="shiba-text-accent mb-2 shiba-section-header">
              <span className="shiba-terminal-only">
                <span className="shiba-text-muted">$</span> cat trip_info.txt
              </span>
              <span className="shiba-organic-only">
                ✈️ Trip Overview
              </span>
            </div>
            <div className="border-l-2 shiba-border-accent pl-4 shiba-translucent-light rounded-r-lg py-2">
              <h1 className="text-2xl font-bold shiba-text-primary mb-2">
                <span className="shiba-terminal-only">🌍 {tripData.tripInfo?.title || 'Trip Itinerary'}</span>
                <span className="shiba-organic-only">
                  <span className="shiba-text-accent font-bold">
                    ✈️ {tripData.tripInfo?.title || 'Trip Itinerary'}
                  </span>
                </span>
              </h1>
              <div className="shiba-text-accent space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="shiba-translucent px-2 py-1 rounded-full text-xs">
                    📅 {tripData.tripInfo?.startDate} → {tripData.tripInfo?.endDate}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="shiba-translucent px-2 py-1 rounded-full text-xs">
                    📍 {tripData.days?.length || 0} days planned
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* Days Overview */}
          <div className="mb-6">
            <div className="shiba-text-accent mb-4 shiba-section-header">
              <span className="shiba-terminal-only">
                <span className="shiba-text-muted">$</span> ls days/
              </span>
              <span className="shiba-organic-only">
                🗓️ Daily Itinerary
              </span>
            </div>
            <div className="grid gap-4">
              {tripData.days?.map((day, index) => (
                <div
                  key={day.id}
                  className="shiba-card shiba-card-interactive shiba-hover-lift shiba-border-animate shiba-glow-accent p-4 cursor-pointer group transition-all duration-300"
                  onClick={() => onDaySelect(day.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="shiba-text-accent font-bold">
                          <span className="shiba-terminal-only">day_{index + 1}.md</span>
                          <span className="shiba-organic-only">Day {index + 1}</span>
                        </span>
                        <span className="shiba-translucent px-2 py-1 rounded-full text-xs font-medium">
                          📅 {day.date}
                        </span>
                        <WeatherDisplay 
                          coordinates={day.coordinates}
                          fallbackWeather={day.weather}
                          date={day.date}
                          variant="compact"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <div className="shiba-translucent px-3 py-2 rounded-lg border shiba-glass-border inline-flex items-center space-x-2">
                          <span className="text-lg">📍</span>
                          <span className="shiba-text-primary font-semibold">{day.city}, {day.country}</span>
                        </div>
                      </div>
                      
                      <div className="shiba-text-secondary text-sm mb-4">
                        {day.dayPlan ? (
                          <div className="space-y-2">
                            {typeof day.dayPlan === 'object' && !Array.isArray(day.dayPlan) ? (
                              // Handle dayPlan as object with morning/afternoon/evening
                              Object.entries(day.dayPlan).map(([timeOfDay, activity], index) => (
                                <div key={index} className="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                                  <span className="capitalize font-medium text-emerald-400">{timeOfDay}:</span> {activity}
                                </div>
                              ))
                            ) : Array.isArray(day.dayPlan) ? (
                              // Handle dayPlan as array (legacy format)
                              day.dayPlan.map((item, index) => (
                                <div key={index} className="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                                  {item}
                                </div>
                              ))
                            ) : (
                              <div className="group-hover:translate-x-1 transition-transform duration-300 leading-relaxed">
                                {day.dayPlan}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="italic">{day.overview}</span>
                        )}
                      </div>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-3 text-xs mt-3 pt-3 border-t shiba-glass-border">
                        <div className="shiba-translucent-light px-2 py-1 rounded-full border border-yellow-400/30">
                          <span style={{color: 'var(--shiba-yellow)'}}>
                            ⚡ {day.mandatoryActivities?.length || 0} mandatory
                          </span>
                        </div>
                        <div className="shiba-translucent-light px-2 py-1 rounded-full border border-blue-400/30">
                          <span style={{color: 'var(--shiba-blue)'}}>
                            🎯 {day.timeBlocks?.length || 0} time blocks
                          </span>
                        </div>
                        {day.transportation?.length > 0 && (
                          <div className="shiba-translucent-light px-2 py-1 rounded-full border border-green-400/30">
                            <span style={{color: 'var(--shiba-green)'}}>
                              🚗 transport
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="shiba-text-accent group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 text-xl">
                      <span className="shiba-terminal-only">→</span>
                      <span className="shiba-organic-only">✨</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Commands */}
          <div className="border-t shiba-glass-border pt-4 text-sm shiba-text-muted">
            <div className="space-y-1">
              <div><span className="shiba-text-accent">tip:</span> Click any day to view detailed itinerary</div>
              <div><span style={{color: 'var(--shiba-yellow)'}}>help:</span> Terminal navigation for serene travel planning 🐕✨</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripOverview