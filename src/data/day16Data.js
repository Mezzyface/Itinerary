export const day16Data = {
  id: 16,
  title: "Small Worlds Tokyo & Airport Departure",
  date: "2025-12-11",
  city: "Tokyo",
  country: "Japan",
  overview: "Visit Small Worlds Tokyo miniature museum in the morning, then head to the airport for departure",
  weather: {
    icon: "🌥️",
    temp: "48°F",
    condition: "Overcast"
  },
  accommodations: {
    checkIn: "Already checked in",
    checkOut: "10:00 AM (Dec 11)",
    links: [{
      name: "Shinjuku Private Room near Gyoen",
      url: "https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM5S8ARHRQ"
    }]
  },
  dayPlan: [
    "Morning visit to Small Worlds Tokyo",
    "Lunch near Ariake/Odaiba at 12:00 PM",
    "Travel to Haneda Airport by 2:00 PM",
    "4:25 PM departure to Austin via San Francisco (ANA NH 7010)",
    "Arrive Austin 4:45 PM same day (time zones)"
  ],
  mandatoryActivities: [
    {
      id: "tokyo-final-checkout",
      time: "10:00",
      title: "🏠 Tokyo Shinjuku Final Checkout",
      duration: "30 minutes",
      location: "Shinjuku Apartment",
      status: "upcoming",
      notes: "Final checkout from Tokyo accommodation, prepare for departure",
      confirmationCode: "HM5S8ARHRQ"
    },
    {
      id: "small-worlds-tokyo",
      title: "Small Worlds Tokyo",
      time: "9:30 AM",
      location: "Ariake, Tokyo (Odaiba)",
      duration: "1.5 hours",
      status: "upcoming",
      notes: "Amazing miniature world theme park - need to finish by 11:30 AM to make 4:25 PM flight",
      links: [{
        name: "Small Worlds Tokyo Official Site",
        url: "https://smallworlds.jp/en/"
      }]
    }
  ],
  timeBlocks: [
    {
      id: "small-worlds-visit",
      title: "Small Worlds Tokyo Experience",
      timeRange: "9:30 AM - 11:00 AM",
      options: [
        {
          title: "Complete Small Worlds Experience",
          duration: "1.5 hours",
          cost: "¥2,700 (Adult)",
          description: "Explore the world's largest indoor miniature theme park with incredibly detailed dioramas",
          notes: "Amazing attention to detail - miniature airports, cities, space center, and fantasy worlds",
          photoSpots: ["Miniature Haneda Airport", "Space Center", "Global Village", "Fantasy worlds"],
          links: [{
            name: "Ticket Information",
            url: "https://smallworlds.jp/en/ticket/"
          }]
        }
      ]
    },
    {
      id: "farewell-lunch",
      title: "Final Tokyo Lunch",
      timeRange: "12:00 PM - 1:00 PM",
      options: [
        {
          title: "Aqua City Odaiba Food Court",
          duration: "1 hour",
          cost: "¥1,500",
          description: "Variety of Japanese restaurants with Tokyo Bay views",
          notes: "Convenient location near Small Worlds with great view of Rainbow Bridge"
        },
        {
          title: "Palette Town Restaurant",
          duration: "1 hour",
          cost: "¥2,000",
          description: "Sit-down restaurant with international and Japanese cuisine",
          notes: "More relaxed atmosphere for final Tokyo meal"
        },
        {
          title: "Convenience Store Bento",
          duration: "30 minutes",
          cost: "¥800",
          description: "Quick grab-and-go option from nearby convenience store",
          notes: "Budget-friendly and efficient if running behind schedule"
        }
      ]
    }
  ],
  transportation: [
    {
      provider: "JR & Yurikamome Line",
      type: "Individual tickets",
      departure: {
        location: "Shinjuku",
        time: "8:30 AM"
      },
      arrival: {
        location: "Ariake (Small Worlds)",
        time: "9:15 AM"
      },
      duration: "45 minutes",
      cost: "¥400",
      notes: "JR to Shimbashi, then Yurikamome Line to Ariake - scenic route over Tokyo Bay"
    },
    {
      provider: "Limousine Bus",
      type: "Airport express",
      departure: {
        location: "Ariake/Tokyo Big Sight",
        time: "1:30 PM"
      },
      arrival: {
        location: "Haneda Airport",
        time: "2:00 PM"
      },
      duration: "30 minutes",
      cost: "¥600",
      notes: "Direct bus from Odaiba area to Haneda after lunch - gives more time to relax"
    },
    {
      provider: "ANA (All Nippon Airways)",
      type: "International flight",
      departure: {
        location: "Tokyo Haneda Airport (HND)",
        time: "4:25 PM"
      },
      arrival: {
        location: "San Francisco Airport (SFO)",
        time: "9:10 AM same day"
      },
      duration: "9h 45m",
      cost: "Booked",
      notes: "Flight NH 7010 (operated by United) - crosses date line, arrives same day local time",
      confirmationCode: "NH 7010"
    },
    {
      provider: "ANA (All Nippon Airways)",
      type: "Domestic connection",
      departure: {
        location: "San Francisco Airport (SFO)",
        time: "11:10 AM"
      },
      arrival: {
        location: "Austin Airport (AUS)",
        time: "4:45 PM"
      },
      duration: "3h 35m",
      cost: "Booked",
      notes: "Flight NH 7332 - 2 hour layover in SFO, final leg home to Austin",
      confirmationCode: "NH 7332"
    }
  ]
};