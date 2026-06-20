export interface Position {
  x: number;
  y: number;
}

export interface Wall {
  x: number;
  y: number;
  width: number;
  height: number;
  isMoving?: boolean;
  moveAxis?: 'x' | 'y';
  moveRange?: number;
  moveSpeed?: number;
  switchId?: number; // Wall only active when switch is triggered
  isBouncy?: boolean; // Bouncy walls repel with extra force
  bounceMultiplier?: number; // e.g., 2.0 = double bounce force
  isCrusher?: boolean; // Crusher walls move toward each other
  crushDirection?: 'horizontal' | 'vertical';
  crushSpeed?: number;
  crushPause?: number; // Pause time at each end in ms
  requiredKeys?: number; // Coral gate: requires this many collected keys to open
}

export interface IceSurface {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Switch {
  id: number;
  x: number;
  y: number;
  radius: number;
  activated?: boolean;
}

export interface Portal {
  id: number;
  x: number;
  y: number;
  radius: number;
  linkedPortalId: number;
  color: string;
}

export interface GravityZone {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
  strength: number; // 0.5 = half normal gravity, 2 = double
}

export interface Collectible {
  id: number;
  x: number;
  y: number;
  radius: number;
  type: 'coin' | 'gem' | 'key';
  points: number;
}

export interface TimePickup {
  id: number;
  x: number;
  y: number;
  radius: number;
  bonusTime: number; // seconds to add
}

export interface PowerUp {
  id: number;
  x: number;
  y: number;
  radius: number;
  type: 'shield' | 'speed' | 'multiplier';
  duration: number; // in milliseconds
}

export interface ActivePowerUp {
  type: 'shield' | 'speed' | 'multiplier';
  endTime: number;
  startTime: number;
}

export interface Hazard {
  x: number;
  y: number;
  radius: number;
  type: 'hole' | 'trap';
  isOrbiting?: boolean; // Rotating hazards orbit around a point
  orbitCenterX?: number;
  orbitCenterY?: number;
  orbitRadius?: number;
  orbitSpeed?: number; // Radians per second
  orbitPhase?: number; // Starting phase offset
}

export interface Goal {
  x: number;
  y: number;
  radius: number;
}

export interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export interface ConveyorZone {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
  speed: number; // Force applied to ball
}

export interface LaserGate {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  onDuration: number; // ms the laser is on
  offDuration: number; // ms the laser is off
  startOffset?: number; // Phase offset in ms
  color?: string;
}

export interface MagneticZone {
  x: number;
  y: number;
  radius: number;
  type: 'attract' | 'repel';
  strength: number;
}

// ====== SUNKEN TEMPLE MECHANICS (World 2) ======

export interface WaterCurrent {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
  strength: number;
  flowSpeed?: number;
}

export interface BubbleVent {
  x: number;
  y: number;
  radius: number;
  strength: number;
  burstInterval?: number;
  burstDuration?: number;
}

// ====== EXPANDED SUNKEN TEMPLE MECHANICS ======

export interface Whirlpool {
  x: number;
  y: number;
  radius: number;
  strength: number; // Tangential force (0.5-2.0)
  pullStrength: number; // Inward pull (0.2-1.0)
  clockwise: boolean;
}

export interface Jellyfish {
  id: number;
  x: number;
  y: number;
  radius: number;
  slowFactor: number; // 0.3 = ball moves at 30% speed
  slowDuration: number; // ms
  movePattern: 'vertical' | 'horizontal' | 'circular';
  moveRange: number;
  moveSpeed: number;
}

export interface SeaMine {
  id: number;
  x: number;
  y: number;
  radius: number;
  blastRadius: number;
  blastForce: number;
  respawnTime: number; // ms to reappear
}

export interface TidalWave {
  direction: 'left' | 'right' | 'up' | 'down';
  strength: number;
  interval: number; // ms between waves
  duration: number; // ms wave lasts
  warningTime: number; // ms warning before wave hits
}

// ====== VOLCANIC CORE MECHANICS (World 5) ======

export interface LavaPool {
  x: number;
  y: number;
  width: number;
  height: number;
  damage: number; // damage per second on contact
}

export interface HeatVent {
  x: number;
  y: number;
  radius: number;
  strength: number; // upward launch force
  interval: number; // ms between bursts
  duration: number; // ms burst lasts
  warningTime: number; // ms warning before burst
}

export interface MagmaFlow {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'up' | 'down' | 'left' | 'right';
  speed: number; // directional push force
  damageRate: number; // damage per second while in flow
}

export interface CoolingPlatform {
  id?: number;
  x: number;
  y: number;
  width: number;
  height: number;
  solidDuration: number; // ms platform is solid (safe)
  meltDuration: number; // ms platform is melted (hazard)
  startOffset?: number; // phase offset in ms
}

export interface VolcanicEruption {
  interval: number; // ms between eruptions
  warningTime: number; // ms warning before debris
  debrisCount: number; // number of debris circles per eruption
  debrisRadius: number; // radius of each debris impact
  debrisDuration: number; // ms debris stays on ground
}

export interface LavaGeyser {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number; // column height when active
  interval: number; // ms full cycle
  activeDuration: number; // ms geyser is active
  warningTime: number; // ms warning before eruption
}

export interface SinkingPlatform {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  sinkSpeed: number; // units per second while ball is on it
  maxSinkDepth: number; // max units it can sink before becoming hazard
  riseSpeed: number; // units per second when ball leaves
}

export interface LavaSurf {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  speed: number; // travel speed along path
  waveWidth: number; // width of rideable wave
  damageOnMiss: number; // damage if ball falls off wave
}

// ====== FROZEN FORTRESS MECHANICS (World 6) ======

export interface ThawingIce {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  thawTime: number;
  respawnTime: number;
}

export interface Snowdrift {
  x: number;
  y: number;
  width: number;
  height: number;
  friction: number;
  slowFactor: number;
}

export interface FrozenGeyser {
  id: number;
  x: number;
  y: number;
  radius: number;
  strength: number;
  interval: number;
  duration: number;
  warningTime: number;
  freezeDuration: number;
  freezeFactor: number;
}

export interface IceBridge {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  crackTime: number;
  breakTime: number;
  respawnTime: number;
}

export interface Blizzard {
  direction: 'left' | 'right' | 'up' | 'down';
  strength: number;
  interval: number;
  duration: number;
  warningTime: number;
  visibilityRadius: number;
}

export interface IcicleDrop {
  id: number;
  x: number;
  y: number;
  radius: number;
  interval: number;
  warningTime: number;
  dropDuration: number;
}

export interface Avalanche {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  radius: number;
  speed: number;
  interval: number;
  warningTime: number;
}

export interface FrostRail {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  speed: number;
  railWidth: number;
}

// ====== DIMENSION NEXUS MECHANICS (World 7) ======

export interface PhaseShift {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  phaseDuration: number;   // ms ball can phase through walls
  cooldown: number;        // ms before phase can activate again
}

export interface DimensionTear {
  id: number;
  x: number;
  y: number;
  radius: number;
  linkedTearId: number;
  color: string;
  flipAxis: 'x' | 'y' | 'both';  // which axis geometry mirrors on entry
}

export interface MirrorClone {
  axis: 'x' | 'y';            // which axis the clone mirrors
  centerLine: number;          // pixel position of mirror axis
  cloneRadius: number;         // clone ball radius
  isLethal: boolean;           // collision with clone = death?
}

export interface RealitySplit {
  id: number;
  layer: 'A' | 'B';           // which layer this element belongs to
  activeLayer: 'A' | 'B';     // which layer starts as solid
  switchInterval?: number;     // ms auto-switch interval (0 = manual only)
  switchId?: number;           // switch id that toggles layers
}

export interface GravityFlip {
  x: number;
  y: number;
  width: number;
  height: number;
  flipDirection: 'vertical' | 'horizontal';  // which axis flips
  strength: number;            // gravity magnitude in flipped zone
}

export interface GravityWell {
  x: number;
  y: number;
  radius: number;
  strength: number;            // positive = pull, negative = push
  falloff: 'linear' | 'quadratic';  // how force diminishes with distance
}

export interface TimeSlow {
  x: number;
  y: number;
  width: number;
  height: number;
  slowFactor: number;          // 0.1–0.9, physics speed multiplier inside zone
}

export interface EchoTrail {
  delay: number;               // ms before trail solidifies into hazard
  trailLifetime: number;       // ms the solid trail persists
  trailWidth: number;          // pixel width of the trail hazard
  maxSegments: number;         // max trail segments stored
}

// ====== SKY FORTRESS MECHANICS (World 3) ======

export interface WindGust {
  direction: 'left' | 'right' | 'up' | 'down';
  strength: number;
  interval: number; // ms between gusts
  duration: number; // ms gust lasts
  warningTime: number; // ms warning before gust
}

export interface CloudPlatform {
  x: number;
  y: number;
  width: number;
  height: number;
  onDuration: number; // ms platform is solid
  offDuration: number; // ms platform is faded/passthrough
  startOffset?: number; // phase offset in ms
}

export interface RotatingGear {
  x: number;
  y: number;
  radius: number;
  speed: number; // radians per second
  teeth: number; // number of bump points
  clockwise: boolean;
}

export interface LightningZone {
  id: number;
  x: number;
  y: number;
  radius: number;
  warningDuration: number; // ms warning circle shows
  strikeDuration: number; // ms strike is active
  interval: number; // ms full cycle
  damage: number; // 1 = instant death, 0.5 = half health etc
}

export interface Updraft {
  x: number;
  y: number;
  width: number;
  height: number;
  strength: number; // upward force magnitude
}

export interface CrumblingTile {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  crumbleDelay: number; // ms after contact before tile breaks
  respawnTime: number; // ms to reappear (0 = never)
}

export interface Zipline {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  speed: number;
  oneWay: boolean;
}

export interface Level {
  id: number;
  name: string;
  mazeSize: 'small' | 'medium' | 'large';
  balls: number;
  walls: Wall[];
  hazards: Hazard[];
  goal: Goal;
  difficulty: number;
  startPosition: Position;
  iceSurfaces?: IceSurface[];
  switches?: Switch[];
  portals?: Portal[];
  gravityZones?: GravityZone[];
  collectibles?: Collectible[];
  powerUps?: PowerUp[];
  timePickups?: TimePickup[];
  isDarkMode?: boolean;
  spotlightRadius?: number;
  category?: 'basic' | 'hazard' | 'moving' | 'ice' | 'switch' | 'portal' | 'gravity' | 'multiball' | 'dark' | 'combined' | 'conveyor' | 'laser' | 'magnetic' | 'bouncy' | 'crusher' | 'orbiting' | 'extreme' | 'water' | 'bubble' | 'whirlpool' | 'jellyfish' | 'seamine' | 'tidalwave' | 'coralgate' | 'windgust' | 'cloudplatform' | 'gear' | 'piston' | 'lightning' | 'updraft' | 'crumble' | 'zipline' | 'lavapool' | 'heatvent' | 'magmaflow' | 'coolingplatform' | 'eruption' | 'geyser' | 'sinking' | 'lavasurf' | 'volcanoboss' | 'thawing' | 'snowdrift' | 'frozengeyser' | 'icebridge' | 'blizzard' | 'icicledrop' | 'avalanche' | 'frostrail' | 'frostboss' | 'phaseshift' | 'dimensiontear' | 'mirrorclone' | 'realitysplit' | 'gravityflip' | 'gravitywell' | 'timeslow' | 'echotrail' | 'voidboss';
  world?: string;
  conveyorZones?: ConveyorZone[];
  laserGates?: LaserGate[];
  magneticZones?: MagneticZone[];
  waterCurrents?: WaterCurrent[];
  bubbleVents?: BubbleVent[];
  whirlpools?: Whirlpool[];
  jellyfish?: Jellyfish[];
  seaMines?: SeaMine[];
  tidalWaves?: TidalWave[];
  // Sky Fortress mechanics
  windGusts?: WindGust[];
  cloudPlatforms?: CloudPlatform[];
  rotatingGears?: RotatingGear[];
  lightningZones?: LightningZone[];
  updrafts?: Updraft[];
  crumblingTiles?: CrumblingTile[];
  ziplines?: Zipline[];
  // Volcanic Core mechanics
  lavaPools?: LavaPool[];
  heatVents?: HeatVent[];
  magmaFlows?: MagmaFlow[];
  coolingPlatforms?: CoolingPlatform[];
  volcanicEruption?: VolcanicEruption;
  lavaGeysers?: LavaGeyser[];
  sinkingPlatforms?: SinkingPlatform[];
  lavaSurfs?: LavaSurf[];
  // Frozen Fortress mechanics
  thawingIces?: ThawingIce[];
  snowdrifts?: Snowdrift[];
  frozenGeysers?: FrozenGeyser[];
  iceBridges?: IceBridge[];
  blizzard?: Blizzard;
  icicleDrops?: IcicleDrop[];
  avalanches?: Avalanche[];
  frostRails?: FrostRail[];
  // Dimension Nexus mechanics
  phaseShifts?: PhaseShift[];
  dimensionTears?: DimensionTear[];
  mirrorClone?: MirrorClone;
  realitySplits?: RealitySplit[];
  gravityFlips?: GravityFlip[];
  gravityWells?: GravityWell[];
  timeSlows?: TimeSlow[];
  echoTrail?: EchoTrail;
  // Star rating time thresholds (in seconds)
  starThresholds?: {
    three: number; // Max time for 3 stars
    two: number;   // Max time for 2 stars
  };
}

export type GameMode = 'normal';

export interface LevelProgress {
  levelId: number;
  stars: number;
  bestTime: number;
  completed: boolean;
  totalCollected?: number;
  maxCollectibles?: number;
}

export interface GameState {
  status: 'playing' | 'won' | 'lost' | 'paused';
  balls: Ball[];
  tilt: { x: number; y: number };
  startTime: number;
  elapsedTime: number;
  falls: number;
  goalTimer: number;
  activatedSwitches: number[];
  movingWallOffsets: Record<number, number>;
  lastPortalUsed: number | null;
  portalCooldown: number;
  collectedItems: number[];
  score: number;
  collectedPowerUps: number[];
  activePowerUps: ActivePowerUp[];
  collectedTimePickups: number[];
  remainingTime: number;
  bonusTimeCollected: number;
  mineExplosions: Record<number, number>;
  jellySlowUntil: number;
  jellySlowFactor: number;
  // Sky Fortress state
  crumbledTiles: Record<number, number>;
  ziplineActive: { id: number; progress: number } | null;
  lightningWarnings: Record<number, number>;
  // Volcanic Core state
  sinkingPlatformDepths: Record<number, number>;
  lavaSurfActive: { id: number; progress: number } | null;
  eruptionDebris: { x: number; y: number; timer: number }[];
  coolingPlatformStates: Record<number, boolean>; // true = solid
  lavaContactTime: number; // accumulated lava contact for damage
  // Frozen Fortress state
  thawedIces: Record<number, number>; // id -> timestamp when thaw started
  iceBridgeStates: Record<number, number>; // id -> timestamp when contact started
  frostRailActive: { id: number; progress: number } | null;
  frozenUntil: number; // timestamp until ball is slowed from frozen geyser
  frozenSlowFactor: number;
  icicleDebris: { x: number; y: number; timer: number }[];
  avalancheBoulders: { id: number; progress: number; spawnTime: number }[];
  blizzardOverlayActive: boolean;
  // Dimension Nexus state
  phaseActive: boolean;
  phaseEndTime: number;
  phaseCooldownEnd: number;
  activeLayer: 'A' | 'B';
  mirrorClonePos: { x: number; y: number } | null;
  echoSegments: { x: number; y: number; time: number }[];
  echoSolidUntil: number;
}

export interface Score {
  time: number;
  falls: number;
  stars: number;
  collectibles: number;
  totalCollectibles: number;
  bonusPoints: number;
}
