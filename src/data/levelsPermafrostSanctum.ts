import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const permafrostSanctumLevels: Level[] = [
  // === EASY (481-482) ===
  {
    id: 481, name: "Sanctum Entry", mazeSize: 'large', balls: 1, difficulty: 8, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    thawingIces: [{ id: 1, x: 200, y: 250, width: 80, height: 100, thawTime: 1500, respawnTime: 3000 }],
    snowdrifts: [{ x: 350, y: 250, width: 100, height: 100, friction: 0.4, slowFactor: 0.5 }],
    frozenGeysers: [{ id: 1, x: 300, y: 450, radius: 25, strength: 4, interval: 4000, duration: 1000, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 482, name: "Frozen Warmup", mazeSize: 'large', balls: 1, difficulty: 8, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 15, type: 'hole' }, { x: 400, y: 300, radius: 15, type: 'hole' }],
    iceBridges: [{ id: 1, x: 250, y: 280, width: 100, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2000 }],
    avalanches: [{ id: 1, x1: 50, y1: 400, x2: 550, y2: 400, radius: 18, speed: 180, interval: 4000, warningTime: 1200 }],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (483-488) ===
  {
    id: 483, name: "All Mechanics", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    thawingIces: [{ id: 1, x: 150, y: 150, width: 80, height: 80, thawTime: 1200, respawnTime: 2500 }],
    snowdrifts: [{ x: 350, y: 350, width: 100, height: 100, friction: 0.5, slowFactor: 0.4 }],
    frozenGeysers: [{ id: 1, x: 200, y: 400, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1500, freezeFactor: 0.3 }],
    iceBridges: [{ id: 1, x: 250, y: 250, width: 100, height: 25, crackTime: 600, breakTime: 400, respawnTime: 1500 }],
    icicleDrops: [{ id: 1, x: 400, y: 200, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 }],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 484, name: "Frost Trial", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    blizzard: { direction: 'right', strength: 2.5, interval: 5000, duration: 1500, warningTime: 800, visibilityRadius: 100 },
    avalanches: [{ id: 1, x1: 50, y1: 300, x2: 550, y2: 300, radius: 20, speed: 250, interval: 2500, warningTime: 700 }],
    frostRails: [{ id: 1, x1: 300, y1: 280, x2: 500, y2: 100, speed: 250, railWidth: 10 }],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 485, name: "Frozen Heart", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 25, type: 'hole' }],
    thawingIces: [
      { id: 1, x: 150, y: 250, width: 60, height: 100, thawTime: 1000, respawnTime: 2000 },
      { id: 2, x: 390, y: 250, width: 60, height: 100, thawTime: 1000, respawnTime: 2000 },
    ],
    frozenGeysers: [
      { id: 1, x: 250, y: 200, radius: 20, strength: 5, interval: 2500, duration: 700, warningTime: 500, freezeDuration: 1500, freezeFactor: 0.3 },
      { id: 2, x: 350, y: 400, radius: 20, strength: 5, interval: 2500, duration: 700, warningTime: 500, freezeDuration: 1500, freezeFactor: 0.3 },
    ],
    icicleDrops: [
      { id: 1, x: 300, y: 200, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 300, y: 400, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 486, name: "Ice Convergence", mazeSize: 'large', balls: 1, difficulty: 9, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 20, speed: 250, interval: 2500, warningTime: 600 },
      { id: 2, x1: 550, y1: 400, x2: 50, y2: 400, radius: 20, speed: 250, interval: 2500, warningTime: 600 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 270, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    snowdrifts: [{ x: 100, y: 350, width: 120, height: 100, friction: 0.5, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 487, name: "Permafrost Gauntlet", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 250, radius: 15, type: 'hole' }, { x: 400, y: 350, radius: 15, type: 'hole' }],
    blizzard: { direction: 'left', strength: 3, interval: 4000, duration: 1500, warningTime: 700, visibilityRadius: 80 },
    avalanches: [
      { id: 1, x1: 50, y1: 300, x2: 550, y2: 300, radius: 22, speed: 300, interval: 2000, warningTime: 500 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 200, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.2 },
    ],
    frostRails: [
      { id: 1, x1: 300, y1: 350, x2: 300, y2: 480, speed: 250, railWidth: 10 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 488, name: "Arctic Throne", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }, { x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }],
    blizzard: { direction: 'down', strength: 2.5, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 90 },
    icicleDrops: [
      { id: 1, x: 200, y: 400, radius: 25, interval: 2000, warningTime: 600, dropDuration: 400 },
      { id: 2, x: 400, y: 200, radius: 25, interval: 2000, warningTime: 600, dropDuration: 400 },
    ],
    thawingIces: [
      { id: 1, x: 350, y: 350, width: 80, height: 80, thawTime: 800, respawnTime: 1500 },
    ],
    frostRails: [
      { id: 1, x1: 100, y1: 100, x2: 250, y2: 200, speed: 250, railWidth: 10 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 450, radius: 15, type: 'shield', duration: 6000 }],
  },
  // === HARD (489-500) ===
  {
    id: 489, name: "Frost Crucible", mazeSize: 'large', balls: 1, difficulty: 10, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 25 },
    isDarkMode: true, spotlightRadius: 90,
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    blizzard: { direction: 'right', strength: 3, interval: 3500, duration: 1200, warningTime: 600, visibilityRadius: 80 },
    avalanches: [{ id: 1, x1: 50, y1: 300, x2: 550, y2: 300, radius: 22, speed: 280, interval: 2200, warningTime: 500 }],
    frozenGeysers: [{ id: 1, x: 300, y: 450, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 }],
    collectibles: [
      { id: 1, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 490, name: "Ice Wyrm", mazeSize: 'large', balls: 2, difficulty: 10, category: 'frostboss', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 22, speed: 300, interval: 2000, warningTime: 500 },
      { id: 2, x1: 550, y1: 400, x2: 50, y2: 400, radius: 22, speed: 300, interval: 2000, warningTime: 500 },
    ],
    frozenGeysers: [
      { id: 1, x: 200, y: 300, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.2 },
      { id: 2, x: 400, y: 300, radius: 25, strength: 6, interval: 2500, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.2 },
    ],
    blizzard: { direction: 'down', strength: 2.5, interval: 4000, duration: 1500, warningTime: 700, visibilityRadius: 90 },
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 500, radius: 15, type: 'shield', duration: 8000 }],
  },
  // Levels 491-499 simplified for brevity
  ...Array.from({ length: 9 }, (_, i) => ({
    id: 491 + i,
    name: `Sanctum ${i + 11}`,
    mazeSize: 'large' as const,
    balls: i >= 5 ? 2 : 1,
    difficulty: 10,
    category: 'frostboss' as const,
    world: 'frozen-fortress',
    startPosition: { x: 80 + (i % 3) * 220, y: 80 + Math.floor(i / 3) * 220 },
    goal: { x: 480, y: 480, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15 + i, type: 'hole' as const },
      { x: 400, y: 400, radius: 15 + i, type: 'hole' as const },
    ],
    avalanches: [
      { id: 1, x1: 50, y1: 150 + i * 20, x2: 550, y2: 150 + i * 20, radius: 20, speed: 250 + i * 15, interval: 2500 - i * 100, warningTime: 600 },
    ],
    icicleDrops: [
      { id: 1, x: 300, y: 300, radius: 25, interval: 2500 - i * 50, warningTime: 700, dropDuration: 500 },
    ],
    blizzard: i % 2 === 0 ? { direction: 'right' as const, strength: 2 + i * 0.2, interval: 4000, duration: 1500, warningTime: 700, visibilityRadius: 90 - i * 3 } : undefined,
    frozenGeysers: i >= 3 ? [
      { id: 1, x: 300, y: 200, radius: 25, strength: 5 + i * 0.3, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 1800, freezeFactor: 0.25 },
    ] : undefined,
    collectibles: [
      { id: 1, x: 80, y: 500, radius: 12, type: 'coin' as const, points: 100 },
      { id: 2, x: 520, y: 100, radius: 12, type: 'coin' as const, points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem' as const, points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 100, radius: 15, type: 'shield' as const, duration: 6000 }],
  })),
  // === LEVEL 500: THE FROST TITAN ===
  {
    id: 500, name: "The Frost Titan", mazeSize: 'large', balls: 2, difficulty: 10, category: 'frostboss', world: 'frozen-fortress',
    isDarkMode: true, spotlightRadius: 80,
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 20, type: 'hole' },
      { x: 400, y: 200, radius: 20, type: 'hole' },
      { x: 200, y: 400, radius: 20, type: 'hole' },
      { x: 400, y: 400, radius: 20, type: 'hole' },
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    blizzard: { direction: 'up', strength: 3.5, interval: 3000, duration: 1200, warningTime: 500, visibilityRadius: 70 },
    avalanches: [
      { id: 1, x1: 50, y1: 200, x2: 550, y2: 200, radius: 25, speed: 350, interval: 1500, warningTime: 400 },
      { id: 2, x1: 550, y1: 350, x2: 50, y2: 350, radius: 25, speed: 350, interval: 1500, warningTime: 400 },
    ],
    frozenGeysers: [
      { id: 1, x: 150, y: 300, radius: 25, strength: 7, interval: 2000, duration: 700, warningTime: 400, freezeDuration: 2500, freezeFactor: 0.15 },
      { id: 2, x: 450, y: 300, radius: 25, strength: 7, interval: 2000, duration: 700, warningTime: 400, freezeDuration: 2500, freezeFactor: 0.15 },
    ],
    icicleDrops: [
      { id: 1, x: 200, y: 300, radius: 25, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 2, x: 400, y: 300, radius: 25, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 3, x: 300, y: 450, radius: 25, interval: 1800, warningTime: 500, dropDuration: 400 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 150, width: 100, height: 25, crackTime: 400, breakTime: 250, respawnTime: 1000 },
    ],
    frostRails: [
      { id: 1, x1: 300, y1: 480, x2: 100, y2: 300, speed: 300, railWidth: 10 },
    ],
    thawingIces: [
      { id: 1, x: 350, y: 350, width: 60, height: 60, thawTime: 800, respawnTime: 1500 },
    ],
    snowdrifts: [{ x: 100, y: 150, width: 80, height: 80, friction: 0.6, slowFactor: 0.25 }],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 450, radius: 15, type: 'shield', duration: 10000 },
      { id: 2, x: 300, y: 200, radius: 15, type: 'speed', duration: 8000 },
    ],
  },
];
