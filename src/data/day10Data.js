export const day10Data = {
  id: 10,
  title: "Travel to Fukuoka & Arrival",
  date: "2025-12-05",
  city: "Fukuoka",
  country: "Japan",
  overview: "Travel from Osaka to Fukuoka and check into Hakata accommodation",
  weather: {
    icon: "🌤️",
    temp: "54°F",
    condition: "Partly cloudy"
  },
  accommodations: {
    name: "House in Hakata Ward",
    address: "Hakata Ward, Fukuoka, Japan",
    checkIn: "December 4, after 3:00 PM",
    checkOut: "December 6, before 11:00 AM",
    confirmationCode: "HMMK8QPSFC",
    host: "Fukuoka Host",
    notes: "House in Hakata Ward, Fukuoka. Staying night of December 5.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMMK8QPSFC" }
    ]
  },
  dayPlan: {
    morning: "Free morning in Fukuoka - explore local neighborhoods and culture",
    afternoon: "12:00 - Hakata tonkotsu ramen, 15:00 - Canal City Hakata shopping",
    evening: "18:00 - Hikari no Machi HAKATA Christmas Market experience"
  },
  mandatoryActivities: [],
  timeBlocks: [
    {
      id: "fukuoka-tonkotsu-ramen",
      timeRange: "12:00 - 13:30",
      title: "🍜 Fukuoka Tonkotsu Ramen",
      options: [
        {
          title: "🍜 Authentic Hakata Tonkotsu Ramen",
          duration: "1.5 hours",
          cost: "¥800-1,500",
          photoSpots: ["Rich tonkotsu broth", "Thin noodles", "Traditional ramen shop", "Food preparation"],
          coordinates: { lat: 33.5904, lng: 130.4017 },
          description: "Experience authentic Hakata-style tonkotsu ramen - Fukuoka's signature dish! Rich, creamy pork bone broth with thin straight noodles.",
          hours: "11:00-22:00 (typical)",
          links: [
            { name: "Fukuoka Ramen Guide", url: "https://www.fukuoka-now.com/en/food/ramen/" }
          ],
          notes: "Birthplace of tonkotsu ramen! Try traditional toppings like chashu pork, green onions, and pickled mustard greens",
          breakdown: {
            "Basic tonkotsu ramen": "¥600-900",
            "Extra toppings": "¥100-300",
            "Gyoza/sides": "¥200-400"
          }
        }
      ]
    },
    {
      id: "canal-city-hakata",
      timeRange: "15:00 - 17:30",
      title: "🏢 Canal City Hakata",
      options: [
        {
          title: "🏢 Canal City Hakata Shopping & Entertainment",
          duration: "2.5 hours",
          cost: "¥2,000-8,000+",
          photoSpots: ["Canal waterway", "Fountain shows", "Modern architecture", "Shopping areas"],
          coordinates: { lat: 33.5900, lng: 130.4111 },
          description: "Explore Fukuoka's premier shopping and entertainment complex with its famous artificial canal, fountain shows, and unique architecture.",
          hours: "10:00-21:00 (shops), 10:00-23:00 (restaurants)",
          links: [
            { name: "Canal City Official", url: "https://canalcity.co.jp/en" },
            { name: "Shopping Guide", url: "https://www.fukuoka-now.com/en/shopping/canal-city/" }
          ],
          notes: "Famous for hourly fountain shows and the indoor canal running through the complex. Great for shopping and entertainment!",
          breakdown: {
            "Shopping": "¥1,000-5,000+",
            "Entertainment": "¥500-2,000",
            "Food court": "¥800-1,500"
          }
        }
      ]
    },
    {
      id: "christmas-market-hakata",
      timeRange: "18:00 - 20:00",
      title: "🎄 Christmas Market Experience",
      options: [
        {
          title: "🎄 Hikari no Machi HAKATA Christmas Market",
          duration: "2 hours",
          cost: "¥1,000-3,000",
          photoSpots: ["Christmas illuminations", "Market stalls", "Holiday decorations", "Festive atmosphere"],
          coordinates: { lat: 33.5904, lng: 130.4017 },
          description: "Experience the magical Christmas Market at Hikari no Machi HAKATA with festive illuminations, holiday treats, and seasonal atmosphere.",
          hours: "17:00-21:00 (typical for Christmas markets)",
          links: [
            { name: "Hakata Christmas Events", url: "https://www.welcomekyushu.com/event/" }
          ],
          notes: "Perfect timing in early December for Christmas market season! Enjoy mulled wine, Christmas treats, and holiday shopping.",
          breakdown: {
            "Food & drinks": "¥800-1,500",
            "Christmas items": "¥500-2,000",
            "Entry": "Free"
          }
        }
      ]
    }
  ],
  transportation: [

  ]
};