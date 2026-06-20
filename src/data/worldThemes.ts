import { getWorldForLevel } from '@/components/WorldSelector';
import ancientRuinsBg from '@/assets/worlds/ancient-ruins-bg.jpg';
import sunkenTempleBg from '@/assets/worlds/sunken-temple-bg.jpg';
import skyFortressBg from '@/assets/worlds/sky-fortress-bg.jpg';
import volcanicCoreBg from '@/assets/worlds/volcanic-core-bg.jpg';
import frozenFortressBg from '@/assets/worlds/frozen-fortress-bg.jpg';
import dimensionNexusBg from '@/assets/worlds/dimension-nexus-bg.jpg';

export interface WorldTheme {
  id: string;
  // Canvas colors
  canvasBg: string;           // Main canvas fill
  canvasBgAlt: string;        // Subtle pattern overlay
  wallColor: string;          // Default wall fill
  wallGlow: string;           // Wall shadow/glow color
  // UI accent colors (HSL values for Tailwind-compatible usage)
  accentHue: number;
  accentSat: number;
  accentLight: number;
  // Page background gradient stops
  pageBgFrom: string;
  pageBgVia: string;
  pageBgTo: string;
  // Ambient particle config
  ambientParticleColor: string;
  ambientParticleCount: number;
  ambientParticleType: 'dust' | 'bubble' | 'cloud' | 'ember' | 'snow' | 'star';
  // Border/card accent
  borderAccent: string;
  cardBg: string;
  textAccent: string;
  // Background image
  backgroundImage: string;
}

