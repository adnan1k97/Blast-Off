import React from 'react';
import { Star } from 'lucide-react';

interface StarThresholdBarProps {
  elapsedTime: number;
  threeStarTime: number;
  twoStarTime: number;
  hasFalls: boolean;
  accentColor?: string;
}

export const StarThresholdBar: React.FC<StarThresholdBarProps> = ({
  elapsedTime,
  threeStarTime,
  twoStarTime,
  hasFalls,
}) => {
  const currentStars = hasFalls ? 1 : elapsedTime <= threeStarTime ? 3 : elapsedTime <= twoStarTime ? 2 : 1;
  const progress = Math.min(elapsedTime / twoStarTime, 1);

  // Warning: ≤3s before losing a star
  const timeLeft = hasFalls
    ? 0
    : currentStars === 3
    ? Math.max(0, threeStarTime - elapsedTime)
    : currentStars === 2
    ? Math.max(0, twoStarTime - elapsedTime)
    : 0;
  const isWarning = !hasFalls && timeLeft > 0 && timeLeft <= 3;

  const barColor =
    currentStars === 3
      ? '#fbbf24'
      : currentStars === 2
      ? '#9ca3af'
      : '#f87171';

  return (
    <div className="w-full max-w-[600px] mx-auto px-4 flex items-center gap-2">
      {/* Stars */}
      <div className="flex items-center gap-0.5 shrink-0">
        {[3, 2, 1].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              currentStars >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-muted text-muted-foreground/30'
            }`}
            style={
              isWarning && star === currentStars
                ? { animation: 'star-warn 0.6s ease-in-out infinite' }
                : undefined
            }
          />
        ))}
      </div>

      {/* Bar */}
      <div
        className="flex-1 h-1.5 rounded-full bg-muted/30 overflow-hidden"
        style={isWarning ? { animation: 'bar-warn 0.5s ease-in-out infinite' } : undefined}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${(1 - progress) * 100}%`,
            backgroundColor: barColor,
            boxShadow: currentStars === 3 ? '0 0 8px rgba(251,191,36,0.5)' : 'none',
          }}
        />
      </div>

      {/* Countdown (only when warning) */}
      {isWarning && (
        <span className="text-[11px] font-mono font-bold text-red-400 shrink-0 tabular-nums"
          style={{ animation: 'star-warn 0.5s ease-in-out infinite' }}
        >
          {Math.ceil(timeLeft)}s
        </span>
      )}

      <style>{`
        @keyframes star-warn {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @keyframes bar-warn {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};
