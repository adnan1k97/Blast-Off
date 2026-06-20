import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const mirrorHallsLevels: Level[] = [
  {
    id: 521, name: "Mirror Image", mazeSize: 'small', balls: 1, difficulty: 1, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 150, radius: 20, type: 'hole' }],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 12, isLethal: true },
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 522, name: "Split Realm", mazeSize: 'small', balls: 1, difficulty: 1, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 200, width: 100, height: 10 },
    ],
    hazards: [],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 3000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 523, name: "Doppelganger", mazeSize: 'small', balls: 1, difficulty: 2, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 150, y: 300 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 18, type: 'hole' },
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 12, isLethal: true },
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 500, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 524, name: "Layer Shift", mazeSize: 'small', balls: 1, difficulty: 2, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 400, height: 10 },
      { x: 150, y: 200, width: 410, height: 10 },
    ],
    hazards: [{ x: 300, y: 280, radius: 20, type: 'hole' }],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 2500 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 2500 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 525, name: "Shadow Dance", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 200, height: 10 },
      { x: 200, y: 300, width: 200, height: 10 },
      { x: 200, y: 450, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 80, radius: 15, type: 'hole' },
      { x: 300, y: 520, radius: 15, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 12, isLethal: true },
    collectibles: [
      { id: 1, x: 150, y: 220, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 380, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 526, name: "Reality Flux", mazeSize: 'medium', balls: 1, difficulty: 3, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 35 },
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
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 2000 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 2000 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 527, name: "Clone Maze", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 150, y: 150 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 350, y: 200, radius: 18, type: 'hole' },
      { x: 200, y: 400, radius: 18, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 11, isLethal: true },
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 528, name: "Dual Layers", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 350, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 280, y: 300, radius: 20, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1800 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 1800 },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 280, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 280, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 529, name: "Phantom Pursuit", mazeSize: 'large', balls: 1, difficulty: 5, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
      { x: 300, y: 150, width: 10, height: 150 },
      { x: 300, y: 300, width: 10, height: 150 },
    ],
    hazards: [
      { x: 200, y: 220, radius: 15, type: 'hole' },
      { x: 400, y: 370, radius: 15, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 11, isLethal: true },
    dimensionTears: [
      { id: 1, x: 100, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(280, 80%, 60%, 1)', flipAxis: 'y' },
      { id: 2, x: 500, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(320, 80%, 60%, 1)', flipAxis: 'y' },
    ],
    collectibles: [
      { id: 1, x: 200, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 530, name: "Reality Shatter", mazeSize: 'large', balls: 1, difficulty: 5, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 200, width: 230, height: 10 },
      { x: 330, y: 200, width: 230, height: 10 },
      { x: P, y: 400, width: 230, height: 10 },
      { x: 330, y: 400, width: 230, height: 10 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 2200 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 2200 },
    ],
    phaseShifts: [
      { id: 1, x: 280, y: 220, width: 40, height: 40, phaseDuration: 1000, cooldown: 2000 },
      { id: 2, x: 280, y: 420, width: 40, height: 40, phaseDuration: 1000, cooldown: 2000 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
  // === HARD (531-536) ===
  {
    id: 531, name: "Mirror Duel", mazeSize: 'large', balls: 1, difficulty: 6, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 28 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 100, width: 10, height: 180 },
      { x: 200, y: 350, width: 10, height: 210 },
      { x: 400, y: 100, width: 10, height: 180 },
      { x: 400, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
      { x: 150, y: 300, radius: 12, type: 'hole' },
      { x: 450, y: 300, radius: 12, type: 'hole' },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 11, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 532, name: "Phase Split", mazeSize: 'large', balls: 1, difficulty: 6, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 300, height: 10 },
      { x: 150, y: 450, width: 300, height: 10 },
    ],
    hazards: [
      { x: 300, y: 220, radius: 18, type: 'hole' },
      { x: 300, y: 380, radius: 18, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1500 },
    ],
    phaseShifts: [
      { id: 1, x: 260, y: 160, width: 40, height: 40, phaseDuration: 800, cooldown: 1800 },
      { id: 2, x: 260, y: 310, width: 40, height: 40, phaseDuration: 800, cooldown: 1800 },
      { id: 3, x: 260, y: 460, width: 40, height: 40, phaseDuration: 800, cooldown: 1800 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 533, name: "Clone Convergence", mazeSize: 'large', balls: 1, difficulty: 7, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 100, y: 200, width: 180, height: 10 },
      { x: 320, y: 200, width: 180, height: 10 },
      { x: 100, y: 400, width: 180, height: 10 },
      { x: 320, y: 400, width: 180, height: 10 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    dimensionTears: [
      { id: 1, x: 100, y: 100, radius: 20, linkedTearId: 2, color: 'hsla(270, 85%, 55%, 1)', flipAxis: 'y' },
      { id: 2, x: 500, y: 500, radius: 20, linkedTearId: 1, color: 'hsla(310, 85%, 55%, 1)', flipAxis: 'y' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 500, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 534, name: "Fracture Point", mazeSize: 'large', balls: 1, difficulty: 7, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 200, width: 10, height: 200 },
      { x: 300, y: 100, width: 10, height: 200 },
      { x: 300, y: 400, width: 10, height: 160 },
      { x: 450, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 220, y: 300, radius: 15, type: 'hole' },
      { x: 380, y: 300, radius: 15, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1600 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 1600 },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 220, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 380, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 535, name: "Shadow Labyrinth", mazeSize: 'large', balls: 2, difficulty: 8, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: P, width: 10, height: 250 },
      { x: 300, y: 200, width: 10, height: 360 },
      { x: 450, y: P, width: 10, height: 250 },
    ],
    hazards: [
      { x: 220, y: 400, radius: 15, type: 'hole' },
      { x: 380, y: 400, radius: 15, type: 'hole' },
      { x: 300, y: 100, radius: 18, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 220, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 380, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 536, name: "Layered Chaos", mazeSize: 'large', balls: 1, difficulty: 8, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 520, y: 520 }, goal: { x: 80, y: 80, radius: 25 },
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
      { x: 100, y: 500, radius: 15, type: 'hole' },
      { x: 500, y: 100, radius: 15, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1400 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 1400 },
    ],
    dimensionTears: [
      { id: 1, x: 500, y: 500, radius: 20, linkedTearId: 2, color: 'hsla(280, 90%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 100, y: 100, radius: 20, linkedTearId: 1, color: 'hsla(310, 90%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === BOSS (537-540) ===
  {
    id: 537, name: "Clone Crisis", mazeSize: 'large', balls: 2, difficulty: 9, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 150, y: 150 }, goal: { x: 450, y: 450, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 100, width: 10, height: 200 },
      { x: 350, y: 300, width: 10, height: 200 },
      { x: 150, y: 300, width: 200, height: 10 },
      { x: 350, y: 300, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 400, radius: 15, type: 'hole' },
      { x: 150, y: 400, radius: 12, type: 'hole' },
      { x: 450, y: 200, radius: 12, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 150, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
  {
    id: 538, name: "Reality Collapse", mazeSize: 'large', balls: 1, difficulty: 9, category: 'realitysplit', world: 'dimension-nexus',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 120, y: 120, width: 360, height: 10 },
      { x: 120, y: 250, width: 360, height: 10 },
      { x: 120, y: 380, width: 360, height: 10 },
    ],
    hazards: [
      { x: 200, y: 190, radius: 15, type: 'hole' },
      { x: 400, y: 190, radius: 15, type: 'hole' },
      { x: 300, y: 320, radius: 15, type: 'hole' },
      { x: 200, y: 450, radius: 15, type: 'hole' },
      { x: 400, y: 450, radius: 15, type: 'hole' },
    ],
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1200 },
      { id: 2, layer: 'B', activeLayer: 'A', switchInterval: 1200 },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 539, name: "Dimensional Maze", mazeSize: 'large', balls: 1, difficulty: 9, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 520, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 150, width: 10, height: 300 },
      { x: 300, y: 100, width: 10, height: 180 },
      { x: 300, y: 380, width: 10, height: 180 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 220, y: 300, radius: 15, type: 'hole' },
      { x: 380, y: 300, radius: 15, type: 'hole' },
      { x: 300, y: 200, radius: 12, type: 'hole' },
      { x: 300, y: 400, radius: 12, type: 'hole' },
    ],
    mirrorClone: { axis: 'x', centerLine: 300, cloneRadius: 10, isLethal: true },
    phaseShifts: [
      { id: 1, x: 270, y: 280, width: 30, height: 40, phaseDuration: 600, cooldown: 2000 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 220, y: 500, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 540, name: "The Mirror Gate", mazeSize: 'large', balls: 2, difficulty: 10, category: 'mirrorclone', world: 'dimension-nexus',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 22 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 220 },
      { x: 200, y: 340, width: 10, height: 220 },
      { x: 400, y: P, width: 10, height: 220 },
      { x: 400, y: 340, width: 10, height: 220 },
      { x: 200, y: 300, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
      { x: 150, y: 200, radius: 12, type: 'hole' },
      { x: 450, y: 400, radius: 12, type: 'hole' },
    ],
    mirrorClone: { axis: 'y', centerLine: 300, cloneRadius: 10, isLethal: true },
    realitySplits: [
      { id: 1, layer: 'A', activeLayer: 'A', switchInterval: 1200 },
    ],
    dimensionTears: [
      { id: 1, x: 300, y: 250, radius: 18, linkedTearId: 2, color: 'hsla(280, 100%, 55%, 1)', flipAxis: 'both' },
      { id: 2, x: 300, y: 350, radius: 18, linkedTearId: 1, color: 'hsla(320, 100%, 55%, 1)', flipAxis: 'both' },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 2, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 4000 }],
  },
];
