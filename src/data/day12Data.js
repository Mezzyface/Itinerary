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
  dayPlan: {
    morning: "Free morning in Hiroshima - explore city center and local attractions",
    afternoon: "12:00 - Hiroshima-style okonomiyaki lunch, Peace Memorial Park exploration",
    evening: "Free evening in Hiroshima - local dining and neighborhood exploration"
  },
  mandatoryActivities: [],
  timeBlocks: [
    {
      id: "hiroshima-okonomiyaki-lunch",
      timeRange: "12:00 - 13:30",
      title: "🍳 Hiroshima-style Okonomiyaki",
      options: [
        {
          title: "🍳 Authentic Hiroshima Okonomiyaki",
          duration: "1.5 hours",
          cost: "¥1,000-2,000",
          photoSpots: ["Layered okonomiyaki preparation", "Teppan cooking process", "Local restaurant atmosphere", "Food close-ups"],
          coordinates: { lat: 34.3853, lng: 132.4553 },
          description: "Experience authentic Hiroshima-style okonomiyaki - the regional specialty! Layered construction with noodles, cabbage, and ingredients stacked separately.",
          hours: "11:00-21:00 (typical)",
          links: [
            { name: "Hiroshima Okonomiyaki Guide", url: "https://www.hiroshima-navi.or.jp/en/gourmet/okonomiyaki/" }
          ],
          notes: "Hiroshima-style: ingredients layered separately with yakisoba noodles, different from Osaka style. Much more cabbage!",
          breakdown: {
            "Basic okonomiyaki": "¥800-1,200",
            "Premium toppings": "¥200-500",
            "Drinks": "¥300-500"
          }
        }
      ]
    }
  ],
  transportation: [
   
  ]
};