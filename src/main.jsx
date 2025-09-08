import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker, initializeNetworkStatus } from './utils/serviceWorker.js'

// Initialize service worker and network status
registerServiceWorker()
initializeNetworkStatus()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
