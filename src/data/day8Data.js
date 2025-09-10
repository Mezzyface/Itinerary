// Day 8 Data - Osaka Full Exploration Day
// Wednesday, December 3, 2025

export const day8Data = {
  id: "day-8",
  date: "2025-12-03",
  title: "Osaka Castle & Culture Day",
  city: "Osaka",
  country: "Japan", 
  coordinates: { lat: 34.6937, lng: 135.5023 },
  overview: "🏯 Full day exploring Osaka's historic castle, vibrant neighborhoods, and famous food scene! Experience traditional culture and modern city life in Japan's kitchen capital.",
  dayPlan: [
    "09:00 - Visit Osaka Castle and grounds",
    "12:00 - Lunch in Osaka Castle Park area", 
    "14:00 - Explore Sumiyoshi Taisha Shrine",
    "16:00 - Shopping in Namba district",
    "18:00 - Famous Osaka dinner experience",
    "20:00 - Evening entertainment in Dotonbori"
  ],
  weather: {
    temp: "46-59°F",
    condition: "Cool December weather, perfect for sightseeing", 
    icon: "🌤️"
  },
  accommodations: {
    name: "Capsule Hotel Asahi Plaza Shinsaibashi",
    address: "2-chōme-12-22 Nishishinsaibashi, Chuo Ward, Osaka, Osaka 542-0086, Japan",
    checkIn: "December 2, after 3:00 PM",
    checkOut: "December 4, checkout",
    confirmationCode: "HMK2TXC8PM",
    host: "カプセルホテル朝日プラザ心斎橋",
    notes: "Men's only capsule hotel in heart of Shinsaibashi entertainment district. Staying night of December 3.",
    totalCost: "$47.64",
    guestDetails: {
      guests: "1 guest (men's only facility)"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMK2TXC8PM" }
    ]
  },
  mandatoryActivities: [
    {
      id: "osaka-castle-visit",
      time: "09:00",
      title: "🏯 Osaka Castle Exploration",
      duration: "3 hours",
      location: "Osaka Castle Park",
      status: "upcoming",
      notes: "Historic castle with museum, beautiful grounds, and city views from the top",
      links: [
        { name: "Osaka Castle Official Site", url: "https://www.osakacastle.net/english/" },
        { name: "Castle Location", url: "https://maps.app.goo.gl/osaka-castle-location" }
      ]
    }
  ],
  timeBlocks: [
    {
      id: "osaka-castle-complex",
      timeRange: "09:00 - 12:00",
      title: "🏯 Osaka Castle & Grounds",
      options: [
        {
          title: "🏯 Osaka Castle Museum & Tower",
          duration: "3 hours",
          cost: "¥600",
          photoSpots: ["Castle exterior", "City views from top", "Museum exhibits", "Traditional architecture"],
          coordinates: { lat: 34.6873, lng: 135.5262 },
          description: "Historic castle reconstruction with museum and observation deck offering panoramic city views",
          hours: "09:00-12:00",
          breakdown: {
            "Castle Admission": "¥600"
          },
          notes: "One of Japan's most famous castles, rebuilt after WWII with modern museum inside"
        }
      ]
    },
    {
      id: "sumiyoshi-shrine",
      timeRange: "14:00 - 16:00",
      title: "⛩️ Sumiyoshi Taisha Shrine",
      options: [
        {
          title: "⛩️ Ancient Shrine Complex",
          duration: "2 hours",
          cost: "Free",
          photoSpots: ["Traditional shrine architecture", "Sacred bridges", "Prayer rituals", "Ancient buildings"],
          coordinates: { lat: 34.6162, lng: 135.4937 },
          description: "One of Japan's oldest Shinto shrines with unique architectural style and peaceful atmosphere",
          hours: "14:00-16:00",
          notes: "Over 1,800 years old, famous for its distinctive architectural style without Chinese influence"
        }
      ]
    },
    {
      id: "namba-shopping",
      timeRange: "16:00 - 18:00", 
      title: "🛍️ Namba District Shopping",
      options: [
        {
          title: "🛍️ Namba Shopping Streets",
          duration: "2 hours",
          cost: "¥2,000-5,000",
          photoSpots: ["Shopping arcades", "Local stores", "Urban atmosphere", "Street scenes"],
          coordinates: { lat: 34.6681, lng: 135.5006 },
          description: "Explore covered shopping streets and modern retail areas in Osaka's entertainment district",
          hours: "16:00-18:00",
          breakdown: {
            "Shopping/Souvenirs": "¥2,000-5,000"
          },
          notes: "Great for souvenirs, local goods, and experiencing Osaka's commercial energy"
        }
      ]
    },
    {
      id: "dotonbori-evening",
      timeRange: "20:00 - 22:00",
      title: "🌃 Dotonbori Night Experience", 
      options: [
        {
          title: "🌃 Iconic Dotonbori Canal Walk",
          duration: "2 hours",
          cost: "¥1,000-2,000",
          photoSpots: ["Neon signs", "Canal reflections", "Glico running man sign", "Night atmosphere"],
          coordinates: { lat: 34.6686, lng: 135.5020 },
          description: "Experience Osaka's most famous entertainment district with iconic neon signs and canal views",
          hours: "20:00-22:00",
          breakdown: {
            "Drinks/Snacks": "¥1,000-2,000"
          },
          notes: "Must-see iconic Osaka experience - perfect for evening photos and people watching"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "hotel-to-castle",
      departure: {
        location: "Shinsaibashi (Capsule Hotel)",
        time: "08:45"
      },
      arrival: {
        location: "Osaka Castle Park",
        time: "09:00"
      },
      provider: "Osaka Metro",
      type: "Subway",
      duration: "15 minutes", 
      cost: "¥200",
      notes: "Short subway ride to castle area"
    }
  ],
  culturalTips: [
    "🏯 Osaka Castle: Reconstruction but contains authentic historical artifacts",
    "⛩️ Sumiyoshi Taisha: Bow twice, clap twice, bow once at shrines",
    "🍜 Osaka cuisine: Try local specialties like okonomiyaki and takoyaki",
    "🛍️ Shopping etiquette: Many stores are cash-only, especially traditional shops",
    "🌃 Dotonbori: Best experienced at night when neon signs are illuminated"
  ],
  importantNotes: [
    "🏯 Osaka Castle closes at 5 PM - visit early in the day",
    "💰 Carry cash for small vendors and traditional shops",
    "📱 Download Osaka Metro app for easy subway navigation",
    "🍜 Dotonbori has many famous food spots - come hungry!",
    "📷 Glico sign in Dotonbori is must-see photo opportunity",
    "🚇 JR Osaka Loop Line connects major attractions efficiently"
  ]
};