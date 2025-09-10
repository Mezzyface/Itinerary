export const day10Data = {
  id: 10,
  title: "Travel to Fukuoka & Arrival",
  date: "2025-12-05",
  city: "Fukuoka",
  country: "Japan",
  overview: "Travel from Osaka to Fukuoka and check into Hakata accommodation",
  weather: {
    icon: "🌤️",
    temp: "54°F",
    condition: "Partly cloudy"
  },
  accommodations: {
    name: "House in Hakata Ward",
    address: "Hakata Ward, Fukuoka, Japan",
    checkIn: "December 4, after 3:00 PM",
    checkOut: "December 6, before 11:00 AM",
    confirmationCode: "HMMK8QPSFC",
    host: "Fukuoka Host",
    notes: "House in Hakata Ward, Fukuoka. Staying night of December 5.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMMK8QPSFC" }
    ]
  },
  dayPlan: [
    "Morning checkout from Osaka capsule hotel",
    "Travel to Fukuoka via Shinkansen",
    "Arrive in Hakata and check into Airbnb",
    "Evening exploration of Hakata district"
  ],
  mandatoryActivities: [
    {
      id: "fukuoka-checkin",
      title: "Airbnb Check-in",
      time: "4:00 PM",
      location: "5-102 Kamikawabatamachi, Hakata Ward",
      duration: "30 minutes",
      status: "upcoming",
      confirmationCode: "HMMK8QPSFC",
      notes: "Host: Naoki, Co-host: Hiro & Saaya"
    }
  ],
  timeBlocks: [
    {
      id: "osaka-departure",
      title: "Departure from Osaka",
      timeRange: "9:00 AM - 12:00 PM",
      options: [
        {
          title: "Shinkansen to Fukuoka",
          duration: "2.5-3 hours",
          cost: "¥15,000-20,000",
          description: "Fastest route via Tokaido/Sanyo Shinkansen",
          notes: "Book reserved seats in advance for comfort"
        }
      ]
    },
    {
      id: "hakata-exploration",
      title: "Evening Hakata Exploration",
      timeRange: "5:00 PM - 9:00 PM",
      options: [
        {
          title: "Hakata Station Area Walk",
          duration: "2-3 hours",
          cost: "Free",
          description: "Explore the modern Hakata Station complex and surrounding area",
          notes: "Great for getting oriented and finding dinner options"
        },
        {
          title: "Canal City Hakata Visit",
          duration: "1-2 hours", 
          cost: "Free entry",
          description: "Large shopping and entertainment complex with unique architecture",
          notes: "Famous for its canal running through the center"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR",
      type: "Shinkansen",
      departure: {
        location: "Osaka Station",
        time: "10:00 AM"
      },
      arrival: {
        location: "Hakata Station", 
        time: "1:00 PM"
      },
      duration: "3 hours",
      cost: "¥15,590",
      notes: "Hikari or Kodama service to Hakata"
    }
  ]
};