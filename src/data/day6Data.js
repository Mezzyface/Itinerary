// Day 6 Data - Kyoto - Fushimi Inari Goshuin Marathon
// Monday, December 1, 2025

export const day6Data = {
  id: "day-6",
  date: "2025-12-01",
  title: "Fushimi Inari Goshuin Marathon",
  city: "Kyoto - Fushimi District",
  country: "Japan", 
  coordinates: { lat: 34.967146, lng: 135.772695 },
  overview: "🦊 Early morning pilgrimage to Fushimi Inari Taisha for the ultimate goshuin collection experience! Beat the crowds with dawn arrival, collect multiple sacred stamps throughout the massive shrine complex, and experience the thousand torii gates in peaceful morning light.",
  dayPlan: [
    "05:30 - Early morning departure to Fushimi Inari",
    "06:00 - Dawn arrival and torii gate exploration",
    "08:00 - Goshuin collection throughout shrine complex",
    "11:00 - Complete pilgrimage to mountain summit",
    "12:00 - Lunch break after shrine marathon",
    "15:30 - Visit Kyoto International Manga Museum",
    "17:00 - Final temple visits and departure preparation"
  ],
  weather: {
    temp: "6-14°C (43-57°F)",
    condition: "Cool morning, perfect for shrine exploration", 
    icon: "🌅"
  },
  accommodations: {
    name: "FreeBreakfast&WIFI*NEAR→Nijojo*CozyKoreanMom'sHome",
    address: "180 Jurakumawari Nishimachi, Nakagyō-ku, Kyōto-shi, Kyōto-fu 604-8402, Japan",
    checkIn: "Continuing stay from November 30",
    checkOut: "December 2, 11:00 AM (final checkout)",
    confirmationCode: "HMCDYDAZEN",
    host: "寧保 (Ningbao)",
    notes: "Final day at cozy Korean mom's home near Nijo Castle. Free breakfast before dawn departure to Fushimi Inari. Local Kyoto tax ¥200 per night included.",
    totalCost: "Included in $174.11 booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMCDYDAZEN" }
    ]
  },
  mandatoryActivities: [
    {
      id: "early-departure-fushimi",
      time: "05:30",
      title: "🌅 Early Departure for Fushimi Inari",
      duration: "30 minutes",
      location: "Kyoto Airbnb → Fushimi Inari",
      status: "upcoming",
      notes: "🚨 CRITICAL: Ultra-early departure essential for magical crowd-free experience at dawn",
      links: [
        { name: "Kyoto to Inari Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00005591&goal=00005653&start_name=Kyoto&goal_name=Inari&cid=&from=route_top_search_box&date_time=2025-12-01T05%3A30&ferry=false&taxi=false" }
      ]
    },
    {
      id: "fushimi-inari-marathon",
      time: "06:00",
      title: "🦊 Fushimi Inari Complete Experience",
      duration: "5 hours",
      location: "Fushimi Inari Taisha Complex",
      status: "upcoming",
      notes: "Complete shrine complex exploration with multiple goshuin collection points - magical at dawn, unbearably crowded after 10 AM",
      links: [
        { name: "Fushimi Inari Guide", url: "https://jinja-gosyuin.com/fushimiinaritaisya/" },
        { name: "Navigate to Shrine", url: "https://maps.app.goo.gl/ddZnnVp5dNGqjFLv7" }
      ]
    },
    {
      id: "manga-museum-mandatory",
      time: "15:30",
      title: "📚 Kyoto International Manga Museum Visit",
      duration: "1.5 hours",
      location: "Kyoto International Manga Museum",
      status: "upcoming",
      notes: "Pre-booked online reservation for guaranteed entry. Explore Japan's manga culture with over 300,000 volumes.",
      links: [
        { name: "Kyoto Manga Museum", url: "https://kyotomm.jp/en/" },
        { name: "Online Ticket Reservation", url: "https://kyotomm.jp/en/visit/tickets/" }
      ]
    }
  ],
  timeBlocks: [
    {
      id: "dawn-torii-experience",
      timeRange: "06:00 - 07:30",
      title: "🌅 Dawn Torii Gates Experience",
      options: [
        {
          title: "🦊 Thousand Torii Gates at Sunrise",
          duration: "1.5 hours",
          cost: "Free",
          photoSpots: ["Sunrise through torii", "Empty pathway", "Fox statues in dawn light", "Mystical morning atmosphere"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Experience the famous thousand torii gates in complete solitude during magical dawn hours",
          hours: "06:00-07:30",
          notes: "This is when Fushimi Inari is at its most magical - completely empty and mystical"
        }
      ]
    },
    {
      id: "fushimi-goshuin-marathon",
      timeRange: "07:30 - 11:00",
      title: "📿 Complete Fushimi Goshuin Collection",
      options: [
        {
          title: "📿 Goshuin #1: Main Shrine Office",
          duration: "30 minutes",
          cost: "¥500",
          photoSpots: ["Main shrine buildings", "Fox guardian statues", "Traditional architecture", "Morning worshippers"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "First goshuin at the main shrine office - start of the Fushimi marathon",
          hours: "07:30-08:00",
          links: [
            { name: "Main Office Location", url: "https://maps.app.goo.gl/PizR8tyZ4XapWcCH9" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #2: Worship Hall",
          duration: "30 minutes",
          cost: "¥500",
          photoSpots: ["Worship ceremonies", "Sacred fox guardians", "Traditional rituals", "Morning prayers"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Second goshuin at the main worship hall with unique ceremonial atmosphere",
          hours: "08:00-08:30",
          links: [
            { name: "Worship Hall", url: "https://maps.app.goo.gl/1gtRGdNuaRJThtFb7" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #3: Gozendani Hohaisho",
          duration: "45 minutes",
          cost: "¥500",
          photoSpots: ["Mountain shrine views", "Panoramic Kyoto vistas", "Sacred mountain stones", "Elevated torii views"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Third goshuin at the mountain location with spectacular views over Kyoto",
          hours: "08:30-09:15",
          links: [
            { name: "Gozendani Location", url: "https://maps.app.goo.gl/epBuE7xN8R4HwMp26" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #4: Omokaru Stone Shrine",
          duration: "30 minutes",
          cost: "¥500",
          photoSpots: ["Mystical wishing stones", "Traditional wish-making ceremony", "Sacred rituals", "Mountain path views"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Fourth goshuin at the famous wishing stone location - test your wishes!",
          hours: "09:15-09:45",
          links: [
            { name: "Omokaru Stone", url: "https://maps.app.goo.gl/1VkUFhxMc78ZQRxs7" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #5: Tōfuku-ji Temple",
          duration: "45 minutes",
          cost: "¥600",
          photoSpots: ["Temple architecture", "Zen gardens", "Traditional halls", "Buddhist art"],
          coordinates: { lat: 34.9765, lng: 135.7739 },
          description: "Fifth goshuin at nearby Tōfuku-ji Temple - beautiful Zen temple complex",
          hours: "09:45-10:30",
          links: [
            { name: "Tōfuku-ji Temple", url: "https://maps.app.goo.gl/SRcqt8gLeS8EhjbT9" }
          ],
          breakdown: {
            "Temple Entry": "¥100",
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Complete Thousand Torii Ascent",
          duration: "30 minutes",
          cost: "Free",
          photoSpots: ["Summit views", "Complete torii pathway", "Achievement photos", "Kyoto panorama"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Complete the full thousand torii gates ascent to the mountain summit",
          hours: "10:30-11:00",
          notes: "Final push to complete the entire Fushimi Inari mountain trail"
        }
      ]
    },
    {
      id: "lunch-break",
      timeRange: "12:00 - 14:00",
      title: "🍜 Lunch Break",
      options: [
        {
          title: "🍜 Traditional Japanese Lunch",
          duration: "2 hours",
          cost: "¥1,500-2,500",
          photoSpots: ["Traditional Japanese dishes", "Local restaurant atmosphere", "Food presentation", "Relaxing lunch setting"],
          coordinates: { lat: 34.967146, lng: 135.772695 },
          description: "Well-deserved lunch break after intensive morning shrine activities in Fushimi area",
          hours: "12:00-14:00",
          notes: "Rest and recharge with authentic Japanese cuisine before afternoon manga museum visit",
          breakdown: {
            "Lunch": "¥1,500-2,500"
          }
        }
      ]
    },
    {
      id: "manga-museum-visit",
      timeRange: "15:30 - 17:00",
      title: "📚 Kyoto International Manga Museum",
      options: [
        {
          title: "📚 Manga Museum Exploration",
          duration: "1.5 hours",
          cost: "¥900",
          photoSpots: ["Manga wall library", "Reading areas", "Special exhibitions", "Original manga artwork"],
          coordinates: { lat: 35.0103, lng: 135.7594 },
          description: "Explore Japan's manga culture at this unique museum with over 300,000 manga volumes",
          hours: "15:30-17:00",
          links: [
            { name: "Kyoto Manga Museum", url: "https://kyotomm.jp/en/" },
            { name: "Online Ticket Reservation", url: "https://kyotomm.jp/en/visit/tickets/" },
            { name: "Museum Location", url: "https://maps.app.goo.gl/manga-museum-kyoto" }
          ],
          breakdown: {
            "Museum Admission": "¥900"
          },
          notes: "Perfect cultural experience after morning shrine activities - browse manga, attend exhibitions. Pre-booked online reservation for guaranteed entry."
        }
      ]
    }
  ],
  transportation: [
    {
      id: "kyoto-to-fushimi-dawn",
      departure: {
        location: "Kyoto Airbnb",
        time: "05:30"
      },
      arrival: {
        location: "Fushimi Inari Station",
        time: "05:45"
      },
      provider: "JR",
      type: "Nara Line",
      duration: "15 minutes",
      cost: "¥150",
      notes: "Ultra-early morning journey for crowd-free shrine experience",
      links: [
        { name: "Early Morning Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00005591&goal=00005653&start_name=Kyoto&goal_name=Inari&cid=&from=route_top_search_box&date_time=2025-12-01T05%3A30&ferry=false&taxi=false" }
      ]
    }
  ],
  photoSpots: [
    {
      name: "🦊 Sunrise Through Thousand Torii",
      description: "Most magical moment - dawn light filtering through empty torii tunnel"
    },
    {
      name: "📿 Complete Goshuin Collection Display",
      description: "All 5 Fushimi Inari goshuin stamps beautifully collected"
    },
    {
      name: "🏔️ Summit Panoramic Views",
      description: "Kyoto city views from Fushimi Inari mountain summit"
    },
    {
      name: "🦊 Fox Guardian Statues",
      description: "Hundreds of unique fox statues throughout the complex"
    },
    {
      name: "⛩️ Empty Torii Pathways",
      description: "Peaceful morning solitude in normally crowded areas"
    }
  ],
  budget: {
    dailyBudget: "¥8,000",
    spent: "¥3,750",
    breakdown: {
      accommodation: "¥0 (continuing stay)",
      activities: "¥2,600",
      food: "¥1,000",
      transport: "¥150"
    }
  },
  culturalTips: [
    "🦊 Fushimi Inari: Each torii gate donated by businesses praying for success",
    "📿 Goshuin etiquette: Present book with both hands, bow respectfully",
    "🌅 Dawn visits: Most sacred time with spiritual atmosphere",
    "🏔️ Mountain climb: Full ascent takes 2-3 hours, pace yourself",
    "🍵 Tea ceremony: Perfect reflection time after intensive shrine experience",
    "📸 Photography: Respectful distance from active ceremonies"
  ],
  importantNotes: [
    "🚨 ULTRA-CRITICAL: 05:30 departure essential for magical experience!",
    "🦊 Fushimi Inari transforms completely - mystical at dawn, tourist chaos after 10 AM",
    "📿 Bring multiple goshuin books - 5+ stamps available throughout complex",
    "💴 Carry plenty of ¥500 coins for goshuin collection",
    "👟 Wear excellent walking shoes - extensive mountain hiking involved",
    "🥤 Bring water - long climb with limited facilities on mountain",
    "📱 Download offline maps - GPS can be spotty on mountain trails"
  ]
};