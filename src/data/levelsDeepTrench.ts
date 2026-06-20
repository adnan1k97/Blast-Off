import { Level } from '@/types/game';

const S = 600;
const P = 40;
const B = [
  { x: P, y: P, width: S - 2 * P, height: 10 },
  { x: P, y: S - P - 10, width: S - 2 * P, height: 10 },
  { x: P, y: P, width: 10, height: S - 2 * P },
  { x: S - P - 10, y: P, width: 10, height: S - 2 * P },
];

export const deepTrenchLevels: Level[] = [
  {
    id: 121, name: "Descent Begins", mazeSize: 'small', balls: 1, difficulty: 3,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 100, y: 100 }, goal: { x: 500, y: 500, radius: 35 },
    walls: [...B], hazards: [],
    whirlpools: [{ x: 300, y: 300, radius: 120, strength: 0.6, pullStrength: 0.2, clockwise: true }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 122, name: "Spiral Depths", mazeSize: 'small', balls: 1, difficulty: 3,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [...B, { x: 250, y: 200, width: 10, height: 200 }], hazards: [],
    whirlpools: [
      { x: 160, y: 300, radius: 100, strength: 0.7, pullStrength: 0.25, clockwise: true },
      { x: 420, y: 300, radius: 100, strength: 0.7, pullStrength: 0.25, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 160, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 420, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 123, name: "Whirlpool Alley", mazeSize: 'medium', balls: 1, difficulty: 4,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [...B, { x: P, y: 200, width: 300, height: 10 }, { x: 300, y: 400, width: 260, height: 10 }],
    hazards: [{ x: 400, y: 300, radius: 18, type: 'hole' }],
    whirlpools: [
      { x: 200, y: 300, radius: 90, strength: 0.8, pullStrength: 0.3, clockwise: true },
      { x: 450, y: 150, radius: 80, strength: 0.6, pullStrength: 0.2, clockwise: false },
    ],
    waterCurrents: [{ x: 50, y: 410, width: 250, height: 60, direction: 'right', strength: 0.7 }],
    collectibles: [
      { id: 1, x: 200, y: 130, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 124, name: "Twin Vortex", mazeSize: 'medium', balls: 1, difficulty: 4,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 35 },
    walls: [...B], hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    whirlpools: [
      { x: 180, y: 300, radius: 110, strength: 0.9, pullStrength: 0.35, clockwise: true },
      { x: 420, y: 300, radius: 110, strength: 0.9, pullStrength: 0.35, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [{ id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 6000 }],
  },
  {
    id: 125, name: "Jellyfish Garden", mazeSize: 'small', balls: 1, difficulty: 4,
    category: 'jellyfish', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [...B], hazards: [],
    jellyfish: [
      { id: 1, x: 200, y: 200, radius: 25, slowFactor: 0.3, slowDuration: 2000, movePattern: 'vertical', moveRange: 80, moveSpeed: 1.5 },
      { id: 2, x: 350, y: 400, radius: 25, slowFactor: 0.3, slowDuration: 2000, movePattern: 'vertical', moveRange: 80, moveSpeed: 2 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 126, name: "Neon Drift", mazeSize: 'medium', balls: 1, difficulty: 5,
    category: 'jellyfish', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [...B, { x: 200, y: P, width: 10, height: 250 }, { x: 400, y: 300, width: 10, height: 260 }],
    hazards: [{ x: 300, y: 150, radius: 18, type: 'hole' }],
    jellyfish: [
      { id: 1, x: 150, y: 350, radius: 28, slowFactor: 0.25, slowDuration: 2500, movePattern: 'horizontal', moveRange: 60, moveSpeed: 1.8 },
      { id: 2, x: 350, y: 200, radius: 28, slowFactor: 0.25, slowDuration: 2500, movePattern: 'circular', moveRange: 50, moveSpeed: 1.5 },
    ],
    waterCurrents: [{ x: 210, y: 400, width: 190, height: 60, direction: 'right', strength: 0.6 }],
    collectibles: [
      { id: 1, x: 120, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 127, name: "Stinging Passage", mazeSize: 'medium', balls: 1, difficulty: 5,
    category: 'jellyfish', world: 'sunken-temple',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [...B, { x: P, y: 400, width: 400, height: 10 }, { x: 150, y: 250, width: 410, height: 10 }],
    hazards: [{ x: 300, y: 480, radius: 18, type: 'hole' }],
    jellyfish: [
      { id: 1, x: 250, y: 330, radius: 22, slowFactor: 0.35, slowDuration: 2000, movePattern: 'horizontal', moveRange: 100, moveSpeed: 2 },
      { id: 2, x: 400, y: 170, radius: 22, slowFactor: 0.35, slowDuration: 2000, movePattern: 'horizontal', moveRange: 80, moveSpeed: 2.5 },
      { id: 3, x: 200, y: 100, radius: 22, slowFactor: 0.35, slowDuration: 2000, movePattern: 'vertical', moveRange: 50, moveSpeed: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 170, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 128, name: "Vortex & Venom", mazeSize: 'medium', balls: 1, difficulty: 5,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [...B], hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    whirlpools: [{ x: 200, y: 200, radius: 100, strength: 0.8, pullStrength: 0.3, clockwise: true }],
    jellyfish: [
      { id: 1, x: 400, y: 400, radius: 25, slowFactor: 0.3, slowDuration: 2000, movePattern: 'circular', moveRange: 60, moveSpeed: 1.5 },
    ],
    waterCurrents: [{ x: 350, y: 100, width: 200, height: 60, direction: 'right', strength: 0.7 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [{ id: 1, x: 400, y: 250, radius: 15, type: 'speed', duration: 6000 }],
  },
  {
    id: 129, name: "Trench Maze", mazeSize: 'large', balls: 1, difficulty: 6,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [...B, { x: 150, y: P, width: 10, height: 200 }, { x: 300, y: 200, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 200 }, { x: 450, y: P, width: 10, height: 350 }],
    hazards: [{ x: 220, y: 300, radius: 18, type: 'hole' }, { x: 380, y: 450, radius: 18, type: 'hole' }],
    whirlpools: [
      { x: 100, y: 400, radius: 80, strength: 0.7, pullStrength: 0.25, clockwise: false },
      { x: 380, y: 150, radius: 80, strength: 0.7, pullStrength: 0.25, clockwise: true },
    ],
    jellyfish: [
      { id: 1, x: 230, y: 150, radius: 20, slowFactor: 0.35, slowDuration: 1500, movePattern: 'vertical', moveRange: 50, moveSpeed: 2 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 380, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 130, name: "BOSS: Depth Warden", mazeSize: 'large', balls: 1, difficulty: 7,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [...B, { x: 150, y: 200, width: 10, height: 150 }, { x: 440, y: 200, width: 10, height: 150 },
      { x: 200, y: 350, width: 200, height: 10 }],
    hazards: [
      { x: 200, y: 250, radius: 18, type: 'hole' }, { x: 400, y: 250, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
    ],
    whirlpools: [
      { x: 300, y: 300, radius: 130, strength: 1.0, pullStrength: 0.4, clockwise: true },
      { x: 150, y: 450, radius: 70, strength: 0.7, pullStrength: 0.3, clockwise: false },
      { x: 450, y: 450, radius: 70, strength: 0.7, pullStrength: 0.3, clockwise: false },
    ],
    jellyfish: [
      { id: 1, x: 200, y: 150, radius: 22, slowFactor: 0.3, slowDuration: 2000, movePattern: 'horizontal', moveRange: 40, moveSpeed: 2 },
      { id: 2, x: 400, y: 150, radius: 22, slowFactor: 0.3, slowDuration: 2000, movePattern: 'horizontal', moveRange: 40, moveSpeed: 2.5 },
    ],
    bubbleVents: [{ x: 300, y: 520, radius: 30, strength: 2.5, burstInterval: 600, burstDuration: 300 }],
    collectibles: [
      { id: 1, x: 100, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 200, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [{ id: 1, x: 300, y: 400, radius: 15, type: 'shield', duration: 8000 }],
  },
  {
    id: 131, name: "Current Chaos", mazeSize: 'medium', balls: 1, difficulty: 5,
    category: 'water', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [...B, { x: 250, y: 150, width: 10, height: 140 }, { x: 350, y: 310, width: 10, height: 140 }],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    waterCurrents: [
      { x: 60, y: 100, width: 180, height: 80, direction: 'right', strength: 0.9 },
      { x: 260, y: 250, width: 90, height: 100, direction: 'down', strength: 0.8 },
      { x: 360, y: 420, width: 190, height: 80, direction: 'left', strength: 0.9 },
    ],
    whirlpools: [{ x: 450, y: 200, radius: 70, strength: 0.5, pullStrength: 0.2, clockwise: true }],
    collectibles: [
      { id: 1, x: 150, y: 140, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 132, name: "Jelly Gauntlet", mazeSize: 'medium', balls: 1, difficulty: 6,
    category: 'jellyfish', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [...B, { x: P, y: 200, width: 200, height: 10 }, { x: P, y: 400, width: 200, height: 10 },
      { x: 350, y: 200, width: 210, height: 10 }, { x: 350, y: 400, width: 210, height: 10 }],
    hazards: [{ x: 300, y: 150, radius: 15, type: 'hole' }, { x: 300, y: 450, radius: 15, type: 'hole' }],
    jellyfish: [
      { id: 1, x: 180, y: 300, radius: 22, slowFactor: 0.25, slowDuration: 2500, movePattern: 'vertical', moveRange: 70, moveSpeed: 2 },
      { id: 2, x: 300, y: 300, radius: 22, slowFactor: 0.25, slowDuration: 2500, movePattern: 'horizontal', moveRange: 40, moveSpeed: 3 },
      { id: 3, x: 420, y: 300, radius: 22, slowFactor: 0.25, slowDuration: 2500, movePattern: 'vertical', moveRange: 70, moveSpeed: 2.5 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [{ id: 1, x: 80, y: 300, radius: 15, type: 'speed', duration: 6000 }],
  },
  {
    id: 133, name: "Double Whirl", mazeSize: 'medium', balls: 2, difficulty: 6,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [...B], hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    whirlpools: [
      { x: 200, y: 200, radius: 100, strength: 0.8, pullStrength: 0.3, clockwise: true },
      { x: 400, y: 400, radius: 100, strength: 0.8, pullStrength: 0.3, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 400, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 100, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 134, name: "Blind Depths", mazeSize: 'medium', balls: 1, difficulty: 6,
    category: 'dark', world: 'sunken-temple', isDarkMode: true, spotlightRadius: 90,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [...B, { x: 200, y: 200, width: 200, height: 10 }, { x: 300, y: 350, width: 260, height: 10 }],
    hazards: [{ x: 350, y: 280, radius: 18, type: 'hole' }],
    whirlpools: [{ x: 200, y: 400, radius: 90, strength: 0.7, pullStrength: 0.25, clockwise: true }],
    waterCurrents: [{ x: 50, y: 150, width: 150, height: 60, direction: 'right', strength: 0.6 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 135, name: "Multi-Ball Trench", mazeSize: 'medium', balls: 2, difficulty: 6,
    category: 'multiball', world: 'sunken-temple',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [...B, { x: 250, y: 150, width: 10, height: 300 }],
    hazards: [{ x: 400, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    jellyfish: [
      { id: 1, x: 150, y: 200, radius: 22, slowFactor: 0.3, slowDuration: 2000, movePattern: 'vertical', moveRange: 60, moveSpeed: 2 },
    ],
    whirlpools: [{ x: 400, y: 300, radius: 80, strength: 0.6, pullStrength: 0.2, clockwise: false }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 136, name: "Whirlpool Sprint", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [...B],
    hazards: [{ x: 200, y: 350, radius: 15, type: 'hole' }, { x: 400, y: 250, radius: 15, type: 'hole' }],
    whirlpools: [
      { x: 150, y: 150, radius: 80, strength: 1.0, pullStrength: 0.35, clockwise: true },
      { x: 300, y: 300, radius: 90, strength: 1.0, pullStrength: 0.35, clockwise: false },
      { x: 450, y: 450, radius: 80, strength: 1.0, pullStrength: 0.35, clockwise: true },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 5000 }],
  },
  {
    id: 137, name: "Abyssal Corridor", mazeSize: 'large', balls: 1, difficulty: 7,
    category: 'jellyfish', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 80, y: 520, radius: 30 },
    walls: [...B, { x: 150, y: P, width: 10, height: 180 }, { x: 150, y: 250, width: 410, height: 10 },
      { x: 150, y: 380, width: 410, height: 10 }, { x: 150, y: 450, width: 10, height: 110 }],
    hazards: [{ x: 400, y: 150, radius: 18, type: 'hole' }, { x: 300, y: 450, radius: 18, type: 'hole' }],
    jellyfish: [
      { id: 1, x: 300, y: 130, radius: 20, slowFactor: 0.3, slowDuration: 2000, movePattern: 'horizontal', moveRange: 80, moveSpeed: 2 },
      { id: 2, x: 350, y: 315, radius: 20, slowFactor: 0.3, slowDuration: 2000, movePattern: 'horizontal', moveRange: 100, moveSpeed: 2.5 },
      { id: 3, x: 300, y: 480, radius: 20, slowFactor: 0.3, slowDuration: 2000, movePattern: 'horizontal', moveRange: 60, moveSpeed: 3 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 315, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 200, y: 480, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 138, name: "Nightfall Trench", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'dark', world: 'sunken-temple', isDarkMode: true, spotlightRadius: 80,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [...B, { x: 200, y: 150, width: 10, height: 200 }, { x: 400, y: 250, width: 10, height: 200 }],
    hazards: [{ x: 300, y: 200, radius: 18, type: 'hole' }, { x: 300, y: 400, radius: 18, type: 'hole' }],
    whirlpools: [{ x: 300, y: 300, radius: 100, strength: 0.7, pullStrength: 0.25, clockwise: true }],
    jellyfish: [
      { id: 1, x: 150, y: 400, radius: 22, slowFactor: 0.3, slowDuration: 2000, movePattern: 'vertical', moveRange: 50, moveSpeed: 2 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 8000 }],
  },
  {
    id: 139, name: "Precision Dive", mazeSize: 'large', balls: 1, difficulty: 8,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...B, { x: 180, y: P, width: 10, height: 180 }, { x: 300, y: 180, width: 10, height: 240 },
      { x: 420, y: 300, width: 10, height: 260 }],
    hazards: [
      { x: 130, y: 300, radius: 15, type: 'hole' }, { x: 240, y: 200, radius: 15, type: 'hole' },
      { x: 360, y: 400, radius: 15, type: 'hole' }, { x: 480, y: 200, radius: 15, type: 'hole' },
    ],
    whirlpools: [
      { x: 100, y: 450, radius: 70, strength: 0.8, pullStrength: 0.3, clockwise: true },
      { x: 240, y: 350, radius: 60, strength: 0.7, pullStrength: 0.25, clockwise: false },
      { x: 370, y: 200, radius: 60, strength: 0.7, pullStrength: 0.25, clockwise: true },
    ],
    jellyfish: [
      { id: 1, x: 480, y: 400, radius: 20, slowFactor: 0.25, slowDuration: 2000, movePattern: 'vertical', moveRange: 40, moveSpeed: 2.5 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 240, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 370, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 140, name: "BOSS: The Angler", mazeSize: 'large', balls: 2, difficulty: 8,
    category: 'whirlpool', world: 'sunken-temple',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 35 },
    walls: [...B, { x: 150, y: 200, width: 10, height: 100 }, { x: 440, y: 200, width: 10, height: 100 },
      { x: 200, y: 350, width: 200, height: 10 }],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' }, { x: 450, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 22, type: 'hole' },
    ],
    whirlpools: [
      { x: 300, y: 250, radius: 120, strength: 1.0, pullStrength: 0.4, clockwise: true },
      { x: 120, y: 450, radius: 60, strength: 0.8, pullStrength: 0.3, clockwise: false },
      { x: 480, y: 450, radius: 60, strength: 0.8, pullStrength: 0.3, clockwise: false },
    ],
    jellyfish: [
      { id: 1, x: 200, y: 150, radius: 22, slowFactor: 0.25, slowDuration: 2500, movePattern: 'horizontal', moveRange: 50, moveSpeed: 2 },
      { id: 2, x: 400, y: 150, radius: 22, slowFactor: 0.25, slowDuration: 2500, movePattern: 'horizontal', moveRange: 50, moveSpeed: 2.5 },
    ],
    waterCurrents: [{ x: 200, y: 410, width: 200, height: 50, direction: 'right', strength: 0.8 }],
    bubbleVents: [
      { x: 300, y: 520, radius: 30, strength: 2.8, burstInterval: 600, burstDuration: 300 },
      { x: 100, y: 520, radius: 25, strength: 2.0, burstInterval: 800, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 180, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 380, radius: 15, type: 'shield', duration: 10000 },
      { id: 2, x: 100, y: 300, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
];
