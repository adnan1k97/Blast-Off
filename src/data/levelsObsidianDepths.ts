import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const obsidianDepthsLevels: Level[] = [
  // === EASY (321-326) — Introduce Magma Flow & Cooling Platforms gently ===
  {
    id: 321, name: "First Flow", mazeSize: 'small', balls: 1, difficulty: 2, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    magmaFlows: [{ x: 220, y: 260, width: 160, height: 80, direction: 'right', speed: 2, damageRate: 8 }],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 450, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 322, name: "Cool Down", mazeSize: 'small', balls: 1, difficulty: 2, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    coolingPlatforms: [{ x: 250, y: 270, width: 100, height: 60, solidDuration: 3000, meltDuration: 2000, startOffset: 0 }],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 323, name: "Obsidian Walk", mazeSize: 'small', balls: 1, difficulty: 3, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 250, width: 200, height: 10 },
    ],
    hazards: [],
    magmaFlows: [
      { x: P, y: 260, width: 200, height: 60, direction: 'right', speed: 2.5, damageRate: 10 },
      { x: 300, y: 350, width: 200, height: 60, direction: 'left', speed: 2.5, damageRate: 10 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 324, name: "Phase Shift", mazeSize: 'small', balls: 1, difficulty: 3, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    coolingPlatforms: [
      { x: 200, y: 350, width: 200, height: 20, solidDuration: 2500, meltDuration: 1500, startOffset: 0 },
      { x: 200, y: 200, width: 200, height: 20, solidDuration: 2500, meltDuration: 1500, startOffset: 2000 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 325, name: "Drift River", mazeSize: 'small', balls: 1, difficulty: 3, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 300, y: 150, width: 10, height: 200 },
    ],
    hazards: [],
    magmaFlows: [
      { x: P, y: 400, width: S-2*P, height: 60, direction: 'right', speed: 3, damageRate: 10 },
    ],
    lavaPools: [{ x: 400, y: 200, width: 80, height: 80, damage: 15 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 200, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 326, name: "Solidify", mazeSize: 'small', balls: 1, difficulty: 3, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    coolingPlatforms: [
      { x: 150, y: 250, width: 100, height: 20, solidDuration: 3000, meltDuration: 2000, startOffset: 0 },
      { x: 350, y: 350, width: 100, height: 20, solidDuration: 3000, meltDuration: 2000, startOffset: 1500 },
    ],
    heatVents: [{ x: 300, y: 480, radius: 35, strength: 4, interval: 4000, duration: 1200, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (327-334) — Combining Magma Flow + Cooling Platforms, reusing Zone 1 mechanics ===
  {
    id: 327, name: "Molten Crossing", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 280, width: 200, height: 10 },
      { x: 300, y: 280, width: 260, height: 10 },
    ],
    hazards: [],
    magmaFlows: [
      { x: 200, y: 290, width: 100, height: 60, direction: 'down', speed: 3, damageRate: 12 },
    ],
    lavaPools: [{ x: 350, y: 400, width: 100, height: 60, damage: 18 }],
    heatVents: [{ x: 450, y: 200, radius: 35, strength: 5, interval: 3500, duration: 1000, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 328, name: "Timed Bridges", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    coolingPlatforms: [
      { x: 180, y: 280, width: 80, height: 40, solidDuration: 2500, meltDuration: 1500, startOffset: 0 },
      { x: 300, y: 280, width: 80, height: 40, solidDuration: 2500, meltDuration: 1500, startOffset: 1000 },
      { x: 420, y: 280, width: 80, height: 40, solidDuration: 2500, meltDuration: 1500, startOffset: 2000 },
    ],
    lavaPools: [
      { x: 160, y: 330, width: 120, height: 60, damage: 20 },
      { x: 320, y: 330, width: 120, height: 60, damage: 20 },
    ],
    collectibles: [
      { id: 1, x: 220, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 340, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 460, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 329, name: "Contra Flow", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 350, width: 200, height: 10 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [{ x: 450, y: 300, radius: 15, type: 'hole' }],
    magmaFlows: [
      { x: P, y: 210, width: 200, height: 50, direction: 'right', speed: 3, damageRate: 12 },
      { x: 300, y: 360, width: 200, height: 50, direction: 'left', speed: 3, damageRate: 12 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 280, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 330, name: "Melt & Freeze", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 250, height: 10 },
      { x: 300, y: 200, width: 260, height: 10 },
    ],
    hazards: [],
    coolingPlatforms: [
      { x: 250, y: 360, width: 100, height: 20, solidDuration: 2000, meltDuration: 1500, startOffset: 0 },
      { x: 250, y: 210, width: 100, height: 20, solidDuration: 2000, meltDuration: 1500, startOffset: 1000 },
    ],
    magmaFlows: [{ x: 200, y: 280, width: 200, height: 50, direction: 'right', speed: 2, damageRate: 10 }],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 331, name: "Lava Labyrinth", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 200 },
      { x: 200, y: 300, width: 10, height: 260 },
      { x: 400, y: P, width: 10, height: 350 },
    ],
    hazards: [{ x: 300, y: 200, radius: 15, type: 'hole' }],
    magmaFlows: [
      { x: 210, y: 250, width: 190, height: 50, direction: 'right', speed: 2.5, damageRate: 12 },
      { x: 210, y: 400, width: 190, height: 50, direction: 'left', speed: 2.5, damageRate: 12 },
    ],
    lavaPools: [{ x: 420, y: 400, width: 100, height: 80, damage: 20 }],
    collectibles: [
      { id: 1, x: 130, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 332, name: "Obsidian Chain", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    coolingPlatforms: [
      { x: 150, y: 280, width: 70, height: 40, solidDuration: 2000, meltDuration: 1200, startOffset: 0 },
      { x: 250, y: 280, width: 70, height: 40, solidDuration: 2000, meltDuration: 1200, startOffset: 800 },
      { x: 350, y: 280, width: 70, height: 40, solidDuration: 2000, meltDuration: 1200, startOffset: 1600 },
      { x: 450, y: 280, width: 70, height: 40, solidDuration: 2000, meltDuration: 1200, startOffset: 2400 },
    ],
    heatVents: [{ x: 300, y: 480, radius: 35, strength: 5, interval: 3000, duration: 1000, warningTime: 700 }],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 333, name: "Magma Gauntlet", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 250, width: 300, height: 10 },
    ],
    hazards: [],
    magmaFlows: [
      { x: P, y: 260, width: 150, height: 50, direction: 'right', speed: 3, damageRate: 14 },
      { x: 300, y: 410, width: 150, height: 50, direction: 'left', speed: 3, damageRate: 14 },
    ],
    lavaPools: [
      { x: 200, y: 330, width: 80, height: 60, damage: 22 },
      { x: 350, y: 150, width: 80, height: 60, damage: 22 },
    ],
    heatVents: [{ x: 200, y: 480, radius: 30, strength: 5, interval: 3000, duration: 1000, warningTime: 600 }],
    collectibles: [
      { id: 1, x: 450, y: 330, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 330, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 334, name: "Thermal Maze", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: P, width: 10, height: 250 },
      { x: 250, y: 350, width: 10, height: 210 },
    ],
    hazards: [{ x: 400, y: 250, radius: 15, type: 'hole' }],
    coolingPlatforms: [
      { x: 260, y: 260, width: 80, height: 30, solidDuration: 2200, meltDuration: 1300, startOffset: 0 },
      { x: 260, y: 350, width: 80, height: 30, solidDuration: 2200, meltDuration: 1300, startOffset: 1100 },
    ],
    magmaFlows: [{ x: 350, y: 300, width: 150, height: 50, direction: 'down', speed: 2.5, damageRate: 12 }],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (335-340) — Tight combos with all Zone 1+2 mechanics ===
  {
    id: 335, name: "Crucible", mazeSize: 'large', balls: 1, difficulty: 7, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 400, width: 200, height: 10 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    magmaFlows: [
      { x: P, y: 210, width: 200, height: 50, direction: 'right', speed: 3.5, damageRate: 15 },
      { x: 300, y: 410, width: 200, height: 50, direction: 'left', speed: 3.5, damageRate: 15 },
    ],
    lavaPools: [{ x: 200, y: 290, width: 200, height: 40, damage: 25 }],
    heatVents: [
      { x: 100, y: 480, radius: 35, strength: 6, interval: 2500, duration: 1000, warningTime: 600 },
      { x: 500, y: 150, radius: 35, strength: 6, interval: 2800, duration: 1000, warningTime: 600 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 100, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 336, name: "Shifting Ground", mazeSize: 'large', balls: 1, difficulty: 7, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 250, width: 300, height: 10 },
      { x: 150, y: 130, width: 300, height: 10 },
    ],
    hazards: [{ x: 200, y: 330, radius: 15, type: 'hole' }],
    coolingPlatforms: [
      { x: 200, y: 410, width: 80, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 0 },
      { x: 320, y: 410, width: 80, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 900 },
      { x: 200, y: 260, width: 80, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 600 },
      { x: 320, y: 260, width: 80, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 1500 },
    ],
    lavaPools: [
      { x: 150, y: 435, width: 300, height: 40, damage: 22 },
      { x: 150, y: 290, width: 300, height: 30, damage: 22 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 180, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 330, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 337, name: "River Run", mazeSize: 'large', balls: 1, difficulty: 7, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 300, y: 400, radius: 18, type: 'hole' },
    ],
    magmaFlows: [
      { x: P, y: 260, width: 200, height: 40, direction: 'right', speed: 3, damageRate: 14 },
      { x: 210, y: 350, width: 190, height: 40, direction: 'down', speed: 3, damageRate: 14 },
      { x: 410, y: 150, width: 150, height: 40, direction: 'left', speed: 3, damageRate: 14 },
    ],
    coolingPlatforms: [
      { x: 210, y: 260, width: 80, height: 30, solidDuration: 2000, meltDuration: 1200, startOffset: 0 },
    ],
    collectibles: [
      { id: 1, x: 130, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 338, name: "Forge Pit", mazeSize: 'large', balls: 1, difficulty: 8, category: 'coolingplatform', world: 'volcanic-core',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 300, width: 250, height: 10 },
      { x: 300, y: 300, width: 260, height: 10 },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    coolingPlatforms: [
      { x: 150, y: 310, width: 100, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 0 },
      { x: 350, y: 310, width: 100, height: 25, solidDuration: 1800, meltDuration: 1200, startOffset: 900 },
    ],
    magmaFlows: [
      { x: 260, y: 150, width: 80, height: 140, direction: 'down', speed: 3, damageRate: 15 },
      { x: 260, y: 360, width: 80, height: 140, direction: 'up', speed: 3, damageRate: 15 },
    ],
    lavaPools: [
      { x: P, y: 310, width: 110, height: 50, damage: 25 },
      { x: 450, y: 310, width: 110, height: 50, damage: 25 },
    ],
    heatVents: [{ x: 300, y: 480, radius: 35, strength: 6, interval: 2500, duration: 800, warningTime: 500 }],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 339, name: "Obsidian Core", mazeSize: 'large', balls: 1, difficulty: 8, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    magmaFlows: [
      { x: P, y: 420, width: 200, height: 50, direction: 'right', speed: 3.5, damageRate: 16 },
      { x: 210, y: 210, width: 190, height: 50, direction: 'down', speed: 3, damageRate: 14 },
      { x: 410, y: 300, width: 150, height: 50, direction: 'up', speed: 3, damageRate: 14 },
    ],
    coolingPlatforms: [
      { x: 210, y: 300, width: 80, height: 25, solidDuration: 1600, meltDuration: 1200, startOffset: 0 },
      { x: 320, y: 300, width: 80, height: 25, solidDuration: 1600, meltDuration: 1200, startOffset: 800 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 500, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 340, name: "Depth's End", mazeSize: 'large', balls: 1, difficulty: 8, category: 'magmaflow', world: 'volcanic-core',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 200, width: 250, height: 10 },
      { x: 300, y: 400, width: 260, height: 10 },
      { x: 250, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 150, y: 350, radius: 18, type: 'hole' },
      { x: 450, y: 250, radius: 18, type: 'hole' },
    ],
    magmaFlows: [
      { x: P, y: 210, width: 250, height: 40, direction: 'right', speed: 4, damageRate: 16 },
      { x: 260, y: 350, width: 40, height: 50, direction: 'up', speed: 3, damageRate: 14 },
      { x: 300, y: 410, width: 260, height: 40, direction: 'left', speed: 3.5, damageRate: 16 },
    ],
    coolingPlatforms: [
      { x: 350, y: 200, width: 80, height: 25, solidDuration: 1500, meltDuration: 1200, startOffset: 0 },
      { x: 150, y: 400, width: 80, height: 25, solidDuration: 1500, meltDuration: 1200, startOffset: 750 },
    ],
    lavaPools: [
      { x: P, y: 250, width: 100, height: 80, damage: 28 },
      { x: 400, y: 300, width: 100, height: 80, damage: 28 },
    ],
    heatVents: [
      { x: 450, y: 480, radius: 35, strength: 7, interval: 2500, duration: 800, warningTime: 500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 450, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
