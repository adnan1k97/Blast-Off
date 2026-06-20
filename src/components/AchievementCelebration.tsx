import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { CustomSparkle } from '@/components/CustomIcons';
import { cn } from '@/lib/utils';
import { CATEGORIES, LevelCategory } from './CategoryFilter';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface AchievementCelebrationProps {
  category: LevelCategory;
  onClose: () => void;
}

const COLORS = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A855F7', '#EC4899', '#22C55E', '#3B82F6'];

export const AchievementCelebration: React.FC<AchievementCelebrationProps> = ({ category, onClose }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const categoryInfo = CATEGORIES.find(c => c.id === category);
  const Icon = categoryInfo?.icon || Trophy;

  // Generate confetti particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(newParticles);
    setIsVisible(true);

    // Play celebration sound
    playCelebrationSound();

    // Auto close after animation
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [onClose]);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.1, // gravity
          rotation: p.rotation + p.rotationSpeed,
        })).filter(p => p.y < window.innerHeight + 50)
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size * 0.6,
              backgroundColor: p.color,
              transform: `rotate(${p.rotation}deg)`,
              borderRadius: '2px',
            }}
          />
        ))}
      </div>

      {/* Achievement Card */}
      <div 
        className={cn(
          'relative z-10 p-8 rounded-2xl bg-card border-2 border-primary shadow-2xl shadow-primary/30',
          'transform transition-all duration-500',
          isVisible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'
        )}
      >
        {/* Sparkle decorations */}
        <CustomSparkle className="absolute -top-3 -left-3 w-6 h-6 text-primary animate-pulse" />
        <CustomSparkle className="absolute -top-3 -right-3 w-6 h-6 text-primary animate-pulse" />
        <CustomSparkle className="absolute -bottom-3 -left-3 w-6 h-6 text-primary animate-pulse" />
        <CustomSparkle className="absolute -bottom-3 -right-3 w-6 h-6 text-primary animate-pulse" />
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center animate-pulse">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Achievement Unlocked!
          </h2>
          <p className="text-lg text-primary font-semibold mb-1">
            {categoryInfo?.name} Master
          </p>
          <p className="text-sm text-muted-foreground">
            All levels completed with 3 stars!
          </p>
          
          <div className="mt-6 flex justify-center gap-1">
            {[1, 2, 3].map(i => (
              <span 
                key={i} 
                className="text-3xl animate-bounce text-primary"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Celebration sound function
function playCelebrationSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Fanfare notes
    const notes = [
      { freq: 523.25, time: 0, duration: 0.12 },     // C5
      { freq: 659.25, time: 0.1, duration: 0.12 },   // E5
      { freq: 783.99, time: 0.2, duration: 0.12 },   // G5
      { freq: 1046.50, time: 0.3, duration: 0.25 },  // C6
      { freq: 783.99, time: 0.5, duration: 0.12 },   // G5
      { freq: 880.00, time: 0.6, duration: 0.12 },   // A5
      { freq: 987.77, time: 0.7, duration: 0.12 },   // B5
      { freq: 1046.50, time: 0.8, duration: 0.5 },   // C6 (hold)
    ];

    notes.forEach(({ freq, time, duration }) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'triangle';
      oscillator.frequency.value = freq;

      gainNode.gain.value = 0;
      gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + time + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime + time);
      oscillator.stop(ctx.currentTime + time + duration + 0.1);
    });

    // Add shimmer effect
    for (let i = 0; i < 5; i++) {
      const shimmer = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      
      shimmer.type = 'sine';
      shimmer.frequency.value = 2000 + Math.random() * 1000;
      
      shimmerGain.gain.value = 0.03;
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1 + i * 0.1);
      
      shimmer.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      
      shimmer.start(ctx.currentTime + i * 0.15);
      shimmer.stop(ctx.currentTime + 1.5);
    }
  } catch (e) {
    console.log('Audio not available');
  }
}
