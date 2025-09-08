// Service Worker for offline functionality
// Caches essential resources and provides offline access to trip data

const CACHE_NAME = 'trip-itinerary-v1'
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  // Add other essential static resources
]

const DATA_CACHE_NAME = 'trip-data-v1'

// Install event - cache static resources
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install')
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static resources')
        return cache.addAll(STATIC_CACHE_URLS)
      })
      .catch((error) => {
        console.log('[ServiceWorker] Cache static resources failed:', error)
      })
  )
  
  // Skip waiting to activate immediately
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate')
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  
  // Take control immediately
  self.clients.claim()
})

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Handle API requests differently
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      handleApiRequest(request)
    )
    return
  }
  
  // Handle static resources
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse
        }
        
        // Try to fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }
            
            // Clone response for caching
            const responseToCache = response.clone()
            
            // Cache the response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache)
              })
            
            return response
          })
          .catch(() => {
            // Return offline page or fallback
            if (request.destination === 'document') {
              return caches.match('/offline.html') || 
                     new Response('Offline - Trip data cached locally', {
                       status: 200,
                       headers: { 'Content-Type': 'text/plain' }
                     })
            }
          })
      })
  )
})

// Handle API requests with caching strategy
async function handleApiRequest(request) {
  const url = new URL(request.url)
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DATA_CACHE_NAME)
      cache.put(request, networkResponse.clone())
      return networkResponse
    }
  } catch (error) {
    console.log('[ServiceWorker] Network request failed:', error)
  }
  
  // Fallback to cache
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }
  
  // Return mock data for weather/maps when offline
  if (url.pathname.includes('weather')) {
    return new Response(JSON.stringify(getMockWeatherData()), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
  
  // Generic offline response
  return new Response(JSON.stringify({ 
    error: 'Offline', 
    message: 'This feature requires internet connection' 
  }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' }
  })
}

// Mock weather data for offline use
function getMockWeatherData() {
  return {
    temp: '22°C',
    condition: 'Unknown',
    icon: '🌤️',
    description: 'offline mode - cached weather unavailable',
    offline: true
  }
}

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('[ServiceWorker] Background sync:', event.tag)
  
  if (event.tag === 'weather-sync') {
    event.waitUntil(syncWeatherData())
  }
  
  if (event.tag === 'trip-data-sync') {
    event.waitUntil(syncTripData())
  }
})

// Sync weather data when online
async function syncWeatherData() {
  try {
    console.log('[ServiceWorker] Syncing weather data')
    // This would sync weather data for all trip locations
    // Implementation depends on your specific weather service integration
  } catch (error) {
    console.log('[ServiceWorker] Weather sync failed:', error)
  }
}

// Sync trip data when online
async function syncTripData() {
  try {
    console.log('[ServiceWorker] Syncing trip data')
    // This would sync any locally modified trip data to server
    // Implementation depends on your data storage strategy
  } catch (error) {
    console.log('[ServiceWorker] Trip data sync failed:', error)
  }
}

// Push notifications for trip updates
self.addEventListener('push', (event) => {
  console.log('[ServiceWorker] Push notification received')
  
  const options = {
    body: event.data ? event.data.text() : 'Trip update available',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    tag: 'trip-update',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Update',
        icon: '/action-view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/action-dismiss.png'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification('Trip Itinerary Update', options)
  )
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[ServiceWorker] Notification click:', event.action)
  
  event.notification.close()
  
  if (event.action === 'view') {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})