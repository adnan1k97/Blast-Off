import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const brokenBridgeLevels: Level[] = [
  // === EASY (261-264) ===
  {
    id: 261, name: "Fragile Floor", mazeSize: 'small', balls: 1, difficulty: 1, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    crumblingTiles: [
      { id: 1, x: 200, y: 250, width: 100, height: 100, crumbleDelay: 1500, respawnTime: 5000 },
      { id: 2, x: 350, y: 250, width: 100, height: 100, crumbleDelay: 1500, respawnTime: 5000 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 262, name: "Zip Start", mazeSize: 'small', balls: 1, difficulty: 2, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    ziplines: [
      { id: 1, x1: 150, y1: 450, x2: 450, y2: 150, speed: 5, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 263, name: "Cracked Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 400, radius: 18, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 150, y: 150, width: 80, height: 40, crumbleDelay: 1200, respawnTime: 4000 },
      { id: 2, x: 300, y: 250, width: 80, height: 40, crumbleDelay: 1200, respawnTime: 4000 },
      { id: 3, x: 400, y: 350, width: 80, height: 40, crumbleDelay: 1200, respawnTime: 4000 },
    ],
    collectibles: [
      { id: 1, x: 190, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 340, y: 280, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 264, name: "Zip Cross", mazeSize: 'small', balls: 1, difficulty: 3, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 100, y1: 200, x2: 300, y2: 300, speed: 4, oneWay: true },
      { id: 2, x1: 300, y1: 300, x2: 500, y2: 450, speed: 4, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (265-272) ===
  {
    id: 265, name: "Collapse Run", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 150, radius: 18, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 150, y: 270, width: 80, height: 60, crumbleDelay: 1000, respawnTime: 4000 },
      { id: 2, x: 260, y: 270, width: 80, height: 60, crumbleDelay: 1000, respawnTime: 4000 },
      { id: 3, x: 370, y: 270, width: 80, height: 60, crumbleDelay: 1000, respawnTime: 4000 },
    ],
    windGusts: [{ direction: 'right', strength: 1.5, interval: 4000, duration: 800, warningTime: 600 }],
    collectibles: [
      { id: 1, x: 190, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 410, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 266, name: "Rail Rider", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 250, height: 10 },
      { x: 300, y: 200, width: 260, height: 10 },
    ],
    hazards: [{ x: 400, y: 400, radius: 18, type: 'hole' }],
    ziplines: [
      { id: 1, x1: 100, y1: 480, x2: 250, y2: 320, speed: 5, oneWay: true },
      { id: 2, x1: 350, y1: 320, x2: 500, y2: 170, speed: 5, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 180, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 420, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 267, name: "Crumble Maze", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 100, y: 200, width: 90, height: 40, crumbleDelay: 800, respawnTime: 3000 },
      { id: 2, x: 220, y: 300, width: 90, height: 40, crumbleDelay: 800, respawnTime: 3000 },
      { id: 3, x: 300, y: 400, width: 90, height: 40, crumbleDelay: 800, respawnTime: 3000 },
      { id: 4, x: 420, y: 450, width: 90, height: 40, crumbleDelay: 800, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 430, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 460, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 268, name: "Zip Network", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 400, y: 400, radius: 18, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 120, y1: 350, x2: 250, y2: 200, speed: 4, oneWay: true },
      { id: 2, x1: 250, y1: 200, x2: 400, y2: 350, speed: 4, oneWay: false },
      { id: 3, x1: 400, y1: 250, x2: 500, y2: 280, speed: 5, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 200, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 269, name: "Shatter Path", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 250, y: 150, width: 100, height: 40, crumbleDelay: 800, respawnTime: 3500 },
      { id: 2, x: 250, y: 250, width: 100, height: 40, crumbleDelay: 800, respawnTime: 3500 },
      { id: 3, x: 250, y: 350, width: 100, height: 40, crumbleDelay: 800, respawnTime: 3500 },
      { id: 4, x: 250, y: 450, width: 100, height: 40, crumbleDelay: 800, respawnTime: 3500 },
    ],
    lightningZones: [{ id: 1, x: 300, y: 300, radius: 40, warningDuration: 1000, strikeDuration: 400, interval: 3000, damage: 1 }],
    collectibles: [
      { id: 1, x: 300, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 380, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 270, name: "Zip & Crumble", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 100, y: 400, width: 100, height: 50, crumbleDelay: 800, respawnTime: 0 },
      { id: 2, x: 350, y: 250, width: 100, height: 50, crumbleDelay: 800, respawnTime: 0 },
    ],
    ziplines: [
      { id: 1, x1: 200, y1: 420, x2: 350, y2: 270, speed: 5, oneWay: true },
      { id: 2, x1: 350, y1: 270, x2: 500, y2: 120, speed: 5, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 150, y: 430, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 271, name: "Falling Apart", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 100, y: 130, width: 80, height: 50, crumbleDelay: 700, respawnTime: 3000 },
      { id: 2, x: 200, y: 250, width: 80, height: 50, crumbleDelay: 700, respawnTime: 3000 },
      { id: 3, x: 320, y: 300, width: 80, height: 50, crumbleDelay: 700, respawnTime: 3000 },
      { id: 4, x: 400, y: 350, width: 80, height: 50, crumbleDelay: 700, respawnTime: 3000 },
      { id: 5, x: 430, y: 450, width: 80, height: 50, crumbleDelay: 700, respawnTime: 3000 },
    ],
    windGusts: [{ direction: 'right', strength: 2, interval: 3500, duration: 700, warningTime: 500 }],
    collectibles: [
      { id: 1, x: 140, y: 160, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 360, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 470, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 272, name: "Express Line", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 150, radius: 15, type: 'hole' },
      { x: 400, y: 450, radius: 15, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 120, y1: 350, x2: 200, y2: 200, speed: 6, oneWay: true },
      { id: 2, x1: 200, y1: 200, x2: 350, y2: 400, speed: 4, oneWay: false },
      { id: 3, x1: 350, y1: 400, x2: 480, y2: 280, speed: 6, oneWay: true },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 40, speed: 1.5, teeth: 5, clockwise: true }],
    collectibles: [
      { id: 1, x: 160, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 430, y: 340, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (273-280) ===
  {
    id: 273, name: "Demolition", mazeSize: 'large', balls: 1, difficulty: 7, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 100, y: 130, width: 100, height: 50, crumbleDelay: 600, respawnTime: 0 },
      { id: 2, x: 200, y: 230, width: 100, height: 50, crumbleDelay: 600, respawnTime: 0 },
      { id: 3, x: 300, y: 300, width: 100, height: 50, crumbleDelay: 600, respawnTime: 0 },
      { id: 4, x: 350, y: 400, width: 100, height: 50, crumbleDelay: 600, respawnTime: 0 },
      { id: 5, x: 420, y: 470, width: 100, height: 50, crumbleDelay: 600, respawnTime: 0 },
    ],
    windGusts: [{ direction: 'right', strength: 2.5, interval: 3000, duration: 600, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 150, y: 160, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 470, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 274, name: "Zip Storm", mazeSize: 'large', balls: 1, difficulty: 7, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 100, y1: 480, x2: 200, y2: 350, speed: 5, oneWay: true },
      { id: 2, x1: 250, y1: 350, x2: 350, y2: 200, speed: 5, oneWay: true },
      { id: 3, x1: 400, y1: 200, x2: 500, y2: 100, speed: 6, oneWay: true },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 300, radius: 50, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 420, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 275, name: "Breaking Point", mazeSize: 'large', balls: 2, difficulty: 7, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 18, type: 'hole' },
      { x: 450, y: 450, radius: 18, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 200, y: 200, width: 80, height: 40, crumbleDelay: 500, respawnTime: 4000 },
      { id: 2, x: 320, y: 250, width: 80, height: 40, crumbleDelay: 500, respawnTime: 4000 },
      { id: 3, x: 200, y: 350, width: 80, height: 40, crumbleDelay: 500, respawnTime: 4000 },
      { id: 4, x: 380, y: 400, width: 80, height: 40, crumbleDelay: 500, respawnTime: 4000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 276, name: "Skyway", mazeSize: 'large', balls: 1, difficulty: 8, category: 'zipline', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 110,
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 20, type: 'hole' },
      { x: 400, y: 400, radius: 20, type: 'hole' },
      { x: 300, y: 300, radius: 15, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 100, y1: 350, x2: 200, y2: 180, speed: 5, oneWay: true },
      { id: 2, x1: 220, y1: 180, x2: 380, y2: 420, speed: 4, oneWay: false },
      { id: 3, x1: 400, y1: 420, x2: 500, y2: 280, speed: 6, oneWay: true },
    ],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 277, name: "Crumble Storm", mazeSize: 'large', balls: 1, difficulty: 8, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 100, y: 400, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
      { id: 2, x: 200, y: 350, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
      { id: 3, x: 300, y: 250, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
      { id: 4, x: 400, y: 180, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
      { id: 5, x: 440, y: 100, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 250, radius: 40, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
      { id: 2, x: 400, y: 350, radius: 40, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
    ],
    windGusts: [{ direction: 'up', strength: 2, interval: 3000, duration: 500, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 140, y: 430, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 480, y: 130, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 278, name: "Zip Blitz", mazeSize: 'large', balls: 1, difficulty: 8, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    ziplines: [
      { id: 1, x1: 300, y1: 480, x2: 150, y2: 380, speed: 6, oneWay: true },
      { id: 2, x1: 150, y1: 380, x2: 450, y2: 250, speed: 5, oneWay: true },
      { id: 3, x1: 450, y1: 250, x2: 200, y2: 150, speed: 6, oneWay: true },
      { id: 4, x1: 200, y1: 150, x2: 300, y2: 100, speed: 4, oneWay: true },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 45, speed: 2, teeth: 6, clockwise: true }],
    collectibles: [
      { id: 1, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 279, name: "Shattering Sky", mazeSize: 'large', balls: 2, difficulty: 9, category: 'crumble', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 100,
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 20, type: 'hole' },
      { x: 450, y: 150, radius: 20, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 100, y: 250, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 2, x: 220, y: 200, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 3, x: 300, y: 350, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 4, x: 380, y: 250, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 5, x: 420, y: 420, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 200, radius: 45, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
    ],
    windGusts: [
      { direction: 'right', strength: 3, interval: 2500, duration: 500, warningTime: 300 },
      { direction: 'down', strength: 2, interval: 3500, duration: 600, warningTime: 400 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 280, name: "Bridge Breaker", mazeSize: 'large', balls: 2, difficulty: 9, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    crumblingTiles: [
      { id: 1, x: 100, y: 130, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 2, x: 200, y: 200, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 3, x: 350, y: 350, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 4, x: 420, y: 420, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
    ],
    ziplines: [
      { id: 1, x1: 150, y1: 200, x2: 350, y2: 350, speed: 5, oneWay: true },
      { id: 2, x1: 350, y1: 350, x2: 500, y2: 480, speed: 6, oneWay: true },
    ],
    rotatingGears: [
      { x: 200, y: 400, radius: 40, speed: 2.5, teeth: 6, clockwise: true },
      { x: 400, y: 200, radius: 40, speed: 2.5, teeth: 6, clockwise: false },
    ],
    windGusts: [
      { direction: 'right', strength: 3, interval: 2000, duration: 400, warningTime: 300 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
