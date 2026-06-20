import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const celestialPinnacleLevels: Level[] = [
  // === EASY (281-284) ===
  {
    id: 281, name: "Sky Review", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    windGusts: [{ direction: 'right', strength: 2, interval: 3000, duration: 800, warningTime: 600 }],
    rotatingGears: [{ x: 200, y: 200, radius: 40, speed: 1.5, teeth: 5, clockwise: true }],
    cloudPlatforms: [{ x: 350, y: 350, width: 100, height: 15, onDuration: 2000, offDuration: 1000 }],
    collectibles: [
      { id: 1, x: 200, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 282, name: "Mixed Ascent", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    updrafts: [{ x: 250, y: 200, width: 100, height: 200, strength: 2 }],
    crumblingTiles: [{ id: 1, x: 200, y: 350, width: 100, height: 40, crumbleDelay: 1200, respawnTime: 4000 }],
    lightningZones: [{ id: 1, x: 400, y: 300, radius: 45, warningDuration: 1200, strikeDuration: 400, interval: 3500, damage: 1 }],
    collectibles: [
      { id: 1, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 283, name: "Gear & Cloud", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    rotatingGears: [{ x: 200, y: 400, radius: 50, speed: 1.5, teeth: 6, clockwise: true }],
    cloudPlatforms: [
      { x: 300, y: 200, width: 100, height: 15, onDuration: 2000, offDuration: 1500 },
      { x: 400, y: 400, width: 100, height: 15, onDuration: 2000, offDuration: 1500, startOffset: 800 },
    ],
    collectibles: [
      { id: 1, x: 350, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 430, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 284, name: "Zip Updraft", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    ziplines: [{ id: 1, x1: 100, y1: 450, x2: 300, y2: 300, speed: 5, oneWay: true }],
    updrafts: [{ x: 350, y: 100, width: 80, height: 200, strength: 2.5 }],
    collectibles: [
      { id: 1, x: 200, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (285-292) ===
  {
    id: 285, name: "Sky Fusion", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 150, radius: 18, type: 'hole' }, { x: 300, y: 450, radius: 18, type: 'hole' }],
    windGusts: [
      { direction: 'right', strength: 2.5, interval: 2500, duration: 600, warningTime: 400 },
      { direction: 'down', strength: 2, interval: 3500, duration: 700, warningTime: 500 },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 50, speed: 2, teeth: 7, clockwise: true }],
    cloudPlatforms: [
      { x: 150, y: 250, width: 80, height: 15, onDuration: 1500, offDuration: 1500 },
      { x: 380, y: 350, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 190, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 420, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 286, name: "Thunder Gear", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    rotatingGears: [
      { x: 200, y: 200, radius: 45, speed: 2, teeth: 6, clockwise: true },
      { x: 400, y: 400, radius: 45, speed: 2, teeth: 6, clockwise: false },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 200, radius: 40, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
      { id: 2, x: 300, y: 400, radius: 40, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 287, name: "Crumble Draft", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 250, y: 400, width: 100, height: 40, crumbleDelay: 600, respawnTime: 3000 },
      { id: 2, x: 250, y: 250, width: 100, height: 40, crumbleDelay: 600, respawnTime: 3000 },
    ],
    updrafts: [{ x: 270, y: 100, width: 60, height: 200, strength: 3 }],
    windGusts: [{ direction: 'left', strength: 2, interval: 3000, duration: 600, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 300, y: 430, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 180, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 288, name: "Zip Lightning", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'zipline', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    ziplines: [
      { id: 1, x1: 100, y1: 450, x2: 250, y2: 300, speed: 5, oneWay: true },
      { id: 2, x1: 350, y1: 300, x2: 500, y2: 150, speed: 5, oneWay: true },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 300, radius: 50, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    rotatingGears: [{ x: 200, y: 200, radius: 35, speed: 2, teeth: 5, clockwise: true }],
    collectibles: [
      { id: 1, x: 180, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 420, y: 220, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 289, name: "Cloud Gauntlet", mazeSize: 'large', balls: 1, difficulty: 6, category: 'cloudplatform', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    cloudPlatforms: [
      { x: 100, y: 180, width: 80, height: 15, onDuration: 1500, offDuration: 1500 },
      { x: 220, y: 260, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 400 },
      { x: 340, y: 340, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 800 },
      { x: 430, y: 420, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 1200 },
    ],
    windGusts: [{ direction: 'right', strength: 2, interval: 3000, duration: 700, warningTime: 500 }],
    rotatingGears: [{ x: 200, y: 400, radius: 40, speed: 1.5, teeth: 5, clockwise: true }],
    collectibles: [
      { id: 1, x: 140, y: 210, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 260, y: 290, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 470, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 290, name: "Storm King", mazeSize: 'large', balls: 1, difficulty: 7, category: 'extreme', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 100,
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 300, radius: 20, type: 'hole' },
      { x: 450, y: 300, radius: 20, type: 'hole' },
    ],
    windGusts: [
      { direction: 'left', strength: 3, interval: 2000, duration: 500, warningTime: 300 },
      { direction: 'right', strength: 3, interval: 2500, duration: 500, warningTime: 300 },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 2, x: 400, y: 200, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 3, x: 300, y: 400, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 50, speed: 2, teeth: 8, clockwise: true }],
    updrafts: [{ x: 270, y: 100, width: 60, height: 150, strength: 3 }],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 291, name: "All Elements", mazeSize: 'large', balls: 1, difficulty: 6, category: 'windgust', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    windGusts: [{ direction: 'right', strength: 2, interval: 3500, duration: 700, warningTime: 500 }],
    cloudPlatforms: [{ x: 200, y: 270, width: 80, height: 15, onDuration: 1800, offDuration: 1200 }],
    crumblingTiles: [{ id: 1, x: 350, y: 280, width: 80, height: 40, crumbleDelay: 800, respawnTime: 3000 }],
    updrafts: [{ x: 420, y: 200, width: 60, height: 200, strength: 2 }],
    collectibles: [
      { id: 1, x: 240, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 390, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 292, name: "Pinnacle Path", mazeSize: 'large', balls: 1, difficulty: 6, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 15, type: 'hole' }, { x: 400, y: 300, radius: 15, type: 'hole' }],
    rotatingGears: [
      { x: 200, y: 200, radius: 40, speed: 2, teeth: 5, clockwise: true },
      { x: 400, y: 400, radius: 40, speed: 2, teeth: 5, clockwise: false },
    ],
    ziplines: [{ id: 1, x1: 150, y1: 450, x2: 350, y2: 250, speed: 5, oneWay: true }],
    lightningZones: [{ id: 1, x: 300, y: 150, radius: 40, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 }],
    collectibles: [
      { id: 1, x: 250, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (293-300) ===
  {
    id: 293, name: "Sky Crucible", mazeSize: 'large', balls: 1, difficulty: 7, category: 'extreme', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    windGusts: [{ direction: 'down', strength: 3, interval: 2500, duration: 500, warningTime: 400 }],
    rotatingGears: [{ x: 200, y: 400, radius: 50, speed: 2.5, teeth: 7, clockwise: true }],
    lightningZones: [{ id: 1, x: 400, y: 200, radius: 50, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 }],
    crumblingTiles: [
      { id: 1, x: 300, y: 200, width: 80, height: 40, crumbleDelay: 600, respawnTime: 0 },
      { id: 2, x: 300, y: 400, width: 80, height: 40, crumbleDelay: 600, respawnTime: 0 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 294, name: "Celestial Run", mazeSize: 'large', balls: 2, difficulty: 7, category: 'extreme', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 150, radius: 18, type: 'hole' }, { x: 450, y: 450, radius: 18, type: 'hole' }],
    windGusts: [{ direction: 'right', strength: 2.5, interval: 3000, duration: 600, warningTime: 400 }],
    cloudPlatforms: [
      { x: 200, y: 250, width: 80, height: 15, onDuration: 1500, offDuration: 1500 },
      { x: 350, y: 350, width: 80, height: 15, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    ziplines: [{ id: 1, x1: 200, y1: 400, x2: 400, y2: 200, speed: 5, oneWay: true }],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 295, name: "Apex Storm", mazeSize: 'large', balls: 1, difficulty: 8, category: 'extreme', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 100,
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 45, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 2, x: 400, y: 400, radius: 45, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 50, speed: 2.5, teeth: 8, clockwise: true }],
    windGusts: [
      { direction: 'right', strength: 3, interval: 2000, duration: 400, warningTime: 300 },
      { direction: 'up', strength: 3, interval: 2500, duration: 500, warningTime: 300 },
    ],
    crumblingTiles: [
      { id: 1, x: 150, y: 400, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
      { id: 2, x: 380, y: 200, width: 80, height: 40, crumbleDelay: 500, respawnTime: 0 },
    ],
    updrafts: [{ x: 420, y: P, width: 60, height: 200, strength: 3 }],
    collectibles: [
      { id: 1, x: 200, y: 430, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 400, y: 130, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 296, name: "Gear Thunder", mazeSize: 'large', balls: 1, difficulty: 8, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 18, type: 'hole' }, { x: 450, y: 300, radius: 18, type: 'hole' }],
    rotatingGears: [
      { x: 200, y: 200, radius: 50, speed: 2.5, teeth: 7, clockwise: true },
      { x: 400, y: 200, radius: 50, speed: 2.5, teeth: 7, clockwise: false },
      { x: 300, y: 400, radius: 45, speed: 3, teeth: 6, clockwise: true },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 300, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
    ],
    windGusts: [{ direction: 'down', strength: 2, interval: 3000, duration: 600, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 297, name: "Crumble Vortex", mazeSize: 'large', balls: 2, difficulty: 8, category: 'crumble', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    crumblingTiles: [
      { id: 1, x: 150, y: 270, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 2, x: 260, y: 270, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 3, x: 370, y: 270, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
    ],
    rotatingGears: [{ x: 300, y: 150, radius: 40, speed: 2, teeth: 6, clockwise: true }],
    lightningZones: [{ id: 1, x: 300, y: 450, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 }],
    windGusts: [{ direction: 'right', strength: 2.5, interval: 2500, duration: 500, warningTime: 300 }],
    collectibles: [
      { id: 1, x: 190, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 410, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 298, name: "Sky Trials", mazeSize: 'large', balls: 2, difficulty: 9, category: 'extreme', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 90,
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 450, radius: 20, type: 'hole' },
      { x: 450, y: 150, radius: 20, type: 'hole' },
    ],
    windGusts: [
      { direction: 'left', strength: 4, interval: 1800, duration: 400, warningTime: 250 },
      { direction: 'up', strength: 3, interval: 2500, duration: 500, warningTime: 300 },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 50, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 2, x: 400, y: 400, radius: 50, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 45, speed: 3, teeth: 8, clockwise: true }],
    crumblingTiles: [
      { id: 1, x: 100, y: 200, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 2, x: 350, y: 350, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
    ],
    updrafts: [{ x: 80, y: P, width: 60, height: 150, strength: 3.5 }],
    collectibles: [
      { id: 1, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 299, name: "Apex Breaker", mazeSize: 'large', balls: 2, difficulty: 9, category: 'extreme', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    windGusts: [
      { direction: 'right', strength: 4, interval: 1500, duration: 300, warningTime: 200 },
      { direction: 'down', strength: 4, interval: 2000, duration: 400, warningTime: 250 },
    ],
    rotatingGears: [
      { x: 150, y: 300, radius: 40, speed: 3, teeth: 6, clockwise: true },
      { x: 450, y: 300, radius: 40, speed: 3, teeth: 6, clockwise: false },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 150, radius: 45, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 2, x: 300, y: 450, radius: 45, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
    ],
    crumblingTiles: [
      { id: 1, x: 210, y: 250, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
      { id: 2, x: 310, y: 350, width: 80, height: 40, crumbleDelay: 400, respawnTime: 0 },
    ],
    ziplines: [{ id: 1, x1: 200, y1: 400, x2: 400, y2: 200, speed: 6, oneWay: true }],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 300, name: "The Architect", mazeSize: 'large', balls: 2, difficulty: 9, category: 'extreme', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 80,
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 18, type: 'hole' },
      { x: 100, y: 100, radius: 15, type: 'hole' },
      { x: 500, y: 100, radius: 15, type: 'hole' },
    ],
    windGusts: [
      { direction: 'right', strength: 5, interval: 1500, duration: 300, warningTime: 200 },
      { direction: 'left', strength: 5, interval: 2000, duration: 300, warningTime: 200 },
      { direction: 'up', strength: 4, interval: 2500, duration: 400, warningTime: 250 },
      { direction: 'down', strength: 4, interval: 3000, duration: 400, warningTime: 250 },
    ],
    rotatingGears: [
      { x: 150, y: 300, radius: 40, speed: 3, teeth: 8, clockwise: true },
      { x: 450, y: 300, radius: 40, speed: 3, teeth: 8, clockwise: false },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 150, radius: 40, warningDuration: 500, strikeDuration: 200, interval: 1500, damage: 1 },
      { id: 2, x: 400, y: 150, radius: 40, warningDuration: 500, strikeDuration: 200, interval: 1500, damage: 1 },
      { id: 3, x: 200, y: 450, radius: 40, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 4, x: 400, y: 450, radius: 40, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
    ],
    crumblingTiles: [
      { id: 1, x: 210, y: 250, width: 80, height: 40, crumbleDelay: 300, respawnTime: 0 },
      { id: 2, x: 310, y: 350, width: 80, height: 40, crumbleDelay: 300, respawnTime: 0 },
    ],
    updrafts: [{ x: 270, y: P, width: 60, height: 150, strength: 4 }],
    cloudPlatforms: [
      { x: 100, y: 450, width: 70, height: 15, onDuration: 1000, offDuration: 2000 },
      { x: 430, y: 150, width: 70, height: 15, onDuration: 1000, offDuration: 2000, startOffset: 1000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
