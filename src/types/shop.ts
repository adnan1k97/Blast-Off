export interface BallSkin {
  id: string;
  name: string;
  colors: string[]; // HSL colors for the ball
  sparkColor: string; // HSL color for spark effect
  price: number; // Stars required to unlock
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  pattern?: 'solid' | 'gradient' | 'radial' | 'stripes' | 'spiral' | 'pulse' | 'image';
  imageUrl?: string; // Path to PNG image for image-based balls
}

export interface ShopState {
  selectedBallId: string;
  unlockedBalls: string[];
}
