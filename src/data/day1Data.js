// Day 1 Data - Tokyo Shibuya Stay
// Tuesday, November 26, 2025

export const day1Data = {
  id: "day-1",
  date: "2025-11-26",
  title: "Tokyo Shibuya Stay",
  city: "Shibuya City",
  country: "Japan", 
  coordinates: { lat: 35.6585, lng: 139.7016 },
  overview: "Exploring Tokyo's vibrant Shibuya district with easy access to Ebisu and nearby attractions.",
  weather: {
    temp: "15°C",
    condition: "Clear", 
    icon: "☀️"
  },
  accommodations: {
    name: "恵比寿駅から徒歩4分/渋谷駅まで徒歩圏内/家具家電付/HJ SHIBUYA b01",
    address: "3-chōme-20-10 Higashi, Shibuya City, Tokyo Prefecture 150-0011, Japan",
    checkIn: "16:00",
    checkOut: "10:00",
    confirmationCode: "HMRDDYA2N4",
    host: "ライワマンション",
    notes: "Self check-in with lockbox, 4 min walk from Ebisu Station",
    totalCost: "$106.02"
  },
  mandatoryActivities: [
    {
      id: "airport-transport",
      time: "13:00",
      title: "✈️ Travel from Haneda Airport",
      duration: "45-60 minutes",
      location: "Haneda Airport → Ebisu Station",
      status: "upcoming",
      notes: "Train route to Ebisu Station, then 4 min walk to Airbnb",
      links: [
        { name: "Route Details", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00000592&goal=%7B%27lat%27%3A35.646584%2C%27lon%27%3A139.710153%2C%27spot%27%3A%2702011-00002025%27%7D&start_name=Haneda%20Airport(Tokyo)&goal_name=Ebisu(Tokyo)&cid=&from=route_top_search_box&ferry=false&taxi=false" }
      ]
    },
    {
      id: "airbnb-checkin",
      time: "16:00",
      title: "🏠 Airbnb Check-in",
      duration: "30 minutes",
      location: "HJ SHIBUYA b01",
      status: "upcoming",
      notes: "Self check-in with lockbox, 4 min walk from Ebisu Station",
      confirmationCode: "HMRDDYA2N4"
    }
  ],
  timeBlocks: [
    {
      id: "afternoon-optional",
      timeRange: "16:30 - 17:00",
      title: "🏛️ Optional Stop",
      options: [
        {
          title: "⛩️ Ebisu Shrine Visit",
          duration: "30 minutes",
          cost: "¥3,000",
          photoSpots: ["Shrine grounds", "Goshuin ceremony", "Traditional architecture"],
          coordinates: { lat: 35.6464, lng: 139.7103 },
          description: "Visit Ebisu Shrine to purchase Goshuincho and receive first goshuin",
          links: [
            { name: "Ebisu Shrine", url: "https://maps.app.goo.gl/6bjWpLGNd6te9iqE8" },
            { name: "Shrine Store", url: "https://maps.app.goo.gl/GsJNyLmWwg3JBntX9" },
            { name: "Shrine Site", url: "https://jinjamemo.com/archives/ebisujinja.html" }
          ],
          notes: "Optional stop if able to make it before 5pm",
          breakdown: {
            "Goshuincho (stamp book)": "¥2,500",
            "First Goshuin (stamp)": "¥500"
          }
        }
      ]
    },
    {
      id: "evening-block",
      timeRange: "18:00 - 00:00",
      title: "🌃 Evening Activities",
      options: [
        {
          title: "🍻 A10 Bar",
          duration: "3-5 hours",
          cost: "¥3,000-5,000",
          photoSpots: ["Bar interior", "Shibuya nightlife", "Local atmosphere"],
          coordinates: { lat: 35.6473325, lng: 139.7073511 },
          description: "Local bar experience in Shibuya area",
          hours: "7 PM – 3 AM",
          links: [
            { name: "A10 Location", url: "https://www.google.com/maps/place/A10/@35.6469821,139.7062437,571m/data=!3m2!1e3!5s0x60188b413924f475:0x91d9e6d6f5115938!4m6!3m5!1s0x60188b8d0bbc998d:0xdbdb6eb72400c38f!8m2!3d35.6473325!4d139.7073511!16s%2Fg%2F11nnsh78xs?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" }
          ]
        },
        {
          title: "🍹 Lost Bar",
          duration: "2-4 hours",
          cost: "¥2,500-4,000",
          photoSpots: ["Cocktail shots", "Bar ambiance", "Shibuya views"],
          coordinates: { lat: 35.6607552, lng: 139.6974298 },
          description: "Cocktail bar in Shibuya district",
          hours: "15:00-23:00",
          links: [
            { name: "Lost Bar Location", url: "https://www.google.com/maps/place/LOST/@35.6607552,139.6974298,16z/data=!3m1!4b1!4m6!3m5!1s0x60188d006156b587:0x580fcf1da447ae0!8m2!3d35.6607552!4d139.6974298!16s%2Fg%2F11w9zl54r1?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=37bdabed-11f5-4fad-901e-eb03075d260a" }
          ]
        },
        {
          title: "🎮 Pokémon Center Shibuya",
          duration: "1-2 hours",
          cost: "¥1,000-3,000",
          photoSpots: ["Pokémon merchandise", "Store displays", "Character figures"],
          coordinates: { lat: 35.6619557, lng: 139.6984408 },
          description: "Official Pokémon merchandise store",
          hours: "10:00-21:00",
          notes: "Closes at 9 PM, visit before other evening activities",
          links: [
            { name: "Pokémon Center Location", url: "https://www.google.com/maps/place/Pokemon+Center+Shibuya/@35.6619557,139.6984408,2364m/data=!3m2!1e3!4b1!4m6!3m5!1s0x60188d8434e95ddf:0x1ec5fa74faf17a9a!8m2!3d35.6619557!4d139.6984408!16s%2Fg%2F11j401840c?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=e55de91d-dbce-41d1-b705-be74e8a4a3ce" }
          ]
        },
        {
          title: "☕ Shibuya Scramble Crossing Starbucks",
          duration: "1-2 hours",
          cost: "¥500-1,000",
          photoSpots: ["Crossing view from above", "Crowd time-lapse", "Iconic window shots"],
          coordinates: { lat: 35.659482, lng: 139.7005596 },
          description: "Famous Starbucks overlooking the world's busiest crossing",
          hours: "6:00-22:00",
          notes: "Perfect spot for observing the famous crossing",
          links: [
            { name: "Scramble Crossing Location", url: "https://www.google.com/maps/place/Shibuya+Scramble+Crossing/@35.659482,139.7005596,1143m/data=!3m2!1e3!4b1!4m6!3m5!1s0x60188bcaeb0cd12b:0x20e563a2e0aec969!8m2!3d35.659482!4d139.7005596!16s%2Fg%2F11shy4scrj?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" }
          ]
        }
      ]
    }
  ],
  transportation: [],
  photoSpots: [],
  budget: {
    dailyBudget: "¥15,000",
    spent: "¥16,550",
    breakdown: {
      accommodation: "¥15,900",
      activities: "¥0.00",
      food: "¥0.00",
      transport: "¥650"
    }
  }
};