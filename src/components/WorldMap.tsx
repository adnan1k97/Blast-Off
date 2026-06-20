import React, { useMemo } from 'react';
import { Lock, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WORLDS, World } from '@/components/WorldSelector';
import { LevelProgress } from '@/types/game';
import { levels } from '@/data/levels';
import { useIsMobile } from '@/hooks/use-mobile';

interface WorldMapProps {
  selectedWorld: string;
  onWorldChange: (worldId: string) => void;
  totalStars: number;
  progress: Record<number, LevelProgress>;
}

interface WorldStats {
  starsEarned: number;
  maxStars: number;
  levelsCompleted: number;
  totalLevels: number;
  completionPercent: number;
}

const getWorldStats = (world: World, progress: Record<number, LevelProgress>): WorldStats => {
  const worldLevels = levels.filter(
    l => l.id >= world.levelRange[0] && l.id <= world.levelRange[1]
  );
  
  let starsEarned = 0;
  let levelsCompleted = 0;
  
  for (const level of worldLevels) {
    const p = progress[level.id];
    if (p) {
      starsEarned += p.stars || 0;
      if (p.completed) levelsCompleted++;
    }
  }
  
  const totalLevels = world.levelRange[1] - world.levelRange[0] + 1;
  const maxStars = totalLevels * 3;
  const completionPercent = totalLevels > 0 ? Math.round((levelsCompleted / totalLevels) * 100) : 0;
  
  return { starsEarned, maxStars, levelsCompleted, totalLevels, completionPercent };
};

// Fantasy terrain colors for each world
const getTerrainStyle = (world: World) => {
  const styles: Record<string, { bg: string; border: string; glow: string }> = {
    'techlab': {
      bg: 'from-amber-900 via-stone-800/50 to-slate-900',
      border: 'border-amber-500/50',
      glow: 'shadow-amber-500/30',
    },
    'sunken-temple': {
      bg: 'from-teal-900 via-cyan-800/50 to-slate-900',
      border: 'border-teal-400/50',
      glow: 'shadow-teal-400/30',
    },
    'sky-fortress': {
      bg: 'from-sky-900 via-indigo-800/50 to-slate-900',
      border: 'border-sky-400/50',
      glow: 'shadow-sky-400/30',
    },
    'volcanic-core': {
      bg: 'from-orange-900 via-red-800/50 to-slate-900',
      border: 'border-orange-500/50',
      glow: 'shadow-orange-500/30',
    },
    'frozen-fortress': {
      bg: 'from-cyan-800 via-blue-700/50 to-slate-900',
      border: 'border-cyan-300/50',
      glow: 'shadow-cyan-300/30',
    },
    'dimension-nexus': {
      bg: 'from-purple-900 via-pink-800/50 to-slate-900',
      border: 'border-purple-400/50',
      glow: 'shadow-purple-400/30',
    },
  };
  return styles[world.id] || styles['techlab'];
};

import { TerrainIllustration } from './WorldTerrainIllustrations';

