import { Level } from '@/types/game';

const CANVAS_SIZE = 600;
const PADDING = 40;

const outerWalls = [
  { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
  { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
];

export const magmaFallsLevels: Level[] = [
  // =============================================
  // MAGMA FALLS (361-380) — "The Floor is Lava"
  // Introduces: Sinking Platforms, Lava Surf
  // Difficulty: 2 easy / 8 medium / 10 hard
  // =============================================

  // --- EASY (361-362) ---
  {
    id: 361, name: "Sinking Feeling", mazeSize: 'medium', balls: 1, difficulty: 6,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [...outerWalls, { x: 200, y: 200, width: 10, height: 200 }, { x: 390, y: 200, width: 10, height: 200 }],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 250, y: 280, width: 100, height: 40, sinkSpeed: 20, maxSinkDepth: 60, riseSpeed: 40 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 362, name: "Wave Rider", mazeSize: 'medium', balls: 1, difficulty: 6,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 500 }, goal: { x: 520, y: 100, radius: 30 },
    walls: [...outerWalls],
    hazards: [],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 400, x2: 520, y2: 400, speed: 3, waveWidth: 50, damageOnMiss: 20 },
    ],
    lavaPools: [{ x: 150, y: 420, width: 300, height: 140, damage: 10 }],
    collectibles: [
      { id: 1, x: 200, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 250, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // --- MEDIUM (363-370) ---
  {
    id: 363, name: "Step Lightly", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [...outerWalls],
    hazards: [{ x: 300, y: 300, radius: 25, type: 'hole' }],
    sinkingPlatforms: [
      { id: 1, x: 150, y: 180, width: 80, height: 40, sinkSpeed: 25, maxSinkDepth: 50, riseSpeed: 35 },
      { id: 2, x: 350, y: 350, width: 80, height: 40, sinkSpeed: 25, maxSinkDepth: 50, riseSpeed: 35 },
    ],
    lavaPools: [{ x: 200, y: 400, width: 120, height: 80, damage: 12 }],
    collectibles: [
      { id: 1, x: 190, y: 160, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 390, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 364, name: "Lava Cruise", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [...outerWalls, { x: 200, y: 250, width: 200, height: 10 }],
    hazards: [],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 200, x2: 520, y2: 200, speed: 3.5, waveWidth: 45, damageOnMiss: 20 },
      { id: 2, x1: 80, y1: 450, x2: 520, y2: 450, speed: 3, waveWidth: 50, damageOnMiss: 18 },
    ],
    lavaPools: [{ x: 100, y: 300, width: 400, height: 100, damage: 12 }],
    collectibles: [
      { id: 1, x: 300, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 430, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 365, name: "Platform Chain", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 500 }, goal: { x: 520, y: 80, radius: 28 },
    walls: [...outerWalls],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 120, y: 400, width: 80, height: 35, sinkSpeed: 30, maxSinkDepth: 55, riseSpeed: 40 },
      { id: 2, x: 260, y: 300, width: 80, height: 35, sinkSpeed: 30, maxSinkDepth: 55, riseSpeed: 40 },
      { id: 3, x: 400, y: 200, width: 80, height: 35, sinkSpeed: 30, maxSinkDepth: 55, riseSpeed: 40 },
    ],
    lavaPools: [
      { x: 80, y: 440, width: 440, height: 120, damage: 15 },
      { x: 150, y: 340, width: 300, height: 60, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 160, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 440, y: 180, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 366, name: "Surf & Sink", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [...outerWalls],
    hazards: [],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 250, x2: 520, y2: 250, speed: 3.5, waveWidth: 45, damageOnMiss: 22 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 200, y: 380, width: 90, height: 35, sinkSpeed: 28, maxSinkDepth: 50, riseSpeed: 38 },
      { id: 2, x: 380, y: 380, width: 90, height: 35, sinkSpeed: 28, maxSinkDepth: 50, riseSpeed: 38 },
    ],
    lavaPools: [{ x: 150, y: 420, width: 300, height: 100, damage: 14 }],
    collectibles: [
      { id: 1, x: 300, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 245, y: 360, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 425, y: 360, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 367, name: "Heated Descent", mazeSize: 'medium', balls: 1, difficulty: 7,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 28 },
    walls: [...outerWalls, { x: 200, y: 150, width: 10, height: 150 }, { x: 390, y: 150, width: 10, height: 150 }],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 240, y: 320, width: 120, height: 40, sinkSpeed: 22, maxSinkDepth: 60, riseSpeed: 35 },
    ],
    heatVents: [
      { x: 300, y: 450, radius: 35, strength: 5, interval: 4000, duration: 1500, warningTime: 1000 },
    ],
    lavaPools: [{ x: 220, y: 380, width: 160, height: 80, damage: 14 }],
    collectibles: [
      { id: 1, x: 150, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 368, name: "Magma Surf", mazeSize: 'medium', balls: 1, difficulty: 8,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 28 },
    walls: [...outerWalls],
    hazards: [{ x: 300, y: 150, radius: 20, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 350, x2: 400, y2: 350, speed: 4, waveWidth: 42, damageOnMiss: 22 },
      { id: 2, x1: 200, y1: 200, x2: 520, y2: 200, speed: 3.5, waveWidth: 42, damageOnMiss: 20 },
    ],
    magmaFlows: [{ x: 100, y: 380, width: 400, height: 80, direction: 'right', speed: 2, damageRate: 10 }],
    collectibles: [
      { id: 1, x: 200, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 369, name: "Sinking Bridge", mazeSize: 'medium', balls: 1, difficulty: 8,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 28 },
    walls: [...outerWalls],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 150, y: 280, width: 70, height: 40, sinkSpeed: 32, maxSinkDepth: 50, riseSpeed: 42 },
      { id: 2, x: 265, y: 280, width: 70, height: 40, sinkSpeed: 32, maxSinkDepth: 50, riseSpeed: 42 },
      { id: 3, x: 380, y: 280, width: 70, height: 40, sinkSpeed: 32, maxSinkDepth: 50, riseSpeed: 42 },
    ],
    lavaPools: [{ x: 130, y: 330, width: 340, height: 120, damage: 16 }],
    magmaFlows: [{ x: 130, y: 460, width: 340, height: 60, direction: 'left', speed: 2.5, damageRate: 10 }],
    collectibles: [
      { id: 1, x: 185, y: 260, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 260, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 415, y: 260, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 370, name: "Current Ride", mazeSize: 'medium', balls: 1, difficulty: 8,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 500 }, goal: { x: 520, y: 80, radius: 28 },
    walls: [...outerWalls, { x: 250, y: 250, width: 100, height: 10 }],
    hazards: [{ x: 150, y: 200, radius: 18, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 400, x2: 520, y2: 400, speed: 4, waveWidth: 40, damageOnMiss: 25 },
    ],
    coolingPlatforms: [
      { x: 350, y: 150, width: 80, height: 50, solidDuration: 3000, meltDuration: 2000, startOffset: 0 },
    ],
    lavaPools: [{ x: 200, y: 420, width: 200, height: 100, damage: 14 }],
    collectibles: [
      { id: 1, x: 300, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // --- HARD (371-380) ---
  {
    id: 371, name: "Rapid Descent", mazeSize: 'large', balls: 1, difficulty: 8,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...outerWalls, { x: 200, y: 200, width: 200, height: 10 }, { x: 300, y: 350, width: 200, height: 10 }],
    hazards: [{ x: 450, y: 150, radius: 20, type: 'hole' }],
    sinkingPlatforms: [
      { id: 1, x: 100, y: 300, width: 80, height: 35, sinkSpeed: 35, maxSinkDepth: 45, riseSpeed: 45 },
      { id: 2, x: 250, y: 400, width: 80, height: 35, sinkSpeed: 35, maxSinkDepth: 45, riseSpeed: 45 },
      { id: 3, x: 400, y: 450, width: 80, height: 35, sinkSpeed: 35, maxSinkDepth: 45, riseSpeed: 45 },
    ],
    lavaPools: [
      { x: 80, y: 340, width: 200, height: 100, damage: 16 },
      { x: 320, y: 440, width: 200, height: 80, damage: 16 },
    ],
    heatVents: [{ x: 200, y: 500, radius: 30, strength: 5, interval: 3500, duration: 1200, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 140, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 290, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 440, y: 430, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 372, name: "Lava Pipeline", mazeSize: 'large', balls: 1, difficulty: 8,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...outerWalls],
    hazards: [{ x: 300, y: 300, radius: 22, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 200, x2: 520, y2: 200, speed: 4.5, waveWidth: 38, damageOnMiss: 25 },
      { id: 2, x1: 80, y1: 400, x2: 520, y2: 400, speed: 4, waveWidth: 40, damageOnMiss: 25 },
    ],
    lavaPools: [{ x: 150, y: 230, width: 300, height: 140, damage: 15 }],
    lavaGeysers: [{ id: 1, x: 290, y: 100, width: 30, height: 180, interval: 5000, activeDuration: 2000, warningTime: 1500 }],
    collectibles: [
      { id: 1, x: 200, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 373, name: "Collapsing Path", mazeSize: 'large', balls: 1, difficulty: 9,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [...outerWalls],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 130, y: 275, width: 70, height: 50, sinkSpeed: 38, maxSinkDepth: 40, riseSpeed: 50 },
      { id: 2, x: 230, y: 275, width: 70, height: 50, sinkSpeed: 38, maxSinkDepth: 40, riseSpeed: 50 },
      { id: 3, x: 330, y: 275, width: 70, height: 50, sinkSpeed: 38, maxSinkDepth: 40, riseSpeed: 50 },
      { id: 4, x: 430, y: 275, width: 70, height: 50, sinkSpeed: 38, maxSinkDepth: 40, riseSpeed: 50 },
    ],
    lavaPools: [{ x: 110, y: 330, width: 400, height: 130, damage: 18 }],
    volcanicEruption: { interval: 7000, warningTime: 1800, debrisCount: 3, debrisRadius: 28, debrisDuration: 1800 },
    collectibles: [
      { id: 1, x: 165, y: 255, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 365, y: 255, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 465, y: 255, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 374, name: "Eruption Surf", mazeSize: 'large', balls: 1, difficulty: 9,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 500 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [...outerWalls, { x: 250, y: 300, width: 10, height: 150 }],
    hazards: [{ x: 400, y: 400, radius: 18, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 250, x2: 520, y2: 250, speed: 4.5, waveWidth: 38, damageOnMiss: 28 },
    ],
    volcanicEruption: { interval: 6500, warningTime: 1700, debrisCount: 4, debrisRadius: 25, debrisDuration: 2000 },
    magmaFlows: [{ x: 300, y: 100, width: 80, height: 150, direction: 'down', speed: 2.5, damageRate: 12 }],
    collectibles: [
      { id: 1, x: 200, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 375, name: "Geyser Bridge", mazeSize: 'large', balls: 1, difficulty: 9,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...outerWalls],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 150, y: 200, width: 80, height: 35, sinkSpeed: 40, maxSinkDepth: 40, riseSpeed: 50 },
      { id: 2, x: 300, y: 300, width: 80, height: 35, sinkSpeed: 40, maxSinkDepth: 40, riseSpeed: 50 },
      { id: 3, x: 430, y: 400, width: 80, height: 35, sinkSpeed: 40, maxSinkDepth: 40, riseSpeed: 50 },
    ],
    lavaGeysers: [
      { id: 1, x: 230, y: 150, width: 25, height: 150, interval: 4500, activeDuration: 1800, warningTime: 1200 },
      { id: 2, x: 390, y: 300, width: 25, height: 150, interval: 4500, activeDuration: 1800, warningTime: 1200 },
    ],
    lavaPools: [{ x: 120, y: 240, width: 360, height: 200, damage: 16 }],
    collectibles: [
      { id: 1, x: 190, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 340, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 470, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 376, name: "Double Surf", mazeSize: 'large', balls: 1, difficulty: 9,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [...outerWalls],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }, { x: 150, y: 150, radius: 18, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 180, x2: 520, y2: 180, speed: 5, waveWidth: 36, damageOnMiss: 28 },
      { id: 2, x1: 520, y1: 420, x2: 80, y2: 420, speed: 4.5, waveWidth: 38, damageOnMiss: 26 },
    ],
    lavaPools: [{ x: 150, y: 200, width: 300, height: 200, damage: 18 }],
    heatVents: [{ x: 300, y: 500, radius: 30, strength: 6, interval: 3500, duration: 1200, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 200, y: 160, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 377, name: "Tremor Zone", mazeSize: 'large', balls: 1, difficulty: 9,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...outerWalls, { x: 200, y: 150, width: 10, height: 200 }, { x: 400, y: 250, width: 10, height: 200 }],
    hazards: [{ x: 300, y: 450, radius: 20, type: 'hole' }],
    sinkingPlatforms: [
      { id: 1, x: 100, y: 350, width: 80, height: 35, sinkSpeed: 42, maxSinkDepth: 38, riseSpeed: 55 },
      { id: 2, x: 250, y: 250, width: 80, height: 35, sinkSpeed: 42, maxSinkDepth: 38, riseSpeed: 55 },
      { id: 3, x: 420, y: 150, width: 80, height: 35, sinkSpeed: 42, maxSinkDepth: 38, riseSpeed: 55 },
    ],
    coolingPlatforms: [
      { x: 300, y: 350, width: 80, height: 50, solidDuration: 2500, meltDuration: 2000, startOffset: 0 },
    ],
    lavaPools: [{ x: 100, y: 390, width: 300, height: 80, damage: 18 }],
    collectibles: [
      { id: 1, x: 140, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 290, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 460, y: 130, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 340, y: 330, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 378, name: "Infernal Ride", mazeSize: 'large', balls: 1, difficulty: 10,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [...outerWalls],
    hazards: [{ x: 200, y: 300, radius: 20, type: 'hole' }, { x: 400, y: 200, radius: 18, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 150, x2: 520, y2: 150, speed: 5, waveWidth: 35, damageOnMiss: 30 },
      { id: 2, x1: 80, y1: 350, x2: 520, y2: 350, speed: 5, waveWidth: 35, damageOnMiss: 30 },
    ],
    volcanicEruption: { interval: 6000, warningTime: 1500, debrisCount: 4, debrisRadius: 26, debrisDuration: 1800 },
    lavaGeysers: [{ id: 1, x: 290, y: 200, width: 25, height: 130, interval: 4000, activeDuration: 1500, warningTime: 1000 }],
    collectibles: [
      { id: 1, x: 300, y: 130, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 379, name: "Volcanic Marathon", mazeSize: 'large', balls: 1, difficulty: 10,
    category: 'sinking', world: 'volcanic-core',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [...outerWalls],
    hazards: [{ x: 150, y: 400, radius: 18, type: 'hole' }, { x: 450, y: 200, radius: 18, type: 'hole' }],
    sinkingPlatforms: [
      { id: 1, x: 130, y: 180, width: 70, height: 35, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
      { id: 2, x: 300, y: 280, width: 70, height: 35, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
      { id: 3, x: 430, y: 380, width: 70, height: 35, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
      { id: 4, x: 200, y: 450, width: 70, height: 35, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
    ],
    lavaPools: [
      { x: 100, y: 220, width: 400, height: 60, damage: 18 },
      { x: 100, y: 420, width: 400, height: 60, damage: 18 },
    ],
    volcanicEruption: { interval: 5500, warningTime: 1500, debrisCount: 5, debrisRadius: 24, debrisDuration: 1800 },
    collectibles: [
      { id: 1, x: 165, y: 160, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 335, y: 260, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 465, y: 360, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 235, y: 430, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 380, name: "Magma Falls", mazeSize: 'large', balls: 2, difficulty: 10,
    category: 'lavasurf', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [...outerWalls, { x: 250, y: 200, width: 10, height: 100 }, { x: 350, y: 300, width: 10, height: 100 }],
    hazards: [{ x: 300, y: 150, radius: 20, type: 'hole' }, { x: 300, y: 450, radius: 20, type: 'hole' }],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 200, x2: 520, y2: 200, speed: 5.5, waveWidth: 34, damageOnMiss: 30 },
      { id: 2, x1: 520, y1: 400, x2: 80, y2: 400, speed: 5, waveWidth: 36, damageOnMiss: 28 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 150, y: 280, width: 70, height: 40, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
      { id: 2, x: 400, y: 280, width: 70, height: 40, sinkSpeed: 45, maxSinkDepth: 35, riseSpeed: 55 },
    ],
    volcanicEruption: { interval: 5500, warningTime: 1500, debrisCount: 5, debrisRadius: 25, debrisDuration: 2000 },
    lavaPools: [{ x: 200, y: 230, width: 200, height: 140, damage: 20 }],
    collectibles: [
      { id: 1, x: 185, y: 260, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 435, y: 260, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
];
