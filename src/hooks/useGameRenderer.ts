import { useEffect, useRef } from 'react';
import { Level, GameState, TimePickup, ActivePowerUp, Hazard, LaserGate, ConveyorZone, MagneticZone, Wall, WaterCurrent, BubbleVent, Whirlpool, Jellyfish, SeaMine, TidalWave } from '@/types/game';
import { BallSkin } from '@/types/shop';
import type { UseParticlesReturn } from '@/hooks/useParticles';
import { WorldTheme, WORLD_THEMES } from '@/data/worldThemes';
import { drawPowerUpIcon, drawWarningIcon, drawArrowIcon } from '@/lib/canvasIcons';

interface GameRendererConfig {
  level: Level;
  gameStateRef: React.MutableRefObject<GameState>;
  tiltRef: React.MutableRefObject<{ x: number; y: number }>;
  ballTrailRef: React.MutableRefObject<Array<{ x: number; y: number }[]>>;
  timePickupsRef: React.MutableRefObject<TimePickup[]>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  selectedBallSkin: BallSkin;
  particles: UseParticlesReturn;
  getMovingWallPosition: (wall: any, wallIndex: number, offsets: Record<number, number>, time: number) => any;
  getCrusherWallPosition?: (wall: Wall, time: number) => Wall;
  getOrbitingHazardPosition?: (hazard: Hazard, time: number) => { x: number; y: number };
  isLaserActive?: (laser: LaserGate, time: number) => boolean;
  isBubbleVentActive?: (vent: BubbleVent, time: number) => boolean;
  getJellyfishPosition?: (jelly: Jellyfish, time: number) => { x: number; y: number };
  isTidalWaveActive?: (wave: TidalWave, time: number) => boolean;
  getTidalWaveWarning?: (wave: TidalWave, time: number) => boolean;
  GOAL_TIME_REQUIRED: number;
  gameMode: 'normal' | 'timeChallenge';
  worldTheme?: WorldTheme;
}

const CANVAS_SIZE = 600;

// Helper function to parse HSL string
const parseHSL = (hsl: string): { h: number; s: number; l: number } => {
  const parts = hsl.split(' ').map(p => parseFloat(p));
  return { h: parts[0], s: parts[1], l: parts[2] };
};

const hslToString = (h: number, s: number, l: number, a: number = 1): string => {
  return a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

export const useGameRenderer = ({
  level,
  gameStateRef,
  tiltRef,
  ballTrailRef,
  timePickupsRef,
  canvasRef,
  selectedBallSkin,
  particles,
  getMovingWallPosition,
  getCrusherWallPosition,
  getOrbitingHazardPosition,
  isLaserActive,
  isBubbleVentActive,
  getJellyfishPosition,
  isTidalWaveActive,
  getTidalWaveWarning,
  GOAL_TIME_REQUIRED,
  gameMode,
  worldTheme,
}: GameRendererConfig) => {
  const sparkTimeRef = useRef<number>(0);

  useEffect(() => {
    let renderLoopRef: number | null = null;
    
    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        renderLoopRef = requestAnimationFrame(render);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        renderLoopRef = requestAnimationFrame(render);
        return;
      }

      const state = gameStateRef.current;
      const currentTime = Date.now();

      // Clear with world-themed background
      const theme = worldTheme || WORLD_THEMES.techlab;
      ctx.fillStyle = theme.canvasBg;
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      
      // Subtle grid pattern with world color
      ctx.strokeStyle = theme.canvasBgAlt;
      ctx.lineWidth = 0.3;
      for (let gx = 0; gx < CANVAS_SIZE; gx += 30) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, CANVAS_SIZE);
        ctx.stroke();
      }
      for (let gy = 0; gy < CANVAS_SIZE; gy += 30) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(CANVAS_SIZE, gy);
        ctx.stroke();
      }

      // Draw ice surfaces
      drawIceSurfaces(ctx, level);

      // Draw gravity zones
      drawGravityZones(ctx, level, currentTime);

      // Draw conveyor zones
      drawConveyorZones(ctx, level, currentTime);

      // Draw water currents (Sunken Temple)
      drawWaterCurrents(ctx, level, currentTime);

      // Draw bubble vents (Sunken Temple)
      drawBubbleVents(ctx, level, currentTime, isBubbleVentActive);

      // Draw whirlpools
      drawWhirlpools(ctx, level, currentTime);

      // Draw tidal wave warnings
      drawTidalWaves(ctx, level, currentTime, isTidalWaveActive, getTidalWaveWarning);

      // Draw magnetic zones
      drawMagneticZones(ctx, level, currentTime);

      // Draw collectibles
      drawCollectibles(ctx, level, state, currentTime);

      // Draw power-ups
      drawPowerUps(ctx, level, state, currentTime);

      // Draw time pickups
      if (gameMode === 'timeChallenge') {
        drawTimePickups(ctx, timePickupsRef.current, state, currentTime);
      }

      // Draw switches
      drawSwitches(ctx, level, state);

      // Draw portals
      drawPortals(ctx, level, currentTime);

      // Draw walls
      drawWalls(ctx, level, state, currentTime, getMovingWallPosition, getCrusherWallPosition, theme);

      // Draw laser gates
      drawLaserGates(ctx, level, currentTime, isLaserActive);

      // Draw goal
      drawGoal(ctx, level, state, currentTime, GOAL_TIME_REQUIRED);

      // Draw hazards (including orbiting)
      drawHazards(ctx, level, currentTime, getOrbitingHazardPosition);

      // Draw jellyfish
      drawJellyfish(ctx, level, state, currentTime, getJellyfishPosition);

      // Draw sea mines
      drawSeaMines(ctx, level, state, currentTime);

      // Draw ball trails
      const skinColors = selectedBallSkin.colors.map(parseHSL);
      drawBallTrails(ctx, state, ballTrailRef.current, skinColors);

      // Draw balls
      drawBalls(ctx, state, selectedBallSkin, skinColors, currentTime, sparkTimeRef);

      // Draw active power-up indicators
      drawPowerUpIndicators(ctx, state, currentTime);

      // Draw tilt indicator
      drawTiltIndicator(ctx, tiltRef.current);

      // Render particles
      particles.renderParticles(ctx);

      // Dark mode overlay
      if (level.isDarkMode) {
        drawDarkModeOverlay(ctx, level, state, particles);
      }

      renderLoopRef = requestAnimationFrame(render);
    };

    renderLoopRef = requestAnimationFrame(render);
    
    return () => {
      if (renderLoopRef) {
        cancelAnimationFrame(renderLoopRef);
      }
    };
  }, [level, GOAL_TIME_REQUIRED, getMovingWallPosition, getCrusherWallPosition, getOrbitingHazardPosition, isLaserActive, isBubbleVentActive, getJellyfishPosition, isTidalWaveActive, getTidalWaveWarning, particles, gameMode, selectedBallSkin, canvasRef, gameStateRef, tiltRef, ballTrailRef, timePickupsRef]);
};

// Drawing helper functions
function drawIceSurfaces(ctx: CanvasRenderingContext2D, level: Level) {
  if (!level.iceSurfaces) return;
  
  for (const ice of level.iceSurfaces) {
    const iceGradient = ctx.createLinearGradient(ice.x, ice.y, ice.x + ice.width, ice.y + ice.height);
    iceGradient.addColorStop(0, 'hsla(200, 80%, 70%, 0.3)');
    iceGradient.addColorStop(0.5, 'hsla(200, 90%, 80%, 0.4)');
    iceGradient.addColorStop(1, 'hsla(200, 80%, 70%, 0.3)');
    ctx.fillStyle = iceGradient;
    ctx.fillRect(ice.x, ice.y, ice.width, ice.height);
    
    ctx.strokeStyle = 'hsla(200, 100%, 90%, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(ice.x + (i * ice.width / 5), ice.y);
      ctx.lineTo(ice.x + ((i + 1) * ice.width / 5), ice.y + ice.height);
      ctx.stroke();
    }
  }
}