export const WorldMap: React.FC<WorldMapProps> = ({
  selectedWorld,
  onWorldChange,
  totalStars,
  progress,
}) => {
  const isMobile = useIsMobile();
  
  const worldsWithStats = useMemo(() => {
    return WORLDS.map(world => ({
      world,
      stats: getWorldStats(world, progress),
      isUnlocked: true, // TODO: revert to: totalStars >= world.starsRequired && !world.comingSoon,
    }));
  }, [progress, totalStars]);

  return (
    <div className="px-4 py-6">
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      <h3 className="text-sm font-medium text-muted-foreground mb-4 px-2">World Map</h3>
      
      {/* Map Container */}
      <div 
        className="relative rounded-2xl overflow-hidden p-4"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--metal) / 0.8) 0%, hsl(var(--background)) 100%)',
          border: '1px solid hsl(var(--metal-shine) / 0.3)',
        }}
      >
        {/* Fantasy terrain background texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* SVG Connecting Paths */}
        <svg 
          className={cn(
            "absolute inset-0 w-full h-full pointer-events-none",
            isMobile ? "hidden" : "block"
          )}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathGradientUnlocked" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--neon-glow))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--neon))" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="pathGradientLocked" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* World Nodes Grid */}
        <div className={cn(
          "relative z-10 grid gap-4",
          isMobile 
            ? "grid-cols-2" 
            : "grid-cols-3 md:grid-cols-6"
        )}>
          {worldsWithStats.map(({ world, stats, isUnlocked }, index) => {
            const isSelected = selectedWorld === world.id;
            const Icon = world.icon;
            const terrain = getTerrainStyle(world);
            const prevUnlocked = index === 0 || worldsWithStats[index - 1].isUnlocked;
            
            return (
              <div key={world.id} className="relative">
                {/* Connecting line to next world (desktop) */}
                {index < WORLDS.length - 1 && !isMobile && (
                  <div 
                    className={cn(
                      "absolute top-1/2 -right-4 w-4 h-0.5 -translate-y-1/2 z-0",
                      isUnlocked 
                        ? "bg-gradient-to-r from-primary/60 to-primary/30"
                        : "bg-muted/30"
                    )}
                    style={isUnlocked ? {
                      boxShadow: '0 0 8px hsl(var(--neon) / 0.5)',
                    } : undefined}
                  />
                )}
                
                {/* World Node */}
                <button
                  onClick={() => isUnlocked && onWorldChange(world.id)}
                  disabled={!isUnlocked}
                  className={cn(
                    'relative w-full flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300',
                    'border-2 overflow-hidden group',
                    isUnlocked
                      ? isSelected
                        ? `border-primary bg-gradient-to-br ${terrain.bg} shadow-lg ${terrain.glow}`
                        : `border-border/50 bg-gradient-to-br ${terrain.bg} hover:border-primary/50 hover:scale-105`
                      : 'border-muted/30 bg-muted/20 cursor-not-allowed opacity-50'
                  )}
                >
                  {/* Illustrated terrain background */}
                  <TerrainIllustration worldId={world.id} />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[1]" />
                  
                  {/* Coming Soon badge */}
                  {world.comingSoon && (
                    <div className="absolute top-1 right-1 z-20">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-background/80 border border-muted">
                        <Clock className="w-2.5 h-2.5 text-muted-foreground" />
                        <span className="text-[9px] text-muted-foreground font-medium">Soon</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Star requirement for locked worlds */}
                  {!isUnlocked && !world.comingSoon && (
                    <div className="absolute top-1 right-1 z-20">
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-background/80 border border-primary/30">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="none">
                          <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z" fill="hsl(var(--primary))" />
                        </svg>
                        <span className="text-[9px] text-primary font-bold">{world.starsRequired}</span>
                      </div>
                    </div>
                  )}

                  {/* World Icon */}
                  <div 
                    className={cn(
                      'relative z-10 p-3 rounded-full transition-all duration-300',
                      isUnlocked
                        ? isSelected 
                          ? 'bg-primary/30 ring-2 ring-primary/50' 
                          : 'bg-muted/30 group-hover:bg-primary/20'
                        : 'bg-muted/20'
                    )}
                    style={isUnlocked ? {
                      animation: `floating ${3 + index * 0.4}s ease-in-out infinite`,
                    } : undefined}
                  >
                    {isUnlocked ? (
                      <Icon className={cn('w-6 h-6', world.color)} />
                    ) : (
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    )}
                    
                    {/* Active indicator for selected */}
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary/80 ring-2 ring-primary/40 animate-pulse" />
                    )}
                  </div>

                  {/* World Name */}
                  <span className={cn(
                    'relative z-10 text-xs font-bold text-center leading-tight drop-shadow-md',
                    isSelected ? 'text-foreground' : 'text-foreground/90'
                  )} style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    {world.name}
                  </span>

                  {/* Progress Stats (only for unlocked worlds) */}
                  {/* Star count - top right of card */}
                  {isUnlocked && (
                    <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 z-20 px-1.5 py-0.5 rounded-full bg-background/60">
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2L9.5 6.5H14L10.5 9.5L11.5 14L8 11L4.5 14L5.5 9.5L2 6.5H6.5L8 2Z" fill="hsl(var(--primary))" />
                      </svg>
                      <span className="text-[10px] text-foreground font-mono">
                        {stats.starsEarned}/{stats.maxStars}
                      </span>
                    </div>
                  )}

                  {isUnlocked && (
                    <div className="relative z-10 w-full">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                          {stats.levelsCompleted}/{stats.totalLevels}
                        </span>
                        <div className="flex-1 h-2 rounded-full bg-muted/30 overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${stats.completionPercent}%`,
                              background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--neon-glow)) 100%)',
                              boxShadow: stats.completionPercent > 0 ? '0 0 6px hsl(var(--neon) / 0.5)' : 'none',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </button>

                {/* Connecting line below (mobile only) */}
                {index < WORLDS.length - 1 && isMobile && index % 2 === 1 && (
                  <div 
                    className={cn(
                      "absolute -bottom-4 left-1/2 w-0.5 h-4 -translate-x-1/2",
                      worldsWithStats[index + 1]?.isUnlocked || isUnlocked
                        ? "bg-gradient-to-b from-primary/60 to-primary/30"
                        : "bg-muted/30"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
        
        {/* Map Legend */}
        <div className="mt-4 pt-3 border-t border-muted/20 flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary/50 ring-1 ring-primary" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-muted/30" />
            <span>Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            <span>Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
