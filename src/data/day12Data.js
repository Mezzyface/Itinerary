export const day12Data = {
  id: 12,
  title: "Travel to Hiroshima & Arrival",
  date: "2025-12-07",
  city: "Hiroshima",
  country: "Japan",
  overview: "Travel from Fukuoka to Hiroshima and explore the historic city center",
  weather: {
    icon: "🌥️",
    temp: "50°F",
    condition: "Overcast"
  },
  accommodations: {
    name: "Apartment in Hiroshima",
    address: "Hiroshima, Japan",
    checkIn: "December 6, after 3:00 PM",
    checkOut: "December 8, before 11:00 AM",
    confirmationCode: "HMT2E4C89P",
    host: "Hiroshima Host",
    notes: "Apartment in Hiroshima. Staying night of December 7.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMT2E4C89P" }
    ]
  },
  dayPlan: [
    "Morning checkout from Fukuoka Airbnb",
    "Travel to Hiroshima via Shinkansen",
    "Check into family-run guesthouse in Hondori",
    "Evening exploration of Hiroshima city center"
  ],
  mandatoryActivities: [
    {
      id: "fukuoka-checkout",
      title: "Fukuoka Airbnb Checkout",
      time: "11:00 AM",
      location: "5-102 Kamikawabatamachi, Hakata Ward",
      duration: "30 minutes",
      status: "upcoming",
      notes: "Pack and prepare for departure"
    },
    {
      id: "hiroshima-checkin",
      title: "Hiroshima Guesthouse Check-in",
      time: "3:00 PM",
      location: "Hondori, Naka Ward, Hiroshima",
      duration: "30 minutes",
      status: "upcoming",
      confirmationCode: "HMT2E4C89P",
      notes: "Family-run guesthouse with coffee shop. Host: Kunihiro. Smart lock self check-in."
    }
  ],
  timeBlocks: [
    {
      id: "fukuoka-hiroshima-travel",
      title: "Fukuoka to Hiroshima Travel",
      timeRange: "11:30 AM - 2:30 PM",
      options: [
        {
          title: "Shinkansen to Hiroshima",
          duration: "1 hour 20 minutes",
          cost: "¥9,500",
          description: "Fastest route via Sanyo Shinkansen",
          notes: "Direct service from Hakata to Hiroshima Station"
        },
        {
          title: "Highway Bus",
          duration: "3-4 hours",
          cost: "¥3,500",
          description: "Budget option with scenic route",
          notes: "More economical but much longer travel time"
        }
      ]
    },
    {
      id: "hiroshima-evening",
      title: "Evening Hiroshima Exploration",
      timeRange: "4:00 PM - 8:00 PM",
      options: [
        {
          title: "Hondori Shopping Street Walk",
          duration: "2 hours",
          cost: "Free",
          description: "Explore the covered shopping arcade in city center",
          notes: "Perfect for getting oriented and finding dinner spots"
        },
        {
          title: "Peace Memorial Park Preview",
          duration: "1-2 hours",
          cost: "Free",
          description: "Initial visit to the historic peace memorial area",
          notes: "Save detailed visit for tomorrow, just get oriented"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR",
      type: "Shinkansen Kodama",
      departure: {
        location: "Hakata Station",
        time: "12:15 PM"
      },
      arrival: {
        location: "Hiroshima Station", 
        time: "1:35 PM"
      },
      duration: "1 hour 20 minutes",
      cost: "¥9,500",
      notes: "Direct service, then local transport to Hondori area"
    }
  ]
};