import { useState, useEffect } from 'react'
import TripOverview from './components/TripOverview'
import DayDetail from './components/DayDetail'
import { sampleTripData } from './data/sampleData'

function App() {
  const [currentView, setCurrentView] = useState('overview')
  const [selectedDayId, setSelectedDayId] = useState(null)

  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state
      if (state && state.view === 'dayDetail' && state.dayId) {
        setCurrentView('dayDetail')
        setSelectedDayId(state.dayId)
      } else {
        setCurrentView('overview')
        setSelectedDayId(null)
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    // Set initial history state
    window.history.replaceState({ view: 'overview' }, '', window.location.pathname)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handleDaySelect = (dayId) => {
    setSelectedDayId(dayId)
    setCurrentView('dayDetail')
    // Push new state to history
    window.history.pushState({ view: 'dayDetail', dayId }, '', `${window.location.pathname}#day-${dayId}`)
  }

  const handleBackToOverview = () => {
    setCurrentView('overview')
    setSelectedDayId(null)
    // Push overview state to history
    window.history.pushState({ view: 'overview' }, '', window.location.pathname)
  }

  const selectedDay = selectedDayId 
    ? sampleTripData.days.find(day => day.id === selectedDayId)
    : null

  return (
    <div>
      {currentView === 'overview' && (
        <TripOverview 
          tripData={sampleTripData}
          onDaySelect={handleDaySelect}
        />
      )}
      
      {currentView === 'dayDetail' && selectedDay && (
        <DayDetail 
          dayData={selectedDay}
          onBackToOverview={handleBackToOverview}
        />
      )}
    </div>
  )
}

export default App
