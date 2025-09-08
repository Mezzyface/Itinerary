import { useState } from 'react'
import TripOverview from './components/TripOverview'
import DayDetail from './components/DayDetail'
import { sampleTripData } from './data/sampleData'

function App() {
  const [currentView, setCurrentView] = useState('overview')
  const [selectedDayId, setSelectedDayId] = useState(null)

  const handleDaySelect = (dayId) => {
    setSelectedDayId(dayId)
    setCurrentView('dayDetail')
  }

  const handleBackToOverview = () => {
    setCurrentView('overview')
    setSelectedDayId(null)
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