function drawGravityZones(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.gravityZones) return;
  
  for (const zone of level.gravityZones) {
    const isHorizontal = zone.direction === 'left' || zone.direction === 'right';
    const gradient = isHorizontal 
      ? ctx.createLinearGradient(zone.x, zone.y, zone.x + zone.width, zone.y)
      : ctx.createLinearGradient(zone.x, zone.y, zone.x, zone.y + zone.height);
    
    const isPositive = zone.direction === 'down' || zone.direction === 'right';
    const hue = isPositive ? 280 : 180;
    
    if (zone.direction === 'right' || zone.direction === 'down') {
      gradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.1)`);
      gradient.addColorStop(1, `hsla(${hue}, 70%, 50%, 0.35)`);
    } else {
      gradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.35)`);
      gradient.addColorStop(1, `hsla(${hue}, 70%, 50%, 0.1)`);
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
    
    ctx.strokeStyle = `hsla(${hue}, 80%, 60%, 0.6)`;
    ctx.lineWidth = 2;
    
    const arrowSize = 12;
    const spacing = 40;
    const animOffset = (currentTime * 0.05) % spacing;
    
    for (let x = zone.x + spacing / 2; x < zone.x + zone.width; x += spacing) {
      for (let y = zone.y + spacing / 2; y < zone.y + zone.height; y += spacing) {
        ctx.save();
        ctx.translate(x, y);
        
        switch (zone.direction) {
          case 'up': ctx.rotate(-Math.PI / 2); break;
          case 'down': ctx.rotate(Math.PI / 2); break;
          case 'left': ctx.rotate(Math.PI); break;
          case 'right': break;
        }
        
        const animX = isHorizontal 
          ? (zone.direction === 'right' ? animOffset - spacing / 2 : spacing / 2 - animOffset)
          : 0;
        
        ctx.beginPath();
        ctx.moveTo(-arrowSize + animX, 0);
        ctx.lineTo(arrowSize + animX, 0);
        ctx.moveTo(arrowSize / 2 + animX, -arrowSize / 2);
        ctx.lineTo(arrowSize + animX, 0);
        ctx.lineTo(arrowSize / 2 + animX, arrowSize / 2);
        ctx.stroke();
        
        ctx.restore();
      }
    }
    
    ctx.strokeStyle = `hsla(${hue}, 70%, 50%, 0.4)`;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.strokeRect(zone.x, zone.y, zone.width, zone.height);
    ctx.setLineDash([]);
  }
}

