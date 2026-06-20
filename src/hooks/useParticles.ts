import { useCallback, useRef, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'sparkle' | 'dust' | 'splash' | 'teleport' | 'collect' | 'powerup' | 'phase' | 'rift' | 'well' | 'echo';
  rotation?: number;
  rotationSpeed?: number;
}

export type UseParticlesReturn = ReturnType<typeof useParticles>;

export const useParticles = () => {
  const particlesRef = useRef<Particle[]>([]);

  const addSparkles = useCallback((x: number, y: number, count: number = 20) => {
    const colors = [
      'hsla(43, 96%, 56%, 1)',    // Gold
      'hsla(43, 100%, 75%, 1)',   // Light gold
      'hsla(160, 84%, 45%, 1)',   // Goal green
      'hsla(60, 100%, 70%, 1)',   // Yellow
      'hsla(30, 100%, 60%, 1)',   // Orange
    ];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 2 + Math.random() * 4;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'sparkle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      });
    }
  }, []);

  const addDust = useCallback((x: number, y: number, velocityX: number, velocityY: number) => {
    const count = 5 + Math.floor(Math.random() * 5);
    const colors = [
      'hsla(30, 20%, 60%, 0.8)',
      'hsla(30, 15%, 50%, 0.7)',
      'hsla(25, 25%, 55%, 0.6)',
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.atan2(velocityY, velocityX) + Math.PI + (Math.random() - 0.5) * 1.5;
      const speed = 1 + Math.random() * 2;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 1,
        maxLife: 1,
        size: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'dust',
      });
    }
  }, []);

  const addSplash = useCallback((x: number, y: number, count: number = 15) => {
    const colors = [
      'hsla(0, 72%, 40%, 0.9)',    // Dark red
      'hsla(0, 72%, 30%, 0.8)',    // Darker red
      'hsla(0, 0%, 10%, 0.9)',     // Black
      'hsla(0, 50%, 50%, 0.7)',    // Medium red
    ];

    // Splash particles going outward and down
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.8;
      const speed = 2 + Math.random() * 5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
        vy: -Math.abs(Math.sin(angle) * speed),
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'splash',
      });
    }

    // Inner ring effect
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 3,
        color: 'hsla(0, 0%, 0%, 0.8)',
        type: 'splash',
      });
    }
  }, []);

  const addTeleportEffect = useCallback((x: number, y: number, color: string, isEntry: boolean = false) => {
    const count = isEntry ? 12 : 20;
    
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = isEntry ? 1 + Math.random() * 2 : 3 + Math.random() * 3;
      const direction = isEntry ? -1 : 1; // Entry particles go inward, exit go outward
      
      particlesRef.current.push({
        x: isEntry ? x + Math.cos(angle) * 30 : x,
        y: isEntry ? y + Math.sin(angle) * 30 : y,
        vx: Math.cos(angle) * speed * direction,
        vy: Math.sin(angle) * speed * direction,
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 4,
        color: color.replace('1)', `${0.8 + Math.random() * 0.2})`),
        type: 'teleport',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.4,
      });
    }
  }, []);

  const updateParticles = useCallback(() => {
    particlesRef.current = particlesRef.current.filter(p => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Apply gravity for splash
      if (p.type === 'splash') {
        p.vy += 0.15;
      }

      // Apply friction
      p.vx *= 0.98;
      p.vy *= 0.98;

      // Update rotation for sparkles
      if (p.rotation !== undefined && p.rotationSpeed !== undefined) {
        p.rotation += p.rotationSpeed;
      }

      // Decay life
      const decayRate = p.type === 'sparkle' ? 0.025 : p.type === 'dust' ? 0.04 : p.type === 'teleport' ? 0.03 : p.type === 'powerup' ? 0.028 : p.type === 'phase' ? 0.02 : p.type === 'rift' ? 0.03 : p.type === 'well' ? 0.022 : p.type === 'echo' ? 0.018 : 0.035;
      p.life -= decayRate;

      return p.life > 0;
    });
  }, []);

  const renderParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    for (const p of particlesRef.current) {
      ctx.save();
      
      const alpha = p.life;
      const size = p.size * (p.type === 'dust' ? (0.5 + p.life * 0.5) : p.life);

      if (p.type === 'sparkle') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        
        // Draw star shape
        const color = p.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          const angle = (Math.PI / 2) * i;
          ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
          ctx.lineTo(Math.cos(angle + Math.PI / 4) * size * 0.4, Math.sin(angle + Math.PI / 4) * size * 0.4);
        }
        ctx.closePath();
        ctx.fill();

        // Add glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (p.type === 'dust') {
        const color = p.color.replace(/[\d.]+\)$/, `${alpha * 0.6})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'splash') {
        const color = p.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'teleport') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        
        const color = p.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fillStyle = color;
        
        // Diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.6, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size * 0.6, 0);
        ctx.closePath();
        ctx.fill();
        
        // Glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (p.type === 'collect' || p.type === 'powerup') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        
        const color = p.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fillStyle = color;
        
        if (p.type === 'powerup') {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const outerRadius = size;
            const innerRadius = size * 0.5;
            ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius);
            ctx.lineTo(Math.cos(angle + Math.PI / 6) * innerRadius, Math.sin(angle + Math.PI / 6) * innerRadius);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (p.type === 'phase') {
        // Phase shift shimmer - translucent diamond with glow
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation || 0);
        const color = p.color.replace(/[\d.]+\)$/, `${alpha * 0.8})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.5, 0);
        ctx.lineTo(0, size);
        ctx.lineTo(-size * 0.5, 0);
        ctx.closePath();
        ctx.fill();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (p.type === 'rift') {
        // Dimension tear sparks - bright streaks
        ctx.translate(p.x, p.y);
        const angle = Math.atan2(p.vy, p.vx);
        ctx.rotate(angle);
        const color = p.color.replace(/[\d.]+\)$/, `${alpha})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 1.8, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (p.type === 'well') {
        // Gravity well distortion rings
        ctx.translate(p.x, p.y);
        const color = p.color.replace(/[\d.]+\)$/, `${alpha * 0.6})`);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5 * alpha;
        ctx.beginPath();
        ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
        ctx.stroke();
        // Inner dot
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${alpha * 0.4})`);
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'echo') {
        // Echo trail fading dots
        const color = p.color.replace(/[\d.]+\)$/, `${alpha * 0.7})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * (0.4 + alpha * 0.6), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.restore();
    }
  }, []);

  const clearParticles = useCallback(() => {
    particlesRef.current = [];
  }, []);

  const addCollectEffect = useCallback((x: number, y: number, isGem: boolean = false) => {
    const count = isGem ? 15 : 10;
    const colors = isGem 
      ? ['hsla(280, 80%, 60%, 1)', 'hsla(300, 90%, 70%, 1)', 'hsla(260, 70%, 65%, 1)', 'hsla(320, 85%, 65%, 1)']
      : ['hsla(43, 96%, 56%, 1)', 'hsla(43, 100%, 75%, 1)', 'hsla(50, 100%, 60%, 1)'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = 2 + Math.random() * 3;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2, // Slight upward bias
        life: 1,
        maxLife: 1,
        size: isGem ? 4 + Math.random() * 3 : 3 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'collect',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.4,
      });
    }
  }, []);

  const addPowerUpEffect = useCallback((x: number, y: number, type: 'shield' | 'speed' | 'multiplier') => {
    const count = 20;
    const colors = type === 'shield' 
      ? ['hsla(180, 90%, 50%, 1)', 'hsla(200, 85%, 60%, 1)', 'hsla(160, 80%, 55%, 1)']
      : type === 'speed'
      ? ['hsla(40, 95%, 55%, 1)', 'hsla(30, 90%, 50%, 1)', 'hsla(50, 100%, 60%, 1)']
      : ['hsla(280, 85%, 60%, 1)', 'hsla(300, 80%, 55%, 1)', 'hsla(260, 90%, 65%, 1)'];

    // Spiral explosion effect
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (i * 0.3);
      const speed = 3 + Math.random() * 4;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        maxLife: 1,
        size: 5 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'powerup',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      });
    }
  }, []);

  const getParticleCount = useCallback(() => {
    return particlesRef.current.length;
  }, []);

  // ====== FROZEN FORTRESS EFFECTS ======

  const addSnowflakeBurst = useCallback((x: number, y: number, count: number = 18) => {
    const colors = [
      'hsla(200, 90%, 85%, 1)',
      'hsla(210, 80%, 90%, 1)',
      'hsla(190, 95%, 75%, 1)',
      'hsla(220, 70%, 95%, 1)',
      'hsla(180, 60%, 80%, 1)',
    ];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const speed = 2 + Math.random() * 4;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'sparkle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      });
    }
    // Ice shard fragments
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * (3 + Math.random() * 3),
        vy: Math.sin(angle) * (3 + Math.random() * 3) - 2,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 3,
        color: 'hsla(200, 100%, 95%, 0.9)',
        type: 'splash',
      });
    }
  }, []);

  const addFrostMist = useCallback((x: number, y: number, radius: number = 30) => {
    const count = 14;
    const colors = [
      'hsla(195, 80%, 80%, 0.6)',
      'hsla(200, 70%, 85%, 0.5)',
      'hsla(210, 60%, 90%, 0.4)',
      'hsla(185, 75%, 75%, 0.5)',
    ];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const dist = Math.random() * radius * 0.5;
      const speed = 0.5 + Math.random() * 1.5;
      particlesRef.current.push({
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        vx: Math.cos(angle) * speed * 0.4,
        vy: -speed - Math.random(),
        life: 1,
        maxLife: 1,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'dust',
      });
    }
  }, []);

  const addAvalancheDust = useCallback((x: number, y: number, dirX: number = 0) => {
    const count = 12;
    const colors = [
      'hsla(30, 15%, 75%, 0.7)',
      'hsla(25, 10%, 80%, 0.6)',
      'hsla(210, 20%, 85%, 0.5)',
      'hsla(200, 15%, 70%, 0.6)',
    ];
    for (let i = 0; i < count; i++) {
      const spread = (Math.random() - 0.5) * 2;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 10,
        vx: dirX * 0.5 + spread,
        vy: -0.5 - Math.random() * 1.5,
        life: 1,
        maxLife: 1,
        size: 5 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'dust',
      });
    }
  }, []);

  // ====== DIMENSION NEXUS EFFECTS ======

  const addPhaseShimmer = useCallback((x: number, y: number, width: number, height: number) => {
    const count = 6;
    const colors = [
      'hsla(270, 80%, 70%, 1)',
      'hsla(290, 70%, 75%, 1)',
      'hsla(280, 90%, 80%, 1)',
      'hsla(300, 60%, 65%, 1)',
    ];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: x + Math.random() * width,
        y: y + Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -0.5 - Math.random() * 1.5,
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'phase',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      });
    }
  }, []);

  const addDimensionTearSparks = useCallback((x: number, y: number, radius: number) => {
    const count = 8;
    const colors = [
      'hsla(280, 90%, 75%, 1)',
      'hsla(310, 80%, 70%, 1)',
      'hsla(260, 85%, 80%, 1)',
      'hsla(290, 95%, 85%, 1)',
    ];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const dist = radius * (0.5 + Math.random() * 0.5);
      const speed = 1 + Math.random() * 2;
      particlesRef.current.push({
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        vx: Math.cos(angle + Math.PI / 2) * speed,
        vy: Math.sin(angle + Math.PI / 2) * speed,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'rift',
      });
    }
  }, []);

  const addGravityWellWave = useCallback((x: number, y: number, radius: number, isPull: boolean) => {
    const count = 8;
    const hue = isPull ? 260 : 30;
    const colors = [
      `hsla(${hue}, 70%, 65%, 1)`,
      `hsla(${hue}, 80%, 75%, 1)`,
      `hsla(${hue}, 60%, 55%, 1)`,
    ];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const startDist = isPull ? radius * 0.8 : radius * 0.2;
      const speed = isPull ? -1.5 : 1.5;
      particlesRef.current.push({
        x: x + Math.cos(angle) * startDist,
        y: y + Math.sin(angle) * startDist,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: 3 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'well',
      });
    }
  }, []);

  const addEchoFade = useCallback((x: number, y: number) => {
    const count = 3;
    const colors = [
      'hsla(260, 60%, 60%, 1)',
      'hsla(270, 50%, 55%, 1)',
      'hsla(0, 70%, 55%, 1)',
    ];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.3 - Math.random() * 0.5,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'echo',
      });
    }
  }, []);

  return useMemo(() => ({
    addSparkles,
    addDust,
    addSplash,
    addTeleportEffect,
    addCollectEffect,
    addPowerUpEffect,
    addSnowflakeBurst,
    addFrostMist,
    addAvalancheDust,
    addPhaseShimmer,
    addDimensionTearSparks,
    addGravityWellWave,
    addEchoFade,
    updateParticles,
    renderParticles,
    clearParticles,
    getParticleCount,
  }), [
    addSparkles,
    addDust,
    addSplash,
    addTeleportEffect,
    addCollectEffect,
    addPowerUpEffect,
    addSnowflakeBurst,
    addFrostMist,
    addAvalancheDust,
    addPhaseShimmer,
    addDimensionTearSparks,
    addGravityWellWave,
    addEchoFade,
    updateParticles,
    renderParticles,
    clearParticles,
    getParticleCount,
  ]);
};
