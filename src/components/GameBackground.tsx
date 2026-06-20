import React, { useEffect, useRef } from 'react';
import { WorldTheme } from '@/data/worldThemes';

interface GameBackgroundProps {
  theme: WorldTheme;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
  phase: number;
}

export const GameBackground: React.FC<GameBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Pre-compute color strings to avoid regex per frame
    const baseColor = theme.ambientParticleColor;
    const colorCache = new Map<number, string>();
    const getColor = (opacity: number) => {
      const key = Math.round(opacity * 100);
      let c = colorCache.get(key);
      if (!c) {
        c = baseColor.replace(/[\d.]+\)$/, `${opacity})`);
        colorCache.set(key, c);
      }
      return c;
    };

    // Initialize particles
    particlesRef.current = Array.from({ length: theme.ambientParticleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 3,
      speed: 0.2 + Math.random() * 0.6,
      opacity: 0.1 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    let lastFrame = 0;
    const FRAME_INTERVAL = 1000 / 30; // Cap at 30fps for ambient bg

    const render = (time: number) => {
      animRef.current = requestAnimationFrame(render);

      const delta = time - lastFrame;
      if (delta < FRAME_INTERVAL) return;
      lastFrame = time - (delta % FRAME_INTERVAL);

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const t = time * 0.001;
      const particles = particlesRef.current;
      const type = theme.ambientParticleType;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        switch (type) {
          case 'bubble':
            p.y -= p.speed;
            p.x += Math.sin(t + p.phase) * 0.3;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.strokeStyle = getColor(p.opacity * 0.6);
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.fillStyle = getColor(p.opacity * 0.15);
            ctx.fill();
            break;

          case 'ember':
            p.y -= p.speed * 1.2;
            p.x += Math.sin(t * 1.5 + p.phase) * 0.8;
            p.opacity = 0.2 + Math.sin(t * 3 + p.phase) * 0.2;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = getColor(Math.max(0, p.opacity));
            ctx.fill();
            break;

          case 'snow':
            p.y += p.speed * 0.6;
            p.x += Math.sin(t * 0.8 + p.phase) * 0.4 + p.drift;
            if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = getColor(p.opacity);
            ctx.fill();
            break;

          case 'star': {
            const twinkle = 0.1 + Math.abs(Math.sin(t * 2 + p.phase)) * 0.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = getColor(twinkle);
            ctx.fill();
            break;
          }

          case 'cloud':
            p.x += p.speed * 0.3;
            if (p.x > w + 40) { p.x = -40; p.y = Math.random() * h * 0.6; }
            ctx.beginPath();
            ctx.ellipse(p.x, p.y, p.size * 8, p.size * 3, 0, 0, Math.PI * 2);
            ctx.fillStyle = getColor(p.opacity * 0.15);
            ctx.fill();
            break;

          case 'dust':
          default:
            p.y -= p.speed * 0.2;
            p.x += Math.sin(t * 0.5 + p.phase) * 0.2 + p.drift * 0.3;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = getColor(p.opacity * 0.5);
            ctx.fill();
            break;
        }
      }
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};
