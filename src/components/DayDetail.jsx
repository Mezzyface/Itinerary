import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const DayDetail = ({ dayData, onBackToOverview }) => {
  const [expandedTimeBlock, setExpandedTimeBlock] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400'
      case 'upcoming': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅'
      case 'upcoming': return '⏰'
      default: return '📋'
    }
  }

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
              <div className="shiba-text-muted text-sm ml-4 shiba-terminal-title">
                <span className="shiba-terminal-only font-mono">day-detail@shiba:~</span>
                <span className="shiba-organic-only">🔍 Day Details</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={onBackToOverview}
                className="shiba-btn-secondary text-sm"
              >
                ← back
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Dynamic Content Container */}
        <div className="shiba-content-container rounded-b-lg p-6">
          {/* Day Header */}
          <div className="mb-8">
            <div className="shiba-text-accent mb-2 shiba-section-header">
              <span className="shiba-terminal-only">
                <span className="shiba-text-muted">$</span> cat day_{dayData.id}.md
              </span>
              <span className="shiba-organic-only">
                📅 Day {dayData.id} Details
              </span>
            </div>
            <div className="border-l-2 shiba-border-accent pl-4">
              <h1 className="text-2xl font-bold shiba-text-primary mb-2">
                📅 {dayData.title}
              </h1>
              <div className="shiba-text-accent space-y-1 mb-4">
                <div>📍 {dayData.city}, {dayData.country}</div>
                <div>🗓️ {dayData.date}</div>
                {dayData.weather && (
                  <div>{dayData.weather.icon} {dayData.weather.temp} - {dayData.weather.condition}</div>
                )}
              </div>
              <div className="shiba-text-secondary">{dayData.overview}</div>
            </div>
          </div>

          {/* Accommodations */}
          {dayData.accommodations && (
            <div className="mb-8">
              <div className="shiba-text-accent mb-2 shiba-section-header">
                <span className="shiba-terminal-only">
                  <span className="text-gray-500">$</span> cat accommodation.json
                </span>
                <span className="shiba-organic-only">
                  🏨 Accommodation
                </span>
              </div>
              <div className="shiba-card shiba-card-elevated shiba-glow-blue border border-blue-500/30 rounded p-4 bg-blue-500/5">
                <h3 className="text-blue-400 font-bold mb-2">🏨 Accommodation</h3>
                <div className="text-gray-300 text-sm space-y-2">
                  {dayData.accommodations.checkIn && (
                    <div>⏰ Check-in: {dayData.accommodations.checkIn}</div>
                  )}
                  {dayData.accommodations.checkOut && (
                    <div>⏰ Check-out: {dayData.accommodations.checkOut}</div>
                  )}
                  <div>📍 {dayData.city}, {dayData.country}</div>
                  {dayData.accommodations.links && dayData.accommodations.links.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-blue-500/20">
                      <div className="shiba-terminal-only font-mono text-xs">
                        <span className="text-gray-500">$ </span>
                        <span className="text-blue-400">curl </span>
                        <a 
                          href={dayData.accommodations.links[0].url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-shiba-accent hover:text-shiba-accent-hover underline transition-colors"
                        >
                          {dayData.accommodations.links[0].name}
                        </a>
                      </div>
                      <div className="shiba-organic-only">
                        <a 
                          href={dayData.accommodations.links[0].url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 shiba-translucent px-3 py-2 rounded-lg border shiba-glass-border hover:shiba-border-accent transition-all duration-300 hover:scale-105"
                        >
                          <span>🔗</span>
                          <span className="shiba-text-accent font-medium">{dayData.accommodations.links[0].name}</span>
                          <span className="text-xs shiba-text-muted">↗</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Mandatory Activities */}
          {dayData.mandatoryActivities && dayData.mandatoryActivities.length > 0 && (
            <div className="mb-8">
              <div className="shiba-text-accent mb-2 shiba-section-header">
                <span className="shiba-terminal-only">
                  <span className="text-gray-500">$</span> ls mandatory_activities/
                </span>
                <span className="shiba-organic-only">
                  ⭐ Must-Do Activities
                </span>
              </div>
              <div className="space-y-3">
                {dayData.mandatoryActivities.map((activity) => (
                  <div key={activity.id} className="shiba-card shiba-border-animate shiba-hover-lift border border-yellow-500/30 rounded p-4 bg-yellow-500/5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={getStatusColor(activity.status)}>
                          {getStatusIcon(activity.status)}
                        </span>
                        <h4 className="text-yellow-400 font-bold">{activity.title}</h4>
                      </div>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div>📍 {activity.location}</div>
                      {activity.duration && <div>⏱️ {activity.duration}</div>}
                      {activity.notes && <div>📝 {activity.notes}</div>}
                      {activity.confirmationCode && (
                        <div>🔐 <span className="text-yellow-400">{activity.confirmationCode}</span></div>
                      )}
                      {activity.links && activity.links.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-yellow-500/20">
                          <div className="shiba-terminal-only">
                            <div className="text-shiba-accent text-xs mb-1">🔗 Links:</div>
                            <div className="space-y-1">
                              {activity.links.map((link, linkIndex) => (
                                <div key={linkIndex} className="font-mono text-xs">
                                  <span className="text-gray-500">$ </span>
                                  <span className="text-blue-400">curl </span>
                                  <a 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-shiba-accent hover:text-shiba-accent-hover underline transition-colors"
                                  >
                                    {link.name}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="shiba-organic-only">
                            <div className="text-shiba-accent text-xs mb-2 font-medium">🔗 Related Links</div>
                            <div className="flex flex-wrap gap-2">
                              {activity.links.map((link, linkIndex) => (
                                <a 
                                  key={linkIndex}
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1 shiba-translucent-light px-2 py-1 rounded-full border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 text-xs hover:scale-105"
                                >
                                  <span>🌐</span>
                                  <span className="shiba-text-secondary">{link.name}</span>
                                  <span className="text-xs shiba-text-muted">↗</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Time Blocks */}
          {dayData.timeBlocks && dayData.timeBlocks.length > 0 && (
            <div className="mb-8">
              <div className="shiba-text-accent mb-2 shiba-section-header">
                <span className="shiba-terminal-only">
                  <span className="text-gray-500">$</span> ls time_blocks/
                </span>
                <span className="shiba-organic-only">
                  🕐 Time Blocks & Options
                </span>
              </div>
              <div className="space-y-4">
                {dayData.timeBlocks.map((timeBlock) => (
                  <div key={timeBlock.id} className="shiba-card shiba-card-interactive border border-purple-500/30 rounded">
                    <div
                      className="p-4 bg-purple-500/5 cursor-pointer"
                      onClick={() => setExpandedTimeBlock(
                        expandedTimeBlock === timeBlock.id ? null : timeBlock.id
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-purple-400 font-bold">{timeBlock.title}</h4>
                          <div className="text-gray-400 text-sm">{timeBlock.timeRange}</div>
                        </div>
                        <div className="text-purple-400">
                          {expandedTimeBlock === timeBlock.id ? '▼' : '▶'}
                        </div>
                      </div>
                    </div>
                    
                    {expandedTimeBlock === timeBlock.id && (
                      <div className="p-4 border-t border-purple-500/20">
                        <div className="space-y-3">
                          {timeBlock.options?.map((option, index) => (
                            <div key={index} className="shiba-card shiba-translucent-light shiba-hover-grow border border-gray-600/30 rounded p-3 bg-gray-800/20">
                              <h5 className="text-white font-semibold mb-2">{option.title}</h5>
                              <div className="text-gray-300 text-sm space-y-1">
                                <div>⏱️ Duration: {option.duration}</div>
                                <div>💰 Cost: {option.cost}</div>
                                {option.hours && (
                                  <div>🕐 Hours: {option.hours}</div>
                                )}
                                {option.description && (
                                  <div>📝 {option.description}</div>
                                )}
                                {option.notes && (
                                  <div>💡 {option.notes}</div>
                                )}
                                {option.photoSpots && (
                                  <div>📷 Photo spots: {option.photoSpots.join(', ')}</div>
                                )}
                                {option.breakdown && (
                                  <div className="mt-2 pt-2 border-t border-gray-600/20">
                                    <div className="text-shiba-accent text-xs mb-1">💴 Cost Breakdown:</div>
                                    <div className="space-y-1">
                                      {Object.entries(option.breakdown).map(([item, cost], index) => (
                                        <div key={index} className="text-xs">
                                          <span className="text-gray-400">• {item}:</span>
                                          <span className="text-yellow-400 ml-2 font-mono">{cost}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {option.links && option.links.length > 0 && (
                                  <div className="mt-2 pt-2 border-t border-gray-600/20">
                                    <div className="shiba-terminal-only">
                                      <div className="text-shiba-accent text-xs mb-1">🔗 Links:</div>
                                      <div className="space-y-1">
                                        {option.links.map((link, linkIndex) => (
                                          <div key={linkIndex} className="font-mono text-xs">
                                            <span className="text-gray-500">$ </span>
                                            <span className="text-blue-400">curl </span>
                                            <a 
                                              href={link.url} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="text-shiba-accent hover:text-shiba-accent-hover underline transition-colors"
                                            >
                                              {link.name}
                                            </a>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="shiba-organic-only">
                                      <div className="text-shiba-accent text-xs mb-2 font-medium">📎 Resources</div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {option.links.map((link, linkIndex) => (
                                          <a 
                                            key={linkIndex}
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 shiba-translucent-light px-3 py-2 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 text-xs group hover:scale-[1.02]"
                                          >
                                            <span className="text-purple-400">🎯</span>
                                            <span className="shiba-text-secondary flex-1 truncate">{link.name}</span>
                                            <span className="text-xs shiba-text-muted group-hover:translate-x-0.5 transition-transform">↗</span>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transportation */}
          {dayData.transportation && dayData.transportation.length > 0 && (
            <div className="mb-8">
              <div className="shiba-text-accent mb-2 shiba-section-header">
                <span className="shiba-terminal-only">
                  <span className="text-gray-500">$</span> cat transport.json
                </span>
                <span className="shiba-organic-only">
                  🚗 Transportation
                </span>
              </div>
              <div className="space-y-3">
                {dayData.transportation.map((transport, index) => (
                  <div key={index} className="shiba-card shiba-border-animate shiba-glow-blue border border-cyan-500/30 rounded p-4 bg-cyan-500/5">
                    <h4 className="text-cyan-400 font-bold mb-2">🚗 {transport.provider} {transport.type}</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div>📍 {transport.departure.location} → {transport.arrival.location}</div>
                      <div>⏰ {transport.departure.time} → {transport.arrival.time}</div>
                      <div>⏱️ Duration: {transport.duration}</div>
                      <div>💰 Cost: {transport.cost}</div>
                      {transport.confirmationCode && (
                        <div>🔐 <span className="text-cyan-400">{transport.confirmationCode}</span></div>
                      )}
                      {transport.notes && <div>📝 {transport.notes}</div>}
                      {transport.links && transport.links.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-cyan-500/20">
                          <div className="shiba-terminal-only">
                            <div className="text-shiba-accent text-xs mb-1">🔗 Links:</div>
                            <div className="space-y-1">
                              {transport.links.map((link, linkIndex) => (
                                <div key={linkIndex} className="font-mono text-xs">
                                  <span className="text-gray-500">$ </span>
                                  <span className="text-blue-400">curl </span>
                                  <a 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-shiba-accent hover:text-shiba-accent-hover underline transition-colors"
                                  >
                                    {link.name}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="shiba-organic-only">
                            <div className="text-shiba-accent text-xs mb-2 font-medium">🚀 Transportation Links</div>
                            <div className="flex flex-wrap gap-2">
                              {transport.links.map((link, linkIndex) => (
                                <a 
                                  key={linkIndex}
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 shiba-translucent px-3 py-2 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 text-xs group hover:scale-105"
                                >
                                  <span className="text-cyan-400">🎫</span>
                                  <span className="shiba-text-primary font-medium">{link.name}</span>
                                  <span className="text-xs shiba-text-muted group-hover:translate-x-1 transition-transform">↗</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Footer Commands */}
          <div className="border-t shiba-glass-border pt-4 text-sm shiba-text-muted">
            <div className="space-y-1">
              <div className="shiba-terminal-only">
                <span className="text-green-400">navigation:</span> Click time blocks to expand options
              </div>
              <div className="shiba-terminal-only">
                <span className="text-yellow-400">status:</span> ✅ completed | ⏰ upcoming | 📋 planned
              </div>
              <div className="shiba-organic-only">
                <span className="shiba-text-accent">💡 tip:</span> Click time blocks to explore all available options
              </div>
              <div className="shiba-organic-only">
                <span style={{color: 'var(--shiba-yellow)'}}>📊 status:</span> Interactive day planning made simple ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayDetail