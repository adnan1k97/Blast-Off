import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const temporalCorridorsLevels: Level[] = [
  {
    id: 561, name: "Time Bubble", mazeSize: 'small', balls: 1, difficulty: 1, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    timeSlows: [{ x: 220, y: 220, width: 160, height: 160, slowFactor: 0.3 }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 562, name: "Echo Memory", mazeSize: 'small', balls: 1, difficulty: 1, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    echoTrail: { delay: 3000, trailLifetime: 4000, trailWidth: 8, maxSegments: 100 },
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 563, name: "Slow Lane", mazeSize: 'small', balls: 1, difficulty: 2, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 400, height: 10 },
      { x: 150, y: 200, width: 410, height: 10 },
    ],
    hazards: [
      { x: 250, y: 450, radius: 18, type: 'hole' },
      { x: 350, y: 120, radius: 18, type: 'hole' },
    ],
    timeSlows: [
      { x: 100, y: 360, width: 200, height: 190, slowFactor: 0.4 },
      { x: 300, y: 60, width: 200, height: 130, slowFactor: 0.3 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 280, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 564, name: "Ghost Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    echoTrail: { delay: 2500, trailLifetime: 3500, trailWidth: 10, maxSegments: 80 },
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 565, name: "Chrono Maze", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 100, width: 10, height: 300 },
      { x: 400, y: 200, width: 10, height: 360 },
    ],
    hazards: [
      { x: 300, y: 250, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    timeSlows: [
      { x: 210, y: 100, width: 180, height: 150, slowFactor: 0.35 },
      { x: 210, y: 350, width: 180, height: 150, slowFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 566, name: "Time Echo", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: P, width: 10, height: 250 },
      { x: 350, y: 300, width: 10, height: 260 },
    ],
    hazards: [{ x: 300, y: 400, radius: 20, type: 'hole' }],
    echoTrail: { delay: 2000, trailLifetime: 5000, trailWidth: 10, maxSegments: 120 },
    timeSlows: [{ x: 260, y: 280, width: 80, height: 80, slowFactor: 0.4 }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 567, name: "Temporal Trap", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 230, height: 10 }, { x: 330, y: 350, width: 230, height: 10 },
      { x: P, y: 200, width: 230, height: 10 }, { x: 330, y: 200, width: 230, height: 10 },
    ],
    hazards: [
      { x: 200, y: 280, radius: 15, type: 'hole' },
      { x: 400, y: 280, radius: 15, type: 'hole' },
    ],
    timeSlows: [
      { x: 100, y: 210, width: 130, height: 130, slowFactor: 0.3 },
      { x: 370, y: 360, width: 130, height: 130, slowFactor: 0.3 },
    ],
    gravityFlips: [{ x: 250, y: 210, width: 100, height: 130, flipDirection: 'vertical', strength: 1.5 }],
    collectibles: [
      { id: 1, x: 300, y: 280, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 120, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 568, name: "Echo Spiral", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
    ],
    hazards: [
      { x: 300, y: 220, radius: 15, type: 'hole' },
      { x: 300, y: 380, radius: 15, type: 'hole' },
    ],
    echoTrail: { delay: 1800, trailLifetime: 4000, trailWidth: 12, maxSegments: 100 },
    collectibles: [
      { id: 1, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 569, name: "Frozen Time", mazeSize: 'large', balls: 1, difficulty: 5, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 100, width: 10, height: 400 },
      { x: 400, y: 100, width: 10, height: 400 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
    ],
    timeSlows: [
      { x: 210, y: 100, width: 180, height: 200, slowFactor: 0.2 },
      { x: 210, y: 300, width: 180, height: 200, slowFactor: 0.4 },
    ],
    gravityWells: [{ x: 300, y: 300, radius: 80, strength: -1.0, falloff: 'quadratic' }],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 570, name: "Rewind", mazeSize: 'large', balls: 1, difficulty: 5, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 100, y: 300, radius: 15, type: 'hole' },
      { x: 500, y: 300, radius: 15, type: 'hole' },
    ],
    echoTrail: { delay: 1500, trailLifetime: 5000, trailWidth: 12, maxSegments: 150 },
    dimensionTears: [
      { id: 1, x: 500, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(270, 85%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 100, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(310, 85%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (571-576) ===
  {
    id: 571, name: "Chrono Arena", mazeSize: 'large', balls: 1, difficulty: 6, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 200, y: 300, radius: 12, type: 'hole' },
      { x: 400, y: 300, radius: 12, type: 'hole' },
    ],
    timeSlows: [
      { x: 100, y: 210, width: 150, height: 180, slowFactor: 0.2 },
      { x: 350, y: 210, width: 150, height: 180, slowFactor: 0.3 },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 572, name: "Echo Maze", mazeSize: 'large', balls: 1, difficulty: 6, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 300 },
      { x: 300, y: 250, width: 10, height: 310 },
      { x: 450, y: P, width: 10, height: 300 },
    ],
    hazards: [
      { x: 220, y: 400, radius: 15, type: 'hole' },
      { x: 380, y: 200, radius: 15, type: 'hole' },
    ],
    echoTrail: { delay: 1200, trailLifetime: 4000, trailWidth: 14, maxSegments: 120 },
    collectibles: [
      { id: 1, x: 80, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 573, name: "Time Warp", mazeSize: 'large', balls: 1, difficulty: 7, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 200, width: 250, height: 10 },
      { x: 310, y: 200, width: 250, height: 10 },
      { x: P, y: 400, width: 250, height: 10 },
      { x: 310, y: 400, width: 250, height: 10 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    timeSlows: [
      { x: 100, y: 210, width: 100, height: 180, slowFactor: 0.15 },
      { x: 400, y: 210, width: 100, height: 180, slowFactor: 0.2 },
    ],
    gravityFlips: [{ x: 250, y: 210, width: 100, height: 180, flipDirection: 'vertical', strength: 1.5 }],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 574, name: "Echo Storm", mazeSize: 'large', balls: 1, difficulty: 7, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 300, y: 450, radius: 15, type: 'hole' },
    ],
    echoTrail: { delay: 1000, trailLifetime: 5000, trailWidth: 15, maxSegments: 150 },
    gravityWells: [
      { x: 300, y: 300, radius: 100, strength: 1.0, falloff: 'quadratic' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 575, name: "Temporal Paradox", mazeSize: 'large', balls: 2, difficulty: 8, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 100, y: 500, radius: 15, type: 'hole' },
      { x: 500, y: 100, radius: 15, type: 'hole' },
    ],
    timeSlows: [
      { x: 150, y: 210, width: 100, height: 180, slowFactor: 0.15 },
      { x: 350, y: 210, width: 100, height: 180, slowFactor: 0.2 },
    ],
    echoTrail: { delay: 1500, trailLifetime: 3000, trailWidth: 10, maxSegments: 80 },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 576, name: "Echo Doppel", mazeSize: 'large', balls: 1, difficulty: 8, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    echoTrail: { delay: 800, trailLifetime: 6000, trailWidth: 14, maxSegments: 200 },
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === BOSS (577-580) ===
  {
    id: 577, name: "Chrono Master", mazeSize: 'large', balls: 2, difficulty: 9, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 220, radius: 15, type: 'hole' },
      { x: 400, y: 220, radius: 15, type: 'hole' },
      { x: 300, y: 380, radius: 15, type: 'hole' },
    ],
    timeSlows: [
      { x: 160, y: 160, width: 130, height: 130, slowFactor: 0.15 },
      { x: 310, y: 310, width: 130, height: 130, slowFactor: 0.2 },
    ],
    gravityFlips: [{ x: 160, y: 310, width: 130, height: 130, flipDirection: 'vertical', strength: 2.0 }],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 578, name: "Paradox Loop", mazeSize: 'large', balls: 1, difficulty: 9, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 400, radius: 15, type: 'hole' },
      { x: 450, y: 200, radius: 15, type: 'hole' },
    ],
    echoTrail: { delay: 600, trailLifetime: 8000, trailWidth: 16, maxSegments: 250 },
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(270, 90%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(310, 90%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 579, name: "Time Fracture", mazeSize: 'large', balls: 1, difficulty: 9, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 520, y: 520 }, goal: { x: 80, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
      { x: 220, y: 200, radius: 12, type: 'hole' },
      { x: 380, y: 400, radius: 12, type: 'hole' },
    ],
    timeSlows: [
      { x: 160, y: 160, width: 130, height: 280, slowFactor: 0.1 },
      { x: 310, y: 160, width: 130, height: 280, slowFactor: 0.15 },
    ],
    echoTrail: { delay: 1000, trailLifetime: 4000, trailWidth: 12, maxSegments: 100 },
    gravityWells: [{ x: 300, y: 300, radius: 100, strength: 1.5, falloff: 'quadratic' }],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 520, y: 520, radius: 15, type: 'shield', duration: 4000 }],
  },
  {
    id: 580, name: "The Chrono Gate", mazeSize: 'large', balls: 2, difficulty: 10, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 20 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 220 },
      { x: 200, y: 340, width: 10, height: 220 },
      { x: 400, y: P, width: 10, height: 220 },
      { x: 400, y: 340, width: 10, height: 220 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
      { x: 150, y: 300, radius: 12, type: 'hole' },
      { x: 450, y: 300, radius: 12, type: 'hole' },
    ],
    timeSlows: [
      { x: 210, y: 50, width: 180, height: 200, slowFactor: 0.1 },
      { x: 210, y: 350, width: 180, height: 200, slowFactor: 0.15 },
    ],
    echoTrail: { delay: 500, trailLifetime: 6000, trailWidth: 14, maxSegments: 200 },
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 3000 }],
  },
];
