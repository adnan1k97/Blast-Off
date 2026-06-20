import React, { useEffect, useRef } from 'react';
import { WorldTheme } from '@/data/worldThemes';

interface ModalParticleBurstProps {
  worldTheme?: WorldTheme;
  variant: 'victory' | 'defeat';
}

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  decay: number;
  hue: number;
  sat: number;
  light: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'diamond' | 'star' | 'spark';
  trail: { x: number; y: number; opacity: number }[];
}

export const ModalParticleBurst: React.FC<ModalParticleBurstProps> = ({ worldTheme, variant }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<BurstParticle[]>([]);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    startTimeRef.current = performance.now();

    const baseHue = worldTheme?.accentHue ?? (variant === 'victory' ? 45 : 0);
    const baseSat = worldTheme?.accentSat ?? 70;
    const baseLight = worldTheme?.accentLight ?? 55;

    // Create burst particles
    const count = variant === 'victory' ? 60 : 35;
    particlesRef.current = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 2 + Math.random() * 6;
      const hueOffset = (Math.random() - 0.5) * 40;
      const shapes: BurstParticle['shape'][] = variant === 'victory'
        ? ['circle', 'diamond', 'star', 'spark']
        : ['circle', 'spark', 'spark'];

      return {
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (variant === 'victory' ? 1 : 0),
        size: 2 + Math.random() * 4,
        opacity: 0.8 + Math.random() * 0.2,
        decay: 0.012 + Math.random() * 0.008,
        hue: baseHue + hueOffset,
        sat: baseSat + (Math.random() - 0.5) * 20,
        light: baseLight + Math.random() * 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        trail: [],
      };
    });

    // Add ring particles for victory
    if (variant === 'victory') {
      for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2 * i) / 24;
        const speed = 1 + Math.random() * 2;
        particlesRef.current.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 2,
          opacity: 0.6,
          decay: 0.006 + Math.random() * 0.004,
          hue: baseHue + 30,
          sat: baseSat,
          light: baseLight + 25,
          rotation: 0,
          rotationSpeed: 0,
          shape: 'circle',
          trail: [],
        });
      }
    }

    const render = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;

      for (const p of particlesRef.current) {
        if (p.opacity <= 0) continue;
        alive = true;

        // Store trail
        if (p.shape === 'spark' || p.shape === 'star') {
          p.trail.push({ x: p.x, y: p.y, opacity: p.opacity * 0.5 });
          if (p.trail.length > 8) p.trail.shift();
        }

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // gentle gravity
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.opacity -= p.decay;
        p.rotation += p.rotationSpeed;

        // Draw trail
        for (let t = 0; t < p.trail.length; t++) {
          const tp = p.trail[t];
          const trailOpacity = tp.opacity * (t / p.trail.length) * 0.4;
          if (trailOpacity <= 0) continue;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light + 10}%, ${trailOpacity})`;
          ctx.fill();
        }

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.opacity);

        const color = `hsl(${p.hue}, ${p.sat}%, ${p.light}%)`;
        const glowColor = `hsla(${p.hue}, ${p.sat}%, ${p.light + 15}%, ${p.opacity * 0.5})`;

        // Glow
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = p.size * 3;

        switch (p.shape) {
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size * 0.6, 0);
            ctx.lineTo(0, p.size);
            ctx.lineTo(-p.size * 0.6, 0);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            break;

          case 'star': {
            ctx.beginPath();
            for (let s = 0; s < 5; s++) {
              const a = (s * Math.PI * 2) / 5 - Math.PI / 2;
              const aInner = a + Math.PI / 5;
              ctx.lineTo(Math.cos(a) * p.size, Math.sin(a) * p.size);
              ctx.lineTo(Math.cos(aInner) * p.size * 0.4, Math.sin(aInner) * p.size * 0.4);
            }
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            break;
          }

          case 'spark':
            ctx.beginPath();
            ctx.moveTo(-p.size * 1.5, 0);
            ctx.lineTo(0, -p.size * 0.3);
            ctx.lineTo(p.size * 1.5, 0);
            ctx.lineTo(0, p.size * 0.3);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            break;

          case 'circle':
          default:
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            break;
        }

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      if (alive) {
        animRef.current = requestAnimationFrame(render);
      }
    };

    animRef.current = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animRef.current);
  }, [worldTheme, variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
};
