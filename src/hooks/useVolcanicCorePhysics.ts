import { useCallback } from 'react';
import {
  Ball,
  LavaPool,
  HeatVent,
  MagmaFlow,
  CoolingPlatform,
  VolcanicEruption,
  LavaGeyser,
  SinkingPlatform,
  LavaSurf,
} from '@/types/game';

export const useVolcanicCorePhysics = () => {

  // ====== LAVA POOL ======
  const isBallInLavaPool = useCallback((ball: Ball, pool: LavaPool): boolean => {
    return (
      ball.x + ball.radius > pool.x &&
      ball.x - ball.radius < pool.x + pool.width &&
      ball.y + ball.radius > pool.y &&
      ball.y - ball.radius < pool.y + pool.height
    );
  }, []);

  const checkLavaPoolDamage = useCallback((
    ball: Ball,
    lavaPools: LavaPool[]
  ): { inLava: boolean; damageRate: number } => {
    for (const pool of lavaPools) {
      if (isBallInLavaPool(ball, pool)) {
        return { inLava: true, damageRate: pool.damage };
      }
    }
    return { inLava: false, damageRate: 0 };
  }, [isBallInLavaPool]);

  // ====== HEAT VENT ======
  const isHeatVentActive = useCallback((vent: HeatVent, time: number): boolean => {
    const cycleTime = time % vent.interval;
    return cycleTime >= vent.warningTime && cycleTime < vent.warningTime + vent.duration;
  }, []);

  const getHeatVentWarning = useCallback((vent: HeatVent, time: number): boolean => {
    const cycleTime = time % vent.interval;
    return cycleTime >= 0 && cycleTime < vent.warningTime;
  }, []);

  const applyHeatVentForce = useCallback((
    ball: Ball,
    heatVents: HeatVent[],
    time: number
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const vent of heatVents) {
      if (!isHeatVentActive(vent, time)) continue;

      const dx = ball.x - vent.x;
      const dy = ball.y - vent.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const effectiveRange = vent.radius * 3;

      if (dist < effectiveRange) {
        const cycleTime = time % vent.interval;
        const progress = (cycleTime - vent.warningTime) / vent.duration;
        const intensity = Math.sin(progress * Math.PI); // ramp up then down
        const distanceFactor = 1 - (dist / effectiveRange);

        // Strong upward force
        force.y -= vent.strength * intensity * distanceFactor;
        // Slight lateral wobble
        force.x += Math.sin(time * 0.015 + vent.x) * 0.3 * intensity;
      }
    }
    return force;
  }, [isHeatVentActive]);

  // ====== MAGMA FLOW ======
  const isBallInMagmaFlow = useCallback((ball: Ball, flow: MagmaFlow): boolean => {
    return (
      ball.x + ball.radius > flow.x &&
      ball.x - ball.radius < flow.x + flow.width &&
      ball.y + ball.radius > flow.y &&
      ball.y - ball.radius < flow.y + flow.height
    );
  }, []);

  const applyMagmaFlowForce = useCallback((
    ball: Ball,
    magmaFlows: MagmaFlow[]
  ): { x: number; y: number; inFlow: boolean; damageRate: number } => {
    let force = { x: 0, y: 0 };
    let inFlow = false;
    let damageRate = 0;

    for (const flow of magmaFlows) {
      if (!isBallInMagmaFlow(ball, flow)) continue;
      inFlow = true;
      damageRate = Math.max(damageRate, flow.damageRate);

      const speed = flow.speed * 0.4;
      switch (flow.direction) {
        case 'up': force.y -= speed; break;
        case 'down': force.y += speed; break;
        case 'left': force.x -= speed; break;
        case 'right': force.x += speed; break;
      }
    }
    return { ...force, inFlow, damageRate };
  }, [isBallInMagmaFlow]);

  // ====== COOLING PLATFORM ======
  const isCoolingPlatformSolid = useCallback((platform: CoolingPlatform, time: number): boolean => {
    const cycle = platform.solidDuration + platform.meltDuration;
    const offset = platform.startOffset || 0;
    const t = (time + offset) % cycle;
    return t < platform.solidDuration;
  }, []);

  const getCoolingPlatformOpacity = useCallback((platform: CoolingPlatform, time: number): number => {
    const cycle = platform.solidDuration + platform.meltDuration;
    const offset = platform.startOffset || 0;
    const t = (time + offset) % cycle;
    if (t < platform.solidDuration) {
      // Solid phase - dark obsidian
      const fadeTime = Math.min(300, platform.solidDuration * 0.2);
      if (t < fadeTime) return 0.3 + 0.7 * (t / fadeTime);
      if (t > platform.solidDuration - fadeTime) return 0.3 + 0.7 * ((platform.solidDuration - t) / fadeTime);
      return 1;
    }
    // Melted phase - glowing lava
    return 0.2;
  }, []);

  // ====== VOLCANIC ERUPTION ======
  const isEruptionActive = useCallback((eruption: VolcanicEruption, time: number): boolean => {
    const cycleTime = time % eruption.interval;
    return cycleTime >= eruption.warningTime && cycleTime < eruption.warningTime + eruption.debrisDuration;
  }, []);

  const getEruptionWarning = useCallback((eruption: VolcanicEruption, time: number): boolean => {
    const cycleTime = time % eruption.interval;
    return cycleTime >= 0 && cycleTime < eruption.warningTime;
  }, []);

  const spawnEruptionDebris = useCallback((
    eruption: VolcanicEruption,
    canvasSize: number
  ): { x: number; y: number; timer: number }[] => {
    const debris: { x: number; y: number; timer: number }[] = [];
    for (let i = 0; i < eruption.debrisCount; i++) {
      debris.push({
        x: Math.random() * (canvasSize - 40) + 20,
        y: Math.random() * (canvasSize - 40) + 20,
        timer: eruption.debrisDuration,
      });
    }
    return debris;
  }, []);

  const isBallHitByDebris = useCallback((
    ball: Ball,
    debris: { x: number; y: number; timer: number }[],
    debrisRadius: number
  ): boolean => {
    for (const d of debris) {
      if (d.timer <= 0) continue;
      const dx = ball.x - d.x;
      const dy = ball.y - d.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < debrisRadius + ball.radius) return true;
    }
    return false;
  }, []);

  // ====== LAVA GEYSER ======
  const isLavaGeyserActive = useCallback((geyser: LavaGeyser, time: number): boolean => {
    const cycleTime = time % geyser.interval;
    return cycleTime >= geyser.warningTime && cycleTime < geyser.warningTime + geyser.activeDuration;
  }, []);

  const getLavaGeyserWarning = useCallback((geyser: LavaGeyser, time: number): boolean => {
    const cycleTime = time % geyser.interval;
    return cycleTime >= 0 && cycleTime < geyser.warningTime;
  }, []);

  const isBallInGeyserColumn = useCallback((
    ball: Ball,
    geyser: LavaGeyser,
    time: number
  ): boolean => {
    if (!isLavaGeyserActive(geyser, time)) return false;
    return (
      ball.x + ball.radius > geyser.x &&
      ball.x - ball.radius < geyser.x + geyser.width &&
      ball.y + ball.radius > geyser.y - geyser.height &&
      ball.y - ball.radius < geyser.y
    );
  }, [isLavaGeyserActive]);

  // ====== SINKING PLATFORM ======
  const updateSinkingPlatform = useCallback((
    ball: Ball,
    platform: SinkingPlatform,
    currentDepth: number,
    dt: number
  ): { newDepth: number; isSunk: boolean } => {
    const isOnPlatform =
      ball.x + ball.radius > platform.x &&
      ball.x - ball.radius < platform.x + platform.width &&
      ball.y + ball.radius > platform.y + currentDepth &&
      ball.y - ball.radius < platform.y + platform.height + currentDepth;

    let newDepth = currentDepth;
    if (isOnPlatform) {
      newDepth = Math.min(currentDepth + platform.sinkSpeed * dt, platform.maxSinkDepth);
    } else {
      newDepth = Math.max(currentDepth - platform.riseSpeed * dt, 0);
    }

    return { newDepth, isSunk: newDepth >= platform.maxSinkDepth };
  }, []);

  const getSinkingPlatformRect = useCallback((
    platform: SinkingPlatform,
    depth: number
  ): { x: number; y: number; width: number; height: number } => {
    return {
      x: platform.x,
      y: platform.y + depth,
      width: platform.width,
      height: platform.height,
    };
  }, []);

  // ====== LAVA SURF ======
  const getLavaSurfProgress = useCallback((
    ball: Ball,
    surf: LavaSurf
  ): number | null => {
    const dx = surf.x2 - surf.x1;
    const dy = surf.y2 - surf.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;

    const bx = ball.x - surf.x1;
    const by = ball.y - surf.y1;
    const t = (bx * dx + by * dy) / (len * len);

    if (t < 0 || t > 1) return null;

    const projX = surf.x1 + t * dx;
    const projY = surf.y1 + t * dy;
    const distToLine = Math.sqrt((ball.x - projX) ** 2 + (ball.y - projY) ** 2);

    if (distToLine < surf.waveWidth + ball.radius) return t;
    return null;
  }, []);

  const moveAlongLavaSurf = useCallback((
    surf: LavaSurf,
    progress: number,
    speed: number,
    dt: number
  ): { x: number; y: number; progress: number; done: boolean } => {
    const dx = surf.x2 - surf.x1;
    const dy = surf.y2 - surf.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const step = (speed * dt) / len;
    const newProgress = Math.min(1, progress + step);

    return {
      x: surf.x1 + newProgress * dx,
      y: surf.y1 + newProgress * dy,
      progress: newProgress,
      done: newProgress >= 1,
    };
  }, []);

  return {
    // Lava Pool
    checkLavaPoolDamage,
    isBallInLavaPool,
    // Heat Vent
    isHeatVentActive,
    getHeatVentWarning,
    applyHeatVentForce,
    // Magma Flow
    applyMagmaFlowForce,
    isBallInMagmaFlow,
    // Cooling Platform
    isCoolingPlatformSolid,
    getCoolingPlatformOpacity,
    // Volcanic Eruption
    isEruptionActive,
    getEruptionWarning,
    spawnEruptionDebris,
    isBallHitByDebris,
    // Lava Geyser
    isLavaGeyserActive,
    getLavaGeyserWarning,
    isBallInGeyserColumn,
    // Sinking Platform
    updateSinkingPlatform,
    getSinkingPlatformRect,
    // Lava Surf
    getLavaSurfProgress,
    moveAlongLavaSurf,
  };
};
