import { Level } from '@/types/game';

// Canvas is 600x600, with padding
const CANVAS_SIZE = 600;
const PADDING = 40;

// =============================================
// SUNKEN TEMPLE WORLD - LEVELS 101-120
// Theme: Underwater ruins with water currents and bubble vents
// Core Skills: Flow reading, timing, momentum management
// =============================================

export const sunkenTempleLevels: Level[] = [
  // Level 101 - Introduction to Water Currents
  {
    id: 101,
    name: "Gentle Stream",
    mazeSize: 'small',
    balls: 1,
    difficulty: 1,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 100, y: 100 },
    goal: { x: 500, y: 500, radius: 40 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
    ],
    hazards: [],
    waterCurrents: [
      { x: 150, y: 200, width: 300, height: 80, direction: 'right', strength: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 240, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 240, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 240, radius: 12, type: 'coin', points: 100 },
    ],
  },

  // Level 102 - Cross Current
  {
    id: 102,
    name: "Cross Current",
    mazeSize: 'small',
    balls: 1,
    difficulty: 2,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
    ],
    hazards: [],
    waterCurrents: [
      { x: 100, y: 150, width: 400, height: 60, direction: 'right', strength: 0.7 },
      { x: 100, y: 350, width: 400, height: 60, direction: 'left', strength: 0.7 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 270, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 103 - First Bubble Vent
  {
    id: 103,
    name: "Rising Bubbles",
    mazeSize: 'small',
    balls: 1,
    difficulty: 2,
    category: 'bubble',
    world: 'sunken-temple',
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Platforms to guide ball upward
      { x: 180, y: 380, width: 240, height: 10 },
      { x: 180, y: 230, width: 240, height: 10 },
    ],
    hazards: [],
    bubbleVents: [
      { x: 300, y: 550, radius: 35, strength: 2.5, burstInterval: 500, burstDuration: 350 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 420, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 270, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 104 - Current Maze
  {
    id: 104,
    name: "Temple Channels",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 3,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 150, y: 150, width: 10, height: 150 },
      { x: 150, y: 350, width: 10, height: 150 },
      { x: 300, y: 100, width: 10, height: 150 },
      { x: 300, y: 350, width: 10, height: 200 },
      { x: 450, y: 150, width: 10, height: 150 },
      { x: 450, y: 350, width: 10, height: 150 },
    ],
    hazards: [],
    waterCurrents: [
      { x: 50, y: 250, width: 100, height: 100, direction: 'down', strength: 0.6 },
      { x: 160, y: 400, width: 140, height: 80, direction: 'right', strength: 0.8 },
      { x: 310, y: 200, width: 140, height: 80, direction: 'up', strength: 0.7 },
      { x: 460, y: 250, width: 100, height: 100, direction: 'down', strength: 0.6 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 220, y: 440, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 240, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 105 - Bubble Staircase
  {
    id: 105,
    name: "Bubble Staircase",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 3,
    category: 'bubble',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Staircase platforms
      { x: 50, y: 450, width: 120, height: 10 },
      { x: 170, y: 350, width: 120, height: 10 },
      { x: 290, y: 250, width: 120, height: 10 },
      { x: 410, y: 150, width: 150, height: 10 },
    ],
    hazards: [
      { x: 150, y: 520, radius: 18, type: 'hole' },
      { x: 270, y: 420, radius: 18, type: 'hole' },
      { x: 390, y: 320, radius: 18, type: 'hole' },
    ],
    bubbleVents: [
      { x: 110, y: 500, radius: 25, strength: 2.2, burstInterval: 500, burstDuration: 250 },
      { x: 230, y: 400, radius: 25, strength: 2.2, burstInterval: 600, burstDuration: 250 },
      { x: 350, y: 300, radius: 25, strength: 2.2, burstInterval: 700, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 110, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 230, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 480, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 106 - Current & Bubble Combo
  {
    id: 106,
    name: "Underwater Ruins",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 4,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Ruin walls
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
      { x: 200, y: 450, width: 210, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 150, width: 150, height: 300, direction: 'down', strength: 0.6 },
      { x: 410, y: 150, width: 150, height: 300, direction: 'down', strength: 0.6 },
    ],
    bubbleVents: [
      { x: 300, y: 500, radius: 30, strength: 2.5, burstInterval: 800, burstDuration: 400 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 500, y: 400, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 107 - Whirlpool
  {
    id: 107,
    name: "Temple Whirlpool",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 4,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
    ],
    hazards: [
      { x: 300, y: 300, radius: 30, type: 'hole' },
    ],
    waterCurrents: [
      // Circular currents around center hazard
      { x: 200, y: 150, width: 200, height: 50, direction: 'right', strength: 1.0 },
      { x: 400, y: 200, width: 50, height: 200, direction: 'down', strength: 1.0 },
      { x: 200, y: 400, width: 200, height: 50, direction: 'left', strength: 1.0 },
      { x: 150, y: 200, width: 50, height: 200, direction: 'up', strength: 1.0 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 108 - Bubble Chain
  {
    id: 108,
    name: "Bubble Chain",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'bubble',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Barriers requiring bubble navigation
      { x: 50, y: 400, width: 200, height: 10 },
      { x: 150, y: 280, width: 200, height: 10 },
      { x: 250, y: 160, width: 200, height: 10 },
      { x: 400, y: 280, width: 160, height: 10 },
    ],
    hazards: [
      { x: 180, y: 350, radius: 18, type: 'hole' },
      { x: 280, y: 230, radius: 18, type: 'hole' },
      { x: 380, y: 110, radius: 18, type: 'hole' },
    ],
    bubbleVents: [
      { x: 100, y: 500, radius: 28, strength: 2.3, burstInterval: 500, burstDuration: 200 },
      { x: 200, y: 380, radius: 28, strength: 2.3, burstInterval: 600, burstDuration: 200 },
      { x: 300, y: 260, radius: 28, strength: 2.3, burstInterval: 700, burstDuration: 200 },
      { x: 450, y: 260, radius: 28, strength: 2.3, burstInterval: 550, burstDuration: 200 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 440, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 109 - Submerged Corridor
  {
    id: 109,
    name: "Submerged Corridor",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 80, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Serpentine corridor
      { x: 150, y: 50, width: 10, height: 150 },
      { x: 150, y: 200, width: 350, height: 10 },
      { x: 150, y: 300, width: 350, height: 10 },
      { x: 490, y: 300, width: 10, height: 110 },
      { x: 150, y: 400, width: 350, height: 10 },
      { x: 150, y: 400, width: 10, height: 70 },
    ],
    hazards: [
      { x: 400, y: 150, radius: 18, type: 'hole' },
      { x: 250, y: 350, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 160, y: 60, width: 390, height: 60, direction: 'right', strength: 0.9 },
      { x: 160, y: 210, width: 330, height: 60, direction: 'left', strength: 0.9 },
      { x: 160, y: 310, width: 330, height: 60, direction: 'right', strength: 0.9 },
      { x: 160, y: 410, width: 330, height: 60, direction: 'left', strength: 0.9 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 90, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 520, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 350, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 110 - BOSS: Temple Guardian
  {
    id: 110,
    name: "Temple Guardian",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Temple structure
      { x: 150, y: 150, width: 10, height: 100 },
      { x: 440, y: 150, width: 10, height: 100 },
      { x: 150, y: 350, width: 10, height: 100 },
      { x: 440, y: 350, width: 10, height: 100 },
      { x: 200, y: 250, width: 200, height: 10 },
    ],
    hazards: [
      { x: 200, y: 200, radius: 20, type: 'hole' },
      { x: 400, y: 200, radius: 20, type: 'hole' },
      { x: 200, y: 400, radius: 20, type: 'hole' },
      { x: 400, y: 400, radius: 20, type: 'hole' },
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 150, width: 100, height: 300, direction: 'down', strength: 0.8 },
      { x: 450, y: 150, width: 100, height: 300, direction: 'down', strength: 0.8 },
      { x: 200, y: 400, width: 200, height: 60, direction: 'right', strength: 0.7 },
      { x: 200, y: 140, width: 200, height: 60, direction: 'left', strength: 0.7 },
    ],
    bubbleVents: [
      { x: 300, y: 480, radius: 35, strength: 2.8, burstInterval: 600, burstDuration: 300 },
      { x: 100, y: 480, radius: 25, strength: 2.0, burstInterval: 800, burstDuration: 250 },
      { x: 500, y: 480, radius: 25, strength: 2.0, burstInterval: 700, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 420, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 170, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 111 - Dual Currents
  {
    id: 111,
    name: "Dual Currents",
    mazeSize: 'medium',
    balls: 2,
    difficulty: 5,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 250, y: 250, width: 100, height: 10 },
      { x: 250, y: 340, width: 100, height: 10 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 120, y: 100, width: 360, height: 80, direction: 'right', strength: 0.8 },
      { x: 120, y: 420, width: 360, height: 80, direction: 'left', strength: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 140, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 140, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 200, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 400, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 112 - Ancient Aqueduct
  {
    id: 112,
    name: "Ancient Aqueduct",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Aqueduct channels
      { x: 50, y: 130, width: 450, height: 10 },
      { x: 100, y: 230, width: 450, height: 10 },
      { x: 50, y: 330, width: 450, height: 10 },
      { x: 100, y: 430, width: 450, height: 10 },
    ],
    hazards: [
      { x: 300, y: 180, radius: 18, type: 'hole' },
      { x: 200, y: 280, radius: 18, type: 'hole' },
      { x: 400, y: 380, radius: 18, type: 'hole' },
      { x: 300, y: 480, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 50, width: 450, height: 70, direction: 'right', strength: 1.0 },
      { x: 100, y: 140, width: 450, height: 80, direction: 'left', strength: 1.0 },
      { x: 50, y: 240, width: 450, height: 80, direction: 'right', strength: 1.0 },
      { x: 100, y: 340, width: 450, height: 80, direction: 'left', strength: 1.0 },
      { x: 50, y: 440, width: 450, height: 80, direction: 'right', strength: 1.0 },
    ],
    collectibles: [
      { id: 1, x: 520, y: 90, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 80, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 520, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 90, radius: 15, type: 'speed', duration: 10000 },
    ],
  },

  // Level 113 - Bubble Maze
  {
    id: 113,
    name: "Bubble Maze",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'bubble',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Maze requiring precise bubble navigation
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 280, width: 10, height: 130 },
      { x: 250, y: 200, width: 10, height: 90 },
      { x: 350, y: 280, width: 10, height: 130 },
      { x: 250, y: 200, width: 210, height: 10 },
      { x: 450, y: 100, width: 10, height: 110 },
    ],
    hazards: [
      { x: 200, y: 350, radius: 15, type: 'hole' },
      { x: 300, y: 250, radius: 15, type: 'hole' },
      { x: 400, y: 150, radius: 15, type: 'hole' },
    ],
    bubbleVents: [
      { x: 100, y: 500, radius: 30, strength: 2.5, burstInterval: 500, burstDuration: 250 },
      { x: 200, y: 380, radius: 28, strength: 2.3, burstInterval: 550, burstDuration: 220 },
      { x: 300, y: 270, radius: 28, strength: 2.3, burstInterval: 600, burstDuration: 220 },
      { x: 400, y: 190, radius: 28, strength: 2.3, burstInterval: 650, burstDuration: 220 },
      { x: 500, y: 90, radius: 25, strength: 1.8, burstInterval: 700, burstDuration: 200 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 440, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 400, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 350, radius: 15, type: 'shield', duration: 7000 },
    ],
  },

  // Level 114 - Pressure Chambers
  {
    id: 114,
    name: "Pressure Chambers",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Chamber dividers
      { x: 180, y: 50, width: 10, height: 200 },
      { x: 180, y: 350, width: 10, height: 200 },
      { x: 330, y: 50, width: 10, height: 200 },
      { x: 330, y: 350, width: 10, height: 200 },
      { x: 470, y: 50, width: 10, height: 200 },
      { x: 470, y: 350, width: 10, height: 200 },
    ],
    hazards: [
      { x: 110, y: 300, radius: 18, type: 'hole' },
      { x: 255, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 250, width: 130, height: 100, direction: 'down', strength: 1.2 },
      { x: 190, y: 250, width: 140, height: 100, direction: 'up', strength: 1.2 },
      { x: 340, y: 250, width: 130, height: 100, direction: 'down', strength: 1.2 },
      { x: 480, y: 250, width: 80, height: 100, direction: 'up', strength: 1.0 },
    ],
    bubbleVents: [
      { x: 110, y: 350, radius: 25, strength: 2.0, burstInterval: 600, burstDuration: 200 },
      { x: 400, y: 350, radius: 25, strength: 2.0, burstInterval: 700, burstDuration: 200 },
    ],
    collectibles: [
      { id: 1, x: 110, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 255, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 520, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 115 - Tidal Forces
  {
    id: 115,
    name: "Tidal Forces",
    mazeSize: 'large',
    balls: 2,
    difficulty: 7,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 390, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 50, width: 200, height: 100, direction: 'right', strength: 1.0 },
      { x: 350, y: 50, width: 200, height: 100, direction: 'left', strength: 1.0 },
      { x: 50, y: 450, width: 200, height: 100, direction: 'right', strength: 1.0 },
      { x: 350, y: 450, width: 200, height: 100, direction: 'left', strength: 1.0 },
      { x: 200, y: 220, width: 200, height: 160, direction: 'down', strength: 0.8 },
    ],
    bubbleVents: [
      { x: 300, y: 380, radius: 30, strength: 2.5, burstInterval: 600, burstDuration: 300 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 8000 },
      { id: 2, x: 520, y: 80, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 116 - Sunken Sanctum
  {
    id: 116,
    name: "Sunken Sanctum",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'bubble',
    world: 'sunken-temple',
    startPosition: { x: 300, y: 520 },
    goal: { x: 300, y: 80, radius: 35 },
    isDarkMode: true,
    spotlightRadius: 100,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 280, radius: 20, type: 'hole' },
      { x: 400, y: 280, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 22, type: 'hole' },
    ],
    bubbleVents: [
      { x: 150, y: 480, radius: 28, strength: 2.5, burstInterval: 600, burstDuration: 280 },
      { x: 300, y: 340, radius: 28, strength: 2.5, burstInterval: 650, burstDuration: 280 },
      { x: 450, y: 480, radius: 28, strength: 2.5, burstInterval: 700, burstDuration: 280 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 270, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 140, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 80, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 117 - Flooded Passages
  {
    id: 117,
    name: "Flooded Passages",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Complex passage system
      { x: 140, y: 50, width: 10, height: 150 },
      { x: 140, y: 280, width: 10, height: 130 },
      { x: 270, y: 130, width: 10, height: 200 },
      { x: 270, y: 400, width: 10, height: 160 },
      { x: 400, y: 50, width: 10, height: 200 },
      { x: 400, y: 330, width: 10, height: 130 },
      { x: 400, y: 330, width: 160, height: 10 },
    ],
    hazards: [
      { x: 200, y: 350, radius: 18, type: 'hole' },
      { x: 330, y: 250, radius: 18, type: 'hole' },
      { x: 460, y: 150, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 50, width: 90, height: 200, direction: 'down', strength: 0.9 },
      { x: 150, y: 200, width: 120, height: 80, direction: 'right', strength: 0.9 },
      { x: 280, y: 130, width: 120, height: 200, direction: 'down', strength: 0.9 },
      { x: 280, y: 400, width: 120, height: 100, direction: 'right', strength: 0.9 },
      { x: 410, y: 250, width: 150, height: 80, direction: 'right', strength: 0.9 },
      { x: 410, y: 400, width: 150, height: 160, direction: 'down', strength: 0.9 },
    ],
    bubbleVents: [
      { x: 80, y: 280, radius: 25, strength: 2.0, burstInterval: 550, burstDuration: 220 },
      { x: 520, y: 280, radius: 25, strength: 2.0, burstInterval: 600, burstDuration: 220 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 330, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 460, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },

  // Level 118 - Temple Depths
  {
    id: 118,
    name: "Temple Depths",
    mazeSize: 'large',
    balls: 2,
    difficulty: 8,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 40 },
    isDarkMode: true,
    spotlightRadius: 90,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Depth structure
      { x: 100, y: 200, width: 150, height: 10 },
      { x: 350, y: 200, width: 150, height: 10 },
      { x: 200, y: 350, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 280, radius: 20, type: 'hole' },
      { x: 450, y: 280, radius: 20, type: 'hole' },
      { x: 300, y: 430, radius: 22, type: 'hole' },
    ],
    waterCurrents: [
      { x: 50, y: 100, width: 200, height: 80, direction: 'right', strength: 1.0 },
      { x: 350, y: 100, width: 200, height: 80, direction: 'left', strength: 1.0 },
      { x: 100, y: 210, width: 150, height: 130, direction: 'down', strength: 0.8 },
      { x: 350, y: 210, width: 150, height: 130, direction: 'down', strength: 0.8 },
    ],
    bubbleVents: [
      { x: 300, y: 340, radius: 30, strength: 2.5, burstInterval: 700, burstDuration: 300 },
      { x: 100, y: 500, radius: 25, strength: 2.0, burstInterval: 600, burstDuration: 250 },
      { x: 500, y: 500, radius: 25, strength: 2.0, burstInterval: 650, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 140, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 140, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 280, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 150, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 119 - Abyssal Convergence
  {
    id: 119,
    name: "Abyssal Convergence",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'water',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Convergence pattern
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 390, width: 200, height: 10 },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 390, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 35, type: 'hole' },
      { x: 150, y: 150, radius: 18, type: 'hole' },
      { x: 450, y: 150, radius: 18, type: 'hole' },
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 450, radius: 18, type: 'hole' },
    ],
    waterCurrents: [
      // Converging currents toward center
      { x: 50, y: 50, width: 150, height: 100, direction: 'right', strength: 1.2 },
      { x: 50, y: 50, width: 100, height: 150, direction: 'down', strength: 1.2 },
      { x: 400, y: 50, width: 150, height: 100, direction: 'left', strength: 1.2 },
      { x: 450, y: 50, width: 100, height: 150, direction: 'down', strength: 1.2 },
      { x: 50, y: 450, width: 150, height: 100, direction: 'right', strength: 1.2 },
      { x: 50, y: 400, width: 100, height: 150, direction: 'up', strength: 1.2 },
      { x: 400, y: 450, width: 150, height: 100, direction: 'left', strength: 1.2 },
      { x: 450, y: 400, width: 100, height: 150, direction: 'up', strength: 1.2 },
    ],
    bubbleVents: [
      { x: 80, y: 520, radius: 30, strength: 2.5, burstInterval: 500, burstDuration: 250 },
      { x: 520, y: 80, radius: 30, strength: 2.5, burstInterval: 550, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 150, radius: 16, type: 'gem', points: 500 },
      { id: 6, x: 300, y: 450, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 80, radius: 15, type: 'shield', duration: 8000 },
      { id: 2, x: 520, y: 520, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 120 - FINAL BOSS: The Leviathan's Lair
  {
    id: 120,
    name: "The Leviathan's Lair",
    mazeSize: 'large',
    balls: 3,
    difficulty: 9,
    category: 'extreme',
    world: 'sunken-temple',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 45 },
    isDarkMode: true,
    spotlightRadius: 85,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Lair structure
      { x: 150, y: 100, width: 10, height: 150 },
      { x: 150, y: 350, width: 10, height: 150 },
      { x: 300, y: 180, width: 10, height: 120 },
      { x: 300, y: 300, width: 10, height: 120 },
      { x: 440, y: 100, width: 10, height: 150 },
      { x: 440, y: 350, width: 10, height: 150 },
    ],
    hazards: [
      { x: 230, y: 150, radius: 20, type: 'hole' },
      { x: 370, y: 150, radius: 20, type: 'hole' },
      { x: 230, y: 450, radius: 20, type: 'hole' },
      { x: 370, y: 450, radius: 20, type: 'hole' },
      // Orbiting hazards around the center
      { x: 300, y: 300, radius: 14, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 90, orbitSpeed: 0.002, orbitPhase: 0 },
      { x: 300, y: 300, radius: 14, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 90, orbitSpeed: 0.002, orbitPhase: Math.PI },
    ],
    waterCurrents: [
      // Chaotic currents
      { x: 50, y: 50, width: 100, height: 200, direction: 'down', strength: 1.0 },
      { x: 50, y: 350, width: 100, height: 200, direction: 'up', strength: 1.0 },
      { x: 160, y: 250, width: 130, height: 100, direction: 'right', strength: 0.9 },
      { x: 310, y: 250, width: 130, height: 100, direction: 'left', strength: 0.9 },
      { x: 450, y: 50, width: 100, height: 200, direction: 'down', strength: 1.0 },
      { x: 450, y: 350, width: 100, height: 200, direction: 'up', strength: 1.0 },
    ],
    bubbleVents: [
      { x: 80, y: 500, radius: 30, strength: 2.8, burstInterval: 500, burstDuration: 300 },
      { x: 520, y: 500, radius: 30, strength: 2.8, burstInterval: 550, burstDuration: 300 },
      { x: 300, y: 480, radius: 35, strength: 3.0, burstInterval: 450, burstDuration: 350 },
      { x: 80, y: 100, radius: 25, strength: 2.0, burstInterval: 600, burstDuration: 250 },
      { x: 520, y: 100, radius: 25, strength: 2.0, burstInterval: 650, burstDuration: 250 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 6, x: 300, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 230, y: 300, radius: 15, type: 'shield', duration: 12000 },
      { id: 2, x: 370, y: 300, radius: 15, type: 'speed', duration: 8000 },
      { id: 3, x: 300, y: 240, radius: 15, type: 'multiplier', duration: 15000 },
    ],
  },
];
