import { useCallback } from 'react';
import { Ball, ConveyorZone, LaserGate, MagneticZone, Hazard, Wall } from '@/types/game';

const CONVEYOR_STRENGTH = 0.3;

export const useNewMechanicsPhysics = () => {
  // Get current position of orbiting hazard
  const getOrbitingHazardPosition = useCallback((
    hazard: Hazard,
    time: number
  ): { x: number; y: number } => {
    if (!hazard.isOrbiting || hazard.orbitCenterX === undefined || hazard.orbitCenterY === undefined) {
      return { x: hazard.x, y: hazard.y };
    }
    
    const orbitRadius = hazard.orbitRadius || 50;
    const orbitSpeed = hazard.orbitSpeed || 0.002;
    const phase = hazard.orbitPhase || 0;
    
    const angle = time * orbitSpeed + phase;
    
    return {
      x: hazard.orbitCenterX + Math.cos(angle) * orbitRadius,
      y: hazard.orbitCenterY + Math.sin(angle) * orbitRadius,
    };
  }, []);

  // Get current position of crusher wall
  const getCrusherWallPosition = useCallback((
    wall: Wall,
    time: number
  ): Wall => {
    if (!wall.isCrusher) return wall;
    
    const speed = wall.crushSpeed || 0.002;
    const pause = wall.crushPause || 500;
    const range = wall.moveRange || 80;
    
    // Create a cycle: move in -> pause -> move out -> pause
    const cycleTime = 2000 + pause * 2;
    const t = time % cycleTime;
    
    let offset: number;
    if (t < 1000) {
      // Moving in
      offset = (t / 1000) * range;
    } else if (t < 1000 + pause) {
      // Pause at end
      offset = range;
    } else if (t < 2000 + pause) {
      // Moving out
      offset = range - ((t - 1000 - pause) / 1000) * range;
    } else {
      // Pause at start
      offset = 0;
    }
    
    const direction = wall.crushDirection || 'horizontal';
    
    return {
      ...wall,
      x: direction === 'horizontal' ? wall.x + offset : wall.x,
      y: direction === 'vertical' ? wall.y + offset : wall.y,
    };
  }, []);

  // Apply conveyor zone force to ball
  const applyConveyorForce = useCallback((
    ball: Ball,
    conveyorZones: ConveyorZone[]
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    
    for (const zone of conveyorZones) {
      if (
        ball.x >= zone.x &&
        ball.x <= zone.x + zone.width &&
        ball.y >= zone.y &&
        ball.y <= zone.y + zone.height
      ) {
        const strength = zone.speed * CONVEYOR_STRENGTH;
        switch (zone.direction) {
          case 'up':
            force.y -= strength;
            break;
          case 'down':
            force.y += strength;
            break;
          case 'left':
            force.x -= strength;
            break;
          case 'right':
            force.x += strength;
            break;
        }
      }
    }
    
    return force;
  }, []);

  // Check if laser gate is currently active (dangerous)
  const isLaserActive = useCallback((
    laser: LaserGate,
    time: number
  ): boolean => {
    const offset = laser.startOffset || 0;
    const cycleDuration = laser.onDuration + laser.offDuration;
    const cycleTime = (time + offset) % cycleDuration;
    
    return cycleTime < laser.onDuration;
  }, []);

  // Check laser gate collision with ball
  const checkLaserCollision = useCallback((
    ball: Ball,
    lasers: LaserGate[],
    time: number,
    hasShield: boolean
  ): boolean => {
    for (const laser of lasers) {
      if (!isLaserActive(laser, time)) continue;
      
      // Line-circle collision detection
      const dx = laser.x2 - laser.x1;
      const dy = laser.y2 - laser.y1;
      const len = Math.sqrt(dx * dx + dy * dy);
      
      if (len === 0) continue;
      
      const nx = dx / len;
      const ny = dy / len;
      
      // Vector from line start to ball center
      const bx = ball.x - laser.x1;
      const by = ball.y - laser.y1;
      
      // Project ball onto line
      const proj = bx * nx + by * ny;
      
      // Clamp to line segment
      const clampedProj = Math.max(0, Math.min(len, proj));
      
      // Closest point on line to ball
      const closestX = laser.x1 + nx * clampedProj;
      const closestY = laser.y1 + ny * clampedProj;
      
      // Distance from ball to closest point
      const distX = ball.x - closestX;
      const distY = ball.y - closestY;
      const dist = Math.sqrt(distX * distX + distY * distY);
      
      if (dist < ball.radius + 3) { // 3px laser width
        if (!hasShield) return true;
      }
    }
    
    return false;
  }, [isLaserActive]);

  // Apply magnetic zone force to ball
  const applyMagneticForce = useCallback((
    ball: Ball,
    magneticZones: MagneticZone[]
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    
    for (const zone of magneticZones) {
      const dx = zone.x - ball.x;
      const dy = zone.y - ball.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < zone.radius && dist > 5) {
        // Force decreases with distance
        const strength = zone.strength * (1 - dist / zone.radius);
        const dirX = dx / dist;
        const dirY = dy / dist;
        
        if (zone.type === 'attract') {
          force.x += dirX * strength;
          force.y += dirY * strength;
        } else {
          force.x -= dirX * strength * 1.5; // Repel is stronger
          force.y -= dirY * strength * 1.5;
        }
      }
    }
    
    return force;
  }, []);

  // Apply bouncy wall collision
  const applyBouncyWallCollision = useCallback((
    ball: Ball,
    wall: Wall,
    normalX: number,
    normalY: number
  ): Ball => {
    if (!wall.isBouncy) return ball;
    
    const multiplier = wall.bounceMultiplier || 2;
    const bounceMagnitude = 8 * multiplier;
    
    return {
      ...ball,
      vx: ball.vx + normalX * bounceMagnitude,
      vy: ball.vy + normalY * bounceMagnitude,
    };
  }, []);

  return {
    getOrbitingHazardPosition,
    getCrusherWallPosition,
    applyConveyorForce,
    isLaserActive,
    checkLaserCollision,
    applyMagneticForce,
    applyBouncyWallCollision,
  };
};
