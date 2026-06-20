import { useCallback } from 'react';
import {
  Ball,
  PhaseShift,
  DimensionTear,
  MirrorClone,
  GravityFlip,
  GravityWell,
  TimeSlow,
  EchoTrail,
} from '@/types/game';

export const useDimensionNexusPhysics = () => {

  // ====== PHASE SHIFT ======
  const isBallInPhaseZone = useCallback((ball: Ball, zone: PhaseShift): boolean => {
    return (
      ball.x + ball.radius > zone.x &&
      ball.x - ball.radius < zone.x + zone.width &&
      ball.y + ball.radius > zone.y &&
      ball.y - ball.radius < zone.y + zone.height
    );
  }, []);

  const shouldActivatePhase = useCallback((
    ball: Ball,
    zones: PhaseShift[],
    currentTime: number,
    phaseCooldownEnd: number
  ): PhaseShift | null => {
    if (currentTime < phaseCooldownEnd) return null;
    for (const zone of zones) {
      if (isBallInPhaseZone(ball, zone)) return zone;
    }
    return null;
  }, [isBallInPhaseZone]);

  // ====== DIMENSION TEAR ======
  const isBallInTear = useCallback((ball: Ball, tear: DimensionTear): boolean => {
    const dx = ball.x - tear.x;
    const dy = ball.y - tear.y;
    return Math.sqrt(dx * dx + dy * dy) < tear.radius + ball.radius;
  }, []);

  const findLinkedTear = useCallback((
    tearId: number,
    tears: DimensionTear[]
  ): DimensionTear | null => {
    const source = tears.find(t => t.id === tearId);
    if (!source) return null;
    return tears.find(t => t.id === source.linkedTearId) || null;
  }, []);

  const applyTearFlip = useCallback((
    ball: Ball,
    tear: DimensionTear,
    destination: DimensionTear
  ): Ball => {
    const newBall = { ...ball, x: destination.x, y: destination.y };
    switch (tear.flipAxis) {
      case 'x':
        newBall.vx = -newBall.vx;
        break;
      case 'y':
        newBall.vy = -newBall.vy;
        break;
      case 'both':
        newBall.vx = -newBall.vx;
        newBall.vy = -newBall.vy;
        break;
    }
    return newBall;
  }, []);

  // ====== MIRROR CLONE ======
  const getMirrorClonePosition = useCallback((
    ball: Ball,
    mirror: MirrorClone
  ): { x: number; y: number } => {
    if (mirror.axis === 'x') {
      return { x: 2 * mirror.centerLine - ball.x, y: ball.y };
    }
    return { x: ball.x, y: 2 * mirror.centerLine - ball.y };
  }, []);

  const isBallHitByClone = useCallback((
    ball: Ball,
    clonePos: { x: number; y: number },
    cloneRadius: number
  ): boolean => {
    const dx = ball.x - clonePos.x;
    const dy = ball.y - clonePos.y;
    return Math.sqrt(dx * dx + dy * dy) < cloneRadius + ball.radius;
  }, []);

  // ====== GRAVITY FLIP ======
  const isBallInGravityFlip = useCallback((ball: Ball, zone: GravityFlip): boolean => {
    return (
      ball.x + ball.radius > zone.x &&
      ball.x - ball.radius < zone.x + zone.width &&
      ball.y + ball.radius > zone.y &&
      ball.y - ball.radius < zone.y + zone.height
    );
  }, []);

  const applyGravityFlipForce = useCallback((
    ball: Ball,
    zones: GravityFlip[],
    tiltX: number,
    tiltY: number
  ): { forceX: number; forceY: number; isFlipped: boolean } => {
    for (const zone of zones) {
      if (isBallInGravityFlip(ball, zone)) {
        if (zone.flipDirection === 'vertical') {
          return { forceX: tiltX * zone.strength, forceY: -tiltY * zone.strength, isFlipped: true };
        } else {
          return { forceX: -tiltX * zone.strength, forceY: tiltY * zone.strength, isFlipped: true };
        }
      }
    }
    return { forceX: 0, forceY: 0, isFlipped: false };
  }, [isBallInGravityFlip]);

  // ====== GRAVITY WELL ======
  const applyGravityWellForce = useCallback((
    ball: Ball,
    wells: GravityWell[]
  ): { x: number; y: number } => {
    let force = { x: 0, y: 0 };
    for (const well of wells) {
      const dx = well.x - ball.x;
      const dy = well.y - ball.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < well.radius && dist > 1) {
        const normalizedDist = dist / well.radius;
        const falloffFactor = well.falloff === 'quadratic'
          ? (1 - normalizedDist) * (1 - normalizedDist)
          : (1 - normalizedDist);
        const magnitude = well.strength * falloffFactor;
        force.x += (dx / dist) * magnitude;
        force.y += (dy / dist) * magnitude;
      }
    }
    return force;
  }, []);

  // ====== TIME SLOW ======
  const isBallInTimeSlowZone = useCallback((ball: Ball, zone: TimeSlow): boolean => {
    return (
      ball.x + ball.radius > zone.x &&
      ball.x - ball.radius < zone.x + zone.width &&
      ball.y + ball.radius > zone.y &&
      ball.y - ball.radius < zone.y + zone.height
    );
  }, []);

  const getTimeSlowFactor = useCallback((
    ball: Ball,
    zones: TimeSlow[]
  ): number => {
    let slowest = 1;
    for (const zone of zones) {
      if (isBallInTimeSlowZone(ball, zone)) {
        slowest = Math.min(slowest, zone.slowFactor);
      }
    }
    return slowest;
  }, [isBallInTimeSlowZone]);

  // ====== ECHO TRAIL ======
  const addEchoSegment = useCallback((
    segments: { x: number; y: number; time: number }[],
    ball: Ball,
    currentTime: number,
    maxSegments: number
  ): { x: number; y: number; time: number }[] => {
    const newSegments = [...segments, { x: ball.x, y: ball.y, time: currentTime }];
    if (newSegments.length > maxSegments) {
      return newSegments.slice(newSegments.length - maxSegments);
    }
    return newSegments;
  }, []);

  const isBallHitByEcho = useCallback((
    ball: Ball,
    segments: { x: number; y: number; time: number }[],
    currentTime: number,
    echoTrail: EchoTrail
  ): boolean => {
    for (const seg of segments) {
      const age = currentTime - seg.time;
      if (age >= echoTrail.delay && age < echoTrail.delay + echoTrail.trailLifetime) {
        const dx = ball.x - seg.x;
        const dy = ball.y - seg.y;
        if (Math.sqrt(dx * dx + dy * dy) < echoTrail.trailWidth + ball.radius) {
          return true;
        }
      }
    }
    return false;
  }, []);

  return {
    // Phase Shift
    isBallInPhaseZone,
    shouldActivatePhase,
    // Dimension Tear
    isBallInTear,
    findLinkedTear,
    applyTearFlip,
    // Mirror Clone
    getMirrorClonePosition,
    isBallHitByClone,
    // Gravity Flip
    applyGravityFlipForce,
    // Gravity Well
    applyGravityWellForce,
    // Time Slow
    getTimeSlowFactor,
    // Echo Trail
    addEchoSegment,
    isBallHitByEcho,
  };
};
