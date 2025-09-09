// Updated Tokyo Trip Data - Modular Structure
import { day1Data } from './day1Data.js';
import { day2Data } from './day2Data.js';
import { day3Data } from './day3Data.js';

export const sampleTripData = {
  tripInfo: {
    title: "Tokyo Shibuya Experience → Mount Fuji Adventure",
    startDate: "2025-11-26",
    endDate: "2025-11-29", 
    travelers: ["User"],
    coverImage: "/images/tokyo-cover.jpg",
    budget: {
      totalBudget: "¥70,000",
      currency: "JPY",
      spent: "¥61,380",
      remaining: "¥8,620"
    }
  },
  days: [day1Data, day2Data, day3Data],
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