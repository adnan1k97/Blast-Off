import React, { useRef, useEffect } from 'react';
import { BallSkin } from '@/types/shop';

interface BallPreviewProps {
  ball: BallSkin;
  size?: number;
  animated?: boolean;
}

const BallPreview: React.FC<BallPreviewProps> = ({ ball, size = 60, animated = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.38;

    const parseHSL = (hsl: string): { h: number; s: number; l: number } => {
      const parts = hsl.split(' ').map(p => parseFloat(p));
      return { h: parts[0], s: parts[1], l: parts[2] };
    };

    const hslToString = (h: number, s: number, l: number, a: number = 1): string => {
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    };

    let ballImg: HTMLImageElement | null = null;

    const drawBall = (time: number) => {
      ctx.clearRect(0, 0, size, size);
      
      const colors = ball.colors.map(parseHSL);
      const sparkHsl = parseHSL(ball.sparkColor);

      // Image-based ball
      if (ball.pattern === 'image' && ballImg && ballImg.complete) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        const rotAngle = animated ? time * 0.001 : 0;
        ctx.translate(centerX, centerY);
        ctx.rotate(rotAngle);
        ctx.drawImage(ballImg, -radius, -radius, radius * 2, radius * 2);
        ctx.restore();

        const hl = ctx.createRadialGradient(
          centerX - radius * 0.3, centerY - radius * 0.3, 0,
          centerX, centerY, radius
        );
        hl.addColorStop(0, 'rgba(255,255,255,0.25)');
        hl.addColorStop(0.4, 'rgba(255,255,255,0.05)');
        hl.addColorStop(1, 'rgba(0,0,0,0.1)');
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = hl;
        ctx.fill();
      } else if (ball.pattern !== 'image') {
        let gradient: CanvasGradient;
        
        switch (ball.pattern) {
          case 'radial':
            gradient = ctx.createRadialGradient(
              centerX - radius * 0.3, centerY - radius * 0.3, 0,
              centerX, centerY, radius
            );
            colors.forEach((c, i) => {
              gradient.addColorStop(i / Math.max(colors.length - 1, 1), hslToString(c.h, c.s, c.l));
            });
            break;
          case 'spiral':
            const angle = time * 0.002;
            gradient = ctx.createConicGradient(angle, centerX, centerY);
            colors.forEach((c, i) => {
              const stop = i / colors.length;
              gradient.addColorStop(stop, hslToString(c.h, c.s, c.l));
            });
            gradient.addColorStop(1, hslToString(colors[0].h, colors[0].s, colors[0].l));
            break;
          case 'pulse':
            const pulsePhase = Math.sin(time * 0.004) * 0.5 + 0.5;
            gradient = ctx.createRadialGradient(
              centerX, centerY, radius * pulsePhase * 0.3,
              centerX, centerY, radius
            );
            colors.forEach((c, i) => {
              const lightness = c.l + Math.sin(time * 0.003 + i) * 10;
              gradient.addColorStop(i / Math.max(colors.length - 1, 1), hslToString(c.h, c.s, lightness));
            });
            break;
          case 'stripes':
            gradient = ctx.createLinearGradient(
              centerX - radius, centerY - radius,
              centerX + radius, centerY + radius
            );
            const stripeCount = colors.length * 2;
            for (let i = 0; i < stripeCount; i++) {
              const color = colors[i % colors.length];
              gradient.addColorStop(i / stripeCount, hslToString(color.h, color.s, color.l));
            }
            break;
          default:
            gradient = ctx.createLinearGradient(
              centerX - radius, centerY - radius,
              centerX + radius, centerY + radius
            );
            colors.forEach((c, i) => {
              gradient.addColorStop(i / Math.max(colors.length - 1, 1), hslToString(c.h, c.s, c.l));
            });
        }

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        const highlightGradient = ctx.createRadialGradient(
          centerX - radius * 0.3, centerY - radius * 0.3, 0,
          centerX, centerY, radius
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        highlightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
        highlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = highlightGradient;
        ctx.fill();
      }

      // Draw sparks if animated
      if (animated) {
        const sparkCount = ball.rarity === 'legendary' ? 8 : 
                          ball.rarity === 'epic' ? 6 : 
                          ball.rarity === 'rare' ? 4 : 3;
        
        for (let i = 0; i < sparkCount; i++) {
          const sparkAngle = (time * 0.003 + (i * Math.PI * 2) / sparkCount);
          const sparkDist = radius * (0.7 + Math.sin(time * 0.005 + i * 1.5) * 0.4);
          const sparkX = centerX + Math.cos(sparkAngle) * sparkDist;
          const sparkY = centerY + Math.sin(sparkAngle) * sparkDist;
          const sparkSize = (2 + Math.sin(time * 0.008 + i) * 1.5) * (size / 60);
          const sparkAlpha = 0.5 + Math.sin(time * 0.006 + i * 2) * 0.4;

          const sparkGlow = ctx.createRadialGradient(sparkX, sparkY, 0, sparkX, sparkY, sparkSize * 3);
          sparkGlow.addColorStop(0, hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, sparkAlpha));
          sparkGlow.addColorStop(1, hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, 0));
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, sparkSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = sparkGlow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(sparkX, sparkY, sparkSize, 0, Math.PI * 2);
          ctx.fillStyle = hslToString(sparkHsl.h, sparkHsl.s, Math.min(sparkHsl.l + 20, 100), sparkAlpha + 0.3);
          ctx.fill();
        }

        if (ball.rarity === 'legendary' || ball.rarity === 'epic') {
          for (let i = 0; i < 4; i++) {
            const twinkleAngle = time * 0.002 + i * Math.PI / 2;
            const twinkleDist = radius * 1.1;
            const twinkleX = centerX + Math.cos(twinkleAngle) * twinkleDist;
            const twinkleY = centerY + Math.sin(twinkleAngle) * twinkleDist;
            const twinkleSize = (1 + Math.sin(time * 0.01 + i * 3) * 0.8) * (size / 60);
            const twinkleAlpha = Math.max(0, Math.sin(time * 0.007 + i * 2.5));

            ctx.beginPath();
            ctx.arc(twinkleX, twinkleY, twinkleSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${twinkleAlpha * 0.8})`;
            ctx.fill();
          }
        }
      }

      // Outer glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = hslToString(sparkHsl.h, sparkHsl.s, sparkHsl.l, 0.3 + Math.sin(time * 0.004) * 0.1);
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      timeRef.current += 16;
      drawBall(timeRef.current);
      if (animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const startRendering = () => {
      if (animated) {
        animate();
      } else {
        drawBall(0);
      }
    };

    // Preload image if needed
    if (ball.pattern === 'image' && ball.imageUrl) {
      ballImg = new Image();
      ballImg.src = ball.imageUrl;
      if (ballImg.complete) {
        startRendering();
      } else {
        ballImg.onload = () => startRendering();
      }
    } else {
      startRendering();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ball, size, animated]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="pointer-events-none"
    />
  );
};

export default BallPreview;
