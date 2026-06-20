import { Level } from '@/types/game';

// Canvas is 600x600, with padding
const CANVAS_SIZE = 600;
const PADDING = 40;

// Outer wall helper
const outerWalls = () => [
  { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
  { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
  { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
];

export const expansionLevels: Level[] = [
  // =============================================
  // CONVEYOR ZONE LEVELS (51-55)
  // =============================================
  
  // Level 51 - Conveyor Introduction
  {
    id: 51,
    name: "Flow State",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'conveyor',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [...outerWalls()],
    hazards: [
      { x: 300, y: 150, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
    ],
    conveyorZones: [
      { x: 150, y: 250, width: 300, height: 100, direction: 'right', speed: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 52 - Conveyor Maze
  {
    id: 52,
    name: "Treadmill",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    category: 'conveyor',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
    ],
    hazards: [],
    conveyorZones: [
      { x: 50, y: 160, width: 500, height: 130, direction: 'left', speed: 0.6 },
      { x: 50, y: 310, width: 500, height: 130, direction: 'right', speed: 0.6 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 230, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 520, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 53 - Conveyor Cross
  {
    id: 53,
    name: "Crossroads",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'conveyor',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
      { x: 200, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 400, radius: 18, type: 'hole' },
    ],
    conveyorZones: [
      { x: 250, y: 50, width: 100, height: 200, direction: 'down', speed: 1 },
      { x: 250, y: 350, width: 100, height: 200, direction: 'up', speed: 1 },
      { x: 50, y: 250, width: 200, height: 100, direction: 'right', speed: 1 },
      { x: 350, y: 250, width: 200, height: 100, direction: 'left', speed: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 54 - Conveyor Rapids
  {
    id: 54,
    name: "Rapids",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    category: 'conveyor',
    startPosition: { x: 80, y: 80 },
    goal: { x: 80, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 50, width: 10, height: 150 },
      { x: 150, y: 300, width: 10, height: 250 },
      { x: 300, y: 50, width: 10, height: 250 },
      { x: 300, y: 400, width: 10, height: 150 },
      { x: 450, y: 50, width: 10, height: 150 },
      { x: 450, y: 300, width: 10, height: 250 },
    ],
    hazards: [
      { x: 225, y: 400, radius: 15, type: 'hole' },
      { x: 375, y: 200, radius: 15, type: 'hole' },
    ],
    conveyorZones: [
      { x: 50, y: 50, width: 100, height: 200, direction: 'down', speed: 1.2 },
      { x: 160, y: 200, width: 140, height: 100, direction: 'right', speed: 1.2 },
      { x: 160, y: 300, width: 140, height: 100, direction: 'up', speed: 1.2 },
      { x: 310, y: 300, width: 140, height: 100, direction: 'down', speed: 1.2 },
      { x: 310, y: 400, width: 140, height: 100, direction: 'left', speed: 1.2 },
      { x: 460, y: 200, width: 100, height: 300, direction: 'down', speed: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 230, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 510, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 55 - Conveyor Puzzle
  {
    id: 55,
    name: "Belt Puzzle",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'conveyor',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 150, width: 200, height: 10 },
      { x: 200, y: 250, width: 200, height: 10 },
      { x: 200, y: 350, width: 200, height: 10 },
      { x: 200, y: 450, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 200, radius: 18, type: 'hole' },
      { x: 450, y: 200, radius: 18, type: 'hole' },
      { x: 150, y: 400, radius: 18, type: 'hole' },
      { x: 450, y: 400, radius: 18, type: 'hole' },
    ],
    conveyorZones: [
      { x: 50, y: 160, width: 150, height: 90, direction: 'right', speed: 1.5 },
      { x: 400, y: 160, width: 150, height: 90, direction: 'left', speed: 1.5 },
      { x: 50, y: 260, width: 150, height: 90, direction: 'right', speed: 1.5 },
      { x: 400, y: 260, width: 150, height: 90, direction: 'left', speed: 1.5 },
      { x: 50, y: 360, width: 150, height: 90, direction: 'right', speed: 1.5 },
      { x: 400, y: 360, width: 150, height: 90, direction: 'left', speed: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 200, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // =============================================
  // LASER GATE LEVELS (56-60)
  // =============================================

  // Level 56 - Laser Introduction
  {
    id: 56,
    name: "Laser Dance",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'laser',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [...outerWalls()],
    hazards: [],
    laserGates: [
      { id: 1, x1: 200, y1: 50, x2: 200, y2: 250, onDuration: 2000, offDuration: 2000 },
      { id: 2, x1: 200, y1: 350, x2: 200, y2: 550, onDuration: 2000, offDuration: 2000, startOffset: 2000 },
      { id: 3, x1: 400, y1: 50, x2: 400, y2: 250, onDuration: 2000, offDuration: 2000, startOffset: 2000 },
      { id: 4, x1: 400, y1: 350, x2: 400, y2: 550, onDuration: 2000, offDuration: 2000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 150, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 57 - Laser Grid
  {
    id: 57,
    name: "Grid Lock",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'laser',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [],
    laserGates: [
      { id: 1, x1: 150, y1: 150, x2: 450, y2: 150, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 150, y1: 300, x2: 450, y2: 300, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 3, x1: 150, y1: 450, x2: 450, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 1500 },
      { id: 4, x1: 150, y1: 150, x2: 150, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 5, x1: 300, y1: 150, x2: 300, y2: 450, onDuration: 1500, offDuration: 1500 },
      { id: 6, x1: 450, y1: 150, x2: 450, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 225, y: 225, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 375, y: 225, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 225, y: 375, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 375, y: 375, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 58 - Laser Corridor
  {
    id: 58,
    name: "Beam Run",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    category: 'laser',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: PADDING, y: 200, width: 520, height: 10 },
      { x: PADDING, y: 400, width: 520, height: 10 },
    ],
    hazards: [],
    laserGates: [
      { id: 1, x1: 150, y1: 210, x2: 150, y2: 400, onDuration: 1000, offDuration: 2000 },
      { id: 2, x1: 250, y1: 210, x2: 250, y2: 400, onDuration: 1000, offDuration: 2000, startOffset: 500 },
      { id: 3, x1: 350, y1: 210, x2: 350, y2: 400, onDuration: 1000, offDuration: 2000, startOffset: 1000 },
      { id: 4, x1: 450, y1: 210, x2: 450, y2: 400, onDuration: 1000, offDuration: 2000, startOffset: 1500 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 300, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 59 - Laser Diagonal
  {
    id: 59,
    name: "Cross Fire",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'laser',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 150, radius: 18, type: 'hole' },
    ],
    laserGates: [
      { id: 1, x1: 100, y1: 200, x2: 300, y2: 100, onDuration: 1800, offDuration: 1800 },
      { id: 2, x1: 300, y1: 100, x2: 500, y2: 200, onDuration: 1800, offDuration: 1800, startOffset: 900 },
      { id: 3, x1: 100, y1: 400, x2: 300, y2: 500, onDuration: 1800, offDuration: 1800, startOffset: 900 },
      { id: 4, x1: 300, y1: 500, x2: 500, y2: 400, onDuration: 1800, offDuration: 1800 },
      { id: 5, x1: 200, y1: 250, x2: 400, y2: 350, onDuration: 2000, offDuration: 1000, startOffset: 500 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 60 - Laser Maze
  {
    id: 60,
    name: "Laser Labyrinth",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'laser',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 50, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 200 },
      { x: 300, y: 150, width: 10, height: 200 },
      { x: 300, y: 450, width: 10, height: 100 },
      { x: 450, y: 50, width: 10, height: 200 },
      { x: 450, y: 350, width: 10, height: 200 },
    ],
    hazards: [],
    laserGates: [
      { id: 1, x1: 150, y1: 250, x2: 150, y2: 350, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 300, y1: 350, x2: 300, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 3, x1: 450, y1: 250, x2: 450, y2: 350, onDuration: 1500, offDuration: 1500 },
      { id: 4, x1: 160, y1: 150, x2: 290, y2: 150, onDuration: 2000, offDuration: 1000 },
      { id: 5, x1: 310, y1: 350, x2: 440, y2: 350, onDuration: 2000, offDuration: 1000, startOffset: 1000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 230, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 230, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // =============================================
  // MAGNETIC ZONE LEVELS (61-65)
  // =============================================

  // Level 61 - Magnetic Introduction
  {
    id: 61,
    name: "Magnetic Pull",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'magnetic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [...outerWalls()],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    magneticZones: [
      { x: 300, y: 150, radius: 100, type: 'attract', strength: 0.8 },
      { x: 300, y: 450, radius: 100, type: 'attract', strength: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 62 - Push and Pull
  {
    id: 62,
    name: "Push & Pull",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'magnetic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
    ],
    magneticZones: [
      { x: 200, y: 200, radius: 80, type: 'repel', strength: 1 },
      { x: 400, y: 400, radius: 80, type: 'attract', strength: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 100, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 63 - Magnetic Gauntlet
  {
    id: 63,
    name: "Magnet Run",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'magnetic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: PADDING, y: 200, width: 200, height: 10 },
      { x: PADDING, y: 400, width: 200, height: 10 },
      { x: 350, y: 200, width: 210, height: 10 },
      { x: 350, y: 400, width: 210, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    magneticZones: [
      { x: 150, y: 100, radius: 80, type: 'attract', strength: 0.9 },
      { x: 150, y: 500, radius: 80, type: 'attract', strength: 0.9 },
      { x: 450, y: 100, radius: 80, type: 'repel', strength: 0.9 },
      { x: 450, y: 500, radius: 80, type: 'repel', strength: 0.9 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 500, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 64 - Magnetic Storm
  {
    id: 64,
    name: "Storm Field",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'magnetic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    magneticZones: [
      { x: 200, y: 200, radius: 70, type: 'attract', strength: 0.7 },
      { x: 400, y: 200, radius: 70, type: 'repel', strength: 0.7 },
      { x: 200, y: 400, radius: 70, type: 'repel', strength: 0.7 },
      { x: 400, y: 400, radius: 70, type: 'attract', strength: 0.7 },
      { x: 300, y: 300, radius: 60, type: 'attract', strength: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 65 - Magnetic Maze
  {
    id: 65,
    name: "Polarity",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'magnetic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 150, width: 150, height: 10 },
      { x: 300, y: 150, width: 10, height: 150 },
      { x: 300, y: 300, width: 150, height: 10 },
      { x: 150, y: 300, width: 10, height: 150 },
    ],
    hazards: [
      { x: 225, y: 225, radius: 20, type: 'hole' },
      { x: 375, y: 375, radius: 20, type: 'hole' },
    ],
    magneticZones: [
      { x: 100, y: 300, radius: 80, type: 'attract', strength: 1 },
      { x: 300, y: 100, radius: 80, type: 'repel', strength: 1 },
      { x: 500, y: 300, radius: 80, type: 'attract', strength: 1 },
      { x: 300, y: 500, radius: 80, type: 'repel', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 375, y: 225, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },

  // =============================================
  // BOUNCY WALL LEVELS (66-70)
  // =============================================

  // Level 66 - Bouncy Introduction
  {
    id: 66,
    name: "Ping Pong",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'bouncy',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 150, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 200, y: 300, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 150, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 300, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 67 - Bouncy Arena
  {
    id: 67,
    name: "Bumper Arena",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    category: 'bouncy',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 200, width: 100, height: 10, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 350, y: 200, width: 100, height: 10, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 150, y: 400, width: 100, height: 10, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 350, y: 400, width: 100, height: 10, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 270, y: 280, width: 60, height: 60, isBouncy: true, bounceMultiplier: 3 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 15, type: 'hole' },
      { x: 450, y: 300, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 68 - Bouncy Corridor
  {
    id: 68,
    name: "Pinball Path",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'bouncy',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 100, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 250, y: 250, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 350, y: 100, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 450, y: 250, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 150, y: 400, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 350, y: 400, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 350, radius: 15, type: 'hole' },
      { x: 250, y: 500, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 480, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 69 - Bouncy Maze
  {
    id: 69,
    name: "Ricochet",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    category: 'bouncy',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 100, y: 150, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
      { x: 300, y: 250, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
      { x: 100, y: 350, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
      { x: 300, y: 450, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
      // Vertical bouncy walls
      { x: 250, y: 50, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 350, y: 160, width: 10, height: 90, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 250, y: 260, width: 10, height: 90, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 350, y: 360, width: 10, height: 90, isBouncy: true, bounceMultiplier: 2.5 },
    ],
    hazards: [
      { x: 400, y: 100, radius: 18, type: 'hole' },
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
      { x: 200, y: 400, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 300, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },

  // Level 70 - Ultimate Bouncy
  {
    id: 70,
    name: "Chaos Bounce",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'bouncy',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      // Box formation
      { x: 200, y: 200, width: 200, height: 10, isBouncy: true, bounceMultiplier: 3 },
      { x: 200, y: 400, width: 200, height: 10, isBouncy: true, bounceMultiplier: 3 },
      { x: 200, y: 200, width: 10, height: 200, isBouncy: true, bounceMultiplier: 3 },
      { x: 400, y: 200, width: 10, height: 200, isBouncy: true, bounceMultiplier: 3 },
      // Corner bumpers
      { x: 100, y: 100, width: 50, height: 50, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 450, y: 100, width: 50, height: 50, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 100, y: 450, width: 50, height: 50, isBouncy: true, bounceMultiplier: 2.5 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 150, y: 300, radius: 15, type: 'hole' },
      { x: 450, y: 300, radius: 15, type: 'hole' },
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 80, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // =============================================
  // CRUSHER WALL LEVELS (71-75)
  // =============================================

  // Level 71 - Crusher Introduction
  {
    id: 71,
    name: "Crushing Pressure",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    category: 'crusher',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 200, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.002, crushPause: 500 },
      { x: 380, y: 200, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.002, crushPause: 500 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 150, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 72 - Crusher Corridor
  {
    id: 72,
    name: "Squish Run",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    category: 'crusher',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      // Crusher pairs
      { x: 140, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 50, crushSpeed: 0.002 },
      { x: 240, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -50, crushSpeed: 0.002 },
      { x: 340, y: 300, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 50, crushSpeed: 0.003 },
      { x: 440, y: 300, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -50, crushSpeed: 0.003 },
      { x: 200, y: 400, width: 100, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 50, crushSpeed: 0.002 },
      { x: 200, y: 500, width: 100, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -50, crushSpeed: 0.002 },
    ],
    hazards: [
      { x: 200, y: 150, radius: 15, type: 'hole' },
      { x: 400, y: 450, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 200, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 73 - Crusher Maze
  {
    id: 73,
    name: "Press Maze",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'crusher',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 50, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 200 },
      { x: 300, y: 100, width: 10, height: 200 },
      { x: 300, y: 400, width: 10, height: 150 },
      { x: 450, y: 50, width: 10, height: 200 },
      { x: 450, y: 350, width: 10, height: 200 },
      // Crushers in gaps
      { x: 150, y: 250, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: 35, crushSpeed: 0.003 },
      { x: 150, y: 320, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: -35, crushSpeed: 0.003 },
      { x: 300, y: 300, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: 35, crushSpeed: 0.003 },
      { x: 300, y: 370, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: -35, crushSpeed: 0.003 },
      { x: 450, y: 250, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: 35, crushSpeed: 0.003 },
      { x: 450, y: 320, width: 10, height: 30, isCrusher: true, crushDirection: 'vertical', moveRange: -35, crushSpeed: 0.003 },
    ],
    hazards: [
      { x: 225, y: 200, radius: 18, type: 'hole' },
      { x: 375, y: 400, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 225, y: 400, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 74 - Multi Crusher
  {
    id: 74,
    name: "Crush Chamber",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'crusher',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      // Multiple crusher zones
      { x: 100, y: 150, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 60, crushSpeed: 0.002 },
      { x: 100, y: 270, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -60, crushSpeed: 0.002 },
      { x: 350, y: 150, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 60, crushSpeed: 0.002, crushPause: 1000 },
      { x: 350, y: 270, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -60, crushSpeed: 0.002, crushPause: 1000 },
      { x: 100, y: 350, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 60, crushSpeed: 0.0025, crushPause: 500 },
      { x: 100, y: 470, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -60, crushSpeed: 0.0025, crushPause: 500 },
      { x: 350, y: 350, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 60, crushSpeed: 0.003 },
      { x: 350, y: 470, width: 150, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -60, crushSpeed: 0.003 },
    ],
    hazards: [
      { x: 300, y: 210, radius: 20, type: 'hole' },
      { x: 300, y: 410, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 175, y: 210, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 425, y: 210, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 175, y: 410, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 425, y: 410, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 310, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 75 - Ultimate Crusher
  {
    id: 75,
    name: "Death Press",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'crusher',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      // Fast crushers everywhere
      { x: 150, y: 100, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.004 },
      { x: 330, y: 100, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.004 },
      { x: 250, y: 250, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.003 },
      { x: 430, y: 250, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.003 },
      { x: 150, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.0035 },
      { x: 330, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.0035 },
      // Vertical crushers
      { x: 400, y: 80, width: 100, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: 40, crushSpeed: 0.003 },
      { x: 400, y: 180, width: 100, height: 20, isCrusher: true, crushDirection: 'vertical', moveRange: -40, crushSpeed: 0.003 },
    ],
    hazards: [
      { x: 240, y: 150, radius: 18, type: 'hole' },
      { x: 340, y: 300, radius: 18, type: 'hole' },
      { x: 240, y: 450, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 130, radius: 15, type: 'speed', duration: 10000 },
    ],
  },

  // =============================================
  // ORBITING HAZARD LEVELS (76-80)
  // =============================================

  // Level 76 - Orbit Introduction
  {
    id: 76,
    name: "Orbit Trap",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    category: 'orbiting',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [...outerWalls()],
    hazards: [
      { x: 300, y: 300, radius: 18, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002 },
      { x: 300, y: 300, radius: 18, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002, orbitPhase: Math.PI },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 77 - Dual Orbits
  {
    id: 77,
    name: "Binary Star",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    category: 'orbiting',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 200, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: 0.003 },
      { x: 200, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 200, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: 0.003, orbitPhase: Math.PI },
      { x: 400, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 400, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: -0.003 },
      { x: 400, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 400, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: -0.003, orbitPhase: Math.PI },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  // Level 78 - Orbit Corridor
  {
    id: 78,
    name: "Orbital Path",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'orbiting',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 50, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 200 },
      { x: 300, y: 50, width: 10, height: 200 },
      { x: 300, y: 350, width: 10, height: 200 },
      { x: 450, y: 50, width: 10, height: 200 },
      { x: 450, y: 350, width: 10, height: 200 },
    ],
    hazards: [
      { x: 80, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 80, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: 0.003 },
      { x: 225, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 225, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: -0.003 },
      { x: 375, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 375, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: 0.003 },
      { x: 520, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 520, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: -0.003 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 225, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 375, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 100, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 79 - Triple Orbit
  {
    id: 79,
    name: "Tri-Star",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'orbiting',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      // Top orbit (3 hazards)
      { x: 200, y: 150, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 200, orbitRadius: 70, orbitSpeed: 0.0025 },
      { x: 300, y: 150, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 200, orbitRadius: 70, orbitSpeed: 0.0025, orbitPhase: Math.PI * 2 / 3 },
      { x: 400, y: 150, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 200, orbitRadius: 70, orbitSpeed: 0.0025, orbitPhase: Math.PI * 4 / 3 },
      // Bottom orbit (3 hazards, opposite direction)
      { x: 200, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 400, orbitRadius: 70, orbitSpeed: -0.0025 },
      { x: 300, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 400, orbitRadius: 70, orbitSpeed: -0.0025, orbitPhase: Math.PI * 2 / 3 },
      { x: 400, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 400, orbitRadius: 70, orbitSpeed: -0.0025, orbitPhase: Math.PI * 4 / 3 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 80 - Orbit Chaos
  {
    id: 80,
    name: "Orbital Storm",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'orbiting',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      // Multiple orbit centers with different speeds
      { x: 150, y: 150, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 150, orbitCenterY: 150, orbitRadius: 50, orbitSpeed: 0.004 },
      { x: 150, y: 150, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 150, orbitCenterY: 150, orbitRadius: 50, orbitSpeed: 0.004, orbitPhase: Math.PI },
      { x: 450, y: 150, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 450, orbitCenterY: 150, orbitRadius: 50, orbitSpeed: -0.003 },
      { x: 450, y: 150, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 450, orbitCenterY: 150, orbitRadius: 50, orbitSpeed: -0.003, orbitPhase: Math.PI },
      { x: 150, y: 450, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 150, orbitCenterY: 450, orbitRadius: 50, orbitSpeed: 0.003 },
      { x: 150, y: 450, radius: 12, type: 'hole', isOrbiting: true, orbitCenterX: 150, orbitCenterY: 450, orbitRadius: 50, orbitSpeed: 0.003, orbitPhase: Math.PI },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002 },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002, orbitPhase: Math.PI / 2 },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002, orbitPhase: Math.PI },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002, orbitPhase: Math.PI * 3 / 2 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 450, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // =============================================
  // EXTREME COMBINED LEVELS (81-100)
  // =============================================

  // Level 81 - Conveyor + Laser
  {
    id: 81,
    name: "Laser Flow",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [],
    conveyorZones: [
      { x: 50, y: 150, width: 200, height: 100, direction: 'right', speed: 0.8 },
      { x: 350, y: 250, width: 200, height: 100, direction: 'left', speed: 0.8 },
      { x: 50, y: 350, width: 200, height: 100, direction: 'right', speed: 0.8 },
      { x: 350, y: 450, width: 200, height: 100, direction: 'left', speed: 0.8 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 100, x2: 250, y2: 250, onDuration: 2000, offDuration: 2000 },
      { id: 2, x1: 350, y1: 250, x2: 350, y2: 400, onDuration: 2000, offDuration: 2000, startOffset: 1000 },
      { id: 3, x1: 250, y1: 400, x2: 250, y2: 550, onDuration: 2000, offDuration: 2000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 325, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 82 - Magnetic + Bouncy
  {
    id: 82,
    name: "Magnetic Bounce",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    category: 'extreme',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 150, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 200, y: 300, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 150, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 300, width: 10, height: 150, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    magneticZones: [
      { x: 300, y: 100, radius: 80, type: 'attract', strength: 1 },
      { x: 300, y: 500, radius: 80, type: 'attract', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 200, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 83 - Crusher + Orbiting
  {
    id: 83,
    name: "Crush Orbit",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.002 },
      { x: 330, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.002 },
      { x: 250, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.002 },
      { x: 430, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.002 },
    ],
    hazards: [
      { x: 240, y: 100, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 240, orbitCenterY: 100, orbitRadius: 40, orbitSpeed: 0.003 },
      { x: 360, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 360, orbitCenterY: 300, orbitRadius: 40, orbitSpeed: -0.003 },
      { x: 160, y: 500, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 160, orbitCenterY: 500, orbitRadius: 40, orbitSpeed: 0.003 },
    ],
    collectibles: [
      { id: 1, x: 240, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 340, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 80, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 84-90: More extreme combinations
  {
    id: 84,
    name: "Triple Threat",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002 },
      { x: 300, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.002, orbitPhase: Math.PI },
    ],
    conveyorZones: [
      { x: 150, y: 250, width: 100, height: 100, direction: 'up', speed: 1 },
      { x: 350, y: 250, width: 100, height: 100, direction: 'down', speed: 1 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 150, x2: 350, y2: 150, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 250, y1: 450, x2: 350, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 200, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  {
    id: 85,
    name: "Dark Conveyor",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    isDarkMode: true,
    spotlightRadius: 80,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 300, radius: 20, type: 'hole' },
      { x: 400, y: 300, radius: 20, type: 'hole' },
    ],
    conveyorZones: [
      { x: 100, y: 100, width: 400, height: 100, direction: 'right', speed: 0.8 },
      { x: 100, y: 400, width: 400, height: 100, direction: 'left', speed: 0.8 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  {
    id: 86,
    name: "Laser Magnets",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [...outerWalls()],
    hazards: [],
    magneticZones: [
      { x: 200, y: 200, radius: 80, type: 'attract', strength: 0.8 },
      { x: 400, y: 400, radius: 80, type: 'repel', strength: 0.8 },
    ],
    laserGates: [
      { id: 1, x1: 150, y1: 300, x2: 300, y2: 150, onDuration: 2000, offDuration: 1500 },
      { id: 2, x1: 300, y1: 450, x2: 450, y2: 300, onDuration: 2000, offDuration: 1500, startOffset: 1000 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 400, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  {
    id: 87,
    name: "Bouncy Orbit",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 200, width: 10, height: 200, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 440, y: 200, width: 10, height: 200, isBouncy: true, bounceMultiplier: 2.5 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 100, orbitSpeed: 0.003 },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 100, orbitSpeed: 0.003, orbitPhase: Math.PI / 2 },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 100, orbitSpeed: 0.003, orbitPhase: Math.PI },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 100, orbitSpeed: 0.003, orbitPhase: Math.PI * 1.5 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  {
    id: 88,
    name: "Crusher Laser",
    mazeSize: 'large',
    balls: 1,
    difficulty: 9,
    category: 'extreme',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 150, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.002 },
      { x: 280, y: 150, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.002 },
      { x: 300, y: 350, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.002 },
      { x: 380, y: 350, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.002 },
    ],
    hazards: [],
    laserGates: [
      { id: 1, x1: 250, y1: 50, x2: 250, y2: 150, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 250, y1: 250, x2: 250, y2: 350, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 3, x1: 350, y1: 250, x2: 350, y2: 350, onDuration: 1500, offDuration: 1500 },
      { id: 4, x1: 350, y1: 450, x2: 350, y2: 550, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  {
    id: 89,
    name: "Magnetic Crush",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 70, crushSpeed: 0.003 },
      { x: 330, y: 200, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -70, crushSpeed: 0.003 },
      { x: 250, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 70, crushSpeed: 0.003 },
      { x: 430, y: 400, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -70, crushSpeed: 0.003 },
    ],
    hazards: [
      { x: 250, y: 100, radius: 18, type: 'hole' },
      { x: 350, y: 500, radius: 18, type: 'hole' },
    ],
    magneticZones: [
      { x: 250, y: 250, radius: 60, type: 'attract', strength: 1.2 },
      { x: 350, y: 350, radius: 60, type: 'repel', strength: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 350, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'speed', duration: 10000 },
    ],
  },

  {
    id: 90,
    name: "All Mechanics",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 200, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 300, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: 0.002 },
    ],
    conveyorZones: [
      { x: 100, y: 100, width: 100, height: 100, direction: 'right', speed: 0.6 },
      { x: 400, y: 400, width: 100, height: 100, direction: 'left', speed: 0.6 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 150, x2: 350, y2: 150, onDuration: 2000, offDuration: 2000 },
    ],
    magneticZones: [
      { x: 150, y: 400, radius: 60, type: 'attract', strength: 0.6 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Levels 91-95: Multi-ball extreme
  {
    id: 91,
    name: "Dual Orbit",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 40 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 200, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: 0.003 },
      { x: 400, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 400, orbitCenterY: 300, orbitRadius: 80, orbitSpeed: -0.003 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 200, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  {
    id: 92,
    name: "Twin Conveyor",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    walls: [...outerWalls()],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    conveyorZones: [
      { x: 100, y: 100, width: 400, height: 100, direction: 'right', speed: 1 },
      { x: 100, y: 400, width: 400, height: 100, direction: 'left', speed: 1 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 200, x2: 250, y2: 400, onDuration: 2000, offDuration: 2000 },
      { id: 2, x1: 350, y1: 200, x2: 350, y2: 400, onDuration: 2000, offDuration: 2000, startOffset: 1000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [],
  },

  {
    id: 93,
    name: "Trio Magnetic",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 45 },
    walls: [...outerWalls()],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    magneticZones: [
      { x: 150, y: 200, radius: 70, type: 'attract', strength: 0.8 },
      { x: 450, y: 200, radius: 70, type: 'repel', strength: 0.8 },
      { x: 300, y: 400, radius: 80, type: 'attract', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  {
    id: 94,
    name: "Dark Lasers",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    isDarkMode: true,
    spotlightRadius: 70,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    walls: [...outerWalls()],
    hazards: [],
    laserGates: [
      { id: 1, x1: 200, y1: 50, x2: 200, y2: 300, onDuration: 2000, offDuration: 2000 },
      { id: 2, x1: 300, y1: 200, x2: 300, y2: 450, onDuration: 2000, offDuration: 2000, startOffset: 1000 },
      { id: 3, x1: 400, y1: 100, x2: 400, y2: 350, onDuration: 2000, offDuration: 2000 },
      { id: 4, x1: 100, y1: 400, x2: 500, y2: 400, onDuration: 1500, offDuration: 1500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 200, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  {
    id: 95,
    name: "Bouncy Twins",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 40 },
    walls: [
      ...outerWalls(),
      { x: 100, y: 150, width: 10, height: 300, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 490, y: 150, width: 10, height: 300, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 200, y: 250, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
      { x: 200, y: 350, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 200, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Levels 96-100: Ultimate challenges
  {
    id: 96,
    name: "Nightmare",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    isDarkMode: true,
    spotlightRadius: 60,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 200, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 300, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 70, orbitSpeed: 0.003 },
      { x: 300, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 300, orbitRadius: 70, orbitSpeed: 0.003, orbitPhase: Math.PI },
    ],
    conveyorZones: [
      { x: 100, y: 400, width: 150, height: 100, direction: 'right', speed: 0.8 },
    ],
    magneticZones: [
      { x: 450, y: 150, radius: 60, type: 'attract', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  {
    id: 97,
    name: "Chaos Theory",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 50 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 150, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.003 },
      { x: 330, y: 150, width: 20, height: 100, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.003 },
      { x: 200, y: 350, width: 200, height: 10, isBouncy: true, bounceMultiplier: 2.5 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 150, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: 0.003 },
      { x: 450, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 450, orbitCenterY: 300, orbitRadius: 50, orbitSpeed: -0.003 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 250, x2: 350, y2: 250, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 250, y1: 450, x2: 350, y2: 450, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 300, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  {
    id: 98,
    name: "Total Mayhem",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'extreme',
    isDarkMode: true,
    spotlightRadius: 70,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    walls: [
      ...outerWalls(),
      { x: 200, y: 150, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
      { x: 400, y: 350, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 200, orbitRadius: 50, orbitSpeed: 0.003 },
      { x: 300, y: 400, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 300, orbitCenterY: 400, orbitRadius: 50, orbitSpeed: -0.003 },
    ],
    conveyorZones: [
      { x: 100, y: 250, width: 150, height: 100, direction: 'right', speed: 0.8 },
      { x: 350, y: 250, width: 150, height: 100, direction: 'left', speed: 0.8 },
    ],
    magneticZones: [
      { x: 150, y: 450, radius: 60, type: 'attract', strength: 0.8 },
      { x: 450, y: 150, radius: 60, type: 'repel', strength: 0.8 },
    ],
    laserGates: [
      { id: 1, x1: 250, y1: 100, x2: 250, y2: 180, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 350, y1: 420, x2: 350, y2: 500, onDuration: 1500, offDuration: 1500, startOffset: 750 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 80, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  {
    id: 99,
    name: "Inferno",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'extreme',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 50 },
    walls: [
      ...outerWalls(),
      { x: 150, y: 100, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.003 },
      { x: 330, y: 100, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.003 },
      { x: 250, y: 350, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: 80, crushSpeed: 0.003 },
      { x: 430, y: 350, width: 20, height: 200, isCrusher: true, crushDirection: 'horizontal', moveRange: -80, crushSpeed: 0.003 },
    ],
    hazards: [
      { x: 250, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 250, orbitCenterY: 300, orbitRadius: 40, orbitSpeed: 0.004 },
      { x: 350, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 350, orbitCenterY: 300, orbitRadius: 40, orbitSpeed: -0.004 },
    ],
    laserGates: [
      { id: 1, x1: 180, y1: 300, x2: 220, y2: 300, onDuration: 1000, offDuration: 1000 },
      { id: 2, x1: 380, y1: 300, x2: 420, y2: 300, onDuration: 1000, offDuration: 1000, startOffset: 500 },
    ],
    magneticZones: [
      { x: 300, y: 150, radius: 60, type: 'repel', strength: 1 },
      { x: 300, y: 450, radius: 60, type: 'repel', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 250, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 200, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 100 - THE IMPOSSIBLE
  {
    id: 100,
    name: "THE IMPOSSIBLE",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'extreme',
    isDarkMode: true,
    spotlightRadius: 55,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 55 },
    walls: [
      ...outerWalls(),
      // Bouncy walls
      { x: 150, y: 150, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2.5 },
      { x: 440, y: 350, width: 10, height: 100, isBouncy: true, bounceMultiplier: 2.5 },
      // Crusher walls
      { x: 250, y: 200, width: 20, height: 80, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.003 },
      { x: 330, y: 200, width: 20, height: 80, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.003 },
      { x: 250, y: 400, width: 20, height: 80, isCrusher: true, crushDirection: 'horizontal', moveRange: 60, crushSpeed: 0.003 },
      { x: 330, y: 400, width: 20, height: 80, isCrusher: true, crushDirection: 'horizontal', moveRange: -60, crushSpeed: 0.003 },
    ],
    hazards: [
      // Orbiting hazards
      { x: 200, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 200, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: 0.003 },
      { x: 200, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 200, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: 0.003, orbitPhase: Math.PI },
      { x: 400, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 400, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: -0.003 },
      { x: 400, y: 300, radius: 15, type: 'hole', isOrbiting: true, orbitCenterX: 400, orbitCenterY: 300, orbitRadius: 60, orbitSpeed: -0.003, orbitPhase: Math.PI },
      // Static hazards
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    conveyorZones: [
      { x: 100, y: 100, width: 100, height: 100, direction: 'down', speed: 0.8 },
      { x: 400, y: 100, width: 100, height: 100, direction: 'down', speed: 0.8 },
      { x: 100, y: 400, width: 100, height: 100, direction: 'up', speed: 0.8 },
    ],
    laserGates: [
      { id: 1, x1: 160, y1: 200, x2: 240, y2: 200, onDuration: 1500, offDuration: 1500 },
      { id: 2, x1: 360, y1: 200, x2: 440, y2: 200, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 3, x1: 160, y1: 400, x2: 240, y2: 400, onDuration: 1500, offDuration: 1500, startOffset: 750 },
      { id: 4, x1: 360, y1: 400, x2: 440, y2: 400, onDuration: 1500, offDuration: 1500 },
    ],
    magneticZones: [
      { x: 300, y: 300, radius: 80, type: 'attract', strength: 0.6 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 12000 },
      { id: 2, x: 520, y: 80, radius: 15, type: 'speed', duration: 10000 },
      { id: 3, x: 300, y: 520, radius: 15, type: 'multiplier', duration: 15000 },
    ],
  },
];
