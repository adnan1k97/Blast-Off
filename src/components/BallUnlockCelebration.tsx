import React, { useEffect, useRef, useState } from 'react';
import { BallSkin } from '@/types/shop';
import { getRarityColor } from '@/data/balls';
import BallPreview from './BallPreview';
import { CustomSparkle } from '@/components/CustomIcons';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  type: 'spark' | 'star' | 'ring';
  rotation: number;
  rotationSpeed: number;
}

interface BallUnlockCelebrationProps {
  ball: BallSkin;
  onComplete: () => void;
}

const BallUnlockCelebration: React.FC<BallUnlockCelebrationProps> = ({ ball, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [showBall, setShowBall] = useState(false);
  const [showText, setShowText] = useState(false);

  const parseHsl = (hslString: string) => {
    const parts = hslString.split(' ');
    return {
      h: parseFloat(parts[0]) || 0,
      s: parseFloat(parts[1]) || 100,
      l: parseFloat(parts[2]) || 50
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create initial burst particles
    const createBurst = () => {
      const colors = ball.colors.map(c => {
        const hsl = parseHsl(c);
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
      });
      
      const rarityHsl = parseHsl(getRarityColor(ball.rarity));
      const rarityColor = `hsl(${rarityHsl.h}, ${rarityHsl.s}%, ${rarityHsl.l}%)`;

      // Spark particles
      for (let i = 0; i < 60; i++) {
        const angle = (Math.PI * 2 * i) / 60 + Math.random() * 0.3;
        const speed = 3 + Math.random() * 6;
        particlesRef.current.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.015 + Math.random() * 0.01,
          type: 'spark',
          rotation: 0,
          rotationSpeed: 0
        });
      }

      // Star particles
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        particlesRef.current.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 8 + Math.random() * 8,
          color: rarityColor,
          alpha: 1,
          decay: 0.012 + Math.random() * 0.008,
          type: 'star',
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2
        });
      }

      // Ring particles
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: centerX,
          y: centerY,
          vx: 0,
          vy: 0,
          size: 20 + i * 30,
          color: colors[i % colors.length],
          alpha: 0.8,
          decay: 0.02,
          type: 'ring',
          rotation: 0,
          rotationSpeed: 0
        });
      }
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const innerAngle = angle + Math.PI / 5;
        if (i === 0) {
          ctx.moveTo(Math.cos(angle) * size, Math.sin(angle) * size);
        } else {
          ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
        }
        ctx.lineTo(Math.cos(innerAngle) * size * 0.4, Math.sin(innerAngle) * size * 0.4);
      }
      ctx.closePath();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(p => p.alpha > 0);

      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.vx *= 0.99;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        if (p.type === 'ring') {
          p.size += 4;
        }

        ctx.globalAlpha = Math.max(0, p.alpha);

        if (p.type === 'spark') {
          // Draw spark with glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(0.5, p.color.replace(')', ', 0.5)').replace('hsl', 'hsla'));
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star') {
          ctx.fillStyle = p.color;
          drawStar(ctx, p.x, p.y, p.size, p.rotation);
          ctx.fill();
        } else if (p.type === 'ring') {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(centerX, centerY, p.size, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;

      if (particlesRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Start animation sequence
    setTimeout(() => {
      createBurst();
      animate();
      setShowBall(true);
    }, 100);

    setTimeout(() => setShowText(true), 400);
    setTimeout(() => onComplete(), 2500);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ball, onComplete]);

  const rarityHsl = getRarityColor(ball.rarity);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="absolute pointer-events-none"
      />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* Ball reveal */}
        <div className={cn(
          "relative transition-all duration-500",
          showBall ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}>
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-2xl opacity-60 animate-pulse"
            style={{ 
              background: `hsl(${ball.colors[0]})`,
              transform: 'scale(1.5)'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-40"
            style={{ 
              background: `hsl(${rarityHsl})`,
              transform: 'scale(2)'
            }}
          />
          
          <BallPreview ball={ball} size={120} animated />
        </div>

        {/* Text reveal */}
        <div className={cn(
          "flex flex-col items-center gap-2 transition-all duration-500",
          showText ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          <div className="flex items-center gap-2 text-primary">
            <CustomSparkle className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-widest">Unlocked</span>
            <CustomSparkle className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-bold">{ball.name}</h2>
          <div 
            className="px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ 
              background: `hsl(${rarityHsl} / 0.2)`,
              color: `hsl(${rarityHsl})`,
              border: `1px solid hsl(${rarityHsl} / 0.3)`
            }}
          >
            {ball.rarity.charAt(0).toUpperCase() + ball.rarity.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallUnlockCelebration;
