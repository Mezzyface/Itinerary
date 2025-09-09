// Day 9 Data - Osaka Departure Day  
// Thursday, December 4, 2025

export const day9Data = {
  id: "day-9",
  date: "2025-12-04",
  title: "Osaka Departure Day",
  city: "Osaka",
  country: "Japan", 
  coordinates: { lat: 34.6937, lng: 135.5023 },
  overview: "✈️ Final day in Japan! Leisurely morning in Osaka, capsule hotel checkout, and departure preparations. Last chance for souvenir shopping and favorite Japanese experiences.",
  dayPlan: [
    "08:00 - Final Japanese breakfast",
    "10:00 - Checkout from capsule hotel",
    "11:00 - Last-minute souvenir shopping",
    "13:00 - Final meal in Japan",
    "15:00 - Departure preparations",
    "Evening - Travel to airport or next destination"
  ],
  weather: {
    temp: "8-15°C (46-59°F)",
    condition: "Cool December morning, good for final exploration", 
    icon: "🌤️"
  },
  accommodations: {
    name: "Capsule Hotel Asahi Plaza Shinsaibashi",
    address: "2-chōme-12-22 Nishishinsaibashi, Chuo Ward, Osaka, Osaka 542-0086, Japan",
    checkIn: "Concluding stay from December 2",
    checkOut: "December 4, 10:00 AM (TODAY)",
    confirmationCode: "HMK2TXC8PM",
    host: "カプセルホテル朝日プラザ心斎橋",
    notes: "Final checkout from unique capsule hotel experience. Ensure all belongings packed.",
    totalCost: "$47.64 (completed stay)",
    guestDetails: {
      guests: "1 guest (men's only facility)"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMK2TXC8PM" }
    ]
  },
  mandatoryActivities: [
    {
      id: "capsule-hotel-checkout",
      time: "10:00",
      title: "🏨 Final Hotel Checkout",
      duration: "30 minutes",
      location: "Capsule Hotel Asahi Plaza",
      status: "upcoming",
      notes: "Complete checkout from capsule hotel. Ensure all belongings packed and nothing left behind.",
      confirmationCode: "HMK2TXC8PM"
    }
  ],
  timeBlocks: [
    {
      id: "final-breakfast",
      timeRange: "08:00 - 09:30",
      title: "🍱 Final Japanese Breakfast",
      options: [
        {
          title: "🍱 Traditional Japanese Breakfast",
          duration: "1.5 hours",
          cost: "¥1,000-1,500",
          photoSpots: ["Traditional breakfast setup", "Final meal photos", "Local morning atmosphere"],
          coordinates: { lat: 34.6721, lng: 135.5016 },
          description: "Enjoy a final traditional Japanese breakfast before departure",
          hours: "08:00-09:30",
          breakdown: {
            "Breakfast": "¥1,000-1,500"
          },
          notes: "Savor last authentic Japanese meal - perfect reflection on your journey"
        }
      ]
    },
    {
      id: "final-shopping",
      timeRange: "11:00 - 13:00",
      title: "🛍️ Final Souvenir Shopping",
      options: [
        {
          title: "🛍️ Last-Minute Souvenir Hunt",
          duration: "2 hours", 
          cost: "¥3,000-8,000",
          photoSpots: ["Final purchases", "Souvenir displays", "Shopping memories"],
          coordinates: { lat: 34.6721, lng: 135.5016 },
          description: "Final opportunity for souvenir shopping in Shinsaibashi area before departure",
          hours: "11:00-13:00",
          breakdown: {
            "Souvenirs/Gifts": "¥3,000-8,000"
          },
          notes: "Last chance for unique Japanese items, local snacks, or forgot to buy gifts"
        }
      ]
    },
    {
      id: "farewell-meal",
      timeRange: "13:00 - 14:30",
      title: "🍜 Farewell Meal",
      options: [
        {
          title: "🍜 Final Japanese Meal",
          duration: "1.5 hours",
          cost: "¥2,000-3,500",
          photoSpots: ["Final meal", "Restaurant atmosphere", "Last food memories"],
          coordinates: { lat: 34.6721, lng: 135.5016 },
          description: "Memorable final meal in Japan - choose your favorite discovered cuisine",
          hours: "13:00-14:30",
          breakdown: {
            "Final Meal": "¥2,000-3,500"
          },
          notes: "Perfect time to revisit your favorite Japanese dish from the trip"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "departure-transport",
      departure: {
        location: "Shinsaibashi/Osaka Center", 
        time: "15:00+"
      },
      arrival: {
        location: "Airport/Next Destination",
        time: "Variable"
      },
      provider: "Various Options",
      type: "Airport Express/Shinkansen",
      duration: "1-3 hours depending on destination",
      cost: "¥1,000-15,000",
      notes: "Multiple departure options - Kansai Airport, Haneda/Narita, or domestic destinations",
      links: [
        { name: "Osaka to Airport Routes", url: "https://www.kansai-airport.or.jp/en/access/" }
      ]
    }
  ],
  culturalTips: [
    "✈️ Airport departure: Arrive 2-3 hours early for international flights",
    "🎁 Souvenirs: Pack carefully to avoid luggage weight limits",
    "💰 Remaining yen: Use at airport or convert back if needed",
    "📱 Data/SIM: Return rental devices if applicable",
    "🙏 Farewell customs: Simple bow and 'arigatou gozaimashita' (thank you very much)"
  ],
  importantNotes: [
    "🏨 Checkout exactly at 10:00 AM from capsule hotel",
    "🎒 Double-check all belongings - easy to forget items in capsule spaces",
    "💰 Use remaining Japanese yen before departure",
    "📱 Arrange transportation to airport/next destination in advance",
    "🎁 Pack souvenirs carefully - some items may be restricted on flights",
    "📋 Keep all receipts for tax refund if applicable",
    "🙏 Reflect on amazing 9-day Japan adventure - you did it!"
  ]
};