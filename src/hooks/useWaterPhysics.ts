import { useCallback } from 'react';
import { Ball, WaterCurrent, BubbleVent, Whirlpool, Jellyfish, SeaMine, TidalWave } from '@/types/game';

const WATER_DRAG = 0.92;
const BUBBLE_FORCE_BASE = 0.8;

export const useWaterPhysics = () => {
  const applyWaterCurrentForce = useCallback((
    ball: Ball,
    waterCurrents: WaterCurrent[]
  ): { x: number; y: number; inWater: boolean } => {
    let force = { x: 0, y: 0 };
    let inWater = false;
    
    for (const current of waterCurrents) {
      if (
        ball.x >= current.x &&
        ball.x <= current.x + current.width &&
        ball.y >= current.y &&
        ball.y <= current.y + current.height
      ) {
        inWater = true;
        const strength = current.strength * 0.4;
        switch (current.direction) {
          case 'up': force.y -= strength; break;
          case 'down': force.y += strength; break;
          case 'left': force.x -= strength; break;
          case 'right': force.x += strength; break;
        }
      }
    }
    return { ...force, inWater };
  }, []);

  const isBubbleVentActive = useCallback((vent: BubbleVent, time: number): boolean => {
    const interval = vent.burstInterval || 500;
    const duration = vent.burstDuration || 200;
    return (time % interval) < duration;
  }, []);

  const applyBubbleVentForce = useCallback((
    ball: Ball,
    bubbleVents: BubbleVent[],
    time: number
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const vent of bubbleVents) {
      const dx = ball.x - vent.x;
      const dy = ball.y - vent.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const effectiveRange = vent.radius * 4;
      const horizontalRange = vent.radius * 1.5;

      if (Math.abs(dx) < horizontalRange && ball.y <= vent.y + vent.radius && ball.y > vent.y - effectiveRange) {
        if (isBubbleVentActive(vent, time)) {
          const distFromVent = Math.max(0, vent.y - ball.y);
          const distanceFactor = 1 - (distFromVent / effectiveRange);
          force.y -= vent.strength * BUBBLE_FORCE_BASE * Math.max(0.3, distanceFactor);
          force.x += Math.sin(time * 0.01 + ball.x * 0.1) * 0.15;
        }
      }
      if (dist < vent.radius + ball.radius) {
        if (isBubbleVentActive(vent, time)) {
          force.y -= vent.strength * BUBBLE_FORCE_BASE * 1.8;
        }
      }
    }
    return force;
  }, [isBubbleVentActive]);

  // ====== WHIRLPOOL PHYSICS ======
  const applyWhirlpoolForce = useCallback((
    ball: Ball,
    whirlpools: Whirlpool[]
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const whirl of whirlpools) {
      const dx = ball.x - whirl.x;
      const dy = ball.y - whirl.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < whirl.radius && dist > 5) {
        const distFactor = 1 - (dist / whirl.radius);
        const nx = dx / dist;
        const ny = dy / dist;
        // Tangential force (perpendicular to radius)
        const dir = whirl.clockwise ? 1 : -1;
        force.x += (-ny * dir) * whirl.strength * distFactor;
        force.y += (nx * dir) * whirl.strength * distFactor;
        // Pull toward center
        force.x -= nx * whirl.pullStrength * distFactor;
        force.y -= ny * whirl.pullStrength * distFactor;
      }
    }
    return force;
  }, []);

  // ====== JELLYFISH POSITION ======
  const getJellyfishPosition = useCallback((
    jelly: Jellyfish,
    time: number
  ): { x: number; y: number } => {
    const t = time * jelly.moveSpeed * 0.001;
    switch (jelly.movePattern) {
      case 'vertical':
        return { x: jelly.x, y: jelly.y + Math.sin(t) * jelly.moveRange };
      case 'horizontal':
        return { x: jelly.x + Math.sin(t) * jelly.moveRange, y: jelly.y };
      case 'circular':
        return {
          x: jelly.x + Math.cos(t) * jelly.moveRange,
          y: jelly.y + Math.sin(t) * jelly.moveRange,
        };
      default:
        return { x: jelly.x, y: jelly.y };
    }
  }, []);

  // ====== SEA MINE PHYSICS ======
  const applySeaMineBlast = useCallback((
    ball: Ball,
    mine: SeaMine
  ): { x: number; y: number } => {
    const dx = ball.x - mine.x;
    const dy = ball.y - mine.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < mine.blastRadius && dist > 0) {
      const intensity = mine.blastForce * (1 - dist / mine.blastRadius);
      return { x: (dx / dist) * intensity, y: (dy / dist) * intensity };
    }
    return { x: 0, y: 0 };
  }, []);

  // ====== TIDAL WAVE PHYSICS ======
  const isTidalWaveActive = useCallback((wave: TidalWave, time: number): boolean => {
    const cycleTime = time % wave.interval;
    return cycleTime >= wave.warningTime && cycleTime < wave.warningTime + wave.duration;
  }, []);

  const getTidalWaveWarning = useCallback((wave: TidalWave, time: number): boolean => {
    const cycleTime = time % wave.interval;
    return cycleTime >= 0 && cycleTime < wave.warningTime;
  }, []);

  const applyTidalWaveForce = useCallback((
    ball: Ball,
    tidalWaves: TidalWave[],
    time: number
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const wave of tidalWaves) {
      if (!isTidalWaveActive(wave, time)) continue;
      const cycleTime = time % wave.interval;
      const progress = (cycleTime - wave.warningTime) / wave.duration;
      const intensity = Math.sin(progress * Math.PI); // ramp up then down
      switch (wave.direction) {
        case 'left': force.x -= wave.strength * intensity; break;
        case 'right': force.x += wave.strength * intensity; break;
        case 'up': force.y -= wave.strength * intensity; break;
        case 'down': force.y += wave.strength * intensity; break;
      }
    }
    return force;
  }, [isTidalWaveActive]);

  return {
    applyWaterCurrentForce,
    applyBubbleVentForce,
    isBubbleVentActive,
    applyWhirlpoolForce,
    getJellyfishPosition,
    applySeaMineBlast,
    isTidalWaveActive,
    getTidalWaveWarning,
    applyTidalWaveForce,
    WATER_DRAG,
  };
};
