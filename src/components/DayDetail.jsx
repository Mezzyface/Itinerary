import { useState } from 'react'

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
              <div className="shiba-text-muted text-sm ml-4 font-mono">day-detail@shiba:~</div>
            </div>
            <button
              onClick={onBackToOverview}
              className="shiba-btn-secondary text-sm"
            >
              ← back
            </button>
          </div>
        </div>

        {/* Shiba Terminal Content */}
        <div className="shiba-terminal rounded-b-lg p-6">
          {/* Day Header */}
          <div className="mb-8">
            <div className="shiba-text-accent mb-2">
              <span className="shiba-text-muted">$</span> cat day_{dayData.id}.md
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
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> cat accommodation.json
              </div>
              <div className="border border-blue-500/30 rounded p-4 bg-blue-500/5">
                <h3 className="text-blue-400 font-bold mb-2">🏨 {dayData.accommodations.name}</h3>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>📍 {dayData.accommodations.address}</div>
                  {dayData.accommodations.checkIn && (
                    <div>⏰ Check-in: {dayData.accommodations.checkIn}</div>
                  )}
                  {dayData.accommodations.checkOut && (
                    <div>⏰ Check-out: {dayData.accommodations.checkOut}</div>
                  )}
                  {dayData.accommodations.confirmationCode && (
                    <div>🔐 Confirmation: <span className="text-blue-400">{dayData.accommodations.confirmationCode}</span></div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Mandatory Activities */}
          {dayData.mandatoryActivities && dayData.mandatoryActivities.length > 0 && (
            <div className="mb-8">
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> ls mandatory_activities/
              </div>
              <div className="space-y-3">
                {dayData.mandatoryActivities.map((activity) => (
                  <div key={activity.id} className="border border-yellow-500/30 rounded p-4 bg-yellow-500/5">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Daily Budget */}
          {dayData.budget && (
            <div className="mb-8">
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> cat daily_budget.json
              </div>
              <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                <h3 className="text-green-400 font-bold mb-3">💰 Day Budget</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-gray-400">Daily Budget</div>
                    <div className="text-green-400 font-bold">{dayData.budget.dailyBudget}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Spent Today</div>
                    <div className="text-red-400 font-bold">{dayData.budget.spent}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Remaining</div>
                    <div className="text-yellow-400 font-bold">
                      ${(parseFloat(dayData.budget.dailyBudget.replace('$', '')) - parseFloat(dayData.budget.spent.replace('$', ''))).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="border-t border-green-500/20 pt-3">
                  <div className="text-gray-400 text-xs mb-2">Breakdown:</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">🏨 Accommodation:</span>
                      <span className="text-gray-300 ml-1">{dayData.budget.breakdown.accommodation}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">🎯 Activities:</span>
                      <span className="text-gray-300 ml-1">{dayData.budget.breakdown.activities}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">🍜 Food:</span>
                      <span className="text-gray-300 ml-1">{dayData.budget.breakdown.food}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">🚇 Transport:</span>
                      <span className="text-gray-300 ml-1">{dayData.budget.breakdown.transport}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Time Blocks */}
          {dayData.timeBlocks && dayData.timeBlocks.length > 0 && (
            <div className="mb-8">
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> ls time_blocks/
              </div>
              <div className="space-y-4">
                {dayData.timeBlocks.map((timeBlock) => (
                  <div key={timeBlock.id} className="border border-purple-500/30 rounded">
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
                            <div key={index} className="border border-gray-600/30 rounded p-3 bg-gray-800/20">
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
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> cat transport.json
              </div>
              <div className="space-y-3">
                {dayData.transportation.map((transport, index) => (
                  <div key={index} className="border border-cyan-500/30 rounded p-4 bg-cyan-500/5">
                    <h4 className="text-cyan-400 font-bold mb-2">🚗 {transport.provider} {transport.type}</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div>📍 {transport.departure.location} → {transport.arrival.location}</div>
                      <div>⏰ {transport.departure.time} → {transport.arrival.time}</div>
                      <div>⏱️ Duration: {transport.duration}</div>
                      <div>💰 Cost: {transport.cost}</div>
                      {transport.confirmationCode && (
                        <div>🔐 <span className="text-cyan-400">{transport.confirmationCode}</span></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photo Spots */}
          {dayData.photoSpots && dayData.photoSpots.length > 0 && (
            <div className="mb-8">
              <div className="text-green-300 mb-2">
                <span className="text-gray-500">$</span> ls photo_spots/
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dayData.photoSpots.map((spot, index) => (
                  <div key={index} className="border border-pink-500/30 rounded p-3 bg-pink-500/5">
                    <h5 className="text-pink-400 font-semibold">{spot.name}</h5>
                    <div className="text-gray-300 text-sm">{spot.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Commands */}
          <div className="border-t border-green-600/30 pt-4 text-sm text-gray-400">
            <div className="space-y-1">
              <div><span className="text-green-400">navigation:</span> Click time blocks to expand options</div>
              <div><span className="text-yellow-400">status:</span> ✅ completed | ⏰ upcoming | 📋 planned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayDetail