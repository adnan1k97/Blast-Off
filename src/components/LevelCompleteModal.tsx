import React from 'react';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/StarRating';
import { Trophy, RotateCcw, ArrowRight, Clock, Coins } from 'lucide-react';
import { WorldTheme } from '@/data/worldThemes';
import { ModalParticleBurst } from '@/components/ModalParticleBurst';

interface LevelCompleteModalProps {
  stars: number;
  time: number;
  levelName: string;
  onRetry: () => void;
  onNextLevel: () => void;
  hasNextLevel: boolean;
  score?: number;
  collected?: number;
  totalCollectibles?: number;
  worldTheme?: WorldTheme;
}

export const LevelCompleteModal: React.FC<LevelCompleteModalProps> = ({
  stars,
  time,
  levelName,
  onRetry,
  onNextLevel,
  hasNextLevel,
  score = 0,
  collected = 0,
  totalCollectibles = 0,
  worldTheme,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return mins > 0 
      ? `${mins}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`
      : `${secs}.${ms.toString().padStart(2, '0')}s`;
  };

  const accentColor = worldTheme 
    ? `hsl(${worldTheme.accentHue}, ${worldTheme.accentSat}%, ${worldTheme.accentLight}%)` 
    : undefined;
  const accentGlow = worldTheme
    ? `hsl(${worldTheme.accentHue}, ${worldTheme.accentSat}%, ${worldTheme.accentLight + 15}%)`
    : undefined;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 animate-in fade-in duration-400"
      style={{
        background: worldTheme 
          ? `linear-gradient(135deg, ${worldTheme.pageBgFrom}ee, ${worldTheme.pageBgVia}dd, ${worldTheme.pageBgTo}ee)`
          : undefined,
        backgroundColor: worldTheme ? undefined : 'hsl(var(--background) / 0.9)',
      }}
    >
      <ModalParticleBurst worldTheme={worldTheme} variant="victory" />
      <div 
        className="relative z-20 rounded-2xl p-8 max-w-md w-full mx-4 text-center animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-500"
        style={{
          background: worldTheme ? worldTheme.cardBg : undefined,
          backgroundColor: worldTheme ? undefined : 'hsl(var(--card))',
          border: worldTheme 
            ? `1px solid ${accentColor}44` 
            : '1px solid hsl(var(--border))',
          boxShadow: worldTheme 
            ? `0 0 60px ${accentColor}22, 0 25px 50px -12px rgba(0,0,0,0.5)` 
            : '0 25px 50px -12px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex justify-center mb-4">
          <div 
            className="p-4 rounded-full"
            style={{
              background: worldTheme ? `${accentColor}22` : undefined,
              boxShadow: worldTheme ? `0 0 30px ${accentColor}33` : undefined,
            }}
          >
            <Trophy 
              className="w-12 h-12" 
              style={{ color: accentColor || 'hsl(var(--accent))' }}
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Level Complete!
        </h2>
        <p className="text-muted-foreground mb-2">{levelName}</p>
        
        <div className="flex justify-center mb-6">
          <StarRating stars={stars} size="lg" />
        </div>
        
        <div className="flex items-center justify-center gap-6 mb-8 mt-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" style={{ color: accentGlow }} />
            <span className="text-lg font-mono">{formatTime(time)}</span>
          </div>
          
          {totalCollectibles > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Coins className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-mono">
                {collected}/{totalCollectibles}
                {score > 0 && (
                  <span className="ml-1" style={{ color: accentColor }}>
                    (+{score})
                  </span>
                )}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onRetry}
            className="gap-2"
            style={{
              borderColor: worldTheme ? `${accentColor}44` : undefined,
              color: worldTheme ? 'hsl(var(--foreground))' : undefined,
            }}
          >
            <RotateCcw className="w-5 h-5" />
            Retry
          </Button>
          
          {hasNextLevel && (
            <Button
              size="lg"
              onClick={onNextLevel}
              className="gap-2"
              style={{
                background: worldTheme 
                  ? `linear-gradient(135deg, ${accentColor}, ${accentGlow})` 
                  : undefined,
                color: worldTheme ? '#fff' : undefined,
                boxShadow: worldTheme ? `0 0 20px ${accentColor}44` : undefined,
              }}
            >
              Next Level
              <ArrowRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
