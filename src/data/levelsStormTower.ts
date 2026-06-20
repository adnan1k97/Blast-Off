import { Level } from '@/types/game';

const P = 40;
const S = 600;

export const stormTowerLevels: Level[] = [
  // === EASY (241-244) ===
  {
    id: 241, name: "Static Charge", mazeSize: 'small', balls: 1, difficulty: 1, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 40 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [],
    lightningZones: [{ id: 1, x: 300, y: 300, radius: 60, warningDuration: 1500, strikeDuration: 500, interval: 4000, damage: 1 }],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 242, name: "Rising Air", mazeSize: 'small', balls: 1, difficulty: 2, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 300, width: 200, height: 10 },
    ],
    hazards: [],
    updrafts: [
      { x: 250, y: 100, width: 100, height: 200, strength: 2 },
      { x: 350, y: 310, width: 100, height: 200, strength: 2 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 243, name: "Thunder Path", mazeSize: 'small', balls: 1, difficulty: 2, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 50, warningDuration: 1200, strikeDuration: 400, interval: 3500, damage: 1 },
      { id: 2, x: 400, y: 400, radius: 50, warningDuration: 1200, strikeDuration: 400, interval: 3500, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
  },
  {
    id: 244, name: "Thermal Column", mazeSize: 'small', balls: 1, difficulty: 3, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 350, width: 200, height: 10 },
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [{ x: 300, y: 280, radius: 15, type: 'hole' }],
    updrafts: [
      { x: 100, y: 200, width: 80, height: 350, strength: 2.5 },
      { x: 420, y: P, width: 80, height: 350, strength: 2.5 },
    ],
    collectibles: [
      { id: 1, x: 140, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 460, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === MEDIUM (245-252) ===
  {
    id: 245, name: "Storm Front", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 250, y: 150, width: 10, height: 130 },
      { x: 250, y: 320, width: 10, height: 130 },
    ],
    hazards: [{ x: 400, y: 200, radius: 18, type: 'hole' }],
    lightningZones: [
      { id: 1, x: 300, y: 200, radius: 55, warningDuration: 1000, strikeDuration: 400, interval: 3000, damage: 1 },
      { id: 2, x: 300, y: 400, radius: 55, warningDuration: 1000, strikeDuration: 400, interval: 3000, damage: 1 },
    ],
    updrafts: [{ x: 350, y: 250, width: 80, height: 100, strength: 1.5 }],
    collectibles: [
      { id: 1, x: 180, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 180, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 246, name: "Updraft Maze", mazeSize: 'medium', balls: 1, difficulty: 4, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 380, width: 350, height: 10 },
      { x: 200, y: 220, width: 360, height: 10 },
    ],
    hazards: [{ x: 450, y: 450, radius: 18, type: 'hole' }],
    updrafts: [
      { x: 350, y: 230, width: 80, height: 150, strength: 2.5 },
      { x: 100, y: 100, width: 80, height: 280, strength: 2 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 247, name: "Lightning Alley", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 400, radius: 15, type: 'hole' },
      { x: 400, y: 200, radius: 15, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 45, warningDuration: 900, strikeDuration: 350, interval: 2800, damage: 1 },
      { id: 2, x: 300, y: 300, radius: 50, warningDuration: 1000, strikeDuration: 400, interval: 3200, damage: 1 },
      { id: 3, x: 400, y: 400, radius: 45, warningDuration: 900, strikeDuration: 350, interval: 2800, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 248, name: "Sky Lift", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 350, width: 150, height: 10 },
      { x: 300, y: 200, width: 150, height: 10 },
    ],
    hazards: [
      { x: 250, y: 450, radius: 18, type: 'hole' },
    ],
    updrafts: [
      { x: 80, y: 200, width: 60, height: 320, strength: 3 },
      { x: 300, y: P, width: 60, height: 200, strength: 2.5 },
      { x: 460, y: P, width: 60, height: 300, strength: 2 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 380, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 490, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 249, name: "Thunderstorm", mazeSize: 'medium', balls: 1, difficulty: 5, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [],
    lightningZones: [
      { id: 1, x: 200, y: 450, radius: 45, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
      { id: 2, x: 400, y: 450, radius: 45, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
      { id: 3, x: 300, y: 280, radius: 40, warningDuration: 1000, strikeDuration: 400, interval: 3000, damage: 1 },
    ],
    windGusts: [{ direction: 'up', strength: 1.5, interval: 5000, duration: 1000, warningTime: 800 }],
    collectibles: [
      { id: 1, x: 150, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 130, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 250, name: "Storm & Draft", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 300 }, goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [{ x: 300, y: 300, radius: 20, type: 'hole' }],
    lightningZones: [
      { id: 1, x: 200, y: 200, radius: 50, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
      { id: 2, x: 400, y: 400, radius: 50, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    updrafts: [
      { x: 250, y: 150, width: 100, height: 120, strength: 2.5 },
      { x: 250, y: 350, width: 100, height: 120, strength: 2.5 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 251, name: "Volt Runner", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: P, width: 10, height: 250 },
      { x: 400, y: 300, width: 10, height: 260 },
    ],
    hazards: [{ x: 300, y: 300, radius: 18, type: 'hole' }],
    lightningZones: [
      { id: 1, x: 120, y: 400, radius: 50, warningDuration: 700, strikeDuration: 300, interval: 2200, damage: 1 },
      { id: 2, x: 350, y: 200, radius: 45, warningDuration: 800, strikeDuration: 350, interval: 2500, damage: 1 },
      { id: 3, x: 480, y: 450, radius: 40, warningDuration: 900, strikeDuration: 300, interval: 2800, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 252, name: "Thermal Maze", mazeSize: 'medium', balls: 1, difficulty: 6, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 30 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 380, width: 300, height: 10 },
      { x: 250, y: 220, width: 310, height: 10 },
    ],
    hazards: [
      { x: 450, y: 450, radius: 18, type: 'hole' },
      { x: 150, y: 150, radius: 15, type: 'hole' },
    ],
    updrafts: [
      { x: 100, y: 100, width: 70, height: 280, strength: 3 },
      { x: 350, y: 230, width: 70, height: 150, strength: 2.5 },
      { x: 470, y: P, width: 70, height: 220, strength: 2 },
    ],
    lightningZones: [
      { id: 1, x: 300, y: 300, radius: 45, warningDuration: 1000, strikeDuration: 400, interval: 3000, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // === HARD (253-260) ===
  {
    id: 253, name: "Storm Spire", mazeSize: 'large', balls: 1, difficulty: 7, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 200, y: 300, radius: 18, type: 'hole' },
      { x: 400, y: 300, radius: 18, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 150, y: 150, radius: 50, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
      { id: 2, x: 300, y: 300, radius: 55, warningDuration: 800, strikeDuration: 350, interval: 2500, damage: 1 },
      { id: 3, x: 450, y: 450, radius: 50, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
    ],
    updrafts: [{ x: 250, y: 100, width: 100, height: 200, strength: 3 }],
    collectibles: [
      { id: 1, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 254, name: "Vortex Rise", mazeSize: 'large', balls: 1, difficulty: 7, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 400, width: 300, height: 10 },
      { x: 150, y: 250, width: 300, height: 10 },
      { x: 150, y: 130, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 330, radius: 15, type: 'hole' },
      { x: 400, y: 190, radius: 15, type: 'hole' },
    ],
    updrafts: [
      { x: 80, y: 130, width: 60, height: 430, strength: 3.5 },
      { x: 460, y: 130, width: 60, height: 430, strength: 3.5 },
      { x: 270, y: 260, width: 60, height: 140, strength: 2 },
    ],
    rotatingGears: [{ x: 300, y: 330, radius: 40, speed: 2, teeth: 6, clockwise: true }],
    collectibles: [
      { id: 1, x: 110, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 490, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 255, name: "Tesla Coil", mazeSize: 'large', balls: 2, difficulty: 7, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 150, y: 150, radius: 20, type: 'hole' },
      { x: 450, y: 150, radius: 20, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 300, radius: 50, warningDuration: 600, strikeDuration: 300, interval: 2000, damage: 1 },
      { id: 2, x: 400, y: 300, radius: 50, warningDuration: 700, strikeDuration: 350, interval: 2200, damage: 1 },
      { id: 3, x: 300, y: 450, radius: 45, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    windGusts: [{ direction: 'down', strength: 2.5, interval: 3000, duration: 600, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 256, name: "Eye of Storm", mazeSize: 'large', balls: 1, difficulty: 8, category: 'lightning', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 110,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 150, y: 200, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 2, x: 300, y: 150, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
      { id: 3, x: 450, y: 200, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 4, x: 200, y: 400, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2200, damage: 1 },
      { id: 5, x: 400, y: 400, radius: 45, warningDuration: 700, strikeDuration: 300, interval: 2200, damage: 1 },
    ],
    updrafts: [{ x: 250, y: 200, width: 100, height: 150, strength: 2 }],
    collectibles: [
      { id: 1, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 257, name: "Updraft Chain", mazeSize: 'large', balls: 1, difficulty: 8, category: 'updraft', world: 'sky-fortress',
    startPosition: { x: 80, y: 520 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: P, y: 400, width: 200, height: 10 },
      { x: 200, y: 280, width: 200, height: 10 },
      { x: 350, y: 150, width: 210, height: 10 },
    ],
    hazards: [
      { x: 300, y: 350, radius: 18, type: 'hole' },
      { x: 450, y: 220, radius: 15, type: 'hole' },
    ],
    updrafts: [
      { x: 80, y: 280, width: 60, height: 120, strength: 4 },
      { x: 250, y: 160, width: 60, height: 120, strength: 3.5 },
      { x: 430, y: P, width: 60, height: 150, strength: 3 },
    ],
    lightningZones: [
      { id: 1, x: 150, y: 350, radius: 40, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
      { id: 2, x: 400, y: 100, radius: 40, warningDuration: 800, strikeDuration: 300, interval: 2500, damage: 1 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 350, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 200, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 258, name: "Storm King", mazeSize: 'large', balls: 1, difficulty: 8, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 300, y: 520 }, goal: { x: 300, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 150, y: 350, width: 300, height: 10 },
      { x: 150, y: 200, width: 300, height: 10 },
    ],
    hazards: [
      { x: 150, y: 280, radius: 15, type: 'hole' },
      { x: 450, y: 280, radius: 15, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 200, y: 450, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 2, x: 400, y: 450, radius: 50, warningDuration: 600, strikeDuration: 250, interval: 1800, damage: 1 },
      { id: 3, x: 300, y: 280, radius: 40, warningDuration: 700, strikeDuration: 300, interval: 2000, damage: 1 },
      { id: 4, x: 200, y: 130, radius: 40, warningDuration: 800, strikeDuration: 350, interval: 2200, damage: 1 },
      { id: 5, x: 400, y: 130, radius: 40, warningDuration: 800, strikeDuration: 350, interval: 2200, damage: 1 },
    ],
    updrafts: [
      { x: 270, y: 200, width: 60, height: 150, strength: 3 },
    ],
    windGusts: [{ direction: 'left', strength: 2, interval: 3000, duration: 500, warningTime: 400 }],
    collectibles: [
      { id: 1, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 300, y: 250, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 259, name: "Supercell", mazeSize: 'large', balls: 2, difficulty: 9, category: 'lightning', world: 'sky-fortress',
    isDarkMode: true, spotlightRadius: 90,
    startPosition: { x: 80, y: 80 }, goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
    ],
    hazards: [
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 150, y: 200, radius: 45, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 2, x: 300, y: 300, radius: 50, warningDuration: 600, strikeDuration: 300, interval: 1800, damage: 1 },
      { id: 3, x: 450, y: 200, radius: 45, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 4, x: 150, y: 400, radius: 45, warningDuration: 600, strikeDuration: 300, interval: 1800, damage: 1 },
      { id: 5, x: 450, y: 400, radius: 45, warningDuration: 600, strikeDuration: 300, interval: 1800, damage: 1 },
    ],
    updrafts: [
      { x: 270, y: 200, width: 60, height: 200, strength: 3.5 },
    ],
    rotatingGears: [{ x: 300, y: 300, radius: 40, speed: 2, teeth: 6, clockwise: true }],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
  },
  {
    id: 260, name: "Wrath of Zeus", mazeSize: 'large', balls: 2, difficulty: 9, category: 'lightning', world: 'sky-fortress',
    startPosition: { x: 300, y: 300 }, goal: { x: 520, y: 80, radius: 25 },
    walls: [
      { x: P, y: P, width: S-2*P, height: 10 }, { x: P, y: S-P-10, width: S-2*P, height: 10 },
      { x: P, y: P, width: 10, height: S-2*P }, { x: S-P-10, y: P, width: 10, height: S-2*P },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 100, y: 100, radius: 18, type: 'hole' },
      { x: 500, y: 500, radius: 18, type: 'hole' },
    ],
    lightningZones: [
      { id: 1, x: 150, y: 300, radius: 50, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 2, x: 450, y: 300, radius: 50, warningDuration: 500, strikeDuration: 250, interval: 1500, damage: 1 },
      { id: 3, x: 300, y: 150, radius: 40, warningDuration: 600, strikeDuration: 300, interval: 1800, damage: 1 },
      { id: 4, x: 300, y: 450, radius: 40, warningDuration: 600, strikeDuration: 300, interval: 1800, damage: 1 },
    ],
    updrafts: [
      { x: 220, y: 210, width: 160, height: 80, strength: 4 },
    ],
    windGusts: [
      { direction: 'right', strength: 3, interval: 2000, duration: 400, warningTime: 300 },
      { direction: 'up', strength: 4, interval: 3000, duration: 500, warningTime: 400 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 2, x: 520, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 3, x: 80, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
  },
];
