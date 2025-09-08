# 🗺️ Trip Itinerary Terminal

A hacker-friendly trip planning application with terminal aesthetics, built for mobile-first travel use.

## ✨ Features

- 🖥️ **Terminal Interface**: Dark theme with green monospace text and command-line aesthetics
- 📱 **Mobile-First**: Optimized for phone use during travel
- 🔄 **Overview & Detail Views**: Switch between trip overview and detailed day planning
- ⚡ **Mandatory Activities**: Never miss important reservations and bookings
- 🎯 **Time Blocks**: Flexible activity planning with multiple options
- 📷 **Photo Spots**: Integrated photo opportunities with location coordinates
- 🌦️ **Weather Integration**: Real-time weather data for trip locations
- 🗺️ **Map Services**: Embedded maps and location sharing
- 📴 **Offline Support**: Service worker for offline access to cached data
- 🚀 **PWA Ready**: Progressive Web App with installable functionality

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **Vite** - Fast development and build tool  
- **Tailwind CSS** - Utility-first styling
- **Service Worker** - Offline functionality
- **Web Manifest** - PWA capabilities
- **GitHub Actions** - Automated deployment

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### GitHub Pages Deployment

1. **Fork/Clone this repository**
2. **Enable GitHub Pages** in repository settings
3. **Configure deployment source** to "GitHub Actions"
4. **Push to main branch** - deployment happens automatically

The GitHub Action will build and deploy your site to `https://yourusername.github.io/repository-name`

## 📊 Data Structure

Trip data is organized with this schema:

```javascript
{
  tripInfo: {
    title: "Trip Name",
    startDate: "2025-06-15",
    endDate: "2025-06-25",
    travelers: ["User"]
  },
  days: [
    {
      id: "day-1",
      date: "2025-06-15",
      city: "Paris",
      country: "France",
      weather: { temp: "22°C", condition: "Sunny", icon: "☀️" },
      accommodations: { /* hotel info */ },
      mandatoryActivities: [ /* must-do items */ ],
      timeBlocks: [ /* flexible activity options */ ],
      photoSpots: [ /* Instagram-worthy locations */ ]
    }
  ]
}
```

## 🔧 Configuration

### API Keys (Optional)

For enhanced functionality, add these environment variables:

```env
VITE_OPENWEATHER_API_KEY=your_weather_api_key
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

Without API keys, the app uses mock data and fallback services.

### Customization

- **Trip Data**: Edit `src/data/sampleData.js`
- **Colors**: Modify Tailwind classes in components
- **Branding**: Update `public/manifest.json` and add your icons

## 📱 Mobile Features

- **Responsive Design**: Adapts to all screen sizes
- **Touch Interactions**: Optimized for touch navigation  
- **Offline Access**: Cached data available without internet
- **PWA Installation**: Add to home screen for app-like experience
- **Terminal Emojis**: Visual enhancement for mobile readability

## 🗂️ Project Structure

```
src/
├── components/          # React components
│   ├── TripOverview.jsx    # Main overview page
│   └── DayDetail.jsx       # Detailed day view
├── data/               # Trip data
│   └── sampleData.js      # Sample trip structure
├── services/           # External APIs
│   ├── weatherService.js  # Weather integration
│   └── mapService.js      # Maps integration
├── utils/              # Utilities
│   └── serviceWorker.js   # PWA functionality
└── App.jsx             # Main application

public/
├── sw.js              # Service worker
├── manifest.json      # PWA manifest
└── icons/            # App icons (add your own)
```

## 🎨 Terminal Theme

The interface uses a modern terminal aesthetic:

- **Background**: Dark gray/black (`bg-gray-900`, `bg-black`)  
- **Primary Text**: Green (`text-green-400`)
- **Secondary Text**: Gray (`text-gray-400`)
- **Accents**: Yellow, blue, pink for different content types
- **Typography**: Monospace font (`font-mono`)
- **Window Controls**: macOS-style red/yellow/green dots

## 🔍 Features Deep Dive

### Overview Page
- Trip summary with dates and travelers
- Day cards showing weather, activities, and stats
- Click-to-navigate to detailed day views
- Terminal-style file listing aesthetic

### Day Detail Page
- Comprehensive day information
- Expandable time blocks with activity options
- Mandatory activities with confirmation codes
- Photo spots with coordinates
- Transportation details
- Weather information

### Offline Functionality
- Service worker caches essential resources
- Trip data available offline
- Mock weather data when disconnected
- Background sync when connection restored

## 🚢 Deployment Notes

- **Base Path**: Configured for relative paths (`base: './'`)
- **Asset Optimization**: Chunks separated for faster loading
- **Source Maps**: Disabled in production for smaller bundle
- **GitHub Actions**: Automated build and deployment
- **PWA Manifest**: Ready for app installation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (especially mobile)
5. Submit a pull request

## 📄 License

MIT License - feel free to use for your own trips!

## 🎯 Roadmap

- [ ] Real-time weather updates
- [ ] Google Maps integration
- [ ] Photo upload functionality
- [ ] Multi-language support
- [ ] Calendar integration
- [ ] Expense tracking
- [ ] Collaborative trip planning

---

**Happy travels! 🌍✈️**

*Built with ❤️ for hackers who travel*
