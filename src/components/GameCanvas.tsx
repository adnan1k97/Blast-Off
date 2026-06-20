import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { Level, GameState, Ball, ActivePowerUp } from '@/types/game';
import { useGamePhysics } from '@/hooks/useGamePhysics';
import { useGyroscope } from '@/hooks/useGyroscope';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { useParticles } from '@/hooks/useParticles';
import { useSkyFortressPhysics } from '@/hooks/useSkyFortressPhysics';
import { useVolcanicCorePhysics } from '@/hooks/useVolcanicCorePhysics';
import { useFrozenFortressPhysics } from '@/hooks/useFrozenFortressPhysics';
import { useDimensionNexusPhysics } from '@/hooks/useDimensionNexusPhysics';
import { Smartphone, Hand, RotateCcw, Volume2, VolumeX, SlidersHorizontal, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TiltIndicator } from '@/components/TiltIndicator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { TargetIcon, BalanceIcon, LightningIcon } from '@/components/CustomIcons';
import { drawPowerUpIcon, drawWarningIcon, drawArrowIcon, drawSnowflakeIcon, drawWindIcon, drawRockIcon } from '@/lib/canvasIcons';
import { getSelectedBallId } from '@/lib/storage';
import { loadSettings } from '@/lib/settings';
import { getBallById } from '@/data/balls';
import { BallSkin } from '@/types/shop';
import { getWorldTheme, WorldTheme } from '@/data/worldThemes';

interface GameCanvasProps {
  level: Level;
  onWin: (time: number, falls: number) => void;
  onLose: () => void;
  isPaused: boolean;
  onTimeUpdate?: (time: number) => void;
  onScoreUpdate?: (score: number, collected: number) => void;
}

const CANVAS_SIZE = 600;
const TRAIL_LENGTH = 30;

