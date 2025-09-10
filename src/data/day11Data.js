export const day11Data = {
  id: 11,
  title: "Travel to Hiroshima & Peace Memorial",
  date: "2025-12-06",
  city: "Hiroshima",
  country: "Japan",
  overview: "Travel from Fukuoka to Hiroshima, visit Peace Memorial Park and explore historic Hiroshima",
  weather: {
    icon: "☀️",
    temp: "59°F", 
    condition: "Sunny"
  },
  accommodations: {
    name: "Apartment in Hiroshima",
    address: "Hiroshima, Japan",
    checkIn: "December 6, after 3:00 PM",
    checkOut: "December 8, before 11:00 AM",
    confirmationCode: "HMT2E4C89P",
    host: "Hiroshima Host",
    notes: "Apartment in Hiroshima. Staying night of December 6.",
    totalCost: "Included in Airbnb booking",
    guestDetails: {
      guests: "1 guest"
    },
    links: [
      { name: "Reservation Details", url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMT2E4C89P" }
    ]
  },
  dayPlan: [
    "Morning visit to Kushida Shrine",
    "Explore Ohori Park and Fukuoka Castle ruins", 
    "Lunch at famous Fukuoka ramen shop",
    "Afternoon at Momochihama Beach Tower",
    "Evening yatai (food stall) experience"
  ],
  mandatoryActivities: [
    {
      id: "kushida-shrine",
      title: "Kushida Shrine Visit",
      time: "9:00 AM",
      location: "1-41 Kamikawabatamachi, Hakata Ward",
      duration: "1 hour",
      status: "upcoming",
      notes: "Historic shrine famous for Hakata Gion Yamakasa festival"
    },
    {
      id: "yatai-dinner",
      title: "Yatai Food Stalls Experience", 
      time: "7:00 PM",
      location: "Nakasu District",
      duration: "2 hours",
      status: "upcoming",
      notes: "Traditional outdoor food stalls along the river - try tonkotsu ramen"
    }
  ],
  timeBlocks: [
    {
      id: "morning-culture",
      title: "Cultural Morning",
      timeRange: "9:00 AM - 12:00 PM",
      options: [
        {
          title: "Kushida Shrine & Hakata Traditional Craft Center",
          duration: "3 hours",
          cost: "¥500",
          description: "Visit historic shrine and learn about traditional Hakata crafts",
          notes: "Great photo opportunities and cultural insight"
        },
        {
          title: "Tochoji Temple & Buddha Statue",
          duration: "2 hours",
          cost: "¥300",
          description: "See Japan's largest wooden seated Buddha statue",
          notes: "Peaceful temple complex near Hakata Station"
        }
      ]
    },
    {
      id: "afternoon-modern",
      title: "Modern Fukuoka Experience",
      timeRange: "2:00 PM - 6:00 PM", 
      options: [
        {
          title: "Fukuoka Tower & Momochihama Beach",
          duration: "3 hours",
          cost: "¥800",
          description: "City views from observation deck and seaside relaxation",
          notes: "Great sunset views if timing is right"
        },
        {
          title: "Ohori Park & Fukuoka Art Museum",
          duration: "4 hours",
          cost: "¥1,000",
          description: "Beautiful park with traditional garden and art collections",
          notes: "Perfect for a relaxing afternoon walk"
        }
      ]
    },
    {
      id: "ramen-lunch",
      title: "Authentic Fukuoka Ramen",
      timeRange: "12:00 PM - 1:30 PM",
      options: [
        {
          title: "Ippudo Ramen (Original Shop)",
          duration: "1 hour",
          cost: "¥1,200",
          description: "Famous tonkotsu ramen at the original location",
          notes: "Expect queues but worth the wait",
          links: [
            {
              name: "Ippudo Daimyo Location",
              url: "https://maps.app.goo.gl/fukuoka-ippudo"
            }
          ]
        },
        {
          title: "Ichiran Ramen Honten",
          duration: "45 minutes",
          cost: "¥1,000",
          description: "Individual booth ramen experience at flagship store",
          notes: "Customize your ramen to perfection"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "Fukuoka City Subway",
      type: "Day Pass",
      departure: {
        location: "Hakata Station",
        time: "8:30 AM"
      },
      arrival: {
        location: "Various stations",
        time: "Throughout day"
      },
      duration: "All day",
      cost: "¥800",
      notes: "Unlimited subway rides for the day"
    }
  ]
};