import React, { useState } from 'react';
import { Lock, Zap, Droplets, Wind, Flame, Snowflake } from 'lucide-react';
import { CustomSparkle } from '@/components/CustomIcons';
import { getWorldForLevel } from '@/components/WorldSelector';
import { StarRating } from '@/components/StarRating';
import { LevelCategoryBadge } from '@/components/CategoryFilter';
import { Level, LevelProgress, GameMode } from '@/types/game';

// Theme config per world
interface WorldTheme {
  accentHsl: string;
  bgGradient: string;
  bgLocked: string;
  glowColor: string;
  highlightGradient: string;
  borderColor: string;
  shadowHover: string;
  shadowDefault: string;
  hoverSymbol: React.ReactNode;
}

const getWorldTheme = (worldId?: string): WorldTheme | null => {
  switch (worldId) {
    case 'techlab': return {
      accentHsl: '40, 80%, 55%',
      bgGradient: 'linear-gradient(145deg, hsl(30, 20%, 18%) 0%, hsl(25, 15%, 12%) 50%, hsl(35, 20%, 16%) 100%)',
      bgLocked: 'hsl(25, 15%, 10%)',
      glowColor: 'hsl(40, 80%, 50% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(40, 40%, 30% / 0.2) 0%, transparent 50%)',
      borderColor: 'hsl(40, 70%, 50% / 0.5)',
      shadowHover: '0 0 30px hsl(40, 80%, 50% / 0.4), inset 0 1px 0 hsl(40, 60%, 40% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(40, 30%, 30% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <CustomSparkle className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(40, 80%, 60%)', filter: 'drop-shadow(0 0 4px hsl(40, 80%, 50%))' }} />,
    };
    case 'sunken-temple': return {
      accentHsl: '190, 80%, 55%',
      bgGradient: 'linear-gradient(145deg, hsl(200, 35%, 16%) 0%, hsl(210, 40%, 10%) 50%, hsl(195, 30%, 14%) 100%)',
      bgLocked: 'hsl(210, 35%, 8%)',
      glowColor: 'hsl(190, 80%, 55% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(190, 50%, 30% / 0.2) 0%, transparent 50%)',
      borderColor: 'hsl(190, 70%, 50% / 0.5)',
      shadowHover: '0 0 30px hsl(190, 80%, 50% / 0.4), inset 0 1px 0 hsl(190, 60%, 40% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(190, 30%, 30% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <Droplets className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(190, 80%, 60%)', filter: 'drop-shadow(0 0 4px hsl(190, 80%, 50%))' }} />,
    };
    case 'sky-fortress': return {
      accentHsl: '210, 70%, 65%',
      bgGradient: 'linear-gradient(145deg, hsl(215, 30%, 20%) 0%, hsl(220, 35%, 14%) 50%, hsl(210, 25%, 18%) 100%)',
      bgLocked: 'hsl(220, 30%, 10%)',
      glowColor: 'hsl(210, 70%, 60% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(210, 40%, 40% / 0.2) 0%, transparent 50%)',
      borderColor: 'hsl(210, 60%, 55% / 0.5)',
      shadowHover: '0 0 30px hsl(210, 70%, 55% / 0.4), inset 0 1px 0 hsl(210, 50%, 45% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(210, 25%, 35% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <Wind className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(210, 70%, 70%)', filter: 'drop-shadow(0 0 4px hsl(210, 70%, 55%))' }} />,
    };
    case 'volcanic-core': return {
      accentHsl: '20, 90%, 50%',
      bgGradient: 'linear-gradient(145deg, hsl(10, 30%, 16%) 0%, hsl(5, 25%, 10%) 50%, hsl(15, 35%, 14%) 100%)',
      bgLocked: 'hsl(5, 20%, 8%)',
      glowColor: 'hsl(20, 90%, 50% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(25, 50%, 30% / 0.25) 0%, transparent 50%)',
      borderColor: 'hsl(20, 80%, 50% / 0.5)',
      shadowHover: '0 0 30px hsl(20, 90%, 50% / 0.5), inset 0 1px 0 hsl(25, 70%, 40% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(15, 30%, 25% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <Flame className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(25, 95%, 55%)', filter: 'drop-shadow(0 0 4px hsl(20, 90%, 50%))' }} />,
    };
    case 'frozen-fortress': return {
      accentHsl: '195, 80%, 65%',
      bgGradient: 'linear-gradient(145deg, hsl(205, 35%, 18%) 0%, hsl(210, 40%, 12%) 50%, hsl(200, 30%, 16%) 100%)',
      bgLocked: 'hsl(210, 35%, 9%)',
      glowColor: 'hsl(195, 80%, 65% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(195, 50%, 40% / 0.2) 0%, transparent 50%)',
      borderColor: 'hsl(195, 70%, 60% / 0.5)',
      shadowHover: '0 0 30px hsl(195, 80%, 60% / 0.4), inset 0 1px 0 hsl(200, 60%, 50% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(200, 25%, 35% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <Snowflake className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(195, 80%, 75%)', filter: 'drop-shadow(0 0 4px hsl(195, 80%, 60%))' }} />,
    };
    case 'dimension-nexus': return {
      accentHsl: '280, 70%, 60%',
      bgGradient: 'linear-gradient(145deg, hsl(275, 30%, 16%) 0%, hsl(280, 25%, 10%) 50%, hsl(290, 30%, 14%) 100%)',
      bgLocked: 'hsl(280, 20%, 8%)',
      glowColor: 'hsl(280, 70%, 55% / 0.4)',
      highlightGradient: 'linear-gradient(135deg, hsl(280, 40%, 35% / 0.2) 0%, transparent 50%)',
      borderColor: 'hsl(280, 60%, 55% / 0.5)',
      shadowHover: '0 0 30px hsl(280, 70%, 55% / 0.5), inset 0 1px 0 hsl(290, 50%, 45% / 0.3)',
      shadowDefault: 'inset 0 1px 0 hsl(275, 25%, 30% / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)',
      hoverSymbol: <CustomSparkle className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(290, 80%, 70%)', filter: 'drop-shadow(0 0 4px hsl(280, 70%, 55%))' }} />,
    };
    default: return null;
  }
};

