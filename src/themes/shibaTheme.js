// Shiba Inu Theme inspired by the Obsidian theme
// A comfortable and serene aesthetic with Japanese-inspired colors

export const shibaTheme = {
  // Core color palette
  colors: {
    // Primary colors
    lily: 'rgb(208, 109, 108)',
    red: 'rgb(215, 67, 72)', 
    blue: 'rgb(50, 145, 207)',
    green: 'rgb(63, 130, 48)',
    yellow: 'rgb(228, 147, 32)',
    
    // Dark theme base colors
    backgroundPrimary: 'rgb(16, 20, 28)',
    backgroundSecondary: 'rgb(24, 28, 36)',
    backgroundTertiary: 'rgb(32, 36, 44)',
    
    // Text colors
    textPrimary: 'rgb(220, 215, 211)',
    textSecondary: 'rgb(176, 170, 165)',
    textMuted: 'rgb(132, 126, 121)',
    
    // Accent and interaction colors
    accent: 'rgb(208, 109, 108)', // Lily as primary accent
    accentHover: 'rgb(225, 125, 124)',
    accentMuted: 'rgba(208, 109, 108, 0.3)',
    
    // Terminal-inspired colors with Shiba theme
    terminal: {
      background: 'rgb(12, 16, 22)',
      window: 'rgb(20, 24, 32)',
      border: 'rgba(208, 109, 108, 0.2)',
      prompt: 'rgb(208, 109, 108)',
      text: 'rgb(220, 215, 211)',
      comment: 'rgb(132, 126, 121)',
    },
    
    // Status colors
    success: 'rgb(63, 130, 48)',
    warning: 'rgb(228, 147, 32)', 
    error: 'rgb(215, 67, 72)',
    info: 'rgb(50, 145, 207)',
    
    // Translucent overlays
    overlay: 'rgba(16, 20, 28, 0.8)',
    glassMorphism: 'rgba(32, 36, 44, 0.7)',
  },
  
  // Typography
  fonts: {
    mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", monospace',
    sans: '"Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
    emoji: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"',
  },
  
  // Spacing and sizing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem', 
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  // Border radius
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  // Shadows with soft, Japanese-inspired aesthetic
  shadows: {
    soft: '0 2px 8px rgba(208, 109, 108, 0.1)',
    medium: '0 4px 16px rgba(208, 109, 108, 0.15)',
    large: '0 8px 32px rgba(208, 109, 108, 0.2)',
    glow: '0 0 20px rgba(208, 109, 108, 0.3)',
  },
  
  // Animation durations
  animation: {
    fast: '150ms',
    medium: '300ms',
    slow: '500ms',
  },
  
  // Component-specific styles
  components: {
    terminal: {
      windowControls: {
        red: 'rgb(255, 95, 86)',
        yellow: 'rgb(255, 189, 46)', 
        green: 'rgb(39, 201, 63)',
      },
      cursor: 'rgb(208, 109, 108)',
    },
    
    card: {
      background: 'rgba(32, 36, 44, 0.8)',
      border: 'rgba(208, 109, 108, 0.15)',
      hover: 'rgba(32, 36, 44, 0.95)',
    },
    
    button: {
      primary: {
        background: 'rgb(208, 109, 108)',
        hover: 'rgb(225, 125, 124)',
        text: 'rgb(255, 255, 255)',
      },
      secondary: {
        background: 'rgba(208, 109, 108, 0.1)',
        hover: 'rgba(208, 109, 108, 0.2)',
        text: 'rgb(208, 109, 108)',
      },
    },
  },
}

// CSS custom properties for dynamic theming
export const shibaThemeCSSVars = {
  '--shiba-bg-primary': shibaTheme.colors.backgroundPrimary,
  '--shiba-bg-secondary': shibaTheme.colors.backgroundSecondary,
  '--shiba-bg-tertiary': shibaTheme.colors.backgroundTertiary,
  '--shiba-text-primary': shibaTheme.colors.textPrimary,
  '--shiba-text-secondary': shibaTheme.colors.textSecondary,
  '--shiba-text-muted': shibaTheme.colors.textMuted,
  '--shiba-accent': shibaTheme.colors.accent,
  '--shiba-accent-hover': shibaTheme.colors.accentHover,
  '--shiba-accent-muted': shibaTheme.colors.accentMuted,
  '--shiba-terminal-bg': shibaTheme.colors.terminal.background,
  '--shiba-terminal-window': shibaTheme.colors.terminal.window,
  '--shiba-terminal-border': shibaTheme.colors.terminal.border,
  '--shiba-terminal-prompt': shibaTheme.colors.terminal.prompt,
  '--shiba-success': shibaTheme.colors.success,
  '--shiba-warning': shibaTheme.colors.warning,
  '--shiba-error': shibaTheme.colors.error,
  '--shiba-info': shibaTheme.colors.info,
}

// Apply theme CSS variables to document root
export const applyShibaTheme = () => {
  const root = document.documentElement
  Object.entries(shibaThemeCSSVars).forEach(([property, value]) => {
    root.style.setProperty(property, value)
  })
}