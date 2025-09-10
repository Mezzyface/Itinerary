export const day13Data = {
  id: 13,
  title: "Tokyo Return & Shinjuku Exploration",
  date: "2025-12-08",
  city: "Tokyo",
  country: "Japan",
  overview: "Travel from Hiroshima to Tokyo Shinjuku and begin final Tokyo exploration",
  weather: {
    icon: "☀️",
    temp: "54°F",
    condition: "Clear"
  },
  accommodations: {
    name: "Apartment in Shinjuku",
    address: "Shinjuku, Tokyo, Japan",
    checkIn: "December 8, after 3:00 PM",
    checkOut: "December 11, before 11:00 AM",
    confirmationCode: "HM5S8ARHRQ",
    host: "Tokyo Host",
    notes: "Apartment in Shinjuku, Tokyo. Staying night of December 8.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM5S8ARHRQ" }
    ]
  },
  dayPlan: [
    "Morning visit to Peace Memorial Park and Museum",
    "Lunch at local Hiroshima okonomiyaki restaurant",
    "Afternoon ferry to Miyajima Island",
    "Explore Itsukushima Shrine and famous floating torii",
    "Return to Hiroshima for evening"
  ],
  mandatoryActivities: [
    {
      id: "peace-memorial",
      title: "Peace Memorial Park & Museum Visit",
      time: "9:00 AM",
      location: "Peace Memorial Park, Naka Ward",
      duration: "3 hours",
      status: "upcoming",
      notes: "Moving memorial to atomic bomb victims. Allow time for reflection."
    },
    {
      id: "miyajima-visit",
      title: "Miyajima Island & Itsukushima Shrine",
      time: "2:00 PM",
      location: "Miyajima Island",
      duration: "4 hours",
      status: "upcoming",
      notes: "Famous floating torii gate. Check tide times for best photos."
    }
  ],
  timeBlocks: [
    {
      id: "peace-memorial-exploration",
      title: "Peace Memorial Experience",
      timeRange: "9:00 AM - 12:30 PM",
      options: [
        {
          title: "Full Memorial Park Tour",
          duration: "3.5 hours",
          cost: "¥600",
          description: "Peace Memorial Museum, Atomic Bomb Dome, Peace Memorial Hall",
          notes: "Emotionally powerful experience, plan accordingly",
          links: [
            {
              name: "Peace Memorial Museum",
              url: "https://hpmmuseum.jp/"
            }
          ]
        },
        {
          title: "Abbreviated Memorial Visit",
          duration: "2 hours",
          cost: "¥200",
          description: "Atomic Bomb Dome and outdoor memorials",
          notes: "Less intensive option while still being respectful"
        }
      ]
    },
    {
      id: "hiroshima-okonomiyaki",
      title: "Authentic Hiroshima Okonomiyaki",
      timeRange: "12:30 PM - 1:30 PM",
      options: [
        {
          title: "Okonomimura Food Theme Park",
          duration: "1 hour",
          cost: "¥1,500",
          description: "Multiple okonomiyaki stalls in one building",
          notes: "Tourist-friendly with many options to try"
        },
        {
          title: "Local Neighborhood Shop",
          duration: "45 minutes",
          cost: "¥1,200",
          description: "Authentic local experience away from crowds",
          notes: "More authentic but may require basic Japanese"
        }
      ]
    },
    {
      id: "miyajima-island-tour",
      title: "Miyajima Island Exploration",
      timeRange: "2:00 PM - 6:00 PM",
      options: [
        {
          title: "Complete Island Experience",
          duration: "4 hours",
          cost: "¥2,500",
          description: "Itsukushima Shrine, Mount Misen ropeway, island walking",
          notes: "Full experience including mountain views and shrine",
          breakdown: {
            "Ferry round trip": "¥370",
            "Shrine admission": "¥300",
            "Ropeway (optional)": "¥1,800"
          }
        },
        {
          title: "Shrine and Shoreline Focus",
          duration: "3 hours", 
          cost: "¥670",
          description: "Focus on famous torii gate and shrine complex",
          notes: "More relaxed pace, perfect for photography"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR + Ferry",
      type: "Train and Ferry Combo",
      departure: {
        location: "Hiroshima Station",
        time: "1:30 PM"
      },
      arrival: {
        location: "Miyajima Island",
        time: "2:15 PM"
      },
      duration: "45 minutes total",
      cost: "¥420",
      notes: "JR Sanyo Line to Miyajimaguchi, then ferry to island"
    }
  ]
};