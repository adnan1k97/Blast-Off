import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const glacierDepthsLevels: Level[] = [
  // === EASY (421-426) ===
  {
    id: 421, name: "Geyser Intro", mazeSize: 'small', balls: 1, difficulty: 3, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    frozenGeysers: [{ id: 1, x: 300, y: 400, radius: 35, strength: 5, interval: 5000, duration: 1500, warningTime: 1000, freezeDuration: 2000, freezeFactor: 0.3 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 422, name: "Crystal Bridge", mazeSize: 'small', balls: 1, difficulty: 3, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [{ x: 300, y: 400, radius: 20, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 210, y: 200, width: 180, height: 40, crackTime: 1500, breakTime: 1000, respawnTime: 5000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 423, name: "Frozen Springs", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 200, y: 400, radius: 30, strength: 4, interval: 4000, duration: 1200, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.35 },
      { id: 2, x: 400, y: 200, radius: 30, strength: 4, interval: 4000, duration: 1200, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.35 },
    ],
    snowdrifts: [{ x: 250, y: 250, width: 100, height: 100, friction: 0.4, slowFactor: 0.5 }],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 424, name: "Glass Floor", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    iceBridges: [
      { id: 1, x: 200, y: 350, width: 200, height: 40, crackTime: 1200, breakTime: 800, respawnTime: 4000 },
      { id: 2, x: 200, y: 200, width: 200, height: 40, crackTime: 1200, breakTime: 800, respawnTime: 4000 },
    ],
    thawingIces: [{ id: 1, x: 250, y: 260, width: 100, height: 80, thawTime: 2000, respawnTime: 4000 }],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 425, name: "Geyser Maze", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 150, y: 300, radius: 25, strength: 5, interval: 3500, duration: 1000, warningTime: 700, freezeDuration: 2000, freezeFactor: 0.3 },
      { id: 2, x: 300, y: 450, radius: 25, strength: 5, interval: 3500, duration: 1000, warningTime: 700, freezeDuration: 2000, freezeFactor: 0.3 },
      { id: 3, x: 450, y: 200, radius: 25, strength: 5, interval: 3500, duration: 1000, warningTime: 700, freezeDuration: 2000, freezeFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 426, name: "Cracking Ice", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 140, y: 270, width: 100, height: 60, crackTime: 1000, breakTime: 700, respawnTime: 3000 },
      { id: 2, x: 260, y: 270, width: 100, height: 60, crackTime: 1000, breakTime: 700, respawnTime: 3000 },
      { id: 3, x: 380, y: 270, width: 100, height: 60, crackTime: 1000, breakTime: 700, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 190, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 310, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 430, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (427-434) ===
  {
    id: 427, name: "Geyser Bridge", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 350, height: 10 },
      { x: 200, y: 200, width: 360, height: 10 },
    ],
    hazards: [{ x: 300, y: 450, radius: 18, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 200, y: 450, radius: 30, strength: 6, interval: 4000, duration: 1200, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.35 },
    ],
    iceBridges: [
      { id: 1, x: 200, y: 250, width: 150, height: 40, crackTime: 1200, breakTime: 800, respawnTime: 3500 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 428, name: "Ice Puzzle", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 18, type: 'hole' }, { x: 450, y: 300, radius: 18, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 200, y: 150, width: 200, height: 30, crackTime: 1000, breakTime: 600, respawnTime: 3000 },
      { id: 2, x: 200, y: 280, width: 200, height: 30, crackTime: 1000, breakTime: 600, respawnTime: 3000 },
      { id: 3, x: 200, y: 410, width: 200, height: 30, crackTime: 1000, breakTime: 600, respawnTime: 3000 },
    ],
    snowdrifts: [{ x: 200, y: 320, width: 200, height: 80, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 429, name: "Frozen Eruption", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 150, radius: 15, type: 'hole' }, { x: 300, y: 450, radius: 15, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 200, y: 300, radius: 25, strength: 5, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 2000, freezeFactor: 0.3 },
      { id: 2, x: 400, y: 300, radius: 25, strength: 5, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 2000, freezeFactor: 0.3 },
    ],
    thawingIces: [
      { id: 1, x: 260, y: 260, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 430, name: "Bridge Sprint", mazeSize: 'large', balls: 1, difficulty: 6, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 350, radius: 18, type: 'hole' }, { x: 400, y: 250, radius: 18, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 100, y: 160, width: 150, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 2, x: 280, y: 280, width: 150, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 3, x: 400, y: 400, width: 150, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2500 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 150, radius: 25, strength: 4, interval: 4000, duration: 1000, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.4 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 431, name: "Frost Gauntlet", mazeSize: 'large', balls: 1, difficulty: 7, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 400, height: 10 },
      { x: 150, y: 200, width: 410, height: 10 },
    ],
    hazards: [{ x: 300, y: 280, radius: 20, type: 'hole' }, { x: 150, y: 150, radius: 15, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 200, y: 450, radius: 30, strength: 6, interval: 3500, duration: 1200, warningTime: 700, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 2, x: 400, y: 280, radius: 30, strength: 6, interval: 3500, duration: 1200, warningTime: 700, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    iceBridges: [
      { id: 1, x: 50, y: 360, width: 120, height: 30, crackTime: 1000, breakTime: 600, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 432, name: "Shattered Path", mazeSize: 'large', balls: 1, difficulty: 7, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 200, radius: 15, type: 'hole' },
      { x: 450, y: 400, radius: 15, type: 'hole' },
    ],
    iceBridges: [
      { id: 1, x: 200, y: 250, width: 80, height: 40, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 2, x: 320, y: 250, width: 80, height: 40, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 3, x: 200, y: 350, width: 80, height: 40, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 4, x: 320, y: 350, width: 80, height: 40, crackTime: 800, breakTime: 500, respawnTime: 2500 },
    ],
    snowdrifts: [{ x: 100, y: 400, width: 200, height: 100, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 433, name: "Glacial Depths", mazeSize: 'large', balls: 1, difficulty: 7, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 100, y: 300, radius: 25, strength: 5, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 1800, freezeFactor: 0.3 },
      { id: 2, x: 300, y: 150, radius: 25, strength: 5, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 1800, freezeFactor: 0.3 },
      { id: 3, x: 500, y: 300, radius: 25, strength: 5, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 1800, freezeFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 434, name: "Crystal Cavern", mazeSize: 'large', balls: 1, difficulty: 8, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }, { x: 300, y: 300, radius: 15, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 130, y: 270, width: 60, height: 60, crackTime: 700, breakTime: 400, respawnTime: 2000 },
      { id: 2, x: 230, y: 270, width: 60, height: 60, crackTime: 700, breakTime: 400, respawnTime: 2000 },
      { id: 3, x: 330, y: 270, width: 60, height: 60, crackTime: 700, breakTime: 400, respawnTime: 2000 },
      { id: 4, x: 430, y: 270, width: 60, height: 60, crackTime: 700, breakTime: 400, respawnTime: 2000 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 450, radius: 30, strength: 6, interval: 3000, duration: 1000, warningTime: 600, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 500, radius: 15, type: 'shield', duration: 6000 }],
  },
  // === HARD (435-440) ===
  {
    id: 435, name: "Glacier Rush", mazeSize: 'large', balls: 1, difficulty: 8, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 150, y: 450, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 2, x: 300, y: 300, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 3, x: 450, y: 150, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    iceBridges: [
      { id: 1, x: 200, y: 400, width: 100, height: 30, crackTime: 600, breakTime: 400, respawnTime: 2000 },
      { id: 2, x: 350, y: 200, width: 100, height: 30, crackTime: 600, breakTime: 400, respawnTime: 2000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 436, name: "Ice Collapse", mazeSize: 'large', balls: 1, difficulty: 8, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 18, type: 'hole' }, { x: 450, y: 300, radius: 18, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 200, y: 130, width: 200, height: 25, crackTime: 600, breakTime: 400, respawnTime: 2000 },
      { id: 2, x: 200, y: 230, width: 200, height: 25, crackTime: 600, breakTime: 400, respawnTime: 2000 },
      { id: 3, x: 200, y: 330, width: 200, height: 25, crackTime: 600, breakTime: 400, respawnTime: 2000 },
      { id: 4, x: 200, y: 430, width: 200, height: 25, crackTime: 600, breakTime: 400, respawnTime: 2000 },
    ],
    thawingIces: [{ id: 1, x: 250, y: 260, width: 100, height: 60, thawTime: 1200, respawnTime: 2500 }],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 437, name: "Frozen Fury", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 200, radius: 18, type: 'hole' }, { x: 300, y: 400, radius: 18, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 150, y: 200, radius: 25, strength: 7, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2500, freezeFactor: 0.2 },
      { id: 2, x: 450, y: 200, radius: 25, strength: 7, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2500, freezeFactor: 0.2 },
      { id: 3, x: 150, y: 400, radius: 25, strength: 7, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2500, freezeFactor: 0.2 },
      { id: 4, x: 450, y: 400, radius: 25, strength: 7, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2500, freezeFactor: 0.2 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 280, width: 100, height: 40, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 438, name: "Glacier Depths", mazeSize: 'large', balls: 1, difficulty: 9, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 210, y: 200, width: 80, height: 30, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 2, x: 210, y: 350, width: 80, height: 30, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 3, x: 310, y: 200, width: 80, height: 30, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 4, x: 310, y: 350, width: 80, height: 30, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 200, radius: 20, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1800, freezeFactor: 0.3 },
      { id: 2, x: 300, y: 400, radius: 20, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1800, freezeFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 439, name: "Arctic Storm", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frozengeyser', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 250, radius: 18, type: 'hole' }, { x: 400, y: 350, radius: 18, type: 'hole' }],
    frozenGeysers: [
      { id: 1, x: 150, y: 300, radius: 25, strength: 6, interval: 2000, duration: 700, warningTime: 400, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 2, x: 300, y: 400, radius: 25, strength: 6, interval: 2000, duration: 700, warningTime: 400, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 3, x: 450, y: 200, radius: 25, strength: 6, interval: 2000, duration: 700, warningTime: 400, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 180, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 2, x: 250, y: 380, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    snowdrifts: [{ x: 100, y: 150, width: 100, height: 100, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 80, y: 80, radius: 15, type: 'shield', duration: 8000 }],
  },
  {
    id: 440, name: "Glacier Finale", mazeSize: 'large', balls: 1, difficulty: 10, category: 'icebridge', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }, { x: 300, y: 300, radius: 18, type: 'hole' }],
    iceBridges: [
      { id: 1, x: 100, y: 140, width: 80, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 2, x: 220, y: 220, width: 80, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 3, x: 340, y: 350, width: 80, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 4, x: 420, y: 460, width: 80, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    frozenGeysers: [
      { id: 1, x: 150, y: 350, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 2, x: 450, y: 150, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    thawingIces: [
      { id: 1, x: 250, y: 260, width: 100, height: 60, thawTime: 1000, respawnTime: 2000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 5000 }],
  },
];
