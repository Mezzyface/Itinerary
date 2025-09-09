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
import { day10Data } from './day10Data.js';
import { day11Data } from './day11Data.js';
import { day12Data } from './day12Data.js';
import { day13Data } from './day13Data.js';
import { day14Data } from './day14Data.js';
import { day15Data } from './day15Data.js';
import { day16Data } from './day16Data.js';

export const sampleTripData = {
  tripInfo: {
    title: "Complete Japan Circle: Tokyo → Fuji → Kyoto → Osaka → Fukuoka → Hiroshima → Tokyo",
    startDate: "2025-11-26",
    endDate: "2025-12-11", 
    travelers: ["User"],
    coverImage: "/images/tokyo-cover.jpg",
    budget: {
      totalBudget: "¥110,000",
      currency: "JPY",
      spent: "¥84,280",
      remaining: "¥25,720"
    }
  },
  days: [day1Data, day2Data, day3Data, day4Data, day5Data, day6Data, day7Data, day8Data, day9Data, day10Data, day11Data, day12Data, day13Data, day14Data, day15Data, day16Data],
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