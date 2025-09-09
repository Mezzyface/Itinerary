export const day16Data = {
  id: 16,
  title: "Final Tokyo Day & Traditional Culture",
  date: "2025-12-10",
  city: "Tokyo",
  country: "Japan",
  overview: "Experience traditional Tokyo districts, final shopping, and reflection on the journey",
  weather: {
    icon: "🌥️",
    temp: "9°C",
    condition: "Overcast"
  },
  accommodations: {
    checkIn: "Already checked in",
    checkOut: "10:00 AM (Dec 11)",
    links: [{
      name: "Shinjuku Private Room near Gyoen",
      url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM5S8ARHRQ"
    }]
  },
  dayPlan: [
    "Morning visit to Senso-ji Temple in Asakusa",
    "Traditional Tokyo neighborhoods exploration",
    "Final souvenir shopping in Ginza or Shibuya",
    "Farewell dinner at high-quality restaurant",
    "Evening reflection and packing"
  ],
  mandatoryActivities: [
    {
      id: "sensoji-temple",
      title: "Senso-ji Temple & Asakusa District",
      time: "9:00 AM",
      location: "Asakusa, Tokyo",
      duration: "2.5 hours",
      status: "upcoming",
      notes: "Tokyo's oldest temple (645 AD) - perfect way to end the journey with tradition"
    },
    {
      id: "farewell-dinner",
      title: "Farewell Dinner",
      time: "7:00 PM",
      location: "Shinjuku or Shibuya",
      duration: "2 hours",
      status: "upcoming",
      notes: "Memorable final meal to celebrate the complete Japan adventure"
    }
  ],
  timeBlocks: [
    {
      id: "asakusa-traditional",
      title: "Traditional Asakusa Experience",
      timeRange: "9:00 AM - 12:30 PM",
      options: [
        {
          title: "Complete Asakusa Cultural Tour",
          duration: "3.5 hours",
          cost: "¥1,500",
          description: "Senso-ji Temple, Nakamise Shopping Street, traditional crafts, rickshaw ride",
          notes: "Perfect contrast to modern Tokyo - shows Japan's traditional heart",
          photoSpots: ["Thunder Gate (Kaminarimon)", "Five-story Pagoda", "Traditional shopping street"]
        },
        {
          title: "Temple and Gardens Focus",
          duration: "2 hours",
          cost: "¥500",
          description: "Peaceful temple grounds and traditional architecture",
          notes: "More contemplative experience for final temple visit"
        }
      ]
    },
    {
      id: "final-shopping",
      title: "Final Souvenir Shopping",
      timeRange: "2:00 PM - 5:00 PM",
      options: [
        {
          title: "Ginza Luxury Shopping District",
          duration: "3 hours",
          cost: "¥5,000+",
          description: "High-end department stores, traditional crafts, quality souvenirs",
          notes: "Best for quality items and traditional Japanese goods"
        },
        {
          title: "Shibuya & Harajuku Shopping",
          duration: "3 hours", 
          cost: "¥3,000",
          description: "Pop culture items, trendy fashion, unique Tokyo souvenirs",
          notes: "More eclectic and youth-oriented shopping experience"
        },
        {
          title: "Tokyo Station Character Street",
          duration: "2 hours",
          cost: "¥2,500",
          description: "Anime, manga, and character merchandise under Tokyo Station",
          notes: "Convenient for departure day shopping"
        }
      ]
    },
    {
      id: "farewell-dining",
      title: "Memorable Farewell Dinner",
      timeRange: "7:00 PM - 9:30 PM",
      options: [
        {
          title: "High-End Sushi Experience",
          duration: "2.5 hours",
          cost: "¥12,000",
          description: "Omakase sushi dinner to celebrate the complete journey",
          notes: "Perfect way to end with Japan's most famous cuisine"
        },
        {
          title: "Traditional Kaiseki Dinner",
          duration: "2 hours",
          cost: "¥8,000",
          description: "Multi-course traditional Japanese fine dining",
          notes: "Artistic presentation and seasonal ingredients"
        },
        {
          title: "Local Izakaya Celebration",
          duration: "2 hours",
          cost: "¥4,000",
          description: "Casual Japanese pub with variety of dishes and drinks",
          notes: "More relaxed atmosphere for reflecting on the adventure"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "Tokyo Metro",
      type: "Individual tickets",
      departure: {
        location: "Shinjuku",
        time: "8:30 AM"
      },
      arrival: {
        location: "Asakusa",
        time: "9:00 AM"
      },
      duration: "30 minutes",
      cost: "¥200",
      notes: "Final day of Tokyo metro system - familiar by now"
    }
  ]
};