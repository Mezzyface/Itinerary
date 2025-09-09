// Updated Tokyo Trip Data - Modular Structure
import { day1Data } from './day1Data.js';
import { day2Data } from './day2Data.js';
import { day3Data } from './day3Data.js';
import { day4Data } from './day4Data.js';
import { day5Data } from './day5Data.js';
import { day6Data } from './day6Data.js';
import { day7Data } from './day7Data.js';
import { day8Data } from './day8Data.js';
import { day9Data } from './day9Data.js';

export const sampleTripData = {
  tripInfo: {
    title: "Tokyo → Mount Fuji → Kyoto → Osaka: Ultimate Japan Adventure",
    startDate: "2025-11-26",
    endDate: "2025-12-04", 
    travelers: ["User"],
    coverImage: "/images/tokyo-cover.jpg",
    budget: {
      totalBudget: "¥110,000",
      currency: "JPY",
      spent: "¥84,280",
      remaining: "¥25,720"
    }
  },
  days: [day1Data, day2Data, day3Data, day4Data, day5Data, day6Data, day7Data, day8Data, day9Data],
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