function drawCollectibles(ctx: CanvasRenderingContext2D, level: Level, state: GameState, currentTime: number) {
  if (!level.collectibles) return;
  
  for (const collectible of level.collectibles) {
    if (state.collectedItems.includes(collectible.id)) continue;
    
    const bobOffset = Math.sin(currentTime * 0.004 + collectible.id) * 3;
    const rotationAngle = currentTime * 0.002;
    
    ctx.save();
    ctx.translate(collectible.x, collectible.y + bobOffset);
    
    if (collectible.type === 'gem') {
      const gemGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, collectible.radius * 2);
      gemGlow.addColorStop(0, 'hsla(280, 80%, 60%, 0.5)');
      gemGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = gemGlow;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius * 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.rotate(rotationAngle);
      ctx.beginPath();
      ctx.moveTo(0, -collectible.radius);
      ctx.lineTo(collectible.radius * 0.7, 0);
      ctx.lineTo(0, collectible.radius);
      ctx.lineTo(-collectible.radius * 0.7, 0);
      ctx.closePath();
      
      const gemGradient = ctx.createLinearGradient(-collectible.radius, -collectible.radius, collectible.radius, collectible.radius);
      gemGradient.addColorStop(0, 'hsl(280, 90%, 70%)');
      gemGradient.addColorStop(0.5, 'hsl(300, 85%, 60%)');
      gemGradient.addColorStop(1, 'hsl(260, 80%, 55%)');
      ctx.fillStyle = gemGradient;
      ctx.fill();
      
      ctx.strokeStyle = 'hsla(280, 100%, 85%, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    } else if (collectible.type === 'key') {
      // Key collectible - golden key with glow
      const keyGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, collectible.radius * 2);
      keyGlow.addColorStop(0, 'hsla(45, 100%, 60%, 0.5)');
      keyGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = keyGlow;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Key body
      const keyGrad = ctx.createRadialGradient(-2, -2, 0, 0, 0, collectible.radius);
      keyGrad.addColorStop(0, 'hsl(45, 100%, 75%)');
      keyGrad.addColorStop(0.7, 'hsl(40, 95%, 55%)');
      keyGrad.addColorStop(1, 'hsl(35, 90%, 40%)');
      ctx.fillStyle = keyGrad;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = 'hsl(40, 100%, 65%)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Key icon
      ctx.fillStyle = 'hsla(0, 0%, 100%, 0.9)';
      ctx.font = `bold ${collectible.radius}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🔑', 0, 0);
    } else {
      const coinGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, collectible.radius * 1.8);
      coinGlow.addColorStop(0, 'hsla(43, 96%, 56%, 0.4)');
      coinGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = coinGlow;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius * 1.8, 0, Math.PI * 2);
      ctx.fill();
      
      const coinGradient = ctx.createRadialGradient(
        -collectible.radius * 0.3, -collectible.radius * 0.3, 0,
        0, 0, collectible.radius
      );
      coinGradient.addColorStop(0, 'hsl(43, 100%, 75%)');
      coinGradient.addColorStop(0.7, 'hsl(43, 96%, 56%)');
      coinGradient.addColorStop(1, 'hsl(35, 90%, 40%)');
      ctx.fillStyle = coinGradient;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = 'hsl(35, 85%, 35%)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.strokeStyle = 'hsl(43, 90%, 65%)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, collectible.radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    ctx.restore();
  }
}

function drawPowerUps(ctx: CanvasRenderingContext2D, level: Level, state: GameState, currentTime: number) {
  if (!level.powerUps) return;
  
  for (const powerUp of level.powerUps) {
    if (state.collectedPowerUps.includes(powerUp.id)) continue;
    
    const bobOffset = Math.sin(currentTime * 0.005 + powerUp.id * 2) * 4;
    const rotationAngle = currentTime * 0.003;
    const pulseScale = 1 + Math.sin(currentTime * 0.006) * 0.1;
    
    ctx.save();
    ctx.translate(powerUp.x, powerUp.y + bobOffset);
    
    let primaryColor: string;
    let secondaryColor: string;
    
    switch (powerUp.type) {
      case 'shield':
        primaryColor = 'hsl(180, 90%, 50%)';
        secondaryColor = 'hsl(200, 85%, 60%)';
        break;
      case 'speed':
        primaryColor = 'hsl(40, 95%, 55%)';
        secondaryColor = 'hsl(30, 90%, 50%)';
        break;
      case 'multiplier':
        primaryColor = 'hsl(280, 85%, 60%)';
        secondaryColor = 'hsl(300, 80%, 55%)';
        break;
    }
    
    const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, powerUp.radius * 2.5 * pulseScale);
    glowGradient.addColorStop(0, primaryColor.replace(')', ', 0.6)').replace('hsl', 'hsla'));
    glowGradient.addColorStop(0.5, primaryColor.replace(')', ', 0.3)').replace('hsl', 'hsla'));
    glowGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(0, 0, powerUp.radius * 2.5 * pulseScale, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.save();
    ctx.rotate(rotationAngle);
    ctx.strokeStyle = secondaryColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.arc(0, 0, powerUp.radius * 1.3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
    
    const bodyGradient = ctx.createRadialGradient(
      -powerUp.radius * 0.3, -powerUp.radius * 0.3, 0,
      0, 0, powerUp.radius
    );
    bodyGradient.addColorStop(0, secondaryColor);
    bodyGradient.addColorStop(0.7, primaryColor);
    bodyGradient.addColorStop(1, primaryColor.replace(/\d+%\)$/, '40%)'));
    ctx.fillStyle = bodyGradient;
    ctx.beginPath();
    ctx.arc(0, 0, powerUp.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = secondaryColor;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    drawPowerUpIcon(ctx, powerUp.type, powerUp.radius, '#fff');
    
    ctx.restore();
  }
}

function drawTimePickups(ctx: CanvasRenderingContext2D, pickups: TimePickup[], state: GameState, currentTime: number) {
  for (const pickup of pickups) {
    if (state.collectedTimePickups.includes(pickup.id)) continue;
    
    const bobOffset = Math.sin(currentTime * 0.005 + pickup.id) * 4;
    const pulseScale = 1 + Math.sin(currentTime * 0.006) * 0.15;
    const rotationAngle = currentTime * 0.003;
    
    ctx.save();
    ctx.translate(pickup.x, pickup.y + bobOffset);
    
    const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, pickup.radius * 2.5 * pulseScale);
    glowGradient.addColorStop(0, 'hsla(160, 90%, 50%, 0.6)');
    glowGradient.addColorStop(0.5, 'hsla(160, 90%, 50%, 0.3)');
    glowGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(0, 0, pickup.radius * 2.5 * pulseScale, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.save();
    ctx.rotate(rotationAngle);
    ctx.strokeStyle = 'hsl(180, 85%, 60%)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 3]);
    ctx.beginPath();
    ctx.arc(0, 0, pickup.radius * 1.4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
    
    const bodyGradient = ctx.createRadialGradient(
      -pickup.radius * 0.3, -pickup.radius * 0.3, 0,
      0, 0, pickup.radius
    );
    bodyGradient.addColorStop(0, 'hsl(180, 95%, 70%)');
    bodyGradient.addColorStop(0.7, 'hsl(160, 90%, 50%)');
    bodyGradient.addColorStop(1, 'hsl(140, 85%, 40%)');
    ctx.fillStyle = bodyGradient;
    ctx.beginPath();
    ctx.arc(0, 0, pickup.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'hsl(180, 90%, 65%)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${pickup.radius * 0.8}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`+${pickup.bonusTime}`, 0, 0);
    
    ctx.restore();
  }
}

function drawSwitches(ctx: CanvasRenderingContext2D, level: Level, state: GameState) {
  if (!level.switches) return;
  
  for (const sw of level.switches) {
    const isActivated = state.activatedSwitches.includes(sw.id);
    
    const switchGlow = ctx.createRadialGradient(sw.x, sw.y, 0, sw.x, sw.y, sw.radius * 2);
    if (isActivated) {
      switchGlow.addColorStop(0, 'hsla(120, 80%, 50%, 0.5)');
      switchGlow.addColorStop(1, 'transparent');
    } else {
      switchGlow.addColorStop(0, 'hsla(40, 80%, 50%, 0.3)');
      switchGlow.addColorStop(1, 'transparent');
    }
    ctx.fillStyle = switchGlow;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius * 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = isActivated ? 'hsl(120, 70%, 45%)' : 'hsl(40, 70%, 50%)';
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = isActivated ? 'hsl(120, 80%, 60%)' : 'hsl(40, 80%, 60%)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawPortals(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.portals) return;
  
  for (const portal of level.portals) {
    const pulseScale = 1 + Math.sin(currentTime * 0.003 + portal.id) * 0.15;
    const portalGlow = ctx.createRadialGradient(portal.x, portal.y, 0, portal.x, portal.y, portal.radius * 2 * pulseScale);
    portalGlow.addColorStop(0, portal.color.replace('1)', '0.6)'));
    portalGlow.addColorStop(0.5, portal.color.replace('1)', '0.3)'));
    portalGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = portalGlow;
    ctx.beginPath();
    ctx.arc(portal.x, portal.y, portal.radius * 2 * pulseScale, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.save();
    ctx.translate(portal.x, portal.y);
    ctx.rotate(currentTime * 0.002);
    
    const innerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, portal.radius);
    innerGradient.addColorStop(0, 'hsl(0, 0%, 5%)');
    innerGradient.addColorStop(0.6, portal.color.replace('1)', '0.8)'));
    innerGradient.addColorStop(1, portal.color);
    ctx.fillStyle = innerGradient;
    ctx.beginPath();
    ctx.arc(0, 0, portal.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = portal.color.replace('1)', '0.5)');
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      const angle = (Math.PI / 2) * i;
      ctx.beginPath();
      ctx.arc(0, 0, portal.radius * 0.6, angle, angle + Math.PI / 4);
      ctx.stroke();
    }
    
    ctx.restore();
    
    ctx.strokeStyle = portal.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(portal.x, portal.y, portal.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawWalls(
  ctx: CanvasRenderingContext2D, 
  level: Level, 
  state: GameState, 
  currentTime: number,
  getMovingWallPosition: (wall: any, wallIndex: number, offsets: Record<number, number>, time: number) => any,
  getCrusherWallPosition?: (wall: Wall, time: number) => Wall,
  theme?: WorldTheme
) {
  for (let i = 0; i < level.walls.length; i++) {
    let wall = level.walls[i];
    
    if (wall.switchId !== undefined && !state.activatedSwitches.includes(wall.switchId)) {
      ctx.strokeStyle = 'hsla(40, 70%, 50%, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(wall.x, wall.y, wall.width, wall.height);
      ctx.setLineDash([]);
      continue;
    }

    // Coral gate: check if player has enough keys
    if (wall.requiredKeys !== undefined) {
      const collectedKeyCount = (level.collectibles || [])
        .filter(c => c.type === 'key' && state.collectedItems.includes(c.id))
        .length;
      if (collectedKeyCount >= wall.requiredKeys) {
        // Gate is open - draw faded outline
        ctx.strokeStyle = 'hsla(30, 70%, 50%, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        ctx.strokeRect(wall.x, wall.y, wall.width, wall.height);
        ctx.setLineDash([]);
        continue;
      }
      // Draw coral gate
      const coralGradient = ctx.createLinearGradient(wall.x, wall.y, wall.x + wall.width, wall.y + wall.height);
      coralGradient.addColorStop(0, 'hsl(15, 70%, 45%)');
      coralGradient.addColorStop(0.5, 'hsl(25, 80%, 55%)');
      coralGradient.addColorStop(1, 'hsl(10, 65%, 40%)');
      ctx.fillStyle = coralGradient;
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
      ctx.shadowColor = 'hsl(20, 80%, 50%)';
      ctx.shadowBlur = 8;
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
      ctx.shadowBlur = 0;
      // Draw key icon on gate
      ctx.fillStyle = 'hsla(43, 100%, 75%, 0.9)';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`🔑${wall.requiredKeys}`, wall.x + wall.width / 2, wall.y + wall.height / 2);
      continue;
    }
    
    if (wall.isMoving) {
      wall = getMovingWallPosition(wall, i, {}, currentTime);
      ctx.fillStyle = 'hsl(280, 40%, 45%)';
    } else if (wall.isCrusher && getCrusherWallPosition) {
      wall = getCrusherWallPosition(wall, currentTime);
      ctx.fillStyle = 'hsl(0, 50%, 45%)';
    } else if (wall.isBouncy) {
      ctx.fillStyle = 'hsl(120, 60%, 45%)';
    } else {
      ctx.fillStyle = theme?.wallColor || 'hsl(220, 15%, 35%)';
    }
    
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    // Glow effects for special walls
    if (level.walls[i].isMoving) {
      ctx.shadowColor = 'hsl(280, 60%, 50%)';
      ctx.shadowBlur = 10;
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
      ctx.shadowBlur = 0;
    } else if (level.walls[i].isCrusher) {
      ctx.shadowColor = 'hsl(0, 70%, 50%)';
      ctx.shadowBlur = 12;
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
      ctx.shadowBlur = 0;
    } else if (level.walls[i].isBouncy) {
      ctx.shadowColor = 'hsl(120, 70%, 50%)';
      ctx.shadowBlur = 10;
      ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
      ctx.shadowBlur = 0;
      
      // Draw bounce indicator arrows
      ctx.strokeStyle = 'hsla(120, 80%, 70%, 0.8)';
      ctx.lineWidth = 2;
      const centerX = wall.x + wall.width / 2;
      const centerY = wall.y + wall.height / 2;
      
      // Draw bouncy pattern
      for (let j = 0; j < 3; j++) {
        const offset = (currentTime * 0.003 + j * 0.5) % 1.5;
        ctx.globalAlpha = 1 - offset / 1.5;
        ctx.beginPath();
        if (wall.width > wall.height) {
          ctx.arc(centerX, wall.y - 5 - offset * 10, 3, 0, Math.PI * 2);
          ctx.arc(centerX, wall.y + wall.height + 5 + offset * 10, 3, 0, Math.PI * 2);
        } else {
          ctx.arc(wall.x - 5 - offset * 10, centerY, 3, 0, Math.PI * 2);
          ctx.arc(wall.x + wall.width + 5 + offset * 10, centerY, 3, 0, Math.PI * 2);
        }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }
}

function drawGoal(ctx: CanvasRenderingContext2D, level: Level, state: GameState, currentTime: number, GOAL_TIME_REQUIRED: number) {
  const pulseScale = 1 + Math.sin(currentTime * 0.004) * 0.15;
  const pulseOpacity = 0.3 + Math.sin(currentTime * 0.003) * 0.15;
  
  const outerRingRadius = level.goal.radius * 1.8 * pulseScale;
  ctx.strokeStyle = `hsla(160, 84%, 55%, ${0.3 + Math.sin(currentTime * 0.005) * 0.2})`;
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, outerRingRadius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  const goalGlow = ctx.createRadialGradient(
    level.goal.x, level.goal.y, 0,
    level.goal.x, level.goal.y, level.goal.radius * 2
  );
  goalGlow.addColorStop(0, `hsla(160, 84%, 45%, ${pulseOpacity})`);
  goalGlow.addColorStop(0.6, 'hsla(160, 84%, 45%, 0.1)');
  goalGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = goalGlow;
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, level.goal.radius * 2, 0, Math.PI * 2);
  ctx.fill();

  const innerGradient = ctx.createRadialGradient(
    level.goal.x, level.goal.y, 0,
    level.goal.x, level.goal.y, level.goal.radius
  );
  innerGradient.addColorStop(0, 'hsla(160, 84%, 55%, 0.35)');
  innerGradient.addColorStop(0.7, 'hsla(160, 84%, 45%, 0.2)');
  innerGradient.addColorStop(1, 'hsla(160, 84%, 40%, 0.15)');
  ctx.fillStyle = innerGradient;
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, level.goal.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'hsl(160, 84%, 50%)';
  ctx.lineWidth = 4;
  ctx.shadowColor = 'hsl(160, 84%, 50%)';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, level.goal.radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.strokeStyle = 'hsla(160, 84%, 60%, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, level.goal.radius * 0.7, 0, Math.PI * 2);
  ctx.stroke();

  ctx.save();
  ctx.font = 'bold 14px "Source Sans Pro", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'hsl(160, 84%, 70%)';
  ctx.shadowColor = 'hsl(160, 84%, 50%)';
  ctx.shadowBlur = 8;
  ctx.fillText('GOAL', level.goal.x, level.goal.y);
  ctx.shadowBlur = 0;
  ctx.restore();

  if (state.goalTimer > 0) {
    const progress = state.goalTimer / GOAL_TIME_REQUIRED;
    ctx.strokeStyle = 'hsl(160, 90%, 65%)';
    ctx.lineWidth = 6;
    ctx.shadowColor = 'hsl(160, 90%, 60%)';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(level.goal.x, level.goal.y, level.goal.radius + 10, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    ctx.save();
    ctx.font = 'bold 12px "Source Sans Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'hsl(160, 90%, 80%)';
    ctx.fillText(`${Math.round(progress * 100)}%`, level.goal.x, level.goal.y + level.goal.radius * 0.4);
    ctx.restore();
  }
}

function drawHazards(
  ctx: CanvasRenderingContext2D, 
  level: Level, 
  currentTime: number,
  getOrbitingHazardPosition?: (hazard: Hazard, time: number) => { x: number; y: number }
) {
  for (const hazard of level.hazards) {
    // Get position (may be orbiting)
    let pos = { x: hazard.x, y: hazard.y };
    if (hazard.isOrbiting && getOrbitingHazardPosition) {
      pos = getOrbitingHazardPosition(hazard, currentTime);
      
      // Draw orbit path
      if (hazard.orbitCenterX && hazard.orbitCenterY && hazard.orbitRadius) {
        ctx.strokeStyle = 'hsla(0, 50%, 40%, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(hazard.orbitCenterX, hazard.orbitCenterY, hazard.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    
    const hazardGlow = ctx.createRadialGradient(
      pos.x, pos.y, 0,
      pos.x, pos.y, hazard.radius * 2
    );
    hazardGlow.addColorStop(0, 'hsla(0, 72%, 50%, 0.4)');
    hazardGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = hazardGlow;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, hazard.radius * 2, 0, Math.PI * 2);
    ctx.fill();

    const holeGradient = ctx.createRadialGradient(
      pos.x, pos.y, 0,
      pos.x, pos.y, hazard.radius
    );
    holeGradient.addColorStop(0, 'hsl(0, 0%, 0%)');
    holeGradient.addColorStop(0.7, 'hsl(0, 0%, 5%)');
    holeGradient.addColorStop(1, 'hsl(0, 72%, 30%)');
    ctx.fillStyle = holeGradient;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, hazard.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// New rendering functions for new mechanics

function drawConveyorZones(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.conveyorZones) return;
  
  for (const zone of level.conveyorZones) {
    // Draw conveyor belt background
    const gradient = ctx.createLinearGradient(
      zone.direction === 'left' ? zone.x + zone.width : zone.x,
      zone.direction === 'up' ? zone.y + zone.height : zone.y,
      zone.direction === 'right' ? zone.x + zone.width : zone.x,
      zone.direction === 'down' ? zone.y + zone.height : zone.y
    );
    gradient.addColorStop(0, 'hsla(30, 60%, 30%, 0.4)');
    gradient.addColorStop(0.5, 'hsla(30, 70%, 40%, 0.5)');
    gradient.addColorStop(1, 'hsla(30, 60%, 30%, 0.4)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(zone.x, zone.y, zone.width, zone.height);
    
    // Draw animated arrows
    ctx.strokeStyle = 'hsla(30, 80%, 60%, 0.8)';
    ctx.lineWidth = 2;
    
    const arrowSize = 10;
    const spacing = 30;
    const animSpeed = zone.speed * 50;
    const animOffset = (currentTime * animSpeed * 0.001) % spacing;
    
    const isHorizontal = zone.direction === 'left' || zone.direction === 'right';
    const isPositive = zone.direction === 'right' || zone.direction === 'down';
    
    for (let i = 0; i < (isHorizontal ? zone.width : zone.height) / spacing + 2; i++) {
      for (let j = 0; j < (isHorizontal ? zone.height : zone.width) / spacing; j++) {
        let x, y;
        if (isHorizontal) {
          x = zone.x + i * spacing + (isPositive ? animOffset : -animOffset) - spacing;
          y = zone.y + j * spacing + spacing / 2;
        } else {
          x = zone.x + j * spacing + spacing / 2;
          y = zone.y + i * spacing + (isPositive ? animOffset : -animOffset) - spacing;
        }
        
        if (x < zone.x || x > zone.x + zone.width || y < zone.y || y > zone.y + zone.height) continue;
        
        ctx.save();
        ctx.translate(x, y);
        
        switch (zone.direction) {
          case 'right': ctx.rotate(0); break;
          case 'down': ctx.rotate(Math.PI / 2); break;
          case 'left': ctx.rotate(Math.PI); break;
          case 'up': ctx.rotate(-Math.PI / 2); break;
        }
        
        ctx.beginPath();
        ctx.moveTo(-arrowSize, -arrowSize / 2);
        ctx.lineTo(0, 0);
        ctx.lineTo(-arrowSize, arrowSize / 2);
        ctx.stroke();
        
        ctx.restore();
      }
    }
    
    // Border
    ctx.strokeStyle = 'hsla(30, 70%, 50%, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeRect(zone.x, zone.y, zone.width, zone.height);
  }
}

function drawLaserGates(
  ctx: CanvasRenderingContext2D, 
  level: Level, 
  currentTime: number,
  isLaserActive?: (laser: LaserGate, time: number) => boolean
) {
  if (!level.laserGates || !isLaserActive) return;
  
  for (const laser of level.laserGates) {
    const active = isLaserActive(laser, currentTime);
    const color = laser.color || 'hsl(0, 90%, 50%)';
    
    // Draw endpoints
    ctx.fillStyle = active ? color : 'hsla(0, 0%, 50%, 0.5)';
    ctx.beginPath();
    ctx.arc(laser.x1, laser.y1, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(laser.x2, laser.y2, 6, 0, Math.PI * 2);
    ctx.fill();
    
    if (active) {
      // Draw laser beam with glow
      const pulseIntensity = 0.7 + Math.sin(currentTime * 0.02) * 0.3;
      
      // Outer glow
      ctx.strokeStyle = color.replace(')', `, ${pulseIntensity * 0.4})`).replace('hsl', 'hsla');
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(laser.x1, laser.y1);
      ctx.lineTo(laser.x2, laser.y2);
      ctx.stroke();
      
      // Inner beam
      ctx.strokeStyle = color.replace(')', `, ${pulseIntensity})`).replace('hsl', 'hsla');
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(laser.x1, laser.y1);
      ctx.lineTo(laser.x2, laser.y2);
      ctx.stroke();
      
      // Core
      ctx.strokeStyle = `rgba(255, 255, 255, ${pulseIntensity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(laser.x1, laser.y1);
      ctx.lineTo(laser.x2, laser.y2);
      ctx.stroke();
    } else {
      // Draw inactive laser (dashed)
      ctx.strokeStyle = 'hsla(0, 0%, 50%, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(laser.x1, laser.y1);
      ctx.lineTo(laser.x2, laser.y2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
}

function drawMagneticZones(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.magneticZones) return;
  
  for (const zone of level.magneticZones) {
    const isAttract = zone.type === 'attract';
    const baseHue = isAttract ? 220 : 340;
    
    // Draw pulsing rings
    const numRings = 3;
    for (let i = 0; i < numRings; i++) {
      const phase = (currentTime * 0.002 + i * 0.33) % 1;
      const ringRadius = isAttract 
        ? zone.radius * (1 - phase * 0.7) 
        : zone.radius * (0.3 + phase * 0.7);
      const alpha = (1 - phase) * 0.5;
      
      ctx.strokeStyle = `hsla(${baseHue}, 70%, 55%, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(zone.x, zone.y, ringRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Draw center
    const centerGlow = ctx.createRadialGradient(zone.x, zone.y, 0, zone.x, zone.y, 20);
    centerGlow.addColorStop(0, `hsla(${baseHue}, 80%, 60%, 0.8)`);
    centerGlow.addColorStop(1, `hsla(${baseHue}, 70%, 50%, 0)`);
    ctx.fillStyle = centerGlow;
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw icon
    ctx.fillStyle = `hsla(${baseHue}, 80%, 70%, 0.9)`;
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(isAttract ? '⊕' : '⊖', zone.x, zone.y);
    
    // Draw outer boundary
    ctx.strokeStyle = `hsla(${baseHue}, 60%, 50%, 0.3)`;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// ====== SUNKEN TEMPLE MECHANICS RENDERING ======

function drawWaterCurrents(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.waterCurrents) return;
  
  for (const current of level.waterCurrents) {
    // Draw water background with wave effect
    const waveOffset = Math.sin(currentTime * 0.003) * 3;
    
    const gradient = ctx.createLinearGradient(
      current.direction === 'left' ? current.x + current.width : current.x,
      current.direction === 'up' ? current.y + current.height : current.y,
      current.direction === 'right' ? current.x + current.width : current.x,
      current.direction === 'down' ? current.y + current.height : current.y
    );
    gradient.addColorStop(0, 'hsla(190, 70%, 45%, 0.25)');
    gradient.addColorStop(0.5, 'hsla(200, 80%, 55%, 0.35)');
    gradient.addColorStop(1, 'hsla(190, 70%, 45%, 0.25)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(current.x, current.y, current.width, current.height);
    
    // Draw flow lines
    ctx.strokeStyle = 'hsla(200, 90%, 70%, 0.6)';
    ctx.lineWidth = 2;
    
    const isHorizontal = current.direction === 'left' || current.direction === 'right';
    const isPositive = current.direction === 'right' || current.direction === 'down';
    const flowSpeed = (current.flowSpeed || 1) * current.strength * 30;
    const animOffset = (currentTime * flowSpeed * 0.001) % 40;
    
    // Draw animated flow lines
    const lineSpacing = 20;
    const numLines = isHorizontal ? Math.floor(current.height / lineSpacing) : Math.floor(current.width / lineSpacing);
    
    for (let i = 0; i < numLines; i++) {
      const offset = (i + 0.5) * lineSpacing;
      ctx.beginPath();
      
      if (isHorizontal) {
        const y = current.y + offset;
        const waveY = y + Math.sin((currentTime * 0.005 + i) + waveOffset) * 2;
        
        for (let x = current.x; x < current.x + current.width; x += 15) {
          const phase = (x - current.x + (isPositive ? animOffset : -animOffset)) % 40;
          const alpha = Math.sin((phase / 40) * Math.PI) * 0.8;
          ctx.globalAlpha = alpha;
          
          const waveX = x + Math.sin(currentTime * 0.003 + x * 0.05) * 1;
          if (x === current.x) {
            ctx.moveTo(waveX, waveY);
          } else {
            ctx.lineTo(waveX, waveY);
          }
        }
      } else {
        const x = current.x + offset;
        const waveX = x + Math.sin((currentTime * 0.005 + i) + waveOffset) * 2;
        
        for (let y = current.y; y < current.y + current.height; y += 15) {
          const phase = (y - current.y + (isPositive ? animOffset : -animOffset)) % 40;
          const alpha = Math.sin((phase / 40) * Math.PI) * 0.8;
          ctx.globalAlpha = alpha;
          
          const waveY = y + Math.sin(currentTime * 0.003 + y * 0.05) * 1;
          if (y === current.y) {
            ctx.moveTo(waveX, waveY);
          } else {
            ctx.lineTo(waveX, waveY);
          }
        }
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    
    // Draw border with wave effect
    ctx.strokeStyle = 'hsla(200, 80%, 60%, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(current.x, current.y, current.width, current.height);
    ctx.setLineDash([]);
    
    // Draw direction arrows
    ctx.fillStyle = 'hsla(200, 90%, 75%, 0.7)';
    const arrowSize = 8;
    const arrowSpacing = 50;
    
    const numArrowsX = Math.floor(current.width / arrowSpacing);
    const numArrowsY = Math.floor(current.height / arrowSpacing);
    
    for (let ax = 0; ax < numArrowsX; ax++) {
      for (let ay = 0; ay < numArrowsY; ay++) {
        const arrowX = current.x + (ax + 0.5) * arrowSpacing + (isPositive && isHorizontal ? animOffset : (!isPositive && isHorizontal ? -animOffset : 0));
        const arrowY = current.y + (ay + 0.5) * arrowSpacing + (isPositive && !isHorizontal ? animOffset : (!isPositive && !isHorizontal ? -animOffset : 0));
        
        if (arrowX < current.x || arrowX > current.x + current.width) continue;
        if (arrowY < current.y || arrowY > current.y + current.height) continue;
        
        ctx.save();
        ctx.translate(arrowX, arrowY);
        
        switch (current.direction) {
          case 'right': ctx.rotate(0); break;
          case 'down': ctx.rotate(Math.PI / 2); break;
          case 'left': ctx.rotate(Math.PI); break;
          case 'up': ctx.rotate(-Math.PI / 2); break;
        }
        
        ctx.beginPath();
        ctx.moveTo(-arrowSize, -arrowSize / 2);
        ctx.lineTo(arrowSize / 2, 0);
        ctx.lineTo(-arrowSize, arrowSize / 2);
        ctx.fill();
        
        ctx.restore();
      }
    }
  }
}

function drawBubbleVents(
  ctx: CanvasRenderingContext2D, 
  level: Level, 
  currentTime: number,
  isBubbleVentActive?: (vent: BubbleVent, time: number) => boolean
) {
  if (!level.bubbleVents) return;
  
  for (const vent of level.bubbleVents) {
    const isActive = isBubbleVentActive ? isBubbleVentActive(vent, currentTime) : false;
    
    // Draw vent base
    const ventGlow = ctx.createRadialGradient(vent.x, vent.y, 0, vent.x, vent.y, vent.radius * 1.5);
    ventGlow.addColorStop(0, isActive ? 'hsla(180, 80%, 60%, 0.6)' : 'hsla(180, 60%, 40%, 0.3)');
    ventGlow.addColorStop(0.6, isActive ? 'hsla(180, 70%, 50%, 0.3)' : 'hsla(180, 50%, 30%, 0.15)');
    ventGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = ventGlow;
    ctx.beginPath();
    ctx.arc(vent.x, vent.y, vent.radius * 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw vent opening
    const ventGradient = ctx.createRadialGradient(vent.x, vent.y, 0, vent.x, vent.y, vent.radius);
    ventGradient.addColorStop(0, isActive ? 'hsl(180, 70%, 55%)' : 'hsl(180, 40%, 35%)');
    ventGradient.addColorStop(0.7, isActive ? 'hsl(190, 60%, 45%)' : 'hsl(190, 30%, 25%)');
    ventGradient.addColorStop(1, isActive ? 'hsl(200, 50%, 35%)' : 'hsl(200, 20%, 20%)');
    ctx.fillStyle = ventGradient;
    ctx.beginPath();
    ctx.arc(vent.x, vent.y, vent.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw vent ring
    ctx.strokeStyle = isActive ? 'hsl(180, 80%, 65%)' : 'hsl(180, 50%, 45%)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(vent.x, vent.y, vent.radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw bubbles rising when active
    if (isActive) {
      const numBubbles = 8;
      const burstPhase = (currentTime % (vent.burstInterval || 500)) / (vent.burstDuration || 200);
      
      for (let i = 0; i < numBubbles; i++) {
        const angle = (i / numBubbles) * Math.PI * 2 + currentTime * 0.01;
        const progress = ((burstPhase * 3 + i * 0.15) % 1);
        const bubbleY = vent.y - progress * vent.radius * 4;
        const bubbleX = vent.x + Math.sin(angle + currentTime * 0.005) * (vent.radius * 0.5);
        const bubbleSize = (3 + i % 3) * (1 - progress * 0.5);
        const alpha = (1 - progress) * 0.7;
        
        if (bubbleY < vent.y && bubbleY > vent.y - vent.radius * 4) {
          ctx.fillStyle = `hsla(190, 90%, 75%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(bubbleX, bubbleY, bubbleSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Bubble highlight
          ctx.fillStyle = `hsla(190, 100%, 90%, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(bubbleX - bubbleSize * 0.3, bubbleY - bubbleSize * 0.3, bubbleSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Draw central burst effect
      const burstScale = 1 + Math.sin(currentTime * 0.02) * 0.2;
      ctx.strokeStyle = `hsla(180, 90%, 70%, ${0.5 + Math.sin(currentTime * 0.02) * 0.3})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(vent.x, vent.y - vent.radius * 0.5, vent.radius * 0.6 * burstScale, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Draw idle bubbles even when not active
    if (!isActive) {
      const idlePhase = (currentTime * 0.001) % 1;
      for (let i = 0; i < 3; i++) {
        const progress = (idlePhase + i * 0.33) % 1;
        const bubbleY = vent.y - progress * vent.radius * 2;
        const bubbleX = vent.x + Math.sin(currentTime * 0.002 + i) * (vent.radius * 0.3);
        const alpha = (1 - progress) * 0.3;
        
        ctx.fillStyle = `hsla(190, 70%, 65%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(bubbleX, bubbleY, 2 + i, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

function drawBallTrails(
  ctx: CanvasRenderingContext2D, 
  state: GameState, 
  trails: Array<{ x: number; y: number }[]>,
  skinColors: { h: number; s: number; l: number }[]
) {
  state.balls.forEach((ball, ballIdx) => {
    const trail = trails[ballIdx] || [];
    if (trail.length > 1) {
      for (let i = 1; i < trail.length; i++) {
        const alpha = (i / trail.length) * 0.6;
        const size = (i / trail.length) * ball.radius * 0.8;
        
        const colorIdx = skinColors.length > 1 ? Math.floor((i / trail.length) * (skinColors.length - 1)) : 0;
        const trailColor = skinColors[colorIdx];
        
        ctx.fillStyle = hslToString(trailColor.h, trailColor.s, trailColor.l, alpha);
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}

// Cache for loaded ball images
const ballImageCache: Record<string, HTMLImageElement> = {};

function loadBallImage(src: string): HTMLImageElement | null {
  if (ballImageCache[src]) {
    return ballImageCache[src].complete ? ballImageCache[src] : null;
  }
  const img = new Image();
  img.src = src;
  ballImageCache[src] = img;
  return img.complete ? img : null;
}

function drawBalls(
  ctx: CanvasRenderingContext2D, 
  state: GameState, 
  selectedBallSkin: BallSkin,
  skinColors: { h: number; s: number; l: number }[],
  currentTime: number,
  sparkTimeRef: React.MutableRefObject<number>
) {
  const hasShield = state.activePowerUps.some(p => p.type === 'shield' && p.endTime > currentTime);
  const hasSpeed = state.activePowerUps.some(p => p.type === 'speed' && p.endTime > currentTime);
  const hasMultiplier = state.activePowerUps.some(p => p.type === 'multiplier' && p.endTime > currentTime);
  
  sparkTimeRef.current = currentTime;
  
  const sparkHsl = parseHSL(selectedBallSkin.sparkColor);
  const primaryColor = skinColors[0];
  
  for (const ball of state.balls) {
    // Power-up effects
    if (hasShield) {
      const shieldPulse = 1 + Math.sin(currentTime * 0.008) * 0.1;
      ctx.strokeStyle = 'hsla(180, 90%, 60%, 0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius * 1.8 * shieldPulse, 0, Math.PI * 2);
      ctx.stroke();
      
      const shieldGlow = ctx.createRadialGradient(ball.x, ball.y, ball.radius, ball.x, ball.y, ball.radius * 2);
      shieldGlow.addColorStop(0, 'hsla(180, 80%, 60%, 0.3)');
      shieldGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = shieldGlow;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (hasSpeed) {
      const speedLines = 3;
      for (let i = 0; i < speedLines; i++) {
        const offset = (currentTime * 0.01 + i * Math.PI * 2 / speedLines) % (Math.PI * 2);
        const trailX = ball.x - Math.cos(offset) * ball.radius * 2;
        const trailY = ball.y - Math.sin(offset) * ball.radius * 0.5;
        ctx.fillStyle = hslToString(primaryColor.h, primaryColor.s, primaryColor.l + 10, 0.3 - i * 0.1);
        ctx.beginPath();
        ctx.arc(trailX, trailY, ball.radius * (0.4 - i * 0.1), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (hasMultiplier) {
      const sparkleCount = 4;
      for (let i = 0; i < sparkleCount; i++) {
        const angle = (currentTime * 0.003 + i * Math.PI * 2 / sparkleCount);
        const distance = ball.radius * 1.5 + Math.sin(currentTime * 0.01 + i) * 3;
        const sx = ball.x + Math.cos(angle) * distance;
        const sy = ball.y + Math.sin(angle) * distance;
        ctx.fillStyle = 'hsla(280, 85%, 65%, 0.8)';
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Ball glow
    const ballGlow = ctx.createRadialGradient(
      ball.x, ball.y, 0,
      ball.x, ball.y, ball.radius * 2.5
    );
    ballGlow.addColorStop(0, hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, 0.4));
    ballGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = ballGlow;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw ball based on pattern
    if (selectedBallSkin.pattern === 'image' && selectedBallSkin.imageUrl) {
      // Image-based ball rendering
      const img = loadBallImage(selectedBallSkin.imageUrl);
      if (img) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        // Slow rotation for image balls
        const rotAngle = currentTime * 0.001;
        ctx.translate(ball.x, ball.y);
        ctx.rotate(rotAngle);
        ctx.drawImage(img, -ball.radius, -ball.radius, ball.radius * 2, ball.radius * 2);
        ctx.restore();
      } else {
        // Fallback while loading
        ctx.fillStyle = hslToString(primaryColor.h, primaryColor.s, primaryColor.l);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle 3D highlight overlay for image balls
      const highlightGradient = ctx.createRadialGradient(
        ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
        ball.x, ball.y, ball.radius
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      highlightGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
      highlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      let ballGradient: CanvasGradient;
      
      switch (selectedBallSkin.pattern) {
        case 'radial':
          ballGradient = ctx.createRadialGradient(
            ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
            ball.x, ball.y, ball.radius
          );
          skinColors.forEach((c, i) => {
            ballGradient.addColorStop(i / Math.max(skinColors.length - 1, 1), hslToString(c.h, c.s, c.l));
          });
          break;
          
        case 'spiral':
          ctx.save();
          ctx.translate(ball.x, ball.y);
          const spiralAngle = currentTime * 0.002;
          ballGradient = ctx.createConicGradient(spiralAngle, 0, 0);
          skinColors.forEach((c, i) => {
            ballGradient.addColorStop(i / skinColors.length, hslToString(c.h, c.s, c.l));
          });
          ballGradient.addColorStop(1, hslToString(skinColors[0].h, skinColors[0].s, skinColors[0].l));
          ctx.fillStyle = ballGradient;
          ctx.beginPath();
          ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          break;
          
        case 'pulse':
          const pulsePhase = Math.sin(currentTime * 0.004) * 0.5 + 0.5;
          ballGradient = ctx.createRadialGradient(
            ball.x, ball.y, ball.radius * pulsePhase * 0.3,
            ball.x, ball.y, ball.radius
          );
          skinColors.forEach((c, i) => {
            const lightness = c.l + Math.sin(currentTime * 0.003 + i) * 10;
            ballGradient.addColorStop(i / Math.max(skinColors.length - 1, 1), hslToString(c.h, c.s, lightness));
          });
          break;
          
        case 'stripes':
          ballGradient = ctx.createLinearGradient(
            ball.x - ball.radius, ball.y - ball.radius,
            ball.x + ball.radius, ball.y + ball.radius
          );
          const stripeCount = skinColors.length * 2;
          for (let i = 0; i < stripeCount; i++) {
            const color = skinColors[i % skinColors.length];
            ballGradient.addColorStop(i / stripeCount, hslToString(color.h, color.s, color.l));
          }
          break;
          
        default:
          ballGradient = ctx.createRadialGradient(
            ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
            ball.x, ball.y, ball.radius
          );
          if (skinColors.length === 1) {
            ballGradient.addColorStop(0, hslToString(primaryColor.h, primaryColor.s, Math.min(primaryColor.l + 20, 100)));
            ballGradient.addColorStop(1, hslToString(primaryColor.h, primaryColor.s, Math.max(primaryColor.l - 10, 0)));
          } else {
            skinColors.forEach((c, i) => {
              ballGradient.addColorStop(i / Math.max(skinColors.length - 1, 1), hslToString(c.h, c.s, c.l));
            });
          }
      }
      
      if (selectedBallSkin.pattern !== 'spiral') {
        ctx.fillStyle = ballGradient;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3D Highlight
      const highlightGradient = ctx.createRadialGradient(
        ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
        ball.x, ball.y, ball.radius
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      highlightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
      highlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0.15)');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw sparks
    const sparkCount = selectedBallSkin.rarity === 'legendary' ? 8 : 
                      selectedBallSkin.rarity === 'epic' ? 6 : 
                      selectedBallSkin.rarity === 'rare' ? 4 : 3;
    
    for (let i = 0; i < sparkCount; i++) {
      const sparkAngle = (currentTime * 0.003 + (i * Math.PI * 2) / sparkCount);
      const sparkDist = ball.radius * (1.3 + Math.sin(currentTime * 0.005 + i * 1.5) * 0.3);
      const sparkX = ball.x + Math.cos(sparkAngle) * sparkDist;
      const sparkY = ball.y + Math.sin(sparkAngle) * sparkDist;
      const sparkSize = 2 + Math.sin(currentTime * 0.008 + i) * 1;
      const sparkAlpha = 0.5 + Math.sin(currentTime * 0.006 + i * 2) * 0.4;

      const sparkGlow = ctx.createRadialGradient(
        sparkX, sparkY, 0,
        sparkX, sparkY, sparkSize * 3
      );
      sparkGlow.addColorStop(0, hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, sparkAlpha));
      sparkGlow.addColorStop(1, hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, 0));
      ctx.fillStyle = sparkGlow;
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, sparkSize * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = hslToString(sparkHsl.h, sparkHsl.s, Math.min(sparkHsl.l + 20, 100), sparkAlpha + 0.3);
      ctx.beginPath();
      ctx.arc(sparkX, sparkY, sparkSize, 0, Math.PI * 2);
      ctx.fill();
    }

    // Extra twinkle particles for legendary/epic
    if (selectedBallSkin.rarity === 'legendary' || selectedBallSkin.rarity === 'epic') {
      for (let i = 0; i < 4; i++) {
        const twinkleAngle = currentTime * 0.002 + i * Math.PI / 2;
        const twinkleDist = ball.radius * 1.6;
        const twinkleX = ball.x + Math.cos(twinkleAngle) * twinkleDist;
        const twinkleY = ball.y + Math.sin(twinkleAngle) * twinkleDist;
        const twinkleSize = 1.5 + Math.sin(currentTime * 0.01 + i * 3) * 0.8;
        const twinkleAlpha = Math.max(0, Math.sin(currentTime * 0.007 + i * 2.5));

        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleAlpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(twinkleX, twinkleY, twinkleSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

function drawPowerUpIndicators(ctx: CanvasRenderingContext2D, state: GameState, currentTime: number) {
  let indicatorOffset = 0;
  for (const powerUp of state.activePowerUps) {
    if (powerUp.endTime <= currentTime) continue;
    
    const remaining = (powerUp.endTime - currentTime) / (powerUp.endTime - powerUp.startTime);
    const indicatorX = 60 + indicatorOffset * 45;
    const indicatorY = 50;
    
    let color: string;
    switch (powerUp.type) {
      case 'shield': color = 'hsl(180, 90%, 50%)'; break;
      case 'speed': color = 'hsl(40, 95%, 55%)'; break;
      case 'multiplier': color = 'hsl(280, 85%, 60%)'; break;
    }
    
    ctx.fillStyle = 'hsla(220, 15%, 15%, 0.8)';
    ctx.beginPath();
    ctx.arc(indicatorX, indicatorY, 18, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(indicatorX, indicatorY, 18, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * remaining);
    ctx.stroke();
    
    ctx.save();
    ctx.translate(indicatorX, indicatorY);
    drawPowerUpIcon(ctx, powerUp.type, 14, '#fff');
    ctx.restore();
    
    indicatorOffset++;
  }
}

function drawTiltIndicator(ctx: CanvasRenderingContext2D, tilt: { x: number; y: number }) {
  const tiltIndicatorX = CANVAS_SIZE - 50;
  const tiltIndicatorY = 50;
  const indicatorSize = 30;
  
  ctx.strokeStyle = 'hsla(220, 10%, 60%, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(tiltIndicatorX, tiltIndicatorY, indicatorSize, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.fillStyle = 'hsl(43, 96%, 56%)';
  ctx.beginPath();
  ctx.arc(
    tiltIndicatorX + tilt.x * indicatorSize * 0.8,
    tiltIndicatorY + tilt.y * indicatorSize * 0.8,
    6,
    0,
    Math.PI * 2
  );
  ctx.fill();
}

function drawDarkModeOverlay(ctx: CanvasRenderingContext2D, level: Level, state: GameState, particles: UseParticlesReturn) {
  const spotlightRadius = level.spotlightRadius || 80;
  
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  
  ctx.globalCompositeOperation = 'destination-out';
  
  for (const ball of state.balls) {
    const spotlightGradient = ctx.createRadialGradient(
      ball.x, ball.y, 0,
      ball.x, ball.y, spotlightRadius
    );
    spotlightGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    spotlightGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
    spotlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = spotlightGradient;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, spotlightRadius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  const goalSpotlight = ctx.createRadialGradient(
    level.goal.x, level.goal.y, 0,
    level.goal.x, level.goal.y, level.goal.radius * 1.5
  );
  goalSpotlight.addColorStop(0, 'rgba(0, 0, 0, 0.6)');
  goalSpotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = goalSpotlight;
  ctx.beginPath();
  ctx.arc(level.goal.x, level.goal.y, level.goal.radius * 1.5, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
  
  ctx.globalCompositeOperation = 'source-over';
  
  for (const ball of state.balls) {
    const ballGlow = ctx.createRadialGradient(
      ball.x, ball.y, 0,
      ball.x, ball.y, ball.radius * 2
    );
    ballGlow.addColorStop(0, 'hsla(43, 96%, 56%, 0.6)');
    ballGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = ballGlow;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius * 2, 0, Math.PI * 2);
    ctx.fill();

    const ballGradient = ctx.createRadialGradient(
      ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, 0,
      ball.x, ball.y, ball.radius
    );
    ballGradient.addColorStop(0, 'hsl(43, 100%, 75%)');
    ballGradient.addColorStop(1, 'hsl(43, 96%, 45%)');
    ctx.fillStyle = ballGradient;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'hsla(43, 100%, 90%, 0.6)';
    ctx.beginPath();
    ctx.arc(ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, ball.radius * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
  
  particles.renderParticles(ctx);
}

// ====== NEW SUNKEN TEMPLE MECHANICS RENDERING ======

function drawWhirlpools(ctx: CanvasRenderingContext2D, level: Level, currentTime: number) {
  if (!level.whirlpools) return;
  
  for (const whirl of level.whirlpools) {
    // Outer influence area
    const gradient = ctx.createRadialGradient(whirl.x, whirl.y, 0, whirl.x, whirl.y, whirl.radius);
    gradient.addColorStop(0, 'hsla(210, 80%, 40%, 0.4)');
    gradient.addColorStop(0.6, 'hsla(200, 70%, 50%, 0.15)');
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(whirl.x, whirl.y, whirl.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Spinning arms
    const dir = whirl.clockwise ? 1 : -1;
    const numArms = 4;
    for (let i = 0; i < numArms; i++) {
      const baseAngle = (i / numArms) * Math.PI * 2 + currentTime * 0.004 * dir;
      ctx.strokeStyle = `hsla(200, 90%, 70%, ${0.4 + Math.sin(currentTime * 0.005 + i) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let t = 0; t < 1; t += 0.05) {
        const r = whirl.radius * 0.15 + t * whirl.radius * 0.75;
        const angle = baseAngle + t * Math.PI * 1.5 * dir;
        const x = whirl.x + Math.cos(angle) * r;
        const y = whirl.y + Math.sin(angle) * r;
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    
    // Center vortex
    const centerGlow = ctx.createRadialGradient(whirl.x, whirl.y, 0, whirl.x, whirl.y, 12);
    centerGlow.addColorStop(0, 'hsla(220, 90%, 20%, 0.9)');
    centerGlow.addColorStop(0.5, 'hsla(210, 80%, 40%, 0.5)');
    centerGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = centerGlow;
    ctx.beginPath();
    ctx.arc(whirl.x, whirl.y, 12, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawJellyfish(
  ctx: CanvasRenderingContext2D,
  level: Level,
  state: GameState,
  currentTime: number,
  getJellyfishPosition?: (jelly: Jellyfish, time: number) => { x: number; y: number }
) {
  if (!level.jellyfish || !getJellyfishPosition) return;
  
  for (const jelly of level.jellyfish) {
    const pos = getJellyfishPosition(jelly, currentTime);
    const pulse = 1 + Math.sin(currentTime * 0.006 + jelly.id) * 0.15;
    
    // Glow aura
    const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, jelly.radius * 2.5);
    glow.addColorStop(0, 'hsla(280, 70%, 60%, 0.3)');
    glow.addColorStop(0.5, 'hsla(300, 60%, 50%, 0.1)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, jelly.radius * 2.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Body (dome)
    ctx.save();
    ctx.translate(pos.x, pos.y);
    
    const bodyGradient = ctx.createRadialGradient(0, -jelly.radius * 0.2, 0, 0, 0, jelly.radius);
    bodyGradient.addColorStop(0, 'hsla(290, 80%, 75%, 0.9)');
    bodyGradient.addColorStop(0.6, 'hsla(280, 70%, 55%, 0.7)');
    bodyGradient.addColorStop(1, 'hsla(270, 60%, 40%, 0.5)');
    ctx.fillStyle = bodyGradient;
    
    // Draw dome shape
    ctx.beginPath();
    ctx.arc(0, 0, jelly.radius * pulse, Math.PI, 0);
    ctx.quadraticCurveTo(jelly.radius * pulse * 0.8, jelly.radius * 0.4, 0, jelly.radius * 0.5);
    ctx.quadraticCurveTo(-jelly.radius * pulse * 0.8, jelly.radius * 0.4, -jelly.radius * pulse, 0);
    ctx.fill();
    
    // Tentacles
    ctx.strokeStyle = 'hsla(290, 70%, 65%, 0.6)';
    ctx.lineWidth = 1.5;
    const numTentacles = 5;
    for (let i = 0; i < numTentacles; i++) {
      const tx = (i - (numTentacles - 1) / 2) * (jelly.radius * 0.35);
      const tentLen = jelly.radius * 1.2;
      ctx.beginPath();
      ctx.moveTo(tx, jelly.radius * 0.3);
      const wave = Math.sin(currentTime * 0.008 + i * 0.7) * 4;
      ctx.quadraticCurveTo(tx + wave, jelly.radius * 0.3 + tentLen * 0.5, tx + wave * 0.5, jelly.radius * 0.3 + tentLen);
      ctx.stroke();
    }
    
    // Eyes
    ctx.fillStyle = 'hsla(0, 0%, 100%, 0.8)';
    ctx.beginPath();
    ctx.arc(-jelly.radius * 0.25, -jelly.radius * 0.1, 2.5, 0, Math.PI * 2);
    ctx.arc(jelly.radius * 0.25, -jelly.radius * 0.1, 2.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}

function drawSeaMines(
  ctx: CanvasRenderingContext2D,
  level: Level,
  state: GameState,
  currentTime: number
) {
  if (!level.seaMines) return;
  
  for (const mine of level.seaMines) {
    // Skip if exploded and respawning
    if (state.mineExplosions[mine.id] && currentTime < state.mineExplosions[mine.id]) {
      // Draw explosion effect fading out
      const respawnEnd = state.mineExplosions[mine.id];
      const elapsed = currentTime - (respawnEnd - mine.respawnTime);
      const progress = Math.min(1, elapsed / 300); // explosion animation 300ms
      if (progress < 1) {
        const explosionRadius = mine.blastRadius * progress;
        const alpha = (1 - progress) * 0.6;
        const gradient = ctx.createRadialGradient(mine.x, mine.y, 0, mine.x, mine.y, explosionRadius);
        gradient.addColorStop(0, `hsla(30, 100%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(15, 90%, 50%, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mine.x, mine.y, explosionRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      continue;
    }
    
    const bob = Math.sin(currentTime * 0.003 + mine.id) * 2;
    
    // Danger glow
    const dangerPulse = 0.3 + Math.sin(currentTime * 0.005 + mine.id * 2) * 0.15;
    const glow = ctx.createRadialGradient(mine.x, mine.y + bob, 0, mine.x, mine.y + bob, mine.radius * 2);
    glow.addColorStop(0, `hsla(0, 80%, 50%, ${dangerPulse})`);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(mine.x, mine.y + bob, mine.radius * 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Mine body
    const bodyGrad = ctx.createRadialGradient(mine.x - 2, mine.y + bob - 2, 0, mine.x, mine.y + bob, mine.radius);
    bodyGrad.addColorStop(0, 'hsl(0, 0%, 35%)');
    bodyGrad.addColorStop(0.7, 'hsl(0, 0%, 20%)');
    bodyGrad.addColorStop(1, 'hsl(0, 0%, 10%)');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.arc(mine.x, mine.y + bob, mine.radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Spikes
    const numSpikes = 8;
    for (let i = 0; i < numSpikes; i++) {
      const angle = (i / numSpikes) * Math.PI * 2;
      const sx = mine.x + Math.cos(angle) * mine.radius;
      const sy = mine.y + bob + Math.sin(angle) * mine.radius;
      const ex = mine.x + Math.cos(angle) * (mine.radius + 5);
      const ey = mine.y + bob + Math.sin(angle) * (mine.radius + 5);
      ctx.strokeStyle = 'hsl(0, 0%, 40%)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      ctx.fillStyle = 'hsl(0, 70%, 45%)';
      ctx.beginPath();
      ctx.arc(ex, ey, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Blinking red light
    const blinkOn = Math.sin(currentTime * 0.01) > 0;
    if (blinkOn) {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
      ctx.shadowColor = 'hsl(0, 100%, 50%)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(mine.x, mine.y + bob, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
}

function drawTidalWaves(
  ctx: CanvasRenderingContext2D,
  level: Level,
  currentTime: number,
  isTidalWaveActive?: (wave: TidalWave, time: number) => boolean,
  getTidalWaveWarning?: (wave: TidalWave, time: number) => boolean
) {
  if (!level.tidalWaves || !isTidalWaveActive || !getTidalWaveWarning) return;
  
  for (const wave of level.tidalWaves) {
    const isActive = isTidalWaveActive(wave, currentTime);
    const isWarning = getTidalWaveWarning(wave, currentTime);
    
    if (!isActive && !isWarning) continue;
    
    const isHorizontal = wave.direction === 'left' || wave.direction === 'right';
    
    if (isWarning) {
      // Warning indicator - flashing arrows
      const flash = Math.sin(currentTime * 0.015) > 0;
      if (flash) {
        ctx.fillStyle = 'hsla(45, 100%, 60%, 0.3)';
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const arrow = wave.direction;
        const pos = wave.direction === 'left' ? 580 : wave.direction === 'right' ? 20 : wave.direction === 'up' ? 580 : 20;
        for (let i = 0; i < 5; i++) {
          const offset = 60 + i * 120;
          const wx = isHorizontal ? pos : Math.min(offset, 560);
          const wy = isHorizontal ? Math.min(offset, 560) : pos;
          ctx.save();
          ctx.translate(wx, wy);
          drawWarningIcon(ctx, 12, ctx.fillStyle as string);
          ctx.translate(10, 0);
          drawArrowIcon(ctx, 10, arrow, ctx.fillStyle as string);
          ctx.restore();
        }
      }
    }
    
    if (isActive) {
      // Draw wave effect across the canvas
      const cycleTime = currentTime % wave.interval;
      const progress = (cycleTime - wave.warningTime) / wave.duration;
      const intensity = Math.sin(progress * Math.PI);
      
      // Full-canvas wave overlay
      ctx.save();
      const alpha = intensity * 0.15;
      
      if (isHorizontal) {
        const gradient = ctx.createLinearGradient(
          wave.direction === 'right' ? 0 : 600,
          0,
          wave.direction === 'right' ? 600 : 0,
          0
        );
        gradient.addColorStop(0, `hsla(200, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(210, 70%, 50%, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 600);
      } else {
        const gradient = ctx.createLinearGradient(
          0,
          wave.direction === 'down' ? 0 : 600,
          0,
          wave.direction === 'down' ? 600 : 0
        );
        gradient.addColorStop(0, `hsla(200, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(210, 70%, 50%, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 600, 600);
      }
      
      // Wave lines
      ctx.strokeStyle = `hsla(200, 90%, 70%, ${intensity * 0.4})`;
      ctx.lineWidth = 2;
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        const waveProgress = (progress + i * 0.1) % 1;
        ctx.beginPath();
        if (isHorizontal) {
          const x = wave.direction === 'right' ? waveProgress * 600 : 600 - waveProgress * 600;
          for (let y = 0; y < 600; y += 5) {
            const wx = x + Math.sin(y * 0.05 + currentTime * 0.01) * 10;
            if (y === 0) ctx.moveTo(wx, y);
            else ctx.lineTo(wx, y);
          }
        } else {
          const y = wave.direction === 'down' ? waveProgress * 600 : 600 - waveProgress * 600;
          for (let x = 0; x < 600; x += 5) {
            const wy = y + Math.sin(x * 0.05 + currentTime * 0.01) * 10;
            if (x === 0) ctx.moveTo(x, wy);
            else ctx.lineTo(x, wy);
          }
        }
        ctx.stroke();
      }
      ctx.restore();
    }
  }
}
