import { Level } from '@/types/game';

// ── Per-level overrides for levels where auto-calc feels wrong ──
const LEVEL_OVERRIDES: Record<number, { three: number; two: number }> = {
  // World 1 – Tutorial levels (tighter — very simple)
  1: { three: 10, two: 20 },
  2: { three: 10, two: 20 },
  3: { three: 12, two: 22 },

  // World 5 – Inferno Sanctum boss finales
  449: { three: 55, two: 100 }, // Inferno Lord
  450: { three: 60, two: 110 }, // The Eruption (final volcanic boss)

  // World 6 – Permafrost Sanctum boss finales
  509: { three: 55, two: 100 }, // Permafrost Warden
  510: { three: 60, two: 110 }, // The Frost Titan (final frozen boss)

  // World 7 – Void Sanctum final bosses
  597: { three: 60, two: 120 }, // Void Ascension
  598: { three: 65, two: 120 }, // Void Convergence
  599: { three: 70, two: 130 }, // Void Singularity
  600: { three: 75, two: 140 }, // The Void Titan (ultimate final boss)
};

// Categories that are inherently harder and need more generous time
const HARD_CATEGORIES = new Set([
  'volcanoboss', 'frostboss', 'voidboss', 'extreme',
  'lavasurf', 'avalanche', 'echotrail', 'mirrorclone',
  'realitysplit', 'whirlpool', 'tidalwave',
]);

// Categories with moderate extra complexity
const MEDIUM_CATEGORIES = new Set([
  'combined', 'crusher', 'orbiting', 'seamine',
  'blizzard', 'eruption', 'gravityflip', 'gravitywell',
  'timeslow', 'phaseshift', 'dimensiontear',
]);

/**
 * Returns star time thresholds for a level.
 * Priority: 1) level.starThresholds  2) LEVEL_OVERRIDES  3) auto-calc with modifiers
 */
export function getStarThresholds(level: Level): { three: number; two: number } {
  if (level.starThresholds) {
    return level.starThresholds;
  }

  if (LEVEL_OVERRIDES[level.id]) {
    return LEVEL_OVERRIDES[level.id];
  }

  // Base thresholds from difficulty (1-10)
  const d = Math.max(1, Math.min(10, level.difficulty));
  let three = 15 + (d - 1) * 3.3; // ~15s at d1, ~45s at d10
  let two = 30 + (d - 1) * 6.7;   // ~30s at d1, ~90s at d10

  // ── Modifiers ──

  // Category complexity bonus
  if (level.category && HARD_CATEGORIES.has(level.category)) {
    three *= 1.3;
    two *= 1.3;
  } else if (level.category && MEDIUM_CATEGORIES.has(level.category)) {
    three *= 1.15;
    two *= 1.15;
  }

  // Multiball: controlling 2+ balls is significantly harder
  if (level.balls >= 2) {
    three *= 1.25;
    two *= 1.25;
  }

  // Dark mode: reduced visibility needs more time
  if (level.isDarkMode) {
    three *= 1.2;
    two *= 1.2;
  }

  // Large mazes take longer to traverse
  if (level.mazeSize === 'large') {
    three *= 1.1;
    two *= 1.1;
  }

  return {
    three: Math.round(three),
    two: Math.round(two),
  };
}
