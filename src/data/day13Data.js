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
  ],
  mandatoryActivities: [
    {
      id: "hiroshima-checkout",
      time: "10:00",
      title: "🏠 Hiroshima Apartment Checkout",
      duration: "30 minutes",
      location: "Hiroshima Apartment",
      status: "upcoming",
      notes: "Check out of Hiroshima apartment, prepare for Tokyo travel",
      confirmationCode: "HMT2E4C89P"
    },
    {
      id: "tokyo-checkin",
      time: "15:00",
      title: "🏠 Tokyo Shinjuku Check-in",
      duration: "30 minutes",
      location: "Shinjuku Apartment",
      status: "upcoming",
      notes: "Check into final Tokyo accommodation in Shinjuku",
      confirmationCode: "HM5S8ARHRQ"
    }
  ],
  timeBlocks: [
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