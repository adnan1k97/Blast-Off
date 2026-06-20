import { useCallback } from 'react';
import { Ball, Wall, Hazard, Goal, Level, IceSurface, Switch, Portal, GravityZone, Collectible, PowerUp, ConveyorZone, LaserGate, MagneticZone, WaterCurrent, BubbleVent, Whirlpool, TidalWave } from '@/types/game';
import { useNewMechanicsPhysics } from './useNewMechanicsPhysics';
import { useWaterPhysics } from './useWaterPhysics';

const FRICTION = 0.98;
const ICE_FRICTION = 0.995; // Less friction on ice
const GRAVITY_STRENGTH = 0.5;
const BALL_RADIUS = 12;
const GOAL_TIME_REQUIRED = 1000; // 1 second in goal to win

export const useGamePhysics = () => {
  const newMechanics = useNewMechanicsPhysics();
  const waterPhysics = useWaterPhysics();
  const getMovingWallPosition = useCallback((
    wall: Wall,
    wallIndex: number,
    offsets: Record<number, number>,
    time: number
  ): Wall => {
    if (!wall.isMoving || wall.moveAxis === undefined) return wall;
    
    const speed = wall.moveSpeed || 2;
    const range = wall.moveRange || 100;
    const offset = Math.sin(time * speed * 0.001) * range;
    
    return {
      ...wall,
      x: wall.moveAxis === 'x' ? wall.x + offset : wall.x,
      y: wall.moveAxis === 'y' ? wall.y + offset : wall.y,
    };
  }, []);

  const checkWallCollision = useCallback((ball: Ball, walls: Wall[], time: number, activatedSwitches: number[], collectedKeyCount: number = 0): Ball => {
    let newBall = { ...ball };
    
    for (let i = 0; i < walls.length; i++) {
      let wall = walls[i];
      
      // Skip walls that require a switch that isn't activated
      if (wall.switchId !== undefined && !activatedSwitches.includes(wall.switchId)) {
        continue;
      }
      
      // Skip coral gates when player has enough keys
      if (wall.requiredKeys !== undefined && collectedKeyCount >= wall.requiredKeys) {
        continue;
      }
      
      // Get current position for moving walls
      if (wall.isMoving) {
        wall = getMovingWallPosition(wall, i, {}, time);
      }
      
      // Get current position for crusher walls
      if (wall.isCrusher) {
        wall = newMechanics.getCrusherWallPosition(wall, time);
      }
      
      // Check collision with wall
      const closestX = Math.max(wall.x, Math.min(newBall.x, wall.x + wall.width));
      const closestY = Math.max(wall.y, Math.min(newBall.y, wall.y + wall.height));
      
      const distX = newBall.x - closestX;
      const distY = newBall.y - closestY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      if (distance < newBall.radius) {
        // Collision detected - push ball out and reflect velocity
        const overlap = newBall.radius - distance;
        const normalX = distance > 0 ? distX / distance : 0;
        const normalY = distance > 0 ? distY / distance : 1;
        
        newBall.x += normalX * overlap;
        newBall.y += normalY * overlap;
        
        // Reflect velocity
        const dotProduct = newBall.vx * normalX + newBall.vy * normalY;
        
        // Apply bouncy wall effect
        if (wall.isBouncy) {
          // Cancel the incoming velocity component along the normal
          newBall.vx -= dotProduct * normalX;
          newBall.vy -= dotProduct * normalY;
          // Then apply the bouncy impulse (handled entirely in applyBouncyWallCollision)
          newBall = newMechanics.applyBouncyWallCollision(newBall, wall, normalX, normalY);
        } else {
          newBall.vx -= 2 * dotProduct * normalX * 0.7;
          newBall.vy -= 2 * dotProduct * normalY * 0.7;
        }
      }
    }
    
    return newBall;
  }, [getMovingWallPosition, newMechanics]);

  const checkHazardCollision = useCallback((ball: Ball, hazards: Hazard[], time: number = 0): boolean => {
    for (const hazard of hazards) {
      // Get current position for orbiting hazards
      const pos = newMechanics.getOrbitingHazardPosition(hazard, time);
      
      const dx = ball.x - pos.x;
      const dy = ball.y - pos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < ball.radius + hazard.radius * 0.5) {
        return true;
      }
    }
    return false;
  }, [newMechanics]);

  const checkGoalCollision = useCallback((ball: Ball, goal: Goal): boolean => {
    const dx = ball.x - goal.x;
    const dy = ball.y - goal.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    return distance + ball.radius < goal.radius;
  }, []);

  const checkSwitchCollision = useCallback((ball: Ball, switches: Switch[]): number[] => {
    const activated: number[] = [];
    for (const sw of switches) {
      const dx = ball.x - sw.x;
      const dy = ball.y - sw.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < ball.radius + sw.radius) {
        activated.push(sw.id);
      }
    }
    return activated;
  }, []);

  const checkPortalCollision = useCallback((
    ball: Ball, 
    portals: Portal[], 
    lastPortalUsed: number | null,
    portalCooldown: number
  ): { teleported: boolean; newBall: Ball; portalId: number | null; destinationPortal: Portal | null } => {
    // If on cooldown, don't teleport
    if (portalCooldown > 0) {
      return { teleported: false, newBall: ball, portalId: null, destinationPortal: null };
    }

    for (const portal of portals) {
      const dx = ball.x - portal.x;
      const dy = ball.y - portal.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Check if ball is inside portal
      if (distance < portal.radius * 0.7) {
        // Find linked portal
        const linkedPortal = portals.find(p => p.id === portal.linkedPortalId);
        if (linkedPortal) {
          // Teleport ball to linked portal
          const newBall = {
            ...ball,
            x: linkedPortal.x,
            y: linkedPortal.y,
            // Keep velocity but slightly reduce it
            vx: ball.vx * 0.8,
            vy: ball.vy * 0.8,
          };
          return { teleported: true, newBall, portalId: portal.id, destinationPortal: linkedPortal };
        }
      }
    }
    return { teleported: false, newBall: ball, portalId: null, destinationPortal: null };
  }, []);

  const isOnIce = useCallback((ball: Ball, iceSurfaces: IceSurface[]): boolean => {
    for (const ice of iceSurfaces) {
      if (
        ball.x >= ice.x &&
        ball.x <= ice.x + ice.width &&
        ball.y >= ice.y &&
        ball.y <= ice.y + ice.height
      ) {
        return true;
      }
    }
    return false;
  }, []);

  const getGravityZoneEffect = useCallback((ball: Ball, gravityZones: GravityZone[]): { x: number; y: number } => {
    let totalForce = { x: 0, y: 0 };
    
    for (const zone of gravityZones) {
      // Check if ball is in this gravity zone
      if (
        ball.x >= zone.x &&
        ball.x <= zone.x + zone.width &&
        ball.y >= zone.y &&
        ball.y <= zone.y + zone.height
      ) {
        const force = zone.strength * GRAVITY_STRENGTH;
        switch (zone.direction) {
          case 'up':
            totalForce.y -= force;
            break;
          case 'down':
            totalForce.y += force;
            break;
          case 'left':
            totalForce.x -= force;
            break;
          case 'right':
            totalForce.x += force;
            break;
        }
      }
    }
    
    return totalForce;
  }, []);

  const updateBall = useCallback((
    ball: Ball,
    tilt: { x: number; y: number },
    walls: Wall[],
    time: number,
    activatedSwitches: number[],
    iceSurfaces: IceSurface[] = [],
    gravityZones: GravityZone[] = [],
    conveyorZones: ConveyorZone[] = [],
    magneticZones: MagneticZone[] = [],
    hasSpeedBoost: boolean = false,
    waterCurrents: WaterCurrent[] = [],
    bubbleVents: BubbleVent[] = [],
    dtScale: number = 1,
    whirlpools: Whirlpool[] = [],
    tidalWaves: TidalWave[] = [],
    collectedKeyCount: number = 0,
    jellySlowFactor: number = 1
  ): Ball => {
    let newBall = { ...ball };
    
    // Check if on ice
    const onIce = isOnIce(newBall, iceSurfaces);
    
    // Check if in water current
    const waterResult = waterPhysics.applyWaterCurrentForce(newBall, waterCurrents);
    const inWater = waterResult.inWater;
    
    // Use water drag if in water, otherwise normal friction
    const friction = inWater ? waterPhysics.WATER_DRAG : (onIce ? ICE_FRICTION : FRICTION);
    const gravityMod = onIce ? 0.7 : (inWater ? 0.8 : 1);
    
    // Apply jellyfish slow effect to tilt
    const effectiveTilt = { x: tilt.x * jellySlowFactor, y: tilt.y * jellySlowFactor };
    
    // Apply gravity based on tilt (scaled by dt)
    newBall.vx += effectiveTilt.x * GRAVITY_STRENGTH * gravityMod * dtScale;
    newBall.vy += effectiveTilt.y * GRAVITY_STRENGTH * gravityMod * dtScale;
    
    // Apply gravity zone effects (scaled by dt)
    const gravityZoneForce = getGravityZoneEffect(newBall, gravityZones);
    newBall.vx += gravityZoneForce.x * dtScale;
    newBall.vy += gravityZoneForce.y * dtScale;
    
    // Apply conveyor zone effects (scaled by dt)
    const conveyorForce = newMechanics.applyConveyorForce(newBall, conveyorZones);
    newBall.vx += conveyorForce.x * dtScale;
    newBall.vy += conveyorForce.y * dtScale;
    
    // Apply magnetic zone effects (scaled by dt)
    const magneticForce = newMechanics.applyMagneticForce(newBall, magneticZones);
    newBall.vx += magneticForce.x * dtScale;
    newBall.vy += magneticForce.y * dtScale;
    
    // Apply water current effects (scaled by dt)
    newBall.vx += waterResult.x * dtScale;
    newBall.vy += waterResult.y * dtScale;
    
    // Apply bubble vent effects (scaled by dt)
    const bubbleForce = waterPhysics.applyBubbleVentForce(newBall, bubbleVents, time);
    newBall.vx += bubbleForce.x * dtScale;
    newBall.vy += bubbleForce.y * dtScale;
    
    // Apply whirlpool effects (scaled by dt)
    const whirlForce = waterPhysics.applyWhirlpoolForce(newBall, whirlpools);
    newBall.vx += whirlForce.x * dtScale;
    newBall.vy += whirlForce.y * dtScale;
    
    // Apply tidal wave effects (scaled by dt)
    const tidalForce = waterPhysics.applyTidalWaveForce(newBall, tidalWaves, time);
    newBall.vx += tidalForce.x * dtScale;
    newBall.vy += tidalForce.y * dtScale;
    
    // Apply friction (frame-rate independent: raise to dtScale power)
    const frictionScaled = Math.pow(friction, dtScale);
    newBall.vx *= frictionScaled;
    newBall.vy *= frictionScaled;
    
    // Limit max speed (higher on ice, even higher with speed boost, slower in water)
    const speed = Math.sqrt(newBall.vx * newBall.vx + newBall.vy * newBall.vy);
    let maxSpeed = onIce ? 20 : (inWater ? 12 : 15);
    if (hasSpeedBoost) maxSpeed *= 1.5;
    
    if (speed > maxSpeed) {
      newBall.vx = (newBall.vx / speed) * maxSpeed;
      newBall.vy = (newBall.vy / speed) * maxSpeed;
    }
    
    // Enforce canvas boundaries BEFORE movement (600x600 canvas)
    const CANVAS_SIZE = 600;
    const MIN_POS = newBall.radius;
    const MAX_POS = CANVAS_SIZE - newBall.radius;
    
    // Clamp velocity to prevent tunneling (match the dynamic max speed)
    const maxVelocity = maxSpeed;
    newBall.vx = Math.max(-maxVelocity, Math.min(maxVelocity, newBall.vx));
    newBall.vy = Math.max(-maxVelocity, Math.min(maxVelocity, newBall.vy));
    
    // Update position (scaled by dt)
    newBall.x += newBall.vx * dtScale;
    newBall.y += newBall.vy * dtScale;
    
    // Check wall collisions
    newBall = checkWallCollision(newBall, walls, time, activatedSwitches, collectedKeyCount);
    
    // STRICT boundary enforcement - ball can NEVER leave the canvas
    if (newBall.x <= MIN_POS) {
      newBall.x = MIN_POS;
      newBall.vx = Math.abs(newBall.vx) * 0.3;
    }
    if (newBall.x >= MAX_POS) {
      newBall.x = MAX_POS;
      newBall.vx = -Math.abs(newBall.vx) * 0.3;
    }
    if (newBall.y <= MIN_POS) {
      newBall.y = MIN_POS;
      newBall.vy = Math.abs(newBall.vy) * 0.3;
    }
    if (newBall.y >= MAX_POS) {
      newBall.y = MAX_POS;
      newBall.vy = -Math.abs(newBall.vy) * 0.3;
    }
    
    // Final hard clamp - absolute guarantee ball stays in bounds
    newBall.x = Math.max(MIN_POS, Math.min(MAX_POS, newBall.x));
    newBall.y = Math.max(MIN_POS, Math.min(MAX_POS, newBall.y));
    
    return newBall;
  }, [checkWallCollision, isOnIce, getGravityZoneEffect, newMechanics, waterPhysics]);

  const initializeBalls = useCallback((level: Level): Ball[] => {
    const balls: Ball[] = [];
    for (let i = 0; i < level.balls; i++) {
      balls.push({
        x: level.startPosition.x + i * 30,
        y: level.startPosition.y,
        vx: 0,
        vy: 0,
        radius: BALL_RADIUS,
      });
    }
    return balls;
  }, []);

  const calculateStars = useCallback((time: number, falls: number, starThresholds?: { three: number; two: number }): number => {
    const threeStarTime = starThresholds?.three ?? 15;
    const twoStarTime = starThresholds?.two ?? 30;
    
    if (falls > 0) return 1;
    if (time <= threeStarTime) return 3;
    if (time <= twoStarTime) return 2;
    return 1;
  }, []);

  const checkCollectibleCollision = useCallback((
    ball: Ball, 
    collectibles: Collectible[], 
    alreadyCollected: number[]
  ): { collected: Collectible | null } => {
    for (const collectible of collectibles) {
      if (alreadyCollected.includes(collectible.id)) continue;
      
      const dx = ball.x - collectible.x;
      const dy = ball.y - collectible.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < ball.radius + collectible.radius) {
        return { collected: collectible };
      }
    }
    return { collected: null };
  }, []);

  const checkPowerUpCollision = useCallback((
    ball: Ball, 
    powerUps: PowerUp[], 
    alreadyCollected: number[]
  ): { powerUp: PowerUp | null } => {
    for (const powerUp of powerUps) {
      if (alreadyCollected.includes(powerUp.id)) continue;
      
      const dx = ball.x - powerUp.x;
      const dy = ball.y - powerUp.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < ball.radius + powerUp.radius) {
        return { powerUp };
      }
    }
    return { powerUp: null };
  }, []);

  return {
    updateBall,
    checkHazardCollision,
    checkGoalCollision,
    checkSwitchCollision,
    checkPortalCollision,
    checkCollectibleCollision,
    checkPowerUpCollision,
    initializeBalls,
    calculateStars,
    getMovingWallPosition,
    GOAL_TIME_REQUIRED,
    // Export new mechanics functions
    ...newMechanics,
    // Export water physics functions
    ...waterPhysics,
  };
};