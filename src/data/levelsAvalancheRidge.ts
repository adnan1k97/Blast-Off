import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const avalancheRidgeLevels: Level[] = [
  // === EASY (461-462) ===
  {
    id: 461, name: "Rolling Thunder", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    avalanches: [{ id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 20, speed: 150, interval: 5000, warningTime: 1500 }],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 462, name: "Frost Slide", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    frostRails: [{ id: 1, x1: 100, y1: 450, x2: 500, y2: 100, speed: 200, railWidth: 15 }],
    collectibles: [
      { id: 1, x: 200, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  // === MEDIUM (463-472) ===
  {
    id: 463, name: "Boulder Run", mazeSize: 'medium', balls: 1, difficulty: 7, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 15, type: 'hole' }, { x: 400, y: 300, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 400, x2: 550, y2: 400, radius: 18, speed: 180, interval: 4000, warningTime: 1200 },
      { id: 2, x1: 550, y1: 200, x2: 50, y2: 200, radius: 18, speed: 180, interval: 4000, warningTime: 1200 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 464, name: "Rail Network", mazeSize: 'medium', balls: 1, difficulty: 7, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 100, x2: 300, y2: 250, speed: 180, railWidth: 12 },
      { id: 2, x1: 300, y1: 350, x2: 500, y2: 500, speed: 180, railWidth: 12 },
    ],
    snowdrifts: [{ x: 250, y: 250, width: 100, height: 100, friction: 0.4, slowFactor: 0.5 }],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 465, name: "Dodge Roll", mazeSize: 'large', balls: 1, difficulty: 7, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 200, radius: 15, type: 'hole' }, { x: 300, y: 400, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 150, x2: 550, y2: 150, radius: 20, speed: 200, interval: 3500, warningTime: 1000 },
      { id: 2, x1: 50, y1: 300, x2: 550, y2: 300, radius: 20, speed: 200, interval: 3500, warningTime: 1000 },
      { id: 3, x1: 50, y1: 450, x2: 550, y2: 450, radius: 20, speed: 200, interval: 3500, warningTime: 1000 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 466, name: "Ice Express", mazeSize: 'large', balls: 1, difficulty: 8, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 500, x2: 300, y2: 350, speed: 220, railWidth: 12 },
      { id: 2, x1: 300, y1: 250, x2: 500, y2: 100, speed: 220, railWidth: 12 },
    ],
    icicleDrops: [
      { id: 1, x: 300, y: 300, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 467, name: "Rockslide", mazeSize: 'large', balls: 1, difficulty: 8, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 15, type: 'hole' }, { x: 450, y: 300, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 22, speed: 220, interval: 3000, warningTime: 800 },
      { id: 2, x1: 550, y1: 350, x2: 50, y2: 350, radius: 22, speed: 220, interval: 3000, warningTime: 800 },
    ],
    blizzard: { direction: 'right', strength: 1.5, interval: 8000, duration: 2000, warningTime: 1500, visibilityRadius: 130 },
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 468, name: "Rail Jump", mazeSize: 'large', balls: 1, difficulty: 8, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 100, x2: 250, y2: 250, speed: 200, railWidth: 12 },
      { id: 2, x1: 350, y1: 350, x2: 500, y2: 500, speed: 200, railWidth: 12 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 200, radius: 25, strength: 5, interval: 3500, duration: 1000, warningTime: 700, freezeDuration: 1500, freezeFactor: 0.35 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 280, width: 100, height: 30, crackTime: 600, breakTime: 400, respawnTime: 2000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 469, name: "Avalanche Alley", mazeSize: 'large', balls: 1, difficulty: 8, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 150, x2: 550, y2: 150, radius: 20, speed: 250, interval: 2500, warningTime: 700 },
      { id: 2, x1: 550, y1: 300, x2: 50, y2: 300, radius: 20, speed: 250, interval: 2500, warningTime: 700 },
      { id: 3, x1: 50, y1: 450, x2: 550, y2: 450, radius: 20, speed: 250, interval: 2500, warningTime: 700 },
    ],
    snowdrifts: [{ x: 200, y: 350, width: 200, height: 80, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 470, name: "Frozen Highway", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 300, y1: 500, x2: 150, y2: 350, speed: 250, railWidth: 10 },
      { id: 2, x1: 150, y1: 250, x2: 450, y2: 200, speed: 250, railWidth: 10 },
      { id: 3, x1: 450, y1: 150, x2: 300, y2: 100, speed: 250, railWidth: 10 },
    ],
    avalanches: [
      { id: 1, x1: 50, y1: 300, x2: 550, y2: 300, radius: 18, speed: 200, interval: 3500, warningTime: 1000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (471-480) ===
  {
    id: 471, name: "Mountain Fury", mazeSize: 'large', balls: 1, difficulty: 9, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 150, x2: 550, y2: 150, radius: 22, speed: 280, interval: 2200, warningTime: 600 },
      { id: 2, x1: 550, y1: 300, x2: 50, y2: 300, radius: 22, speed: 280, interval: 2200, warningTime: 600 },
      { id: 3, x1: 50, y1: 450, x2: 550, y2: 450, radius: 22, speed: 280, interval: 2200, warningTime: 600 },
    ],
    blizzard: { direction: 'right', strength: 2, interval: 5000, duration: 1500, warningTime: 800, visibilityRadius: 100 },
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 6000 }],
  },
  {
    id: 472, name: "Rail Master", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }, { x: 300, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 300, x2: 200, y2: 150, speed: 200, railWidth: 10 },
      { id: 2, x1: 250, y1: 150, x2: 350, y2: 250, speed: 200, railWidth: 10 },
      { id: 3, x1: 350, y1: 350, x2: 500, y2: 300, speed: 200, railWidth: 10 },
    ],
    icicleDrops: [
      { id: 1, x: 300, y: 200, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 300, y: 400, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 473, name: "Crushing Ice", mazeSize: 'large', balls: 1, difficulty: 9, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 250, radius: 15, type: 'hole' }, { x: 400, y: 350, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 25, speed: 300, interval: 2000, warningTime: 500 },
      { id: 2, x1: 550, y1: 400, x2: 50, y2: 400, radius: 25, speed: 300, interval: 2000, warningTime: 500 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 280, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 474, name: "Speed Rail", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 500, x2: 200, y2: 350, speed: 280, railWidth: 10 },
      { id: 2, x1: 200, y1: 250, x2: 400, y2: 250, speed: 280, railWidth: 10 },
      { id: 3, x1: 400, y1: 200, x2: 500, y2: 100, speed: 280, railWidth: 10 },
    ],
    avalanches: [
      { id: 1, x1: 550, y1: 350, x2: 50, y2: 350, radius: 20, speed: 200, interval: 3000, warningTime: 800 },
    ],
    blizzard: { direction: 'left', strength: 2, interval: 6000, duration: 1500, warningTime: 1000, visibilityRadius: 110 },
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 475, name: "Boulder Storm", mazeSize: 'large', balls: 1, difficulty: 10, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 150, x2: 550, y2: 150, radius: 22, speed: 300, interval: 1800, warningTime: 500 },
      { id: 2, x1: 550, y1: 300, x2: 50, y2: 300, radius: 22, speed: 300, interval: 1800, warningTime: 500 },
      { id: 3, x1: 50, y1: 450, x2: 550, y2: 450, radius: 22, speed: 300, interval: 1800, warningTime: 500 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 200, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1500, freezeFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 400, radius: 15, type: 'shield', duration: 6000 }],
  },
  {
    id: 476, name: "Ice Racer", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 100, y1: 100, x2: 250, y2: 200, speed: 300, railWidth: 10 },
      { id: 2, x1: 350, y1: 200, x2: 250, y2: 400, speed: 300, railWidth: 10 },
      { id: 3, x1: 350, y1: 400, x2: 500, y2: 500, speed: 300, railWidth: 10 },
    ],
    icicleDrops: [
      { id: 1, x: 200, y: 300, radius: 25, interval: 2000, warningTime: 600, dropDuration: 400 },
      { id: 2, x: 400, y: 300, radius: 25, interval: 2000, warningTime: 600, dropDuration: 400 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 477, name: "Ridge Runner", mazeSize: 'large', balls: 1, difficulty: 10, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }, { x: 300, y: 300, radius: 18, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 25, speed: 320, interval: 1800, warningTime: 400 },
      { id: 2, x1: 550, y1: 400, x2: 50, y2: 400, radius: 25, speed: 320, interval: 1800, warningTime: 400 },
    ],
    blizzard: { direction: 'down', strength: 2.5, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 90 },
    iceBridges: [
      { id: 1, x: 250, y: 270, width: 100, height: 25, crackTime: 400, breakTime: 300, respawnTime: 1200 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 478, name: "Frost Express", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostrail', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    frostRails: [
      { id: 1, x1: 300, y1: 480, x2: 100, y2: 350, speed: 280, railWidth: 10 },
      { id: 2, x1: 100, y1: 250, x2: 500, y2: 200, speed: 280, railWidth: 10 },
      { id: 3, x1: 500, y1: 150, x2: 300, y2: 100, speed: 280, railWidth: 10 },
    ],
    avalanches: [
      { id: 1, x1: 50, y1: 300, x2: 550, y2: 300, radius: 20, speed: 250, interval: 2500, warningTime: 600 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 300, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1500, freezeFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 479, name: "Avalanche Ridge Finale", mazeSize: 'large', balls: 1, difficulty: 10, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 25 },
    isDarkMode: true, spotlightRadius: 100,
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 22, speed: 300, interval: 2000, warningTime: 500 },
      { id: 2, x1: 550, y1: 400, x2: 50, y2: 400, radius: 22, speed: 300, interval: 2000, warningTime: 500 },
    ],
    frostRails: [
      { id: 1, x1: 300, y1: 280, x2: 100, y2: 100, speed: 250, railWidth: 10 },
    ],
    blizzard: { direction: 'up', strength: 2, interval: 5000, duration: 1500, warningTime: 800, visibilityRadius: 90 },
    collectibles: [
      { id: 1, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 8000 }],
  },
  {
    id: 480, name: "The Glacier", mazeSize: 'large', balls: 1, difficulty: 10, category: 'avalanche', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 20, type: 'hole' }, { x: 400, y: 300, radius: 20, type: 'hole' }, { x: 300, y: 200, radius: 15, type: 'hole' }, { x: 300, y: 400, radius: 15, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 150, x2: 550, y2: 150, radius: 25, speed: 350, interval: 1500, warningTime: 400 },
      { id: 2, x1: 550, y1: 300, x2: 50, y2: 300, radius: 25, speed: 350, interval: 1500, warningTime: 400 },
      { id: 3, x1: 50, y1: 450, x2: 550, y2: 450, radius: 25, speed: 350, interval: 1500, warningTime: 400 },
    ],
    frostRails: [
      { id: 1, x1: 100, y1: 480, x2: 500, y2: 100, speed: 300, railWidth: 10 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 6000 }],
  },
];
