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
  dayPlan: {
    morning: "Free morning in Osaka - explore city attractions and neighborhoods",
    afternoon: "12:00 - Osaka-style okonomiyaki lunch, 16:00 - Denden Town electronics shopping",
    evening: "Free evening for Dotonbori district and Osaka nightlife exploration"
  },
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

  ],
  timeBlocks: [
    {
      id: "osaka-okonomiyaki-lunch",
      timeRange: "12:00 - 13:30",
      title: "🍳 Osaka-style Okonomiyaki",
      options: [
        {
          title: "🍳 Authentic Osaka Okonomiyaki",
          duration: "1.5 hours",
          cost: "¥1,000-2,000",
          photoSpots: ["Okonomiyaki preparation", "Teppan cooking", "Local restaurant atmosphere", "Food close-ups"],
          coordinates: { lat: 34.6937, lng: 135.5023 },
          description: "Experience authentic Osaka-style okonomiyaki - the city's signature dish! Mixed batter with ingredients cooked together, topped with sauce and mayonnaise.",
          hours: "11:00-21:00 (typical)",
          links: [
            { name: "Okonomiyaki Guide", url: "https://www.osaka-info.jp/en/gourmet/okonomiyaki/" }
          ],
          notes: "Osaka-style: ingredients mixed into batter, cooked as one pancake. Try classic pork or seafood varieties!",
          breakdown: {
            "Basic okonomiyaki": "¥800-1,200",
            "Premium toppings": "¥200-500",
            "Drinks": "¥300-500"
          }
        }
      ]
    },
    {
      id: "denden-town",
      timeRange: "16:00 - 18:00", 
      title: "🎮 Denden Town Electronics District",
      options: [
        {
          title: "🎮 Denden Town Electronics District",
          duration: "2 hours",
          cost: "¥2,000-10,000+",
          photoSpots: ["Retro electronics shops", "Anime/manga stores", "Gaming arcades", "Vintage tech displays"],
          coordinates: { lat: 34.6564, lng: 135.5061 },
          description: "Osaka's premier electronics and otaku district - the Akihabara of Kansai! Multi-story buildings packed with electronics, retro gaming, anime goods, and tech treasures.",
          hours: "10:00-20:00 (most shops)",
          links: [
            { name: "Denden Town Map", url: "https://www.denden-town.or.jp/en/" },
            { name: "Electronics Shopping Guide", url: "https://www.japan-guide.com/e/e4013.html" }
          ],
          notes: "5-6 blocks of electronics paradise! Famous for retro gaming, PC parts, anime goods, and unique Japanese tech",
          breakdown: {
            "Retro games/consoles": "¥1,000-5,000",
            "Electronics/gadgets": "¥2,000-8,000+",
            "Anime merchandise": "¥500-3,000"
          }
        }
      ]
    }
  ],
  transportation: [
 
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