import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const voidSanctumLevels: Level[] = [
  // === Mastery zone: combines ALL Dimension Nexus mechanics ===
  {
    id: 581, name: "Void Entry", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'phaseshift', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 100, width: 10, height: 400 },
    ],
    hazards: [{ x: 350, y: 300, radius: 20, type: 'hole' }],
    phaseShifts: [{ id: 1, x: 180, y: 250, width: 50, height: 100, phaseDuration: 1200, cooldown: 2000 }],
    gravityFlips: [{ x: 260, y: 200, width: 150, height: 200, flipDirection: 'vertical', strength: 1.3 }],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 582, name: "Void Mirror", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 250, width: 230, height: 10 },
      { x: 330, y: 350, width: 230, height: 10 },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    timeSlows: [{ x: 200, y: 260, width: 100, height: 80, slowFactor: 0.3 }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 583, name: "Void Rift", mazeSize: 'large', balls: 1, difficulty: 6, category: 'dimensiontear', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 450, radius: 15, type: 'hole' },
    ],
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 22, linkedTearId: 2, color: 'hsla(270, 90%, 60%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 100, radius: 22, linkedTearId: 1, color: 'hsla(310, 90%, 60%, 1)', flipAxis: 'both' },
    ],
    echoTrail: { delay: 2000, trailLifetime: 4000, trailWidth: 10, maxSegments: 100 },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 584, name: "Void Well", mazeSize: 'large', balls: 1, difficulty: 6, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 180, strength: 1.5, falloff: 'quadratic' },
      { x: 100, y: 100, radius: 80, strength: -1.0, falloff: 'linear' },
      { x: 500, y: 500, radius: 80, strength: -1.0, falloff: 'linear' },
    ],
    phaseShifts: [{ id: 1, x: 250, y: 250, width: 50, height: 50, phaseDuration: 800, cooldown: 2000 }],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 100, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 585, name: "Void Split", mazeSize: 'large', balls: 1, difficulty: 7, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
    ],
    realitySplits: [{ id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1500 }],
    gravityFlips: [{ x: 160, y: 210, width: 280, height: 180, flipDirection: 'vertical', strength: 1.5 }],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 586, name: "Void Echo", mazeSize: 'large', balls: 1, difficulty: 7, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 400, y: 400, radius: 18, type: 'hole' },
    ],
    echoTrail: { delay: 800, trailLifetime: 6000, trailWidth: 14, maxSegments: 200 },
    gravityWells: [{ x: 300, y: 300, radius: 120, strength: -1.5, falloff: 'quadratic' }],
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(270, 85%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(310, 85%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 587, name: "Void Paradox", mazeSize: 'large', balls: 1, difficulty: 8, category: 'timeslow', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 300, radius: 12, type: 'hole' },
      { x: 450, y: 300, radius: 12, type: 'hole' },
    ],
    timeSlows: [{ x: 210, y: 210, width: 180, height: 180, slowFactor: 0.15 }],
    echoTrail: { delay: 1000, trailLifetime: 5000, trailWidth: 12, maxSegments: 150 },
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 300, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 588, name: "Void Gravity", mazeSize: 'large', balls: 2, difficulty: 8, category: 'gravityflip', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
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
    gravityFlips: [
      { x: 60, y: 260, width: 200, height: 130, flipDirection: 'vertical', strength: 2.0 },
      { x: 340, y: 260, width: 200, height: 130, flipDirection: 'horizontal', strength: 1.5 },
    ],
    gravityWells: [{ x: 300, y: 320, radius: 80, strength: 1.5, falloff: 'quadratic' }],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === EXPERT (589-596) ===
  {
    id: 589, name: "Void Mastery I", mazeSize: 'large', balls: 1, difficulty: 8, category: 'phaseshift', world: 'dimension-nexus',
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
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
    ],
    phaseShifts: [
      { id: 1, x: 170, y: 270, width: 30, height: 60, phaseDuration: 600, cooldown: 1500 },
      { id: 2, x: 370, y: 270, width: 30, height: 60, phaseDuration: 600, cooldown: 1500 },
    ],
    gravityFlips: [{ x: 210, y: 50, width: 180, height: 240, flipDirection: 'vertical', strength: 1.8 }],
    echoTrail: { delay: 1200, trailLifetime: 4000, trailWidth: 10, maxSegments: 100 },
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 590, name: "Void Mastery II", mazeSize: 'large', balls: 1, difficulty: 9, category: 'gravitywell', world: 'dimension-nexus',
    startPosition: { x: 520, y: 520 }, goal: { x: 80, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 200, y: 200, radius: 12, type: 'hole' },
      { x: 400, y: 400, radius: 12, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 200, strength: 2.5, falloff: 'quadratic' },
      { x: 80, y: 80, radius: 80, strength: -2.0, falloff: 'linear' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    timeSlows: [{ x: 250, y: 250, width: 100, height: 100, slowFactor: 0.2 }],
    collectibles: [
      { id: 1, x: 520, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 80, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 591, name: "Void Mastery III", mazeSize: 'large', balls: 2, difficulty: 9, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 20, type: 'hole' },
      { x: 150, y: 300, radius: 12, type: 'hole' },
      { x: 450, y: 300, radius: 12, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(270, 90%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(310, 90%, 55%, 1)', flipAxis: 'both' },
    ],
    echoTrail: { delay: 1500, trailLifetime: 4000, trailWidth: 10, maxSegments: 100 },
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 592, name: "Void Mastery IV", mazeSize: 'large', balls: 1, difficulty: 9, category: 'echotrail', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 250, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 300, y: 320, radius: 18, type: 'hole' },
    ],
    echoTrail: { delay: 600, trailLifetime: 7000, trailWidth: 14, maxSegments: 250 },
    gravityFlips: [{ x: 160, y: 260, width: 280, height: 130, flipDirection: 'vertical', strength: 2.0 }],
    phaseShifts: [
      { id: 1, x: 270, y: 260, width: 40, height: 40, phaseDuration: 500, cooldown: 2000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 593, name: "Void Trial I", mazeSize: 'large', balls: 2, difficulty: 9, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 22 },
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
    gravityFlips: [{ x: 210, y: 150, width: 180, height: 300, flipDirection: 'vertical', strength: 2.0 }],
    gravityWells: [
      { x: 100, y: 300, radius: 80, strength: -1.5, falloff: 'linear' },
      { x: 500, y: 300, radius: 80, strength: -1.5, falloff: 'linear' },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 594, name: "Void Trial II", mazeSize: 'large', balls: 1, difficulty: 9, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
      { x: 300, y: 300, radius: 18, type: 'hole' },
    ],
    dimensionTears: [
      { id: 1, x: 150, y: 450, radius: 22, linkedTearId: 2, color: 'hsla(270, 95%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 450, y: 150, radius: 22, linkedTearId: 1, color: 'hsla(310, 95%, 55%, 1)', flipAxis: 'both' },
    ],
    timeSlows: [{ x: 200, y: 200, width: 200, height: 200, slowFactor: 0.15 }],
    echoTrail: { delay: 800, trailLifetime: 5000, trailWidth: 14, maxSegments: 200 },
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 520, y: 80, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 595, name: "Void Trial III", mazeSize: 'large', balls: 2, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 300, height: 10 },
      { x: 150, y: 400, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 15, type: 'hole' },
      { x: 400, y: 300, radius: 15, type: 'hole' },
      { x: 300, y: 300, radius: 12, type: 'hole' },
    ],
    gravityFlips: [
      { x: 60, y: 210, width: 200, height: 180, flipDirection: 'vertical', strength: 2.0 },
      { x: 340, y: 210, width: 200, height: 180, flipDirection: 'horizontal', strength: 1.8 },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    phaseShifts: [
      { id: 1, x: 270, y: 210, width: 30, height: 30, phaseDuration: 500, cooldown: 2000 },
      { id: 2, x: 270, y: 410, width: 30, height: 30, phaseDuration: 500, cooldown: 2000 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 3000 }],
  },
  {
    id: 596, name: "Void Trial IV", mazeSize: 'large', balls: 1, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 20 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 150, strength: 2.0, falloff: 'quadratic' },
    ],
    timeSlows: [{ x: 240, y: 240, width: 120, height: 120, slowFactor: 0.1 }],
    echoTrail: { delay: 500, trailLifetime: 8000, trailWidth: 16, maxSegments: 300 },
    dimensionTears: [
      { id: 1, x: 100, y: 100, radius: 20, linkedTearId: 2, color: 'hsla(270, 100%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 500, radius: 20, linkedTearId: 1, color: 'hsla(320, 100%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
  // === FINAL BOSS (597-600) ===
  {
    id: 597, name: "Void Ascension", mazeSize: 'large', balls: 2, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 20 },
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
      { x: 100, y: 100, radius: 15, type: 'hole' },
      { x: 500, y: 500, radius: 15, type: 'hole' },
    ],
    gravityFlips: [
      { x: 210, y: 210, width: 180, height: 180, flipDirection: 'vertical', strength: 2.5 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 80, strength: 3.0, falloff: 'quadratic' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    echoTrail: { delay: 600, trailLifetime: 6000, trailWidth: 14, maxSegments: 200 },
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 520, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 598, name: "Void Convergence", mazeSize: 'large', balls: 1, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 520, y: 520 }, goal: { x: 80, y: 80, radius: 20 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 200, y: 200, radius: 12, type: 'hole' },
      { x: 400, y: 200, radius: 12, type: 'hole' },
      { x: 200, y: 400, radius: 12, type: 'hole' },
      { x: 400, y: 400, radius: 12, type: 'hole' },
    ],
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 22, linkedTearId: 2, color: 'hsla(260, 100%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 500, y: 100, radius: 22, linkedTearId: 3, color: 'hsla(290, 100%, 55%, 1)', flipAxis: 'x' },
      { id: 3, x: 500, y: 500, radius: 22, linkedTearId: 4, color: 'hsla(320, 100%, 55%, 1)', flipAxis: 'y' },
      { id: 4, x: 100, y: 100, radius: 22, linkedTearId: 1, color: 'hsla(350, 100%, 55%, 1)', flipAxis: 'both' },
    ],
    timeSlows: [{ x: 250, y: 250, width: 100, height: 100, slowFactor: 0.1 }],
    phaseShifts: [{ id: 1, x: 270, y: 270, width: 30, height: 30, phaseDuration: 400, cooldown: 3000 }],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 300, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 3000 }],
  },
  {
    id: 599, name: "Void Singularity", mazeSize: 'large', balls: 2, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 18 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 30, type: 'hole' },
      { x: 200, y: 300, radius: 12, type: 'hole' },
      { x: 400, y: 300, radius: 12, type: 'hole' },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 200, strength: 3.0, falloff: 'quadratic' },
      { x: 80, y: 80, radius: 60, strength: -2.5, falloff: 'linear' },
      { x: 520, y: 520, radius: 60, strength: -2.5, falloff: 'linear' },
    ],
    gravityFlips: [
      { x: 160, y: 160, width: 130, height: 130, flipDirection: 'vertical', strength: 2.5 },
      { x: 310, y: 310, width: 130, height: 130, flipDirection: 'horizontal', strength: 2.5 },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    echoTrail: { delay: 500, trailLifetime: 8000, trailWidth: 16, maxSegments: 300 },
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 520, y: 80, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 600, name: "The Void Titan", mazeSize: 'large', balls: 2, difficulty: 10, category: 'voidboss', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 520, radius: 18 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 300, y: 100, width: 10, height: 180 },
      { x: 300, y: 380, width: 10, height: 180 },
      { x: 450, y: 150, width: 10, height: 300 },
      { x: 150, y: 300, width: 150, height: 10 },
      { x: 300, y: 300, width: 150, height: 10 },
    ],
    hazards: [
      { x: 220, y: 220, radius: 15, type: 'hole' },
      { x: 380, y: 380, radius: 15, type: 'hole' },
      { x: 220, y: 380, radius: 12, type: 'hole' },
      { x: 380, y: 220, radius: 12, type: 'hole' },
      { x: 300, y: 300, radius: 18, type: 'hole' },
    ],
    gravityFlips: [
      { x: 160, y: 160, width: 130, height: 130, flipDirection: 'vertical', strength: 2.5 },
      { x: 310, y: 310, width: 130, height: 130, flipDirection: 'horizontal', strength: 2.5 },
    ],
    gravityWells: [
      { x: 300, y: 300, radius: 100, strength: 3.0, falloff: 'quadratic' },
      { x: 80, y: 80, radius: 60, strength: -2.0, falloff: 'linear' },
      { x: 520, y: 520, radius: 60, strength: -2.0, falloff: 'linear' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    echoTrail: { delay: 400, trailLifetime: 10000, trailWidth: 16, maxSegments: 400 },
    timeSlows: [{ x: 250, y: 250, width: 100, height: 100, slowFactor: 0.1 }],
    dimensionTears: [
      { id: 1, x: 80, y: 520, radius: 22, linkedTearId: 2, color: 'hsla(260, 100%, 60%, 1)', flipAxis: 'both' },
      { id: 2, x: 520, y: 80, radius: 22, linkedTearId: 1, color: 'hsla(320, 100%, 60%, 1)', flipAxis: 'both' },
    ],
    phaseShifts: [
      { id: 1, x: 270, y: 270, width: 30, height: 30, phaseDuration: 400, cooldown: 3000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 520, y: 520, radius: 16, type: 'gem', points: 500 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 3000 }],
  },
];
