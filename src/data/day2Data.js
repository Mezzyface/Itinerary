// Day 2 Data - Tokyo Shrines → Mount Fuji
// Thursday, November 27, 2025

export const day2Data = {
  id: "day-2",
  date: "2025-11-27",
  title: "Tokyo Shrines → Mount Fuji",
  city: "Tokyo → Kawaguchiko",
  country: "Japan", 
  coordinates: { lat: 35.6585, lng: 139.7016 },
  overview: "Morning shrine-hopping for goshuin collection, then deep dive into Harajuku culture - from kawaii Takeshita Street to sophisticated Omotesando. End with critical train departure to Mount Fuji area for ryokan stay.",
  dayPlan: [
    "07:00 - Check out and travel to Shinjuku Station",
    "07:30 - Store luggage and start shrine hopping",
    "10:00 - Explore Harajuku and Takeshita Street",
    "14:00 - Lunch and shopping in Omotesando",
    "17:30 - Depart for Mount Fuji via express train",
    "20:00 - Check into traditional ryokan with Fuji views"
  ],
  weather: {
    temp: "50-63°F",
    condition: "Cool autumn weather", 
    icon: "☀️"
  },
  accommodations: {
    name: "Traditional experience with best Fuji view! Aoiso (あおい荘)",
    address: "富士河口湖町小立1297-1 あおい荘, 南都留郡, 山梨県 401-0302, Japan",
    checkIn: "November 27, after 3:00 PM",
    checkOut: "November 29, before 10:00 AM",
    confirmationCode: "HMKCYQKHZZ",
    host: "Shogo (Former Fuji climbing guide & ski instructor)",
    notes: "Traditional accommodation with best Mount Fuji views, home away from home experience. Host greets you for check-in.",
    totalCost: "$193.74 (2 nights)",
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMKCYQKHZZ" },
      { name: "Property Location", url: "https://www.google.co.jp/maps/place/%E3%81%82%E3%81%8A%E3%81%84%E8%8D%98/@35.5077365,138.757026,17z/data=!3m1!4b1!4m8!3m7!1s0x60195fccb5139e7b:0xbf69b668b038aced!5m2!4m1!1i2!8m2!3d35.5077365!4d138.7592147?hl=j" }
    ]
  },
  mandatoryActivities: [
    {
      id: "early-departure", 
      time: "07:00",
      title: "🎒 Check out & Head to Shinjuku",
      duration: "30 minutes", 
      location: "Ebisu → Shinjuku Station",
      status: "upcoming",
      notes: "Check out of Ebisu accommodation, travel to Shinjuku Station via JR Yamanote Line",
      links: [
        { name: "Route to Shinjuku", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00002025&goal=%7B%27lat%27%3A35.689579%2C%27lon%27%3A139.700676%2C%27spot%27%3A%2702011-00004254%27%7D&start_name=Ebisu(Tokyo)&goal_name=Shinjuku&cid=&from=route_top_search_box&date_time=2025-11-27T07%3A00&ferry=false&taxi=false" }
      ]
    },
    {
      id: "luggage-storage",
      time: "07:30",
      title: "🧳 Store Luggage at Shinjuku",
      duration: "15 minutes",
      location: "Shinjuku Station",
      status: "upcoming",
      notes: "Drop off bags in coin locker or luggage storage for shrine hopping - ¥300-600 depending on size"
    },
    {
      id: "kaiji-35-critical",
      time: "15:30",
      title: "🚄 CRITICAL: Limited Express Kaiji 35",
      duration: "2 hours 26 minutes",
      location: "Shinjuku Platform 10 → Kawaguchiko",
      status: "upcoming",
      notes: "🚨 CRITICAL: Platform 10 departure at 15:30 sharp! LAST train to Mount Fuji today - CANNOT BE MISSED!",
      confirmationCode: "KAIJI35-271125",
      links: [
        { name: "JR East Info", url: "https://www.jreast.co.jp/e/" },
        { name: "Complete Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00004254&goal=00001065&start_name=Shinjuku&goal_name=Kawaguchiko&cid=&from=route_top_search_box&date_time=2025-11-27T15%3A20&ferry=false&taxi=false" }
      ]
    },
    {
      id: "fujisan-express",
      time: "17:20",
      title: "🗻 Fujisan View Express 13",
      duration: "45 minutes",
      location: "Ōtsuki → Kawaguchiko",
      status: "upcoming",
      notes: "Reserved seats on scenic train with Mount Fuji views - connects from Kaiji 35",
      confirmationCode: "FVE13-271125",
      links: [
        { name: "Fujikyu Railway", url: "https://www.fujikyu-railway.jp/en/" }
      ]
    }
  ],
  timeBlocks: [
    {
      id: "shrine-hopping",
      timeRange: "08:00 - 12:00",
      title: "⛩️ Tokyo Goshuin Collection Adventure",
      options: [
        {
          title: "🌸 Meiji Shrine (Meiji Jingu)",
          duration: "1 hour 35 minutes",
          cost: "¥300",
          photoSpots: ["Tokyo's most famous shrine", "Beautiful forest setting", "Traditional architecture", "Famous goshuin stamps"],
          coordinates: { lat: 35.67637, lng: 139.699365 },
          description: "Start your shrine-hopping adventure at Tokyo's most famous shrine. Dedicated to Emperor Meiji and Empress Shoken, perfect for goshuin collection.",
          hours: "08:00-09:35",
          links: [
            { name: "Shrine Site", url: "https://www.meijijingu.or.jp/en/feelshinto/3.php" },
            { name: "Navigate", url: "https://maps.app.goo.gl/yvm7qBZyZxeaYFPQ7" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Sunrise to sunset hours (approx 06:00-17:00 in November)"
        },
        {
          title: "🎋 Togo-jinja Shrine", 
          duration: "35 minutes",
          cost: "¥300",
          photoSpots: ["Historic military connection", "Beautiful architecture", "Quiet urban oasis", "Unique goshuin stamps"],
          coordinates: { lat: 35.6709, lng: 139.7029 },
          description: "Visit this historic shrine dedicated to Admiral Togo Heihachiro. Beautiful architecture in the heart of Harajuku area.",
          hours: "09:45-10:20",
          links: [
            { name: "Shrine Site", url: "https://togojinja.or.jp/amulet" },
            { name: "Navigate", url: "https://maps.app.goo.gl/mreRoTzuLsWqs2FfA" },
            { name: "Walk from Meiji", url: "https://maps.app.goo.gl/9hrvJjaEx6aBwdCg7" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Historic shrine dedicated to Admiral Togo Heihachiro"
        },
        {
          title: "🏛️ Shibuya Sky Shrine (Optional)",
          duration: "30 minutes", 
          cost: "¥300",
          photoSpots: ["Urban shrine", "Modern setting", "Additional goshuin option", "City views"],
          coordinates: { lat: 35.6612, lng: 139.7021 },
          description: "Small shrine near Shibuya Sky - visit if time permits for additional goshuin",
          hours: "10:35-11:05",
          links: [
            { name: "Navigate", url: "https://maps.app.goo.gl/shibuya-sky-shrine" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Optional - only if ahead of schedule"
        },
        {
          title: "⛰️ Konno Hachimangu Shrine (Optional)",
          duration: "30 minutes",
          cost: "¥300",
          photoSpots: ["Historic Hachiman shrine", "Traditional architecture", "Local worshippers", "Unique goshuin stamps"],
          coordinates: { lat: 35.6601, lng: 139.7016 },
          description: "Historic shrine in Shibuya - another goshuin collection opportunity if time allows",
          hours: "11:05-11:35",
          links: [
            { name: "Shrine Site", url: "https://www.konno-hachimangu.jp/" },
            { name: "Navigate", url: "https://maps.app.goo.gl/konno-hachimangu-location" }
          ],
          breakdown: {
            "Goshuin": "¥300"
          },
          notes: "Optional - depends on time remaining"
        }
      ]
    },
    {
      id: "harajuku-culture",
      timeRange: "12:00 - 14:30",
      title: "🎌 Harajuku Culture & Exploration",
      options: [
        {
          title: "🍱 Lunch in Harajuku",
          duration: "25 minutes",
          cost: "¥1,000-2,000",
          photoSpots: ["Harajuku culture", "Multiple dining options", "Local atmosphere"],
          coordinates: { lat: 35.6709, lng: 139.7029 },
          description: "Lunch in Harajuku - explore Omotesando, Cat Street, or backstreets of Harajuku for a great meal",
          hours: "11:35-12:00",
          notes: "Flexible timing based on shrine visits completed"
        },
        {
          title: "🌈 Takeshita Street Exploration",
          duration: "45 minutes",
          cost: "¥500-5,000+",
          photoSpots: ["Kawaii culture immersion", "Unique fashion boutiques", "Street food and snacks", "Photo opportunities"],
          coordinates: { lat: 35.6709, lng: 139.7029 },
          description: "Explore the famous Takeshita Street - Tokyo's epicenter of kawaii culture, quirky fashion, and youth trends",
          hours: "12:00-12:45",
          links: [
            { name: "Takeshita Info", url: "https://www.gotokyo.org/en/destinations/shibuya/takeshita-street.html" }
          ],
          notes: "Most shops open 10:00-20:00, 2-minute walk from JR Harajuku Station"
        },
        {
          title: "🐱 Cat Street (Ura-Harajuku) Discovery",
          duration: "45 minutes",
          cost: "Free to explore",
          photoSpots: ["Alternative fashion scene", "Independent boutiques", "Vintage finds", "Local designer stores"],
          coordinates: { lat: 35.6709, lng: 139.7029 },
          description: "Stroll down the more sophisticated Cat Street - trendy boutiques, vintage shops, and unique cafes away from the crowds",
          hours: "12:45-13:30",
          links: [
            { name: "Cat Street Route", url: "https://maps.app.goo.gl/YWbZYf7BGom6P6pJA" }
          ],
          notes: "Shops typically open 11:00-20:00, 5-minute walk from Takeshita Street"
        },
        {
          title: "🏢 Omotesando Hills & Architecture",
          duration: "45 minutes",
          cost: "Free to explore",
          photoSpots: ["Luxury shopping complex", "Modern Japanese architecture", "Designer brands", "Sophisticated atmosphere"],
          coordinates: { lat: 35.6659, lng: 139.7126 },
          description: "Experience high-end Omotesando - luxury shopping, modern architecture, and upscale atmosphere as contrast to Takeshita Street",
          hours: "13:30-14:15",
          links: [
            { name: "Omotesando Hills", url: "https://www.omotesandohills.com/en/" }
          ],
          notes: "Building open 11:00-21:00, 8-10 minute walk from Cat Street"
        }
      ]
    },
    {
      id: "critical-departure",
      timeRange: "14:30 - 15:30",
      title: "🚅 CRITICAL Mount Fuji Departure",
      options: [
        {
          title: "⚠️ Luggage Retrieval & Platform 10",
          duration: "30 minutes",
          cost: "No additional cost",
          photoSpots: ["Final Tokyo moments", "Train departure preparation", "Mount Fuji journey begins"],
          coordinates: { lat: 35.6896, lng: 139.7006 },
          description: "🚨 CRITICAL: Retrieve luggage from coin lockers and navigate to Platform 10 for Kaiji 35 - CANNOT BE MISSED!",
          hours: "14:30-15:00",
          notes: "🚨 This is the LAST train to Mount Fuji today! Allow time for luggage retrieval"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "ebisu-to-shinjuku",
      departure: {
        location: "Ebisu Station",
        time: "07:00"
      },
      arrival: {
        location: "Shinjuku Station", 
        time: "07:15"
      },
      provider: "JR",
      type: "Yamanote Line",
      duration: "10-15 minutes",
      cost: "¥170",
      notes: "Morning travel to start shrine hopping day",
      links: [
        { name: "Route Details", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00002025&goal=00004254&start_name=Ebisu(Tokyo)&goal_name=Shinjuku&cid=&from=route_top_search_box&ferry=false&taxi=false" }
      ]
    },
    {
      id: "shinjuku-to-harajuku",
      departure: {
        location: "Shinjuku Station",
        time: "07:45"
      },
      arrival: {
        location: "Harajuku Station",
        time: "07:50"
      },
      provider: "JR",
      type: "Yamanote Line", 
      duration: "4-6 minutes",
      cost: "¥170",
      notes: "Travel to shrine hopping starting point",
      links: [
        { name: "Route Details", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00004254&goal=00002128&start_name=Shinjuku&goal_name=Harajuku&cid=&from=route_top_search_box&ferry=false&taxi=false" }
      ]
    },
    {
      id: "kaiji-express-critical",
      departure: {
        location: "Shinjuku Station Platform 10",
        time: "15:30"
      },
      arrival: {
        location: "Kawaguchiko Station",
        time: "18:05"
      },
      provider: "JR East + Fujikyu Railway",
      type: "Limited Express Kaiji 35 + Fujisan View Express 13",
      duration: "2 hours 26 minutes total",
      cost: "¥2,700",
      confirmationCode: "KAIJI35-271125 + FVE13-271125",
      notes: "🚨 CRITICAL: Must not miss this train! Last connection to Mount Fuji. Transfer at Ōtsuki Station.",
      links: [
        { name: "Complete Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00004254&goal=00001065&start_name=Shinjuku&goal_name=Kawaguchiko&cid=&from=route_top_search_box&date_time=2025-11-27T15%3A20&ferry=false&taxi=false" },
        { name: "JR East Info", url: "https://www.jreast.co.jp/e/" },
        { name: "Fujikyu Railway", url: "https://www.fujikyu-railway.jp/en/" }
      ]
    }
  ],
  photoSpots: [
    {
      name: "⛩️ Meiji Shrine Torii Gates",
      description: "Traditional shrine gates and forest paths"
    },
    {
      name: "📜 Goshuin Collection Process",
      description: "Beautiful shrine stamps and calligraphy collection"
    },
    {
      name: "🌈 Takeshita Street Kawaii Culture",
      description: "Tokyo's epicenter of youth fashion and kawaii culture"
    },
    {
      name: "🐱 Cat Street Alternative Fashion",
      description: "Sophisticated boutiques and vintage finds"
    },
    {
      name: "🚅 Mount Fuji Train Journey",
      description: "Scenic mountain views from Limited Express and Fujisan View Express"
    },
    {
      name: "🗻 Tokyo to Mountain Transition",
      description: "Urban to natural landscape transformation"
    }
  ],
  budget: {
    dailyBudget: "¥35,000",
    spent: "¥34,540",
    breakdown: {
      accommodation: "¥29,000",
      activities: "¥1,500",
      food: "¥1,500",
      transport: "¥3,040"
    }
  },
  culturalTips: [
    "🙏 Bow before passing through torii gates at shrines",
    "💧 Purify hands and mouth at temizuya (purification fountains)", 
    "👒 Remove hats when praying at shrines",
    "📜 Goshuin are considered sacred - handle respectfully",
    "📸 Photography may be restricted in shrine prayer halls",
    "🤫 Speak quietly and respectfully in shrine grounds"
  ],
  importantNotes: [
    "🚨 CRITICAL: Limited Express Kaiji 35 at 15:30 cannot be missed - LAST TRAIN!",
    "⛩️ Bring a goshuin book or papers for shrine stamp collection",
    "💴 Carry cash for goshuin fees (usually ¥300-500 each)",
    "👟 Comfortable walking shoes essential for shrine hopping",
    "🎒 Pack light for train travel to Mount Fuji",
    "📱 Download offline maps for shrine locations"
  ]
};