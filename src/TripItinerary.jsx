// Sample 10: Terminal Modern - Minimal modern aesthetic with terminal-inspired interface
import { useState } from 'react'

export default function Sample10({ data }) {
  const [selectedDay, setSelectedDay] = useState(null)

  if (selectedDay) {
    return <TerminalDayView day={selectedDay} onBack={() => setSelectedDay(null)} />
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Terminal Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-500 text-sm">trip-planner v1.0</span>
          </div>
          
          <div className="text-green-300 text-sm mb-2">
            $ cat {data.tripTitle.toLowerCase().replace(/\s+/g, '-')}.md
          </div>
          
          <div className="border border-gray-700 bg-gray-900 rounded-lg p-6">
            <h1 className="text-2xl font-light tracking-wide mb-2 text-white">
              {data.tripTitle}
            </h1>
            <div className="text-gray-400 text-sm mb-4">
              {data.days.length} days planned • {data.days.reduce((acc, day) => acc + day.mandatoryActivities.length + day.timeBlocks.reduce((a, b) => a + b.activities.length, 0), 0)} activities total
            </div>
            <div className="h-px bg-gray-700 mb-4"></div>
            <div className="text-green-300 text-sm">
              STATUS: ⚡ READY FOR ADVENTURE 🚀
            </div>
          </div>
        </div>

        {/* Days List - Terminal Style */}
        <div className="space-y-6">
          {data.days.map((day, index) => (
            <div
              key={day.id}
              onClick={() => setSelectedDay(day)}
              className="border border-gray-700 bg-gray-900 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors"
            >
              <div className="p-6">
                {/* Terminal Command Line */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <span className="text-green-300">$</span>
                  <span className="text-blue-400">./day-{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-500">--location="{day.location}"</span>
                  <span className="text-gray-500">--date="{day.date}"</span>
                </div>

                {/* Day Info Grid */}
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Left: Day Number & Date */}
                  <div className="md:col-span-2">
                    <div className="text-4xl font-light text-white mb-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {new Date(day.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>

                  {/* Center: Content */}
                  <div className="md:col-span-7">
                    <h3 className="text-lg font-light text-white mb-2">
                      {day.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {day.overview}
                    </p>
                    <div className="text-xs text-green-300">
                      🌍 {day.location}
                    </div>
                  </div>

                  {/* Right: Terminal Stats */}
                  <div className="md:col-span-3">
                    <div className="bg-black border border-gray-700 rounded p-3 text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-500">🚨 CRITICAL:</span>
                        <span className="text-red-400">{day.mandatoryActivities.length}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-500">⭐ OPTIONAL:</span>
                        <span className="text-yellow-400">{day.timeBlocks.reduce((acc, block) => acc + block.activities.length, 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">🕒 BLOCKS:</span>
                        <span className="text-green-400">{day.timeBlocks.length}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="mt-4 pt-3 border-t border-gray-700 flex items-center justify-between text-xs">
                  <div className="text-gray-500">
                    ⌨️  Press ENTER to view details
                  </div>
                  <div className="text-green-300">
                    🟢 READY
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 text-center text-gray-600 text-xs">
          <div className="mb-2">💻 $ trip-planner --version 1.0.0</div>
          <div>📖 Use 'help' for command list • ❌ 'exit' to quit</div>
        </div>
      </div>
    </div>
  )
}

function TerminalDayView({ day, onBack }) {
  const [currentCommand, setCurrentCommand] = useState('')
  const [showActivities, setShowActivities] = useState(true)

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <button 
            onClick={onBack}
            className="ml-4 text-blue-400 hover:text-blue-300 text-sm"
          >
            ← cd ../
          </button>
        </div>

        {/* Command History */}
        <div className="space-y-2 mb-8">
          <div className="text-green-300 text-sm">
            $ cat day-{day.title.toLowerCase().replace(/\s+/g, '-')}.json
          </div>
          <div className="border border-gray-700 bg-gray-900 rounded-lg p-6">
            <div className="text-white text-lg font-light mb-2">
              {day.title}
            </div>
            <div className="text-gray-400 text-sm mb-4">
              {new Date(day.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long', 
                day: 'numeric' 
              })} • {day.location}
            </div>
            <div className="text-green-300 text-sm">
              📝 {day.overview}
            </div>
          </div>
        </div>

        {/* Terminal Menu */}
        <div className="mb-8">
          <div className="text-green-300 text-sm mb-2">$ ls -la activities/</div>
          <div className="flex flex-wrap gap-2 text-xs">
            <button 
              onClick={() => setShowActivities(true)}
              className={`px-3 py-1 rounded ${showActivities ? 'bg-green-400 text-black' : 'bg-gray-800 text-gray-400'}`}
            >
              📋 all
            </button>
            <button 
              onClick={() => setShowActivities('critical')}
              className={`px-3 py-1 rounded ${showActivities === 'critical' ? 'bg-red-400 text-black' : 'bg-gray-800 text-gray-400'}`}
            >
              🚨 critical
            </button>
            <button 
              onClick={() => setShowActivities('optional')}
              className={`px-3 py-1 rounded ${showActivities === 'optional' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-400'}`}
            >
              ⭐ optional
            </button>
          </div>
        </div>

        {/* Critical Activities */}
        {(showActivities === true || showActivities === 'critical') && day.mandatoryActivities.length > 0 && (
          <div className="mb-12">
            <div className="text-red-400 text-sm mb-4">
              🚨 $ cat critical_activities.log
            </div>
            
            <div className="space-y-4">
              {day.mandatoryActivities.map((activity) => (
                <div key={activity.id} className="border border-red-800 bg-red-950 bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-red-500 text-black px-2 py-1 rounded text-xs font-bold">
                          {activity.time}
                        </span>
                        <span className="text-red-300 text-xs uppercase tracking-wide border border-red-500 px-2 py-1 rounded">
                          {activity.type}
                        </span>
                      </div>
                      <h4 className="text-white font-light mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {activity.details}
                      </p>
                    </div>
                  </div>
                  
                  {(activity.confirmationNumber || activity.location) && (
                    <div className="bg-black border border-gray-700 rounded p-3 text-xs">
                      {activity.confirmationNumber && (
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-500">CONFIRMATION:</span>
                          <span className="text-green-400">{activity.confirmationNumber}</span>
                        </div>
                      )}
                      {activity.location && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">LOCATION:</span>
                          <span className="text-blue-400">{activity.location}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional Activities */}
        {(showActivities === true || showActivities === 'optional') && (
          <div className="mb-12">
            <div className="text-yellow-400 text-sm mb-4">
              ⭐ $ cat optional_activities.log
            </div>

            <div className="space-y-8">
              {day.timeBlocks.map((block) => (
                <div key={block.id} className="border border-gray-700 bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-light text-lg">
                      {block.title}
                    </h3>
                    <div className="bg-black border border-gray-700 px-3 py-1 rounded text-xs">
                      <span className="text-yellow-400">
                        {block.startTime} - {block.endTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {block.activities.map((activity) => (
                      <div key={activity.id} className="border border-gray-700 bg-black rounded p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-white font-light text-sm">
                            {activity.title}
                          </h4>
                          <span className={`px-2 py-1 rounded text-xs ${
                            activity.priority === 'high' ? 'bg-green-400 text-black' :
                            activity.priority === 'medium' ? 'bg-yellow-400 text-black' :
                            'bg-gray-400 text-black'
                          }`}>
                            {activity.priority}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed mb-3">
                          {activity.description}
                        </p>
                        
                        <div className="space-y-1 text-xs">
                          {activity.location && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">🌍 LOC:</span>
                              <span className="text-blue-400">{activity.location}</span>
                            </div>
                          )}
                          {activity.estimatedDuration && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">⏱️ TIME:</span>
                              <span className="text-green-400">{activity.estimatedDuration}min</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Terminal Prompt */}
        <div className="mt-8 border border-gray-700 bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-300">$</span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              placeholder="💬 enter command (try: help, back, refresh)"
              className="flex-1 bg-transparent text-white outline-none text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (currentCommand === 'back' || currentCommand === 'cd ../') {
                    onBack()
                  } else if (currentCommand === 'help') {
                    alert('Available commands:\n- back: return to overview\n- refresh: reload day\n- all: show all activities\n- critical: show only critical\n- optional: show only optional')
                  } else if (currentCommand === 'refresh') {
                    window.location.reload()
                  }
                  setCurrentCommand('')
                }
              }}
            />
            <div className="text-green-400 animate-pulse">|</div>
          </div>
        </div>
      </div>
    </div>
  )
}