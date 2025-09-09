// Day 5 Data - Kyoto - Higashiyama Temple District Tour
// Sunday, November 30, 2025

export const day5Data = {
  id: "day-5",
  date: "2025-11-30",
  title: "Kyoto Higashiyama Temple District Tour",
  city: "Kyoto",
  country: "Japan", 
  coordinates: { lat: 35.0116, lng: 135.7681 },
  overview: "🏯 Early departure from Mount Fuji camping to Kyoto, then immersive temple and shrine adventure through historic Higashiyama district! Comprehensive goshuin collection tour through traditional temples, ending with magical evening illuminations and speakeasy experience.",
  weather: {
    temp: "8-16°C (46-61°F)",
    condition: "Cool autumn weather, perfect for temple hopping", 
    icon: "🍂"
  },
  accommodations: {
    name: "FreeBreakfast&WIFI*NEAR→Nijojo*CozyKoreanMom'sHome",
    address: "180 Jurakumawari Nishimachi, Nakagyō-ku, Kyōto-shi, Kyōto-fu 604-8402, Japan",
    checkIn: "After arrival from Mount Fuji camping - November 30, 15:00",
    checkOut: "December 2, 11:00 AM",
    confirmationCode: "HMCDYDAZEN",
    host: "寧保 (Ningbao)",
    notes: "Cozy Korean mom's home near Nijo Castle with free breakfast & WiFi. Local Kyoto tax ¥200 per guest per night collected at check-in. Host greets you - reach out for check-in instructions.",
    totalCost: "$174.11",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMCDYDAZEN" }
    ]
  },
  mandatoryActivities: [
    {
      id: "campsite-departure",
      time: "05:30",
      title: "🏕️ Pack Up Fujikawa Camp",
      duration: "30 minutes",
      location: "Fujikawa Camp",
      status: "upcoming",
      notes: "Early departure - pack campsite and prepare for epic Kyoto adventure",
      confirmationCode: "TENT112925"
    },
    {
      id: "travel-to-kyoto",
      time: "06:00",
      title: "🚄 Mount Fuji → Kyoto Express Journey",
      duration: "2.5 hours",
      location: "Fujikawa Camp → Kyoto Station",
      status: "upcoming",
      notes: "Early morning travel from campsite to Kawaguchiko Station, then express route to Kyoto for temple tour",
      links: [
        { name: "Fujikawa Camp to Kyoto Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00007890&goal=00001756&start_name=Fujikawa&goal_name=Kyoto&cid=&from=route_top_search_box&date_time=2025-11-29T11%3A00&ferry=false&taxi=false" }
      ]
    },
    {
      id: "airbnb-checkin-kyoto",
      time: "09:00",
      title: "🏠 Kyoto Airbnb Check-in",
      duration: "30 minutes",
      location: "Central Kyoto Airbnb",
      status: "upcoming",
      notes: "Check in to central Kyoto accommodation and prepare for Higashiyama temple district tour",
      confirmationCode: "HMCDYDAZEN",
      links: [
        { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMCDYDAZEN" }
      ]
    },
    {
      id: "premium-tonkatsu-dinner",
      time: "19:00",
      title: "🥩 Wagyu Tonkatsu Ten no Meshi",
      duration: "1.5 hours",
      location: "Gion Shijo District",
      status: "upcoming",
      notes: "Premium tonkatsu restaurant - domestic pork & Wagyu beef cutlet with kamado rice",
      confirmationCode: "TONKATSU113025",
      links: [
        { name: "Restaurant Details", url: "https://tabelog.com/en/kyoto/A2601/A260301/26043082/" }
      ]
    }
  ],
  timeBlocks: [
    {
      id: "morning-exploration",
      timeRange: "09:30 - 11:00",
      title: "🏯 Kyoto Traditional District Exploration",
      options: [
        {
          title: "🏯 Gion District Morning Walk",
          duration: "1.5 hours",
          cost: "¥0",
          photoSpots: ["Traditional wooden buildings", "Geisha district streets", "Historic tea houses", "Morning light on cobblestones"],
          coordinates: { lat: 35.0039, lng: 135.7751 },
          description: "Peaceful morning exploration of historic Gion district before temple hopping begins",
          hours: "09:30-11:00",
          notes: "Perfect introduction to Kyoto's traditional atmosphere"
        }
      ]
    },
    {
      id: "higashiyama-temple-tour",
      timeRange: "11:30 - 16:30",
      title: "⛩️ Higashiyama District Temple Marathon",
      options: [
        {
          title: "📿 Goshuin #1: Yasaka Shrine",
          duration: "30 minutes",
          cost: "¥500",
          photoSpots: ["Iconic shrine entrance", "Traditional vermillion buildings", "Gion district views", "Sacred lanterns"],
          coordinates: { lat: 35.0036, lng: 135.7785 },
          description: "Famous Yasaka Shrine - gateway to Higashiyama temple district",
          hours: "11:30-12:00",
          links: [
            { name: "Yasaka Shrine", url: "https://maps.app.goo.gl/JT2BEAoVLzTK9FVc6" },
            { name: "Shrine Site", url: "https://www.yasaka-jinja.or.jp/prize_all/" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #2: Kodai-ji Temple",
          duration: "30 minutes",
          cost: "¥600",
          photoSpots: ["Zen garden", "Bamboo groves", "Traditional temple halls", "Stone pathways"],
          coordinates: { lat: 35.0015, lng: 135.7806 },
          description: "Historic Zen temple with beautiful gardens and architecture",
          hours: "12:00-12:30",
          links: [
            { name: "Kodai-ji Temple", url: "https://maps.app.goo.gl/ibkmHS5gZWhWoTSP6" },
            { name: "Temple Goshuin Map", url: "https://www.kodaiji.com/goshuinmap.pdf" }
          ],
          breakdown: {
            "Temple Entry": "¥100",
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #3: Entoku-in Temple",
          duration: "30 minutes",
          cost: "¥600",
          photoSpots: ["Zen meditation gardens", "Traditional tea house", "Autumn maple trees", "Stone lanterns"],
          coordinates: { lat: 35.0015, lng: 135.7806 },
          description: "Serene temple with meditation gardens and traditional architecture",
          hours: "12:30-13:00",
          links: [
            { name: "Entoku-in Temple", url: "https://maps.app.goo.gl/bQYfEFnzQpVgixQ16" },
            { name: "Temple Site", url: "https://www.kodaiji.com/entoku-in/index.html" }
          ],
          breakdown: {
            "Temple Entry": "¥100",
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #4: Chion-in Temple",
          duration: "45 minutes",
          cost: "¥600",
          photoSpots: ["Massive temple gates", "Grand temple halls", "Traditional architecture", "Temple complex views"],
          coordinates: { lat: 35.0078, lng: 135.7847 },
          description: "One of Kyoto's largest temple complexes with impressive architecture",
          hours: "14:30-15:15",
          links: [
            { name: "Chion-in Temple", url: "https://maps.app.goo.gl/d8B51tkW2NAa6M18A" },
            { name: "Temple Goshuin Info", url: "https://www.chion-in.or.jp/en/guide/goshuin.php" }
          ],
          breakdown: {
            "Temple Entry": "¥100",
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #5: Shoren-in Temple",
          duration: "45 minutes",
          cost: "¥600",
          photoSpots: ["Temple gardens", "Traditional halls", "Meditation spaces", "Peaceful courtyards"],
          coordinates: { lat: 35.0108, lng: 135.7841 },
          description: "Beautiful temple complex with traditional Japanese gardens",
          hours: "15:15-16:00",
          links: [
            { name: "Shoren-in Temple", url: "https://maps.app.goo.gl/CxiUdNc2jsqx8pme6" },
            { name: "Temple Site", url: "https://www.shorenin.com/" }
          ],
          breakdown: {
            "Temple Entry": "¥100",
            "Goshuin": "¥500"
          }
        },
        {
          title: "📿 Goshuin #6: Awata Shrine",
          duration: "30 minutes",
          cost: "¥500",
          photoSpots: ["Shrine grounds", "Traditional torii", "Sacred buildings", "Final collection moment"],
          coordinates: { lat: 35.0133, lng: 135.7869 },
          description: "Final shrine for completing the Higashiyama district goshuin collection",
          hours: "16:00-16:30",
          links: [
            { name: "Awata Shrine", url: "https://maps.app.goo.gl/EynAbhea17FYkyVk7" },
            { name: "Shrine Site", url: "https://awatajinja.jp/" }
          ],
          breakdown: {
            "Goshuin": "¥500"
          }
        }
      ]
    },
    {
      id: "evening-illuminations",
      timeRange: "17:00 - 19:00",
      title: "✨ Magical Evening Illuminations",
      options: [
        {
          title: "✨ Kodai-ji Evening Illuminations",
          duration: "2 hours",
          cost: "¥600",
          photoSpots: ["Illuminated gardens", "Light displays", "Night temple views", "Special goshuin ceremony"],
          coordinates: { lat: 35.0015, lng: 135.7806 },
          description: "Famous autumn night illuminations - be first in line for special glowing goshuin in illuminated gardens",
          hours: "17:00-19:00",
          links: [
            { name: "Kodai-ji Illuminations", url: "https://www.kodaiji.com/illumination/" }
          ],
          breakdown: {
            "Illumination Ticket": "¥600"
          },
          notes: "Special illuminated goshuin only available during evening light displays"
        }
      ]
    },
    {
      id: "kyoto-nightlife",
      timeRange: "21:00 - 23:00",
      title: "🍸 Kyoto Speakeasy Experience",
      options: [
        {
          title: "🍸 Bee's Knees Prohibition Bar",
          duration: "1.5 hours",
          cost: "¥3,000-4,000",
          photoSpots: ["Prohibition atmosphere", "Japanese cocktails", "Speakeasy interior", "Signature drinks"],
          coordinates: { lat: 35.0116, lng: 135.7681 },
          description: "Prohibition-era themed speakeasy with Japanese-flavored cocktails - try Ninja Smash or Truffle Bee's Knees",
          hours: "21:00-22:30",
          links: [
            { name: "Bee's Knees Guide", url: "https://sipswithkilala.com/my-favorites/bars/breweries/distilleries/kyoto-beesknees" }
          ],
          notes: "364 Kamiyacho, Nakagyo-ku. Open 6pm-1am, closed Mondays. No reservations - first-come basis!"
        }
      ]
    }
  ],
  transportation: [
    {
      id: "fuji-to-kyoto",
      departure: {
        location: "Fujikawa Camp",
        time: "06:00"
      },
      arrival: {
        location: "Kyoto Station",
        time: "08:30"
      },
      provider: "JR",
      type: "Express Connection",
      duration: "2.5 hours",
      cost: "¥4,500",
      notes: "Early morning journey from Mount Fuji camping to Kyoto for temple tour",
      links: [
        { name: "Fujikawa to Kyoto Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00007890&goal=00001756&start_name=Fujikawa&goal_name=Kyoto&cid=&from=route_top_search_box&date_time=2025-11-29T11%3A00&ferry=false&taxi=false" }
      ]
    },
    {
      id: "kyoto-to-gion",
      departure: {
        location: "Kyoto Station",
        time: "09:00"
      },
      arrival: {
        location: "Gion-Shijo Station",
        time: "09:15"
      },
      provider: "Keihan",
      type: "Main Line",
      duration: "15 minutes",
      cost: "¥200",
      notes: "Direct route from Kyoto Station to Gion district for Higashiyama temple hopping tour",
      links: [
        { name: "Kyoto to Gion Route", url: "https://japantravel.navitime.com/en/area/jp/route/result/?start=00001756&goal=00003184&start_name=Kyoto&goal_name=Gionshijo&cid=&from=route_top_search_box&date_time=2025-11-30T09%3A00&ferry=false&taxi=false" }
      ]
    }
  ],
  photoSpots: [
    {
      name: "📿 Higashiyama Goshuin Collection",
      description: "Six temple and shrine goshuin stamps collected throughout Higashiyama district"
    },
    {
      name: "⛩️ Yasaka Shrine Traditional Architecture",
      description: "Classic Kyoto shrine entrance and vermillion buildings"
    },
    {
      name: "✨ Kodai-ji Illuminated Gardens",
      description: "Magical night illuminations with special evening goshuin ceremony"
    },
    {
      name: "🌸 Maruyama Park Temple Views",
      description: "Scenic park views connecting multiple temple locations"
    },
    {
      name: "🍸 Prohibition Speakeasy Atmosphere",
      description: "Bee's Knees bar interior and signature Japanese cocktails"
    }
  ],
  budget: {
    dailyBudget: "¥10,000",
    spent: "¥9,300",
    breakdown: {
      accommodation: "¥8,000",
      activities: "¥3,600",
      food: "¥4,000",
      transport: "¥4,700"
    }
  },
  culturalTips: [
    "⛩️ Goshuin etiquette: Present your book respectfully, wait patiently for calligraphy",
    "🏯 Gion district: Respect geisha privacy, no photos without permission",
    "🍂 Temple photography: Ask permission, some areas restrict photos",
    "👘 Respect temple rules: Remove hats, speak quietly, follow designated paths",
    "💰 Carry plenty of small bills: ¥100 and ¥500 coins for temple entries",
    "📖 Goshuin books: Handle with care - considered sacred objects"
  ],
  importantNotes: [
    "🏯 Start early for peaceful temple experience before crowds arrive",
    "📿 Bring goshuin book - collecting 6 stamps throughout Higashiyama district",
    "💴 Budget ¥500-600 per goshuin + temple entrance fees",
    "✨ Evening illuminations require separate tickets - arrive early",
    "🍸 Bee's Knees: No reservations, first-come basis - arrive by 9 PM",
    "👟 Wear comfortable shoes - extensive walking through historic districts",
    "🏯 Respect traditional areas - follow local customs and quiet behavior"
  ]
};