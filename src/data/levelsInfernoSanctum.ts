import { Level } from '@/types/game';

const CANVAS_SIZE = 600;
const PADDING = 40;

const outerWalls = [
  { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
  { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
];

export const infernoSanctumLevels: Level[] = [
  // =============================================
  // INFERNO SANCTUM (381-400) — "Master the Core"
  // 2 easy / 6 medium / 12 hard
  // Combines ALL Volcanic Core mechanics + World 1-3 callbacks
  // =============================================

  // Level 381 - Easy: Gentle review of all volcanic mechanics
  {
    id: 381,
    name: "Inferno Gates",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      ...outerWalls,
      { x: 200, y: 150, width: 10, height: 130 },
      { x: 200, y: 330, width: 10, height: 130 },
      { x: 380, y: 150, width: 10, height: 130 },
      { x: 380, y: 330, width: 10, height: 130 },
    ],
    hazards: [],
    lavaPools: [
      { x: 130, y: 450, width: 100, height: 60, damage: 10 },
    ],
    heatVents: [
      { x: 300, y: 500, radius: 25, strength: 8, interval: 4000, duration: 1500, warningTime: 1000 },
    ],
    magmaFlows: [
      { x: 220, y: 260, width: 150, height: 80, direction: 'right', speed: 1.5, damageRate: 5 },
    ],
    coolingPlatforms: [
      { x: 390, y: 270, width: 80, height: 60, solidDuration: 3000, meltDuration: 2000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 382 - Easy: Sinking + eruption intro combo
  {
    id: 382,
    name: "Warm Welcome",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls,
      { x: 200, y: 100, width: 10, height: 200 },
      { x: 350, y: 300, width: 10, height: 200 },
    ],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 220, y: 200, width: 120, height: 40, sinkSpeed: 15, maxSinkDepth: 50, riseSpeed: 30 },
      { id: 2, x: 360, y: 400, width: 120, height: 40, sinkSpeed: 15, maxSinkDepth: 50, riseSpeed: 30 },
    ],
    volcanicEruption: {
      interval: 10000,
      warningTime: 2500,
      debrisCount: 2,
      debrisRadius: 25,
      debrisDuration: 2000,
    },
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 383 - Medium: Lava surf + geysers
  {
    id: 383,
    name: "Molten Ride",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 500 },
    goal: { x: 520, y: 80, radius: 28 },
    walls: [
      ...outerWalls,
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 450, x2: 520, y2: 450, speed: 3, waveWidth: 50, damageOnMiss: 15 },
    ],
    lavaGeysers: [
      { id: 1, x: 200, y: 100, width: 30, height: 180, interval: 5000, activeDuration: 2000, warningTime: 1500 },
      { id: 2, x: 400, y: 100, width: 30, height: 180, interval: 5000, activeDuration: 2000, warningTime: 1500 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 384 - Medium: Cooling platforms + magma flow maze
  {
    id: 384,
    name: "Obsidian Crossing",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      ...outerWalls,
      { x: 150, y: 150, width: 10, height: 200 },
      { x: 300, y: 250, width: 10, height: 200 },
      { x: 450, y: 150, width: 10, height: 200 },
    ],
    hazards: [],
    magmaFlows: [
      { x: 160, y: 200, width: 130, height: 60, direction: 'right', speed: 2, damageRate: 8 },
      { x: 310, y: 350, width: 130, height: 60, direction: 'left', speed: 2, damageRate: 8 },
    ],
    coolingPlatforms: [
      { x: 160, y: 300, width: 80, height: 50, solidDuration: 2500, meltDuration: 2000 },
      { x: 310, y: 200, width: 80, height: 50, solidDuration: 2500, meltDuration: 2000, startOffset: 1200 },
      { x: 460, y: 350, width: 80, height: 50, solidDuration: 2500, meltDuration: 2000, startOffset: 2400 },
    ],
    collectibles: [
      { id: 1, x: 230, y: 120, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 380, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 385 - Medium: Heat vents + sinking platforms + portals (World 1 callback)
  {
    id: 385,
    name: "Portal Inferno",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 28 },
    walls: [
      ...outerWalls,
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 80, y: 300, radius: 18, linkedPortalId: 2, color: '#ff6600' },
      { id: 2, x: 520, y: 300, radius: 18, linkedPortalId: 1, color: '#ff6600' },
    ],
    heatVents: [
      { x: 300, y: 500, radius: 25, strength: 10, interval: 3500, duration: 1200, warningTime: 1000 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 150, y: 150, width: 100, height: 40, sinkSpeed: 20, maxSinkDepth: 50, riseSpeed: 35 },
      { id: 2, x: 350, y: 350, width: 100, height: 40, sinkSpeed: 20, maxSinkDepth: 50, riseSpeed: 35 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 386 - Medium: Eruption + conveyor (World 1 callback) + lava pools
  {
    id: 386,
    name: "Conveyor Furnace",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      ...outerWalls,
      { x: 200, y: 100, width: 10, height: 150 },
      { x: 380, y: 350, width: 10, height: 150 },
    ],
    hazards: [],
    conveyorZones: [
      { x: 100, y: 300, width: 400, height: 60, direction: 'right', speed: 3 },
    ],
    lavaPools: [
      { x: 100, y: 370, width: 400, height: 40, damage: 12 },
    ],
    volcanicEruption: {
      interval: 7000,
      warningTime: 2000,
      debrisCount: 4,
      debrisRadius: 28,
      debrisDuration: 2000,
    },
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 387 - Medium: Geysers + cloud platforms (World 3 callback)
  {
    id: 387,
    name: "Sky and Fire",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 28 },
    walls: [
      ...outerWalls,
    ],
    hazards: [],
    lavaGeysers: [
      { id: 1, x: 200, y: 100, width: 30, height: 200, interval: 4500, activeDuration: 2000, warningTime: 1200 },
      { id: 2, x: 350, y: 100, width: 30, height: 200, interval: 4500, activeDuration: 2000, warningTime: 1200 },
    ],
    cloudPlatforms: [
      { x: 240, y: 280, width: 100, height: 40, onDuration: 2500, offDuration: 1500 },
      { x: 390, y: 280, width: 100, height: 40, onDuration: 2500, offDuration: 1500, startOffset: 1200 },
    ],
    lavaPools: [
      { x: 150, y: 400, width: 300, height: 50, damage: 10 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 388 - Medium: Whirlpool (World 2 callback) + magma flow
  {
    id: 388,
    name: "Vortex Forge",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      ...outerWalls,
      { x: 250, y: 250, width: 100, height: 10 },
      { x: 250, y: 340, width: 100, height: 10 },
    ],
    hazards: [],
    whirlpools: [
      { x: 300, y: 300, radius: 60, strength: 1.2, pullStrength: 0.5, clockwise: true },
    ],
    magmaFlows: [
      { x: 100, y: 200, width: 150, height: 60, direction: 'down', speed: 2.5, damageRate: 8 },
      { x: 350, y: 350, width: 150, height: 60, direction: 'up', speed: 2.5, damageRate: 8 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 389 - Hard: Pre-boss gauntlet — all volcanic + gravity zones
  {
    id: 389,
    name: "Crucible Run",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    gravityZones: [
      { x: 100, y: 360, width: 200, height: 100, direction: 'right', strength: 1.5 },
    ],
    lavaPools: [
      { x: 350, y: 420, width: 120, height: 50, damage: 15 },
    ],
    lavaGeysers: [
      { id: 1, x: 250, y: 100, width: 25, height: 180, interval: 4000, activeDuration: 1800, warningTime: 1200 },
    ],
    heatVents: [
      { x: 400, y: 500, radius: 25, strength: 12, interval: 3000, duration: 1000, warningTime: 800 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 100, y: 250, width: 90, height: 35, sinkSpeed: 25, maxSinkDepth: 55, riseSpeed: 40 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 500, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 390 - BOSS: Magma Wyrm
  {
    id: 390,
    name: "Magma Wyrm",
    mazeSize: 'large',
    balls: 2,
    difficulty: 9,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 150, y: 150, width: 10, height: 100 },
      { x: 440, y: 150, width: 10, height: 100 },
      { x: 200, y: 350, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 400, radius: 20, type: 'hole' },
      { x: 450, y: 400, radius: 20, type: 'hole' },
    ],
    lavaPools: [
      { x: 80, y: 300, width: 120, height: 80, damage: 15 },
      { x: 400, y: 300, width: 120, height: 80, damage: 15 },
    ],
    magmaFlows: [
      { x: 210, y: 250, width: 180, height: 50, direction: 'right', speed: 3, damageRate: 10 },
    ],
    lavaGeysers: [
      { id: 1, x: 200, y: 80, width: 30, height: 250, interval: 4000, activeDuration: 2000, warningTime: 1200 },
      { id: 2, x: 370, y: 80, width: 30, height: 250, interval: 4000, activeDuration: 2000, warningTime: 1200 },
    ],
    volcanicEruption: {
      interval: 6000,
      warningTime: 1800,
      debrisCount: 5,
      debrisRadius: 30,
      debrisDuration: 2500,
    },
    heatVents: [
      { x: 300, y: 480, radius: 30, strength: 14, interval: 3500, duration: 1200, warningTime: 1000 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 240, y: 150, width: 120, height: 35, sinkSpeed: 22, maxSinkDepth: 60, riseSpeed: 35 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 450, radius: 16, type: 'gem', points: 500 },
    ],
  },

  // Level 391 - Hard: Post-boss escalation — eruptions + ziplines (World 3)
  {
    id: 391,
    name: "Ash Zipway",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 25 },
    walls: [
      ...outerWalls,
    ],
    hazards: [],
    ziplines: [
      { id: 1, x1: 100, y1: 480, x2: 300, y2: 280, speed: 4, oneWay: true },
      { id: 2, x1: 320, y1: 260, x2: 500, y2: 100, speed: 4, oneWay: true },
    ],
    volcanicEruption: {
      interval: 5500,
      warningTime: 1800,
      debrisCount: 5,
      debrisRadius: 28,
      debrisDuration: 2000,
    },
    lavaPools: [
      { x: 150, y: 350, width: 300, height: 60, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 180, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 392 - Hard: Lava surf + crumbling tiles (World 3)
  {
    id: 392,
    name: "Crumble & Surf",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      ...outerWalls,
    ],
    hazards: [],
    crumblingTiles: [
      { id: 1, x: 150, y: 150, width: 100, height: 40, crumbleDelay: 800, respawnTime: 5000 },
      { id: 2, x: 350, y: 250, width: 100, height: 40, crumbleDelay: 800, respawnTime: 5000 },
    ],
    lavaSurfs: [
      { id: 1, x1: 80, y1: 400, x2: 520, y2: 400, speed: 3.5, waveWidth: 45, damageOnMiss: 18 },
    ],
    lavaPools: [
      { x: 100, y: 450, width: 400, height: 50, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 393 - Hard: Magnetic zones + lava geysers
  {
    id: 393,
    name: "Magnetic Meltdown",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 250, y: 200, width: 10, height: 80 },
      { x: 340, y: 320, width: 10, height: 80 },
    ],
    hazards: [],
    magneticZones: [
      { x: 200, y: 300, radius: 50, type: 'attract', strength: 2 },
      { x: 400, y: 300, radius: 50, type: 'repel', strength: 2 },
    ],
    lavaGeysers: [
      { id: 1, x: 280, y: 100, width: 25, height: 200, interval: 3500, activeDuration: 1800, warningTime: 1000 },
      { id: 2, x: 280, y: 350, width: 25, height: 200, interval: 3500, activeDuration: 1800, warningTime: 1000 },
    ],
    lavaPools: [
      { x: 130, y: 400, width: 100, height: 50, damage: 12 },
      { x: 370, y: 150, width: 100, height: 50, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 394 - Hard: Dark mode + lava glow + eruption
  {
    id: 394,
    name: "Blind Inferno",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'volcanoboss',
    world: 'volcanic',
    isDarkMode: true,
    spotlightRadius: 90,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    lavaPools: [
      { x: 80, y: 250, width: 100, height: 60, damage: 15 },
      { x: 420, y: 350, width: 100, height: 60, damage: 15 },
    ],
    volcanicEruption: {
      interval: 6000,
      warningTime: 1500,
      debrisCount: 5,
      debrisRadius: 30,
      debrisDuration: 2500,
    },
    heatVents: [
      { x: 300, y: 500, radius: 25, strength: 10, interval: 3000, duration: 1000, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 395 - Hard: Multi-ball + sinking + cooling
  {
    id: 395,
    name: "Double Trouble Lava",
    mazeSize: 'large',
    balls: 2,
    difficulty: 9,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 150, y: 250, width: 10, height: 100 },
      { x: 440, y: 250, width: 10, height: 100 },
    ],
    hazards: [],
    sinkingPlatforms: [
      { id: 1, x: 100, y: 350, width: 100, height: 35, sinkSpeed: 25, maxSinkDepth: 55, riseSpeed: 40 },
      { id: 2, x: 250, y: 250, width: 100, height: 35, sinkSpeed: 25, maxSinkDepth: 55, riseSpeed: 40 },
      { id: 3, x: 400, y: 350, width: 100, height: 35, sinkSpeed: 25, maxSinkDepth: 55, riseSpeed: 40 },
    ],
    coolingPlatforms: [
      { x: 180, y: 150, width: 80, height: 50, solidDuration: 2000, meltDuration: 2000 },
      { x: 340, y: 150, width: 80, height: 50, solidDuration: 2000, meltDuration: 2000, startOffset: 1000 },
    ],
    lavaPools: [
      { x: 100, y: 420, width: 400, height: 40, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 396 - Hard: Laser gates (World 1) + magma flow + eruption
  {
    id: 396,
    name: "Laser Forge",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      ...outerWalls,
      { x: 200, y: 100, width: 10, height: 150 },
      { x: 380, y: 350, width: 10, height: 150 },
    ],
    hazards: [],
    laserGates: [
      { id: 1, x1: 250, y1: 200, x2: 350, y2: 200, onDuration: 2000, offDuration: 1500, color: '#ff4400' },
      { id: 2, x1: 250, y1: 400, x2: 350, y2: 400, onDuration: 2000, offDuration: 1500, startOffset: 1000, color: '#ff4400' },
    ],
    magmaFlows: [
      { x: 100, y: 300, width: 400, height: 60, direction: 'right', speed: 2.5, damageRate: 10 },
    ],
    volcanicEruption: {
      interval: 7000,
      warningTime: 2000,
      debrisCount: 4,
      debrisRadius: 25,
      debrisDuration: 2000,
    },
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 397 - Hard: Wind gusts (World 3) + lava surf + geysers
  {
    id: 397,
    name: "Storm of Fire",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'volcanoboss',
    world: 'volcanic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      ...outerWalls,
    ],
    hazards: [],
    windGusts: [
      { direction: 'down', strength: 3, interval: 5000, duration: 2000, warningTime: 1500 },
    ],
    lavaSurfs: [
      { id: 1, x1: 100, y1: 250, x2: 500, y2: 250, speed: 3, waveWidth: 45, damageOnMiss: 15 },
    ],
    lavaGeysers: [
      { id: 1, x: 200, y: 100, width: 25, height: 200, interval: 4000, activeDuration: 1800, warningTime: 1200 },
      { id: 2, x: 350, y: 100, width: 25, height: 200, interval: 4000, activeDuration: 1800, warningTime: 1200 },
    ],
    lavaPools: [
      { x: 100, y: 350, width: 400, height: 50, damage: 12 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 398 - Hard: Tidal wave (World 2) + all volcanic — chaos level
  {
    id: 398,
    name: "Tidal Inferno",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'extreme',
    world: 'volcanic',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 22 },
    walls: [
      ...outerWalls,
      { x: 200, y: 250, width: 10, height: 100 },
      { x: 380, y: 250, width: 10, height: 100 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    tidalWaves: [
      { direction: 'right', strength: 4, interval: 6000, duration: 2500, warningTime: 2000 },
    ],
    lavaPools: [
      { x: 100, y: 150, width: 120, height: 60, damage: 15 },
      { x: 380, y: 400, width: 120, height: 60, damage: 15 },
    ],
    magmaFlows: [
      { x: 220, y: 200, width: 160, height: 50, direction: 'down', speed: 2.5, damageRate: 10 },
    ],
    lavaGeysers: [
      { id: 1, x: 150, y: 80, width: 25, height: 150, interval: 3500, activeDuration: 1500, warningTime: 1000 },
    ],
    volcanicEruption: {
      interval: 6000,
      warningTime: 1500,
      debrisCount: 5,
      debrisRadius: 28,
      debrisDuration: 2000,
    },
    collectibles: [
      { id: 1, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 80, radius: 16, type: 'gem', points: 500 },
    ],
  },

  // Level 399 - Hard: Dark mode + multi-ball + full volcanic arsenal
  {
    id: 399,
    name: "Inferno's Edge",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    world: 'volcanic',
    isDarkMode: true,
    spotlightRadius: 80,
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 22 },
    walls: [
      ...outerWalls,
      { x: 150, y: 200, width: 10, height: 100 },
      { x: 440, y: 200, width: 10, height: 100 },
      { x: 200, y: 350, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 450, radius: 18, type: 'hole' },
    ],
    lavaPools: [
      { x: 80, y: 300, width: 100, height: 60, damage: 15 },
      { x: 420, y: 300, width: 100, height: 60, damage: 15 },
    ],
    magmaFlows: [
      { x: 200, y: 250, width: 200, height: 50, direction: 'right', speed: 3, damageRate: 12 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 200, y: 150, width: 80, height: 30, sinkSpeed: 30, maxSinkDepth: 50, riseSpeed: 40 },
      { id: 2, x: 320, y: 150, width: 80, height: 30, sinkSpeed: 30, maxSinkDepth: 50, riseSpeed: 40 },
    ],
    volcanicEruption: {
      interval: 5000,
      warningTime: 1500,
      debrisCount: 6,
      debrisRadius: 28,
      debrisDuration: 2000,
    },
    heatVents: [
      { x: 300, y: 480, radius: 28, strength: 14, interval: 3000, duration: 1000, warningTime: 800 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 250, radius: 16, type: 'gem', points: 500 },
    ],
  },

  // Level 400 - FINAL BOSS: The Inferno
  {
    id: 400,
    name: "The Inferno",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'extreme',
    world: 'volcanic',
    isDarkMode: true,
    spotlightRadius: 75,
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 20 },
    walls: [
      ...outerWalls,
      { x: 120, y: 150, width: 10, height: 120 },
      { x: 470, y: 150, width: 10, height: 120 },
      { x: 120, y: 350, width: 10, height: 120 },
      { x: 470, y: 350, width: 10, height: 120 },
      { x: 220, y: 250, width: 160, height: 10 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
    ],
    lavaPools: [
      { x: 80, y: 200, width: 80, height: 50, damage: 18 },
      { x: 440, y: 200, width: 80, height: 50, damage: 18 },
      { x: 200, y: 420, width: 200, height: 40, damage: 18 },
    ],
    magmaFlows: [
      { x: 160, y: 150, width: 280, height: 50, direction: 'right', speed: 3.5, damageRate: 12 },
      { x: 160, y: 350, width: 280, height: 50, direction: 'left', speed: 3.5, damageRate: 12 },
    ],
    lavaGeysers: [
      { id: 1, x: 200, y: 80, width: 30, height: 300, interval: 3500, activeDuration: 2000, warningTime: 1200 },
      { id: 2, x: 370, y: 80, width: 30, height: 300, interval: 3500, activeDuration: 2000, warningTime: 1200 },
    ],
    heatVents: [
      { x: 150, y: 500, radius: 25, strength: 14, interval: 2500, duration: 1000, warningTime: 800 },
      { x: 450, y: 500, radius: 25, strength: 14, interval: 2500, duration: 1000, warningTime: 800 },
    ],
    sinkingPlatforms: [
      { id: 1, x: 240, y: 200, width: 120, height: 30, sinkSpeed: 30, maxSinkDepth: 50, riseSpeed: 35 },
    ],
    coolingPlatforms: [
      { x: 240, y: 300, width: 120, height: 40, solidDuration: 1800, meltDuration: 1800 },
    ],
    volcanicEruption: {
      interval: 4500,
      warningTime: 1200,
      debrisCount: 7,
      debrisRadius: 32,
      debrisDuration: 2500,
    },
    lavaSurfs: [
      { id: 1, x1: 80, y1: 480, x2: 520, y2: 480, speed: 4, waveWidth: 40, damageOnMiss: 20 },
    ],
    portals: [
      { id: 1, x: 80, y: 150, radius: 18, linkedPortalId: 2, color: '#ff3300' },
      { id: 2, x: 520, y: 450, radius: 18, linkedPortalId: 1, color: '#ff3300' },
    ],
    collectibles: [
      { id: 1, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 500, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 480, radius: 15, type: 'shield', duration: 5000 },
    ],
  },
];
