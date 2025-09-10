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
  dayPlan: [
    "Morning checkout from Hiroshima guesthouse",
    "Shinkansen journey back to Tokyo",
    "Afternoon check-in to Shinjuku accommodation",
    "Evening OpenBook Tokyo visit"
  ],
  mandatoryActivities: [
    {
      id: "hiroshima-checkout",
      title: "Hiroshima Guesthouse Checkout",
      time: "10:00 AM",
      location: "Hondori, Naka Ward, Hiroshima",
      duration: "30 minutes",
      status: "upcoming",
      notes: "Pack and say goodbye to Kunihiro's family"
    },
    {
      id: "shinjuku-checkin",
      title: "Shinjuku Accommodation Check-in",
      time: "3:00 PM",
      location: "6-chōme-5-7 Shinjuku, Bell Tree 101",
      duration: "30 minutes",
      status: "upcoming",
      confirmationCode: "HM5S8ARHRQ",
      notes: "Host Okamoto greets guests. Card key provided. 7 mins walk to Shinjuku Gyoen."
    }
  ],
  timeBlocks: [
    {
      id: "hiroshima-tokyo-travel",
      title: "Hiroshima to Tokyo Shinkansen",
      timeRange: "10:30 AM - 2:30 PM",
      options: [
        {
          title: "Nozomi Shinkansen Direct",
          duration: "4 hours",
          cost: "¥19,440",
          description: "Fastest direct service to Tokyo Station",
          notes: "Most convenient option, arrives with time for check-in"
        },
        {
          title: "Hikari Shinkansen",
          duration: "4.5 hours",
          cost: "¥18,040",
          description: "Slightly slower but still comfortable",
          notes: "Good value option with similar comfort level"
        }
      ]
    },
    {
      id: "openbook-tokyo-evening",
      title: "OpenBook Tokyo Cultural Experience",
      timeRange: "7:00 PM - 9:00 PM",
      options: [
        {
          title: "Complete OpenBook Experience",
          duration: "2 hours",
          cost: "Free entry + purchases",
          description: "Explore this unique bookstore and cultural space that combines literature, art, and community",
          notes: "OpenBook Tokyo is more than a bookstore - it's a cultural hub with curated books, events, and creative atmosphere",
          photoSpots: ["Unique book displays", "Art installations", "Cultural space interior"],
          coordinates: { lat: 35.6598, lng: 139.7007 },
          breakdown: {
            "Books/Items": "¥2,000-5,000 (optional)"
          },
          links: [{
            name: "OpenBook Tokyo About",
            url: "https://www.openbook.tokyo/pages/about"
          }]
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