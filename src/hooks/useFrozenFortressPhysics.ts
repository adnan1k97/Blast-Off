import { useCallback } from 'react';
import {
  Ball,
  ThawingIce,
  Snowdrift,
  FrozenGeyser,
  IceBridge,
  Blizzard,
  IcicleDrop,
  Avalanche,
  FrostRail,
} from '@/types/game';

export const useFrozenFortressPhysics = () => {

  // ====== THAWING ICE ======
  const isBallOnThawingIce = useCallback((ball: Ball, ice: ThawingIce): boolean => {
    return (
      ball.x + ball.radius > ice.x &&
      ball.x - ball.radius < ice.x + ice.width &&
      ball.y + ball.radius > ice.y &&
      ball.y - ball.radius < ice.y + ice.height
    );
  }, []);

  const isThawingIceMelted = useCallback((
    iceId: number,
    thawedIces: Record<number, number>,
    currentTime: number,
    thawTime: number,
    respawnTime: number
  ): boolean => {
    const startTime = thawedIces[iceId];
    if (startTime === undefined) return false;
    const elapsed = currentTime - startTime;
    if (elapsed < thawTime) return false;
    if (respawnTime > 0 && elapsed > thawTime + respawnTime) return false; // respawned
    return true;
  }, []);

  // ====== SNOWDRIFT ======
  const isBallInSnowdrift = useCallback((ball: Ball, drift: Snowdrift): boolean => {
    return (
      ball.x + ball.radius > drift.x &&
      ball.x - ball.radius < drift.x + drift.width &&
      ball.y + ball.radius > drift.y &&
      ball.y - ball.radius < drift.y + drift.height
    );
  }, []);

  const applySnowdriftEffect = useCallback((
    ball: Ball,
    snowdrifts: Snowdrift[]
  ): { inDrift: boolean; slowFactor: number } => {
    for (const drift of snowdrifts) {
      if (isBallInSnowdrift(ball, drift)) {
        return { inDrift: true, slowFactor: drift.slowFactor };
      }
    }
    return { inDrift: false, slowFactor: 1 };
  }, [isBallInSnowdrift]);

  // ====== FROZEN GEYSER ======
  const isFrozenGeyserActive = useCallback((geyser: FrozenGeyser, time: number): boolean => {
    const cycleTime = time % geyser.interval;
    return cycleTime >= geyser.warningTime && cycleTime < geyser.warningTime + geyser.duration;
  }, []);

  const getFrozenGeyserWarning = useCallback((geyser: FrozenGeyser, time: number): boolean => {
    const cycleTime = time % geyser.interval;
    return cycleTime >= 0 && cycleTime < geyser.warningTime;
  }, []);

  const applyFrozenGeyserForce = useCallback((
    ball: Ball,
    geysers: FrozenGeyser[],
    time: number
  ): { force: { x: number; y: number }; freeze: boolean; freezeDuration: number; freezeFactor: number } => {
    let force = { x: 0, y: 0 };
    for (const geyser of geysers) {
      if (!isFrozenGeyserActive(geyser, time)) continue;
      const dx = ball.x - geyser.x;
      const dy = ball.y - geyser.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const effectiveRange = geyser.radius * 3;
      if (dist < effectiveRange) {
        const cycleTime = time % geyser.interval;
        const progress = (cycleTime - geyser.warningTime) / geyser.duration;
        const intensity = Math.sin(progress * Math.PI);
        const distanceFactor = 1 - (dist / effectiveRange);
        force.y -= geyser.strength * intensity * distanceFactor;
        force.x += Math.sin(time * 0.01 + geyser.x) * 0.2 * intensity;
        if (dist < geyser.radius + ball.radius) {
          return { force, freeze: true, freezeDuration: geyser.freezeDuration, freezeFactor: geyser.freezeFactor };
        }
      }
    }
    return { force, freeze: false, freezeDuration: 0, freezeFactor: 1 };
  }, [isFrozenGeyserActive]);

  // ====== ICE BRIDGE ======
  const isBallOnIceBridge = useCallback((ball: Ball, bridge: IceBridge): boolean => {
    return (
      ball.x + ball.radius > bridge.x &&
      ball.x - ball.radius < bridge.x + bridge.width &&
      ball.y + ball.radius > bridge.y &&
      ball.y - ball.radius < bridge.y + bridge.height
    );
  }, []);

  const isIceBridgeBroken = useCallback((
    bridgeId: number,
    states: Record<number, number>,
    currentTime: number,
    crackTime: number,
    breakTime: number,
    respawnTime: number
  ): boolean => {
    const contactStart = states[bridgeId];
    if (contactStart === undefined) return false;
    const elapsed = currentTime - contactStart;
    if (elapsed < crackTime + breakTime) return false;
    if (respawnTime > 0 && elapsed > crackTime + breakTime + respawnTime) return false;
    return true;
  }, []);

  const isIceBridgeCracking = useCallback((
    bridgeId: number,
    states: Record<number, number>,
    currentTime: number,
    crackTime: number
  ): boolean => {
    const contactStart = states[bridgeId];
    if (contactStart === undefined) return false;
    return (currentTime - contactStart) >= crackTime;
  }, []);

  // ====== BLIZZARD ======
  const isBlizzardActive = useCallback((blizzard: Blizzard, time: number): boolean => {
    const cycleTime = time % blizzard.interval;
    return cycleTime >= blizzard.warningTime && cycleTime < blizzard.warningTime + blizzard.duration;
  }, []);

  const getBlizzardWarning = useCallback((blizzard: Blizzard, time: number): boolean => {
    const cycleTime = time % blizzard.interval;
    return cycleTime >= 0 && cycleTime < blizzard.warningTime;
  }, []);

  const applyBlizzardForce = useCallback((
    ball: Ball,
    blizzard: Blizzard,
    time: number
  ): { x: number; y: number } => {
    if (!isBlizzardActive(blizzard, time)) return { x: 0, y: 0 };
    const force = { x: 0, y: 0 };
    switch (blizzard.direction) {
      case 'up': force.y = -blizzard.strength; break;
      case 'down': force.y = blizzard.strength; break;
      case 'left': force.x = -blizzard.strength; break;
      case 'right': force.x = blizzard.strength; break;
    }
    // Add randomness for blizzard feel
    force.x += (Math.random() - 0.5) * blizzard.strength * 0.3;
    force.y += (Math.random() - 0.5) * blizzard.strength * 0.3;
    return force;
  }, [isBlizzardActive]);

  // ====== ICICLE DROP ======
  const isIcicleDropActive = useCallback((drop: IcicleDrop, time: number): boolean => {
    const cycleTime = time % drop.interval;
    return cycleTime >= drop.warningTime && cycleTime < drop.warningTime + drop.dropDuration;
  }, []);

  const getIcicleDropWarning = useCallback((drop: IcicleDrop, time: number): boolean => {
    const cycleTime = time % drop.interval;
    return cycleTime >= 0 && cycleTime < drop.warningTime;
  }, []);

  const isBallHitByIcicle = useCallback((
    ball: Ball,
    drops: IcicleDrop[],
    time: number
  ): boolean => {
    for (const drop of drops) {
      if (!isIcicleDropActive(drop, time)) continue;
      const dx = ball.x - drop.x;
      const dy = ball.y - drop.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < drop.radius + ball.radius) return true;
    }
    return false;
  }, [isIcicleDropActive]);

  // ====== AVALANCHE ======
  const getAvalancheBoulderPosition = useCallback((
    avalanche: Avalanche,
    progress: number
  ): { x: number; y: number } => {
    return {
      x: avalanche.x1 + (avalanche.x2 - avalanche.x1) * progress,
      y: avalanche.y1 + (avalanche.y2 - avalanche.y1) * progress,
    };
  }, []);

  const isAvalancheBoulderActive = useCallback((avalanche: Avalanche, time: number): boolean => {
    const cycleTime = time % avalanche.interval;
    return cycleTime >= avalanche.warningTime;
  }, []);

  const getAvalancheWarning = useCallback((avalanche: Avalanche, time: number): boolean => {
    const cycleTime = time % avalanche.interval;
    return cycleTime >= 0 && cycleTime < avalanche.warningTime;
  }, []);

  const updateAvalancheBoulder = useCallback((
    avalanche: Avalanche,
    progress: number,
    dt: number
  ): { progress: number; done: boolean } => {
    const dx = avalanche.x2 - avalanche.x1;
    const dy = avalanche.y2 - avalanche.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const step = (avalanche.speed * dt) / len;
    const newProgress = Math.min(1, progress + step);
    return { progress: newProgress, done: newProgress >= 1 };
  }, []);

  const isBallHitByBoulder = useCallback((
    ball: Ball,
    pos: { x: number; y: number },
    radius: number
  ): boolean => {
    const dx = ball.x - pos.x;
    const dy = ball.y - pos.y;
    return Math.sqrt(dx * dx + dy * dy) < radius + ball.radius;
  }, []);

  // ====== FROST RAIL ======
  const getFrostRailProgress = useCallback((ball: Ball, rail: FrostRail): number | null => {
    const dx = rail.x2 - rail.x1;
    const dy = rail.y2 - rail.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;
    const bx = ball.x - rail.x1;
    const by = ball.y - rail.y1;
    const t = (bx * dx + by * dy) / (len * len);
    if (t < 0 || t > 1) return null;
    const projX = rail.x1 + t * dx;
    const projY = rail.y1 + t * dy;
    const distToLine = Math.sqrt((ball.x - projX) ** 2 + (ball.y - projY) ** 2);
    if (distToLine < rail.railWidth + ball.radius) return t;
    return null;
  }, []);

  const moveAlongFrostRail = useCallback((
    rail: FrostRail,
    progress: number,
    speed: number,
    dt: number
  ): { x: number; y: number; progress: number; done: boolean } => {
    const dx = rail.x2 - rail.x1;
    const dy = rail.y2 - rail.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const step = (speed * dt) / len;
    const newProgress = Math.min(1, progress + step);
    return {
      x: rail.x1 + newProgress * dx,
      y: rail.y1 + newProgress * dy,
      progress: newProgress,
      done: newProgress >= 1,
    };
  }, []);

  return {
    // Thawing Ice
    isBallOnThawingIce,
    isThawingIceMelted,
    // Snowdrift
    applySnowdriftEffect,
    isBallInSnowdrift,
    // Frozen Geyser
    isFrozenGeyserActive,
    getFrozenGeyserWarning,
    applyFrozenGeyserForce,
    // Ice Bridge
    isBallOnIceBridge,
    isIceBridgeBroken,
    isIceBridgeCracking,
    // Blizzard
    isBlizzardActive,
    getBlizzardWarning,
    applyBlizzardForce,
    // Icicle Drop
    isIcicleDropActive,
    getIcicleDropWarning,
    isBallHitByIcicle,
    // Avalanche
    getAvalancheBoulderPosition,
    isAvalancheBoulderActive,
    getAvalancheWarning,
    updateAvalancheBoulder,
    isBallHitByBoulder,
    // Frost Rail
    getFrostRailProgress,
    moveAlongFrostRail,
  };
};
