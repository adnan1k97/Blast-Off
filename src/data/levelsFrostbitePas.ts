import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const frostbitePassLevels: Level[] = [
  // === EASY (401-408) — Gentle introduction to Thawing Ice & Snowdrifts ===
  {
    id: 401, name: "First Frost", mazeSize: 'small', balls: 1, difficulty: 1, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    thawingIces: [{ id: 1, x: 240, y: 240, width: 120, height: 120, thawTime: 3000, respawnTime: 5000 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 402, name: "Snowfall", mazeSize: 'small', balls: 1, difficulty: 1, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    snowdrifts: [{ x: 200, y: 200, width: 200, height: 200, friction: 0.3, slowFactor: 0.5 }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 403, name: "Frozen Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [],
    thawingIces: [
      { id: 1, x: 150, y: 300, width: 100, height: 100, thawTime: 2500, respawnTime: 4000 },
      { id: 2, x: 350, y: 300, width: 100, height: 100, thawTime: 2500, respawnTime: 4000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 404, name: "Drift Valley", mazeSize: 'small', balls: 1, difficulty: 2, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    snowdrifts: [
      { x: 210, y: 200, width: 80, height: 200, friction: 0.4, slowFactor: 0.4 },
      { x: 310, y: 200, width: 80, height: 200, friction: 0.4, slowFactor: 0.4 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 405, name: "Thin Ice", mazeSize: 'medium', balls: 1, difficulty: 2, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    thawingIces: [
      { id: 1, x: 150, y: 150, width: 120, height: 80, thawTime: 2000, respawnTime: 6000 },
      { id: 2, x: 330, y: 250, width: 120, height: 80, thawTime: 2000, respawnTime: 6000 },
      { id: 3, x: 150, y: 380, width: 120, height: 80, thawTime: 2000, respawnTime: 6000 },
    ],
    snowdrifts: [{ x: 300, y: 400, width: 150, height: 100, friction: 0.3, slowFactor: 0.5 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 406, name: "Snow Maze", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 350, height: 10 },
      { x: 200, y: 200, width: 360, height: 10 },
    ],
    hazards: [
      { x: 200, y: 450, radius: 18, type: 'hole' },
      { x: 400, y: 280, radius: 18, type: 'hole' },
    ],
    snowdrifts: [
      { x: 50, y: 360, width: 200, height: 180, friction: 0.5, slowFactor: 0.4 },
      { x: 350, y: 50, width: 200, height: 150, friction: 0.3, slowFactor: 0.5 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 407, name: "Thaw Bridge", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 210 },
      { x: 350, y: P, width: 10, height: 200 },
      { x: 350, y: 350, width: 10, height: 210 },
    ],
    hazards: [{ x: 250, y: 200, radius: 15, type: 'hole' }, { x: 250, y: 400, radius: 15, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 160, y: 260, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 2, x: 260, y: 260, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 3, x: 360, y: 260, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 408, name: "Blizzard Intro", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 300, width: 300, height: 10 },
    ],
    hazards: [{ x: 300, y: 450, radius: 20, type: 'hole' }],
    snowdrifts: [
      { x: 100, y: 310, width: 400, height: 100, friction: 0.5, slowFactor: 0.3 },
    ],
    thawingIces: [
      { id: 1, x: 200, y: 150, width: 200, height: 60, thawTime: 2000, respawnTime: 5000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (409-416) ===
  {
    id: 409, name: "Ice Corridor", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 200, width: 300, height: 10 },
      { x: 200, y: 350, width: 360, height: 10 },
    ],
    hazards: [{ x: 400, y: 280, radius: 20, type: 'hole' }, { x: 150, y: 450, radius: 18, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 50, y: 210, width: 140, height: 130, thawTime: 2000, respawnTime: 4000 },
      { id: 2, x: 350, y: 360, width: 140, height: 130, thawTime: 2000, respawnTime: 4000 },
    ],
    snowdrifts: [{ x: 200, y: 210, width: 150, height: 140, friction: 0.4, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 410, name: "Powder Fields", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 150, width: 10, height: 150 },
      { x: 350, y: 300, width: 10, height: 150 },
    ],
    hazards: [{ x: 300, y: 300, radius: 15, type: 'hole' }],
    snowdrifts: [
      { x: 100, y: 100, width: 140, height: 180, friction: 0.5, slowFactor: 0.35 },
      { x: 360, y: 320, width: 140, height: 180, friction: 0.5, slowFactor: 0.35 },
    ],
    collectibles: [
      { id: 1, x: 170, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 430, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 411, name: "Melting Run", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 20, type: 'hole' }, { x: 400, y: 300, radius: 20, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 100, y: 350, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 2, x: 250, y: 250, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 3, x: 400, y: 150, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 4, x: 250, y: 400, width: 80, height: 80, thawTime: 1500, respawnTime: 3000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 412, name: "Snow Drift Gauntlet", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
    ],
    hazards: [{ x: 300, y: 220, radius: 18, type: 'hole' }, { x: 300, y: 380, radius: 18, type: 'hole' }],
    snowdrifts: [
      { x: 50, y: 160, width: 500, height: 130, friction: 0.6, slowFactor: 0.3 },
      { x: 50, y: 310, width: 500, height: 130, friction: 0.6, slowFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 220, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 220, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 413, name: "Frost Combo", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [{ x: 150, y: 300, radius: 20, type: 'hole' }, { x: 450, y: 300, radius: 20, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 220, y: 210, width: 160, height: 80, thawTime: 2000, respawnTime: 4000 },
      { id: 2, x: 220, y: 310, width: 160, height: 80, thawTime: 2000, respawnTime: 4000 },
    ],
    snowdrifts: [{ x: 50, y: 250, width: 130, height: 100, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 414, name: "Ice Sprint", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' }, { x: 300, y: 400, radius: 15, type: 'hole' },
      { x: 400, y: 200, radius: 15, type: 'hole' },
    ],
    thawingIces: [
      { id: 1, x: 150, y: 260, width: 80, height: 80, thawTime: 1200, respawnTime: 2500 },
      { id: 2, x: 260, y: 260, width: 80, height: 80, thawTime: 1200, respawnTime: 2500 },
      { id: 3, x: 370, y: 260, width: 80, height: 80, thawTime: 1200, respawnTime: 2500 },
    ],
    snowdrifts: [{ x: 200, y: 350, width: 200, height: 100, friction: 0.4, slowFactor: 0.4 }],
    iceSurfaces: [{ x: 50, y: 250, width: 100, height: 100 }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 415, name: "Deep Snow", mazeSize: 'large', balls: 1, difficulty: 6, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 300 },
      { x: 300, y: 250, width: 10, height: 310 },
      { x: 450, y: P, width: 10, height: 300 },
    ],
    hazards: [{ x: 220, y: 400, radius: 18, type: 'hole' }, { x: 380, y: 200, radius: 18, type: 'hole' }],
    snowdrifts: [
      { x: 160, y: 200, width: 130, height: 200, friction: 0.6, slowFactor: 0.3 },
      { x: 310, y: 50, width: 130, height: 200, friction: 0.6, slowFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 380, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 416, name: "Frostbite Challenge", mazeSize: 'large', balls: 1, difficulty: 6, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 100, width: 10, height: 200 },
      { x: 400, y: 300, width: 10, height: 200 },
    ],
    hazards: [{ x: 150, y: 450, radius: 20, type: 'hole' }, { x: 450, y: 200, radius: 20, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 250, y: 100, width: 100, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 2, x: 100, y: 350, width: 100, height: 80, thawTime: 1500, respawnTime: 3000 },
      { id: 3, x: 400, y: 400, width: 100, height: 80, thawTime: 1500, respawnTime: 3000 },
    ],
    snowdrifts: [{ x: 250, y: 300, width: 100, height: 200, friction: 0.5, slowFactor: 0.35 }],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (417-420) ===
  {
    id: 417, name: "Permafrost Run", mazeSize: 'large', balls: 1, difficulty: 7, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 400, width: 300, height: 10 },
      { x: 200, y: 250, width: 360, height: 10 },
      { x: P, y: 130, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 470, radius: 18, type: 'hole' },
      { x: 400, y: 320, radius: 18, type: 'hole' },
      { x: 200, y: 180, radius: 18, type: 'hole' },
    ],
    thawingIces: [
      { id: 1, x: 50, y: 410, width: 100, height: 80, thawTime: 1200, respawnTime: 2000 },
      { id: 2, x: 300, y: 260, width: 100, height: 80, thawTime: 1200, respawnTime: 2000 },
      { id: 3, x: 50, y: 140, width: 100, height: 80, thawTime: 1200, respawnTime: 2000 },
    ],
    snowdrifts: [
      { x: 350, y: 410, width: 200, height: 80, friction: 0.6, slowFactor: 0.3 },
      { x: 50, y: 260, width: 150, height: 80, friction: 0.6, slowFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 418, name: "Frozen Labyrinth", mazeSize: 'large', balls: 1, difficulty: 7, category: 'snowdrift', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 250 },
      { x: 250, y: 200, width: 10, height: 360 },
      { x: 350, y: P, width: 10, height: 250 },
      { x: 450, y: 200, width: 10, height: 360 },
    ],
    hazards: [
      { x: 200, y: 400, radius: 15, type: 'hole' },
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    snowdrifts: [
      { x: 160, y: 300, width: 80, height: 200, friction: 0.7, slowFactor: 0.25 },
      { x: 260, y: 50, width: 80, height: 200, friction: 0.7, slowFactor: 0.25 },
      { x: 360, y: 300, width: 80, height: 200, friction: 0.7, slowFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 419, name: "Avalanche Preview", mazeSize: 'large', balls: 1, difficulty: 8, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
    ],
    thawingIces: [
      { id: 1, x: 150, y: 260, width: 70, height: 80, thawTime: 1000, respawnTime: 2000 },
      { id: 2, x: 260, y: 260, width: 70, height: 80, thawTime: 1000, respawnTime: 2000 },
      { id: 3, x: 370, y: 260, width: 70, height: 80, thawTime: 1000, respawnTime: 2000 },
    ],
    snowdrifts: [
      { x: 100, y: 350, width: 400, height: 100, friction: 0.6, slowFactor: 0.3 },
    ],
    iceSurfaces: [{ x: 200, y: 100, width: 200, height: 100 }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 420, name: "Frostbite Finale", mazeSize: 'large', balls: 1, difficulty: 8, category: 'thawing', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 80, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
      { x: 200, y: 200, width: 10, height: 210 },
      { x: 400, y: 200, width: 10, height: 210 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 150, radius: 18, type: 'hole' },
    ],
    thawingIces: [
      { id: 1, x: 50, y: 200, width: 140, height: 60, thawTime: 1200, respawnTime: 2500 },
      { id: 2, x: 50, y: 340, width: 140, height: 60, thawTime: 1200, respawnTime: 2500 },
      { id: 3, x: 410, y: 200, width: 140, height: 60, thawTime: 1200, respawnTime: 2500 },
      { id: 4, x: 410, y: 340, width: 140, height: 60, thawTime: 1200, respawnTime: 2500 },
    ],
    snowdrifts: [
      { x: 210, y: 210, width: 180, height: 180, friction: 0.7, slowFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 8000 }],
  },
];
