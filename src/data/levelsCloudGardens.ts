import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const cloudGardensLevels: Level[] = [
  // === EASY (201-204) ===
  {
    id: 201, name: "First Breeze", mazeSize: 'small', balls: 1, difficulty: 1, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [],
    windGusts: [{ direction: 'right', strength: 1.5, interval: 4000, duration: 1000, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 200, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 250, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 202, name: "Cloud Walk", mazeSize: 'small', balls: 1, difficulty: 2, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 350, y: 150, width: 10, height: 300 },
    ],
    hazards: [{ x: 250, y: 400, radius: 20, type: 'hole' }],
    cloudPlatforms: [
      { x: 170, y: 250, width: 170, height: 15, onDuration: 2500, offDuration: 1500 },
      { x: 360, y: 350, width: 170, height: 15, onDuration: 2500, offDuration: 1500, startOffset: 1200 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 203, name: "Gentle Gale", mazeSize: 'small', balls: 1, difficulty: 2, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [],
    windGusts: [
      { direction: 'up', strength: 2, interval: 3500, duration: 800, warningTime: 700 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 204, name: "Misty Steps", mazeSize: 'small', balls: 1, difficulty: 3, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 200, y: 300, radius: 25, type: 'hole' },
      { x: 400, y: 300, radius: 25, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 100, y: 400, width: 120, height: 15, onDuration: 2000, offDuration: 1000 },
      { x: 250, y: 300, width: 120, height: 15, onDuration: 2000, offDuration: 1000, startOffset: 700 },
      { x: 400, y: 200, width: 120, height: 15, onDuration: 2000, offDuration: 1000, startOffset: 1400 },
    ],
    collectibles: [
      { id: 1, x: 160, y: 430, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 310, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 460, y: 230, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (205-212) ===
  {
    id: 205, name: "Wind Corridor", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: P, y: 220, width: 200, height: 10 }, { x: P, y: 380, width: 200, height: 10 },
      { x: 300, y: 220, width: 260, height: 10 }, { x: 300, y: 380, width: 260, height: 10 },
    ],
    hazards: [{ x: 250, y: 300, radius: 18, type: 'hole' }],
    windGusts: [
      { direction: 'right', strength: 2.5, interval: 3000, duration: 800, warningTime: 600 },
      { direction: 'left', strength: 1.5, interval: 5000, duration: 1200, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 206, name: "Vanishing Path", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 200, y: 100, width: 10, height: 200 },
      { x: 400, y: 300, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 20, type: 'hole' },
      { x: 300, y: 400, radius: 20, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 100, y: 200, width: 90, height: 15, onDuration: 2000, offDuration: 1500 },
      { x: 220, y: 280, width: 90, height: 15, onDuration: 2000, offDuration: 1500, startOffset: 500 },
      { x: 340, y: 360, width: 90, height: 15, onDuration: 2000, offDuration: 1500, startOffset: 1000 },
      { x: 420, y: 440, width: 90, height: 15, onDuration: 2000, offDuration: 1500, startOffset: 1500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 270, y: 310, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 390, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 207, name: "Crosswinds", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 2, interval: 3000, duration: 700, warningTime: 500 },
      { direction: 'down', strength: 2.5, interval: 4000, duration: 900, warningTime: 600 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 208, name: "Sky Bridge", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 130, y: 280, width: 100, height: 15, onDuration: 1800, offDuration: 1200 },
      { x: 260, y: 320, width: 100, height: 15, onDuration: 1800, offDuration: 1200, startOffset: 600 },
      { x: 390, y: 280, width: 100, height: 15, onDuration: 1800, offDuration: 1200, startOffset: 1200 },
    ],
    windGusts: [{ direction: 'right', strength: 1, interval: 5000, duration: 1500, warningTime: 1000 }],
    collectibles: [
      { id: 1, x: 180, y: 310, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 310, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 440, y: 310, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 209, name: "Gust Maze", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: P, y: 400, width: 350, height: 10 },
      { x: 200, y: 250, width: 360, height: 10 },
      { x: P, y: 130, width: 350, height: 10 },
    ],
    hazards: [
      { x: 450, y: 450, radius: 15, type: 'hole' },
      { x: 150, y: 190, radius: 15, type: 'hole' },
    ],
    windGusts: [
      { direction: 'left', strength: 2, interval: 3500, duration: 800, warningTime: 600 },
      { direction: 'up', strength: 1.5, interval: 4500, duration: 1000, warningTime: 700 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 250, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 210, name: "Cloud Stairs", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 200, y: 350, radius: 20, type: 'hole' },
      { x: 400, y: 250, radius: 20, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 80, y: 430, width: 100, height: 15, onDuration: 2200, offDuration: 1300 },
      { x: 200, y: 360, width: 100, height: 15, onDuration: 2200, offDuration: 1300, startOffset: 400 },
      { x: 320, y: 280, width: 100, height: 15, onDuration: 2200, offDuration: 1300, startOffset: 800 },
      { x: 430, y: 200, width: 100, height: 15, onDuration: 2200, offDuration: 1300, startOffset: 1200 },
    ],
    windGusts: [{ direction: 'up', strength: 1.5, interval: 6000, duration: 1500, warningTime: 1000 }],
    collectibles: [
      { id: 1, x: 130, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 250, y: 390, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 370, y: 310, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 480, y: 230, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 211, name: "Tempest Run", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 150, y: 400, width: 10, height: 100 },
      { x: 440, y: 400, width: 10, height: 100 },
      { x: 150, y: 150, width: 10, height: 100 },
      { x: 440, y: 150, width: 10, height: 100 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    windGusts: [
      { direction: 'left', strength: 3, interval: 2500, duration: 600, warningTime: 500 },
      { direction: 'right', strength: 3, interval: 2500, duration: 600, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 212, name: "Nimbus Maze", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 200, y: P, width: 10, height: 200 },
      { x: 400, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 100, y: 180, width: 90, height: 15, onDuration: 1800, offDuration: 1200 },
      { x: 220, y: 260, width: 90, height: 15, onDuration: 1800, offDuration: 1200, startOffset: 500 },
      { x: 320, y: 350, width: 70, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1000 },
      { x: 420, y: 440, width: 90, height: 15, onDuration: 1800, offDuration: 1200, startOffset: 1500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 210, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 270, y: 290, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 470, y: 470, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (213-220) ===
  {
    id: 213, name: "Hurricane Hall", mazeSize: 'large', balls: 1, difficulty: 7, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 200, y: 150, width: 10, height: 150 },
      { x: 200, y: 350, width: 10, height: 150 },
      { x: 400, y: 150, width: 10, height: 150 },
      { x: 400, y: 350, width: 10, height: 150 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 3.5, interval: 2000, duration: 500, warningTime: 400 },
      { direction: 'left', strength: 3.5, interval: 2500, duration: 500, warningTime: 400 },
      { direction: 'down', strength: 2, interval: 3000, duration: 700, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 120, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 480, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
    isDarkMode: false,
  },
  {
    id: 214, name: "Phantom Floor", mazeSize: 'large', balls: 1, difficulty: 7, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 20, type: 'hole' },
      { x: 400, y: 200, radius: 20, type: 'hole' },
      { x: 200, y: 400, radius: 20, type: 'hole' },
      { x: 400, y: 400, radius: 20, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 80, y: 150, width: 100, height: 15, onDuration: 1500, offDuration: 1500 },
      { x: 250, y: 250, width: 100, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 500 },
      { x: 100, y: 350, width: 100, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1000 },
      { x: 350, y: 400, width: 100, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1500 },
      { x: 450, y: 300, width: 80, height: 15, onDuration: 1200, offDuration: 1800, startOffset: 800 },
    ],
    collectibles: [
      { id: 1, x: 130, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 490, y: 330, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 215, name: "Tornado Alley", mazeSize: 'large', balls: 2, difficulty: 7, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 250, y: 150, width: 10, height: 130 },
      { x: 250, y: 320, width: 10, height: 130 },
      { x: 350, y: 150, width: 10, height: 130 },
      { x: 350, y: 320, width: 10, height: 130 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 150, radius: 15, type: 'hole' },
      { x: 450, y: 450, radius: 15, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 4, interval: 2000, duration: 400, warningTime: 300 },
      { direction: 'up', strength: 3, interval: 3000, duration: 600, warningTime: 400 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 216, name: "Skyfall", mazeSize: 'large', balls: 1, difficulty: 8, category: 'cloudplatform', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 120,
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 150, y: 300, radius: 20, type: 'hole' },
      { x: 450, y: 300, radius: 20, type: 'hole' },
      { x: 300, y: 300, radius: 15, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 200, y: 440, width: 80, height: 15, onDuration: 1500, offDuration: 1500 },
      { x: 350, y: 370, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 500 },
      { x: 200, y: 300, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1000 },
      { x: 350, y: 230, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1500 },
      { x: 200, y: 160, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 2000 },
    ],
    collectibles: [
      { id: 1, x: 240, y: 470, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 390, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 240, y: 190, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 217, name: "Gale Force", mazeSize: 'large', balls: 1, difficulty: 8, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 150, y: P, width: 10, height: 400 },
      { x: 300, y: 150, width: 10, height: 410 },
      { x: 450, y: P, width: 10, height: 400 },
    ],
    hazards: [
      { x: 225, y: 300, radius: 18, type: 'hole' },
      { x: 375, y: 200, radius: 18, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 4, interval: 2000, duration: 500, warningTime: 300 },
      { direction: 'left', strength: 4, interval: 2500, duration: 500, warningTime: 300 },
      { direction: 'down', strength: 3, interval: 3500, duration: 800, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 225, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 375, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 218, name: "Cloud Nine", mazeSize: 'large', balls: 2, difficulty: 8, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
    ],
    hazards: [
      { x: 150, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
      { x: 450, y: 200, radius: 15, type: 'hole' },
    ],
    cloudPlatforms: [
      { x: 100, y: 250, width: 80, height: 15, onDuration: 1200, offDuration: 1800 },
      { x: 200, y: 330, width: 80, height: 15, onDuration: 1200, offDuration: 1800, startOffset: 400 },
      { x: 310, y: 250, width: 80, height: 15, onDuration: 1200, offDuration: 1800, startOffset: 800 },
      { x: 400, y: 330, width: 80, height: 15, onDuration: 1200, offDuration: 1800, startOffset: 1200 },
    ],
    windGusts: [
      { direction: 'right', strength: 2, interval: 4000, duration: 1000, warningTime: 700 },
      { direction: 'down', strength: 2, interval: 5000, duration: 1200, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 140, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 440, y: 360, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 219, name: "Stratosphere", mazeSize: 'large', balls: 1, difficulty: 9, category: 'windgust', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 100,
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: P, y: 400, width: 400, height: 10 },
      { x: 150, y: 250, width: 410, height: 10 },
      { x: P, y: 130, width: 400, height: 10 },
    ],
    hazards: [
      { x: 500, y: 450, radius: 18, type: 'hole' },
      { x: 100, y: 190, radius: 18, type: 'hole' },
      { x: 400, y: 80, radius: 15, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 4, interval: 1800, duration: 400, warningTime: 300 },
      { direction: 'left', strength: 3, interval: 2200, duration: 500, warningTime: 300 },
      { direction: 'up', strength: 5, interval: 4000, duration: 600, warningTime: 400 },
    ],
    cloudPlatforms: [
      { x: 400, y: 380, width: 80, height: 15, onDuration: 1200, offDuration: 1200 },
      { x: 100, y: 240, width: 80, height: 15, onDuration: 1200, offDuration: 1200, startOffset: 600 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 320, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 250, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 220, name: "Zephyr's Trial", mazeSize: 'large', balls: 2, difficulty: 9, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S - 2*P, height: 10 }, { x: P, y: S - P - 10, width: S - 2*P, height: 10 },
      { x: P, y: P, width: 10, height: S - 2*P }, { x: S - P - 10, y: P, width: 10, height: S - 2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 80, y: 80, radius: 18, type: 'hole' },
      { x: 520, y: 80, radius: 18, type: 'hole' },
      { x: 80, y: 520, radius: 18, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 5, interval: 1500, duration: 300, warningTime: 200 },
      { direction: 'down', strength: 5, interval: 2000, duration: 300, warningTime: 200 },
      { direction: 'left', strength: 4, interval: 2500, duration: 400, warningTime: 300 },
      { direction: 'up', strength: 4, interval: 3000, duration: 400, warningTime: 300 },
    ],
    cloudPlatforms: [
      { x: 160, y: 300, width: 60, height: 15, onDuration: 1000, offDuration: 2000 },
      { x: 380, y: 300, width: 60, height: 15, onDuration: 1000, offDuration: 2000, startOffset: 1000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
