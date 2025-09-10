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
  dayPlan: [
    "Morning visit to Meiji Shrine and Harajuku",
    "Explore Shibuya Crossing and Center Gai",
    "Afternoon in Akihabara electronic district",
    "Evening in Golden Gai or Robot Restaurant"
  ],
  mandatoryActivities: [
    {
      id: "meiji-shrine",
      title: "Meiji Shrine Visit",
      time: "9:00 AM",
      location: "Shibuya, Tokyo",
      duration: "1.5 hours",
      status: "upcoming",
      notes: "Tokyo's most important shrine, peaceful forest setting in the city"
    },
    {
      id: "shibuya-crossing",
      title: "Shibuya Crossing Experience",
      time: "11:30 AM",
      location: "Shibuya Station",
      duration: "1 hour",
      status: "upcoming",
      notes: "World's busiest pedestrian crossing, iconic Tokyo experience"
    }
  ],
  timeBlocks: [
    {
      id: "harajuku-culture",
      title: "Harajuku Pop Culture District",
      timeRange: "10:00 AM - 12:00 PM",
      options: [
        {
          title: "Takeshita Street Shopping",
          duration: "2 hours",
          cost: "¥3,000",
          description: "Youth culture epicenter with quirky fashion and snacks",
          notes: "Best on weekends for people watching and street fashion"
        },
        {
          title: "Omotesando Hills Upscale Shopping",
          duration: "1.5 hours",
          cost: "Window shopping",
          description: "Luxury shopping with modern architecture",
          notes: "More sophisticated alternative to Takeshita Street"
        }
      ]
    },
    {
      id: "akihabara-tech",
      title: "Akihabara Electronics & Anime District",
      timeRange: "2:00 PM - 5:00 PM",
      options: [
        {
          title: "Full Akihabara Experience",
          duration: "3 hours",
          cost: "¥2,500",
          description: "Electronics shops, anime stores, manga cafes, arcades",
          notes: "Paradise for tech and anime enthusiasts",
          photoSpots: ["Akihabara Main Street", "Giant electronic billboards", "Vintage arcade machines"]
        },
        {
          title: "Maid Cafe Cultural Experience",
          duration: "1 hour",
          cost: "¥2,000",
          description: "Unique Japanese pop culture phenomenon",
          notes: "Cultural curiosity rather than typical tourist activity"
        }
      ]
    },
    {
      id: "evening-entertainment",
      title: "Tokyo Nightlife Experience",
      timeRange: "7:00 PM - 10:00 PM",
      options: [
        {
          title: "Golden Gai Bar Hopping",
          duration: "3 hours",
          cost: "¥5,000",
          description: "Tiny themed bars in historic alley district",
          notes: "Atmospheric drinking quarter with character bars",
          links: [
            {
              name: "Golden Gai Guide",
              url: "https://www.shinjuku-goldengai.com/"
            }
          ]
        },
        {
          title: "Robot Restaurant Show",
          duration: "2 hours",
          cost: "¥8,000",
          description: "Over-the-top robot and laser light entertainment",
          notes: "Uniquely Japanese spectacle - book in advance"
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