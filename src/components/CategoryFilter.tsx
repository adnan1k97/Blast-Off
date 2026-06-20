import React from 'react';
import { Lock, Zap, Skull, Move, Snowflake, ToggleLeft, Disc, ArrowDown, Users, Moon, Layers, ArrowRightLeft, Crosshair, Magnet, CircleDot, Gauge, Orbit, Crown, Waves, Wind, Tornado, Bug, Bomb, TrendingUp, KeyRound, Globe, Eye, Clock, FlipVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export type LevelCategory = 'all' | 'basic' | 'hazard' | 'moving' | 'ice' | 'switch' | 'portal' | 'gravity' | 'multiball' | 'dark' | 'combined' | 'conveyor' | 'laser' | 'magnetic' | 'bouncy' | 'crusher' | 'orbiting' | 'extreme' | 'water' | 'bubble' | 'whirlpool' | 'jellyfish' | 'seamine' | 'tidalwave' | 'coralgate' | 'windgust' | 'cloudplatform' | 'gear' | 'piston' | 'lightning' | 'updraft' | 'crumble' | 'zipline' | 'lavapool' | 'heatvent' | 'magmaflow' | 'coolingplatform' | 'eruption' | 'geyser' | 'sinking' | 'lavasurf' | 'volcanoboss' | 'thawing' | 'snowdrift' | 'frozengeyser' | 'icebridge' | 'blizzard' | 'icicledrop' | 'avalanche' | 'frostrail' | 'frostboss' | 'phaseshift' | 'dimensiontear' | 'mirrorclone' | 'realitysplit' | 'gravityflip' | 'gravitywell' | 'timeslow' | 'echotrail' | 'voidboss';

interface CategoryInfo {
  id: LevelCategory;
  name: string;
  icon: React.ElementType;
  starsRequired: number;
  color: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'all', name: 'All Levels', icon: Layers, starsRequired: 0, color: 'text-primary' },
  { id: 'basic', name: 'Basic', icon: Zap, starsRequired: 0, color: 'text-emerald-500' },
  { id: 'hazard', name: 'Hazard', icon: Skull, starsRequired: 6, color: 'text-red-500' },
  { id: 'moving', name: 'Moving Walls', icon: Move, starsRequired: 12, color: 'text-orange-500' },
  { id: 'ice', name: 'Ice', icon: Snowflake, starsRequired: 18, color: 'text-cyan-500' },
  { id: 'switch', name: 'Switch Puzzle', icon: ToggleLeft, starsRequired: 24, color: 'text-yellow-500' },
  { id: 'portal', name: 'Portal', icon: Disc, starsRequired: 30, color: 'text-purple-500' },
  { id: 'gravity', name: 'Gravity', icon: ArrowDown, starsRequired: 40, color: 'text-blue-500' },
  { id: 'multiball', name: 'Multi-ball', icon: Users, starsRequired: 50, color: 'text-pink-500' },
  { id: 'dark', name: 'Dark Mode', icon: Moon, starsRequired: 60, color: 'text-slate-400' },
  { id: 'combined', name: 'Combined', icon: Layers, starsRequired: 75, color: 'text-violet-500' },
  // Tech Lab advanced categories (levels 51-100)
  { id: 'conveyor', name: 'Conveyor', icon: ArrowRightLeft, starsRequired: 90, color: 'text-teal-500' },
  { id: 'laser', name: 'Laser Gates', icon: Crosshair, starsRequired: 105, color: 'text-rose-500' },
  { id: 'magnetic', name: 'Magnetic', icon: Magnet, starsRequired: 120, color: 'text-indigo-500' },
  { id: 'bouncy', name: 'Bouncy', icon: CircleDot, starsRequired: 135, color: 'text-lime-500' },
  { id: 'crusher', name: 'Crusher', icon: Gauge, starsRequired: 150, color: 'text-amber-500' },
  { id: 'orbiting', name: 'Orbiting', icon: Orbit, starsRequired: 165, color: 'text-fuchsia-500' },
  { id: 'extreme', name: 'Extreme', icon: Crown, starsRequired: 180, color: 'text-red-600' },
  // Sunken Temple categories (levels 101-200)
  { id: 'water', name: 'Water Current', icon: Waves, starsRequired: 150, color: 'text-cyan-400' },
  { id: 'bubble', name: 'Bubble Vent', icon: Wind, starsRequired: 160, color: 'text-teal-400' },
  { id: 'whirlpool', name: 'Whirlpool', icon: Tornado, starsRequired: 180, color: 'text-blue-400' },
  { id: 'jellyfish', name: 'Jellyfish', icon: Bug, starsRequired: 195, color: 'text-pink-400' },
  { id: 'seamine', name: 'Sea Mine', icon: Bomb, starsRequired: 210, color: 'text-red-400' },
  { id: 'tidalwave', name: 'Tidal Wave', icon: TrendingUp, starsRequired: 225, color: 'text-sky-400' },
  { id: 'coralgate', name: 'Coral Gate', icon: KeyRound, starsRequired: 200, color: 'text-orange-400' },
  // Sky Fortress categories (levels 201-300)
  { id: 'windgust', name: 'Wind Gust', icon: Wind, starsRequired: 240, color: 'text-sky-400' },
  { id: 'cloudplatform', name: 'Cloud Platform', icon: Layers, starsRequired: 250, color: 'text-sky-300' },
  { id: 'gear', name: 'Gear', icon: Disc, starsRequired: 270, color: 'text-amber-400' },
  { id: 'piston', name: 'Piston', icon: Gauge, starsRequired: 280, color: 'text-amber-500' },
  { id: 'lightning', name: 'Lightning', icon: Zap, starsRequired: 300, color: 'text-yellow-300' },
  { id: 'updraft', name: 'Updraft', icon: TrendingUp, starsRequired: 310, color: 'text-sky-200' },
  { id: 'crumble', name: 'Crumble', icon: Skull, starsRequired: 330, color: 'text-stone-400' },
  { id: 'zipline', name: 'Zipline', icon: ArrowRightLeft, starsRequired: 340, color: 'text-indigo-400' },
  // Volcanic Core categories (levels 301-400)
  { id: 'lavapool', name: 'Lava Pool', icon: Skull, starsRequired: 360, color: 'text-red-500' },
  { id: 'heatvent', name: 'Heat Vent', icon: TrendingUp, starsRequired: 370, color: 'text-orange-500' },
  { id: 'magmaflow', name: 'Magma Flow', icon: Waves, starsRequired: 390, color: 'text-orange-600' },
  { id: 'coolingplatform', name: 'Cooling Platform', icon: Layers, starsRequired: 400, color: 'text-stone-400' },
  { id: 'eruption', name: 'Eruption', icon: Bomb, starsRequired: 420, color: 'text-red-600' },
  { id: 'geyser', name: 'Geyser', icon: TrendingUp, starsRequired: 430, color: 'text-amber-500' },
  { id: 'sinking', name: 'Sinking', icon: ArrowDown, starsRequired: 450, color: 'text-amber-600' },
  { id: 'lavasurf', name: 'Lava Surf', icon: Waves, starsRequired: 460, color: 'text-red-400' },
  { id: 'volcanoboss', name: 'Volcano Boss', icon: Crown, starsRequired: 480, color: 'text-red-700' },
  // Frozen Fortress categories (levels 401-500)
  { id: 'thawing', name: 'Thawing Ice', icon: Snowflake, starsRequired: 500, color: 'text-cyan-300' },
  { id: 'snowdrift', name: 'Snowdrift', icon: Wind, starsRequired: 510, color: 'text-blue-300' },
  { id: 'frozengeyser', name: 'Frozen Geyser', icon: TrendingUp, starsRequired: 530, color: 'text-cyan-400' },
  { id: 'icebridge', name: 'Ice Bridge', icon: Layers, starsRequired: 540, color: 'text-sky-300' },
  { id: 'blizzard', name: 'Blizzard', icon: Wind, starsRequired: 560, color: 'text-blue-200' },
  { id: 'icicledrop', name: 'Icicle Drop', icon: ArrowDown, starsRequired: 570, color: 'text-cyan-200' },
  { id: 'avalanche', name: 'Avalanche', icon: Bomb, starsRequired: 590, color: 'text-stone-300' },
  { id: 'frostrail', name: 'Frost Rail', icon: ArrowRightLeft, starsRequired: 600, color: 'text-sky-200' },
  { id: 'frostboss', name: 'Frost Boss', icon: Crown, starsRequired: 620, color: 'text-cyan-100' },
  // Dimension Nexus categories (levels 501-600)
  { id: 'phaseshift', name: 'Phase Shift', icon: Eye, starsRequired: 640, color: 'text-purple-400' },
  { id: 'dimensiontear', name: 'Dimension Tear', icon: Globe, starsRequired: 650, color: 'text-pink-400' },
  { id: 'mirrorclone', name: 'Mirror Clone', icon: Users, starsRequired: 670, color: 'text-violet-400' },
  { id: 'realitysplit', name: 'Reality Split', icon: FlipVertical, starsRequired: 680, color: 'text-fuchsia-400' },
  { id: 'gravityflip', name: 'Gravity Flip', icon: ArrowDown, starsRequired: 700, color: 'text-indigo-400' },
  { id: 'gravitywell', name: 'Gravity Well', icon: Orbit, starsRequired: 710, color: 'text-blue-400' },
  { id: 'timeslow', name: 'Time Slow', icon: Clock, starsRequired: 730, color: 'text-amber-300' },
  { id: 'echotrail', name: 'Echo Trail', icon: Disc, starsRequired: 740, color: 'text-rose-400' },
  { id: 'voidboss', name: 'Void Boss', icon: Crown, starsRequired: 760, color: 'text-purple-200' },
];

export const getCategoryInfo = (category: LevelCategory | undefined): CategoryInfo | undefined => {
  return CATEGORIES.find(c => c.id === category);
};

interface CategoryFilterProps {
  selectedCategory: LevelCategory;
  onCategoryChange: (category: LevelCategory) => void;
  totalStars: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  totalStars,
}) => {
  return (
    <div className="px-6 py-4">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isUnlocked = totalStars >= category.starsRequired;
          const isSelected = selectedCategory === category.id;
          const Icon = category.icon;
          
          return (
            <button
              key={category.id}
              onClick={() => isUnlocked && onCategoryChange(category.id)}
              disabled={!isUnlocked}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                'border-2',
                isUnlocked
                  ? isSelected
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-accent text-foreground'
                  : 'border-muted bg-muted/30 text-muted-foreground cursor-not-allowed opacity-60'
              )}
            >
              {isUnlocked ? (
                <Icon className="w-4 h-4" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
              <span>{category.name}</span>
              {!isUnlocked && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  {category.starsRequired}★
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

interface LevelCategoryBadgeProps {
  category: LevelCategory | undefined;
  size?: 'sm' | 'md';
}

export const LevelCategoryBadge: React.FC<LevelCategoryBadgeProps> = ({ category, size = 'sm' }) => {
  const info = getCategoryInfo(category);
  if (!info || info.id === 'all') return null;
  
  const Icon = info.icon;
  const sizeClasses = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  
  return (
    <div 
      className={cn('absolute top-2 right-2', info.color)}
      title={info.name}
    >
      <Icon className={sizeClasses} />
    </div>
  );
};