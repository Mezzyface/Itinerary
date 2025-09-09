import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
    
    // Apply initial theme
    applyTheme(savedTheme === 'dark' || !savedTheme)
  }, [])

  const applyTheme = (dark) => {
    const root = document.documentElement
    const body = document.body
    
    // Remove existing theme classes
    body.classList.remove('theme-oled', 'theme-shiba')
    
    // Add appropriate theme class
    if (dark) {
      body.classList.add('theme-oled')
    } else {
      body.classList.add('theme-shiba')
    }
    
    if (dark) {
      // Original Dark OLED theme
      root.style.setProperty('--shiba-bg-primary', 'rgb(16, 20, 28)')
      root.style.setProperty('--shiba-bg-secondary', 'rgb(24, 28, 36)')
      root.style.setProperty('--shiba-bg-tertiary', 'rgb(32, 36, 44)')
      root.style.setProperty('--shiba-text-primary', 'rgb(220, 215, 211)')
      root.style.setProperty('--shiba-text-secondary', 'rgb(176, 170, 165)')
      root.style.setProperty('--shiba-text-muted', 'rgb(132, 126, 121)')
      root.style.setProperty('--shiba-accent', 'rgb(208, 109, 108)')
      root.style.setProperty('--shiba-accent-hover', 'rgb(225, 125, 124)')
      root.style.setProperty('--shiba-terminal-bg', 'rgb(12, 16, 22)')
      root.style.setProperty('--shiba-terminal-window', 'rgb(20, 24, 32)')
      root.style.setProperty('--shiba-glass-border', 'rgba(208, 109, 108, 0.2)')
      root.style.setProperty('--shiba-red', 'rgb(215, 67, 72)')
      root.style.setProperty('--shiba-green', 'rgb(63, 130, 48)')
      root.style.setProperty('--shiba-blue', 'rgb(50, 145, 207)')
      root.style.setProperty('--shiba-yellow', 'rgb(228, 147, 32)')
      
      // Typography & Styling (OLED)
      root.style.setProperty('--shiba-font-family', '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif')
      root.style.setProperty('--shiba-font-mono', '"SF Mono", Monaco, Inconsolata, "Roboto Mono", Consolas, monospace')
      root.style.setProperty('--shiba-border-radius', '8px')
      root.style.setProperty('--shiba-border-radius-sm', '6px')
      root.style.setProperty('--shiba-border-radius-lg', '12px')
      root.style.setProperty('--shiba-shadow', '0 4px 12px rgba(0, 0, 0, 0.4)')
      root.style.setProperty('--shiba-shadow-subtle', '0 2px 4px rgba(0, 0, 0, 0.3)')
    } else {
      // Enhanced Shiba Inu Obsidian Theme (Dark)
      root.style.setProperty('--shiba-bg-primary', 'rgb(36, 39, 52)')        // exterior
      root.style.setProperty('--shiba-bg-secondary', 'rgb(38, 42, 58)')       // side  
      root.style.setProperty('--shiba-bg-tertiary', 'rgb(42, 45, 61)')        // base
      root.style.setProperty('--shiba-text-primary', 'rgb(198, 206, 239)')    // text
      root.style.setProperty('--shiba-text-secondary', 'rgb(181, 189, 220)')  // subtext1
      root.style.setProperty('--shiba-text-muted', 'rgb(165, 172, 201)')      // subtext0
      root.style.setProperty('--shiba-accent', 'rgb(235, 188, 186)')          // lily
      root.style.setProperty('--shiba-accent-hover', 'rgb(243, 137, 143)')    // rose
      root.style.setProperty('--shiba-terminal-bg', 'rgb(65, 69, 89)')        // surface0
      root.style.setProperty('--shiba-terminal-window', 'rgb(81, 86, 108)')   // surface1
      root.style.setProperty('--shiba-glass-border', 'rgba(235, 188, 186, 0.2)') // lily with opacity
      
      // Enhanced Color Palette
      root.style.setProperty('--shiba-red', 'rgb(255, 98, 107)')              // red
      root.style.setProperty('--shiba-green', 'rgb(56, 198, 141)')            // green
      root.style.setProperty('--shiba-blue', 'rgb(147, 183, 245)')            // blue
      root.style.setProperty('--shiba-yellow', 'rgb(249, 226, 175)')          // yellow
      root.style.setProperty('--shiba-violet', 'rgb(196, 167, 231)')          // violet
      root.style.setProperty('--shiba-sea', 'rgb(104, 188, 204)')             // sea/cyan
      root.style.setProperty('--shiba-turquoise', 'rgb(128, 216, 220)')       // turquoise
      root.style.setProperty('--shiba-orange', 'rgb(247, 157, 124)')          // orange
      
      // Typography & Enhanced Styling
      root.style.setProperty('--shiba-font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif')
      root.style.setProperty('--shiba-font-mono', '"JetBrains Mono", "Fira Code", Monaco, Consolas, "Liberation Mono", "Courier New", monospace')
      
      // Enhanced Border Radius System
      root.style.setProperty('--shiba-border-radius', '10px')
      root.style.setProperty('--shiba-border-radius-sm', '5px')
      root.style.setProperty('--shiba-border-radius-lg', '15px')
      root.style.setProperty('--shiba-border-radius-xl', '20px')
      
      // Advanced Shadow System
      root.style.setProperty('--shiba-shadow-s', '0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179), 0px 15px 30px rgba(36, 39, 52, 0.3)')
      root.style.setProperty('--shiba-shadow-l', '0px 1.8px 7.3px rgba(36, 39, 52, 0.071), 0px 6.3px 24.7px rgba(36, 39, 52, 0.112), 0px 30px 90px rgba(36, 39, 52, 0.2)')
      root.style.setProperty('--shiba-shadow', '0 4px 6px 0 rgba(36, 39, 52, 0.15), 0 1px 3px 1px rgba(36, 39, 52, 0.1)')
      root.style.setProperty('--shiba-shadow-subtle', '0 2px 4px rgba(36, 39, 52, 0.08)')
      
      // Enhanced Interactive Shadows
      root.style.setProperty('--shiba-input-shadow', 'inset 0 0.5px 0.5px 0.5px rgba(198, 206, 239, 0.09), 0 2px 4px 0 rgba(36, 39, 52, 0.15), 0 1px 1.5px 0 rgba(36, 39, 52, 0.1), 0 1px 2px 0 rgba(36, 39, 52, 0.2)')
      root.style.setProperty('--shiba-input-shadow-hover', 'inset 0 0.5px 1px 0.5px rgba(198, 206, 239, 0.16), 0 2px 3px 0 rgba(36, 39, 52, 0.3), 0 1px 1.5px 0 rgba(36, 39, 52, 0.2), 0 1px 2px 0 rgba(36, 39, 52, 0.4)')
      
      // Translucency System
      root.style.setProperty('--shiba-bg-translucent', 'rgba(36, 39, 52, 0.6)')
      root.style.setProperty('--shiba-bg-translucent-light', 'rgba(42, 45, 61, 0.1)')
      
      // Card System
      root.style.setProperty('--shiba-card-padding', '1.2em')
      root.style.setProperty('--shiba-card-min-width', '180px')
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="shiba-btn-secondary shiba-hover-lift shiba-glow-accent p-2 rounded-md transition-all duration-300"
      style={{
        background: 'var(--shiba-bg-tertiary)',
        border: '1px solid var(--shiba-glass-border)',
        color: 'var(--shiba-text-secondary)',
      }}
      title={isDarkMode ? 'Switch to Shiba Inu Theme' : 'Switch to OLED Theme'}
    >
      {isDarkMode ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle