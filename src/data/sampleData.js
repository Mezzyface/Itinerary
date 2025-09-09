export const sampleTripData = {
  tripInfo: {
    title: "Tokyo Shibuya Experience",
    startDate: "2024-11-26",
    endDate: "2024-11-27", 
    travelers: ["User"],
    coverImage: "/images/tokyo-cover.jpg"
  },
  days: [
    {
      id: "day-1",
      date: "2024-11-26",
      title: "Tokyo Shibuya Stay",
      city: "Shibuya City",
      country: "Japan", 
      coordinates: { lat: 35.6585, lng: 139.7016 },
      overview: "Exploring Tokyo's vibrant Shibuya district with easy access to Ebisu and nearby attractions.",
      weather: {
        temp: "15°C",
        condition: "Clear", 
        icon: "☀️"
      },
      accommodations: {
        name: "恵比寿駅から徒歩4分/渋谷駅まで徒歩圏内/家具家電付/HJ SHIBUYA b01",
        address: "3-chōme-20-10 Higashi, Shibuya City, Tokyo Prefecture 150-0011, Japan",
        checkIn: "16:00",
        checkOut: "10:00",
        confirmationCode: "HMRDDYA2N4",
        host: "ライワマンション",
        notes: "Self check-in with lockbox, 4 min walk from Ebisu Station",
        totalCost: "$106.02"
      },
      mandatoryActivities: [
        {
          id: "airbnb-checkin",
          time: "16:00",
          title: "🏠 Airbnb Check-in",
          duration: "30 minutes",
          location: "HJ SHIBUYA b01",
          status: "upcoming",
          notes: "Self check-in with lockbox, 4 min walk from Ebisu Station",
          confirmationCode: "HMRDDYA2N4"
        }
      ],
      timeBlocks: [
        {
          id: "afternoon-block",
          timeRange: "17:00 - 20:00",
          title: "🌃 Shibuya Exploration",
          options: [
            {
              title: "🚶‍♂️ Shibuya Crossing Experience",
              duration: "1 hour",
              cost: "¥0",
              photoSpots: ["Famous crossing", "Sky view", "Hachiko statue"],
              coordinates: { lat: 35.6598, lng: 139.7006 }
            },
            {
              title: "🛍️ Center Gai Shopping", 
              duration: "2 hours",
              cost: "¥2000-5000",
              photoSpots: ["Neon lights", "Street fashion", "Arcade games"],
              coordinates: { lat: 35.6617, lng: 139.6980 }
            },
            {
              title: "🍜 Ebisu Ramen Tour",
              duration: "2 hours", 
              cost: "¥1500",
              photoSpots: ["Authentic ramen shops", "Local atmosphere", "Food shots"],
              coordinates: { lat: 35.6464, lng: 139.7103 }
            }
          ]
        },
        {
          id: "evening-block",
          timeRange: "20:00 - 23:00",
          title: "🌙 Tokyo Nightlife",
          options: [
            {
              title: "🍻 Shibuya Izakaya Experience",
              duration: "2.5 hours",
              cost: "¥3000",
              photoSpots: ["Traditional pub", "Local crowd", "Japanese dishes"],
              coordinates: { lat: 35.6580, lng: 139.7016 }
            },
            {
              title: "🎤 Karaoke in Shibuya", 
              duration: "2 hours",
              cost: "¥2500",
              photoSpots: ["Karaoke booth", "Group fun", "Tokyo night views"],
              coordinates: { lat: 35.6598, lng: 139.7006 }
            },
            {
              title: "🌃 Tokyo Tower Night View",
              duration: "3 hours", 
              cost: "¥3000",
              photoSpots: ["Tokyo skyline", "Tower illumination", "City panorama"],
              coordinates: { lat: 35.6586, lng: 139.7454 }
            }
          ]
        }
      ],
      transportation: [],
      photoSpots: [
        {
          name: "🚶‍♂️ Shibuya Crossing",
          coordinates: { lat: 35.6598, lng: 139.7006 },
          description: "World's busiest pedestrian crossing, best shots from sky view"
        },
        {
          name: "🐕 Hachiko Statue",
          coordinates: { lat: 35.6590, lng: 139.7005 }, 
          description: "Famous loyal dog statue, perfect for tourist photos"
        },
        {
          name: "🌃 Shibuya Sky",
          coordinates: { lat: 35.6585, lng: 139.7016 },
          description: "Rooftop observation deck with panoramic Tokyo views"
        },
        {
          name: "🍜 Ebisu Food Scene",
          coordinates: { lat: 35.6464, lng: 139.7103 },
          description: "Authentic local restaurants and street food"
        }
      ]
    },
    {
      id: "day-2",
      date: "2024-11-27",
      title: "Departure Day",
      city: "Shibuya City",
      country: "Japan", 
      coordinates: { lat: 35.6585, lng: 139.7016 },
      overview: "Final morning in Tokyo before departure.",
      weather: {
        temp: "14°C",
        condition: "Partly Cloudy", 
        icon: "⛅"
      },
      accommodations: {
        name: "恵比寿駅から徒歩4分/渋谷駅まで徒歩圏内/家具家電付/HJ SHIBUYA b01",
        address: "3-chōme-20-10 Higashi, Shibuya City, Tokyo Prefecture 150-0011, Japan",
        checkOut: "10:00",
        confirmationCode: "HMRDDYA2N4"
      },
      mandatoryActivities: [
        {
          id: "airbnb-checkout", 
          time: "10:00",
          title: "🎒 Checkout & Departure",
          duration: "30 minutes", 
          location: "HJ SHIBUYA b01",
          status: "upcoming",
          notes: "Checkout by 10:00 AM, leave keys in lockbox",
          confirmationCode: "HMRDDYA2N4"
        }
      ],
      timeBlocks: [],
      transportation: [],
      photoSpots: []
    }
  ],
  integrations: {
    weather: {
      api: "OpenWeatherMap",
      key: "your-api-key-here"
    },
    maps: {
      api: "Google Maps Embed", 
      key: "your-maps-key-here"
    },
    photos: {
      api: "Unsplash",
      key: "your-unsplash-key-here"
    },
    qr: {
      generator: "QRServer API",
      baseUrl: "https://api.qrserver.com/v1/create-qr-code/"
    }
  }
};