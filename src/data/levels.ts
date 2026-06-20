import { Level, PowerUp } from '@/types/game';
import { expansionLevels } from './levelsExpansion';
import { sunkenTempleLevels } from './levelsSunkenTemple';
import { deepTrenchLevels } from './levelsDeepTrench';
import { sunkenCityLevels } from './levelsSunkenCity';
import { krakensDenLevels } from './levelsKrakensDen';
import { abyssCoreLevels } from './levelsAbyssCore';
import { cloudGardensLevels } from './levelsCloudGardens';
import { gearSpireLevels } from './levelsGearSpire';
import { stormTowerLevels } from './levelsStormTower';
import { brokenBridgeLevels } from './levelsBrokenBridge';
import { celestialPinnacleLevels } from './levelsCelestialPinnacle';
import { cinderTunnelsLevels } from './levelsCinderTunnels';
import { obsidianDepthsLevels } from './levelsObsidianDepths';
import { pyroclasmLevels } from './levelsPyroclasm';
import { magmaFallsLevels } from './levelsMagmaFalls';
import { infernoSanctumLevels } from './levelsInfernoSanctum';
import { frostbitePassLevels } from './levelsFrostbitePas';
import { glacierDepthsLevels } from './levelsGlacierDepths';
import { blizzardPeaksLevels } from './levelsBlizzardPeaks';
import { avalancheRidgeLevels } from './levelsAvalancheRidge';
import { permafrostSanctumLevels } from './levelsPermafrostSanctum';
import { phaseRiftLevels } from './levelsPhaseRift';
import { mirrorHallsLevels } from './levelsMirrorHalls';
import { gravityNexusLevels } from './levelsGravityNexus';
import { temporalCorridorsLevels } from './levelsTemporalCorridors';
import { voidSanctumLevels } from './levelsVoidSanctum';
// Canvas is 600x600, with padding
const CANVAS_SIZE = 600;
const PADDING = 40;

