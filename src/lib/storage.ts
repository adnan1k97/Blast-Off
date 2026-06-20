import { LevelProgress } from '@/types/game';
import { LevelCategory } from '@/components/CategoryFilter';
import { ShopState } from '@/types/shop';
import { ballSkins } from '@/data/balls';

const STORAGE_KEY = 'tiltmaze_progress';
const ACHIEVEMENTS_KEY = 'tiltmaze_achievements';
const SHOP_KEY = 'tiltmaze_shop';

export const loadProgress = (): Record<number, LevelProgress> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return {};
};

export const saveProgress = (levelId: number, progress: LevelProgress): void => {
  try {
    const existing = loadProgress();
    // Only update if new score is better
    if (!existing[levelId] || 
        progress.stars > existing[levelId].stars ||
        (progress.stars === existing[levelId].stars && progress.bestTime < existing[levelId].bestTime)) {
      existing[levelId] = progress;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
};

export const isLevelUnlocked = (levelId: number, progress: Record<number, LevelProgress>): boolean => {
  return true; // TODO: revert to original unlock logic
  // if (levelId === 1) return true;
  // return progress[levelId - 1]?.completed || false;
};

export const getTotalStars = (progress: Record<number, LevelProgress>): number => {
  return Object.values(progress).reduce((sum, p) => sum + (p.stars || 0), 0);
};

export const getCompletedLevels = (progress: Record<number, LevelProgress>): number => {
  return Object.values(progress).filter(p => p.completed).length;
};

// Achievement tracking
export const loadUnlockedAchievements = (): LevelCategory[] => {
  try {
    const stored = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load achievements:', e);
  }
  return [];
};

export const saveUnlockedAchievement = (category: LevelCategory): void => {
  try {
    const existing = loadUnlockedAchievements();
    if (!existing.includes(category)) {
      existing.push(category);
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(existing));
    }
  } catch (e) {
    console.error('Failed to save achievement:', e);
  }
};

// Ball Shop storage
export const loadShopState = (): ShopState => {
  // TODO: revert to original unlock logic
  const allBallIds = ballSkins.map(b => b.id);
  try {
    const stored = localStorage.getItem(SHOP_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        unlockedBalls: allBallIds
      };
    }
  } catch (e) {
    console.error('Failed to load shop state:', e);
  }
  return {
    selectedBallId: 'default',
    unlockedBalls: allBallIds
  };
};

export const saveSelectedBall = (ballId: string): void => {
  try {
    const existing = loadShopState();
    existing.selectedBallId = ballId;
    localStorage.setItem(SHOP_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save selected ball:', e);
  }
};

export const unlockBall = (ballId: string): void => {
  try {
    const existing = loadShopState();
    if (!existing.unlockedBalls.includes(ballId)) {
      existing.unlockedBalls.push(ballId);
      localStorage.setItem(SHOP_KEY, JSON.stringify(existing));
    }
  } catch (e) {
    console.error('Failed to unlock ball:', e);
  }
};

export const getSelectedBallId = (): string => {
  return loadShopState().selectedBallId;
};
