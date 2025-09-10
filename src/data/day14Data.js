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
    "Evening exploration of Shinjuku district"
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
      id: "shinjuku-orientation",
      title: "Shinjuku District Orientation",
      timeRange: "4:00 PM - 8:00 PM",
      options: [
        {
          title: "Shinjuku Walking Tour",
          duration: "3 hours",
          cost: "Free",
          description: "Explore major areas: East/South/West exits, Kabukicho, Golden Gai preview",
          notes: "Get oriented with the massive station complex and districts"
        },
        {
          title: "Shinjuku Gyoen Park Visit",
          duration: "2 hours",
          cost: "¥500",
          description: "Peaceful garden retreat from city bustle",
          notes: "Perfect for jet lag recovery and relaxation"
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
      notes: "Transfer to JR Yamanote Line to Shinjuku (15 mins)"
    }
  ]
};