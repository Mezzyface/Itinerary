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

  ],
  mandatoryActivities: [],
  timeBlocks: [

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