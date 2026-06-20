import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const cinderTunnelsLevels: Level[] = [
  // === EASY (301-308) — Gentle introduction to Lava Pools & Heat Vents ===
  {
    id: 301, name: "First Ember", mazeSize: 'small', balls: 1, difficulty: 1, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    lavaPools: [{ x: 250, y: 250, width: 100, height: 100, damage: 15 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 302, name: "Warm Welcome", mazeSize: 'small', balls: 1, difficulty: 1, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    heatVents: [{ x: 300, y: 400, radius: 40, strength: 4, interval: 4000, duration: 1500, warningTime: 1000 }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 303, name: "Cinder Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [],
    lavaPools: [
      { x: 150, y: 350, width: 120, height: 80, damage: 15 },
      { x: 330, y: 350, width: 120, height: 80, damage: 15 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 304, name: "Vent Hop", mazeSize: 'small', balls: 1, difficulty: 2, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 150, width: 10, height: 150 },
      { x: 250, y: 350, width: 10, height: 150 },
    ],
    hazards: [],
    heatVents: [
      { x: 300, y: 500, radius: 35, strength: 5, interval: 3500, duration: 1200, warningTime: 800 },
      { x: 300, y: 100, radius: 35, strength: 4, interval: 4000, duration: 1200, warningTime: 1000 },
    ],
    collectibles: [
      { id: 1, x: 180, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 305, name: "Lava Moat", mazeSize: 'small', balls: 1, difficulty: 2, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    lavaPools: [
      { x: P, y: 200, width: S-2*P, height: 40, damage: 20 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 120, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 306, name: "Gust & Glow", mazeSize: 'small', balls: 1, difficulty: 3, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 300, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 200, radius: 15, type: 'hole' }],
    heatVents: [
      { x: 150, y: 450, radius: 40, strength: 5, interval: 3000, duration: 1000, warningTime: 800 },
      { x: 450, y: 450, radius: 40, strength: 5, interval: 3500, duration: 1000, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 307, name: "Ember Trail", mazeSize: 'small', balls: 1, difficulty: 3, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    lavaPools: [
      { x: 120, y: 180, width: 160, height: 60, damage: 18 },
      { x: 320, y: 300, width: 160, height: 60, damage: 18 },
      { x: 120, y: 420, width: 160, height: 60, damage: 18 },
    ],
    collectibles: [
      { id: 1, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 308, name: "Vent Valley", mazeSize: 'small', balls: 1, difficulty: 3, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [],
    heatVents: [
      { x: 200, y: 500, radius: 35, strength: 5, interval: 3000, duration: 1200, warningTime: 800 },
      { x: 400, y: 500, radius: 35, strength: 5, interval: 3500, duration: 1200, warningTime: 900 },
      { x: 300, y: 280, radius: 30, strength: 4, interval: 4000, duration: 1000, warningTime: 1000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 130, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (309-316) — Combining Lava Pools + Heat Vents, tighter layouts ===
  {
    id: 309, name: "Molten Corridor", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 130 },
      { x: 200, y: 350, width: 10, height: 130 },
      { x: 400, y: 150, width: 10, height: 130 },
      { x: 400, y: 350, width: 10, height: 130 },
    ],
    hazards: [{ x: 300, y: 150, radius: 15, type: 'hole' }],
    lavaPools: [
      { x: 210, y: 280, width: 80, height: 50, damage: 20 },
      { x: 310, y: 280, width: 80, height: 50, damage: 20 },
    ],
    heatVents: [{ x: 300, y: 480, radius: 35, strength: 4, interval: 3500, duration: 1000, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 310, name: "Flame Bridge", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 280, width: 200, height: 10 },
      { x: 300, y: 280, width: 260, height: 10 },
    ],
    hazards: [],
    lavaPools: [{ x: 200, y: 290, width: 100, height: 40, damage: 20 }],
    heatVents: [
      { x: 250, y: 250, radius: 30, strength: 6, interval: 3000, duration: 1000, warningTime: 700 },
      { x: 400, y: 400, radius: 35, strength: 5, interval: 3500, duration: 1200, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 311, name: "Cinder Maze", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 250, width: 300, height: 10 },
    ],
    hazards: [{ x: 450, y: 450, radius: 18, type: 'hole' }],
    lavaPools: [
      { x: P, y: 260, width: 150, height: 50, damage: 22 },
      { x: 350, y: 410, width: 150, height: 50, damage: 22 },
    ],
    heatVents: [{ x: 300, y: 330, radius: 30, strength: 5, interval: 3000, duration: 1000, warningTime: 700 }],
    collectibles: [
      { id: 1, x: 200, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 312, name: "Magma Step", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    lavaPools: [
      { x: 150, y: 250, width: 100, height: 100, damage: 22 },
      { x: 350, y: 250, width: 100, height: 100, damage: 22 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 313, name: "Thermal Pulse", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 350, width: 130, height: 10 },
      { x: 320, y: 350, width: 130, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [],
    heatVents: [
      { x: 150, y: 480, radius: 35, strength: 5, interval: 2800, duration: 1000, warningTime: 700 },
      { x: 300, y: 480, radius: 35, strength: 6, interval: 3200, duration: 1000, warningTime: 800 },
      { x: 450, y: 480, radius: 35, strength: 5, interval: 3000, duration: 1000, warningTime: 700 },
    ],
    lavaPools: [{ x: 200, y: 360, width: 200, height: 40, damage: 20 }],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 130, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 314, name: "Lava Lakes", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    lavaPools: [
      { x: 100, y: 200, width: 120, height: 80, damage: 20 },
      { x: 280, y: 380, width: 120, height: 80, damage: 20 },
      { x: 380, y: 130, width: 100, height: 80, damage: 20 },
    ],
    collectibles: [
      { id: 1, x: 450, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 200, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 315, name: "Fire Funnel", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: P, width: 10, height: 200 },
      { x: 250, y: 350, width: 10, height: 210 },
    ],
    hazards: [{ x: 400, y: 200, radius: 18, type: 'hole' }],
    heatVents: [
      { x: 300, y: 500, radius: 40, strength: 6, interval: 2500, duration: 1000, warningTime: 600 },
      { x: 300, y: 100, radius: 40, strength: 5, interval: 3000, duration: 1000, warningTime: 700 },
    ],
    lavaPools: [
      { x: 260, y: 220, width: 80, height: 120, damage: 25 },
    ],
    collectibles: [
      { id: 1, x: 180, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 180, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 316, name: "Scorched Earth", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 300, width: 250, height: 10 },
      { x: 300, y: 300, width: 260, height: 10 },
    ],
    hazards: [],
    lavaPools: [
      { x: P, y: 310, width: 100, height: 50, damage: 25 },
      { x: 200, y: 310, width: 100, height: 50, damage: 25 },
      { x: 400, y: 200, width: 100, height: 50, damage: 25 },
    ],
    heatVents: [
      { x: 250, y: 260, radius: 30, strength: 5, interval: 3000, duration: 800, warningTime: 600 },
    ],
    collectibles: [
      { id: 1, x: 450, y: 120, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (317-320) — Tight lava + vent combos ===
  {
    id: 317, name: "Infernal Pass", mazeSize: 'large', balls: 1, difficulty: 7, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 400, width: 200, height: 10 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    lavaPools: [
      { x: P, y: 210, width: 200, height: 50, damage: 28 },
      { x: 300, y: 410, width: 200, height: 50, damage: 28 },
      { x: 200, y: 300, width: 200, height: 40, damage: 28 },
    ],
    heatVents: [
      { x: 100, y: 480, radius: 35, strength: 6, interval: 2500, duration: 1000, warningTime: 600 },
      { x: 500, y: 150, radius: 35, strength: 6, interval: 2800, duration: 1000, warningTime: 600 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 318, name: "Eruption Alley", mazeSize: 'large', balls: 1, difficulty: 7, category: 'heatvent', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 250, width: 300, height: 10 },
      { x: 150, y: 130, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 330, radius: 15, type: 'hole' },
      { x: 400, y: 180, radius: 15, type: 'hole' },
    ],
    heatVents: [
      { x: 150, y: 480, radius: 35, strength: 6, interval: 2500, duration: 800, warningTime: 500 },
      { x: 300, y: 480, radius: 40, strength: 7, interval: 3000, duration: 1000, warningTime: 600 },
      { x: 450, y: 480, radius: 35, strength: 6, interval: 2800, duration: 800, warningTime: 500 },
      { x: 300, y: 200, radius: 30, strength: 5, interval: 3500, duration: 800, warningTime: 700 },
    ],
    lavaPools: [
      { x: 150, y: 140, width: 300, height: 30, damage: 25 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 319, name: "Caldera Run", mazeSize: 'large', balls: 2, difficulty: 8, category: 'lavapool', world: 'volcanic-core',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 20, type: 'hole' },
      { x: 450, y: 150, radius: 20, type: 'hole' },
    ],
    lavaPools: [
      { x: 100, y: 200, width: 150, height: 60, damage: 30 },
      { x: 350, y: 200, width: 150, height: 60, damage: 30 },
      { x: 200, y: 400, width: 200, height: 60, damage: 30 },
    ],
    heatVents: [
      { x: 200, y: 350, radius: 35, strength: 6, interval: 2200, duration: 800, warningTime: 500 },
      { x: 400, y: 350, radius: 35, strength: 6, interval: 2500, duration: 800, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 320, name: "Tunnel's End", mazeSize: 'large', balls: 1, difficulty: 8, category: 'lavapool', world: 'volcanic-core',
    isDarkMode: true, spotlightRadius: 110,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    lavaPools: [
      { x: 100, y: 150, width: 120, height: 80, damage: 30 },
      { x: 300, y: 250, width: 120, height: 80, damage: 30 },
      { x: 150, y: 400, width: 120, height: 80, damage: 30 },
      { x: 380, y: 400, width: 120, height: 80, damage: 30 },
    ],
    heatVents: [
      { x: 200, y: 500, radius: 40, strength: 7, interval: 2000, duration: 800, warningTime: 500 },
      { x: 450, y: 200, radius: 35, strength: 6, interval: 2500, duration: 800, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 450, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
