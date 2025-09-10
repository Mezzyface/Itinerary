// Day 9 Data - Osaka Departure Day  
// Thursday, December 4, 2025

export const day9Data = {
  id: "day-9",
  date: "2025-12-04",
  title: "OpenBook Tokyo Evening",
  city: "Osaka",
  country: "Japan", 
  coordinates: { lat: 34.6937, lng: 135.5023 },
  overview: "Evening visit to OpenBook Tokyo, a unique bookstore and cultural space in Shibuya",
  dayPlan: [
    "Relaxed day in Osaka",
    "Evening travel to Tokyo",
    "Visit OpenBook Tokyo in Shibuya",
    "Explore bookstore and cultural space"
  ],
  weather: {
    temp: "46-59°F",
    condition: "Cool December morning, good for final exploration", 
    icon: "🌤️"
  },
  accommodations: {
    name: "House in Hakata Ward",
    address: "Hakata Ward, Fukuoka, Japan",
    checkIn: "December 4, after 3:00 PM",
    checkOut: "December 6, before 11:00 AM",
    confirmationCode: "HMMK8QPSFC",
    host: "Fukuoka Host",
    notes: "House in Hakata Ward, Fukuoka. Staying night of December 4.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMMK8QPSFC" }
    ]
  },
  mandatoryActivities: [
    {
      id: "openbook-tokyo-visit",
      time: "7:00 PM",
      title: "OpenBook Tokyo Visit",
      duration: "2 hours",
      location: "Shibuya, Tokyo",
      status: "upcoming",
      notes: "Visit OpenBook Tokyo - unique bookstore and cultural space combining books, art, and community",
      links: [{
        name: "OpenBook Tokyo",
        url: "https://www.openbook.tokyo/pages/about"
      }]
    }
  ],
  timeBlocks: [
    {
      id: "openbook-tokyo-experience",
      timeRange: "7:00 PM - 9:00 PM",
      title: "OpenBook Tokyo Cultural Experience",
      options: [
        {
          title: "Complete OpenBook Experience",
          duration: "2 hours",
          cost: "Free entry + purchases",
          description: "Explore this unique bookstore and cultural space that combines literature, art, and community",
          notes: "OpenBook Tokyo is more than a bookstore - it's a cultural hub with curated books, events, and creative atmosphere",
          photoSpots: ["Unique book displays", "Art installations", "Cultural space interior"],
          coordinates: { lat: 35.6598, lng: 139.7007 },
          breakdown: {
            "Books/Items": "¥2,000-5,000 (optional)"
          },
          links: [{
            name: "OpenBook Tokyo About",
            url: "https://www.openbook.tokyo/pages/about"
          }]
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR",
      type: "Shinkansen",
      departure: {
        location: "Osaka",
        time: "4:00 PM"
      },
      arrival: {
        location: "Tokyo",
        time: "6:30 PM"
      },
      duration: "2.5 hours",
      cost: "¥13,320",
      notes: "Shinkansen to Tokyo, then local train to Shibuya for OpenBook visit"
    },
    {
      provider: "JR Yamanote Line",
      type: "Local train",
      departure: {
        location: "Tokyo Station",
        time: "6:45 PM"
      },
      arrival: {
        location: "Shibuya Station",
        time: "7:00 PM"
      },
      duration: "15 minutes",
      cost: "¥160",
      notes: "Short ride to Shibuya for OpenBook Tokyo visit"
    }
  ],
  culturalTips: [
    "📚 Bookstore etiquette: Browse quietly and respectfully",
    "🎨 Cultural spaces: Take time to appreciate the curated atmosphere",
    "📱 Photography: Ask permission before taking photos of displays",
    "🛋️ Evening timing: Perfect time to explore without crowds",
    "📝 Book selections: Many English books available alongside Japanese titles"
  ],
  importantNotes: [
    "📚 OpenBook Tokyo combines bookstore with cultural events and art",
    "🚆 Travel from Osaka in afternoon to arrive for evening visit",
    "🌇 Perfect evening activity in Shibuya district",
    "📚 Unique selection of books, magazines, and cultural items",
    "🎨 Often features art installations and community events",
    "🛋️ Less crowded in evening - more peaceful browsing experience",
    "📍 Located in vibrant Shibuya area with nearby dining options"
  ]
};