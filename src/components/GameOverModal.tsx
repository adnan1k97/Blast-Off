import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import { WorldTheme } from '@/data/worldThemes';
import { ModalParticleBurst } from '@/components/ModalParticleBurst';

interface GameOverModalProps {
  onRetry: () => void;
  onMenu: () => void;
  worldTheme?: WorldTheme;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({ onRetry, onMenu, worldTheme }) => {
  const accentColor = worldTheme 
    ? `hsl(${worldTheme.accentHue}, ${worldTheme.accentSat}%, ${worldTheme.accentLight}%)` 
    : undefined;

  // For game over, use a reddish tint blended with the world theme
  const dangerColor = worldTheme
    ? `hsl(${Math.min(worldTheme.accentHue, 20)}, 70%, 50%)`
    : 'hsl(var(--destructive))';

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 animate-in fade-in duration-400"
      style={{
        background: worldTheme 
          ? `linear-gradient(135deg, ${worldTheme.pageBgFrom}ee, hsl(0, 20%, 8%)dd, ${worldTheme.pageBgTo}ee)`
          : undefined,
        backgroundColor: worldTheme ? undefined : 'hsl(var(--background) / 0.9)',
      }}
    >
      <ModalParticleBurst worldTheme={worldTheme} variant="defeat" />
      <div 
        className="relative z-20 rounded-2xl p-8 max-w-md w-full mx-4 text-center animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-500"
        style={{
          background: worldTheme ? worldTheme.cardBg : undefined,
          backgroundColor: worldTheme ? undefined : 'hsl(var(--card))',
          border: worldTheme 
            ? `1px solid hsla(0, 60%, 45%, 0.3)` 
            : '1px solid hsl(var(--destructive) / 0.3)',
          boxShadow: worldTheme 
            ? `0 0 60px hsla(0, 60%, 40%, 0.15), 0 25px 50px -12px rgba(0,0,0,0.5)` 
            : '0 25px 50px -12px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="flex justify-center mb-4">
          <div 
            className="p-4 rounded-full"
            style={{
              background: 'hsla(0, 60%, 45%, 0.2)',
              boxShadow: '0 0 30px hsla(0, 60%, 45%, 0.2)',
            }}
          >
            <AlertTriangle className="w-12 h-12" style={{ color: dangerColor }} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Ball Lost!
        </h2>
        <p className="text-muted-foreground mb-8">
          The ball fell into a hazard. Try again!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={onMenu}
            className="gap-2"
            style={{
              borderColor: worldTheme ? `${accentColor}44` : undefined,
              color: worldTheme ? 'hsl(var(--foreground))' : undefined,
            }}
          >
            <Home className="w-5 h-5" />
            Menu
          </Button>
          
          <Button
            size="lg"
            onClick={onRetry}
            className="gap-2"
            style={{
              background: worldTheme 
                ? `linear-gradient(135deg, ${accentColor}, hsl(${worldTheme.accentHue}, ${worldTheme.accentSat}%, ${worldTheme.accentLight + 10}%))` 
                : undefined,
              color: worldTheme ? '#fff' : undefined,
              boxShadow: worldTheme ? `0 0 20px ${accentColor}44` : undefined,
            }}
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};
