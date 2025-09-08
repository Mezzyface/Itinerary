// Map service for generating map embeds and calculating routes
// Uses Google Maps Embed API and other map services

export class MapService {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.embedBaseUrl = 'https://www.google.com/maps/embed/v1'
  }

  // Generate Google Maps embed URL for location
  getLocationMapUrl(coordinates, zoom = 15, mapType = 'roadmap') {
    if (!this.apiKey) {
      console.warn('Maps API key not provided, using OpenStreetMap fallback')
      return this.getOpenStreetMapUrl(coordinates, zoom)
    }

    const { lat, lng } = coordinates
    return `${this.embedBaseUrl}/view?key=${this.apiKey}&center=${lat},${lng}&zoom=${zoom}&maptype=${mapType}`
  }

  // Generate Google Maps embed URL for directions
  getDirectionsMapUrl(origin, destination, mode = 'driving') {
    if (!this.apiKey) {
      console.warn('Maps API key not provided')
      return null
    }

    const originStr = typeof origin === 'object' ? `${origin.lat},${origin.lng}` : origin
    const destStr = typeof destination === 'object' ? `${destination.lat},${destination.lng}` : destination
    
    return `${this.embedBaseUrl}/directions?key=${this.apiKey}&origin=${encodeURIComponent(originStr)}&destination=${encodeURIComponent(destStr)}&mode=${mode}`
  }

  // Generate map with multiple markers
  getMultiLocationMapUrl(locations, zoom = 12) {
    if (!this.apiKey || locations.length === 0) {
      console.warn('Maps API key not provided or no locations')
      return null
    }

    // Use the first location as center
    const center = locations[0].coordinates
    let url = `${this.embedBaseUrl}/view?key=${this.apiKey}&center=${center.lat},${center.lng}&zoom=${zoom}`
    
    // Add markers for each location
    locations.forEach((location, index) => {
      const { lat, lng } = location.coordinates
      url += `&markers=color:red%7Clabel:${index + 1}%7C${lat},${lng}`
    })

    return url
  }

  // Fallback to OpenStreetMap (no API key required)
  getOpenStreetMapUrl(coordinates, zoom = 15) {
    const { lat, lng } = coordinates
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`
  }

  // Calculate estimated travel time between locations
  async getTravelTime(origin, destination, mode = 'driving') {
    if (!this.apiKey) {
      return this.getMockTravelTime(origin, destination, mode)
    }

    try {
      const originStr = typeof origin === 'object' ? `${origin.lat},${origin.lng}` : origin
      const destStr = typeof destination === 'object' ? `${destination.lat},${destination.lng}` : destination

      // Note: This would require Google Maps Distance Matrix API
      // For now, return mock data
      console.log('Travel time calculation would use Distance Matrix API')
      return this.getMockTravelTime(origin, destination, mode)
    } catch (error) {
      console.error('Failed to calculate travel time:', error)
      return this.getMockTravelTime(origin, destination, mode)
    }
  }

  // Mock travel time calculation
  getMockTravelTime(origin, destination, mode) {
    const baseTimes = {
      driving: 30,
      walking: 90,
      transit: 45,
      bicycling: 20
    }

    const baseTime = baseTimes[mode] || baseTimes.driving
    const randomVariation = Math.floor(Math.random() * 20) - 10 // ±10 minutes
    const totalMinutes = Math.max(5, baseTime + randomVariation)

    return {
      duration: totalMinutes,
      durationText: this.formatDuration(totalMinutes),
      distance: `${Math.round(totalMinutes * 0.8)} km`, // Rough estimate
      mode
    }
  }

  // Format duration in minutes to human-readable string
  formatDuration(minutes) {
    if (minutes < 60) {
      return `${minutes} min`
    }
    
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    
    if (remainingMinutes === 0) {
      return `${hours} hr`
    }
    
    return `${hours} hr ${remainingMinutes} min`
  }

  // Generate QR code URL for location sharing
  getLocationQRCode(coordinates, name) {
    const { lat, lng } = coordinates
    const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mapsUrl)}`
    
    return {
      qrCodeUrl: qrApiUrl,
      mapsUrl,
      name
    }
  }

  // Check if coordinates are valid
  isValidCoordinates(coordinates) {
    if (!coordinates || typeof coordinates !== 'object') {
      return false
    }
    
    const { lat, lng } = coordinates
    return (
      typeof lat === 'number' && 
      typeof lng === 'number' &&
      lat >= -90 && lat <= 90 &&
      lng >= -180 && lng <= 180
    )
  }
}

// Export singleton instance
export const mapService = new MapService(
  // API key would be loaded from environment or config
  process.env.GOOGLE_MAPS_API_KEY || null
)