export const levels: Level[] = [
  // =============================================
  // EASY LEVELS (1-8) - 20% of 40 = 8 levels
  // =============================================
  
  // Level 1 - Introduction
  {
    id: 1,
    name: "First Steps",
    mazeSize: 'small',
    balls: 1,
    difficulty: 1,
    category: 'basic',
    startPosition: { x: 100, y: 100 },
    goal: { x: 500, y: 500, radius: 40 },
    walls: [
      // Outer walls
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Simple guide wall
      { x: 200, y: 200, width: 200, height: 10 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 200, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 400, radius: 12, type: 'coin', points: 100 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 200, radius: 15, type: 'speed', duration: 8000 },
    ],
  },
  // Level 2 - Corridor
  {
    id: 2,
    name: "The Corridor",
    mazeSize: 'small',
    balls: 1,
    difficulty: 1,
    category: 'basic',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Corridor walls
      { x: PADDING, y: 200, width: 400, height: 10 },
      { x: PADDING, y: 400, width: 400, height: 10 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 200, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 350, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 300, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 3 - S-Curve
  {
    id: 3,
    name: "S-Curve",
    mazeSize: 'small',
    balls: 1,
    difficulty: 2,
    category: 'basic',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // S-curve walls
      { x: 150, y: PADDING, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 210 },
      { x: 300, y: PADDING, width: 10, height: 350 },
      { x: 450, y: 200, width: 10, height: 360 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 80, y: 280, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 220, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 220, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 370, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 280, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 4 - Zigzag
  {
    id: 4,
    name: "Zigzag",
    mazeSize: 'small',
    balls: 1,
    difficulty: 2,
    category: 'basic',
    startPosition: { x: 80, y: 520 },
    goal: { x: 520, y: 80, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Zigzag
      { x: PADDING, y: 450, width: 400, height: 10 },
      { x: 150, y: 350, width: 410, height: 10 },
      { x: PADDING, y: 250, width: 400, height: 10 },
      { x: 150, y: 150, width: 410, height: 10 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 500, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 100, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 100, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 300, radius: 15, type: 'speed', duration: 7000 },
    ],
  },
  // Level 5 - First Hazard
  {
    id: 5,
    name: "Watch Your Step",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 3,
    category: 'hazard',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 6000 },
    ],
  },
  // Level 6 - Narrow Passage
  {
    id: 6,
    name: "Tight Squeeze",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 3,
    category: 'hazard',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Narrow passages
      { x: 150, y: PADDING, width: 10, height: 420 },
      { x: 250, y: 140, width: 10, height: 420 },
      { x: 350, y: PADDING, width: 10, height: 420 },
      { x: 450, y: 140, width: 10, height: 420 },
    ],
    hazards: [
      { x: 200, y: 500, radius: 20, type: 'hole' },
      { x: 300, y: 100, radius: 20, type: 'hole' },
      { x: 400, y: 500, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 400, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 500, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 80, radius: 15, type: 'shield', duration: 6000 },
    ],
  },
  // Level 7 - The Maze
  {
    id: 7,
    name: "Classic Maze",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 4,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Maze walls
      { x: 120, y: 120, width: 200, height: 10 },
      { x: 120, y: 120, width: 10, height: 150 },
      { x: 200, y: 200, width: 10, height: 150 },
      { x: 200, y: 340, width: 200, height: 10 },
      { x: 390, y: 200, width: 10, height: 150 },
      { x: 300, y: 200, width: 100, height: 10 },
      { x: 300, y: 120, width: 10, height: 90 },
      { x: 300, y: 120, width: 160, height: 10 },
      { x: 450, y: 120, width: 10, height: 200 },
      { x: 120, y: 420, width: 280, height: 10 },
      { x: 400, y: 340, width: 10, height: 150 },
      { x: 400, y: 480, width: 80, height: 10 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 250, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 250, y: 270, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 160, y: 380, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 350, y: 450, radius: 15, type: 'speed', duration: 8000 },
      { id: 2, x: 160, y: 160, radius: 15, type: 'multiplier', duration: 12000 },
    ],
  },
  // Level 8 - Danger Zone
  {
    id: 8,
    name: "Danger Zone",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 4,
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Spiral pattern
      { x: 120, y: 150, width: 360, height: 10 },
      { x: 470, y: 150, width: 10, height: 200 },
      { x: 120, y: 340, width: 360, height: 10 },
      { x: 120, y: 150, width: 10, height: 200 },
    ],
    hazards: [
      { x: 150, y: 250, radius: 20, type: 'hole' },
      { x: 250, y: 250, radius: 20, type: 'hole' },
      { x: 350, y: 250, radius: 20, type: 'hole' },
      { x: 450, y: 250, radius: 20, type: 'hole' },
      { x: 200, y: 450, radius: 20, type: 'hole' },
      { x: 400, y: 450, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 520, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 200, radius: 15, type: 'shield', duration: 5000 },
    ],
  },
  // Level 9 - Precision
  {
    id: 9,
    name: "Precision",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Narrow corridor with obstacles
      { x: PADDING, y: 250, width: 150, height: 10 },
      { x: PADDING, y: 350, width: 150, height: 10 },
      { x: 230, y: 200, width: 10, height: 80 },
      { x: 230, y: 320, width: 10, height: 80 },
      { x: 320, y: 250, width: 10, height: 100 },
      { x: 410, y: 200, width: 10, height: 80 },
      { x: 410, y: 320, width: 10, height: 80 },
    ],
    hazards: [
      { x: 180, y: 300, radius: 15, type: 'hole' },
      { x: 280, y: 230, radius: 15, type: 'hole' },
      { x: 280, y: 370, radius: 15, type: 'hole' },
      { x: 370, y: 300, radius: 15, type: 'hole' },
      { x: 460, y: 230, radius: 15, type: 'hole' },
      { x: 460, y: 370, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 520, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 520, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 140, y: 300, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 480, y: 300, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 10 - The Gauntlet
  {
    id: 10,
    name: "The Gauntlet",
    mazeSize: 'large',
    balls: 1,
    difficulty: 5,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Complex maze
      { x: 140, y: PADDING, width: 10, height: 120 },
      { x: 140, y: 200, width: 10, height: 280 },
      { x: 140, y: 200, width: 100, height: 10 },
      { x: 230, y: 140, width: 10, height: 70 },
      { x: 230, y: 280, width: 10, height: 200 },
      { x: 230, y: 470, width: 230, height: 10 },
      { x: 320, y: PADDING, width: 10, height: 200 },
      { x: 320, y: 280, width: 10, height: 120 },
      { x: 320, y: 280, width: 140, height: 10 },
      { x: 410, y: 140, width: 10, height: 150 },
      { x: 410, y: 360, width: 10, height: 120 },
      { x: 450, y: 360, width: 110, height: 10 },
    ],
    hazards: [
      { x: 180, y: 140, radius: 18, type: 'hole' },
      { x: 280, y: 350, radius: 18, type: 'hole' },
      { x: 370, y: 180, radius: 18, type: 'hole' },
      { x: 370, y: 420, radius: 18, type: 'hole' },
      { x: 500, y: 280, radius: 18, type: 'hole' },
      { x: 180, y: 520, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 280, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 280, y: 220, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 370, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 80, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 500, y: 200, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 180, y: 350, radius: 15, type: 'speed', duration: 5000 },
    ],
  },
  // Level 11 - Moving Introduction
  {
    id: 11,
    name: "Moving Target",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Moving walls
      { x: 200, y: 200, width: 10, height: 100, isMoving: true, moveAxis: 'y', moveRange: 80, moveSpeed: 2 },
      { x: 350, y: 300, width: 10, height: 100, isMoving: true, moveAxis: 'y', moveRange: 80, moveSpeed: 2.5 },
    ],
    hazards: [
      { x: 280, y: 300, radius: 20, type: 'hole' },
      { x: 420, y: 300, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 130, y: 300, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 470, y: 300, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 12 - Ice Rink
  {
    id: 12,
    name: "Slippery Slope",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [],
    iceSurfaces: [
      { x: 150, y: 150, width: 300, height: 300 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 480, radius: 15, type: 'speed', duration: 5000 },
    ],
  },
  // Level 13 - Switch Puzzle
  {
    id: 13,
    name: "Open Sesame",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Barrier wall - requires switch
      { x: 280, y: PADDING, width: 10, height: 400, switchId: 1 },
    ],
    hazards: [
      { x: 200, y: 400, radius: 20, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 150, y: 500, radius: 20 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 400, y: 350, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 520, y: 80, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 250, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 520, y: 350, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 14 - Ice Maze
  {
    id: 14,
    name: "Frozen Path",
    mazeSize: 'large',
    balls: 1,
    difficulty: 6,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 150, y: PADDING, width: 10, height: 350 },
      { x: 250, y: 200, width: 10, height: 360 },
      { x: 350, y: PADDING, width: 10, height: 350 },
      { x: 450, y: 200, width: 10, height: 360 },
    ],
    hazards: [
      { x: 200, y: 480, radius: 18, type: 'hole' },
      { x: 400, y: 480, radius: 18, type: 'hole' },
    ],
    iceSurfaces: [
      { x: PADDING + 10, y: 300, width: 520, height: 150 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 120, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 400, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 500, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 300, y: 375, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 520, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 520, y: 100, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 15 - Moving Gauntlet
  {
    id: 15,
    name: "Dodge This",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Corridor
      { x: PADDING, y: 220, width: 400, height: 10 },
      { x: PADDING, y: 370, width: 400, height: 10 },
      // Moving blockers
      { x: 180, y: 230, width: 80, height: 10, isMoving: true, moveAxis: 'y', moveRange: 60, moveSpeed: 3 },
      { x: 280, y: 300, width: 80, height: 10, isMoving: true, moveAxis: 'y', moveRange: 60, moveSpeed: 2.5 },
      { x: 380, y: 230, width: 80, height: 10, isMoving: true, moveAxis: 'y', moveRange: 60, moveSpeed: 3.5 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 150, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 150, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 6, x: 450, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 140, y: 300, radius: 15, type: 'speed', duration: 5000 },
      { id: 2, x: 460, y: 300, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 16 - Multi-Switch
  {
    id: 16,
    name: "Double Lock",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 300, y: 80 },
    goal: { x: 300, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // First barrier
      { x: PADDING, y: 200, width: 400, height: 10, switchId: 1 },
      // Second barrier  
      { x: 150, y: 400, width: 410, height: 10, switchId: 2 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 300, radius: 18, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 520, y: 120, radius: 18 },
      { id: 2, x: 80, y: 300, radius: 18 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 80, y: 480, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 520, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 200, y: 300, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 400, y: 300, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 17 - Ice and Fire
  {
    id: 17,
    name: "Hot & Cold",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 150, width: 10, height: 300 },
      { x: 400, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 25, type: 'hole' },
      { x: 300, y: 300, radius: 25, type: 'hole' },
      { x: 300, y: 450, radius: 25, type: 'hole' },
    ],
    iceSurfaces: [
      { x: 210, y: 150, width: 190, height: 300 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 80, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 300, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 150, y: 300, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 450, y: 300, radius: 15, type: 'speed', duration: 5000 },
    ],
  },
  // Level 18 - Moving Switch
  {
    id: 18,
    name: "Timing is Key",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Main barrier
      { x: 350, y: PADDING, width: 10, height: 520, switchId: 1 },
      // Moving walls before switch
      { x: 180, y: 200, width: 10, height: 120, isMoving: true, moveAxis: 'y', moveRange: 80, moveSpeed: 2 },
      { x: 250, y: 280, width: 10, height: 120, isMoving: true, moveAxis: 'y', moveRange: 80, moveSpeed: 2.5 },
    ],
    hazards: [
      { x: 130, y: 150, radius: 20, type: 'hole' },
      { x: 130, y: 450, radius: 20, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 300, y: 500, radius: 20 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 450, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 520, y: 80, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 200, y: 300, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 300, y: 200, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 19 - Frozen Gauntlet
  {
    id: 19,
    name: "Arctic Run",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Moving walls on ice
      { x: 150, y: 150, width: 100, height: 10, isMoving: true, moveAxis: 'x', moveRange: 100, moveSpeed: 2 },
      { x: 350, y: 250, width: 100, height: 10, isMoving: true, moveAxis: 'x', moveRange: 100, moveSpeed: 2.5 },
      { x: 150, y: 350, width: 100, height: 10, isMoving: true, moveAxis: 'x', moveRange: 100, moveSpeed: 3 },
      { x: 350, y: 450, width: 100, height: 10, isMoving: true, moveAxis: 'x', moveRange: 100, moveSpeed: 2 },
    ],
    hazards: [
      { x: 200, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 300, radius: 15, type: 'hole' },
      { x: 200, y: 400, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
    ],
    iceSurfaces: [
      { x: PADDING + 10, y: PADDING + 10, width: CANVAS_SIZE - 2 * PADDING - 20, height: CANVAS_SIZE - 2 * PADDING - 20 },
    ],
    collectibles: [
      { id: 1, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 150, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 450, y: 100, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 80, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 520, y: 520, radius: 15, type: 'speed', duration: 5000 },
      { id: 3, x: 300, y: 300, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 20 - Ultimate Challenge
  {
    id: 20,
    name: "The Ultimate",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Complex maze
      { x: 150, y: PADDING, width: 10, height: 200 },
      { x: 150, y: 280, width: 10, height: 200, isMoving: true, moveAxis: 'y', moveRange: 40, moveSpeed: 2 },
      { x: 280, y: 150, width: 10, height: 300, switchId: 1 },
      { x: 400, y: PADDING, width: 10, height: 200, isMoving: true, moveAxis: 'y', moveRange: 60, moveSpeed: 2.5 },
      { x: 400, y: 280, width: 10, height: 200 },
      // Horizontal barriers
      { x: 160, y: 200, width: 120, height: 10, switchId: 2 },
      { x: 290, y: 350, width: 110, height: 10, isMoving: true, moveAxis: 'x', moveRange: 50, moveSpeed: 3 },
    ],
    hazards: [
      { x: 200, y: 350, radius: 15, type: 'hole' },
      { x: 350, y: 250, radius: 15, type: 'hole' },
      { x: 450, y: 350, radius: 15, type: 'hole' },
      { x: 250, y: 480, radius: 15, type: 'hole' },
      { x: 350, y: 480, radius: 15, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 220, y: 520, radius: 18 },
      { id: 2, x: 500, y: 150, radius: 18 },
    ],
    iceSurfaces: [
      { x: 290, y: 360, width: 110, height: 100 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 80, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 500, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 7, x: 350, y: 400, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 100, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 450, y: 100, radius: 15, type: 'speed', duration: 5000 },
      { id: 3, x: 250, y: 400, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 21 - Portal Introduction
  {
    id: 21,
    name: "Portal Hop",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 5,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Barrier blocking direct path
      { x: 280, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
    ],
    hazards: [],
    portals: [
      { id: 1, x: 180, y: 300, radius: 25, linkedPortalId: 2, color: 'hsla(280, 80%, 60%, 1)' },
      { id: 2, x: 420, y: 300, radius: 25, linkedPortalId: 1, color: 'hsla(280, 80%, 60%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 150, radius: 15, type: 'speed', duration: 6000 },
      { id: 2, x: 520, y: 450, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 22 - Portal Maze
  {
    id: 22,
    name: "Warp Zone",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Maze walls
      { x: 150, y: PADDING, width: 10, height: 300 },
      { x: 300, y: 200, width: 10, height: 360 },
      { x: 450, y: PADDING, width: 10, height: 300 },
    ],
    hazards: [
      { x: 220, y: 400, radius: 20, type: 'hole' },
      { x: 380, y: 150, radius: 20, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 100, y: 450, radius: 22, linkedPortalId: 2, color: 'hsla(180, 80%, 50%, 1)' },
      { id: 2, x: 380, y: 80, radius: 22, linkedPortalId: 1, color: 'hsla(180, 80%, 50%, 1)' },
      { id: 3, x: 220, y: 150, radius: 22, linkedPortalId: 4, color: 'hsla(30, 90%, 55%, 1)' },
      { id: 4, x: 520, y: 400, radius: 22, linkedPortalId: 3, color: 'hsla(30, 90%, 55%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 220, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 380, y: 450, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 100, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 220, y: 250, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 380, y: 300, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 23 - Portal Chain
  {
    id: 23,
    name: "Chain Reaction",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Grid walls
      { x: 150, y: PADDING, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 210 },
      { x: 300, y: 150, width: 10, height: 300 },
      { x: 450, y: PADDING, width: 10, height: 200 },
      { x: 450, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 220, y: 300, radius: 18, type: 'hole' },
      { x: 380, y: 300, radius: 18, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 100, y: 250, radius: 20, linkedPortalId: 2, color: 'hsla(120, 70%, 50%, 1)' },
      { id: 2, x: 220, y: 80, radius: 20, linkedPortalId: 1, color: 'hsla(120, 70%, 50%, 1)' },
      { id: 3, x: 220, y: 520, radius: 20, linkedPortalId: 4, color: 'hsla(280, 70%, 60%, 1)' },
      { id: 4, x: 380, y: 80, radius: 20, linkedPortalId: 3, color: 'hsla(280, 70%, 60%, 1)' },
      { id: 5, x: 380, y: 520, radius: 20, linkedPortalId: 6, color: 'hsla(200, 80%, 55%, 1)' },
      { id: 6, x: 520, y: 300, radius: 20, linkedPortalId: 5, color: 'hsla(200, 80%, 55%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 220, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 220, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 380, y: 400, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 150, radius: 15, type: 'speed', duration: 5000 },
      { id: 2, x: 520, y: 450, radius: 15, type: 'shield', duration: 6000 },
    ],
  },
  // Level 24 - Portal Ice
  {
    id: 24,
    name: "Frozen Warp",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 200, height: 10 },
      { x: 200, y: 400, width: 200, height: 10 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 25, type: 'hole' },
    ],
    iceSurfaces: [
      { x: 150, y: 150, width: 300, height: 300 },
    ],
    portals: [
      { id: 1, x: 100, y: 500, radius: 22, linkedPortalId: 2, color: 'hsla(320, 80%, 60%, 1)' },
      { id: 2, x: 500, y: 100, radius: 22, linkedPortalId: 1, color: 'hsla(320, 80%, 60%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 200, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 400, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 150, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 520, y: 450, radius: 15, type: 'speed', duration: 5000 },
    ],
  },
  // Level 25 - Ultimate Portal
  {
    id: 25,
    name: "Dimension Shift",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    startPosition: { x: 80, y: 80 },
    goal: { x: 300, y: 300, radius: 22 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Walls around goal
      { x: 220, y: 220, width: 160, height: 10 },
      { x: 220, y: 370, width: 160, height: 10 },
      { x: 220, y: 220, width: 10, height: 160, switchId: 1 },
      { x: 370, y: 220, width: 10, height: 160 },
      // Moving walls
      { x: 150, y: 150, width: 50, height: 10, isMoving: true, moveAxis: 'x', moveRange: 50, moveSpeed: 2 },
      { x: 400, y: 450, width: 50, height: 10, isMoving: true, moveAxis: 'x', moveRange: 50, moveSpeed: 2.5 },
    ],
    hazards: [
      { x: 150, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 150, radius: 18, type: 'hole' },
      { x: 450, y: 450, radius: 18, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 520, y: 520, radius: 18 },
    ],
    portals: [
      { id: 1, x: 80, y: 520, radius: 20, linkedPortalId: 2, color: 'hsla(60, 90%, 50%, 1)' },
      { id: 2, x: 520, y: 80, radius: 20, linkedPortalId: 1, color: 'hsla(60, 90%, 50%, 1)' },
      { id: 3, x: 150, y: 300, radius: 20, linkedPortalId: 4, color: 'hsla(0, 80%, 55%, 1)' },
      { id: 4, x: 450, y: 300, radius: 20, linkedPortalId: 3, color: 'hsla(0, 80%, 55%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 200, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 400, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 200, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 400, y: 520, radius: 14, type: 'gem', points: 250 },
      { id: 7, x: 300, y: 180, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 150, radius: 15, type: 'shield', duration: 7000 },
      { id: 2, x: 500, y: 450, radius: 15, type: 'speed', duration: 5000 },
      { id: 3, x: 250, y: 400, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // Level 26 - Gravity Introduction
  {
    id: 26,
    name: "Force Field",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
    ],
    hazards: [
      { x: 300, y: 150, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
    ],
    gravityZones: [
      { x: 200, y: 200, width: 200, height: 200, direction: 'right', strength: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 150, y: 300, radius: 15, type: 'speed', duration: 6000 },
      { id: 2, x: 450, y: 300, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 27 - Opposing Forces
  {
    id: 27,
    name: "Push & Pull",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 250, y: 200, width: 10, height: 200 },
      { x: 340, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 300, radius: 22, type: 'hole' },
    ],
    gravityZones: [
      { x: 50, y: 150, width: 200, height: 150, direction: 'down', strength: 1.2 },
      { x: 350, y: 300, width: 200, height: 150, direction: 'up', strength: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 150, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 150, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 150, y: 250, radius: 15, type: 'shield', duration: 5000 },
      { id: 2, x: 450, y: 350, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 28 - Gravity Corridor
  {
    id: 28,
    name: "The Wind Tunnel",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Corridor walls
      { x: PADDING, y: 220, width: 460, height: 10 },
      { x: PADDING, y: 370, width: 460, height: 10 },
    ],
    hazards: [],
    gravityZones: [
      { x: 150, y: 230, width: 100, height: 140, direction: 'up', strength: 2 },
      { x: 300, y: 230, width: 100, height: 140, direction: 'down', strength: 2 },
    ],
    collectibles: [
      { id: 1, x: 150, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 150, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 6, x: 450, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 200, y: 300, radius: 15, type: 'speed', duration: 5000 },
      { id: 2, x: 400, y: 300, radius: 15, type: 'multiplier', duration: 8000 },
    ],
  },
  // Level 29 - Gravity Maze
  {
    id: 29,
    name: "Force Labyrinth",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 25 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 180, y: PADDING, width: 10, height: 200 },
      { x: 180, y: 350, width: 10, height: 210 },
      { x: 350, y: PADDING, width: 10, height: 350 },
      { x: 350, y: 450, width: 10, height: 110 },
    ],
    hazards: [
      { x: 260, y: 280, radius: 18, type: 'hole' },
      { x: 450, y: 400, radius: 18, type: 'hole' },
    ],
    gravityZones: [
      { x: 50, y: 200, width: 130, height: 150, direction: 'right', strength: 1.5 },
      { x: 190, y: 50, width: 160, height: 130, direction: 'down', strength: 1.3 },
      { x: 360, y: 200, width: 190, height: 150, direction: 'left', strength: 1.5 },
      { x: 190, y: 350, width: 160, height: 100, direction: 'up', strength: 1.3 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 260, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 260, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 100, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 100, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 6, x: 450, y: 520, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 150, radius: 15, type: 'shield', duration: 6000 },
      { id: 2, x: 450, y: 300, radius: 15, type: 'speed', duration: 5000 },
    ],
  },
  // Level 30 - Ultimate Gravity
  {
    id: 30,
    name: "Gravity Storm",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 22 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Center barriers
      { x: 250, y: 200, width: 100, height: 10 },
      { x: 250, y: 390, width: 100, height: 10 },
      { x: 250, y: 200, width: 10, height: 200, switchId: 1 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 20, type: 'hole' },
      { x: 450, y: 300, radius: 20, type: 'hole' },
      { x: 300, y: 150, radius: 18, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 80, y: 520, radius: 18 },
    ],
    gravityZones: [
      { x: 50, y: 50, width: 150, height: 150, direction: 'right', strength: 1.8 },
      { x: 400, y: 50, width: 150, height: 150, direction: 'down', strength: 1.8 },
      { x: 400, y: 400, width: 150, height: 150, direction: 'left', strength: 1.8 },
      { x: 50, y: 400, width: 150, height: 150, direction: 'up', strength: 1.8 },
    ],
    portals: [
      { id: 1, x: 200, y: 300, radius: 18, linkedPortalId: 2, color: 'hsla(45, 90%, 50%, 1)' },
      { id: 2, x: 400, y: 300, radius: 18, linkedPortalId: 1, color: 'hsla(45, 90%, 50%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 450, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
      { id: 6, x: 150, y: 500, radius: 14, type: 'gem', points: 250 },
      { id: 7, x: 450, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 250, y: 100, radius: 15, type: 'shield', duration: 7000 },
      { id: 2, x: 350, y: 100, radius: 15, type: 'speed', duration: 5000 },
      { id: 3, x: 300, y: 200, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },
  // =============================================
  // MULTI-BALL LEVELS (31-35)
  // =============================================
  
  // Level 31 - Multi-Ball Introduction
  {
    id: 31,
    name: "Duo Journey",
    mazeSize: 'medium',
    balls: 2,
    difficulty: 4,
    startPosition: { x: 100, y: 100 },
    goal: { x: 500, y: 500, radius: 45 },
    category: 'multiball',
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 390, y: 200, width: 10, height: 200 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 150, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 450, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 300, radius: 15, type: 'speed', duration: 6000 },
    ],
  },
  // Level 32 - Multi-Ball Hazards
  {
    id: 32,
    name: "Double Trouble",
    mazeSize: 'medium',
    balls: 2,
    difficulty: 5,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 40 },
    category: 'multiball',
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 150, width: 10, height: 150 },
      { x: 200, y: 350, width: 10, height: 150 },
      { x: 400, y: 150, width: 10, height: 150 },
      { x: 400, y: 350, width: 10, height: 150 },
    ],
    hazards: [
      { x: 300, y: 200, radius: 20, type: 'hole' },
      { x: 300, y: 400, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 100, radius: 15, type: 'shield', duration: 5000 },
    ],
  },
  // Level 33 - Triple Threat
  {
    id: 33,
    name: "Triple Threat",
    mazeSize: 'large',
    balls: 3,
    difficulty: 7,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 50 },
    category: 'multiball',
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 150, y: 150, width: 300, height: 10 },
      { x: 150, y: 300, width: 200, height: 10 },
      { x: 250, y: 450, width: 300, height: 10 },
    ],
    hazards: [
      { x: 200, y: 230, radius: 18, type: 'hole' },
      { x: 400, y: 380, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 520, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 300, y: 380, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 150, y: 520, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // Level 34 - Multi-Ball Ice
  {
    id: 34,
    name: "Ice Twins",
    mazeSize: 'large',
    balls: 2,
    difficulty: 8,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 40 },
    category: 'multiball',
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: 200, width: 10, height: 200 },
      { x: 390, y: 200, width: 10, height: 200 },
    ],
    hazards: [
      { x: 300, y: 150, radius: 20, type: 'hole' },
      { x: 300, y: 450, radius: 20, type: 'hole' },
    ],
    iceSurfaces: [
      { x: 210, y: 200, width: 180, height: 200 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 500, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 100, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 500, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 80, radius: 15, type: 'shield', duration: 6000 },
    ],
  },
  // Level 35 - Multi-Ball Portal
  {
    id: 35,
    name: "Portal Pair",
    mazeSize: 'large',
    balls: 2,
    difficulty: 9,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    category: 'multiball',
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 280, y: PADDING, width: 10, height: 250 },
      { x: 280, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 200, y: 400, radius: 20, type: 'hole' },
      { x: 400, y: 200, radius: 20, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 150, y: 300, radius: 22, linkedPortalId: 2, color: 'hsla(280, 80%, 60%, 1)' },
      { id: 2, x: 450, y: 300, radius: 22, linkedPortalId: 1, color: 'hsla(280, 80%, 60%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 80, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 520, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 300, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
  },
  // =============================================
  // DARK MODE LEVELS (36-40)
  // =============================================
  
  // Level 36 - Dark Introduction
  {
    id: 36,
    name: "Lights Out",
    mazeSize: 'small',
    balls: 1,
    difficulty: 4,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 40 },
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 100,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 200, y: PADDING, width: 10, height: 300 },
      { x: 390, y: 250, width: 10, height: 310 },
    ],
    hazards: [],
    collectibles: [
      { id: 1, x: 150, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 400, radius: 14, type: 'gem', points: 250 },
    ],
  },
  // Level 37 - Dark Hazards
  {
    id: 37,
    name: "Blind Danger",
    mazeSize: 'medium',
    balls: 1,
    difficulty: 6,
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 85,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: PADDING, y: 220, width: 350, height: 10 },
      { x: PADDING, y: 370, width: 350, height: 10 },
    ],
    hazards: [
      { x: 200, y: 300, radius: 20, type: 'hole' },
      { x: 350, y: 300, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 120, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 280, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 430, y: 300, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 100, radius: 15, type: 'shield', duration: 8000 },
    ],
  },
  // Level 38 - Dark Maze
  {
    id: 38,
    name: "Shadow Maze",
    mazeSize: 'large',
    balls: 1,
    difficulty: 7,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 75,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Maze walls
      { x: 150, y: PADDING, width: 10, height: 250 },
      { x: 150, y: 350, width: 10, height: 210 },
      { x: 300, y: 150, width: 10, height: 300 },
      { x: 450, y: PADDING, width: 10, height: 250 },
      { x: 450, y: 350, width: 10, height: 210 },
    ],
    hazards: [
      { x: 220, y: 300, radius: 18, type: 'hole' },
      { x: 380, y: 200, radius: 18, type: 'hole' },
      { x: 380, y: 400, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 220, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 380, y: 500, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 220, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
  },
  // Level 39 - Dark Portal
  {
    id: 39,
    name: "Void Walker",
    mazeSize: 'large',
    balls: 1,
    difficulty: 8,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 70,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 280, y: PADDING, width: 10, height: 520 },
    ],
    hazards: [
      { x: 150, y: 300, radius: 20, type: 'hole' },
      { x: 450, y: 300, radius: 20, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 200, y: 500, radius: 22, linkedPortalId: 2, color: 'hsla(280, 80%, 60%, 1)' },
      { id: 2, x: 400, y: 100, radius: 22, linkedPortalId: 1, color: 'hsla(280, 80%, 60%, 1)' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 150, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 200, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 400, y: 300, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 450, radius: 15, type: 'shield', duration: 6000 },
    ],
  },
  // Level 40 - Ultimate Dark
  {
    id: 40,
    name: "Abyss",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 45 },
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 65,
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: 180, y: PADDING, width: 10, height: 200 },
      { x: 180, y: 300, width: 10, height: 260, switchId: 1 },
      { x: 350, y: 200, width: 10, height: 360 },
    ],
    hazards: [
      { x: 260, y: 250, radius: 18, type: 'hole' },
      { x: 260, y: 450, radius: 18, type: 'hole' },
      { x: 450, y: 350, radius: 18, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 100, y: 520, radius: 18 },
    ],
    gravityZones: [
      { x: 360, y: 200, width: 190, height: 180, direction: 'down', strength: 1.2 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 260, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 450, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 520, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 260, y: 350, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 100, y: 150, radius: 15, type: 'shield', duration: 8000 },
      { id: 2, x: 450, y: 500, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },

  // =============================================
  // EXTREME LEVELS (41-50) - Very Hard Levels
  // =============================================

  // Level 41 - Extreme Portal Maze
  {
    id: 41,
    name: "Portal Madness",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'portal',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Complex maze walls
      { x: 150, y: PADDING, width: 10, height: 150 },
      { x: 150, y: 250, width: 10, height: 150 },
      { x: 150, y: 450, width: 10, height: 110 },
      { x: 250, y: 100, width: 10, height: 200 },
      { x: 250, y: 350, width: 10, height: 210 },
      { x: 350, y: PADDING, width: 10, height: 250 },
      { x: 350, y: 350, width: 10, height: 100 },
      { x: 450, y: 150, width: 10, height: 250 },
      { x: 450, y: 450, width: 10, height: 110 },
      // Horizontal walls
      { x: 160, y: 200, width: 80, height: 10 },
      { x: 360, y: 300, width: 80, height: 10 },
      { x: 260, y: 450, width: 80, height: 10 },
    ],
    hazards: [
      { x: 200, y: 350, radius: 15, type: 'hole' },
      { x: 300, y: 150, radius: 15, type: 'hole' },
      { x: 400, y: 400, radius: 15, type: 'hole' },
      { x: 500, y: 200, radius: 15, type: 'hole' },
    ],
    portals: [
      { id: 1, x: 80, y: 480, radius: 18, linkedPortalId: 2, color: '#ff6b6b' },
      { id: 2, x: 300, y: 80, radius: 18, linkedPortalId: 1, color: '#ff6b6b' },
      { id: 3, x: 200, y: 150, radius: 18, linkedPortalId: 4, color: '#4ecdc4' },
      { id: 4, x: 480, y: 350, radius: 18, linkedPortalId: 3, color: '#4ecdc4' },
      { id: 5, x: 400, y: 80, radius: 18, linkedPortalId: 6, color: '#9b59b6' },
      { id: 6, x: 200, y: 500, radius: 18, linkedPortalId: 5, color: '#9b59b6' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 480, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 400, y: 250, radius: 15, type: 'shield', duration: 5000 },
    ],
  },

  // Level 42 - Ice Storm
  {
    id: 42,
    name: "Frozen Hell",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'ice',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Narrow passages
      { x: 150, y: 200, width: 10, height: 200 },
      { x: 250, y: PADDING, width: 10, height: 150 },
      { x: 250, y: 250, width: 10, height: 310 },
      { x: 350, y: 100, width: 10, height: 200 },
      { x: 350, y: 350, width: 10, height: 210 },
      { x: 450, y: 150, width: 10, height: 300 },
    ],
    hazards: [
      { x: 200, y: 120, radius: 18, type: 'hole' },
      { x: 200, y: 480, radius: 18, type: 'hole' },
      { x: 300, y: 200, radius: 15, type: 'hole' },
      { x: 400, y: 480, radius: 18, type: 'hole' },
      { x: 500, y: 150, radius: 15, type: 'hole' },
    ],
    iceSurfaces: [
      { x: PADDING, y: PADDING, width: 150, height: CANVAS_SIZE - 2 * PADDING },
      { x: 260, y: PADDING, width: 80, height: CANVAS_SIZE - 2 * PADDING },
      { x: 360, y: PADDING, width: 80, height: CANVAS_SIZE - 2 * PADDING },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 300, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 300, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 500, y: 500, radius: 15, type: 'speed', duration: 8000 },
    ],
  },

  // Level 43 - Gravity Nightmare
  {
    id: 43,
    name: "Gravity Storm",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'gravity',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Obstacle walls
      { x: 150, y: 150, width: 100, height: 10 },
      { x: 300, y: 200, width: 150, height: 10 },
      { x: 200, y: 300, width: 10, height: 150 },
      { x: 350, y: 350, width: 100, height: 10 },
      { x: 400, y: 400, width: 10, height: 100 },
    ],
    hazards: [
      { x: 200, y: 200, radius: 18, type: 'hole' },
      { x: 350, y: 300, radius: 18, type: 'hole' },
      { x: 450, y: 200, radius: 15, type: 'hole' },
      { x: 300, y: 450, radius: 18, type: 'hole' },
      { x: 150, y: 400, radius: 15, type: 'hole' },
    ],
    gravityZones: [
      { x: PADDING, y: PADDING, width: 150, height: 200, direction: 'right', strength: 1.8 },
      { x: 200, y: PADDING, width: 200, height: 150, direction: 'down', strength: 2.0 },
      { x: 400, y: 150, width: 160, height: 150, direction: 'left', strength: 1.5 },
      { x: PADDING, y: 300, width: 200, height: 150, direction: 'up', strength: 1.8 },
      { x: 300, y: 350, width: 100, height: 200, direction: 'right', strength: 2.0 },
      { x: 400, y: 400, width: 160, height: 160, direction: 'down', strength: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 120, y: 250, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 280, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 480, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 350, y: 480, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 450, y: 80, radius: 15, type: 'shield', duration: 6000 },
    ],
  },

  // Level 44 - Switch Labyrinth
  {
    id: 44,
    name: "Switch Madness",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'switch',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Switch-controlled walls
      { x: 150, y: PADDING, width: 10, height: 400, switchId: 1 },
      { x: 250, y: 150, width: 10, height: 410, switchId: 2 },
      { x: 350, y: PADDING, width: 10, height: 350, switchId: 3 },
      { x: 450, y: 200, width: 10, height: 360, switchId: 4 },
      // Permanent walls
      { x: PADDING, y: 300, width: 100, height: 10 },
      { x: 160, y: 200, width: 80, height: 10 },
      { x: 260, y: 400, width: 80, height: 10 },
      { x: 360, y: 150, width: 80, height: 10 },
    ],
    hazards: [
      { x: 200, y: 450, radius: 18, type: 'hole' },
      { x: 300, y: 250, radius: 18, type: 'hole' },
      { x: 400, y: 350, radius: 18, type: 'hole' },
      { x: 500, y: 150, radius: 15, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 80, y: 200, radius: 18 },
      { id: 2, x: 200, y: 520, radius: 18 },
      { id: 3, x: 300, y: 100, radius: 18 },
      { id: 4, x: 400, y: 520, radius: 18 },
    ],
    collectibles: [
      { id: 1, x: 100, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 480, y: 400, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 300, y: 350, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },

  // Level 45 - Moving Chaos
  {
    id: 45,
    name: "Crushing Walls",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'moving',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Fast moving walls
      { x: 150, y: 150, width: 10, height: 80, isMoving: true, moveAxis: 'y', moveRange: 250, moveSpeed: 0.003 },
      { x: 220, y: 350, width: 10, height: 80, isMoving: true, moveAxis: 'y', moveRange: 200, moveSpeed: 0.004 },
      { x: 290, y: 100, width: 10, height: 100, isMoving: true, moveAxis: 'y', moveRange: 350, moveSpeed: 0.0035 },
      { x: 360, y: 200, width: 10, height: 80, isMoving: true, moveAxis: 'y', moveRange: 280, moveSpeed: 0.0045 },
      { x: 430, y: 300, width: 10, height: 100, isMoving: true, moveAxis: 'y', moveRange: 200, moveSpeed: 0.005 },
      // Horizontal moving walls
      { x: 150, y: 100, width: 80, height: 10, isMoving: true, moveAxis: 'x', moveRange: 100, moveSpeed: 0.003 },
      { x: 300, y: 480, width: 100, height: 10, isMoving: true, moveAxis: 'x', moveRange: 120, moveSpeed: 0.004 },
    ],
    hazards: [
      { x: 180, y: 300, radius: 18, type: 'hole' },
      { x: 250, y: 200, radius: 15, type: 'hole' },
      { x: 320, y: 400, radius: 18, type: 'hole' },
      { x: 390, y: 150, radius: 15, type: 'hole' },
      { x: 460, y: 450, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 130, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 270, y: 300, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 410, y: 250, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 500, y: 150, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 200, y: 100, radius: 15, type: 'speed', duration: 6000 },
    ],
  },

  // Level 46 - Total Darkness
  {
    id: 46,
    name: "Pitch Black",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'dark',
    isDarkMode: true,
    spotlightRadius: 50,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 30 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Maze walls
      { x: 120, y: PADDING, width: 10, height: 180 },
      { x: 120, y: 280, width: 10, height: 280 },
      { x: 200, y: 120, width: 10, height: 200 },
      { x: 200, y: 380, width: 10, height: 180 },
      { x: 280, y: PADDING, width: 10, height: 280 },
      { x: 280, y: 380, width: 10, height: 180 },
      { x: 360, y: 120, width: 10, height: 180 },
      { x: 360, y: 360, width: 10, height: 200 },
      { x: 440, y: PADDING, width: 10, height: 200 },
      { x: 440, y: 300, width: 10, height: 260 },
    ],
    hazards: [
      { x: 160, y: 200, radius: 18, type: 'hole' },
      { x: 240, y: 350, radius: 18, type: 'hole' },
      { x: 320, y: 150, radius: 18, type: 'hole' },
      { x: 400, y: 280, radius: 18, type: 'hole' },
      { x: 480, y: 200, radius: 18, type: 'hole' },
      { x: 320, y: 480, radius: 18, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 80, y: 350, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 240, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 400, y: 500, radius: 14, type: 'gem', points: 250 },
    ],
    powerUps: [
      { id: 1, x: 160, y: 480, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 47 - Hazard Hell
  {
    id: 47,
    name: "Death Trap",
    mazeSize: 'large',
    balls: 1,
    difficulty: 10,
    category: 'hazard',
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 28 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Guide walls creating paths
      { x: PADDING, y: 150, width: 200, height: 10 },
      { x: 150, y: 250, width: 250, height: 10 },
      { x: 300, y: 350, width: 260, height: 10 },
      { x: PADDING, y: 450, width: 350, height: 10 },
    ],
    hazards: [
      // Top section
      { x: 280, y: 80, radius: 20, type: 'hole' },
      { x: 380, y: 80, radius: 20, type: 'hole' },
      { x: 480, y: 80, radius: 20, type: 'hole' },
      // Second row
      { x: 80, y: 200, radius: 18, type: 'trap' },
      { x: 280, y: 200, radius: 20, type: 'hole' },
      { x: 450, y: 200, radius: 18, type: 'trap' },
      // Third row
      { x: 100, y: 300, radius: 20, type: 'hole' },
      { x: 220, y: 300, radius: 18, type: 'trap' },
      { x: 450, y: 300, radius: 20, type: 'hole' },
      // Fourth row
      { x: 180, y: 400, radius: 20, type: 'hole' },
      { x: 280, y: 400, radius: 18, type: 'trap' },
      { x: 380, y: 400, radius: 20, type: 'hole' },
      // Bottom row
      { x: 100, y: 520, radius: 18, type: 'trap' },
      { x: 300, y: 520, radius: 20, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 180, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 520, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 480, y: 450, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 520, y: 300, radius: 15, type: 'shield', duration: 10000 },
    ],
  },

  // Level 48 - Multiball Extreme
  {
    id: 48,
    name: "Triple Threat",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'multiball',
    startPosition: { x: 80, y: 300 },
    goal: { x: 520, y: 300, radius: 50 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Tight channels
      { x: 150, y: PADDING, width: 10, height: 200 },
      { x: 150, y: 350, width: 10, height: 210 },
      { x: 250, y: 150, width: 10, height: 300 },
      { x: 350, y: PADDING, width: 10, height: 250 },
      { x: 350, y: 400, width: 10, height: 160 },
      { x: 450, y: 100, width: 10, height: 200 },
      { x: 450, y: 400, width: 10, height: 160 },
    ],
    hazards: [
      { x: 200, y: 150, radius: 18, type: 'hole' },
      { x: 200, y: 450, radius: 18, type: 'hole' },
      { x: 300, y: 100, radius: 15, type: 'hole' },
      { x: 300, y: 500, radius: 15, type: 'hole' },
      { x: 400, y: 350, radius: 18, type: 'hole' },
      { x: 500, y: 150, radius: 15, type: 'hole' },
      { x: 500, y: 450, radius: 15, type: 'hole' },
    ],
    collectibles: [
      { id: 1, x: 100, y: 150, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 100, y: 450, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 300, y: 300, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 400, y: 100, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 200, y: 300, radius: 15, type: 'shield', duration: 8000 },
    ],
  },

  // Level 49 - Combined Nightmare
  {
    id: 49,
    name: "The Gauntlet",
    mazeSize: 'large',
    balls: 2,
    difficulty: 10,
    category: 'combined',
    isDarkMode: true,
    spotlightRadius: 70,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 35 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Moving walls
      { x: 180, y: 100, width: 10, height: 80, isMoving: true, moveAxis: 'y', moveRange: 150, moveSpeed: 0.003 },
      { x: 350, y: 250, width: 10, height: 80, isMoving: true, moveAxis: 'y', moveRange: 150, moveSpeed: 0.004 },
      // Switch walls
      { x: 280, y: 150, width: 10, height: 200, switchId: 1 },
      { x: 420, y: 300, width: 10, height: 200, switchId: 2 },
    ],
    hazards: [
      { x: 150, y: 250, radius: 18, type: 'hole' },
      { x: 250, y: 400, radius: 18, type: 'hole' },
      { x: 350, y: 150, radius: 15, type: 'hole' },
      { x: 450, y: 400, radius: 18, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 100, y: 450, radius: 18 },
      { id: 2, x: 300, y: 520, radius: 18 },
    ],
    portals: [
      { id: 1, x: 80, y: 200, radius: 18, linkedPortalId: 2, color: '#ff6b6b' },
      { id: 2, x: 400, y: 80, radius: 18, linkedPortalId: 1, color: '#ff6b6b' },
    ],
    iceSurfaces: [
      { x: 200, y: 200, width: 80, height: 200 },
      { x: 400, y: 350, width: 100, height: 150 },
    ],
    gravityZones: [
      { x: PADDING, y: 350, width: 150, height: 150, direction: 'up', strength: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 200, y: 100, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 480, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 350, y: 400, radius: 14, type: 'gem', points: 250 },
      { id: 4, x: 200, y: 500, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 480, y: 450, radius: 15, type: 'shield', duration: 8000 },
      { id: 2, x: 100, y: 300, radius: 15, type: 'multiplier', duration: 10000 },
    ],
  },

  // Level 50 - Ultimate Challenge
  {
    id: 50,
    name: "Impossible",
    mazeSize: 'large',
    balls: 3,
    difficulty: 10,
    category: 'combined',
    isDarkMode: true,
    spotlightRadius: 55,
    startPosition: { x: 80, y: 80 },
    goal: { x: 520, y: 520, radius: 50 },
    walls: [
      { x: PADDING, y: PADDING, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: CANVAS_SIZE - PADDING - 10, width: CANVAS_SIZE - 2 * PADDING, height: 10 },
      { x: PADDING, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      { x: CANVAS_SIZE - PADDING - 10, y: PADDING, width: 10, height: CANVAS_SIZE - 2 * PADDING },
      // Complex walls
      { x: 120, y: PADDING, width: 10, height: 150 },
      { x: 120, y: 250, width: 10, height: 130, isMoving: true, moveAxis: 'y', moveRange: 150, moveSpeed: 0.003 },
      { x: 120, y: 480, width: 10, height: 80 },
      { x: 220, y: 100, width: 10, height: 150, switchId: 1 },
      { x: 220, y: 350, width: 10, height: 210 },
      { x: 320, y: PADDING, width: 10, height: 200 },
      { x: 320, y: 300, width: 10, height: 100, isMoving: true, moveAxis: 'y', moveRange: 120, moveSpeed: 0.004 },
      { x: 320, y: 500, width: 10, height: 60 },
      { x: 420, y: 150, width: 10, height: 200, switchId: 2 },
      { x: 420, y: 400, width: 10, height: 160 },
    ],
    hazards: [
      { x: 170, y: 180, radius: 18, type: 'hole' },
      { x: 170, y: 420, radius: 18, type: 'hole' },
      { x: 270, y: 280, radius: 15, type: 'hole' },
      { x: 270, y: 480, radius: 18, type: 'hole' },
      { x: 370, y: 100, radius: 15, type: 'hole' },
      { x: 370, y: 450, radius: 18, type: 'hole' },
      { x: 470, y: 280, radius: 18, type: 'hole' },
      { x: 470, y: 420, radius: 15, type: 'hole' },
    ],
    switches: [
      { id: 1, x: 80, y: 520, radius: 18 },
      { id: 2, x: 280, y: 80, radius: 18 },
    ],
    portals: [
      { id: 1, x: 80, y: 350, radius: 18, linkedPortalId: 2, color: '#ff6b6b' },
      { id: 2, x: 380, y: 200, radius: 18, linkedPortalId: 1, color: '#ff6b6b' },
      { id: 3, x: 180, y: 80, radius: 18, linkedPortalId: 4, color: '#4ecdc4' },
      { id: 4, x: 480, y: 380, radius: 18, linkedPortalId: 3, color: '#4ecdc4' },
    ],
    iceSurfaces: [
      { x: 130, y: 300, width: 80, height: 150 },
      { x: 330, y: 150, width: 80, height: 140 },
    ],
    gravityZones: [
      { x: 230, y: 100, width: 80, height: 150, direction: 'down', strength: 1.8 },
      { x: 430, y: 300, width: 130, height: 100, direction: 'left', strength: 1.5 },
    ],
    collectibles: [
      { id: 1, x: 80, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 2, x: 280, y: 200, radius: 12, type: 'coin', points: 100 },
      { id: 3, x: 180, y: 400, radius: 12, type: 'coin', points: 100 },
      { id: 4, x: 380, y: 350, radius: 14, type: 'gem', points: 250 },
      { id: 5, x: 480, y: 150, radius: 16, type: 'gem', points: 500 },
    ],
    powerUps: [
      { id: 1, x: 80, y: 450, radius: 15, type: 'shield', duration: 10000 },
      { id: 2, x: 380, y: 80, radius: 15, type: 'speed', duration: 8000 },
      { id: 3, x: 480, y: 480, radius: 15, type: 'multiplier', duration: 12000 },
    ],
  },
  // Add expansion levels (51-100)
  ...expansionLevels,
  // Add Sunken Temple levels (101-120) - Coral Reef zone
  ...sunkenTempleLevels,
  // Add Deep Trench levels (121-140)
  ...deepTrenchLevels,
  // Add Sunken City levels (141-160)
  ...sunkenCityLevels,
  // Add Kraken's Den levels (161-180)
  ...krakensDenLevels,
  // Add Abyss Core levels (181-200)
  ...abyssCoreLevels,
  // Add Sky Fortress levels (201-300)
  ...cloudGardensLevels,
  ...gearSpireLevels,
  ...stormTowerLevels,
  ...brokenBridgeLevels,
  ...celestialPinnacleLevels,
  // Add Volcanic Core levels (301-400)
  ...cinderTunnelsLevels,
  ...obsidianDepthsLevels,
  ...pyroclasmLevels,
  ...magmaFallsLevels,
  ...infernoSanctumLevels,
  // Add Frozen Fortress levels (401-500)
  ...frostbitePassLevels,
  ...glacierDepthsLevels,
  ...blizzardPeaksLevels,
  ...avalancheRidgeLevels,
  ...permafrostSanctumLevels,
  // Add Dimension Nexus levels (501-600)
  ...phaseRiftLevels,
  ...mirrorHallsLevels,
  ...gravityNexusLevels,
  ...temporalCorridorsLevels,
  ...voidSanctumLevels,
];

export const getLevel = (id: number): Level | undefined => {
  return levels.find(level => level.id === id);
};
