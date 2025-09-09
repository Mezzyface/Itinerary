// Updated Tokyo Trip Data - Modular Structure
import { day1Data } from './day1Data.js';
import { day2Data } from './day2Data.js';
import { day3Data } from './day3Data.js';
import { day4Data } from './day4Data.js';

export const sampleTripData = {
  tripInfo: {
    title: "Tokyo Shibuya → Mount Fuji → Camping Adventure",
    startDate: "2025-11-26",
    endDate: "2025-11-30", 
    travelers: ["User"],
    coverImage: "/images/tokyo-cover.jpg",
    budget: {
      totalBudget: "¥80,000",
      currency: "JPY",
      spent: "¥68,880",
      remaining: "¥11,120"
    }
  },
  days: [day1Data, day2Data, day3Data, day4Data],
  integrations: {
    weather: {
      api: "OpenWeatherMap",
      key: "your-api-key-here"
    },
    maps: {
      api: "Google Maps Embed", 
      key: "your-maps-key-here"
    },
    photos: {
      api: "Unsplash",
      key: "your-unsplash-key-here"
    },
    qr: {
      generator: "QRServer API",
      baseUrl: "https://api.qrserver.com/v1/create-qr-code/"
    }
  }
};