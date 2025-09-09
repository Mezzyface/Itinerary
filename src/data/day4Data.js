// Day 4 Data - Mount Fuji Area - Camping Experience  
// Saturday, November 29, 2025

export const day4Data = {
  id: "day-4",
  date: "2025-11-29",
  title: "Mount Fuji Camping Experience",
  city: "Mount Fuji Area",
  country: "Japan", 
  coordinates: { lat: 35.5135, lng: 138.7661 },
  overview: "🏕️ Camping adventure near Mount Fuji! Outdoor experience with tent site accommodation, surrounded by nature and mountain views. Perfect way to connect with Japan's natural beauty.",
  weather: {
    temp: "5-12°C (41-54°F)",
    condition: "Cool autumn weather, perfect for camping", 
    icon: "🌤️"
  },
  accommodations: {
    name: "Fujikawa Camp - Tent Site",
    address: "Fujikawa Camping Ground, Mount Fuji Area",
    checkIn: "2025-11-29, 15:00",
    checkOut: "Next morning departure",
    confirmationCode: "TENT112925",
    host: "Fujikawa Camp Management",
    notes: "Tent site camping (7.5m×7.5m - 56㎡) for outdoor adventure experience. 1 night stay under the stars near Mount Fuji at authentic Japanese campground.",
    totalCost: "¥3,000-4,000",
    guestDetails: {
      name: "Henderson Adam",
      phone: "2817330287", 
      email: "ozarka30@gmail.com"
    },
    links: [
      { name: "Fujikawa Camp Official Site", url: "https://fujikawa-camp.jp/" },
      { name: "Campsite Location", url: "https://maps.app.goo.gl/fujikawa-camp-location" }
    ]
  },
  mandatoryActivities: [
    {
      id: "ryokan-checkout",
      time: "09:00",
      title: "🎒 Check out of Aoiso Ryokan",
      duration: "30 minutes",
      location: "Aoiso Ryokan",
      status: "upcoming",
      notes: "Final checkout from traditional ryokan, prepare for camping adventure",
      confirmationCode: "HMKCYQKHZZ"
    },
    {
      id: "camping-supplies",
      time: "11:30",
      title: "🛒 Supply Shopping for Camping",
      duration: "1.5 hours",
      location: "Kawaguchiko Shopping Area",
      status: "upcoming",
      notes: "Gather food, drinks, and any camping essentials. Check if camping equipment rental needed.",
      links: [
        { name: "Shopping Area", url: "https://maps.app.goo.gl/kawaguchiko-shopping" }
      ]
    },
    {
      id: "campsite-checkin",
      time: "15:00",
      title: "🏕️ Fujikawa Camp Check-in & Setup",
      duration: "2 hours",
      location: "Fujikawa Camp",
      status: "upcoming",
      notes: "Check-in to tent site (7.5m×7.5m), set up tent and explore Fujikawa camping grounds",
      confirmationCode: "TENT112925",
      links: [
        { name: "Fujikawa Camp Site", url: "https://fujikawa-camp.jp/" },
        { name: "Campsite Location", url: "https://maps.app.goo.gl/fujikawa-camp-location" }
      ]
    }
  ],
  timeBlocks: [
    {
      id: "morning-culture",
      timeRange: "09:00 - 11:00",
      title: "🎨 Art & Culture Experience",
      options: [
        {
          title: "🎨 Kubota Itchiku Art Museum",
          duration: "2 hours",
          cost: "¥1,000",
          photoSpots: ["Traditional kimono art", "Museum architecture", "Mount Fuji backdrop", "Japanese textile crafts"],
          coordinates: { lat: 35.527327, lng: 138.759663 },
          description: "Visit famous art museum showcasing traditional Japanese kimono art with stunning Mount Fuji views",
          hours: "09:00-11:00",
          links: [
            { name: "Museum Site", url: "https://www.itchiku-museum.com/" },
            { name: "Navigate", url: "https://maps.app.goo.gl/ky2v6U1GBZ3zZNwL7" }
          ],
          breakdown: {
            "Museum Entry": "¥1,000"
          },
          notes: "Traditional kimono art museum with beautiful Mount Fuji views"
        }
      ]
    },
    {
      id: "afternoon-preparation",
      timeRange: "13:00 - 15:00",
      title: "🍜 Final Kawaguchiko Experience",
      options: [
        {
          title: "🍜 Farewell Lunch in Kawaguchiko",
          duration: "1 hour",
          cost: "¥1,500-2,500",
          photoSpots: ["Local restaurant", "Final town views", "Pre-camping meal"],
          coordinates: { lat: 35.5077, lng: 138.7592 },
          description: "Final meal in Kawaguchiko town before heading to camping adventure",
          hours: "13:00-14:00",
          notes: "Last chance for hot restaurant meal before camping"
        },
        {
          title: "🛒 Final Camping Preparations",
          duration: "1 hour",
          cost: "¥0 (included in supplies)",
          photoSpots: ["Camping gear prep", "Supplies organization", "Adventure preparation"],
          coordinates: { lat: 35.5077, lng: 138.7592 },
          description: "Organize camping supplies, check equipment, prepare for outdoor experience",
          hours: "14:00-15:00",
          notes: "Final preparations before heading to campsite"
        }
      ]
    },
    {
      id: "evening-camping",
      timeRange: "17:00 - 21:00",
      title: "🏕️ Camping Adventure Under the Stars",
      options: [
        {
          title: "🔥 Outdoor Dinner Preparation",
          duration: "2 hours",
          cost: "¥0 (supplies purchased)",
          photoSpots: ["Campfire cooking", "Outdoor meal prep", "Mount Fuji sunset", "Camping lifestyle"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Prepare outdoor dinner using camping supplies, enjoy authentic outdoor cooking experience",
          hours: "17:00-19:00",
          notes: "Cook over campfire or camping stove, enjoy nature"
        },
        {
          title: "🌌 Stargazing & Campfire",
          duration: "2+ hours",
          cost: "¥0 (Free)",
          photoSpots: ["Starry night sky", "Campfire glow", "Mount Fuji silhouette", "Night camping atmosphere"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Evening campfire relaxation and stargazing with clear Mount Fuji area skies",
          hours: "20:00-22:00+",
          notes: "Perfect for stargazing - November nights offer clear skies and minimal light pollution"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "ryokan-to-museum",
      departure: {
        location: "Aoiso Ryokan",
        time: "09:15"
      },
      arrival: {
        location: "Kubota Itchiku Art Museum",
        time: "09:30"
      },
      provider: "Local",
      type: "Bus/Taxi",
      duration: "15-20 minutes",
      cost: "¥300-500",
      notes: "Morning journey to art museum after ryokan checkout",
      links: [
        { name: "Route to Museum", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00001065&goal=%7B%27lat%27%3A35.527327%2C%27lon%27%3A138.759663%2C%27spot%27%3A%2702301-1300800%27%7D&start_name=Kawaguchiko&goal_name=Itchiku%20Kubota%20Art%20Museum&cid=&from=route_top_search_box&date_time=2025-11-29T09%3A00&ferry=false&taxi=false" }
      ]
    },
    {
      id: "to-campsite",
      departure: {
        location: "Kawaguchiko Town",
        time: "14:30"
      },
      arrival: {
        location: "Fujikawa Camp",
        time: "15:00"
      },
      provider: "Local",
      type: "Bus/Taxi",
      duration: "30-45 minutes",
      cost: "¥500-1,000",
      notes: "Transport to Fujikawa Camp with camping supplies and equipment",
      links: [
        { name: "Fujikawa Camp Route", url: "https://fujikawa-camp.jp/" },
        { name: "Campsite Location", url: "https://maps.app.goo.gl/fujikawa-camp-location" }
      ]
    }
  ],
  photoSpots: [
    {
      name: "🎨 Kimono Art with Fuji Backdrop",
      description: "Traditional Japanese textile art at Itchiku Museum with Mount Fuji views"
    },
    {
      name: "🏕️ Tent Setup Adventure",
      description: "Camping preparation and tent setup with mountain scenery"
    },
    {
      name: "🔥 Campfire Cooking Experience",
      description: "Authentic outdoor cooking and campfire preparation"
    },
    {
      name: "🌌 Stargazing Near Mount Fuji",
      description: "Night sky photography with Mount Fuji silhouette and stars"
    },
    {
      name: "🌄 Sunrise from Campsite",
      description: "Early morning Mount Fuji sunrise views from camping location"
    }
  ],
  budget: {
    dailyBudget: "¥8,000",
    spent: "¥7,500",
    breakdown: {
      accommodation: "¥3,500",
      activities: "¥1,000",
      food: "¥2,000",
      transport: "¥1,000"
    }
  },
  culturalTips: [
    "🏕️ Japanese camping often emphasizes harmony with nature",
    "🔥 Follow campfire safety rules and clean up thoroughly",
    "🌌 November offers excellent stargazing conditions with clear skies",
    "🗻 Mount Fuji area camping provides unique perspective of the mountain",
    "🧊 Temperatures drop significantly at night - bring warm layers",
    "🤫 Maintain quiet hours and respect other campers"
  ],
  importantNotes: [
    "🌡️ CRITICAL: November nights are cold - bring warm sleeping gear!",
    "🎒 Pack warm clothes, extra layers, and proper sleeping equipment",
    "🔦 Bring flashlights/headlamps - essential for camping safety",
    "💧 Ensure access to water and bathroom facilities at campsite",
    "🍜 Have backup food plan if outdoor cooking becomes difficult",
    "📱 Check campsite facilities - some may have equipment rental",
    "🚗 Confirm transportation to/from campsite location"
  ]
};