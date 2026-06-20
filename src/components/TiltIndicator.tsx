import React from 'react';
import { Keyboard, MousePointer, Smartphone } from 'lucide-react';

interface TiltIndicatorProps {
  tilt: { x: number; y: number };
  isActive: boolean;
  size?: number;
  controlMode?: 'keyboard' | 'gyroscope';
}

export const TiltIndicator: React.FC<TiltIndicatorProps> = ({ 
  tilt, 
  isActive,
  size = 60,
  controlMode = 'keyboard'
}) => {
  if (!isActive) return null;

  // Calculate indicator position (clamped to circle bounds)
  const maxOffset = (size / 2) - 8; // Leave room for the dot
  const dotX = Math.max(-maxOffset, Math.min(maxOffset, tilt.x * maxOffset));
  const dotY = Math.max(-maxOffset, Math.min(maxOffset, tilt.y * maxOffset));
  
  // Calculate tilt intensity for visual feedback
  const intensity = Math.min(1, Math.sqrt(tilt.x * tilt.x + tilt.y * tilt.y));

  // Control mode icon
  const ControlIcon = controlMode === 'gyroscope' ? Smartphone : 
    (tilt.x === Math.round(tilt.x) && tilt.y === Math.round(tilt.y) && intensity > 0) ? Keyboard : MousePointer;

  return (
    <div 
      className="absolute bottom-4 left-4 z-20 pointer-events-none"
      style={{ width: size, height: size }}
    >
      {/* Outer ring */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm"
        style={{
          boxShadow: intensity > 0.1 
            ? `0 0 ${10 + intensity * 10}px hsl(var(--primary) / ${0.2 + intensity * 0.3})` 
            : 'none'
        }}
      />
      
      {/* Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-full h-px bg-primary/20" />
        <div className="absolute h-full w-px bg-primary/20" />
      </div>
      
      {/* Cardinal direction markers */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] text-primary/40 font-medium">↑</div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-primary/40 font-medium">↓</div>
      <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] text-primary/40 font-medium">←</div>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] text-primary/40 font-medium">→</div>
      
      {/* Tilt indicator dot */}
      <div 
        className="absolute w-4 h-4 rounded-full transition-all duration-75 ease-out"
        style={{
          left: `calc(50% + ${dotX}px - 8px)`,
          top: `calc(50% + ${dotY}px - 8px)`,
          background: intensity > 0.7 
            ? 'hsl(var(--destructive))' 
            : intensity > 0.4 
              ? 'hsl(var(--chart-4))' 
              : 'hsl(var(--primary))',
          boxShadow: `0 0 ${6 + intensity * 8}px ${intensity > 0.7 
            ? 'hsl(var(--destructive) / 0.6)' 
            : 'hsl(var(--primary) / 0.6)'}`,
        }}
      />
      
      {/* Control mode icon and intensity */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-muted-foreground whitespace-nowrap">
        <ControlIcon className="w-3 h-3" />
        <span className="text-[10px] font-mono">{(intensity * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
};
