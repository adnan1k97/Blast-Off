import { useCallback } from 'react';
import { Ball, WindGust, CloudPlatform, RotatingGear, LightningZone, Updraft, CrumblingTile, Zipline, Wall } from '@/types/game';

export const useSkyFortressPhysics = () => {

  // ====== WIND GUST ======
  const isWindGustActive = useCallback((gust: WindGust, time: number): boolean => {
    const cycleTime = time % gust.interval;
    return cycleTime >= gust.warningTime && cycleTime < gust.warningTime + gust.duration;
  }, []);

  const getWindGustWarning = useCallback((gust: WindGust, time: number): boolean => {
    const cycleTime = time % gust.interval;
    return cycleTime >= 0 && cycleTime < gust.warningTime;
  }, []);

  const applyWindGustForce = useCallback((
    ball: Ball,
    windGusts: WindGust[],
    time: number
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const gust of windGusts) {
      if (!isWindGustActive(gust, time)) continue;
      const cycleTime = time % gust.interval;
      const progress = (cycleTime - gust.warningTime) / gust.duration;
      const intensity = Math.sin(progress * Math.PI);
      switch (gust.direction) {
        case 'left': force.x -= gust.strength * intensity; break;
        case 'right': force.x += gust.strength * intensity; break;
        case 'up': force.y -= gust.strength * intensity; break;
        case 'down': force.y += gust.strength * intensity; break;
      }
    }
    return force;
  }, [isWindGustActive]);

  // ====== CLOUD PLATFORM ======
  const isCloudPlatformSolid = useCallback((platform: CloudPlatform, time: number): boolean => {
    const cycle = platform.onDuration + platform.offDuration;
    const offset = platform.startOffset || 0;
    const t = (time + offset) % cycle;
    return t < platform.onDuration;
  }, []);

  const getCloudPlatformOpacity = useCallback((platform: CloudPlatform, time: number): number => {
    const cycle = platform.onDuration + platform.offDuration;
    const offset = platform.startOffset || 0;
    const t = (time + offset) % cycle;
    if (t < platform.onDuration) {
      // Fade in at start, full in middle, fade out at end
      const fadeTime = Math.min(200, platform.onDuration * 0.2);
      if (t < fadeTime) return 0.3 + 0.7 * (t / fadeTime);
      if (t > platform.onDuration - fadeTime) return 0.3 + 0.7 * ((platform.onDuration - t) / fadeTime);
      return 1;
    }
    return 0.15;
  }, []);

  // ====== ROTATING GEAR ======
  const applyGearForce = useCallback((
    ball: Ball,
    gears: RotatingGear[],
    time: number
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const gear of gears) {
      const dx = ball.x - gear.x;
      const dy = ball.y - gear.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < gear.radius + ball.radius && dist > 5) {
        const distFactor = 1 - (dist / (gear.radius + ball.radius));
        const nx = dx / dist;
        const ny = dy / dist;
        // Tangential force
        const dir = gear.clockwise ? 1 : -1;
        force.x += (-ny * dir) * gear.speed * distFactor * 2;
        force.y += (nx * dir) * gear.speed * distFactor * 2;

        // Teeth bumps
        const angle = Math.atan2(dy, dx);
        const gearAngle = (time * 0.001 * gear.speed * (gear.clockwise ? 1 : -1)) % (Math.PI * 2);
        const toothAngle = (Math.PI * 2) / gear.teeth;
        const nearestTooth = Math.round((angle - gearAngle) / toothAngle) * toothAngle + gearAngle;
        const toothDiff = Math.abs(angle - nearestTooth);
        if (toothDiff < 0.3 && dist < gear.radius * 1.1) {
          force.x += nx * 1.5;
          force.y += ny * 1.5;
        }
      }
    }
    return force;
  }, []);

  // ====== LIGHTNING ZONE ======
  const getLightningState = useCallback((zone: LightningZone, time: number): 'idle' | 'warning' | 'strike' => {
    const cycleTime = time % zone.interval;
    if (cycleTime < zone.warningDuration) return 'warning';
    if (cycleTime < zone.warningDuration + zone.strikeDuration) return 'strike';
    return 'idle';
  }, []);

  const isInLightningStrike = useCallback((
    ball: Ball,
    zones: LightningZone[],
    time: number
  ): boolean => {
    for (const zone of zones) {
      if (getLightningState(zone, time) !== 'strike') continue;
      const dx = ball.x - zone.x;
      const dy = ball.y - zone.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < zone.radius + ball.radius) return true;
    }
    return false;
  }, [getLightningState]);

  // ====== UPDRAFT ======
  const applyUpdraftForce = useCallback((
    ball: Ball,
    updrafts: Updraft[]
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const updraft of updrafts) {
      if (
        ball.x >= updraft.x &&
        ball.x <= updraft.x + updraft.width &&
        ball.y >= updraft.y &&
        ball.y <= updraft.y + updraft.height
      ) {
        force.y -= updraft.strength;
      }
    }
    return force;
  }, []);

  // ====== CRUMBLING TILE ======
  const isTileCrumbled = useCallback((
    tileId: number,
    crumbledTiles: Record<number, number>,
    time: number,
    tile: CrumblingTile
  ): boolean => {
    const crumbleTime = crumbledTiles[tileId];
    if (crumbleTime === undefined) return false;
    const elapsed = time - crumbleTime;
    if (elapsed < tile.crumbleDelay) return false; // still shaking
    if (tile.respawnTime > 0 && elapsed > tile.crumbleDelay + tile.respawnTime) return false; // respawned
    return true;
  }, []);

  const isBallOnTile = useCallback((ball: Ball, tile: CrumblingTile): boolean => {
    return (
      ball.x + ball.radius > tile.x &&
      ball.x - ball.radius < tile.x + tile.width &&
      ball.y + ball.radius > tile.y &&
      ball.y - ball.radius < tile.y + tile.height
    );
  }, []);

  // ====== ZIPLINE ======
  const getZiplineProgress = useCallback((
    ball: Ball,
    zipline: Zipline
  ): number | null => {
    // Project ball onto zipline segment
    const dx = zipline.x2 - zipline.x1;
    const dy = zipline.y2 - zipline.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return null;

    const bx = ball.x - zipline.x1;
    const by = ball.y - zipline.y1;
    const t = (bx * dx + by * dy) / (len * len);

    if (t < 0 || t > 1) return null;

    const projX = zipline.x1 + t * dx;
    const projY = zipline.y1 + t * dy;
    const distToLine = Math.sqrt((ball.x - projX) ** 2 + (ball.y - projY) ** 2);

    if (distToLine < ball.radius + 8) return t;
    return null;
  }, []);

  const moveAlongZipline = useCallback((
    zipline: Zipline,
    progress: number,
    speed: number,
    dt: number
  ): { x: number; y: number; progress: number; done: boolean } => {
    const dx = zipline.x2 - zipline.x1;
    const dy = zipline.y2 - zipline.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const step = (speed * dt) / len;
    const newProgress = Math.min(1, progress + step);

    return {
      x: zipline.x1 + newProgress * dx,
      y: zipline.y1 + newProgress * dy,
      progress: newProgress,
      done: newProgress >= 1,
    };
  }, []);

  // ====== PISTON WALL ======
  const getPistonWallExtension = useCallback((
    wall: Wall,
    time: number
  ): number => {
    const extend = (wall as any).pistonExtend || 500;
    const retract = (wall as any).pistonRetract || 500;
    const pause = (wall as any).pistonPause || 200;
    const cycle = extend + pause + retract + pause;
    const t = time % cycle;

    if (t < extend) return t / extend; // extending 0->1
    if (t < extend + pause) return 1; // fully extended
    if (t < extend + pause + retract) return 1 - (t - extend - pause) / retract; // retracting 1->0
    return 0; // fully retracted
  }, []);

  return {
    isWindGustActive,
    getWindGustWarning,
    applyWindGustForce,
    isCloudPlatformSolid,
    getCloudPlatformOpacity,
    applyGearForce,
    getLightningState,
    isInLightningStrike,
    applyUpdraftForce,
    isTileCrumbled,
    isBallOnTile,
    getZiplineProgress,
    moveAlongZipline,
    getPistonWallExtension,
  };
};
