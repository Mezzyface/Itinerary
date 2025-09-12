export const day15Data = {
  id: 15,
  title: "Tokyo Modern Districts & Culture",
  date: "2025-12-10",
  city: "Tokyo",
  country: "Japan",
  overview: "Explore Tokyo's modern districts, technology, and pop culture scenes",
  weather: {
    icon: "☀️",
    temp: "50°F",
    condition: "Clear"
  },
  accommodations: {
    name: "Apartment in Shinjuku",
    address: "Shinjuku, Tokyo, Japan",
    checkIn: "December 8, after 3:00 PM",
    checkOut: "December 11, before 11:00 AM",
    confirmationCode: "HM5S8ARHRQ",
    host: "Tokyo Host",
    notes: "Apartment in Shinjuku, Tokyo. Staying night of December 10.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM5S8ARHRQ" }
    ]
  },
  dayPlan: {
    morning: "Free morning in Tokyo - explore modern districts and attractions",
    afternoon: "Tokyo culture and technology exploration - pop culture scenes",
    evening: "19:00 - Janai Coffee speakeasy visit"
  },
  mandatoryActivities: [
    {
      id: "janai-coffee",
      title: "Janai Coffee Speakeasy Visit",
      time: "7:00 PM",
      location: "Tokyo",
      duration: "2 hours",
      status: "upcoming",
      notes: "Hidden coffee bar speakeasy with unique atmosphere"
    }
  ],
  timeBlocks: [
    {
      id: "evening-entertainment",
      title: "Janai Coffee Speakeasy",
      timeRange: "7:00 PM - 9:00 PM",
      options: [
        {
          title: "Janai Coffee Speakeasy",
          duration: "2 hours",
          cost: "¥3,000",
          description: "Hidden coffee bar speakeasy with unique atmosphere",
          notes: "Secret coffee speakeasy - perfect for evening drinks",
          links: [
            {
              name: "Janai Coffee",
              url: "https://janaicoffee.tokyo/"
            }
          ]
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "Tokyo Metro",
      type: "Day Pass",
      departure: {
        location: "Shinjuku",
        time: "8:30 AM"
      },
      arrival: {
        location: "Various stations",
        time: "Throughout day"
      },
      duration: "All day",
      cost: "¥1,590",
      notes: "Unlimited rides on JR Yamanote Line and Metro lines"
    }
  ]
};