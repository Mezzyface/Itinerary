export const day14Data = {
  id: 14,
  title: "Return to Tokyo & Shinjuku Arrival",
  date: "2025-12-09",
  city: "Tokyo",
  country: "Japan",
  overview: "Travel from Hiroshima back to Tokyo and settle into Shinjuku accommodation",
  weather: {
    icon: "🌤️",
    temp: "46°F",
    condition: "Partly cloudy"
  },
  accommodations: {
    name: "Apartment in Shinjuku",
    address: "Shinjuku, Tokyo, Japan",
    checkIn: "December 8, after 3:00 PM",
    checkOut: "December 11, before 11:00 AM",
    confirmationCode: "HM5S8ARHRQ",
    host: "Tokyo Host",
    notes: "Apartment in Shinjuku, Tokyo. Staying night of December 9.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM5S8ARHRQ" }
    ]
  },
  dayPlan: {
    morning: "Free morning in Tokyo - full day exploration available",
    afternoon: "Tokyo neighborhood exploration - Shinjuku, Harajuku, or other districts",
    evening: "Free evening for Tokyo dining, shopping, or entertainment"
  },
  mandatoryActivities: [],
  timeBlocks: [
    {
      id: "pokemon-cafe-lunch",
      timeRange: "12:00 - 14:00",
      title: "🎮 Pokemon Cafe Experience",
      options: [
        {
          title: "🎮 Pokemon Cafe Nihonbashi",
          duration: "2 hours",
          cost: "¥3,000-5,000",
          photoSpots: ["Pokemon-themed dishes", "Character decorations", "Interactive dining experience", "Limited edition merchandise"],
          coordinates: { lat: 35.6812, lng: 139.7671 },
          description: "Experience the official Pokemon Cafe with character-themed dishes, interactive dining, and exclusive merchandise. Reservations highly recommended!",
          hours: "10:30-22:00 (reservation required)",
          links: [
            { name: "Pokemon Cafe Official", url: "https://www.pokemoncenter.com/cafe" },
            { name: "Reservation System", url: "https://reserve.pokemon-cafe.jp/" },
            { name: "Navigate to Cafe", url: "https://maps.app.goo.gl/pokemon-cafe-nihonbashi" }
          ],
          notes: "Must make reservation in advance! Features seasonal Pokemon-themed menu items and exclusive cafe merchandise.",
          breakdown: {
            "Pokemon-themed meal": "¥2,000-3,500",
            "Drinks": "¥800-1,200",
            "Merchandise": "¥1,000-3,000+"
          }
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR",
      type: "Shinkansen Nozomi",
      departure: {
        location: "Hiroshima Station",
        time: "10:33 AM"
      },
      arrival: {
        location: "Tokyo Station",
        time: "2:27 PM"
      },
      duration: "3 hours 54 minutes",
      cost: "¥19,440",
      notes: "Transfer to JR Yamanote Line to Shinjuku (15 mins)",
      links: [
        { 
          name: "Hiroshima to Shinjuku Route", 
          url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00002397&goal=00004254&start_name=Hiroshima&goal_name=Shinjuku&cid=&from=route_top_search_box&date_time=2025-12-05T10%3A00"
        }
      ]
    }
  ]
};