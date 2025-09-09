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
          id: "afternoon-optional",
          timeRange: "16:30 - 17:00",
          title: "🏛️ Optional Stop",
          options: [
            {
              title: "⛩️ Ebisu Shrine Visit",
              duration: "30 minutes",
              cost: "¥0",
              photoSpots: ["Shrine grounds", "Goshuin ceremony", "Traditional architecture"],
              coordinates: { lat: 35.6464, lng: 139.7103 },
              description: "Visit Ebisu Shrine to purchase Goshuincho and receive first goshuin",
              links: [
                { name: "Ebisu Shrine", url: "https://maps.app.goo.gl/6bjWpLGNd6te9iqE8" },
                { name: "Shrine Store", url: "https://maps.app.goo.gl/GsJNyLmWwg3JBntX9" },
                { name: "Shrine Site", url: "https://jinjamemo.com/archives/ebisujinja.html" }
              ],
              notes: "Optional stop if able to make it before 5pm"
            }
          ]
        }
      ],
      transportation: [],
      photoSpots: []
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