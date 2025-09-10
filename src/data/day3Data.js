// Day 3 Data - Mount Fuji Area - Chureito Pagoda & Lakeside Shrines
// Friday, November 28, 2025

export const day3Data = {
  id: "day-3",
  date: "2025-11-28",
  title: "Mount Fuji Views Adventure",
  city: "Kawaguchiko",
  country: "Japan", 
  coordinates: { lat: 35.5077, lng: 138.7592 },
  overview: "🗻 Flexible Fuji Views Day! A relaxed day at Mount Fuji with optional photography at Chureito Pagoda, traditional Hoto lunch, lakeside shrine exploration, and maple festival. All activities are optional - perfect for a leisurely exploration day.",
  dayPlan: [
    "08:00 - Optional Chureito Pagoda photography",
    "12:00 - Optional traditional Hoto lunch",
    "14:00 - Optional lakeside shrine exploration", 
    "16:00 - Flexible time for lake activities or rest",
    "17:00 - Optional maple festival exploration",
    "Evening - Traditional dinner and Mount Fuji views"
  ],
  weather: {
    temp: "46-59°F",
    condition: "Clear skies ideal for Fuji views", 
    icon: "☀️"
  },
  accommodations: {
    name: "Traditional experience with best Fuji view! Aoiso (あおい荘)",
    address: "富士河口湖町小立1297-1 あおい荘, 南都留郡, 山梨県 401-0302, Japan",
    checkIn: "Continuing stay from November 27",
    checkOut: "November 29, before 10:00 AM",
    confirmationCode: "HMKCYQKHZZ",
    host: "Shogo (Former Fuji climbing guide & ski instructor)",
    notes: "Second night stay at traditional accommodation with best Mount Fuji views. Traditional kaiseki dinner included.",
    totalCost: "Included in previous booking",
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMKCYQKHZZ" },
      { name: "Navigate to Aoiso", url: "https://maps.app.goo.gl/MCXdJWUuhSKBgMzF9" }
    ]
  },
  mandatoryActivities: [],
  timeBlocks: [
    {
      id: "morning-fuji-views",
      timeRange: "08:00 - 11:00",
      title: "🏔️ Iconic Mount Fuji Photography",
      options: [
        {
          title: "🗻 Chureito Pagoda Views",
          duration: "2 hours",
          cost: "¥0 (Free)",
          photoSpots: ["Iconic pagoda with Mount Fuji", "400 steps climb", "Best morning visibility", "Classic postcard view"],
          coordinates: { lat: 35.5022, lng: 138.7889 },
          description: "The most famous Mount Fuji viewpoint - iconic 5-story pagoda with perfect Fuji backdrop",
          hours: "08:00-10:00 (sunrise climb)",
          links: [
            { name: "Pagoda Info", url: "https://www.arakurafujisengen.com/blog" },
            { name: "Navigate", url: "https://maps.app.goo.gl/esXdopYW12tvZMof7" }
          ],
          notes: "~400 steps to pagoda, best morning visibility, most photographed Fuji view"
        },
        {
          title: "⛩️ Arakura Fujisengen-jinja Shrine",
          duration: "1 hour",
          cost: "¥300",
          photoSpots: ["Shrine buildings", "Mount Fuji backdrop", "Traditional architecture", "Goshuin ceremony"],
          coordinates: { lat: 35.5022, lng: 138.7889 },
          description: "Historic shrine at base of Chureito Pagoda with Mount Fuji views and goshuin collection",
          hours: "09:30-10:30",
          links: [
            { name: "Shrine Site", url: "https://www.arakurafujisengen.com/blog" },
            { name: "Navigate", url: "https://maps.app.goo.gl/esXdopYW12tvZMof7" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Historic Fujisengen shrine, goshuin collection available"
        }
      ]
    },
    {
      id: "lunch-break",
      timeRange: "12:00 - 13:30",
      title: "🍜 Traditional Lunch",
      options: [
        {
          title: "🍜 Specialty Hoto Lunch",
          duration: "1 hour",
          cost: "¥1,200-2,000",
          photoSpots: ["Traditional hoto noodles", "Local restaurant atmosphere", "Mount Fuji region cuisine"],
          coordinates: { lat: 35.5077, lng: 138.7592 },
          description: "Famous local hoto noodle specialty at authentic restaurant near station",
          hours: "12:00-13:00",
          links: [
            { name: "Restaurant Site", url: "http://www.houtou-fudou.jp/english.html" },
            { name: "Navigate to Restaurant", url: "https://maps.app.goo.gl/aLqEds7YVHaAGvom9" }
          ],
          notes: "Traditional thick wheat noodles in miso broth with vegetables - Yamanashi specialty"
        }
      ]
    },
    {
      id: "afternoon-shrine-exploration",
      timeRange: "14:00 - 16:00",
      title: "⛩️ Lakeside Shrine Collection",
      options: [
        {
          title: "🏔️ Kawaguchi Asama-jinja Shrine",
          duration: "1.5 hours",
          cost: "¥300",
          photoSpots: ["Lakeside shrine", "Mount Fuji views", "Traditional torii", "Sacred cedar trees"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Ancient shrine dedicated to Mount Fuji worship, lakeside location with stunning views",
          hours: "14:00-15:30",
          links: [
            { name: "Shrine Site", url: "https://asamajinja.or.jp/precinct/" },
            { name: "Navigate", url: "https://maps.app.goo.gl/21os8NkELBzgJ4fP6" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Ancient shrine for Mount Fuji worship, beautiful lakeside setting"
        }
      ]
    },
    {
      id: "scenic-exploration",
      timeRange: "15:30 - 18:00",
      title: "🌅 Mount Fuji Scenic Views",
      options: [
        {
          title: "🗻 Kawaguchiko Natural Living Center",
          duration: "1 hour",
          cost: "¥0 (Free)",
          photoSpots: ["Unobstructed Fuji views", "Lakeside panorama", "Natural park setting", "Sunset angles"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Natural park with unobstructed Mount Fuji views across the lake",
          hours: "15:30-16:30",
          notes: "Perfect for unobstructed Mount Fuji photography"
        },
        {
          title: "🌸 Oishi Park Lakeside",
          duration: "45 minutes", 
          cost: "¥0 (Free)",
          photoSpots: ["Lake reflections", "Seasonal flowers", "Mount Fuji panorama", "Walking paths"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Beautiful lakeside park with Mount Fuji reflections and seasonal displays",
          hours: "16:30-17:15",
          notes: "Famous for Mount Fuji reflections in the lake"
        },
        {
          title: "🍁 Maple Corridor (Momiji Kairo)",
          duration: "45 minutes",
          cost: "¥0 (Free)",
          photoSpots: ["Autumn colors", "Tree-lined pathway", "Itchiku Kubota Art Museum area", "Golden hour light"],
          coordinates: { lat: 35.5135, lng: 138.7661 },
          description: "Beautiful maple tree corridor near Itchiku Kubota Art Museum, perfect for autumn colors",
          hours: "18:00-18:45",
          notes: "Sunset around 16:30 in late November, golden hour photography"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "kawaguchiko-to-shimoyoshida",
      departure: {
        location: "Kawaguchiko Station",
        time: "07:45"
      },
      arrival: {
        location: "Shimoyoshida Station",
        time: "08:00"
      },
      provider: "Fujikyu Railway",
      type: "Local Line",
      duration: "15 minutes",
      cost: "¥190",
      notes: "Morning journey to Chureito Pagoda access point",
      links: [
        { name: "Route Details", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00001065&goal=00000916&start_name=Kawaguchiko&goal_name=Shimoyoshida&cid=&from=route_top_search_box&ferry=false&taxi=false" }
      ]
    },
    {
      id: "sightseeing-bus-pass",
      departure: {
        location: "Various stops",
        time: "All day"
      },
      arrival: {
        location: "Various attractions",
        time: "All day"
      },
      provider: "Kawaguchiko",
      type: "Red Line Sightseeing Bus",
      duration: "All day access",
      cost: "¥1,500",
      notes: "2-day pass covers all major Mount Fuji sightseeing spots around Kawaguchiko",
      links: [
        { name: "Bus Route Info", url: "https://bus.fujikyu.co.jp/sightseeing" }
      ]
    }
  ],
  photoSpots: [
    {
      name: "🗻 Chureito Pagoda + Mount Fuji",
      description: "The most iconic Mount Fuji photograph - 5-story pagoda with perfect Fuji backdrop"
    },
    {
      name: "⛩️ Shrine Torii with Fuji Views",
      description: "Traditional shrine gates framing Mount Fuji in background"
    },
    {
      name: "🌊 Lake Kawaguchi Reflections",
      description: "Mount Fuji mirrored perfectly in still lake waters"
    },
    {
      name: "🍁 Autumn Maple Corridor",
      description: "Golden and red maple trees with distant Mount Fuji"
    },
    {
      name: "🌅 Golden Hour Mount Fuji",
      description: "Sunset lighting on Mount Fuji from multiple lakeside viewpoints"
    }
  ],
  budget: {
    dailyBudget: "¥12,000",
    spent: "¥10,290",
    breakdown: {
      accommodation: "¥0 (continuing stay)",
      activities: "¥600",
      food: "¥2,500",
      transport: "¥1,690"
    }
  },
  culturalTips: [
    "🏔️ Mount Fuji visibility depends on weather - clear mornings are best",
    "📸 Chureito Pagoda is extremely popular - arrive early for best photos",
    "⛩️ Fujisengen shrines are specifically dedicated to Mount Fuji worship",
    "🍜 Hoto noodles are the regional specialty - thick wheat noodles in miso broth",
    "🚌 Red Line bus pass provides convenient access to all major viewpoints",
    "🌅 Sunset occurs around 16:30 in late November - plan photography accordingly"
  ],
  importantNotes: [
    "🌤️ CRITICAL: Check Mount Fuji visibility forecast - cloudy conditions ruin the experience",
    "👟 Wear comfortable shoes for 400-step climb to Chureito Pagoda", 
    "📱 Download offline maps - some areas have limited cell coverage",
    "💴 Carry cash for shrine donations and local restaurants",
    "📸 Bring camera with good zoom lens for distant Mount Fuji shots",
    "🕐 Early morning (8:00 AM) offers best visibility and fewer crowds"
  ]
};