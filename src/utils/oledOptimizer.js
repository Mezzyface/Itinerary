// OLED Display Optimization Utilities
// Detects OLED displays and applies battery-saving optimizations

export class OLEDOptimizer {
  constructor() {
    this.isOLED = this.detectOLEDDisplay()
    this.isHighContrast = this.detectHighContrast()
    this.prefersBattery = this.detectBatteryPreference()
  }

  // Detect if the device likely has an OLED display
  detectOLEDDisplay() {
    // Check for common OLED device indicators
    const userAgent = navigator.userAgent.toLowerCase()
    const isOLEDDevice = 
      // Samsung devices (many have OLED)
      userAgent.includes('samsung') ||
      // iPhone X and newer (OLED)
      (userAgent.includes('iphone') && this.getIOSVersion() >= 11) ||
      // Pixel phones (OLED)
      userAgent.includes('pixel') ||
      // Check for high pixel density (common on OLED)
      window.devicePixelRatio >= 2.5 ||
      // Check if display supports high contrast (OLED indicator)
      window.matchMedia('(dynamic-range: high)').matches ||
      // Wide color gamut support (common on OLED)
      window.matchMedia('(color-gamut: p3)').matches

    return isOLEDDevice
  }

  // Get iOS version for iPhone OLED detection
  getIOSVersion() {
    const match = navigator.userAgent.match(/OS (\d+)_/)
    return match ? parseInt(match[1]) : 0
  }

  // Detect if user prefers high contrast
  detectHighContrast() {
    return window.matchMedia('(prefers-contrast: high)').matches
  }

  // Detect battery-saving preferences
  detectBatteryPreference() {
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(prefers-reduced-data: reduce)').matches ||
      // Low battery indicator (if supported)
      navigator.getBattery?.then(battery => battery.level < 0.2) || false
    )
  }

  // Apply OLED optimizations to the document
  applyOLEDOptimizations() {
    if (!this.isOLED && !this.isHighContrast) return

    const root = document.documentElement
    
    // Apply OLED-specific CSS variables
    const oledVariables = {
      '--shiba-bg-primary': 'rgb(0, 0, 0)',
      '--shiba-bg-secondary': 'rgb(0, 0, 0)',
      '--shiba-terminal-bg': 'rgb(0, 0, 0)',
      '--shiba-glass-bg': 'rgba(0, 0, 0, 0.98)',
    }

    // Enhanced contrast for OLED
    if (this.isHighContrast) {
      oledVariables['--shiba-text-primary'] = 'rgb(255, 255, 255)'
      oledVariables['--shiba-accent'] = 'rgb(240, 140, 139)'
    }

    // Apply variables
    Object.entries(oledVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    // Add OLED optimization classes
    document.body.classList.add('oled-optimized')
    
    console.log('[OLEDOptimizer] OLED optimizations applied')
  }

  // Apply battery-saving optimizations
  applyBatteryOptimizations() {
    if (!this.prefersBattery) return

    const root = document.documentElement
    
    // Disable expensive effects
    root.style.setProperty('--shiba-glow', 'none')
    
    // Reduce animation durations
    const style = document.createElement('style')
    style.textContent = `
      .shiba-fade-in { animation-duration: 0.1s !important; }
      .shiba-card { transition-duration: 0.1s !important; }
      .shiba-btn-primary, .shiba-btn-secondary { transition-duration: 0.1s !important; }
      .shiba-glow { box-shadow: none !important; }
    `
    document.head.appendChild(style)

    console.log('[OLEDOptimizer] Battery optimizations applied')
  }

  // Get current optimization status
  getOptimizationStatus() {
    return {
      isOLED: this.isOLED,
      isHighContrast: this.isHighContrast,
      prefersBattery: this.prefersBattery,
      devicePixelRatio: window.devicePixelRatio,
      userAgent: navigator.userAgent,
    }
  }

  // Initialize all optimizations
  initialize() {
    // Apply optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.applyOptimizations()
      })
    } else {
      this.applyOptimizations()
    }

    // Listen for media query changes
    this.setupMediaQueryListeners()
  }

  // Apply all relevant optimizations
  applyOptimizations() {
    this.applyOLEDOptimizations()
    this.applyBatteryOptimizations()
    
    // Log status for debugging
    console.log('[OLEDOptimizer] Status:', this.getOptimizationStatus())
  }

  // Set up listeners for media query changes
  setupMediaQueryListeners() {
    // Listen for contrast preference changes
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    contrastQuery.addListener(() => {
      this.isHighContrast = contrastQuery.matches
      this.applyOLEDOptimizations()
    })

    // Listen for motion preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addListener(() => {
      this.prefersBattery = motionQuery.matches
      this.applyBatteryOptimizations()
    })

    // Listen for orientation changes (mobile)
    window.addEventListener('orientationchange', () => {
      // Re-detect and apply optimizations after orientation change
      setTimeout(() => this.applyOptimizations(), 100)
    })
  }
}

// Create and export singleton instance
export const oledOptimizer = new OLEDOptimizer()

// Auto-initialize optimizations
export const initializeOLEDOptimizations = () => {
  oledOptimizer.initialize()
}

// Manual optimization trigger
export const applyOLEDMode = () => {
  oledOptimizer.applyOLEDOptimizations()
}

// Battery mode trigger
export const applyBatteryMode = () => {
  oledOptimizer.applyBatteryOptimizations()
}