import { BallSkin } from '@/types/shop';
import mysticTreeImg from '@/assets/balls/mystic-tree.png';
import aquaSpiralImg from '@/assets/balls/aqua-spiral.png';
import celticKnotImg from '@/assets/balls/celtic-knot.png';
import voidSwirlImg from '@/assets/balls/void-swirl.png';
import compassStarImg from '@/assets/balls/compass-star.png';
import frostCrystalImg from '@/assets/balls/frost-crystal.png';
import oceanWaveImg from '@/assets/balls/ocean-wave.png';
import clockworkImg from '@/assets/balls/clockwork.png';
import nebulaGreenImg from '@/assets/balls/nebula-green.png';
import flameSwirlImg from '@/assets/balls/flame-swirl.png';
import compassGardenImg from '@/assets/balls/compass-garden.png';
import starburstImg from '@/assets/balls/starburst.png';
import moonPhasesImg from '@/assets/balls/moon-phases.png';
import crystalBurstImg from '@/assets/balls/crystal-burst.png';
import purpleWeaveImg from '@/assets/balls/purple-weave.png';

export const ballSkins: BallSkin[] = [
  // Common balls (0-15 stars)
  {
    id: 'default',
    name: 'Classic Gold',
    colors: ['43 96% 56%'],
    sparkColor: '43 100% 70%',
    price: 0,
    rarity: 'common',
    pattern: 'solid'
  },
  {
    id: 'ruby',
    name: 'Ruby Red',
    colors: ['0 72% 50%'],
    sparkColor: '0 80% 70%',
    price: 10,
    rarity: 'common',
    pattern: 'solid'
  },
  {
    id: 'coral',
    name: 'Coral Pink',
    colors: ['350 80% 65%'],
    sparkColor: '350 90% 80%',
    price: 15,
    rarity: 'common',
    pattern: 'solid'
  },
  
  // Rare balls (20-45 stars)
  {
    id: 'sunset',
    name: 'Sunset Glow',
    colors: ['20 90% 55%', '45 95% 60%'],
    sparkColor: '35 100% 70%',
    price: 20,
    rarity: 'rare',
    pattern: 'gradient'
  },
  {
    id: 'ocean',
    name: 'Ocean Wave',
    colors: ['190 85% 45%', '220 80% 55%'],
    sparkColor: '200 90% 70%',
    price: 25,
    rarity: 'rare',
    pattern: 'gradient'
  },
  {
    id: 'forest',
    name: 'Forest Spirit',
    colors: ['120 60% 40%', '150 70% 50%'],
    sparkColor: '135 80% 65%',
    price: 30,
    rarity: 'rare',
    pattern: 'gradient'
  },
  {
    id: 'lavender',
    name: 'Lavender Dream',
    colors: ['270 60% 65%', '290 70% 70%'],
    sparkColor: '280 80% 80%',
    price: 30,
    rarity: 'rare',
    pattern: 'gradient'
  },
  
  // Epic balls (50-90 stars)
  {
    id: 'rainbow',
    name: 'Rainbow Burst',
    colors: ['0 80% 60%', '60 80% 55%', '120 70% 50%', '200 80% 55%', '280 70% 60%'],
    sparkColor: '45 100% 75%',
    price: 50,
    rarity: 'epic',
    pattern: 'spiral'
  },
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    colors: ['160 80% 50%', '180 85% 55%', '200 80% 60%', '280 70% 55%'],
    sparkColor: '180 90% 70%',
    price: 55,
    rarity: 'epic',
    pattern: 'gradient'
  },
  {
    id: 'fire',
    name: 'Inferno',
    colors: ['0 90% 50%', '20 95% 55%', '45 100% 55%'],
    sparkColor: '30 100% 70%',
    price: 60,
    rarity: 'epic',
    pattern: 'radial'
  },
  {
    id: 'ice',
    name: 'Frozen Crystal',
    colors: ['190 90% 70%', '200 85% 80%', '210 80% 90%'],
    sparkColor: '200 100% 90%',
    price: 65,
    rarity: 'epic',
    pattern: 'radial'
  },
  {
    id: 'galaxy',
    name: 'Galaxy Swirl',
    colors: ['260 70% 40%', '280 80% 50%', '300 75% 60%', '320 70% 55%'],
    sparkColor: '290 90% 75%',
    price: 70,
    rarity: 'epic',
    pattern: 'spiral'
  },
  {
    id: 'neon',
    name: 'Neon Pulse',
    colors: ['142 76% 52%', '180 100% 50%'],
    sparkColor: '160 100% 70%',
    price: 75,
    rarity: 'epic',
    pattern: 'pulse'
  },
  {
    id: 'electric',
    name: 'Electric Storm',
    colors: ['180 100% 50%', '200 90% 60%', '220 85% 55%'],
    sparkColor: '190 100% 75%',
    price: 80,
    rarity: 'epic',
    pattern: 'pulse'
  },
  {
    id: 'lava',
    name: 'Molten Lava',
    colors: ['0 85% 45%', '15 90% 50%', '30 95% 55%', '45 100% 50%'],
    sparkColor: '20 100% 65%',
    price: 85,
    rarity: 'epic',
    pattern: 'radial'
  },
  {
    id: 'toxic',
    name: 'Toxic Glow',
    colors: ['100 80% 45%', '120 85% 50%', '80 90% 55%'],
    sparkColor: '100 100% 70%',
    price: 85,
    rarity: 'epic',
    pattern: 'pulse'
  },
  {
    id: 'candy',
    name: 'Cotton Candy',
    colors: ['320 70% 70%', '280 65% 75%', '200 75% 75%'],
    sparkColor: '300 80% 85%',
    price: 90,
    rarity: 'epic',
    pattern: 'stripes'
  },
  
  // Legendary balls (100-200 stars)
  {
    id: 'phoenix',
    name: 'Phoenix Flame',
    colors: ['0 95% 50%', '25 100% 55%', '45 100% 60%', '55 100% 65%'],
    sparkColor: '40 100% 75%',
    price: 100,
    rarity: 'legendary',
    pattern: 'spiral'
  },
  {
    id: 'void',
    name: 'Void Walker',
    colors: ['260 50% 15%', '280 60% 25%', '300 70% 35%'],
    sparkColor: '280 80% 60%',
    price: 120,
    rarity: 'legendary',
    pattern: 'pulse'
  },
  {
    id: 'plasma',
    name: 'Plasma Core',
    colors: ['280 90% 55%', '300 95% 60%', '320 100% 65%', '180 100% 50%'],
    sparkColor: '300 100% 80%',
    price: 140,
    rarity: 'legendary',
    pattern: 'pulse'
  },
  {
    id: 'prism',
    name: 'Prismatic',
    colors: ['0 85% 60%', '45 90% 60%', '120 80% 55%', '200 85% 60%', '280 80% 60%', '320 75% 60%'],
    sparkColor: '45 100% 80%',
    price: 160,
    rarity: 'legendary',
    pattern: 'spiral'
  },
  {
    id: 'supernova',
    name: 'Supernova',
    colors: ['45 100% 70%', '30 95% 65%', '15 90% 60%', '0 85% 55%', '280 75% 50%'],
    sparkColor: '45 100% 85%',
    price: 180,
    rarity: 'legendary',
    pattern: 'radial'
  },
  {
    id: 'cosmic',
    name: 'Cosmic Dream',
    colors: ['240 70% 30%', '260 75% 40%', '280 80% 50%', '300 85% 60%', '180 90% 55%', '160 85% 50%'],
    sparkColor: '200 100% 75%',
    price: 200,
    rarity: 'legendary',
    pattern: 'spiral'
  },

  // PNG Image balls
  {
    id: 'mystic-tree',
    name: 'Mystic Tree',
    colors: ['330 60% 60%'],
    sparkColor: '330 80% 75%',
    price: 40,
    rarity: 'rare',
    pattern: 'image',
    imageUrl: mysticTreeImg
  },
  {
    id: 'aqua-spiral',
    name: 'Aqua Spiral',
    colors: ['200 80% 55%'],
    sparkColor: '200 90% 70%',
    price: 45,
    rarity: 'rare',
    pattern: 'image',
    imageUrl: aquaSpiralImg
  },
  {
    id: 'celtic-knot',
    name: 'Celtic Knot',
    colors: ['43 90% 55%'],
    sparkColor: '43 100% 70%',
    price: 55,
    rarity: 'epic',
    pattern: 'image',
    imageUrl: celticKnotImg
  },
  {
    id: 'void-swirl',
    name: 'Void Swirl',
    colors: ['280 70% 45%'],
    sparkColor: '280 85% 70%',
    price: 70,
    rarity: 'epic',
    pattern: 'image',
    imageUrl: voidSwirlImg
  },
  {
    id: 'compass-star',
    name: 'Compass Star',
    colors: ['25 85% 55%'],
    sparkColor: '25 100% 70%',
    price: 60,
    rarity: 'epic',
    pattern: 'image',
    imageUrl: compassStarImg
  },
  {
    id: 'frost-crystal',
    name: 'Frost Crystal',
    colors: ['0 70% 50%'],
    sparkColor: '0 85% 70%',
    price: 50,
    rarity: 'epic',
    pattern: 'image',
    imageUrl: frostCrystalImg
  },
  {
    id: 'ocean-wave-art',
    name: 'Tidal Art',
    colors: ['175 70% 50%'],
    sparkColor: '175 85% 65%',
    price: 120,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: oceanWaveImg
  },
  {
    id: 'clockwork',
    name: 'Clockwork',
    colors: ['160 50% 45%'],
    sparkColor: '160 70% 65%',
    price: 140,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: clockworkImg
  },
  {
    id: 'nebula-green',
    name: 'Green Nebula',
    colors: ['120 60% 45%'],
    sparkColor: '120 80% 65%',
    price: 160,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: nebulaGreenImg
  },
  {
    id: 'flame-swirl',
    name: 'Flame Swirl',
    colors: ['25 90% 55%'],
    sparkColor: '30 100% 70%',
    price: 110,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: flameSwirlImg
  },
  {
    id: 'compass-garden',
    name: 'Compass Garden',
    colors: ['80 60% 55%'],
    sparkColor: '80 80% 70%',
    price: 130,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: compassGardenImg
  },
  {
    id: 'starburst',
    name: 'Starburst Nova',
    colors: ['220 80% 50%'],
    sparkColor: '195 100% 70%',
    price: 150,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: starburstImg
  },
  {
    id: 'moon-phases',
    name: 'Lunar Cycle',
    colors: ['270 40% 50%'],
    sparkColor: '270 60% 75%',
    price: 170,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: moonPhasesImg
  },
  {
    id: 'crystal-burst',
    name: 'Crystal Burst',
    colors: ['330 70% 65%'],
    sparkColor: '330 90% 80%',
    price: 180,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: crystalBurstImg
  },
  {
    id: 'purple-weave',
    name: 'Mystic Weave',
    colors: ['280 50% 65%'],
    sparkColor: '280 70% 80%',
    price: 190,
    rarity: 'legendary',
    pattern: 'image',
    imageUrl: purpleWeaveImg
  },
];

export const getBallById = (id: string): BallSkin => {
  return ballSkins.find(ball => ball.id === id) || ballSkins[0];
};

export const getRarityColor = (rarity: BallSkin['rarity']): string => {
  switch (rarity) {
    case 'common': return '220 14% 70%';
    case 'rare': return '200 85% 55%';
    case 'epic': return '280 85% 65%';
    case 'legendary': return '43 100% 58%';
    default: return '220 14% 70%';
  }
};

export const getRarityGradient = (rarity: BallSkin['rarity']): string => {
  switch (rarity) {
    case 'common': return 'linear-gradient(135deg, hsl(220 14% 70%), hsl(220 14% 50%))';
    case 'rare': return 'linear-gradient(135deg, hsl(200 85% 55%), hsl(220 80% 45%))';
    case 'epic': return 'linear-gradient(135deg, hsl(280 85% 65%), hsl(320 80% 55%))';
    case 'legendary': return 'linear-gradient(135deg, hsl(43 100% 58%), hsl(25 100% 50%))';
    default: return 'linear-gradient(135deg, hsl(220 14% 70%), hsl(220 14% 50%))';
  }
};