interface LevelCardProps {
  level: Level;
  levelProgress?: LevelProgress;
  unlocked: boolean;
  gameMode: GameMode;
  onClick: () => void;
  index: number;
  gridIndex: number;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  levelProgress,
  unlocked,
  gameMode,
  onClick,
  index,
  gridIndex,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isCompleted = levelProgress?.completed;
  const world = getWorldForLevel(level.id);
  const theme = getWorldTheme(world?.id);

  // Fallback to default electromagnetic styling
  const accent = theme ? `hsl(${theme.accentHsl})` : 'hsl(var(--neon))';
  const bg = theme
    ? (unlocked ? theme.bgGradient : theme.bgLocked)
    : (unlocked ? 'linear-gradient(145deg, hsl(var(--metal-highlight)) 0%, hsl(var(--metal)) 50%, hsl(var(--metal-highlight) / 0.5) 100%)' : 'hsl(var(--metal))');
  const glow = theme?.glowColor ?? 'hsl(var(--neon) / 0.4)';
  const highlight = theme?.highlightGradient ?? 'linear-gradient(135deg, hsl(var(--metal-shine) / 0.15) 0%, transparent 50%)';
  const border = theme?.borderColor ?? 'hsl(var(--neon) / 0.6)';
  const shadowH = theme?.shadowHover ?? '0 0 30px hsl(var(--neon) / 0.5), inset 0 1px 0 hsl(var(--metal-shine) / 0.3)';
  const shadowD = theme?.shadowDefault ?? 'inset 0 1px 0 hsl(var(--metal-shine) / 0.2), 0 4px 20px hsl(0 0% 0% / 0.4)';

  return (
    <button
      onClick={() => unlocked && onClick()}
      disabled={!unlocked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ animationDelay: `${index * 50}ms` }}
      data-level-index={gridIndex}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-500 ${unlocked ? 'group-hover:opacity-100' : ''}`}
        style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`, filter: 'blur(8px)' }}
      />

      {/* Card body */}
      <div
        className={`relative overflow-hidden p-5 transition-all duration-500 ease-out ${unlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-40'} ${isHovered && unlocked ? 'scale-105' : 'scale-100'}`}
        style={{
          background: bg,
          borderRadius: isHovered && unlocked ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '24px',
          boxShadow: unlocked && isHovered ? shadowH : shadowD,
          animation: isHovered && unlocked ? 'ferrofluid 4s ease-in-out infinite' : 'none',
        }}
      >
        {/* Glossy highlight */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: highlight, borderRadius: 'inherit' }} />

        {/* Border accent */}
        {unlocked && (
          <div
            className={`absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
            style={{ border: `1px solid ${border}`, animation: isHovered ? 'electric-pulse 1.5s ease-in-out infinite' : 'none' }}
          />
        )}

        {/* Category Icon Badge */}
        <div className="absolute top-2 right-2 z-10">
          <LevelCategoryBadge category={level.category} />
        </div>

        {/* Lock overlay */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-metal/80 backdrop-blur-sm z-20">
            <div className="p-3 rounded-full bg-metal-highlight border border-metal-shine/20">
              <Lock className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Level content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Level number */}
          <div
            className="relative text-4xl font-bold mb-1 transition-all duration-300"
            style={{
              color: unlocked ? accent : 'hsl(var(--muted-foreground))',
              textShadow: unlocked && isHovered ? `0 0 20px ${accent}, 0 0 40px ${accent}80` : 'none',
            }}
          >
            {level.id}
            {unlocked && isHovered && (
              theme?.hoverSymbol ?? (
                <Zap className="absolute -right-3 -top-1 w-4 h-4 animate-pulse" style={{ color: 'hsl(var(--neon))', filter: 'drop-shadow(0 0 4px currentColor)' }} />
              )
            )}
          </div>

          {/* Level name */}
          <div
            className="text-xs text-muted-foreground mb-3 truncate max-w-full transition-colors duration-300"
            style={{ color: isHovered && unlocked ? 'hsl(var(--foreground))' : undefined }}
          >
            {level.name}
          </div>

          {/* Star rating */}
          <div className="flex justify-center">
            <StarRating stars={levelProgress?.stars || 0} size="sm" />
          </div>

          {/* Best time */}
          {levelProgress?.bestTime && (
            <div
              className="text-xs font-mono mt-2 transition-colors duration-300"
              style={{ color: isHovered ? accent : 'hsl(var(--muted-foreground))' }}
            >
              {levelProgress.bestTime.toFixed(1)}s
            </div>
          )}
        </div>

        {/* Completed indicator */}
        {isCompleted && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
            style={{
              background: accent,
              boxShadow: `0 0 10px ${accent}, 0 0 20px ${accent}80`,
            }}
          />
        )}
      </div>
    </button>
  );
};
