// Day 7 Data - Kyoto to Osaka Travel Day
// Tuesday, December 2, 2025

export const day7Data = {
  id: "day-7",
  date: "2025-12-02",
  title: "Kyoto to Osaka Travel Day",
  city: "Kyoto → Osaka",
  country: "Japan", 
  coordinates: { lat: 34.6937, lng: 135.5023 },
  overview: "🚄 Final Kyoto checkout and comfortable travel day to Osaka! Check into unique capsule hotel experience in Shinsaibashi district and begin exploring Osaka's vibrant food and entertainment culture.",
  dayPlan: [
  ],
  weather: {
    temp: "46-59°F",
    condition: "Cool December weather, perfect for city exploration", 
    icon: "🌤️"
  },
  accommodations: {
    name: "Capsule Hotel Asahi Plaza Shinsaibashi",
    address: "2-chōme-12-22 Nishishinsaibashi, Chuo Ward, Osaka, Osaka 542-0086, Japan",
    checkIn: "December 2, after 3:00 PM",
    checkOut: "December 4, checkout",
    confirmationCode: "HMK2TXC8PM",
    host: "カプセルホテル朝日プラザ心斎橋",
    notes: "Men's only capsule hotel in heart of Shinsaibashi entertainment district. Contact host for check-in instructions. WiFi details provided 48 hours before arrival.",
    totalCost: "$47.64",
    guestDetails: {
      guests: "1 guest (men's only facility)"
    },
    specialInstructions: "Contact host for check-in procedures. No pets, no parties/events allowed.",
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMK2TXC8PM" }
    ]
  },
  mandatoryActivities: [
    {
      id: "kyoto-checkout",
      time: "11:00",
      title: "🏠 Kyoto House Checkout",
      duration: "30 minutes",
      location: "Korean Mom's Home, Nakagyo Ward",
      status: "upcoming",
      notes: "Check out of cozy Korean mom's home, prepare for Osaka travel",
      confirmationCode: "HMCDYDAZEN"
    },
    {
      id: "kyoto-to-osaka-travel",
      time: "12:00",
      title: "🚄 Kyoto → Osaka Express Journey",
      duration: "2 hours",
      location: "Kyoto Station → Osaka Namba/Shinsaibashi",
      status: "upcoming",
      notes: "Comfortable express journey to Osaka. Store luggage and prepare for capsule hotel experience.",
      links: [
        { name: "Kyoto to Osaka Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00001756&goal=00001858&start_name=Kyoto&goal_name=Osaka&cid=&from=route_top_search_box&date_time=2025-12-02T12%3A00&ferry=false&taxi=false" }
      ]
    },
    {
      id: "osaka-checkin",
      time: "15:00",
      title: "🏨 Osaka Capsule Hotel Check-in",
      duration: "30 minutes",
      location: "Capsule Hotel Asahi Plaza Shinsaibashi",
      status: "upcoming",
      notes: "Check into unique capsule hotel experience in Shinsaibashi district",
      confirmationCode: "HMK2TXC8PM"
    }
  ],
  timeBlocks: [

  ],
  transportation: [
    {
      id: "kyoto-osaka-express",
      departure: {
        location: "Kyoto Station",
        time: "12:00"
      },
      arrival: {
        location: "Osaka Namba Station",
        time: "14:00"
      },
      provider: "JR/Private Railway",
      type: "Express Connection",
      duration: "2 hours",
      cost: "¥800-1,200",
      notes: "Multiple route options available - choose most convenient for Shinsaibashi destination",
      links: [
        { name: "Kyoto to Osaka Routes", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00001756&goal=00001858&start_name=Kyoto&goal_name=Osaka&cid=&from=route_top_search_box&date_time=2025-12-02T12%3A00&ferry=false&taxi=false" }
      ]
    }
  ],
  culturalTips: [
    "🏨 Capsule hotels: Unique Japanese accommodation experience with shared facilities",
    "🍜 Osaka food culture: Known as 'Kitchen of Japan' - street food paradise",
    "🏙️ Shinsaibashi: Premier shopping district with mix of traditional and modern",
    "🎌 Dotonbori: Famous entertainment district with neon signs and canal views",
    "💰 Street food etiquette: Pay attention to cash-only vendors and local customs"
  ],
  importantNotes: [
    "🏨 Capsule hotel is men's only facility - unique Japanese experience",
    "📱 Contact host for specific check-in instructions before arrival",
    "💰 Carry cash for street food vendors - many don't accept cards",
    "🎒 Store large luggage at hotel - capsules have limited space",
    "🚇 Learn basic Osaka transit system for easy district navigation",
    "📍 Shinsaibashi location perfect for exploring Osaka's core attractions"
  ]
};