export const WORLD_THEMES: Record<string, WorldTheme> = {
  techlab: {
    id: 'techlab',
    canvasBg: 'hsl(35, 25%, 14%)',
    canvasBgAlt: 'hsl(35, 20%, 18%)',
    wallColor: 'hsl(35, 20%, 38%)',
    wallGlow: 'hsl(40, 60%, 40%)',
    accentHue: 40,
    accentSat: 70,
    accentLight: 50,
    pageBgFrom: 'hsl(35, 30%, 8%)',
    pageBgVia: 'hsl(30, 25%, 10%)',
    pageBgTo: 'hsl(25, 20%, 6%)',
    ambientParticleColor: 'hsla(40, 60%, 50%, 0.3)',
    ambientParticleCount: 12,
    ambientParticleType: 'dust',
    borderAccent: 'hsla(40, 60%, 40%, 0.4)',
    cardBg: 'hsla(35, 25%, 15%, 0.6)',
    textAccent: 'hsl(40, 70%, 60%)',
    backgroundImage: ancientRuinsBg,
  },
  'sunken-temple': {
    id: 'sunken-temple',
    canvasBg: 'hsl(200, 35%, 12%)',
    canvasBgAlt: 'hsl(195, 30%, 16%)',
    wallColor: 'hsl(190, 20%, 32%)',
    wallGlow: 'hsl(180, 60%, 40%)',
    accentHue: 185,
    accentSat: 70,
    accentLight: 50,
    pageBgFrom: 'hsl(200, 40%, 6%)',
    pageBgVia: 'hsl(195, 35%, 9%)',
    pageBgTo: 'hsl(210, 30%, 5%)',
    ambientParticleColor: 'hsla(185, 70%, 60%, 0.25)',
    ambientParticleCount: 18,
    ambientParticleType: 'bubble',
    borderAccent: 'hsla(185, 60%, 40%, 0.4)',
    cardBg: 'hsla(200, 30%, 14%, 0.6)',
    textAccent: 'hsl(180, 70%, 55%)',
    backgroundImage: sunkenTempleBg,
  },
  'sky-fortress': {
    id: 'sky-fortress',
    canvasBg: 'hsl(215, 30%, 15%)',
    canvasBgAlt: 'hsl(220, 25%, 19%)',
    wallColor: 'hsl(220, 18%, 38%)',
    wallGlow: 'hsl(210, 50%, 50%)',
    accentHue: 210,
    accentSat: 65,
    accentLight: 55,
    pageBgFrom: 'hsl(220, 35%, 8%)',
    pageBgVia: 'hsl(215, 30%, 12%)',
    pageBgTo: 'hsl(230, 25%, 6%)',
    ambientParticleColor: 'hsla(210, 50%, 70%, 0.2)',
    ambientParticleCount: 10,
    ambientParticleType: 'cloud',
    borderAccent: 'hsla(210, 50%, 45%, 0.4)',
    cardBg: 'hsla(220, 25%, 16%, 0.6)',
    textAccent: 'hsl(210, 65%, 60%)',
    backgroundImage: skyFortressBg,
  },
  'volcanic-core': {
    id: 'volcanic-core',
    canvasBg: 'hsl(10, 30%, 10%)',
    canvasBgAlt: 'hsl(15, 25%, 14%)',
    wallColor: 'hsl(0, 10%, 28%)',
    wallGlow: 'hsl(20, 80%, 45%)',
    accentHue: 20,
    accentSat: 80,
    accentLight: 50,
    pageBgFrom: 'hsl(5, 35%, 5%)',
    pageBgVia: 'hsl(10, 30%, 8%)',
    pageBgTo: 'hsl(0, 25%, 4%)',
    ambientParticleColor: 'hsla(25, 90%, 55%, 0.35)',
    ambientParticleCount: 20,
    ambientParticleType: 'ember',
    borderAccent: 'hsla(20, 70%, 40%, 0.5)',
    cardBg: 'hsla(10, 25%, 12%, 0.6)',
    textAccent: 'hsl(25, 85%, 55%)',
    backgroundImage: volcanicCoreBg,
  },
  'frozen-fortress': {
    id: 'frozen-fortress',
    canvasBg: 'hsl(210, 25%, 14%)',
    canvasBgAlt: 'hsl(205, 20%, 18%)',
    wallColor: 'hsl(200, 15%, 40%)',
    wallGlow: 'hsl(195, 60%, 55%)',
    accentHue: 195,
    accentSat: 60,
    accentLight: 55,
    pageBgFrom: 'hsl(210, 30%, 6%)',
    pageBgVia: 'hsl(205, 25%, 10%)',
    pageBgTo: 'hsl(215, 20%, 5%)',
    ambientParticleColor: 'hsla(200, 50%, 80%, 0.3)',
    ambientParticleCount: 25,
    ambientParticleType: 'snow',
    borderAccent: 'hsla(195, 50%, 50%, 0.4)',
    cardBg: 'hsla(210, 20%, 15%, 0.6)',
    textAccent: 'hsl(195, 60%, 65%)',
    backgroundImage: frozenFortressBg,
  },
  'dimension-nexus': {
    id: 'dimension-nexus',
    canvasBg: 'hsl(270, 25%, 10%)',
    canvasBgAlt: 'hsl(280, 20%, 14%)',
    wallColor: 'hsl(270, 15%, 35%)',
    wallGlow: 'hsl(280, 60%, 50%)',
    accentHue: 280,
    accentSat: 65,
    accentLight: 55,
    pageBgFrom: 'hsl(275, 30%, 5%)',
    pageBgVia: 'hsl(270, 25%, 8%)',
    pageBgTo: 'hsl(265, 20%, 4%)',
    ambientParticleColor: 'hsla(280, 60%, 65%, 0.3)',
    ambientParticleCount: 15,
    ambientParticleType: 'star',
    borderAccent: 'hsla(280, 50%, 45%, 0.4)',
    cardBg: 'hsla(270, 20%, 12%, 0.6)',
    textAccent: 'hsl(280, 65%, 65%)',
    backgroundImage: dimensionNexusBg,
  },
};

export const getWorldTheme = (levelId: number): WorldTheme => {
  const world = getWorldForLevel(levelId);
  return WORLD_THEMES[world?.id || 'techlab'] || WORLD_THEMES.techlab;
};
