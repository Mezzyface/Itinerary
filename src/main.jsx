import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, initializeNetworkStatus } from './utils/serviceWorker.js'
import { initializeOLEDOptimizations } from './utils/oledOptimizer.js'

// Initialize service worker and network status
registerServiceWorker()
initializeNetworkStatus()

// Initialize OLED optimizations for better battery life and display quality
initializeOLEDOptimizations()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
