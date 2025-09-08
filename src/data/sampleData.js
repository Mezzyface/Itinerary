export const sampleTripData = {
  tripInfo: {
    title: "European Adventure 2025",
    startDate: "2025-06-15",
    endDate: "2025-06-25", 
    travelers: ["User"],
    coverImage: "/images/europe-cover.jpg"
  },
  days: [
    {
      id: "day-1",
      date: "2025-06-15",
      title: "Arrival in Paris",
      city: "Paris",
      country: "France", 
      coordinates: { lat: 48.8566, lng: 2.3522 },
      overview: "First day exploring the City of Light with essential sights and settling in.",
      weather: {
        temp: "18°C",
        condition: "Cloudy", 
        icon: "☁️"
      },
      accommodations: {
        name: "Hotel des Grands Boulevards",
        address: "17 Boulevard Poissonnière, 75002 Paris",
        checkIn: "15:00",
        checkOut: "11:00",
        confirmationCode: "HGB2024-789"
      },
      mandatoryActivities: [
        {
          id: "flight-1",
          time: "09:30",
          title: "🛬 Flight Landing CDG",
          duration: "30 minutes",
          location: "Charles de Gaulle Airport",
          status: "completed",
          notes: "Air France AF1234 - Terminal 2E",
          confirmationCode: "AF1234X",
          qrCode: "flight-qr-001"
        },
        {
          id: "hotel-1", 
          time: "15:00",
          title: "🏨 Hotel Check-in",
          duration: "30 minutes", 
          location: "Hotel des Grands Boulevards",
          status: "completed",
          notes: "Room 302 - Early check-in confirmed",
          confirmationCode: "HGB2024-789"
        }
      ],
      timeBlocks: [
        {
          id: "evening-block",
          timeRange: "19:00 - 22:00",
          title: "🌆 Evening Exploration",
          options: [
            {
              title: "🗼 Eiffel Tower Visit",
              duration: "2 hours",
              cost: "€25",
              photoSpots: ["Tower base", "Trocadéro viewpoint", "Seine reflection"],
              coordinates: { lat: 48.8584, lng: 2.2945 }
            },
            {
              title: "🚢 Seine River Cruise", 
              duration: "1.5 hours",
              cost: "€15",
              photoSpots: ["Notre-Dame view", "Louvre from river", "Sunset cruise"],
              coordinates: { lat: 48.8566, lng: 2.3412 }
            },
            {
              title: "🍷 Montmartre Dinner",
              duration: "3 hours", 
              cost: "€45",
              photoSpots: ["Sacré-Cœur steps", "Artist squares", "City panorama"],
              coordinates: { lat: 48.8867, lng: 2.3431 }
            }
          ]
        }
      ],
      transportation: [],
      photoSpots: [
        {
          name: "🗼 Eiffel Tower",
          coordinates: { lat: 48.8584, lng: 2.2945 },
          description: "Iconic iron tower, best shots from Trocadéro"
        },
        {
          name: "🖼️ Louvre Pyramid",
          coordinates: { lat: 48.8606, lng: 2.3376 }, 
          description: "Glass pyramid entrance, great reflections"
        },
        {
          name: "⛪ Notre-Dame Cathedral",
          coordinates: { lat: 48.8530, lng: 2.3499 },
          description: "Gothic architecture (exterior only)"
        }
      ]
    },
    {
      id: "day-2",
      date: "2025-06-16",
      title: "Museums & Monuments", 
      city: "Paris",
      country: "France",
      coordinates: { lat: 48.8606, lng: 2.3376 },
      overview: "Full day of iconic Parisian culture and history.",
      weather: {
        temp: "22°C",
        condition: "Sunny",
        icon: "☀️"
      },
      accommodations: {
        name: "Hotel des Grands Boulevards",
        address: "17 Boulevard Poissonnière, 75002 Paris"
      },
      mandatoryActivities: [
        {
          id: "tour-1",
          time: "09:00",
          title: "🏛️ Louvre Museum Timed Entry",
          duration: "3 hours",
          location: "Musée du Louvre",
          status: "upcoming",
          notes: "Pre-purchased tickets - Pyramid Entrance",
          confirmationCode: "LV-2024-4567",
          qrCode: "louvre-ticket-qr"
        }
      ],
      timeBlocks: [
        {
          id: "afternoon-block",
          timeRange: "14:00 - 17:00",
          title: "🎨 Afternoon Adventures",
          options: [
            {
              title: "🛍️ Champs-Élysées Shopping",
              duration: "3 hours",
              cost: "€0-200",
              photoSpots: ["Arc de Triomphe", "Louis Vuitton flagship", "Café terraces"],
              coordinates: { lat: 48.8738, lng: 2.2950 }
            },
            {
              title: "📚 Latin Quarter Walking Tour",
              duration: "2.5 hours", 
              cost: "€20",
              photoSpots: ["Panthéon", "Sorbonne University", "Shakespeare & Company"],
              coordinates: { lat: 48.8462, lng: 2.3372 }
            },
            {
              title: "🎨 Musée d'Orsay",
              duration: "2 hours",
              cost: "€16",
              photoSpots: ["Impressionist galleries", "Clock window view", "Sculpture halls"],
              coordinates: { lat: 48.8599, lng: 2.3266 }
            }
          ]
        }
      ],
      transportation: [],
      photoSpots: [
        {
          name: "🏆 Arc de Triomphe",
          coordinates: { lat: 48.8738, lng: 2.2950 },
          description: "Climb to the top for Champs-Élysées view"
        },
        {
          name: "⛪ Sacré-Cœur Basilica", 
          coordinates: { lat: 48.8867, lng: 2.3431 },
          description: "Montmartre hilltop, panoramic Paris views"
        }
      ]
    },
    {
      id: "day-3",
      date: "2025-06-17",
      title: "Travel to Rome",
      city: "Rome",
      country: "Italy", 
      coordinates: { lat: 41.9028, lng: 12.4964 },
      overview: "High-speed train journey to the Eternal City.",
      weather: {
        temp: "25°C",
        condition: "Partly Cloudy",
        icon: "⛅"
      },
      accommodations: {
        name: "Hotel Artemide",
        address: "Via Nazionale, 22, 00184 Roma",
        checkIn: "15:00",
        confirmationCode: "ART2025-002"
      },
      mandatoryActivities: [
        {
          id: "train-1",
          time: "08:15",
          title: "🚄 High-Speed Train to Rome",
          duration: "11h 30m",
          location: "Gare de Lyon, Paris → Roma Termini",
          status: "upcoming",
          notes: "TGV, Car 7, Seats 45A-45B",
          confirmationCode: "SNCF-TGV-789123"
        },
        {
          id: "rome-hotel-checkin",
          time: "20:00",
          title: "🏨 Hotel Check-in Rome",
          duration: "30 minutes",
          location: "Hotel Artemide",
          status: "upcoming",
          confirmationCode: "ART2025-002"
        }
      ],
      timeBlocks: [],
      transportation: [
        {
          type: "train",
          provider: "SNCF",
          departure: {
            location: "Gare de Lyon, Paris",
            time: "08:15"
          },
          arrival: {
            location: "Roma Termini",
            time: "19:45"
          },
          duration: "11h 30m",
          cost: "€89",
          confirmationCode: "SNCF-TGV-789123"
        }
      ],
      photoSpots: [
        {
          name: "🚄 Train Journey Views",
          coordinates: { lat: 46.0, lng: 6.0 },
          description: "Alps crossing, countryside landscapes"
        }
      ]
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