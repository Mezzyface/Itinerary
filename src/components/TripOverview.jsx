import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const TripOverview = ({ tripData, onDaySelect }) => {
  return (
    <div className="min-h-screen shiba-fade-in" style={{background: 'var(--shiba-bg-primary)', color: 'var(--shiba-text-primary)'}}>
      <div className="container mx-auto px-4 py-6">
        {/* Shiba Terminal Header */}
        <div className="shiba-window rounded-t-lg p-3 mb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
              </div>
              <div className="shiba-text-muted text-sm ml-4 font-mono">trip-itinerary@shiba:~</div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Shiba Terminal Content */}
        <div className="shiba-terminal rounded-b-lg p-6">
          {/* Trip Header */}
          <div className="mb-8">
            <div className="shiba-text-accent mb-2">
              <span className="shiba-text-muted">$</span> cat trip_info.txt
            </div>
            <div className="border-l-2 shiba-border-accent pl-4">
              <h1 className="text-2xl font-bold shiba-text-primary mb-2">
                🌍 {tripData.tripInfo?.title || 'Trip Itinerary'}
              </h1>
              <div className="shiba-text-accent space-y-1">
                <div>📅 {tripData.tripInfo?.startDate} → {tripData.tripInfo?.endDate}</div>
                <div>📍 {tripData.days?.length || 0} days planned</div>
              </div>
            </div>
          </div>

          {/* Budget Overview */}
          {tripData.tripInfo?.budget && (
            <div className="mb-8">
              <div className="shiba-text-accent mb-2">
                <span className="shiba-text-muted">$</span> cat budget.json
              </div>
              <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                <h3 className="text-green-400 font-bold mb-2">💰 Trip Budget</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Total Budget</div>
                    <div className="text-green-400 font-bold">{tripData.tripInfo.budget.totalBudget}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Spent</div>
                    <div className="text-red-400 font-bold">{tripData.tripInfo.budget.spent}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Remaining</div>
                    <div className="text-yellow-400 font-bold">{tripData.tripInfo.budget.remaining}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Currency</div>
                    <div className="text-gray-300">{tripData.tripInfo.budget.currency}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Days Overview */}
          <div className="mb-6">
            <div className="shiba-text-accent mb-4">
              <span className="shiba-text-muted">$</span> ls days/
            </div>
            <div className="grid gap-4">
              {tripData.days?.map((day, index) => (
                <div
                  key={day.id}
                  className="shiba-card p-4 cursor-pointer group transition-all hover:shiba-glow"
                  onClick={() => onDaySelect(day.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="shiba-text-accent font-bold">
                          day_{index + 1}.md
                        </span>
                        <span className="shiba-text-muted text-sm">
                          {day.date}
                        </span>
                        {day.weather && (
                          <span className="shiba-text-secondary">
                            {day.weather.icon} {day.weather.temp}
                          </span>
                        )}
                      </div>
                      
                      <div className="shiba-text-primary font-semibold mb-1">
                        📍 {day.city}, {day.country}
                      </div>
                      
                      <div className="shiba-text-secondary text-sm mb-3">
                        {day.dayPlan ? (
                          <ul className="space-y-1">
                            {day.dayPlan.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="shiba-text-accent mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span>{day.overview}</span>
                        )}
                      </div>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span style={{color: 'var(--shiba-yellow)'}}>
                          ⚡ {day.mandatoryActivities?.length || 0} mandatory
                        </span>
                        <span style={{color: 'var(--shiba-blue)'}}>
                          🎯 {day.timeBlocks?.length || 0} time blocks
                        </span>
                        <span className="shiba-text-accent">
                          📷 {day.photoSpots?.length || 0} photo spots
                        </span>
                        {day.transportation?.length > 0 && (
                          <span style={{color: 'var(--shiba-green)'}}>
                            🚗 transport
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shiba-text-accent group-hover:scale-110 transition-transform">
                      →
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