import { useState } from 'react'

const TripOverview = ({ tripData, onDaySelect }) => {
  return (
    <div className="bg-gray-900 text-green-400 font-mono min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-2 mb-0">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm ml-4">trip-itinerary@user:~</div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black rounded-b-lg p-6">
          {/* Trip Header */}
          <div className="mb-8">
            <div className="text-green-300 mb-2">
              <span className="text-gray-500">$</span> cat trip_info.txt
            </div>
            <div className="border-l-2 border-green-600 pl-4">
              <h1 className="text-2xl font-bold text-white mb-2">
                🌍 {tripData.tripInfo?.title || 'Trip Itinerary'}
              </h1>
              <div className="text-green-300 space-y-1">
                <div>📅 {tripData.tripInfo?.startDate} → {tripData.tripInfo?.endDate}</div>
                <div>👥 Travelers: {tripData.tripInfo?.travelers?.join(', ')}</div>
                <div>📍 {tripData.days?.length || 0} days planned</div>
              </div>
            </div>
          </div>

          {/* Days Overview */}
          <div className="mb-6">
            <div className="text-green-300 mb-4">
              <span className="text-gray-500">$</span> ls days/
            </div>
            <div className="grid gap-4">
              {tripData.days?.map((day, index) => (
                <div
                  key={day.id}
                  className="border border-green-600/30 rounded p-4 hover:border-green-400/50 transition-colors cursor-pointer group"
                  onClick={() => onDaySelect(day.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-green-400 font-bold">
                          day_{index + 1}.md
                        </span>
                        <span className="text-gray-400 text-sm">
                          {day.date}
                        </span>
                        {day.weather && (
                          <span className="text-gray-300">
                            {day.weather.icon} {day.weather.temp}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-white font-semibold mb-1">
                        📍 {day.city}, {day.country}
                      </div>
                      
                      <div className="text-gray-300 text-sm mb-3">
                        {day.overview}
                      </div>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="text-yellow-400">
                          ⚡ {day.mandatoryActivities?.length || 0} mandatory
                        </span>
                        <span className="text-blue-400">
                          🎯 {day.timeBlocks?.length || 0} time blocks
                        </span>
                        <span className="text-pink-400">
                          📷 {day.photoSpots?.length || 0} photo spots
                        </span>
                        {day.transportation?.length > 0 && (
                          <span className="text-purple-400">
                            🚗 transport
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-green-400 group-hover:text-green-300">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Commands */}
          <div className="border-t border-green-600/30 pt-4 text-sm text-gray-400">
            <div className="space-y-1">
              <div><span className="text-green-400">tip:</span> Click any day to view detailed itinerary</div>
              <div><span className="text-yellow-400">help:</span> Use terminal navigation for hacker-friendly travel planning 🤖</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripOverview