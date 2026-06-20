import React from 'react';
import { Lock, Sparkles, Globe, Mountain, Flame, Snowflake, Zap, Compass, Clock, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface World {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  levelRange: [number, number]; // [start, end] inclusive
  starsRequired: number;
  color: string;
  bgGradient: string;
  comingSoon?: boolean;
}

export const WORLDS: World[] = [
  { 
    id: 'techlab', 
    name: 'Ancient Ruins', 
    description: 'Mystical stone temples of forgotten civilizations',
    icon: Landmark, 
    levelRange: [1, 100], 
    starsRequired: 0, 
    color: 'text-amber-400',
    bgGradient: 'from-amber-800/20 to-stone-700/20'
  },
  { 
    id: 'sunken-temple', 
    name: 'Sunken Temple', 
    description: 'Ancient underwater ruins — 5 sub-zones',
    icon: Compass, 
    levelRange: [101, 200], 
    starsRequired: 200, 
    color: 'text-teal-400',
    bgGradient: 'from-teal-500/20 to-cyan-600/20',
    comingSoon: false
  },
  { 
    id: 'sky-fortress', 
    name: 'Sky Fortress', 
    description: 'Floating platforms above the clouds — 5 sub-zones',
    icon: Mountain, 
    levelRange: [201, 300], 
    starsRequired: 450, 
    color: 'text-sky-400',
    bgGradient: 'from-sky-500/20 to-indigo-600/20',
    comingSoon: false
  },
  { 
    id: 'volcanic-core', 
    name: 'Volcanic Core', 
    description: 'Deep underground magma chambers — 5 sub-zones',
    icon: Flame, 
    levelRange: [301, 400], 
    starsRequired: 700, 
    color: 'text-orange-400',
    bgGradient: 'from-orange-500/20 to-red-600/20',
    comingSoon: false
  },
  { 
    id: 'frozen-fortress', 
    name: 'Frozen Fortress', 
    description: 'Icy caverns and frozen peaks — 5 sub-zones',
    icon: Snowflake, 
    levelRange: [401, 500], 
    starsRequired: 950, 
    color: 'text-cyan-300',
    bgGradient: 'from-cyan-400/20 to-blue-500/20',
    comingSoon: false
  },
  { 
    id: 'dimension-nexus', 
    name: 'Dimension Nexus', 
    description: 'Where reality bends — 5 sub-zones',
    icon: Globe, 
    levelRange: [501, 600], 
    starsRequired: 1200, 
    color: 'text-purple-400',
    bgGradient: 'from-purple-500/20 to-pink-600/20',
    comingSoon: false
  },
];

export const getWorldForLevel = (levelId: number): World | undefined => {
  return WORLDS.find(w => levelId >= w.levelRange[0] && levelId <= w.levelRange[1]);
};

interface WorldSelectorProps {
  selectedWorld: string;
  onWorldChange: (worldId: string) => void;
  totalStars: number;
}

export const WorldSelector: React.FC<WorldSelectorProps> = ({
  selectedWorld,
  onWorldChange,
  totalStars,
}) => {
  return (
    <div className="px-6 py-4">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Worlds</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {WORLDS.map((world) => {
          const isUnlocked = true; // TODO: revert to: totalStars >= world.starsRequired && !world.comingSoon;
          const isSelected = selectedWorld === world.id;
          const Icon = world.icon;
          
          return (
            <button
              key={world.id}
              onClick={() => isUnlocked && onWorldChange(world.id)}
              disabled={!isUnlocked}
              className={cn(
                'relative flex flex-col items-center gap-2 p-4 rounded-xl text-sm font-medium transition-all duration-300',
                'border-2 overflow-hidden group',
                isUnlocked
                  ? isSelected
                    ? 'border-primary bg-gradient-to-br shadow-lg shadow-primary/30'
                    : 'border-border bg-card hover:border-primary/50 hover:scale-105'
                  : 'border-muted bg-muted/30 cursor-not-allowed opacity-60'
              )}
              style={isSelected ? {
                background: `linear-gradient(135deg, hsl(var(--metal-highlight)) 0%, hsl(var(--metal)) 100%)`,
              } : undefined}
            >
              {/* Background gradient overlay */}
              <div 
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300',
                  world.bgGradient,
                  isSelected && 'opacity-100',
                  isUnlocked && 'group-hover:opacity-50'
                )}
              />
              
              {/* Coming Soon badge */}
              {world.comingSoon && (
                <div className="absolute top-1 right-1 z-10">
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-primary/20 border border-primary/40">
                    <Clock className="w-2.5 h-2.5 text-primary" />
                    <span className="text-[10px] text-primary font-medium">Soon</span>
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                {isUnlocked ? (
                  <div 
                    className={cn(
                      'p-2 rounded-full transition-all duration-300',
                      isSelected 
                        ? 'bg-primary/20' 
                        : 'bg-muted/50 group-hover:bg-primary/10'
                    )}
                  >
                    <Icon className={cn('w-6 h-6', world.color)} />
                  </div>
                ) : (
                  <div className="p-2 rounded-full bg-muted/50">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              <div className="relative z-10 text-center">
                <span className={cn(
                  'block text-xs font-semibold',
                  isSelected ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {world.name}
                </span>
                {!isUnlocked && !world.comingSoon && (
                  <span className="text-[10px] text-muted-foreground">
                    {world.starsRequired}★
                  </span>
                )}
              </div>
              
              {/* Sparkle effect for selected */}
              {isSelected && (
                <Sparkles 
                  className="absolute -top-1 -right-1 w-4 h-4 text-primary animate-pulse" 
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

interface WorldBadgeProps {
  levelId: number;
  size?: 'sm' | 'md';
}

export const WorldBadge: React.FC<WorldBadgeProps> = ({ levelId, size = 'sm' }) => {
  const world = getWorldForLevel(levelId);
  if (!world) return null;
  
  const Icon = world.icon;
  const sizeClasses = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  
  return (
    <div 
      className={cn('absolute top-2 right-2', world.color)}
      title={world.name}
    >
      <Icon className={sizeClasses} />
    </div>
  );
};
