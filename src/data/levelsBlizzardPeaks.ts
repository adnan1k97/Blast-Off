import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const blizzardPeaksLevels: Level[] = [
  // === EASY (441-444) ===
  {
    id: 441, name: "Blizzard Warning", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    blizzard: { direction: 'right', strength: 1.5, interval: 8000, duration: 3000, warningTime: 2000, visibilityRadius: 150 },
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 442, name: "Icicle Rain", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    icicleDrops: [
      { id: 1, x: 200, y: 300, radius: 30, interval: 5000, warningTime: 1500, dropDuration: 1000 },
      { id: 2, x: 400, y: 300, radius: 30, interval: 5000, warningTime: 1500, dropDuration: 1000 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 443, name: "Storm Path", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 300, width: 200, height: 10 },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }],
    blizzard: { direction: 'left', strength: 2, interval: 7000, duration: 2500, warningTime: 1500, visibilityRadius: 130 },
    snowdrifts: [{ x: 250, y: 350, width: 100, height: 100, friction: 0.4, slowFactor: 0.5 }],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 444, name: "Falling Spikes", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 15, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 200, y: 200, radius: 25, interval: 4000, warningTime: 1200, dropDuration: 800 },
      { id: 2, x: 400, y: 200, radius: 25, interval: 4000, warningTime: 1200, dropDuration: 800 },
      { id: 3, x: 300, y: 400, radius: 25, interval: 4000, warningTime: 1200, dropDuration: 800 },
    ],
    thawingIces: [{ id: 1, x: 250, y: 250, width: 100, height: 100, thawTime: 2000, respawnTime: 4000 }],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (445-452) ===
  {
    id: 445, name: "Whiteout", mazeSize: 'large', balls: 1, difficulty: 7, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    blizzard: { direction: 'up', strength: 2.5, interval: 6000, duration: 2000, warningTime: 1200, visibilityRadius: 120 },
    icicleDrops: [
      { id: 1, x: 300, y: 200, radius: 25, interval: 4500, warningTime: 1000, dropDuration: 800 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 446, name: "Icicle Gauntlet", mazeSize: 'large', balls: 1, difficulty: 7, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 400, radius: 15, type: 'hole' }, { x: 400, y: 200, radius: 15, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 150, y: 200, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
      { id: 2, x: 300, y: 300, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
      { id: 3, x: 450, y: 400, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
      { id: 4, x: 200, y: 500, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 150, radius: 25, strength: 4, interval: 4000, duration: 1000, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.4 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 447, name: "Frozen Storm", mazeSize: 'large', balls: 1, difficulty: 7, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 80 }, goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 18, type: 'hole' }, { x: 450, y: 300, radius: 18, type: 'hole' }],
    blizzard: { direction: 'down', strength: 2, interval: 5000, duration: 2000, warningTime: 1000, visibilityRadius: 110 },
    iceBridges: [
      { id: 1, x: 200, y: 250, width: 200, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2500 },
      { id: 2, x: 200, y: 380, width: 200, height: 30, crackTime: 800, breakTime: 500, respawnTime: 2500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 448, name: "Peak Assault", mazeSize: 'large', balls: 1, difficulty: 8, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 350, width: 350, height: 10 },
      { x: 200, y: 200, width: 360, height: 10 },
    ],
    hazards: [{ x: 300, y: 280, radius: 18, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 150, y: 450, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
      { id: 2, x: 350, y: 450, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
      { id: 3, x: 250, y: 150, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
      { id: 4, x: 450, y: 150, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
    ],
    blizzard: { direction: 'right', strength: 1.5, interval: 8000, duration: 2500, warningTime: 1500, visibilityRadius: 130 },
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 449, name: "Tempest", mazeSize: 'large', balls: 1, difficulty: 8, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }, { x: 300, y: 300, radius: 18, type: 'hole' }],
    blizzard: { direction: 'left', strength: 3, interval: 5000, duration: 2000, warningTime: 1000, visibilityRadius: 100 },
    icicleDrops: [
      { id: 1, x: 200, y: 400, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
      { id: 2, x: 400, y: 200, radius: 25, interval: 3500, warningTime: 1000, dropDuration: 700 },
    ],
    snowdrifts: [{ x: 250, y: 250, width: 100, height: 100, friction: 0.5, slowFactor: 0.3 }],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 450, name: "Eye of the Storm", mazeSize: 'large', balls: 1, difficulty: 8, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 80, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 150, radius: 18, type: 'hole' }, { x: 450, y: 450, radius: 18, type: 'hole' }],
    blizzard: { direction: 'down', strength: 2.5, interval: 5000, duration: 2000, warningTime: 1000, visibilityRadius: 110 },
    icicleDrops: [
      { id: 1, x: 200, y: 300, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
      { id: 2, x: 400, y: 300, radius: 25, interval: 3000, warningTime: 800, dropDuration: 600 },
    ],
    frozenGeysers: [
      { id: 1, x: 300, y: 450, radius: 25, strength: 5, interval: 4000, duration: 1000, warningTime: 800, freezeDuration: 1500, freezeFactor: 0.35 },
    ],
    collectibles: [
      { id: 1, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 451, name: "Crystal Storm", mazeSize: 'large', balls: 1, difficulty: 8, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 150, y: 200, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 300, y: 150, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 3, x: 450, y: 200, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 4, x: 150, y: 400, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 5, x: 450, y: 400, radius: 22, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 452, name: "Blizzard Maze", mazeSize: 'large', balls: 1, difficulty: 8, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 400, width: 350, height: 10 },
      { x: 200, y: 250, width: 360, height: 10 },
      { x: P, y: 130, width: 350, height: 10 },
    ],
    hazards: [{ x: 250, y: 170, radius: 15, type: 'hole' }, { x: 400, y: 330, radius: 15, type: 'hole' }],
    blizzard: { direction: 'right', strength: 2.5, interval: 5000, duration: 2000, warningTime: 1000, visibilityRadius: 100 },
    iceBridges: [
      { id: 1, x: 50, y: 410, width: 120, height: 25, crackTime: 700, breakTime: 400, respawnTime: 2000 },
      { id: 2, x: 350, y: 260, width: 120, height: 25, crackTime: 700, breakTime: 400, respawnTime: 2000 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (453-460) ===
  {
    id: 453, name: "Arctic Fury", mazeSize: 'large', balls: 1, difficulty: 9, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }, { x: 200, y: 400, radius: 15, type: 'hole' }, { x: 400, y: 200, radius: 15, type: 'hole' }],
    blizzard: { direction: 'up', strength: 3, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 90 },
    icicleDrops: [
      { id: 1, x: 300, y: 200, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 300, y: 400, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 300, radius: 15, type: 'shield', duration: 6000 }],
  },
  {
    id: 454, name: "Icicle Cascade", mazeSize: 'large', balls: 1, difficulty: 9, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 150, y: 150, radius: 22, interval: 2000, warningTime: 600, dropDuration: 500 },
      { id: 2, x: 300, y: 200, radius: 22, interval: 2000, warningTime: 600, dropDuration: 500 },
      { id: 3, x: 450, y: 250, radius: 22, interval: 2000, warningTime: 600, dropDuration: 500 },
      { id: 4, x: 200, y: 400, radius: 22, interval: 2000, warningTime: 600, dropDuration: 500 },
      { id: 5, x: 400, y: 450, radius: 22, interval: 2000, warningTime: 600, dropDuration: 500 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 260, width: 100, height: 30, crackTime: 600, breakTime: 300, respawnTime: 1500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 455, name: "Storm Breaker", mazeSize: 'large', balls: 1, difficulty: 9, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    blizzard: { direction: 'down', strength: 3, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 90 },
    frozenGeysers: [
      { id: 1, x: 300, y: 200, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
      { id: 2, x: 300, y: 400, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 456, name: "Frozen Peaks", mazeSize: 'large', balls: 1, difficulty: 9, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 150, y: 300, radius: 15, type: 'hole' }, { x: 450, y: 300, radius: 15, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 200, y: 200, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 400, y: 200, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 3, x: 200, y: 400, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 4, x: 400, y: 400, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    blizzard: { direction: 'left', strength: 2, interval: 6000, duration: 2000, warningTime: 1000, visibilityRadius: 120 },
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 457, name: "Blizzard Boss", mazeSize: 'large', balls: 1, difficulty: 10, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 18, type: 'hole' }, { x: 400, y: 400, radius: 18, type: 'hole' }, { x: 200, y: 400, radius: 15, type: 'hole' }, { x: 400, y: 200, radius: 15, type: 'hole' }],
    blizzard: { direction: 'right', strength: 3.5, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 80 },
    icicleDrops: [
      { id: 1, x: 300, y: 200, radius: 25, interval: 2000, warningTime: 600, dropDuration: 500 },
      { id: 2, x: 300, y: 400, radius: 25, interval: 2000, warningTime: 600, dropDuration: 500 },
    ],
    frozenGeysers: [
      { id: 1, x: 150, y: 300, radius: 25, strength: 5, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.25 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 6000 }],
  },
  {
    id: 458, name: "Peak Challenge", mazeSize: 'large', balls: 1, difficulty: 10, category: 'icicledrop', world: 'frozen-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 25, type: 'hole' }],
    icicleDrops: [
      { id: 1, x: 150, y: 150, radius: 22, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 2, x: 300, y: 200, radius: 22, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 3, x: 450, y: 150, radius: 22, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 4, x: 150, y: 450, radius: 22, interval: 1800, warningTime: 500, dropDuration: 400 },
      { id: 5, x: 450, y: 450, radius: 22, interval: 1800, warningTime: 500, dropDuration: 400 },
    ],
    blizzard: { direction: 'up', strength: 2, interval: 5000, duration: 1500, warningTime: 800, visibilityRadius: 100 },
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 459, name: "Frost Fury", mazeSize: 'large', balls: 1, difficulty: 10, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 300, radius: 18, type: 'hole' }, { x: 400, y: 300, radius: 18, type: 'hole' }],
    blizzard: { direction: 'left', strength: 3.5, interval: 3500, duration: 1500, warningTime: 700, visibilityRadius: 80 },
    icicleDrops: [
      { id: 1, x: 300, y: 300, radius: 30, interval: 2000, warningTime: 600, dropDuration: 500 },
    ],
    frozenGeysers: [
      { id: 1, x: 200, y: 200, radius: 25, strength: 6, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.2 },
      { id: 2, x: 400, y: 400, radius: 25, strength: 6, interval: 3000, duration: 800, warningTime: 500, freezeDuration: 2000, freezeFactor: 0.2 },
    ],
    iceBridges: [
      { id: 1, x: 250, y: 250, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
      { id: 2, x: 250, y: 400, width: 100, height: 25, crackTime: 500, breakTime: 300, respawnTime: 1500 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 520, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 150, radius: 15, type: 'shield', duration: 5000 }],
  },
  {
    id: 460, name: "Blizzard Peaks Finale", mazeSize: 'large', balls: 1, difficulty: 10, category: 'blizzard', world: 'frozen-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 25 },
    isDarkMode: true, spotlightRadius: 100,
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 200, y: 200, radius: 15, type: 'hole' }, { x: 400, y: 400, radius: 15, type: 'hole' }, { x: 300, y: 300, radius: 20, type: 'hole' }],
    blizzard: { direction: 'down', strength: 3, interval: 4000, duration: 1500, warningTime: 800, visibilityRadius: 80 },
    icicleDrops: [
      { id: 1, x: 200, y: 300, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
      { id: 2, x: 400, y: 300, radius: 25, interval: 2500, warningTime: 700, dropDuration: 500 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [{ id: 1, x: 300, y: 450, radius: 15, type: 'shield', duration: 8000 }],
  },
];
