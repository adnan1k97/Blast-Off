import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const gearSpireLevels: Level[] = [
  // === EASY (221-224) ===
  {
    id: 221, name: "First Gear", mazeSize: 'small', balls: 1, difficulty: 1, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    rotatingGears: [{ x: 300, y: 300, radius: 60, speed: 1.5, teeth: 6, clockwise: true }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 222, name: "Piston Intro", mazeSize: 'small', balls: 1, difficulty: 2, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 200, width: 10, height: 80, pistonExtend: 600, pistonRetract: 600, pistonPause: 300 } as any,
      { x: 350, y: 320, width: 10, height: 80, pistonExtend: 600, pistonRetract: 600, pistonPause: 300 } as any,
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 180, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 420, y: 350, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 223, name: "Cog Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    rotatingGears: [
      { x: 200, y: 200, radius: 50, speed: 1, teeth: 5, clockwise: true },
      { x: 400, y: 400, radius: 50, speed: 1, teeth: 5, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 224, name: "Rhythm Wall", mazeSize: 'small', balls: 1, difficulty: 3, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 380, width: 400, height: 10 },
      { x: 150, y: 220, width: 410, height: 10 },
      { x: 200, y: 100, width: 10, height: 110, pistonExtend: 500, pistonRetract: 500, pistonPause: 200 } as any,
      { x: 350, y: 230, width: 10, height: 110, pistonExtend: 500, pistonRetract: 500, pistonPause: 200 } as any,
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (225-232) ===
  {
    id: 225, name: "Gear Gauntlet", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 150, radius: 18, type: 'hole' }, { x: 300, y: 450, radius: 18, type: 'hole' }],
    rotatingGears: [
      { x: 200, y: 300, radius: 55, speed: 1.5, teeth: 6, clockwise: true },
      { x: 400, y: 300, radius: 55, speed: 1.5, teeth: 6, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 226, name: "Piston Corridor", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 200, width: 200, height: 10 },
      { x: 300, y: 400, width: 260, height: 10 },
      { x: 200, y: 200, width: 10, height: 120, pistonExtend: 400, pistonRetract: 400, pistonPause: 200 } as any,
      { x: 400, y: 280, width: 10, height: 120, pistonExtend: 500, pistonRetract: 300, pistonPause: 150 } as any,
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 227, name: "Twin Cogs", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 200 },
      { x: 400, y: 350, width: 10, height: 210 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    rotatingGears: [
      { x: 150, y: 350, radius: 60, speed: 2, teeth: 8, clockwise: true },
      { x: 450, y: 200, radius: 60, speed: 2, teeth: 8, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 228, name: "Piston Dance", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 80, height: 10, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
      { x: 370, y: 250, width: 80, height: 10, pistonExtend: 400, pistonRetract: 400, pistonPause: 150 } as any,
      { x: 150, y: 350, width: 80, height: 10, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
      { x: 370, y: 450, width: 80, height: 10, pistonExtend: 400, pistonRetract: 400, pistonPause: 150 } as any,
    ],
    hazards: [
      { x: 200, y: 250, radius: 15, type: 'hole' },
      { x: 400, y: 350, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 229, name: "Clockwork", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 15, type: 'hole' },
      { x: 450, y: 450, radius: 15, type: 'hole' },
    ],
    rotatingGears: [
      { x: 200, y: 400, radius: 50, speed: 1.2, teeth: 5, clockwise: true },
      { x: 300, y: 300, radius: 45, speed: 1.8, teeth: 7, clockwise: false },
      { x: 400, y: 200, radius: 50, speed: 1.2, teeth: 5, clockwise: true },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 230, name: "Gear & Piston", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 200, width: 10, height: 100, pistonExtend: 400, pistonRetract: 400, pistonPause: 200 } as any,
      { x: 350, y: 300, width: 10, height: 100, pistonExtend: 500, pistonRetract: 500, pistonPause: 200 } as any,
    ],
    hazards: [{ x: 300, y: 450, radius: 18, type: 'hole' }],
    rotatingGears: [
      { x: 180, y: 350, radius: 50, speed: 1.5, teeth: 6, clockwise: true },
      { x: 420, y: 200, radius: 50, speed: 1.5, teeth: 6, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 300, y: 120, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 231, name: "Sprocket Run", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 300, radius: 15, type: 'hole' },
      { x: 450, y: 300, radius: 15, type: 'hole' },
    ],
    rotatingGears: [
      { x: 200, y: 200, radius: 45, speed: 2, teeth: 6, clockwise: true },
      { x: 400, y: 200, radius: 45, speed: 2, teeth: 6, clockwise: false },
      { x: 200, y: 400, radius: 45, speed: 2, teeth: 6, clockwise: false },
      { x: 400, y: 400, radius: 45, speed: 2, teeth: 6, clockwise: true },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 232, name: "Piston Trap", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 120, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
      { x: 300, y: 250, width: 10, height: 120, pistonExtend: 350, pistonRetract: 350, pistonPause: 100 } as any,
      { x: 400, y: 150, width: 10, height: 120, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
      { x: 200, y: 350, width: 10, height: 120, pistonExtend: 400, pistonRetract: 400, pistonPause: 150 } as any,
      { x: 400, y: 350, width: 10, height: 120, pistonExtend: 400, pistonRetract: 400, pistonPause: 150 } as any,
    ],
    hazards: [
      { x: 300, y: 180, radius: 15, type: 'hole' },
      { x: 300, y: 420, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (233-240) ===
  {
    id: 233, name: "Gear Storm", mazeSize: 'large', balls: 1, difficulty: 7, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 150, radius: 18, type: 'hole' },
    ],
    rotatingGears: [
      { x: 200, y: 200, radius: 60, speed: 2.5, teeth: 8, clockwise: true },
      { x: 400, y: 200, radius: 50, speed: 3, teeth: 6, clockwise: false },
      { x: 200, y: 400, radius: 50, speed: 3, teeth: 6, clockwise: false },
      { x: 400, y: 400, radius: 60, speed: 2.5, teeth: 8, clockwise: true },
    ],
    windGusts: [{ direction: 'right', strength: 2, interval: 4000, duration: 800, warningTime: 600 }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 234, name: "Piston Fury", mazeSize: 'large', balls: 1, difficulty: 7, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 200, pistonExtend: 300, pistonRetract: 200, pistonPause: 100 } as any,
      { x: 300, y: 200, width: 10, height: 200, pistonExtend: 350, pistonRetract: 250, pistonPause: 100 } as any,
      { x: 450, y: P, width: 10, height: 200, pistonExtend: 300, pistonRetract: 200, pistonPause: 100 } as any,
      { x: 150, y: 350, width: 10, height: 210, pistonExtend: 400, pistonRetract: 300, pistonPause: 150 } as any,
      { x: 300, y: 350, width: 10, height: 210, pistonExtend: 350, pistonRetract: 250, pistonPause: 100 } as any,
      { x: 450, y: 350, width: 10, height: 210, pistonExtend: 400, pistonRetract: 300, pistonPause: 150 } as any,
    ],
    hazards: [
      { x: 225, y: 300, radius: 15, type: 'hole' },
      { x: 375, y: 300, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 235, name: "Interlocked", mazeSize: 'large', balls: 2, difficulty: 7, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 18, type: 'hole' },
      { x: 450, y: 450, radius: 18, type: 'hole' },
    ],
    rotatingGears: [
      { x: 200, y: 300, radius: 55, speed: 2, teeth: 7, clockwise: true },
      { x: 400, y: 300, radius: 55, speed: 2, teeth: 7, clockwise: false },
      { x: 300, y: 150, radius: 40, speed: 3, teeth: 5, clockwise: true },
    ],
    collectibles: [
      { id: 1, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 236, name: "Mechanical Heart", mazeSize: 'large', balls: 1, difficulty: 8, category: 'gear', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 110,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 450, radius: 15, type: 'hole' },
      { x: 450, y: 150, radius: 15, type: 'hole' },
    ],
    rotatingGears: [
      { x: 150, y: 300, radius: 50, speed: 2.5, teeth: 8, clockwise: true },
      { x: 450, y: 300, radius: 50, speed: 2.5, teeth: 8, clockwise: false },
      { x: 300, y: 150, radius: 40, speed: 3, teeth: 6, clockwise: true },
      { x: 300, y: 450, radius: 40, speed: 3, teeth: 6, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 300, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 350, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 237, name: "Piston Maze", mazeSize: 'large', balls: 1, difficulty: 8, category: 'piston', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 400, width: 300, height: 10 },
      { x: 250, y: 250, width: 310, height: 10 },
      { x: P, y: 130, width: 300, height: 10 },
      { x: 200, y: 130, width: 10, height: 70, pistonExtend: 250, pistonRetract: 250, pistonPause: 100 } as any,
      { x: 350, y: 260, width: 10, height: 70, pistonExtend: 300, pistonRetract: 200, pistonPause: 100 } as any,
      { x: 200, y: 400, width: 10, height: 70, pistonExtend: 250, pistonRetract: 250, pistonPause: 100 } as any,
    ],
    hazards: [
      { x: 400, y: 450, radius: 18, type: 'hole' },
      { x: 150, y: 190, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 200, y: 460, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 320, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 238, name: "Cog Crusher", mazeSize: 'large', balls: 1, difficulty: 8, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 100, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
      { x: 400, y: 350, width: 10, height: 100, pistonExtend: 300, pistonRetract: 300, pistonPause: 100 } as any,
    ],
    hazards: [
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    rotatingGears: [
      { x: 300, y: 300, radius: 70, speed: 2, teeth: 10, clockwise: true },
      { x: 150, y: 200, radius: 35, speed: 3, teeth: 5, clockwise: false },
      { x: 450, y: 400, radius: 35, speed: 3, teeth: 5, clockwise: false },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 239, name: "Gear Nightmare", mazeSize: 'large', balls: 2, difficulty: 9, category: 'gear', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 100,
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 20, type: 'hole' },
      { x: 450, y: 450, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    rotatingGears: [
      { x: 200, y: 200, radius: 55, speed: 3, teeth: 8, clockwise: true },
      { x: 400, y: 200, radius: 55, speed: 3, teeth: 8, clockwise: false },
      { x: 200, y: 400, radius: 55, speed: 3, teeth: 8, clockwise: false },
      { x: 400, y: 400, radius: 55, speed: 3, teeth: 8, clockwise: true },
      { x: 300, y: 300, radius: 35, speed: 4, teeth: 6, clockwise: true },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 240, name: "The Mechanism", mazeSize: 'large', balls: 2, difficulty: 9, category: 'gear', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    rotatingGears: [
      { x: 150, y: 150, radius: 40, speed: 2.5, teeth: 6, clockwise: true },
      { x: 450, y: 150, radius: 40, speed: 2.5, teeth: 6, clockwise: false },
      { x: 150, y: 450, radius: 40, speed: 2.5, teeth: 6, clockwise: false },
      { x: 450, y: 450, radius: 40, speed: 2.5, teeth: 6, clockwise: true },
    ],
    windGusts: [
      { direction: 'right', strength: 3, interval: 3000, duration: 600, warningTime: 400 },
      { direction: 'down', strength: 3, interval: 4000, duration: 600, warningTime: 400 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
