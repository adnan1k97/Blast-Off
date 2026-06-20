import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const gravityNexusLevels: Level[] = [
  {
    id: 541, name: "Upside Down", mazeSize: 'small', balls: 1, difficulty: 1, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 200, radius: 20, type: 'hole' }],
    gravityFlips: [{ x: 250, y: 250, width: 100, height: 200, flipDirection: 'vertical', strength: 1 }],
    collectibles: [
      { id: 1, x: 200, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 542, name: "Pull Field", mazeSize: 'small', balls: 1, difficulty: 1, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    gravityWells: [{ x: 300, y: 300, radius: 150, strength: 0.8, falloff: 'linear' }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 543, name: "Flip Corridor", mazeSize: 'small', balls: 1, difficulty: 2, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    gravityFlips: [
      { x: 100, y: 220, width: 100, height: 160, flipDirection: 'vertical', strength: 1.2 },
      { x: 400, y: 220, width: 100, height: 160, flipDirection: 'horizontal', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 544, name: "Push & Pull", mazeSize: 'small', balls: 1, difficulty: 2, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    gravityWells: [
      { x: 200, y: 200, radius: 120, strength: 0.6, falloff: 'linear' },
      { x: 400, y: 400, radius: 120, strength: -0.5, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 545, name: "Inverted Path", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 350, height: 10 },
      { x: 200, y: 200, width: 360, height: 10 },
    ],
    hazards: [
      { x: 300, y: 450, radius: 18, type: 'hole' },
      { x: 300, y: 120, radius: 18, type: 'hole' },
    ],
    gravityFlips: [
      { x: 100, y: 360, width: 200, height: 190, flipDirection: 'vertical', strength: 1.3 },
      { x: 300, y: 60, width: 200, height: 130, flipDirection: 'horizontal', strength: 1 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 280, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 546, name: "Orbit Trap", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 200, strength: 1.2, falloff: 'quadratic' },
      { x: 100, y: 500, radius: 80, strength: -0.8, falloff: 'linear' },
      { x: 500, y: 100, radius: 80, strength: -0.8, falloff: 'linear' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 547, name: "Gravity Maze", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 210, y: 150, width: 180, height: 150, flipDirection: 'vertical', strength: 1.5 },
      { x: 210, y: 300, width: 180, height: 150, flipDirection: 'horizontal', strength: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 548, name: "Well Network", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 250, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 150, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    gravityWells: [
      { x: 150, y: 150, radius: 100, strength: 0.7, falloff: 'linear' },
      { x: 450, y: 150, radius: 100, strength: -0.6, falloff: 'quadratic' },
      { x: 150, y: 400, radius: 100, strength: -0.5, falloff: 'linear' },
      { x: 450, y: 400, radius: 100, strength: 0.9, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 549, name: "Flip Storm", mazeSize: 'large', balls: 1, difficulty: 5, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 300, radius: 15, type: 'hole' },
      { x: 450, y: 300, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 60, width: 130, height: 130, flipDirection: 'vertical', strength: 1.5 },
      { x: 210, y: 210, width: 180, height: 180, flipDirection: 'horizontal', strength: 1.3 },
      { x: 410, y: 410, width: 140, height: 140, flipDirection: 'vertical', strength: 1.5 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 100, strength: -0.5, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 100, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 550, name: "Singularity", mazeSize: 'large', balls: 1, difficulty: 5, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 400, y: 200, radius: 18, type: 'hole' },
      { x: 200, y: 400, radius: 18, type: 'hole' },
      { x: 400, y: 400, radius: 18, type: 'hole' },
    ],
    gravityWells: [
      { x: 200, y: 200, radius: 120, strength: 1.0, falloff: 'quadratic' },
      { x: 400, y: 200, radius: 120, strength: -0.8, falloff: 'linear' },
      { x: 200, y: 400, radius: 120, strength: -0.8, falloff: 'linear' },
      { x: 400, y: 400, radius: 120, strength: 1.0, falloff: 'quadratic' },
      { x: 300, y: 300, radius: 80, strength: -1.5, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
    ],
  },
  // === HARD (551-556) ===
  {
    id: 551, name: "Flip Arena", mazeSize: 'large', balls: 1, difficulty: 6, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 100, width: 10, height: 400 },
      { x: 400, y: 100, width: 10, height: 400 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 300, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 210, y: 100, width: 180, height: 200, flipDirection: 'vertical', strength: 1.5 },
      { x: 210, y: 300, width: 180, height: 200, flipDirection: 'horizontal', strength: 1.3 },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 552, name: "Well Maze", mazeSize: 'large', balls: 1, difficulty: 6, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 250, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 320, radius: 15, type: 'hole' },
      { x: 400, y: 320, radius: 15, type: 'hole' },
    ],
    gravityWells: [
      { x: 150, y: 320, radius: 100, strength: 1.2, falloff: 'quadratic' },
      { x: 450, y: 320, radius: 100, strength: 1.2, falloff: 'quadratic' },
      { x: 300, y: 150, radius: 80, strength: -1.0, falloff: 'linear' },
    ],
    phaseShifts: [
      { id: 1, x: 270, y: 260, width: 60, height: 40, phaseDuration: 800, cooldown: 2000 },
      { id: 2, x: 270, y: 410, width: 60, height: 40, phaseDuration: 800, cooldown: 2000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 320, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 150, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 553, name: "Gravity Tangle", mazeSize: 'large', balls: 1, difficulty: 7, category: 'gravityflip', world: 'dimension-nexus',
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
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 100, y: 500, radius: 15, type: 'hole' },
      { x: 500, y: 100, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 60, width: 130, height: 130, flipDirection: 'vertical', strength: 1.5 },
      { x: 410, y: 410, width: 140, height: 140, flipDirection: 'vertical', strength: 1.5 },
      { x: 210, y: 210, width: 180, height: 180, flipDirection: 'horizontal', strength: 1.5 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 60, strength: 1.5, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 554, name: "Graviton Field", mazeSize: 'large', balls: 1, difficulty: 7, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 200, radius: 15, type: 'hole' },
      { x: 200, y: 400, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
      { x: 300, y: 300, radius: 18, type: 'hole' },
    ],
    gravityWells: [
      { x: 200, y: 200, radius: 100, strength: 0.8, falloff: 'linear' },
      { x: 400, y: 200, radius: 100, strength: -0.7, falloff: 'quadratic' },
      { x: 200, y: 400, radius: 100, strength: -0.7, falloff: 'quadratic' },
      { x: 400, y: 400, radius: 100, strength: 0.8, falloff: 'linear' },
      { x: 300, y: 300, radius: 60, strength: 2.0, falloff: 'quadratic' },
    ],
    dimensionTears: [
      { id: 1, x: 100, y: 100, radius: 20, linkedTearId: 2, color: 'hsla(270, 85%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 500, radius: 20, linkedTearId: 1, color: 'hsla(310, 85%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 555, name: "Antigravity", mazeSize: 'large', balls: 2, difficulty: 8, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 100, y: 300, radius: 18, type: 'hole' },
      { x: 500, y: 300, radius: 18, type: 'hole' },
      { x: 300, y: 300, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 210, width: 220, height: 180, flipDirection: 'vertical', strength: 1.8 },
      { x: 320, y: 210, width: 220, height: 180, flipDirection: 'horizontal', strength: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 400, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 556, name: "Black Hole", mazeSize: 'large', balls: 1, difficulty: 8, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 30, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 250, strength: 2.5, falloff: 'quadratic' },
      { x: 100, y: 100, radius: 60, strength: -1.5, falloff: 'linear' },
      { x: 500, y: 500, radius: 60, strength: -1.5, falloff: 'linear' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 500, y: 100, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 100, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [{ id: 1, x: 80, y: 300, radius: 15, type: 'shield', duration: 5000 }],
  },
  // === BOSS (557-560) ===
  {
    id: 557, name: "Gravity Duel", mazeSize: 'large', balls: 2, difficulty: 9, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 200, height: 10 },
      { x: 200, y: 300, width: 200, height: 10 },
      { x: 200, y: 450, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 220, radius: 15, type: 'hole' },
      { x: 300, y: 380, radius: 15, type: 'hole' },
      { x: 150, y: 300, radius: 12, type: 'hole' },
      { x: 450, y: 300, radius: 12, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 160, width: 130, height: 130, flipDirection: 'vertical', strength: 2.0 },
      { x: 210, y: 310, width: 180, height: 130, flipDirection: 'horizontal', strength: 1.8 },
      { x: 410, y: 60, width: 140, height: 130, flipDirection: 'vertical', strength: 2.0 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 558, name: "Event Horizon", mazeSize: 'large', balls: 1, difficulty: 9, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 520, y: 520 }, goal: { x: 80, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 150, y: 150, radius: 15, type: 'hole' },
      { x: 450, y: 450, radius: 15, type: 'hole' },
      { x: 150, y: 450, radius: 12, type: 'hole' },
      { x: 450, y: 150, radius: 12, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 200, strength: 3.0, falloff: 'quadratic' },
      { x: 80, y: 80, radius: 80, strength: -2.0, falloff: 'linear' },
      { x: 520, y: 520, radius: 80, strength: -1.5, falloff: 'linear' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 4000 }],
  },
  {
    id: 559, name: "Dimension Warp", mazeSize: 'large', balls: 1, difficulty: 9, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 200, y: 350, width: 10, height: 210 },
      { x: 400, y: P, width: 10, height: 250 },
      { x: 400, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    gravityFlips: [
      { x: 210, y: 50, width: 180, height: 240, flipDirection: 'vertical', strength: 2.0 },
      { x: 210, y: 360, width: 180, height: 190, flipDirection: 'horizontal', strength: 1.8 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 80, strength: -1.5, falloff: 'quadratic' },
    ],
    dimensionTears: [
      { id: 1, x: 200, y: 300, radius: 18, linkedTearId: 2, color: 'hsla(270, 90%, 60%, 1)', flipAxis: 'x' },
      { id: 2, x: 400, y: 300, radius: 18, linkedTearId: 1, color: 'hsla(310, 90%, 60%, 1)', flipAxis: 'y' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 560, name: "The Gravity Titan", mazeSize: 'large', balls: 2, difficulty: 10, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 20 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 200, y: 200, radius: 12, type: 'hole' },
      { x: 400, y: 200, radius: 12, type: 'hole' },
      { x: 200, y: 400, radius: 12, type: 'hole' },
      { x: 400, y: 400, radius: 12, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 60, width: 80, height: 80, flipDirection: 'vertical', strength: 2.0 },
      { x: 460, y: 60, width: 80, height: 80, flipDirection: 'horizontal', strength: 2.0 },
      { x: 60, y: 460, width: 80, height: 80, flipDirection: 'horizontal', strength: 2.0 },
      { x: 460, y: 460, width: 80, height: 80, flipDirection: 'vertical', strength: 2.0 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 150, strength: 2.5, falloff: 'quadratic' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 520, y: 80, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [{ id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 4000 }],
  },
];
