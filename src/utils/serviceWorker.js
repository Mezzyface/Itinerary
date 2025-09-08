// Service Worker registration and management utilities

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('[App] ServiceWorker registration successful:', registration.scope)
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, inform user
                  showUpdateAvailable()
                }
              })
            }
          })
        })
        .catch((error) => {
          console.log('[App] ServiceWorker registration failed:', error)
        })
    })

    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('[App] Message from ServiceWorker:', event.data)
      handleServiceWorkerMessage(event.data)
    })
  } else {
    console.log('[App] Service workers are not supported')
  }
}

// Show update available notification
const showUpdateAvailable = () => {
  // You could show a toast or modal here
  console.log('[App] New version available! Please refresh.')
  
  // Auto-refresh after delay (optional)
  // setTimeout(() => {
  //   window.location.reload()
  // }, 5000)
}

// Handle messages from service worker
const handleServiceWorkerMessage = (data) => {
  switch (data.type) {
    case 'CACHE_UPDATED':
      console.log('[App] Cache updated:', data.payload)
      break
    case 'OFFLINE_FALLBACK':
      console.log('[App] Using offline fallback:', data.payload)
      showOfflineIndicator()
      break
    case 'ONLINE_RESTORED':
      console.log('[App] Online connection restored')
      hideOfflineIndicator()
      break
    default:
      console.log('[App] Unknown SW message:', data)
  }
}

// Show offline indicator
const showOfflineIndicator = () => {
  let indicator = document.getElementById('offline-indicator')
  if (!indicator) {
    indicator = document.createElement('div')
    indicator.id = 'offline-indicator'
    indicator.className = 'fixed top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg z-50'
    indicator.innerHTML = '📶 Offline Mode - Using cached data'
    document.body.appendChild(indicator)
  }
  indicator.style.display = 'block'
}

// Hide offline indicator
const hideOfflineIndicator = () => {
  const indicator = document.getElementById('offline-indicator')
  if (indicator) {
    indicator.style.display = 'none'
  }
}

// Check online/offline status
export const initializeNetworkStatus = () => {
  const updateNetworkStatus = () => {
    if (navigator.onLine) {
      console.log('[App] Online')
      hideOfflineIndicator()
      // Trigger background sync if available
      if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.sync.register('trip-data-sync')
          registration.sync.register('weather-sync')
        })
      }
    } else {
      console.log('[App] Offline')
      showOfflineIndicator()
    }
  }

  // Check initial status
  updateNetworkStatus()

  // Listen for status changes
  window.addEventListener('online', updateNetworkStatus)
  window.addEventListener('offline', updateNetworkStatus)
}

// Cache trip data for offline access
export const cacheOfflineTripData = (tripData) => {
  if ('caches' in window) {
    caches.open('trip-data-v1').then((cache) => {
      const response = new Response(JSON.stringify(tripData), {
        headers: { 'Content-Type': 'application/json' }
      })
      cache.put('/api/trip-data', response)
      console.log('[App] Trip data cached for offline access')
    })
  }
}

// Get cached trip data when offline
export const getCachedTripData = async () => {
  if ('caches' in window) {
    const cache = await caches.open('trip-data-v1')
    const response = await cache.match('/api/trip-data')
    if (response) {
      const data = await response.json()
      console.log('[App] Using cached trip data')
      return data
    }
  }
  return null
}

// Request persistent storage (for important trip data)
export const requestPersistentStorage = async () => {
  if ('storage' in navigator && 'persist' in navigator.storage) {
    const isPersistent = await navigator.storage.persist()
    console.log(`[App] Persistent storage: ${isPersistent ? 'granted' : 'denied'}`)
    return isPersistent
  }
  return false
}

// Get storage usage information
export const getStorageInfo = async () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const estimate = await navigator.storage.estimate()
    const used = estimate.usage || 0
    const quota = estimate.quota || 0
    const usedMB = Math.round(used / (1024 * 1024) * 100) / 100
    const quotaMB = Math.round(quota / (1024 * 1024) * 100) / 100
    
    console.log(`[App] Storage used: ${usedMB}MB / ${quotaMB}MB`)
    
    return {
      used: usedMB,
      quota: quotaMB,
      percentage: quota > 0 ? Math.round((used / quota) * 100) : 0
    }
  }
  return null
}