export const GameCanvas: React.FC<GameCanvasProps> = ({ level, onWin, onLose, isPaused, onTimeUpdate, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Load persisted settings
  const initialSettings = useMemo(() => loadSettings(), []);
  const [controlMode, setControlMode] = useState<'keyboard' | 'gyroscope'>(initialSettings.controlMode);
  const [showGyroPrompt, setShowGyroPrompt] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(initialSettings.soundEnabled);
  const [displayTilt, setDisplayTilt] = useState({ x: 0, y: 0 });
  const [keyTouchSensitivity, setKeyTouchSensitivity] = useState(initialSettings.keyTouchSensitivity);
  const [activePreset, setActivePreset] = useState<'precise' | 'normal' | 'quick' | 'custom'>('custom');
  const [gyroPreset, setGyroPreset] = useState<'precise' | 'normal' | 'quick' | 'custom'>('normal');
  const ballTrailRef = useRef<Array<{ x: number; y: number }[]>>([]);
  const prevBallsRef = useRef<Ball[]>([]);
  const prevSwitchesRef = useRef<number[]>([]);
  const gameLoopRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const sparkTimeRef = useRef<number>(0);
  
  // Get selected ball skin
  const selectedBallSkin = useMemo(() => getBallById(getSelectedBallId()), []);
  
  const gameStateRef = useRef<GameState>({
    status: 'playing',
    balls: [],
    tilt: { x: 0, y: 0 },
    startTime: Date.now(),
    elapsedTime: 0,
    falls: 0,
    goalTimer: 0,
    activatedSwitches: [],
    movingWallOffsets: {},
    lastPortalUsed: null,
    portalCooldown: 0,
    collectedItems: [],
    score: 0,
    collectedPowerUps: [],
    activePowerUps: [],
    collectedTimePickups: [],
    remainingTime: 0,
    bonusTimeCollected: 0,
    mineExplosions: {},
    jellySlowUntil: 0,
    jellySlowFactor: 1,
    crumbledTiles: {},
    ziplineActive: null,
    lightningWarnings: {},
    sinkingPlatformDepths: {},
    lavaSurfActive: null,
    eruptionDebris: [],
    coolingPlatformStates: {},
    lavaContactTime: 0,
    thawedIces: {},
    iceBridgeStates: {},
    frostRailActive: null,
    frozenUntil: 0,
    frozenSlowFactor: 1,
    icicleDebris: [],
    avalancheBoulders: [],
    blizzardOverlayActive: false,
    phaseActive: false,
    phaseEndTime: 0,
    phaseCooldownEnd: 0,
    activeLayer: 'A',
    mirrorClonePos: null,
    echoSegments: [],
    echoSolidUntil: 0,
  });
  
  // Tilt ref for immediate updates without re-renders
  const tiltRef = useRef({ x: 0, y: 0 });
  
  // Only use state for UI that needs to trigger re-renders
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  
  const gyroscope = useGyroscope();
  const sounds = useSoundEffects();
  const particles = useParticles();

  const {
    updateBall,
    checkHazardCollision,
    checkGoalCollision,
    checkSwitchCollision,
    checkPortalCollision,
    checkCollectibleCollision,
    checkPowerUpCollision,
    initializeBalls,
    getMovingWallPosition,
    getCrusherWallPosition,
    getOrbitingHazardPosition,
    isLaserActive,
    checkLaserCollision,
    isBubbleVentActive,
    getJellyfishPosition,
    applySeaMineBlast,
    isTidalWaveActive,
    getTidalWaveWarning,
    GOAL_TIME_REQUIRED,
  } = useGamePhysics();

  const {
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
  } = useSkyFortressPhysics();

  const {
    checkLavaPoolDamage,
    applyHeatVentForce,
    isHeatVentActive,
    getHeatVentWarning,
    applyMagmaFlowForce,
    isCoolingPlatformSolid,
    getCoolingPlatformOpacity,
    isEruptionActive,
    getEruptionWarning,
    spawnEruptionDebris,
    isBallHitByDebris,
    isLavaGeyserActive,
    getLavaGeyserWarning,
    isBallInGeyserColumn,
    updateSinkingPlatform,
    getSinkingPlatformRect,
    getLavaSurfProgress,
    moveAlongLavaSurf,
  } = useVolcanicCorePhysics();

  const {
    isBallOnThawingIce,
    isThawingIceMelted,
    applySnowdriftEffect,
    isFrozenGeyserActive,
    getFrozenGeyserWarning,
    applyFrozenGeyserForce,
    isBallOnIceBridge,
    isIceBridgeBroken,
    isIceBridgeCracking,
    isBlizzardActive,
    getBlizzardWarning,
    applyBlizzardForce,
    isIcicleDropActive,
    getIcicleDropWarning,
    isBallHitByIcicle,
    getAvalancheBoulderPosition,
    isAvalancheBoulderActive,
    getAvalancheWarning,
    updateAvalancheBoulder,
    isBallHitByBoulder,
    getFrostRailProgress,
    moveAlongFrostRail,
  } = useFrozenFortressPhysics();

  const {
    shouldActivatePhase,
    isBallInTear,
    findLinkedTear,
    applyTearFlip,
    getMirrorClonePosition,
    isBallHitByClone,
    applyGravityFlipForce,
    applyGravityWellForce,
    getTimeSlowFactor,
    addEchoSegment,
    isBallHitByEcho,
  } = useDimensionNexusPhysics();

  // Apply persisted settings on mount
  useEffect(() => {
    // Set gyro sensitivity from settings
    gyroscope.setSensitivity(initialSettings.gyroSensitivity);
    // Set sound from settings
    sounds.setEnabled(initialSettings.soundEnabled);
    // Auto-enable gyroscope if user previously chose it
    if (gyroscope.isSupported && 'ontouchstart' in window) {
      if (initialSettings.controlMode === 'gyroscope') {
        enableGyroscope();
      }
    }
  }, [gyroscope.isSupported]);

  // Initialize game
  useEffect(() => {
    const balls = initializeBalls(level);
    const initialOffsets: Record<number, number> = {};
    level.walls.forEach((wall, idx) => {
      if (wall.isMoving) initialOffsets[idx] = 0;
    });
    // Reset trail history and particles
    ballTrailRef.current = balls.map(() => []);
    particles.clearParticles();
    
    gameStateRef.current = {
      status: 'playing',
      balls,
      tilt: { x: 0, y: 0 },
      startTime: Date.now(),
      elapsedTime: 0,
      falls: 0,
      goalTimer: 0,
      activatedSwitches: [],
      movingWallOffsets: initialOffsets,
      lastPortalUsed: null,
      portalCooldown: 0,
      collectedItems: [],
      score: 0,
      collectedPowerUps: [],
      activePowerUps: [],
      collectedTimePickups: [],
      remainingTime: 0,
      bonusTimeCollected: 0,
      mineExplosions: {},
      jellySlowUntil: 0,
      jellySlowFactor: 1,
      crumbledTiles: {},
      ziplineActive: null,
      lightningWarnings: {},
      sinkingPlatformDepths: {},
      lavaSurfActive: null,
      eruptionDebris: [],
      coolingPlatformStates: {},
      lavaContactTime: 0,
      thawedIces: {},
      iceBridgeStates: {},
      frostRailActive: null,
      frozenUntil: 0,
      frozenSlowFactor: 1,
      icicleDebris: [],
      avalancheBoulders: [],
      blizzardOverlayActive: false,
      phaseActive: false,
      phaseEndTime: 0,
      phaseCooldownEnd: 0,
      activeLayer: 'A',
      mirrorClonePos: null,
      echoSegments: [],
      echoSolidUntil: 0,
    };
    tiltRef.current = { x: 0, y: 0 };
    setGameStatus('playing');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // Handle enabling gyroscope
  const enableGyroscope = useCallback(async () => {
    const success = await gyroscope.enable();
    if (success) {
      setControlMode('gyroscope');
      setShowGyroPrompt(false);
      localStorage.setItem('tiltmaze_control_mode', 'gyroscope');
    }
  }, [gyroscope]);

  const disableGyroscope = useCallback(() => {
    gyroscope.disable();
    setControlMode('keyboard');
    localStorage.setItem('tiltmaze_control_mode', 'keyboard');
  }, [gyroscope]);

  // Reset ball to starting position
  const resetBallPosition = useCallback(() => {
    const balls = initializeBalls(level);
    ballTrailRef.current = balls.map(() => []);
    particles.clearParticles();
    gameStateRef.current.balls = balls;
    tiltRef.current = { x: 0, y: 0 };
    // Also recalibrate gyroscope to reset tilt reference
    if (controlMode === 'gyroscope' && gyroscope.isEnabled) {
      gyroscope.recalibrate();
    }
  }, [level, initializeBalls, particles, controlMode, gyroscope]);

  // Toggle sound
  const toggleSound = useCallback(() => {
    const newEnabled = !soundEnabled;
    setSoundEnabled(newEnabled);
    sounds.setEnabled(newEnabled);
    if (newEnabled) {
      sounds.initAudioContext();
      sounds.playClick();
    }
  }, [soundEnabled, sounds]);

  // Update tilt from gyroscope
  useEffect(() => {
    if (controlMode === 'gyroscope' && gyroscope.isEnabled && !isPaused) {
      tiltRef.current = gyroscope.tilt;
      setDisplayTilt(gyroscope.tilt);
    }
  }, [controlMode, gyroscope.isEnabled, gyroscope.tilt, isPaused]);

  // Handle keyboard input
  useEffect(() => {
    if (controlMode !== 'keyboard') return;
    
    const keysPressed = new Set<string>();
    
    const updateTilt = () => {
      let x = 0;
      let y = 0;
      
      if (keysPressed.has('ArrowUp') || keysPressed.has('w') || keysPressed.has('W')) y = -1;
      if (keysPressed.has('ArrowDown') || keysPressed.has('s') || keysPressed.has('S')) y = 1;
      if (keysPressed.has('ArrowLeft') || keysPressed.has('a') || keysPressed.has('A')) x = -1;
      if (keysPressed.has('ArrowRight') || keysPressed.has('d') || keysPressed.has('D')) x = 1;
      
      tiltRef.current = { x: x * keyTouchSensitivity, y: y * keyTouchSensitivity };
      setDisplayTilt({ x: x * keyTouchSensitivity, y: y * keyTouchSensitivity });
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPaused || gameStateRef.current.status !== 'playing') return;
      keysPressed.add(e.key);
      updateTilt();
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.delete(e.key);
      updateTilt();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isPaused, controlMode, keyTouchSensitivity]);

  // Handle mouse/touch input for virtual joystick (only in keyboard mode)
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (controlMode !== 'keyboard') return;
    if (isPaused || gameStateRef.current.status !== 'playing') return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    
    const maxTilt = keyTouchSensitivity;
    const newTilt = {
      x: Math.max(-maxTilt, Math.min(maxTilt, dx * keyTouchSensitivity)),
      y: Math.max(-maxTilt, Math.min(maxTilt, dy * keyTouchSensitivity)),
    };
    tiltRef.current = newTilt;
    setDisplayTilt(newTilt);
  }, [isPaused, controlMode, keyTouchSensitivity]);

  const handlePointerLeave = useCallback(() => {
    if (controlMode === 'keyboard') {
      tiltRef.current = { x: 0, y: 0 };
      setDisplayTilt({ x: 0, y: 0 });
    }
  }, [controlMode]);

  // Callbacks stored in refs to avoid stale closures
  const onWinRef = useRef(onWin);
  const onLoseRef = useRef(onLose);
  const onTimeUpdateRef = useRef(onTimeUpdate);
  const onScoreUpdateRef = useRef(onScoreUpdate);
  
  useEffect(() => {
    onWinRef.current = onWin;
    onLoseRef.current = onLose;
    onTimeUpdateRef.current = onTimeUpdate;
    onScoreUpdateRef.current = onScoreUpdate;
  }, [onWin, onLose, onTimeUpdate, onScoreUpdate]);

  // Game loop using requestAnimationFrame
  useEffect(() => {
    if (isPaused || gameStatus !== 'playing') {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    const gameLoop = (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp;
      const rawDelta = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;
      // Normalize delta: target 60fps (16.67ms). Cap to prevent spiral-of-death on tab-switch.
      const deltaTime = Math.min(rawDelta, 50);
      const dtScale = deltaTime / 16.667; // 1.0 at 60fps, 0.5 at 120fps, 2.0 at 30fps
      
      const state = gameStateRef.current;
      if (state.status !== 'playing') return;

      const currentTime = Date.now();

      // Check switch activations
      let newActivatedSwitches = [...state.activatedSwitches];
      let switchActivated = false;
      for (const ball of state.balls) {
        const activated = checkSwitchCollision(ball, level.switches || []);
        for (const id of activated) {
          if (!newActivatedSwitches.includes(id)) {
            newActivatedSwitches.push(id);
            switchActivated = true;
          }
        }
      }
      
      // Play switch sound
      if (switchActivated && !prevSwitchesRef.current.includes(newActivatedSwitches[newActivatedSwitches.length - 1])) {
        sounds.playSwitch();
      }
      prevSwitchesRef.current = newActivatedSwitches;

      // Check for speed boost
      const hasSpeedBoost = state.activePowerUps.some(p => p.type === 'speed' && p.endTime > currentTime);
      const speedMultiplier = hasSpeedBoost ? 1.5 : 1;

      // Update balls with tilt from ref
      const tilt = tiltRef.current;
      // Count collected keys for coral gates
      const collectedKeyCount = (level.collectibles || [])
        .filter(c => c.type === 'key' && state.collectedItems.includes(c.id))
        .length;

      // Check jellyfish slow effect
      const jellySlowFactor = currentTime < state.jellySlowUntil ? state.jellySlowFactor : 1;

      let newBalls: Ball[] = state.balls.map(ball => 
        updateBall(
          ball, 
          { x: tilt.x * speedMultiplier, y: tilt.y * speedMultiplier }, 
          level.walls, 
          currentTime, 
          newActivatedSwitches,
          level.iceSurfaces || [],
          level.gravityZones || [],
          level.conveyorZones || [],
          level.magneticZones || [],
          hasSpeedBoost,
          level.waterCurrents || [],
          level.bubbleVents || [],
          dtScale,
          level.whirlpools || [],
          level.tidalWaves || [],
          collectedKeyCount,
          jellySlowFactor
        )
      );

      // Update ball trail history
      newBalls.forEach((ball, idx) => {
        if (!ballTrailRef.current[idx]) {
          ballTrailRef.current[idx] = [];
        }
        ballTrailRef.current[idx].push({ x: ball.x, y: ball.y });
        if (ballTrailRef.current[idx].length > TRAIL_LENGTH) {
          ballTrailRef.current[idx].shift();
        }
      });

      // Check for wall collisions (velocity change indicates collision)
      newBalls.forEach((ball, idx) => {
        const prevBall = prevBallsRef.current[idx];
        if (prevBall) {
          const prevSpeed = Math.sqrt(prevBall.vx * prevBall.vx + prevBall.vy * prevBall.vy);
          const currSpeed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
          const speedDiff = Math.abs(prevSpeed - currSpeed);
          
          // Play rolling sound based on speed
          if (currSpeed > 1) {
            sounds.playRolling(currSpeed);
          }
          
          // Detect significant velocity change (wall hit)
          if (speedDiff > 2 && prevSpeed > 3) {
            sounds.playWallHit();
            // Add dust particles at collision point
            particles.addDust(ball.x, ball.y, prevBall.vx, prevBall.vy);
          }
        }
      });
      prevBallsRef.current = newBalls.map(b => ({ ...b }));

      // Check portals
      let newLastPortalUsed = state.lastPortalUsed;
      let newPortalCooldown = Math.max(0, state.portalCooldown - deltaTime);
      
      if (level.portals && level.portals.length > 0) {
        newBalls = newBalls.map(ball => {
          const portalResult = checkPortalCollision(ball, level.portals!, newLastPortalUsed, newPortalCooldown);
          if (portalResult.teleported && portalResult.destinationPortal) {
            sounds.playTeleport();
            // Add teleport particles at entry
            const entryPortal = level.portals!.find(p => p.id === portalResult.portalId);
            if (entryPortal) {
              particles.addTeleportEffect(entryPortal.x, entryPortal.y, entryPortal.color, false);
            }
            // Add teleport particles at exit
            particles.addTeleportEffect(portalResult.destinationPortal.x, portalResult.destinationPortal.y, portalResult.destinationPortal.color, true);
            newLastPortalUsed = portalResult.portalId;
            newPortalCooldown = 500;
            // Clear trail when teleporting
            ballTrailRef.current = newBalls.map(() => []);
            return portalResult.newBall;
          }
          return ball;
        });
      }

      // Check hazards - shield protects from hazards
      const hasShield = state.activePowerUps.some(p => p.type === 'shield' && p.endTime > currentTime);
      for (const ball of newBalls) {
        // Check regular hazards (including orbiting hazards)
        if (checkHazardCollision(ball, level.hazards, currentTime)) {
          if (hasShield) {
            sounds.playWallHit();
          } else {
            sounds.playFall();
            particles.addSplash(ball.x, ball.y, 20);
            gameStateRef.current.status = 'lost';
            gameStateRef.current.falls = state.falls + 1;
            setGameStatus('lost');
            onLoseRef.current();
            return;
          }
        }
        
        // Check laser gate collisions
        if (level.laserGates && checkLaserCollision(ball, level.laserGates, currentTime, hasShield)) {
          sounds.playFall();
          particles.addSplash(ball.x, ball.y, 20);
          gameStateRef.current.status = 'lost';
          gameStateRef.current.falls = state.falls + 1;
          setGameStatus('lost');
          onLoseRef.current();
          return;
        }
      }

      // Check jellyfish collisions (slow effect)
      let newJellySlowUntil = state.jellySlowUntil;
      let newJellySlowFactor = state.jellySlowFactor;
      if (level.jellyfish && level.jellyfish.length > 0) {
        for (const ball of newBalls) {
          for (const jelly of level.jellyfish) {
            const jellyPos = getJellyfishPosition(jelly, currentTime);
            const dx = ball.x - jellyPos.x;
            const dy = ball.y - jellyPos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < ball.radius + jelly.radius) {
              newJellySlowUntil = currentTime + jelly.slowDuration;
              newJellySlowFactor = jelly.slowFactor;
              particles.addSplash(ball.x, ball.y, 8);
            }
          }
        }
      }

      // Check sea mine collisions (blast force + respawn)
      let newMineExplosions = { ...state.mineExplosions };
      if (level.seaMines && level.seaMines.length > 0) {
        for (const mine of level.seaMines) {
          // Skip if mine is exploded and still respawning
          if (newMineExplosions[mine.id] && currentTime < newMineExplosions[mine.id]) continue;
          // Clear expired explosions
          if (newMineExplosions[mine.id] && currentTime >= newMineExplosions[mine.id]) {
            delete newMineExplosions[mine.id];
          }

          for (let i = 0; i < newBalls.length; i++) {
            const ball = newBalls[i];
            const dx = ball.x - mine.x;
            const dy = ball.y - mine.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < ball.radius + mine.radius) {
              // Explode
              newMineExplosions[mine.id] = currentTime + mine.respawnTime;
              const blastForce = applySeaMineBlast(ball, mine);
              newBalls[i] = {
                ...ball,
                vx: ball.vx + blastForce.x,
                vy: ball.vy + blastForce.y,
              };
              sounds.playWallHit();
              particles.addSplash(mine.x, mine.y, 25);
            }
          }
        }
      }

      // ====== SKY FORTRESS PHYSICS ======
      // Apply wind gust forces
      if (level.windGusts && level.windGusts.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const windForce = applyWindGustForce(newBalls[i], level.windGusts, currentTime);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + windForce.x * dtScale,
            vy: newBalls[i].vy + windForce.y * dtScale,
          };
        }
      }

      // Apply rotating gear forces
      if (level.rotatingGears && level.rotatingGears.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const gearForce = applyGearForce(newBalls[i], level.rotatingGears, currentTime);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + gearForce.x * dtScale,
            vy: newBalls[i].vy + gearForce.y * dtScale,
          };
        }
      }

      // Apply updraft forces
      if (level.updrafts && level.updrafts.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const updraftForce = applyUpdraftForce(newBalls[i], level.updrafts);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + updraftForce.x * dtScale,
            vy: newBalls[i].vy + updraftForce.y * dtScale,
          };
        }
      }

      // Cloud platform collision (treat as walls when solid)
      if (level.cloudPlatforms && level.cloudPlatforms.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const ball = newBalls[i];
          for (const platform of level.cloudPlatforms) {
            if (!isCloudPlatformSolid(platform, currentTime)) continue;
            // Simple AABB collision with cloud platform
            if (
              ball.x + ball.radius > platform.x &&
              ball.x - ball.radius < platform.x + platform.width &&
              ball.y + ball.radius > platform.y &&
              ball.y - ball.radius < platform.y + platform.height
            ) {
              // Push ball out of platform
              const overlapLeft = (ball.x + ball.radius) - platform.x;
              const overlapRight = (platform.x + platform.width) - (ball.x - ball.radius);
              const overlapTop = (ball.y + ball.radius) - platform.y;
              const overlapBottom = (platform.y + platform.height) - (ball.y - ball.radius);
              const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);
              
              if (minOverlap === overlapTop) {
                newBalls[i] = { ...ball, y: platform.y - ball.radius, vy: Math.min(0, ball.vy * -0.3) };
              } else if (minOverlap === overlapBottom) {
                newBalls[i] = { ...ball, y: platform.y + platform.height + ball.radius, vy: Math.max(0, ball.vy * -0.3) };
              } else if (minOverlap === overlapLeft) {
                newBalls[i] = { ...ball, x: platform.x - ball.radius, vx: Math.min(0, ball.vx * -0.3) };
              } else {
                newBalls[i] = { ...ball, x: platform.x + platform.width + ball.radius, vx: Math.max(0, ball.vx * -0.3) };
              }
            }
          }
        }
      }

      // Lightning strike check
      if (level.lightningZones && level.lightningZones.length > 0) {
        for (const ball of newBalls) {
          if (isInLightningStrike(ball, level.lightningZones, currentTime)) {
            if (hasShield) {
              sounds.playWallHit();
            } else {
              sounds.playFall();
              particles.addSplash(ball.x, ball.y, 20);
              gameStateRef.current.status = 'lost';
              gameStateRef.current.falls = state.falls + 1;
              setGameStatus('lost');
              onLoseRef.current();
              return;
            }
          }
        }
      }

      // Crumbling tile tracking
      let newCrumbledTiles = { ...state.crumbledTiles };
      if (level.crumblingTiles && level.crumblingTiles.length > 0) {
        for (const tile of level.crumblingTiles) {
          // Start crumble timer on contact
          if (newCrumbledTiles[tile.id] === undefined) {
            for (const ball of newBalls) {
              if (isBallOnTile(ball, tile)) {
                newCrumbledTiles[tile.id] = currentTime;
                break;
              }
            }
          }
          // Check if tile is crumbled and ball falls through (treat as hazard)
          if (isTileCrumbled(tile.id, newCrumbledTiles, currentTime, tile)) {
            for (const ball of newBalls) {
              if (isBallOnTile(ball, tile)) {
                if (hasShield) {
                  sounds.playWallHit();
                } else {
                  sounds.playFall();
                  particles.addSplash(ball.x, ball.y, 15);
                  gameStateRef.current.status = 'lost';
                  gameStateRef.current.falls = state.falls + 1;
                  setGameStatus('lost');
                  onLoseRef.current();
                  return;
                }
              }
            }
          }
        }
      }

      // Zipline handling
      let newZiplineActive = state.ziplineActive;
      if (level.ziplines && level.ziplines.length > 0) {
        if (newZiplineActive) {
          // Move along active zipline
          const zipline = level.ziplines.find(z => z.id === newZiplineActive!.id);
          if (zipline) {
            const result = moveAlongZipline(zipline, newZiplineActive.progress, zipline.speed, dtScale);
            newBalls[0] = { ...newBalls[0], x: result.x, y: result.y, vx: 0, vy: 0 };
            if (result.done) {
              newZiplineActive = null;
            } else {
              newZiplineActive = { id: newZiplineActive.id, progress: result.progress };
            }
          }
        } else {
          // Check if ball grabs a zipline
          for (const zipline of level.ziplines) {
            const progress = getZiplineProgress(newBalls[0], zipline);
            if (progress !== null) {
              newZiplineActive = { id: zipline.id, progress };
              break;
            }
          }
        }
      }

      // ====== VOLCANIC CORE PHYSICS ======
      // Lava pool damage
      let newLavaContactTime = state.lavaContactTime;
      if (level.lavaPools && level.lavaPools.length > 0) {
        for (const ball of newBalls) {
          const lavaResult = checkLavaPoolDamage(ball, level.lavaPools);
          if (lavaResult.inLava) {
            newLavaContactTime += deltaTime;
            // Damage threshold: lose after 1.5 seconds of cumulative lava contact
            if (newLavaContactTime > 1500) {
              if (hasShield) {
                newLavaContactTime = 0;
                sounds.playWallHit();
              } else {
                sounds.playFall();
                particles.addSplash(ball.x, ball.y, 20);
                gameStateRef.current.status = 'lost';
                gameStateRef.current.falls = state.falls + 1;
                setGameStatus('lost');
                onLoseRef.current();
                return;
              }
            }
            // Visual feedback particles while in lava
            if (Math.random() < 0.3) {
              particles.addSplash(ball.x, ball.y, 3);
            }
          }
        }
      }

      // Heat vent forces
      if (level.heatVents && level.heatVents.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const heatForce = applyHeatVentForce(newBalls[i], level.heatVents, currentTime);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + heatForce.x * dtScale,
            vy: newBalls[i].vy + heatForce.y * dtScale,
          };
        }
      }

      // Magma flow forces + damage
      if (level.magmaFlows && level.magmaFlows.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const magmaResult = applyMagmaFlowForce(newBalls[i], level.magmaFlows);
          if (magmaResult.inFlow) {
            newBalls[i] = {
              ...newBalls[i],
              vx: newBalls[i].vx + magmaResult.x * dtScale,
              vy: newBalls[i].vy + magmaResult.y * dtScale,
            };
            newLavaContactTime += deltaTime * 0.5; // Slower damage than lava pools
          }
        }
      }

      // Cooling platform collision (solid when cooled)
      if (level.coolingPlatforms && level.coolingPlatforms.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const ball = newBalls[i];
          for (const platform of level.coolingPlatforms) {
            const platformId = platform.id ?? 0;
            if (!isCoolingPlatformSolid(platform, currentTime)) {
              // Melted - acts as lava hazard
              if (
                ball.x + ball.radius > platform.x &&
                ball.x - ball.radius < platform.x + platform.width &&
                ball.y + ball.radius > platform.y &&
                ball.y - ball.radius < platform.y + platform.height
              ) {
                newLavaContactTime += deltaTime;
              }
              continue;
            }
            // Solid - wall collision
            const closestX = Math.max(platform.x, Math.min(ball.x, platform.x + platform.width));
            const closestY = Math.max(platform.y, Math.min(ball.y, platform.y + platform.height));
            const distX = ball.x - closestX;
            const distY = ball.y - closestY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance < ball.radius) {
              const overlap = ball.radius - distance;
              const normalX = distance > 0 ? distX / distance : 0;
              const normalY = distance > 0 ? distY / distance : 1;
              newBalls[i] = {
                ...ball,
                x: ball.x + normalX * overlap,
                y: ball.y + normalY * overlap,
                vx: ball.vx - 2 * (ball.vx * normalX + ball.vy * normalY) * normalX * 0.7,
                vy: ball.vy - 2 * (ball.vx * normalX + ball.vy * normalY) * normalY * 0.7,
              };
            }
          }
        }
      }

      // Volcanic eruption debris
      let newEruptionDebris = state.eruptionDebris.map(d => ({
        ...d,
        timer: d.timer - deltaTime,
      })).filter(d => d.timer > 0);

      if (level.volcanicEruption) {
        const eruption = level.volcanicEruption;
        const cycleTime = currentTime % eruption.interval;
        const prevCycleTime = (currentTime - deltaTime) % eruption.interval;
        // Spawn new debris when eruption starts
        if (cycleTime >= eruption.warningTime && prevCycleTime < eruption.warningTime) {
          newEruptionDebris = [...newEruptionDebris, ...spawnEruptionDebris(eruption, 600)];
        }
        // Check debris collision
        for (const ball of newBalls) {
          if (isBallHitByDebris(ball, newEruptionDebris, eruption.debrisRadius)) {
            if (hasShield) {
              sounds.playWallHit();
            } else {
              sounds.playFall();
              particles.addSplash(ball.x, ball.y, 20);
              gameStateRef.current.status = 'lost';
              gameStateRef.current.falls = state.falls + 1;
              setGameStatus('lost');
              onLoseRef.current();
              return;
            }
          }
        }
      }

      // Lava geyser collision
      if (level.lavaGeysers && level.lavaGeysers.length > 0) {
        for (const ball of newBalls) {
          for (const geyser of level.lavaGeysers) {
            if (isBallInGeyserColumn(ball, geyser, currentTime)) {
              if (hasShield) {
                sounds.playWallHit();
              } else {
                sounds.playFall();
                particles.addSplash(ball.x, ball.y, 20);
                gameStateRef.current.status = 'lost';
                gameStateRef.current.falls = state.falls + 1;
                setGameStatus('lost');
                onLoseRef.current();
                return;
              }
            }
          }
        }
      }

      // Sinking platforms
      let newSinkingDepths = { ...state.sinkingPlatformDepths };
      if (level.sinkingPlatforms && level.sinkingPlatforms.length > 0) {
        for (const platform of level.sinkingPlatforms) {
          const currentDepth = newSinkingDepths[platform.id] ?? 0;
          const sinkResult = updateSinkingPlatform(newBalls[0], platform, currentDepth, deltaTime / 1000);
          newSinkingDepths[platform.id] = sinkResult.newDepth;

          // Collision with sinking platform surface
          const rect = getSinkingPlatformRect(platform, sinkResult.newDepth);
          for (let i = 0; i < newBalls.length; i++) {
            const ball = newBalls[i];
            const closestX = Math.max(rect.x, Math.min(ball.x, rect.x + rect.width));
            const closestY = Math.max(rect.y, Math.min(ball.y, rect.y + rect.height));
            const distX = ball.x - closestX;
            const distY = ball.y - closestY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance < ball.radius) {
              const overlap = ball.radius - distance;
              const normalX = distance > 0 ? distX / distance : 0;
              const normalY = distance > 0 ? distY / distance : 1;
              newBalls[i] = {
                ...ball,
                x: ball.x + normalX * overlap,
                y: ball.y + normalY * overlap,
                vx: ball.vx - 2 * (ball.vx * normalX + ball.vy * normalY) * normalX * 0.7,
                vy: ball.vy - 2 * (ball.vx * normalX + ball.vy * normalY) * normalY * 0.7,
              };
            }
          }

          // Fully sunk = hazard
          if (sinkResult.isSunk) {
            for (const ball of newBalls) {
              if (
                ball.x + ball.radius > rect.x &&
                ball.x - ball.radius < rect.x + rect.width &&
                ball.y + ball.radius > rect.y &&
                ball.y - ball.radius < rect.y + rect.height
              ) {
                newLavaContactTime += deltaTime;
              }
            }
          }
        }
      }

      // Lava surf handling
      let newLavaSurfActive = state.lavaSurfActive;
      if (level.lavaSurfs && level.lavaSurfs.length > 0) {
        if (newLavaSurfActive) {
          const surf = level.lavaSurfs.find(s => s.id === newLavaSurfActive!.id);
          if (surf) {
            const result = moveAlongLavaSurf(surf, newLavaSurfActive.progress, surf.speed, dtScale / 60);
            newBalls[0] = { ...newBalls[0], x: result.x, y: result.y, vx: 0, vy: 0 };
            if (result.done) {
              newLavaSurfActive = null;
            } else {
              newLavaSurfActive = { id: newLavaSurfActive.id, progress: result.progress };
            }
          }
        } else {
          for (const surf of level.lavaSurfs) {
            const progress = getLavaSurfProgress(newBalls[0], surf);
            if (progress !== null) {
              newLavaSurfActive = { id: surf.id, progress };
              break;
            }
          }
        }
      }

      // ====== FROZEN FORTRESS PHYSICS ======

      // Thawing ice tracking
      let newThawedIces = { ...state.thawedIces };
      if (level.thawingIces && level.thawingIces.length > 0) {
        for (let idx = 0; idx < level.thawingIces.length; idx++) {
          const ice = level.thawingIces[idx];
          // Check if melted (skip collision)
          if (isThawingIceMelted(idx, newThawedIces, currentTime, ice.thawTime, ice.respawnTime || 0)) {
            // If respawn: check if respawned
            if (ice.respawnTime && ice.respawnTime > 0) {
              const elapsed = currentTime - newThawedIces[idx];
              if (elapsed > ice.thawTime + ice.respawnTime) {
                delete newThawedIces[idx]; // respawned, reset
              }
            }
            continue;
          }
          // Start thaw timer on contact
          for (const ball of newBalls) {
            if (isBallOnThawingIce(ball, ice) && newThawedIces[idx] === undefined) {
              newThawedIces[idx] = currentTime;
            }
          }
          // Still solid - treat as wall collision
          if (!isThawingIceMelted(idx, newThawedIces, currentTime, ice.thawTime, ice.respawnTime || 0)) {
            for (let i = 0; i < newBalls.length; i++) {
              const ball = newBalls[i];
              const closestX = Math.max(ice.x, Math.min(ball.x, ice.x + ice.width));
              const closestY = Math.max(ice.y, Math.min(ball.y, ice.y + ice.height));
              const distX = ball.x - closestX;
              const distY = ball.y - closestY;
              const distance = Math.sqrt(distX * distX + distY * distY);
              if (distance < ball.radius) {
                const overlap = ball.radius - distance;
                const normalX = distance > 0 ? distX / distance : 0;
                const normalY = distance > 0 ? distY / distance : 1;
                newBalls[i] = {
                  ...ball,
                  x: ball.x + normalX * overlap,
                  y: ball.y + normalY * overlap,
                  vx: ball.vx - 2 * (ball.vx * normalX + ball.vy * normalY) * normalX * 0.7,
                  vy: ball.vy - 2 * (ball.vx * normalX + ball.vy * normalY) * normalY * 0.7,
                };
              }
            }
          }
        }
      }

      // Snowdrift slow effect
      if (level.snowdrifts && level.snowdrifts.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const driftResult = applySnowdriftEffect(newBalls[i], level.snowdrifts);
          if (driftResult.inDrift) {
            newBalls[i] = {
              ...newBalls[i],
              vx: newBalls[i].vx * driftResult.slowFactor,
              vy: newBalls[i].vy * driftResult.slowFactor,
            };
          }
        }
      }

      // Frozen geyser forces + freeze debuff
      let newFrozenUntil = state.frozenUntil;
      let newFrozenSlowFactor = state.frozenSlowFactor;
      if (level.frozenGeysers && level.frozenGeysers.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const geyserResult = applyFrozenGeyserForce(newBalls[i], level.frozenGeysers, currentTime);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + geyserResult.force.x * dtScale,
            vy: newBalls[i].vy + geyserResult.force.y * dtScale,
          };
          if (geyserResult.freeze) {
            newFrozenUntil = currentTime + geyserResult.freezeDuration;
            newFrozenSlowFactor = geyserResult.freezeFactor;
            particles.addFrostMist(newBalls[i].x, newBalls[i].y, 25);
          }
          // Mist particles while geyser is actively erupting near ball
          if (geyserResult.force.y !== 0 && Math.random() < 0.3) {
            particles.addFrostMist(newBalls[i].x, newBalls[i].y - 10, 15);
          }
        }
      }

      // Apply freeze debuff
      if (currentTime < newFrozenUntil) {
        for (let i = 0; i < newBalls.length; i++) {
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx * newFrozenSlowFactor,
            vy: newBalls[i].vy * newFrozenSlowFactor,
          };
        }
      }

      // Ice bridge cracking/breaking
      let newIceBridgeStates = { ...state.iceBridgeStates };
      if (level.iceBridges && level.iceBridges.length > 0) {
        for (let idx = 0; idx < level.iceBridges.length; idx++) {
          const bridge = level.iceBridges[idx];
          const isBroken = isIceBridgeBroken(idx, newIceBridgeStates, currentTime, bridge.crackTime, bridge.breakTime, bridge.respawnTime || 0);
          
          if (isBroken) {
            // Snowflake burst when bridge first breaks (previous frame wasn't broken)
            const wasBrokenBefore = isIceBridgeBroken(idx, state.iceBridgeStates, currentTime - dtScale / 60, bridge.crackTime, bridge.breakTime, bridge.respawnTime || 0);
            if (!wasBrokenBefore) {
              particles.addSnowflakeBurst(bridge.x + bridge.width / 2, bridge.y + bridge.height / 2, 20);
            }
            // Broken bridge = hazard
            for (const ball of newBalls) {
              if (isBallOnIceBridge(ball, bridge)) {
                if (hasShield) {
                  sounds.playWallHit();
                } else {
                  sounds.playFall();
                  particles.addSplash(ball.x, ball.y, 15);
                  gameStateRef.current.status = 'lost';
                  gameStateRef.current.falls = state.falls + 1;
                  setGameStatus('lost');
                  onLoseRef.current();
                  return;
                }
              }
            }
            // Check respawn
            if (bridge.respawnTime && bridge.respawnTime > 0) {
              const elapsed = currentTime - newIceBridgeStates[idx];
              if (elapsed > bridge.crackTime + bridge.breakTime + bridge.respawnTime) {
                delete newIceBridgeStates[idx];
              }
            }
            continue;
          }

          // Start crack timer on contact
          for (const ball of newBalls) {
            if (isBallOnIceBridge(ball, bridge) && newIceBridgeStates[idx] === undefined) {
              newIceBridgeStates[idx] = currentTime;
            }
          }

          // Still solid - wall collision
          for (let i = 0; i < newBalls.length; i++) {
            const ball = newBalls[i];
            const closestX = Math.max(bridge.x, Math.min(ball.x, bridge.x + bridge.width));
            const closestY = Math.max(bridge.y, Math.min(ball.y, bridge.y + bridge.height));
            const distX = ball.x - closestX;
            const distY = ball.y - closestY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            if (distance < ball.radius) {
              const overlap = ball.radius - distance;
              const normalX = distance > 0 ? distX / distance : 0;
              const normalY = distance > 0 ? distY / distance : 1;
              newBalls[i] = {
                ...ball,
                x: ball.x + normalX * overlap,
                y: ball.y + normalY * overlap,
                vx: ball.vx - 2 * (ball.vx * normalX + ball.vy * normalY) * normalX * 0.7,
                vy: ball.vy - 2 * (ball.vx * normalX + ball.vy * normalY) * normalY * 0.7,
              };
            }
          }
        }
      }

      // Blizzard wind forces
      let newBlizzardOverlayActive = false;
      if (level.blizzard) {
        const blizzard = level.blizzard;
          if (isBlizzardActive(blizzard, currentTime)) {
            newBlizzardOverlayActive = true;
            for (let i = 0; i < newBalls.length; i++) {
              const windForce = applyBlizzardForce(newBalls[i], blizzard, currentTime);
              newBalls[i] = {
                ...newBalls[i],
                vx: newBalls[i].vx + windForce.x * dtScale,
                vy: newBalls[i].vy + windForce.y * dtScale,
              };
            }
          }
      }

      // Icicle drop hazards
      let newIcicleDebris = state.icicleDebris.map(d => ({
        ...d,
        timer: d.timer - deltaTime,
      })).filter(d => d.timer > 0);

      if (level.icicleDrops && level.icicleDrops.length > 0) {
        for (const drop of level.icicleDrops) {
          // Spawn icicle debris at cycle start
          const cycleTime = currentTime % drop.interval;
          const prevCycleTime = (currentTime - deltaTime) % drop.interval;
          if (cycleTime >= drop.warningTime && prevCycleTime < drop.warningTime) {
            newIcicleDebris.push({
              x: drop.x,
              y: drop.y,
              timer: drop.dropDuration,
            });
          }
        }
        // Check icicle hits
        if (isBallHitByIcicle(newBalls[0], level.icicleDrops, currentTime)) {
          if (hasShield) {
            sounds.playWallHit();
          } else {
            sounds.playFall();
            particles.addSplash(newBalls[0].x, newBalls[0].y, 20);
            gameStateRef.current.status = 'lost';
            gameStateRef.current.falls = state.falls + 1;
            setGameStatus('lost');
            onLoseRef.current();
            return;
          }
        }
      }

      // Avalanche boulders
      let newAvalancheBoulders = [...state.avalancheBoulders];
      if (level.avalanches && level.avalanches.length > 0) {
        for (let idx = 0; idx < level.avalanches.length; idx++) {
          const avalanche = level.avalanches[idx];
          if (isAvalancheBoulderActive(avalanche, currentTime)) {
            // Check if boulder for this avalanche is already active
            let boulder = newAvalancheBoulders.find(b => b.id === idx);
            if (!boulder) {
              boulder = { id: idx, progress: 0, spawnTime: currentTime };
              newAvalancheBoulders.push(boulder);
            }
            // Update position
            const result = updateAvalancheBoulder(avalanche, boulder.progress, dtScale / 60);
            boulder.progress = result.progress;
            if (result.done) {
              newAvalancheBoulders = newAvalancheBoulders.filter(b => b.id !== idx);
            } else {
              // Avalanche dust trail while boulder rolls
              const pos = getAvalancheBoulderPosition(avalanche, boulder.progress);
              if (Math.random() < 0.4) {
                const dirX = avalanche.x2 - avalanche.x1;
                particles.addAvalancheDust(pos.x, pos.y + avalanche.radius, dirX > 0 ? 1 : -1);
              }
              for (const ball of newBalls) {
                if (isBallHitByBoulder(ball, pos, avalanche.radius)) {
                  if (hasShield) {
                    sounds.playWallHit();
                  } else {
                    sounds.playFall();
                    particles.addSplash(ball.x, ball.y, 20);
                    gameStateRef.current.status = 'lost';
                    gameStateRef.current.falls = state.falls + 1;
                    setGameStatus('lost');
                    onLoseRef.current();
                    return;
                  }
                }
              }
            }
          }
        }
      }

      // Frost rail handling
      let newFrostRailActive = state.frostRailActive;
      if (level.frostRails && level.frostRails.length > 0) {
        if (newFrostRailActive) {
          const rail = level.frostRails.find(r => r.id === newFrostRailActive!.id);
          if (rail) {
            const result = moveAlongFrostRail(rail, newFrostRailActive.progress, rail.speed, dtScale / 60);
            newBalls[0] = { ...newBalls[0], x: result.x, y: result.y, vx: 0, vy: 0 };
            if (result.done) {
              newFrostRailActive = null;
            } else {
              newFrostRailActive = { id: newFrostRailActive.id, progress: result.progress };
            }
          }
        } else {
          for (const rail of level.frostRails) {
            const progress = getFrostRailProgress(newBalls[0], rail);
            if (progress !== null) {
              newFrostRailActive = { id: rail.id, progress };
              break;
            }
          }
        }
      }

      // ====== DIMENSION NEXUS PHYSICS ======

      // Phase Shift activation
      let newPhaseActive = state.phaseActive;
      let newPhaseEndTime = state.phaseEndTime;
      let newPhaseCooldownEnd = state.phaseCooldownEnd;
      let newActiveLayer = state.activeLayer;

      if (level.phaseShifts && level.phaseShifts.length > 0) {
        // Check if phase expired
        if (newPhaseActive && currentTime >= newPhaseEndTime) {
          newPhaseActive = false;
          newPhaseCooldownEnd = currentTime + (level.phaseShifts[0].cooldown || 3000);
          newActiveLayer = newActiveLayer === 'A' ? 'B' : 'A';
        }
        // Check if ball enters a phase zone
        if (!newPhaseActive) {
          for (const ball of newBalls) {
            const zone = shouldActivatePhase(ball, level.phaseShifts, currentTime, newPhaseCooldownEnd);
            if (zone) {
              newPhaseActive = true;
              newPhaseEndTime = currentTime + zone.phaseDuration;
              newActiveLayer = newActiveLayer === 'A' ? 'B' : 'A';
              sounds.playTeleport();
              particles.addTeleportEffect(ball.x, ball.y, 'hsla(280, 80%, 60%, 1)', true);
              break;
            }
          }
        }
      }

      // Dimension Tear teleportation
      if (level.dimensionTears && level.dimensionTears.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const ball = newBalls[i];
          for (const tear of level.dimensionTears) {
            if (isBallInTear(ball, tear)) {
              const dest = findLinkedTear(tear.id, level.dimensionTears);
              if (dest) {
                newBalls[i] = applyTearFlip(ball, tear, dest);
                sounds.playTeleport();
                particles.addTeleportEffect(tear.x, tear.y, tear.color || 'hsla(280, 80%, 60%, 1)', false);
                particles.addTeleportEffect(dest.x, dest.y, dest.color || 'hsla(280, 80%, 60%, 1)', true);
                ballTrailRef.current = newBalls.map(() => []);
                break;
              }
            }
          }
        }
      }

      // Mirror Clone tracking + collision
      let newMirrorClonePos = state.mirrorClonePos;
      if (level.mirrorClone) {
        const clone = level.mirrorClone;
        const mp = getMirrorClonePosition(newBalls[0], clone);
        newMirrorClonePos = mp;

        // Check if ball hits mirror clone (lethal)
        if (clone.isLethal && isBallHitByClone(newBalls[0], mp, clone.cloneRadius)) {
          if (hasShield) {
            sounds.playWallHit();
          } else {
            sounds.playFall();
            particles.addSplash(newBalls[0].x, newBalls[0].y, 20);
            gameStateRef.current.status = 'lost';
            gameStateRef.current.falls = state.falls + 1;
            setGameStatus('lost');
            onLoseRef.current();
            return;
          }
        }
      }

      // Gravity Flip zones
      if (level.gravityFlips && level.gravityFlips.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const flipResult = applyGravityFlipForce(newBalls[i], level.gravityFlips, tilt.x, tilt.y);
          if (flipResult.isFlipped) {
            newBalls[i] = {
              ...newBalls[i],
              vx: newBalls[i].vx + flipResult.forceX * dtScale,
              vy: newBalls[i].vy + flipResult.forceY * dtScale,
            };
          }
        }
      }

      // Gravity Well forces
      if (level.gravityWells && level.gravityWells.length > 0) {
        for (let i = 0; i < newBalls.length; i++) {
          const wellForce = applyGravityWellForce(newBalls[i], level.gravityWells);
          newBalls[i] = {
            ...newBalls[i],
            vx: newBalls[i].vx + wellForce.x * dtScale,
            vy: newBalls[i].vy + wellForce.y * dtScale,
          };
        }
      }

      // Time Slow zones - apply slow factor to ball velocity
      let timeSlowFactor = 1;
      if (level.timeSlows && level.timeSlows.length > 0) {
        timeSlowFactor = getTimeSlowFactor(newBalls[0], level.timeSlows);
        if (timeSlowFactor < 1) {
          for (let i = 0; i < newBalls.length; i++) {
            newBalls[i] = {
              ...newBalls[i],
              vx: newBalls[i].vx * timeSlowFactor,
              vy: newBalls[i].vy * timeSlowFactor,
            };
          }
        }
      }

      // Echo Trail - record segments and check hazard collision
      let newEchoSegments = [...state.echoSegments];
      let newEchoSolidUntil = state.echoSolidUntil;
      if (level.echoTrail) {
        const trail = level.echoTrail;
        // Add current position to echo trail
        newEchoSegments = addEchoSegment(newEchoSegments, newBalls[0], currentTime, trail.maxSegments);

        // Check if trail should solidify
        if (newEchoSegments.length > 0) {
          const oldestAge = currentTime - newEchoSegments[0].time;
          if (oldestAge >= trail.delay && currentTime >= newEchoSolidUntil) {
            newEchoSolidUntil = currentTime + trail.trailLifetime;
          }
        }

        // Check collision with solidified echo trail
        if (currentTime < newEchoSolidUntil) {
          if (isBallHitByEcho(newBalls[0], newEchoSegments, currentTime, trail)) {
            if (hasShield) {
              sounds.playWallHit();
            } else {
              sounds.playFall();
              particles.addSplash(newBalls[0].x, newBalls[0].y, 20);
              gameStateRef.current.status = 'lost';
              gameStateRef.current.falls = state.falls + 1;
              setGameStatus('lost');
              onLoseRef.current();
              return;
            }
          }
        }

        // Trim old segments
        if (newEchoSegments.length > trail.maxSegments) {
          newEchoSegments = newEchoSegments.slice(newEchoSegments.length - trail.maxSegments);
        }
      }

      // Dimension Nexus ambient particles (throttled)
      if (Math.random() < 0.15) {
        // Phase shift shimmer while active
        if (newPhaseActive && level.phaseShifts) {
          for (const ps of level.phaseShifts) {
            particles.addPhaseShimmer(ps.x, ps.y, ps.width, ps.height);
          }
        }
        // Dimension tear ambient sparks
        if (level.dimensionTears) {
          for (const tear of level.dimensionTears) {
            particles.addDimensionTearSparks(tear.x, tear.y, tear.radius);
          }
        }
        // Gravity well distortion waves
        if (level.gravityWells) {
          for (const well of level.gravityWells) {
            particles.addGravityWellWave(well.x, well.y, well.radius, well.strength > 0);
          }
        }
        // Echo trail fading particles when solidified
        if (level.echoTrail && currentTime < newEchoSolidUntil && newEchoSegments.length > 0) {
          const seg = newEchoSegments[Math.floor(Math.random() * newEchoSegments.length)];
          particles.addEchoFade(seg.x, seg.y);
        }
      }

      // Check collectibles
      let newCollectedItems = [...state.collectedItems];
      let newScore = state.score;
      
      const hasMultiplier = state.activePowerUps.some(p => p.type === 'multiplier' && p.endTime > currentTime);
      const scoreMultiplier = hasMultiplier ? 2 : 1;
      
      if (level.collectibles && level.collectibles.length > 0) {
        for (const ball of newBalls) {
          const collectResult = checkCollectibleCollision(ball, level.collectibles, newCollectedItems);
          if (collectResult.collected) {
            newCollectedItems.push(collectResult.collected.id);
            newScore += collectResult.collected.points * scoreMultiplier;
            sounds.playCollect(collectResult.collected.type === 'gem');
            particles.addCollectEffect(collectResult.collected.x, collectResult.collected.y, collectResult.collected.type === 'gem');
          }
        }
      }

      // Check power-ups
      let newCollectedPowerUps = [...state.collectedPowerUps];
      let newActivePowerUps = state.activePowerUps.filter(p => p.endTime > currentTime);
      
      if (level.powerUps && level.powerUps.length > 0) {
        for (const ball of newBalls) {
          const powerUpResult = checkPowerUpCollision(ball, level.powerUps, newCollectedPowerUps);
          if (powerUpResult.powerUp) {
            newCollectedPowerUps.push(powerUpResult.powerUp.id);
            sounds.playPowerUp(powerUpResult.powerUp.type);
            particles.addPowerUpEffect(powerUpResult.powerUp.x, powerUpResult.powerUp.y, powerUpResult.powerUp.type);
            
            newActivePowerUps.push({
              type: powerUpResult.powerUp.type,
              startTime: currentTime,
              endTime: currentTime + powerUpResult.powerUp.duration,
            });
          }
        }
      }

      // Check if all balls in goal
      const allInGoal = newBalls.every(ball => checkGoalCollision(ball, level.goal));
      let newGoalTimer = allInGoal ? state.goalTimer + deltaTime : 0;

      if (newGoalTimer >= GOAL_TIME_REQUIRED) {
        sounds.playGoal();
        particles.addSparkles(level.goal.x, level.goal.y, 30);
        const elapsedTime = (Date.now() - state.startTime) / 1000;
        gameStateRef.current.status = 'won';
        gameStateRef.current.elapsedTime = elapsedTime;
        setGameStatus('won');
        onWinRef.current(elapsedTime, state.falls);
        return;
      }
      
      // Update particles
      particles.updateParticles();
      
      const newElapsedTime = (Date.now() - state.startTime) / 1000;
      
      if (onTimeUpdateRef.current) {
        onTimeUpdateRef.current(newElapsedTime);
      }
      
      if (onScoreUpdateRef.current) {
        onScoreUpdateRef.current(newScore, newCollectedItems.length);
      }

      // Update state ref directly (no setState = no re-render)
      gameStateRef.current = {
        ...state,
        balls: newBalls,
        tilt: tiltRef.current,
        elapsedTime: newElapsedTime,
        goalTimer: newGoalTimer,
        activatedSwitches: newActivatedSwitches,
        lastPortalUsed: newLastPortalUsed,
        portalCooldown: newPortalCooldown,
        collectedItems: newCollectedItems,
        score: newScore,
        collectedPowerUps: newCollectedPowerUps,
        activePowerUps: newActivePowerUps,
        collectedTimePickups: state.collectedTimePickups,
        remainingTime: 0,
        bonusTimeCollected: 0,
        mineExplosions: newMineExplosions,
        jellySlowUntil: newJellySlowUntil,
        jellySlowFactor: newJellySlowFactor,
        crumbledTiles: newCrumbledTiles,
        ziplineActive: newZiplineActive,
        lightningWarnings: state.lightningWarnings,
        sinkingPlatformDepths: newSinkingDepths,
        lavaSurfActive: newLavaSurfActive,
        eruptionDebris: newEruptionDebris,
        lavaContactTime: newLavaContactTime,
        thawedIces: newThawedIces,
        iceBridgeStates: newIceBridgeStates,
        frostRailActive: newFrostRailActive,
        frozenUntil: newFrozenUntil,
        frozenSlowFactor: newFrozenSlowFactor,
        icicleDebris: newIcicleDebris,
        avalancheBoulders: newAvalancheBoulders,
        blizzardOverlayActive: newBlizzardOverlayActive,
        phaseActive: newPhaseActive,
        phaseEndTime: newPhaseEndTime,
        phaseCooldownEnd: newPhaseCooldownEnd,
        activeLayer: newActiveLayer,
        mirrorClonePos: newMirrorClonePos,
        echoSegments: newEchoSegments,
        echoSolidUntil: newEchoSolidUntil,
      };

      // Request next frame
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    };
  }, [isPaused, gameStatus, level, updateBall, checkHazardCollision, checkGoalCollision, checkSwitchCollision, checkPortalCollision, checkCollectibleCollision, checkPowerUpCollision, checkLaserCollision, GOAL_TIME_REQUIRED, sounds, particles, getJellyfishPosition, applySeaMineBlast, isTidalWaveActive, getTidalWaveWarning]);

  // Separate render loop using requestAnimationFrame
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
      const worldTheme = getWorldTheme(level.id);
      ctx.fillStyle = worldTheme.canvasBg;
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      
      // Subtle grid pattern
      ctx.strokeStyle = worldTheme.canvasBgAlt;
      ctx.lineWidth = 0.3;
      for (let gx = 0; gx < CANVAS_SIZE; gx += 30) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, CANVAS_SIZE); ctx.stroke();
      }
      for (let gy = 0; gy < CANVAS_SIZE; gy += 30) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(CANVAS_SIZE, gy); ctx.stroke();
      }

      // Draw ice surfaces first (under everything)
      if (level.iceSurfaces) {
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

      // Draw gravity zones
      if (level.gravityZones) {
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

      // Draw water currents (Sunken Temple)
      if (level.waterCurrents) {
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
          
          // Draw animated flow arrows
          ctx.fillStyle = 'hsla(200, 90%, 75%, 0.7)';
          const arrowSize = 8;
          const arrowSpacing = 50;
          
          const numArrowsX = Math.floor(current.width / arrowSpacing);
          const numArrowsY = Math.floor(current.height / arrowSpacing);
          
          for (let ax = 0; ax < numArrowsX; ax++) {
            for (let ay = 0; ay < numArrowsY; ay++) {
              let arrowX = current.x + (ax + 0.5) * arrowSpacing;
              let arrowY = current.y + (ay + 0.5) * arrowSpacing;
              
              if (isHorizontal) {
                arrowX += isPositive ? (animOffset % arrowSpacing) : -(animOffset % arrowSpacing);
              } else {
                arrowY += isPositive ? (animOffset % arrowSpacing) : -(animOffset % arrowSpacing);
              }
              
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
          
          // Draw border
          ctx.strokeStyle = 'hsla(200, 80%, 60%, 0.5)';
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]);
          ctx.strokeRect(current.x, current.y, current.width, current.height);
          ctx.setLineDash([]);
        }
      }

      // Draw bubble vents (Sunken Temple)
      if (level.bubbleVents) {
        for (const vent of level.bubbleVents) {
          const isActive = isBubbleVentActive(vent, currentTime);
          
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
              }
            }
          } else {
            // Draw idle bubbles
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

      // Draw collectibles
      if (level.collectibles) {
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
            // Key collectible
            const keyGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, collectible.radius * 2);
            keyGlow.addColorStop(0, 'hsla(45, 100%, 60%, 0.5)');
            keyGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = keyGlow;
            ctx.beginPath();
            ctx.arc(0, 0, collectible.radius * 2, 0, Math.PI * 2);
            ctx.fill();
            
            const keyGrad = ctx.createRadialGradient(-2, -2, 0, 0, 0, collectible.radius);
            keyGrad.addColorStop(0, 'hsl(45, 100%, 75%)');
            keyGrad.addColorStop(1, 'hsl(35, 90%, 40%)');
            ctx.fillStyle = keyGrad;
            ctx.beginPath();
            ctx.arc(0, 0, collectible.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = 'hsl(40, 100%, 65%)';
            ctx.lineWidth = 2;
            ctx.stroke();
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

      // Draw power-ups
      if (level.powerUps) {
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

      // Draw switches
      if (level.switches) {
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

      // Draw portals
      if (level.portals) {
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

      // Draw walls
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

        // Coral gate rendering
        if (wall.requiredKeys !== undefined) {
          const collectedKeyCount = (level.collectibles || [])
            .filter(c => c.type === 'key' && state.collectedItems.includes(c.id))
            .length;
          if (collectedKeyCount >= wall.requiredKeys) {
            ctx.strokeStyle = 'hsla(30, 70%, 50%, 0.2)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 6]);
            ctx.strokeRect(wall.x, wall.y, wall.width, wall.height);
            ctx.setLineDash([]);
            continue;
          }
          ctx.fillStyle = 'hsl(20, 75%, 48%)';
          ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
          ctx.shadowColor = 'hsl(20, 80%, 50%)';
          ctx.shadowBlur = 8;
          ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
          ctx.shadowBlur = 0;
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
        } else {
          ctx.fillStyle = worldTheme.wallColor;
        }
        
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
        
        if (level.walls[i].isMoving) {
          ctx.shadowColor = 'hsl(280, 60%, 50%)';
          ctx.shadowBlur = 10;
          ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
          ctx.shadowBlur = 0;
        }
      }

      // Draw goal with pulsing glow animation
      const pulseScale = 1 + Math.sin(currentTime * 0.004) * 0.15; // Pulsing effect
      const pulseOpacity = 0.3 + Math.sin(currentTime * 0.003) * 0.15;
      
      // Outer pulsing ring
      const outerRingRadius = level.goal.radius * 1.8 * pulseScale;
      ctx.strokeStyle = `hsla(160, 84%, 55%, ${0.3 + Math.sin(currentTime * 0.005) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.arc(level.goal.x, level.goal.y, outerRingRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Large glow
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

      // Inner fill
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

      // Main border ring
      ctx.strokeStyle = 'hsl(160, 84%, 50%)';
      ctx.lineWidth = 4;
      ctx.shadowColor = 'hsl(160, 84%, 50%)';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(level.goal.x, level.goal.y, level.goal.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Inner decorative ring
      ctx.strokeStyle = 'hsla(160, 84%, 60%, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(level.goal.x, level.goal.y, level.goal.radius * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      // "GOAL" label
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

      // Progress indicator when ball is in goal
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
        
        // Percentage text when filling
        ctx.save();
        ctx.font = 'bold 12px "Source Sans Pro", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'hsl(160, 90%, 80%)';
        ctx.fillText(`${Math.round(progress * 100)}%`, level.goal.x, level.goal.y + level.goal.radius * 0.4);
        ctx.restore();
      }

      // Draw hazards
      for (const hazard of level.hazards) {
        const hazardGlow = ctx.createRadialGradient(
          hazard.x, hazard.y, 0,
          hazard.x, hazard.y, hazard.radius * 2
        );
        hazardGlow.addColorStop(0, 'hsla(0, 72%, 50%, 0.4)');
        hazardGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = hazardGlow;
        ctx.beginPath();
        ctx.arc(hazard.x, hazard.y, hazard.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        const holeGradient = ctx.createRadialGradient(
          hazard.x, hazard.y, 0,
          hazard.x, hazard.y, hazard.radius
        );
        holeGradient.addColorStop(0, 'hsl(0, 0%, 0%)');
        holeGradient.addColorStop(0.7, 'hsl(0, 0%, 5%)');
        holeGradient.addColorStop(1, 'hsl(0, 72%, 30%)');
        ctx.fillStyle = holeGradient;
        ctx.beginPath();
        ctx.arc(hazard.x, hazard.y, hazard.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw whirlpools
      if (level.whirlpools) {
        for (const whirl of level.whirlpools) {
          const gradient = ctx.createRadialGradient(whirl.x, whirl.y, 0, whirl.x, whirl.y, whirl.radius);
          gradient.addColorStop(0, 'hsla(210, 80%, 40%, 0.4)');
          gradient.addColorStop(0.6, 'hsla(200, 70%, 50%, 0.15)');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(whirl.x, whirl.y, whirl.radius, 0, Math.PI * 2);
          ctx.fill();
          
          const dir = whirl.clockwise ? 1 : -1;
          for (let i = 0; i < 4; i++) {
            const baseAngle = (i / 4) * Math.PI * 2 + currentTime * 0.004 * dir;
            ctx.strokeStyle = `hsla(200, 90%, 70%, 0.4)`;
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
        }
      }

      // Draw jellyfish
      if (level.jellyfish) {
        for (const jelly of level.jellyfish) {
          const pos = getJellyfishPosition(jelly, currentTime);
          const pulse = 1 + Math.sin(currentTime * 0.006 + jelly.id) * 0.15;
          
          const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, jelly.radius * 2);
          glow.addColorStop(0, 'hsla(280, 70%, 60%, 0.3)');
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, jelly.radius * 2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.save();
          ctx.translate(pos.x, pos.y);
          const bodyGrad = ctx.createRadialGradient(0, -jelly.radius * 0.2, 0, 0, 0, jelly.radius);
          bodyGrad.addColorStop(0, 'hsla(290, 80%, 75%, 0.9)');
          bodyGrad.addColorStop(1, 'hsla(270, 60%, 40%, 0.5)');
          ctx.fillStyle = bodyGrad;
          ctx.beginPath();
          ctx.arc(0, 0, jelly.radius * pulse, Math.PI, 0);
          ctx.quadraticCurveTo(jelly.radius * pulse * 0.8, jelly.radius * 0.4, 0, jelly.radius * 0.5);
          ctx.quadraticCurveTo(-jelly.radius * pulse * 0.8, jelly.radius * 0.4, -jelly.radius * pulse, 0);
          ctx.fill();
          
          // Tentacles
          ctx.strokeStyle = 'hsla(290, 70%, 65%, 0.6)';
          ctx.lineWidth = 1.5;
          for (let i = 0; i < 5; i++) {
            const tx = (i - 2) * (jelly.radius * 0.35);
            ctx.beginPath();
            ctx.moveTo(tx, jelly.radius * 0.3);
            const wave = Math.sin(currentTime * 0.008 + i * 0.7) * 4;
            ctx.quadraticCurveTo(tx + wave, jelly.radius * 0.3 + jelly.radius * 0.6, tx + wave * 0.5, jelly.radius * 1.5);
            ctx.stroke();
          }
          ctx.restore();
        }
      }

      // Draw sea mines
      if (level.seaMines) {
        for (const mine of level.seaMines) {
          if (state.mineExplosions[mine.id] && currentTime < state.mineExplosions[mine.id]) continue;
          
          const bob = Math.sin(currentTime * 0.003 + mine.id) * 2;
          const bodyGrad = ctx.createRadialGradient(mine.x - 2, mine.y + bob - 2, 0, mine.x, mine.y + bob, mine.radius);
          bodyGrad.addColorStop(0, 'hsl(0, 0%, 35%)');
          bodyGrad.addColorStop(1, 'hsl(0, 0%, 10%)');
          ctx.fillStyle = bodyGrad;
          ctx.beginPath();
          ctx.arc(mine.x, mine.y + bob, mine.radius, 0, Math.PI * 2);
          ctx.fill();
          
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const ex = mine.x + Math.cos(angle) * (mine.radius + 5);
            const ey = mine.y + bob + Math.sin(angle) * (mine.radius + 5);
            ctx.fillStyle = 'hsl(0, 70%, 45%)';
            ctx.beginPath();
            ctx.arc(ex, ey, 2, 0, Math.PI * 2);
            ctx.fill();
          }
          
          if (Math.sin(currentTime * 0.01) > 0) {
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

      // Draw tidal wave effects
      if (level.tidalWaves) {
        for (const wave of level.tidalWaves) {
          const isActive = isTidalWaveActive(wave, currentTime);
          if (isActive) {
            const cycleTime = currentTime % wave.interval;
            const progress = (cycleTime - wave.warningTime) / wave.duration;
            const intensity = Math.sin(progress * Math.PI);
            const alpha = intensity * 0.15;
            ctx.fillStyle = `hsla(200, 80%, 60%, ${alpha})`;
            ctx.fillRect(0, 0, 600, 600);
          }
          const isWarning = getTidalWaveWarning(wave, currentTime);
          if (isWarning && Math.sin(currentTime * 0.015) > 0) {
            ctx.fillStyle = 'hsla(45, 100%, 60%, 0.3)';
            ctx.font = 'bold 16px sans-serif';
            ctx.textAlign = 'center';
            const arrow = wave.direction === 'left' ? '⬅' : wave.direction === 'right' ? '➡' : wave.direction === 'up' ? '⬆' : '⬇';
            ctx.fillText(`⚠ ${arrow}`, 300, 20);
          }
        }
      }

      // ====== SKY FORTRESS RENDERING ======

      // Draw cloud platforms
      if (level.cloudPlatforms) {
        for (const platform of level.cloudPlatforms) {
          const opacity = getCloudPlatformOpacity(platform, currentTime);
          const isSolid = isCloudPlatformSolid(platform, currentTime);
          
          // Cloud body
          const grad = ctx.createLinearGradient(platform.x, platform.y, platform.x, platform.y + platform.height);
          grad.addColorStop(0, `hsla(210, 60%, 85%, ${opacity * 0.7})`);
          grad.addColorStop(0.5, `hsla(200, 50%, 95%, ${opacity * 0.8})`);
          grad.addColorStop(1, `hsla(210, 60%, 80%, ${opacity * 0.5})`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          // Rounded cloud shape
          const r = Math.min(platform.height / 2, 10);
          ctx.roundRect(platform.x, platform.y, platform.width, platform.height, r);
          ctx.fill();
          
          // Border
          ctx.strokeStyle = `hsla(200, 70%, 70%, ${opacity * 0.6})`;
          ctx.lineWidth = isSolid ? 2 : 1;
          ctx.setLineDash(isSolid ? [] : [4, 4]);
          ctx.beginPath();
          ctx.roundRect(platform.x, platform.y, platform.width, platform.height, r);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Wispy cloud particles
          if (opacity > 0.3) {
            for (let i = 0; i < 3; i++) {
              const cx = platform.x + platform.width * (0.2 + i * 0.3) + Math.sin(currentTime * 0.002 + i) * 5;
              const cy = platform.y - 3 + Math.sin(currentTime * 0.003 + i * 2) * 2;
              ctx.fillStyle = `hsla(200, 50%, 95%, ${opacity * 0.4})`;
              ctx.beginPath();
              ctx.arc(cx, cy, 6 + i * 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw rotating gears
      if (level.rotatingGears) {
        for (const gear of level.rotatingGears) {
          const angle = (currentTime * 0.001 * gear.speed * (gear.clockwise ? 1 : -1)) % (Math.PI * 2);
          
          ctx.save();
          ctx.translate(gear.x, gear.y);
          ctx.rotate(angle);
          
          // Gear body
          const gearGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, gear.radius);
          gearGrad.addColorStop(0, 'hsl(35, 50%, 50%)');
          gearGrad.addColorStop(0.7, 'hsl(30, 40%, 38%)');
          gearGrad.addColorStop(1, 'hsl(25, 35%, 30%)');
          ctx.fillStyle = gearGrad;
          ctx.beginPath();
          ctx.arc(0, 0, gear.radius * 0.85, 0, Math.PI * 2);
          ctx.fill();
          
          // Teeth
          const toothAngle = (Math.PI * 2) / gear.teeth;
          const toothDepth = gear.radius * 0.2;
          ctx.fillStyle = 'hsl(30, 45%, 42%)';
          for (let i = 0; i < gear.teeth; i++) {
            const a = i * toothAngle;
            const innerR = gear.radius * 0.85;
            const outerR = gear.radius;
            const halfTooth = toothAngle * 0.3;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a - halfTooth) * innerR, Math.sin(a - halfTooth) * innerR);
            ctx.lineTo(Math.cos(a - halfTooth * 0.7) * outerR, Math.sin(a - halfTooth * 0.7) * outerR);
            ctx.lineTo(Math.cos(a + halfTooth * 0.7) * outerR, Math.sin(a + halfTooth * 0.7) * outerR);
            ctx.lineTo(Math.cos(a + halfTooth) * innerR, Math.sin(a + halfTooth) * innerR);
            ctx.fill();
          }
          
          // Center hole
          ctx.fillStyle = 'hsl(220, 18%, 12%)';
          ctx.beginPath();
          ctx.arc(0, 0, gear.radius * 0.15, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'hsl(30, 50%, 55%)';
          ctx.lineWidth = 2;
          ctx.stroke();
          
          ctx.restore();
        }
      }

      // Draw lightning zones
      if (level.lightningZones) {
        for (const zone of level.lightningZones) {
          const lState = getLightningState(zone, currentTime);
          
          if (lState === 'warning') {
            // Flashing warning circle
            const flash = Math.sin(currentTime * 0.02) > 0;
            ctx.strokeStyle = flash ? 'hsla(50, 100%, 60%, 0.8)' : 'hsla(50, 100%, 60%, 0.3)';
            ctx.lineWidth = 3;
            ctx.setLineDash([6, 4]);
            ctx.beginPath();
            ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Warning icon
            if (flash) {
              ctx.fillStyle = 'hsla(50, 100%, 60%, 0.7)';
              ctx.font = 'bold 16px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('⚡', zone.x, zone.y);
            }
          } else if (lState === 'strike') {
            // Active lightning strike - bright flash
            const gradient = ctx.createRadialGradient(zone.x, zone.y, 0, zone.x, zone.y, zone.radius);
            gradient.addColorStop(0, 'hsla(50, 100%, 90%, 0.9)');
            gradient.addColorStop(0.3, 'hsla(45, 100%, 70%, 0.6)');
            gradient.addColorStop(0.7, 'hsla(40, 90%, 50%, 0.3)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Lightning bolts
            ctx.strokeStyle = 'hsla(55, 100%, 85%, 0.9)';
            ctx.lineWidth = 3;
            ctx.shadowColor = 'hsl(50, 100%, 70%)';
            ctx.shadowBlur = 15;
            for (let i = 0; i < 3; i++) {
              const boltAngle = (i / 3) * Math.PI * 2 + currentTime * 0.01;
              ctx.beginPath();
              ctx.moveTo(zone.x, zone.y);
              let bx = zone.x, by = zone.y;
              for (let j = 0; j < 4; j++) {
                bx += Math.cos(boltAngle + (Math.random() - 0.5)) * zone.radius * 0.3;
                by += Math.sin(boltAngle + (Math.random() - 0.5)) * zone.radius * 0.3;
                ctx.lineTo(bx, by);
              }
              ctx.stroke();
            }
            ctx.shadowBlur = 0;
          } else {
            // Idle - faint circle
            ctx.strokeStyle = 'hsla(50, 50%, 40%, 0.2)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 8]);
            ctx.beginPath();
            ctx.arc(zone.x, zone.y, zone.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Draw updrafts
      if (level.updrafts) {
        for (const updraft of level.updrafts) {
          // Updraft column background
          const grad = ctx.createLinearGradient(updraft.x, updraft.y + updraft.height, updraft.x, updraft.y);
          grad.addColorStop(0, 'hsla(180, 70%, 60%, 0.15)');
          grad.addColorStop(0.5, 'hsla(180, 80%, 70%, 0.25)');
          grad.addColorStop(1, 'hsla(180, 70%, 60%, 0.1)');
          ctx.fillStyle = grad;
          ctx.fillRect(updraft.x, updraft.y, updraft.width, updraft.height);
          
          // Rising particles
          const particleCount = 6;
          for (let i = 0; i < particleCount; i++) {
            const phase = ((currentTime * 0.003 + i * 0.15) % 1);
            const px = updraft.x + updraft.width * (0.2 + (i % 3) * 0.3) + Math.sin(currentTime * 0.005 + i) * 5;
            const py = updraft.y + updraft.height * (1 - phase);
            const alpha = Math.sin(phase * Math.PI) * 0.6;
            ctx.fillStyle = `hsla(180, 80%, 75%, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Up arrows
          ctx.strokeStyle = 'hsla(180, 80%, 70%, 0.4)';
          ctx.lineWidth = 2;
          const arrowY = updraft.y + updraft.height * ((currentTime * 0.002) % 1);
          const arrowX = updraft.x + updraft.width / 2;
          ctx.beginPath();
          ctx.moveTo(arrowX - 8, arrowY + 6);
          ctx.lineTo(arrowX, arrowY - 6);
          ctx.lineTo(arrowX + 8, arrowY + 6);
          ctx.stroke();
          
          // Border
          ctx.strokeStyle = 'hsla(180, 60%, 55%, 0.3)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.strokeRect(updraft.x, updraft.y, updraft.width, updraft.height);
          ctx.setLineDash([]);
        }
      }

      // Draw crumbling tiles
      if (level.crumblingTiles) {
        for (const tile of level.crumblingTiles) {
          const crumbled = isTileCrumbled(tile.id, state.crumbledTiles, currentTime, tile);
          const crumbleStart = state.crumbledTiles[tile.id];
          const isShaking = crumbleStart !== undefined && !crumbled && (currentTime - crumbleStart) < tile.crumbleDelay;
          
          if (crumbled) {
            // Draw hole/gap
            ctx.fillStyle = 'hsla(0, 0%, 5%, 0.6)';
            ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
            ctx.strokeStyle = 'hsla(0, 60%, 40%, 0.4)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.strokeRect(tile.x, tile.y, tile.width, tile.height);
            ctx.setLineDash([]);
          } else {
            // Draw tile (with shake if crumbling)
            const shakeX = isShaking ? (Math.random() - 0.5) * 4 : 0;
            const shakeY = isShaking ? (Math.random() - 0.5) * 4 : 0;
            
            const tileGrad = ctx.createLinearGradient(tile.x, tile.y, tile.x + tile.width, tile.y + tile.height);
            tileGrad.addColorStop(0, isShaking ? 'hsl(30, 50%, 45%)' : 'hsl(220, 20%, 40%)');
            tileGrad.addColorStop(1, isShaking ? 'hsl(20, 40%, 35%)' : 'hsl(220, 15%, 30%)');
            ctx.fillStyle = tileGrad;
            ctx.fillRect(tile.x + shakeX, tile.y + shakeY, tile.width, tile.height);
            
            // Crack lines when shaking
            if (isShaking) {
              const progress = (currentTime - crumbleStart!) / tile.crumbleDelay;
              ctx.strokeStyle = `hsla(0, 0%, 10%, ${progress * 0.8})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(tile.x + tile.width * 0.2, tile.y);
              ctx.lineTo(tile.x + tile.width * 0.5, tile.y + tile.height * 0.5);
              ctx.lineTo(tile.x + tile.width * 0.8, tile.y + tile.height);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(tile.x + tile.width * 0.7, tile.y);
              ctx.lineTo(tile.x + tile.width * 0.4, tile.y + tile.height * 0.6);
              ctx.stroke();
            }
            
            ctx.strokeStyle = 'hsla(220, 20%, 50%, 0.4)';
            ctx.lineWidth = 1;
            ctx.strokeRect(tile.x + shakeX, tile.y + shakeY, tile.width, tile.height);
          }
        }
      }

      // Draw ziplines
      if (level.ziplines) {
        for (const zipline of level.ziplines) {
          // Cable
          ctx.strokeStyle = 'hsla(45, 80%, 55%, 0.8)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(zipline.x1, zipline.y1);
          ctx.lineTo(zipline.x2, zipline.y2);
          ctx.stroke();
          
          // Glow
          ctx.strokeStyle = 'hsla(45, 90%, 65%, 0.3)';
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.moveTo(zipline.x1, zipline.y1);
          ctx.lineTo(zipline.x2, zipline.y2);
          ctx.stroke();
          
          // Anchor points
          ctx.fillStyle = 'hsl(35, 60%, 45%)';
          ctx.beginPath();
          ctx.arc(zipline.x1, zipline.y1, 5, 0, Math.PI * 2);
          ctx.arc(zipline.x2, zipline.y2, 5, 0, Math.PI * 2);
          ctx.fill();
          
          // Direction arrow
          if (zipline.oneWay) {
            const mx = (zipline.x1 + zipline.x2) / 2;
            const my = (zipline.y1 + zipline.y2) / 2;
            const dx = zipline.x2 - zipline.x1;
            const dy = zipline.y2 - zipline.y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = dx / len;
            const ny = dy / len;
            ctx.fillStyle = 'hsla(45, 90%, 70%, 0.7)';
            ctx.beginPath();
            ctx.moveTo(mx + nx * 8, my + ny * 8);
            ctx.lineTo(mx - nx * 4 - ny * 5, my - ny * 4 + nx * 5);
            ctx.lineTo(mx - nx * 4 + ny * 5, my - ny * 4 - nx * 5);
            ctx.fill();
          }
        }
      }

      // Draw wind gust indicators
      if (level.windGusts) {
        for (const gust of level.windGusts) {
          const isActive = isWindGustActive(gust, currentTime);
          const isWarning = getWindGustWarning(gust, currentTime);
          
          if (isActive) {
            // Full-screen wind effect
            const cycleTime = currentTime % gust.interval;
            const progress = (cycleTime - gust.warningTime) / gust.duration;
            const intensity = Math.sin(progress * Math.PI);
            const alpha = intensity * 0.12;
            
            const isH = gust.direction === 'left' || gust.direction === 'right';
            if (isH) {
              const grad = ctx.createLinearGradient(
                gust.direction === 'right' ? 0 : 600, 0,
                gust.direction === 'right' ? 600 : 0, 0
              );
              grad.addColorStop(0, `hsla(200, 60%, 70%, ${alpha})`);
              grad.addColorStop(1, 'transparent');
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, 600, 600);
            } else {
              const grad = ctx.createLinearGradient(
                0, gust.direction === 'down' ? 0 : 600,
                0, gust.direction === 'down' ? 600 : 0
              );
              grad.addColorStop(0, `hsla(200, 60%, 70%, ${alpha})`);
              grad.addColorStop(1, 'transparent');
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, 600, 600);
            }
            
            // Wind streaks
            ctx.strokeStyle = `hsla(200, 70%, 80%, ${intensity * 0.3})`;
            ctx.lineWidth = 1;
            for (let i = 0; i < 8; i++) {
              const lineProgress = ((currentTime * 0.005 + i * 0.12) % 1);
              ctx.beginPath();
              if (isH) {
                const x = gust.direction === 'right' ? lineProgress * 600 : 600 - lineProgress * 600;
                ctx.moveTo(x, i * 75 + 30);
                ctx.lineTo(x + (gust.direction === 'right' ? -40 : 40), i * 75 + 30 + Math.sin(i) * 5);
              } else {
                const y = gust.direction === 'down' ? lineProgress * 600 : 600 - lineProgress * 600;
                ctx.moveTo(i * 75 + 30, y);
                ctx.lineTo(i * 75 + 30 + Math.sin(i) * 5, y + (gust.direction === 'down' ? -40 : 40));
              }
              ctx.stroke();
            }
          } else if (isWarning && Math.sin(currentTime * 0.015) > 0) {
            ctx.fillStyle = 'hsla(200, 70%, 60%, 0.3)';
            ctx.save();
            ctx.translate(300, 15);
            drawWindIcon(ctx, 14, 'hsla(200, 70%, 60%, 0.5)');
            ctx.translate(10, 0);
            drawArrowIcon(ctx, 10, gust.direction, 'hsla(200, 70%, 60%, 0.5)');
            ctx.restore();
          }
        }
      }

      // Draw piston walls (extend walls based on piston timing)
      if (level.walls) {
        for (let i = 0; i < level.walls.length; i++) {
          const wall = level.walls[i];
          if ((wall as any).pistonExtend) {
            const extension = getPistonWallExtension(wall, currentTime);
            // Re-draw this wall with extended size
            const extendedWall = { ...wall };
            if (wall.width > wall.height) {
              extendedWall.width = wall.width * (0.3 + extension * 0.7);
            } else {
              extendedWall.height = wall.height * (0.3 + extension * 0.7);
            }
            
            ctx.fillStyle = `hsl(${20 + extension * 20}, 50%, ${35 + extension * 15}%)`;
            ctx.fillRect(extendedWall.x, extendedWall.y, extendedWall.width, extendedWall.height);
            ctx.shadowColor = 'hsl(30, 60%, 50%)';
            ctx.shadowBlur = extension * 10;
            ctx.fillRect(extendedWall.x, extendedWall.y, extendedWall.width, extendedWall.height);
            ctx.shadowBlur = 0;
          }
        }
      }

      // ====== FROZEN FORTRESS RENDERING ======

      // Draw thawing ice blocks
      if (level.thawingIces) {
        for (let idx = 0; idx < level.thawingIces.length; idx++) {
          const ice = level.thawingIces[idx];
          const isMelted = isThawingIceMelted(idx, state.thawedIces, currentTime, ice.thawTime, ice.respawnTime || 0);
          if (isMelted) continue;

          const isThawing = state.thawedIces[idx] !== undefined;
          const thawProgress = isThawing ? Math.min(1, (currentTime - state.thawedIces[idx]) / ice.thawTime) : 0;

          const grad = ctx.createLinearGradient(ice.x, ice.y, ice.x + ice.width, ice.y + ice.height);
          grad.addColorStop(0, `hsla(195, 80%, 75%, ${0.8 - thawProgress * 0.5})`);
          grad.addColorStop(0.5, `hsla(200, 70%, 85%, ${0.9 - thawProgress * 0.5})`);
          grad.addColorStop(1, `hsla(195, 80%, 75%, ${0.8 - thawProgress * 0.5})`);
          ctx.fillStyle = grad;
          ctx.fillRect(ice.x, ice.y, ice.width, ice.height);

          // Crack lines when thawing
          if (isThawing && thawProgress > 0.3) {
            ctx.strokeStyle = `hsla(200, 50%, 50%, ${thawProgress * 0.6})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(ice.x + ice.width * 0.2, ice.y);
            ctx.lineTo(ice.x + ice.width * 0.5, ice.y + ice.height * 0.5);
            ctx.lineTo(ice.x + ice.width * 0.8, ice.y + ice.height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ice.x + ice.width * 0.7, ice.y);
            ctx.lineTo(ice.x + ice.width * 0.3, ice.y + ice.height);
            ctx.stroke();
          }

          // Ice border
          ctx.strokeStyle = `hsla(200, 90%, 80%, ${0.7 - thawProgress * 0.4})`;
          ctx.lineWidth = 2;
          ctx.strokeRect(ice.x, ice.y, ice.width, ice.height);

          // Drip particles when thawing
          if (isThawing && thawProgress > 0.5) {
            for (let d = 0; d < 3; d++) {
              const dropX = ice.x + (d + 0.5) * ice.width / 3;
              const dropY = ice.y + ice.height + Math.sin(currentTime * 0.01 + d) * 4;
              ctx.fillStyle = `hsla(200, 80%, 70%, ${0.5 * (1 - thawProgress)})`;
              ctx.beginPath();
              ctx.arc(dropX, dropY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw snowdrifts
      if (level.snowdrifts) {
        for (const drift of level.snowdrifts) {
          const grad = ctx.createLinearGradient(drift.x, drift.y, drift.x, drift.y + drift.height);
          grad.addColorStop(0, 'hsla(210, 30%, 95%, 0.5)');
          grad.addColorStop(0.5, 'hsla(210, 20%, 90%, 0.4)');
          grad.addColorStop(1, 'hsla(210, 30%, 85%, 0.3)');
          ctx.fillStyle = grad;
          ctx.fillRect(drift.x, drift.y, drift.width, drift.height);

          // Snow particles inside
          for (let s = 0; s < 5; s++) {
            const sx = drift.x + (s + 0.5) * drift.width / 5 + Math.sin(currentTime * 0.002 + s) * 3;
            const sy = drift.y + drift.height * 0.5 + Math.cos(currentTime * 0.003 + s * 2) * drift.height * 0.3;
            ctx.fillStyle = 'hsla(0, 0%, 100%, 0.6)';
            ctx.beginPath();
            ctx.arc(sx, sy, 2 + s % 2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.strokeStyle = 'hsla(210, 40%, 80%, 0.4)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.strokeRect(drift.x, drift.y, drift.width, drift.height);
          ctx.setLineDash([]);
        }
      }

      // Draw frozen geysers
      if (level.frozenGeysers) {
        for (const geyser of level.frozenGeysers) {
          const isActive = isFrozenGeyserActive(geyser, currentTime);
          const isWarning = getFrozenGeyserWarning(geyser, currentTime);

          // Base vent
          const ventGlow = ctx.createRadialGradient(geyser.x, geyser.y, 0, geyser.x, geyser.y, geyser.radius * 1.5);
          ventGlow.addColorStop(0, isActive ? 'hsla(190, 90%, 70%, 0.7)' : 'hsla(200, 50%, 50%, 0.3)');
          ventGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = ventGlow;
          ctx.beginPath();
          ctx.arc(geyser.x, geyser.y, geyser.radius * 1.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = isActive ? 'hsl(190, 80%, 60%)' : 'hsl(200, 40%, 40%)';
          ctx.beginPath();
          ctx.arc(geyser.x, geyser.y, geyser.radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = isActive ? 'hsl(190, 90%, 75%)' : 'hsl(200, 50%, 50%)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Warning pulse
          if (isWarning) {
            const flash = Math.sin(currentTime * 0.02) > 0;
            if (flash) {
              ctx.strokeStyle = 'hsla(190, 90%, 70%, 0.5)';
              ctx.lineWidth = 2;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.arc(geyser.x, geyser.y, geyser.radius * 2, 0, Math.PI * 2);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          }

          // Active ice particles
          if (isActive) {
            for (let p = 0; p < 6; p++) {
              const angle = (p / 6) * Math.PI * 2 + currentTime * 0.008;
              const progress = ((currentTime * 0.003 + p * 0.15) % 1);
              const px = geyser.x + Math.sin(angle) * geyser.radius * 0.5;
              const py = geyser.y - progress * geyser.radius * 4;
              const alpha = (1 - progress) * 0.7;
              if (py > geyser.y - geyser.radius * 4) {
                ctx.fillStyle = `hsla(190, 90%, 80%, ${alpha})`;
                ctx.beginPath();
                ctx.arc(px, py, 3 - progress * 2, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }

      // Draw ice bridges
      if (level.iceBridges) {
        for (let idx = 0; idx < level.iceBridges.length; idx++) {
          const bridge = level.iceBridges[idx];
          const isBroken = isIceBridgeBroken(idx, state.iceBridgeStates, currentTime, bridge.crackTime, bridge.breakTime, bridge.respawnTime || 0);
          if (isBroken) continue;

          const isCracking = isIceBridgeCracking(idx, state.iceBridgeStates, currentTime, bridge.crackTime);

          const grad = ctx.createLinearGradient(bridge.x, bridge.y, bridge.x + bridge.width, bridge.y + bridge.height);
          grad.addColorStop(0, isCracking ? 'hsla(200, 60%, 75%, 0.6)' : 'hsla(200, 70%, 80%, 0.8)');
          grad.addColorStop(1, isCracking ? 'hsla(195, 50%, 65%, 0.5)' : 'hsla(195, 60%, 75%, 0.7)');
          ctx.fillStyle = grad;
          ctx.fillRect(bridge.x, bridge.y, bridge.width, bridge.height);

          // Crack lines
          if (isCracking) {
            const shakeX = (Math.random() - 0.5) * 2;
            const shakeY = (Math.random() - 0.5) * 2;
            ctx.strokeStyle = 'hsla(200, 30%, 40%, 0.7)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(bridge.x + bridge.width * 0.15 + shakeX, bridge.y + shakeY);
            ctx.lineTo(bridge.x + bridge.width * 0.45, bridge.y + bridge.height * 0.5);
            ctx.lineTo(bridge.x + bridge.width * 0.85, bridge.y + bridge.height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(bridge.x + bridge.width * 0.6, bridge.y);
            ctx.lineTo(bridge.x + bridge.width * 0.35, bridge.y + bridge.height * 0.7);
            ctx.stroke();
          }

          ctx.strokeStyle = isCracking ? 'hsla(200, 50%, 60%, 0.5)' : 'hsla(200, 80%, 85%, 0.6)';
          ctx.lineWidth = 2;
          ctx.strokeRect(bridge.x, bridge.y, bridge.width, bridge.height);
        }
      }

      // Draw blizzard overlay
      if (level.blizzard && state.blizzardOverlayActive) {
        const blizzard = level.blizzard;
        const cycleTime = currentTime % blizzard.interval;
        const progress = (cycleTime - blizzard.warningTime) / blizzard.duration;
        const intensity = Math.sin(progress * Math.PI);
        const alpha = intensity * 0.2;

        // White snow overlay
        ctx.fillStyle = `hsla(210, 30%, 95%, ${alpha})`;
        ctx.fillRect(0, 0, 600, 600);

        // Snow particles
        ctx.fillStyle = `hsla(0, 0%, 100%, ${intensity * 0.6})`;
        for (let s = 0; s < 20; s++) {
          const snowX = ((currentTime * 0.3 + s * 71) % 620) - 10;
          const snowY = ((currentTime * 0.2 + s * 37) % 620) - 10;
          const snowSize = 2 + (s % 3);
          ctx.beginPath();
          ctx.arc(snowX, snowY, snowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Wind streaks
        ctx.strokeStyle = `hsla(200, 50%, 80%, ${intensity * 0.3})`;
        ctx.lineWidth = 1;
        const isH = blizzard.direction === 'left' || blizzard.direction === 'right';
        for (let i = 0; i < 10; i++) {
          const lineProgress = ((currentTime * 0.005 + i * 0.1) % 1);
          ctx.beginPath();
          if (isH) {
            const x = blizzard.direction === 'right' ? lineProgress * 600 : 600 - lineProgress * 600;
            ctx.moveTo(x, i * 60 + 20);
            ctx.lineTo(x + (blizzard.direction === 'right' ? -30 : 30), i * 60 + 20 + Math.sin(i) * 3);
          } else {
            const y = blizzard.direction === 'down' ? lineProgress * 600 : 600 - lineProgress * 600;
            ctx.moveTo(i * 60 + 20, y);
            ctx.lineTo(i * 60 + 20 + Math.sin(i) * 3, y + (blizzard.direction === 'down' ? -30 : 30));
          }
          ctx.stroke();
        }
      }

      // Draw blizzard warning
      if (level.blizzard && getBlizzardWarning(level.blizzard, currentTime) && Math.sin(currentTime * 0.015) > 0) {
        ctx.fillStyle = 'hsla(200, 70%, 80%, 0.4)';
        ctx.save();
        ctx.translate(300, 15);
        drawSnowflakeIcon(ctx, 14, 'hsla(200, 70%, 80%, 0.6)');
        ctx.translate(10, 0);
        drawArrowIcon(ctx, 10, level.blizzard.direction, 'hsla(200, 70%, 80%, 0.6)');
        ctx.restore();
      }

      // Draw icicle drops
      if (level.icicleDrops) {
        for (const drop of level.icicleDrops) {
          const isActive = isIcicleDropActive(drop, currentTime);
          const isWarning = getIcicleDropWarning(drop, currentTime);

          if (isWarning) {
            // Warning shadow on ground
            const flash = Math.sin(currentTime * 0.02) > 0;
            ctx.fillStyle = flash ? 'hsla(200, 60%, 70%, 0.4)' : 'hsla(200, 60%, 70%, 0.15)';
            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.radius * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }

          if (isActive) {
            // Falling icicle
            ctx.fillStyle = 'hsla(200, 80%, 80%, 0.9)';
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y - drop.radius);
            ctx.lineTo(drop.x + drop.radius * 0.5, drop.y + drop.radius * 0.5);
            ctx.lineTo(drop.x - drop.radius * 0.5, drop.y + drop.radius * 0.5);
            ctx.closePath();
            ctx.fill();

            // Impact glow
            const glow = ctx.createRadialGradient(drop.x, drop.y, 0, drop.x, drop.y, drop.radius * 2);
            glow.addColorStop(0, 'hsla(200, 90%, 85%, 0.5)');
            glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(drop.x, drop.y, drop.radius * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw avalanche boulders
      if (level.avalanches && state.avalancheBoulders.length > 0) {
        for (const boulder of state.avalancheBoulders) {
          const avalanche = level.avalanches.find(a => a.id === boulder.id);
          if (!avalanche) continue;

          const pos = getAvalancheBoulderPosition(avalanche, boulder.progress);

          // Boulder body
          const boulderGrad = ctx.createRadialGradient(pos.x - 2, pos.y - 2, 0, pos.x, pos.y, avalanche.radius);
          boulderGrad.addColorStop(0, 'hsl(210, 20%, 70%)');
          boulderGrad.addColorStop(0.7, 'hsl(210, 15%, 50%)');
          boulderGrad.addColorStop(1, 'hsl(210, 10%, 35%)');
          ctx.fillStyle = boulderGrad;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, avalanche.radius, 0, Math.PI * 2);
          ctx.fill();

          // Snow dust trail
          ctx.fillStyle = 'hsla(0, 0%, 100%, 0.3)';
          for (let t = 0; t < 3; t++) {
            const trailX = pos.x - (pos.x - avalanche.x1) * 0.1 * (t + 1) + (Math.random() - 0.5) * 5;
            const trailY = pos.y - (pos.y - avalanche.y1) * 0.1 * (t + 1) + (Math.random() - 0.5) * 5;
            ctx.beginPath();
            ctx.arc(trailX, trailY, avalanche.radius * (0.5 - t * 0.1), 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.strokeStyle = 'hsl(210, 10%, 40%)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, avalanche.radius, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw avalanche warning indicators
        for (const avalanche of level.avalanches) {
          if (getAvalancheWarning(avalanche, currentTime)) {
            const flash = Math.sin(currentTime * 0.02) > 0;
            if (flash) {
              ctx.save();
              ctx.translate(avalanche.x1, avalanche.y1 - 15);
              drawWarningIcon(ctx, 12, 'hsla(45, 100%, 60%, 0.7)');
              ctx.translate(10, 0);
              drawRockIcon(ctx, 10, 'hsla(45, 100%, 60%, 0.5)');
              ctx.restore();
            }
          }
        }
      }

      // Draw frost rails
      if (level.frostRails) {
        for (const rail of level.frostRails) {
          // Rail cable
          ctx.strokeStyle = 'hsla(190, 80%, 70%, 0.8)';
          ctx.lineWidth = rail.railWidth || 4;
          ctx.beginPath();
          ctx.moveTo(rail.x1, rail.y1);
          ctx.lineTo(rail.x2, rail.y2);
          ctx.stroke();

          // Glow
          ctx.strokeStyle = 'hsla(190, 90%, 80%, 0.3)';
          ctx.lineWidth = (rail.railWidth || 4) + 6;
          ctx.beginPath();
          ctx.moveTo(rail.x1, rail.y1);
          ctx.lineTo(rail.x2, rail.y2);
          ctx.stroke();

          // Anchor points
          ctx.fillStyle = 'hsl(200, 60%, 60%)';
          ctx.beginPath();
          ctx.arc(rail.x1, rail.y1, 5, 0, Math.PI * 2);
          ctx.arc(rail.x2, rail.y2, 5, 0, Math.PI * 2);
          ctx.fill();

          // Ice sparkles along rail
          for (let sp = 0; sp < 5; sp++) {
            const t = ((currentTime * 0.001 + sp * 0.2) % 1);
            const sx = rail.x1 + (rail.x2 - rail.x1) * t;
            const sy = rail.y1 + (rail.y2 - rail.y1) * t;
            ctx.fillStyle = `hsla(190, 100%, 90%, ${0.5 + Math.sin(currentTime * 0.01 + sp) * 0.3})`;
            ctx.beginPath();
            ctx.arc(sx, sy, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw freeze debuff indicator on ball
      if (currentTime < state.frozenUntil) {
        for (const ball of state.balls) {
          const freezePulse = 1 + Math.sin(currentTime * 0.01) * 0.1;
          ctx.strokeStyle = 'hsla(190, 90%, 70%, 0.7)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius * 1.5 * freezePulse, 0, Math.PI * 2);
          ctx.stroke();

          // Ice crystals around ball
          for (let c = 0; c < 6; c++) {
            const angle = (c / 6) * Math.PI * 2 + currentTime * 0.003;
            const cx = ball.x + Math.cos(angle) * ball.radius * 1.3;
            const cy = ball.y + Math.sin(angle) * ball.radius * 1.3;
            ctx.fillStyle = 'hsla(190, 90%, 85%, 0.6)';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 3);
            ctx.lineTo(cx + 2, cy + 2);
            ctx.lineTo(cx - 2, cy + 2);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      // ====== DIMENSION NEXUS RENDERING ======

      // Draw Phase Shift zones
      if (level.phaseShifts) {
        for (const ps of level.phaseShifts) {
          const isOnCooldown = currentTime < state.phaseCooldownEnd;
          const isActive = state.phaseActive && currentTime < state.phaseEndTime;
          const shimmer = Math.sin(currentTime * 0.004) * 0.15 + 0.35;

          const psGrad = ctx.createLinearGradient(ps.x, ps.y, ps.x + ps.width, ps.y + ps.height);
          psGrad.addColorStop(0, `hsla(270, 70%, 60%, ${isActive ? 0.5 : shimmer * 0.4})`);
          psGrad.addColorStop(0.5, `hsla(290, 60%, 70%, ${isActive ? 0.6 : shimmer * 0.5})`);
          psGrad.addColorStop(1, `hsla(270, 70%, 60%, ${isActive ? 0.5 : shimmer * 0.4})`);
          ctx.fillStyle = psGrad;
          ctx.fillRect(ps.x, ps.y, ps.width, ps.height);

          ctx.strokeStyle = isActive ? 'hsla(280, 90%, 80%, 0.8)' : isOnCooldown ? 'hsla(0, 50%, 50%, 0.4)' : `hsla(280, 70%, 70%, ${shimmer})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([6, 4]);
          ctx.strokeRect(ps.x, ps.y, ps.width, ps.height);
          ctx.setLineDash([]);

          for (let p = 0; p < 4; p++) {
            const px = ps.x + ps.width * ((currentTime * 0.0005 + p * 0.25) % 1);
            const py = ps.y + ps.height * (0.3 + Math.sin(currentTime * 0.003 + p * 1.5) * 0.3);
            ctx.fillStyle = `hsla(280, 80%, 75%, ${isActive ? 0.8 : 0.4})`;
            ctx.beginPath();
            ctx.arc(px, py, 2 + Math.sin(currentTime * 0.005 + p) * 1, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = isActive ? 'hsla(280, 90%, 85%, 0.9)' : `hsla(280, 70%, 70%, ${shimmer + 0.1})`;
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(isActive ? 'PHASING' : isOnCooldown ? '⏳' : '◇ PHASE', ps.x + ps.width / 2, ps.y + ps.height / 2);
        }
      }

      // Draw Dimension Tear portals
      if (level.dimensionTears) {
        for (const tear of level.dimensionTears) {
          const pulse = 1 + Math.sin(currentTime * 0.005 + tear.id) * 0.2;

          const riftGlow = ctx.createRadialGradient(tear.x, tear.y, 0, tear.x, tear.y, tear.radius * 2.5 * pulse);
          riftGlow.addColorStop(0, 'hsla(280, 80%, 60%, 0.5)');
          riftGlow.addColorStop(0.4, 'hsla(310, 70%, 50%, 0.25)');
          riftGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = riftGlow;
          ctx.beginPath();
          ctx.arc(tear.x, tear.y, tear.radius * 2.5 * pulse, 0, Math.PI * 2);
          ctx.fill();

          ctx.save();
          ctx.translate(tear.x, tear.y);
          for (let ring = 0; ring < 3; ring++) {
            const ringAngle = currentTime * 0.003 * (ring % 2 === 0 ? 1 : -1) + ring * Math.PI / 3;
            ctx.save();
            ctx.rotate(ringAngle);
            ctx.strokeStyle = `hsla(${270 + ring * 25}, 80%, ${60 + ring * 5}%, ${0.6 - ring * 0.15})`;
            ctx.lineWidth = 1.5 - ring * 0.3;
            ctx.beginPath();
            ctx.ellipse(0, 0, tear.radius * (1 - ring * 0.2), tear.radius * (0.4 - ring * 0.08), 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
          ctx.restore();

          const voidGrad = ctx.createRadialGradient(tear.x, tear.y, 0, tear.x, tear.y, tear.radius * 0.6);
          voidGrad.addColorStop(0, 'hsla(280, 50%, 5%, 0.9)');
          voidGrad.addColorStop(0.7, 'hsla(290, 60%, 20%, 0.5)');
          voidGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = voidGrad;
          ctx.beginPath();
          ctx.arc(tear.x, tear.y, tear.radius * 0.6, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = tear.color || 'hsla(280, 80%, 65%, 0.8)';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = tear.color || 'hsl(280, 80%, 65%)';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(tear.x, tear.y, tear.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;

          ctx.fillStyle = 'hsla(280, 70%, 80%, 0.6)';
          ctx.font = 'bold 9px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const axisLabel = tear.flipAxis === 'x' ? '↔' : tear.flipAxis === 'y' ? '↕' : '⟲';
          ctx.fillText(axisLabel, tear.x, tear.y);
        }
      }

      // Draw Mirror Clone ghost ball
      if (level.mirrorClone && state.mirrorClonePos) {
        const clone = level.mirrorClone;
        const mp = state.mirrorClonePos;
        const ghostPulse = 0.4 + Math.sin(currentTime * 0.006) * 0.15;

        const ghostGlow = ctx.createRadialGradient(mp.x, mp.y, 0, mp.x, mp.y, clone.cloneRadius * 2.5);
        ghostGlow.addColorStop(0, `hsla(290, 70%, 60%, ${ghostPulse * 0.5})`);
        ghostGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = ghostGlow;
        ctx.beginPath();
        ctx.arc(mp.x, mp.y, clone.cloneRadius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        const ghostGrad = ctx.createRadialGradient(mp.x - clone.cloneRadius * 0.3, mp.y - clone.cloneRadius * 0.3, 0, mp.x, mp.y, clone.cloneRadius);
        ghostGrad.addColorStop(0, `hsla(290, 80%, 75%, ${ghostPulse})`);
        ghostGrad.addColorStop(0.7, `hsla(280, 60%, 55%, ${ghostPulse * 0.8})`);
        ghostGrad.addColorStop(1, `hsla(270, 50%, 40%, ${ghostPulse * 0.5})`);
        ctx.fillStyle = ghostGrad;
        ctx.beginPath();
        ctx.arc(mp.x, mp.y, clone.cloneRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `hsla(290, 80%, 70%, ${ghostPulse})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(mp.x, mp.y, clone.cloneRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        if (clone.isLethal) {
          ctx.fillStyle = `hsla(0, 80%, 60%, ${ghostPulse})`;
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('☠', mp.x, mp.y);
        }

        // Mirror axis line
        ctx.strokeStyle = 'hsla(290, 60%, 60%, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 8]);
        if (clone.axis === 'x') {
          ctx.beginPath();
          ctx.moveTo(0, clone.centerLine);
          ctx.lineTo(CANVAS_SIZE, clone.centerLine);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(clone.centerLine, 0);
          ctx.lineTo(clone.centerLine, CANVAS_SIZE);
          ctx.stroke();
        }
        ctx.setLineDash([]);
      }

      // Draw Gravity Flip zones
      if (level.gravityFlips) {
        for (const gf of level.gravityFlips) {
          const shimmer = 0.3 + Math.sin(currentTime * 0.003) * 0.1;

          const gfGrad = ctx.createLinearGradient(gf.x, gf.y, gf.flipDirection === 'horizontal' ? gf.x + gf.width : gf.x, gf.flipDirection === 'vertical' ? gf.y + gf.height : gf.y);
          gfGrad.addColorStop(0, `hsla(200, 70%, 55%, ${shimmer * 0.4})`);
          gfGrad.addColorStop(0.5, `hsla(220, 60%, 65%, ${shimmer * 0.5})`);
          gfGrad.addColorStop(1, `hsla(200, 70%, 55%, ${shimmer * 0.4})`);
          ctx.fillStyle = gfGrad;
          ctx.fillRect(gf.x, gf.y, gf.width, gf.height);

          ctx.fillStyle = `hsla(220, 80%, 75%, ${shimmer + 0.2})`;
          for (let a = 0; a < 3; a++) {
            const progress = ((currentTime * 0.002 + a / 3) % 1);
            ctx.save();
            if (gf.flipDirection === 'vertical') {
              ctx.translate(gf.x + gf.width / 2, gf.y + gf.height * progress);
              ctx.beginPath();
              ctx.moveTo(0, 5); ctx.lineTo(6, -3); ctx.lineTo(-6, -3);
              ctx.closePath();
            } else {
              ctx.translate(gf.x + gf.width * progress, gf.y + gf.height / 2);
              ctx.beginPath();
              ctx.moveTo(-5, 0); ctx.lineTo(3, 6); ctx.lineTo(3, -6);
              ctx.closePath();
            }
            ctx.fill();
            ctx.restore();
          }

          ctx.strokeStyle = `hsla(220, 70%, 65%, ${shimmer})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(gf.x, gf.y, gf.width, gf.height);
          ctx.setLineDash([]);
        }
      }

      // Draw Gravity Wells
      if (level.gravityWells) {
        for (const well of level.gravityWells) {
          const isPull = well.strength > 0;
          const pulse = 1 + Math.sin(currentTime * 0.004) * 0.15;
          const hue = isPull ? 260 : 30;

          for (let ring = 0; ring < 3; ring++) {
            const ringRadius = well.radius * (0.4 + ring * 0.3) * pulse;
            ctx.strokeStyle = `hsla(${hue}, 70%, 65%, ${0.3 - ring * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(well.x, well.y, ringRadius, 0, Math.PI * 2);
            ctx.stroke();
          }

          const wellGlow = ctx.createRadialGradient(well.x, well.y, 0, well.x, well.y, well.radius);
          wellGlow.addColorStop(0, `hsla(${hue}, 80%, 55%, 0.5)`);
          wellGlow.addColorStop(0.5, `hsla(${hue}, 60%, 45%, 0.2)`);
          wellGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = wellGlow;
          ctx.beginPath();
          ctx.arc(well.x, well.y, well.radius, 0, Math.PI * 2);
          ctx.fill();

          const orbGrad = ctx.createRadialGradient(well.x, well.y, 0, well.x, well.y, 8);
          orbGrad.addColorStop(0, `hsl(${hue}, 90%, 75%)`);
          orbGrad.addColorStop(1, `hsl(${hue}, 70%, 40%)`);
          ctx.fillStyle = orbGrad;
          ctx.beginPath();
          ctx.arc(well.x, well.y, 8, 0, Math.PI * 2);
          ctx.fill();

          for (let p = 0; p < 5; p++) {
            const angle = (currentTime * (isPull ? 0.003 : -0.003) + p * Math.PI * 2 / 5);
            const dist = well.radius * (isPull ? (0.8 - ((currentTime * 0.001 + p * 0.2) % 1) * 0.5) : (0.3 + ((currentTime * 0.001 + p * 0.2) % 1) * 0.5));
            const px = well.x + Math.cos(angle) * dist;
            const py = well.y + Math.sin(angle) * dist;
            ctx.fillStyle = `hsla(${hue}, 80%, 75%, ${(isPull ? dist / well.radius : 1 - dist / well.radius) * 0.7})`;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw Time Slow fields
      if (level.timeSlows) {
        for (const ts of level.timeSlows) {
          const wave = Math.sin(currentTime * 0.002) * 0.1;

          const tsGrad = ctx.createLinearGradient(ts.x, ts.y, ts.x + ts.width, ts.y + ts.height);
          tsGrad.addColorStop(0, `hsla(45, 60%, 55%, ${0.15 + wave})`);
          tsGrad.addColorStop(0.5, `hsla(50, 50%, 60%, ${0.2 + wave})`);
          tsGrad.addColorStop(1, `hsla(45, 60%, 55%, ${0.15 + wave})`);
          ctx.fillStyle = tsGrad;
          ctx.fillRect(ts.x, ts.y, ts.width, ts.height);

          const cx = ts.x + ts.width / 2;
          const cy = ts.y + ts.height / 2;
          const maxRippleR = Math.min(ts.width, ts.height) / 2;
          for (let r = 0; r < 3; r++) {
            const rippleProgress = ((currentTime * 0.0008 + r * 0.33) % 1);
            ctx.strokeStyle = `hsla(45, 70%, 65%, ${(1 - rippleProgress) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(cx, cy, maxRippleR * rippleProgress, 0, Math.PI * 2);
            ctx.stroke();
          }

          const clockSymbols = ['⏱', '⏳'];
          for (let s = 0; s < 2; s++) {
            const sx = ts.x + ts.width * (0.3 + s * 0.4) + Math.sin(currentTime * 0.002 + s) * 8;
            const sy = ts.y + ts.height * 0.5 + Math.cos(currentTime * 0.003 + s * 2) * ts.height * 0.2;
            ctx.fillStyle = 'hsla(45, 60%, 70%, 0.5)';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(clockSymbols[s], sx, sy);
          }

          ctx.strokeStyle = `hsla(45, 60%, 60%, ${0.4 + wave})`;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([8, 4]);
          ctx.strokeRect(ts.x, ts.y, ts.width, ts.height);
          ctx.setLineDash([]);

          ctx.fillStyle = 'hsla(45, 70%, 75%, 0.6)';
          ctx.font = 'bold 10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`×${ts.slowFactor}`, ts.x + ts.width / 2, ts.y + ts.height / 2);
        }
      }

      // Draw Echo Trail hazards
      if (level.echoTrail && state.echoSegments.length > 0) {
        const trail = level.echoTrail;
        const isSolid = currentTime < state.echoSolidUntil;

        for (let i = 1; i < state.echoSegments.length; i++) {
          const prev = state.echoSegments[i - 1];
          const curr = state.echoSegments[i];
          const age = currentTime - curr.time;

          if (age < trail.delay && !isSolid) {
            const fadeAlpha = Math.min(1, age / trail.delay) * 0.3;
            ctx.strokeStyle = `hsla(260, 60%, 60%, ${fadeAlpha})`;
            ctx.lineWidth = trail.trailWidth * 0.6;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.stroke();
          } else if (isSolid) {
            ctx.strokeStyle = 'hsla(0, 70%, 55%, 0.7)';
            ctx.lineWidth = trail.trailWidth;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.stroke();

            ctx.strokeStyle = 'hsla(0, 80%, 70%, 0.4)';
            ctx.lineWidth = trail.trailWidth * 0.4;
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.stroke();
          }
        }

        if (!isSolid && state.echoSegments.length > 2) {
          const oldestAge = currentTime - state.echoSegments[0].time;
          if (oldestAge > trail.delay * 0.7) {
            const warnFlash = Math.sin(currentTime * 0.015) > 0;
            if (warnFlash) {
              ctx.fillStyle = 'hsla(0, 80%, 60%, 0.3)';
              ctx.font = 'bold 12px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('⚠ ECHO', state.echoSegments[0].x, state.echoSegments[0].y - 12);
            }
          }
        }
      }

      // Helper function to parse HSL string
      const parseHSL = (hsl: string): { h: number; s: number; l: number } => {
        const parts = hsl.split(' ').map(p => parseFloat(p));
        return { h: parts[0], s: parts[1], l: parts[2] };
      };

      const hslToString = (h: number, s: number, l: number, a: number = 1): string => {
        return a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${a})`;
      };

      // Get ball skin colors
      const skinColors = selectedBallSkin.colors.map(parseHSL);
      const sparkHsl = parseHSL(selectedBallSkin.sparkColor);
      const primaryColor = skinColors[0];

      // Draw ball trails with skin colors
      state.balls.forEach((ball, ballIdx) => {
        const trail = ballTrailRef.current[ballIdx] || [];
        if (trail.length > 1) {
          for (let i = 1; i < trail.length; i++) {
            const alpha = (i / trail.length) * 0.6;
            const size = (i / trail.length) * ball.radius * 0.8;
            
            // Use gradient colors for trail if available
            const colorIdx = skinColors.length > 1 ? Math.floor((i / trail.length) * (skinColors.length - 1)) : 0;
            const trailColor = skinColors[colorIdx];
            
            ctx.fillStyle = hslToString(trailColor.h, trailColor.s, trailColor.l, alpha);
            ctx.beginPath();
            ctx.arc(trail[i].x, trail[i].y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Draw balls with power-up effects and skin
      const hasShield = state.activePowerUps.some(p => p.type === 'shield' && p.endTime > currentTime);
      const hasSpeed = state.activePowerUps.some(p => p.type === 'speed' && p.endTime > currentTime);
      const hasMultiplier = state.activePowerUps.some(p => p.type === 'multiplier' && p.endTime > currentTime);
      
      // Update spark animation time
      sparkTimeRef.current = currentTime;
      
      for (const ball of state.balls) {
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

        // Ball glow using skin color
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
            // Use conic gradient for spiral effect
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
            
          default: // solid or gradient
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
        
        // Draw ball (skip if spiral pattern already drew it)
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

        // Draw sparks around the ball
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

          // Spark glow
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

          // Spark core
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

      // Draw active power-up indicators
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

      // Draw tilt indicator
      const tiltIndicatorX = CANVAS_SIZE - 50;
      const tiltIndicatorY = 50;
      const indicatorSize = 30;
      
      ctx.strokeStyle = 'hsla(220, 10%, 60%, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(tiltIndicatorX, tiltIndicatorY, indicatorSize, 0, Math.PI * 2);
      ctx.stroke();
      
      const tilt = tiltRef.current;
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

      // Render particles
      particles.renderParticles(ctx);

      // Dark mode overlay with spotlight effect
      if (level.isDarkMode) {
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

      renderLoopRef = requestAnimationFrame(render);
    };

    renderLoopRef = requestAnimationFrame(render);
    
    return () => {
      if (renderLoopRef) {
        cancelAnimationFrame(renderLoopRef);
      }
    };
  }, [level, GOAL_TIME_REQUIRED, getMovingWallPosition, particles]);

  return (
    <div className="relative flex flex-col items-center gap-6">
      <div 
        ref={containerRef}
        className="relative touch-none select-none order-1"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="rounded-xl shadow-2xl max-w-full border-4 border-white/5"
          style={{ 
            aspectRatio: '1/1',
            maxHeight: 'calc(100vh - 280px)',
            boxShadow: '0 0 80px hsla(43, 96%, 56%, 0.15), 0 25px 50px -12px rgba(0,0,0,0.5)'
          }}
        />
        
        {/* Tilt Indicator Overlay */}
        <TiltIndicator 
          tilt={displayTilt} 
          isActive={!isPaused && gameStatus === 'playing'}
          controlMode={controlMode}
        />
        
        {isPaused && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-md rounded-xl z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <Pause className="w-8 h-8 text-primary fill-primary" />
              </div>
              <span className="text-4xl font-black text-foreground tracking-tighter italic">PAUSED</span>
            </div>
          </div>
        )}
      </div>

      {/* Stable Controls Toolbar (Now Below Canvas) */}
      <div className="order-2 flex flex-wrap justify-center items-center gap-3 p-4 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        {gyroscope.isSupported && (
          <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5">
            <button
              onClick={disableGyroscope}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                controlMode === 'keyboard' 
                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,209,102,0.3)]' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Hand className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Touch</span>
            </button>
            <button
              onClick={enableGyroscope}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                controlMode === 'gyroscope' 
                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,209,102,0.3)]' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Gyro</span>
            </button>
          </div>
        )}

        <div className="w-px h-8 bg-white/10 mx-1 hidden sm:block" />

        {/* Reset button removed here because it's now in the header, but keeping internal one for quick access if needed or just removing it */}
        {/* I'll keep it for quick reset without page reload if preferred, but since it's in the header, let's keep it simple */}

        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-bold text-xs uppercase tracking-widest">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Sens</span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 border-white/10 bg-black/90 backdrop-blur-2xl" side="top" align="center">
            {/* ... sensitivity content ... */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Sensitivity Control</h4>
              
              {/* Keyboard / Touch Mode */}
              {controlMode === 'keyboard' && (
                <div className="space-y-3">
                  {/* Presets */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Preset</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([
                        { id: 'precise' as const, label: <><TargetIcon className="w-3 h-3 inline-block" /> Precise</>, value: 0.4, desc: 'Slow & accurate' },
                        { id: 'normal' as const, label: <><BalanceIcon className="w-3 h-3 inline-block" /> Normal</>, value: 1.0, desc: 'Balanced' },
                        { id: 'quick' as const, label: <><LightningIcon className="w-3 h-3 inline-block" /> Quick</>, value: 1.4, desc: 'Fast & responsive' },
                      ]).map(preset => (
                        <button
                          key={preset.id}
                          onClick={() => {
                            setActivePreset(preset.id);
                            setKeyTouchSensitivity(preset.value);
                          }}
                          className={`flex flex-col items-center gap-0.5 rounded-lg border px-2 py-2 text-xs transition-all ${
                            activePreset === preset.id
                              ? 'border-primary bg-primary/10 text-primary shadow-sm'
                              : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                          }`}
                        >
                          <span className="font-semibold">{preset.label}</span>
                          <span className="text-[10px] opacity-70">{preset.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fine-tune slider */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Fine-tune</span>
                      <span className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">
                        {Math.round(keyTouchSensitivity * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[keyTouchSensitivity * 100]}
                      onValueChange={(value) => {
                        setKeyTouchSensitivity(value[0] / 100);
                        setActivePreset('custom');
                      }}
                      min={20}
                      max={200}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>Gentle</span>
                      <span>Balanced</span>
                      <span>Aggressive</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Gyroscope Mode */}
              {controlMode === 'gyroscope' && gyroscope.isSupported && (
                <div className="space-y-3">
                  {/* Presets */}
                  <div className="space-y-1.5">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Preset</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([
                        { id: 'precise' as const, label: <><TargetIcon className="w-3 h-3 inline-block" /> Precise</>, value: 0.04, desc: 'Minimal tilt' },
                        { id: 'normal' as const, label: <><BalanceIcon className="w-3 h-3 inline-block" /> Normal</>, value: 0.10, desc: 'Balanced' },
                        { id: 'quick' as const, label: <><LightningIcon className="w-3 h-3 inline-block" /> Quick</>, value: 0.22, desc: 'Max response' },
                      ]).map(preset => (
                        <button
                          key={preset.id}
                          onClick={() => {
                            setGyroPreset(preset.id);
                            gyroscope.setSensitivity(preset.value);
                          }}
                          className={`flex flex-col items-center gap-0.5 rounded-lg border px-2 py-2 text-xs transition-all ${
                            gyroPreset === preset.id
                              ? 'border-primary bg-primary/10 text-primary shadow-sm'
                              : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                          }`}
                        >
                          <span className="font-semibold">{preset.label}</span>
                          <span className="text-[10px] opacity-70">{preset.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fine-tune slider */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Fine-tune</span>
                      <span className="text-xs font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">
                        {Math.round(gyroscope.sensitivity * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[gyroscope.sensitivity * 100]}
                      onValueChange={(value) => {
                        gyroscope.setSensitivity(value[0] / 100);
                        setGyroPreset('custom');
                      }}
                      min={2}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>Gentle</span>
                      <span>Balanced</span>
                      <span>Responsive</span>
                    </div>
                  </div>

                  {/* Recalibrate */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => gyroscope.recalibrate()}
                    className="w-full"
                  >
                    <RotateCcw className="w-3 h-3 mr-2" />
                    Recalibrate
                  </Button>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
        <button
          onClick={toggleSound}
          className="game-toolbar-btn-3d"
          title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
          style={{
            background: soundEnabled
              ? 'linear-gradient(180deg, #FFD166 0%, #E6A817 60%, #CC8F00 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
            boxShadow: soundEnabled
              ? '0 4px 0 #A67200, 0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4)'
              : '0 3px 0 rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            color: soundEnabled ? '#1a1200' : '#F0ECF8',
            border: soundEnabled ? '1px solid #FFD166' : '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" strokeWidth={2.5} /> : <VolumeX className="w-4 h-4" strokeWidth={2.5} />}
        </button>
      </div>

      <div 
        ref={containerRef}
        className="relative touch-none select-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="rounded-lg shadow-xl max-w-full"
          style={{ 
            aspectRatio: '1/1',
            maxHeight: 'calc(100vh - 200px)',
            boxShadow: '0 0 60px hsla(43, 96%, 56%, 0.1), 0 25px 50px -12px hsla(220, 20%, 0%, 0.5)'
          }}
        />
        
        {/* Tilt Indicator Overlay */}
        <TiltIndicator 
          tilt={displayTilt} 
          isActive={!isPaused && gameStatus === 'playing'}
          controlMode={controlMode}
        />
        
        {isPaused && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
            <span className="text-3xl font-bold text-foreground">PAUSED</span>
          </div>
        )}

      </div>

    </div>
  );
};
