import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RocketIcon } from '@/components/CustomIcons';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0); // 0=dark, 1=logo, 2=title, 3=subtitle, 4=exit

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => navigate('/home', { replace: true }), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  const stars = useMemo(() => Array.from({ length: 120 }, (_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 1.5,
    opacity: Math.random() * 0.7 + 0.3,
  })), []);

  const shootingStars = useMemo(() => Array.from({ length: 5 }, (_, i) => ({
    id: i,
    startX: Math.random() * 60 + 20,
    startY: Math.random() * 40,
    angle: Math.random() * 30 + 15,
    delay: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 0.6 + 0.4,
    length: Math.random() * 80 + 40,
  })), []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={() => navigate('/home', { replace: true })}
      style={{
        backgroundColor: '#050311',
        backgroundImage: `
          radial-gradient(ellipse 70% 50% at 50% 50%, rgba(83,68,169,0.25) 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 30% 70%, rgba(187,80,152,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 30% 25% at 75% 30%, rgba(255,179,43,0.08) 0%, transparent 50%)
        `,
      }}
    >
      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(s => (
          <div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size,
              left: `${s.x}%`,
              top: `${s.y}%`,
              background: '#F0ECF8',
              animation: `splash-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              opacity: 0,
              '--star-op': s.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shootingStars.map(s => (
          <div
            key={s.id}
            className="absolute"
            style={{
              left: `${s.startX}%`,
              top: `${s.startY}%`,
              width: s.length,
              height: 2,
              background: `linear-gradient(90deg, transparent, rgba(255,179,43,0.8), rgba(255,255,255,0.9))`,
              borderRadius: 1,
              transform: `rotate(${s.angle}deg)`,
              animation: `splash-shoot ${s.duration}s ease-in ${s.delay}s infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Central glow pulse */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(187,80,152,0.3), rgba(83,68,169,0.15), transparent)',
          filter: 'blur(60px)',
          opacity: phase >= 1 ? 1 : 0,
          transform: `scale(${phase >= 1 ? 1 : 0.3})`,
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Expanding ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          border: '1px solid rgba(255,179,43,0.3)',
          opacity: phase >= 1 ? 0 : 0,
          transform: `scale(${phase >= 2 ? 4 : 0.5})`,
          transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: phase >= 1 ? 'splash-ring-expand 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
        }}
      />

      {/* Rocket icon */}
      <div
        className="relative z-10"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: `scale(${phase >= 1 ? 1 : 0.2}) rotate(${phase >= 4 ? -45 : -8}deg) translateY(${phase >= 4 ? -200 : 0}px)`,
          transition: phase >= 4
            ? 'all 0.6s cubic-bezier(0.55, 0, 1, 0.45)'
            : 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          filter: `drop-shadow(0 0 ${phase >= 1 ? 30 : 0}px rgba(255,179,43,0.7))`,
        }}
      >
        <RocketIcon className="w-20 h-20" style={{ color: '#FFB32B' }} />
      </div>

      {/* Title: BLAST OFF */}
      <div
        className="relative z-10 mt-6"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(52px, 14vw, 68px)',
          lineHeight: 0.9,
          letterSpacing: '0.04em',
          background: 'linear-gradient(135deg, #F5C63C 0%, #FFB32B 40%, #F47F6B 80%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: phase >= 2 ? 1 : 0,
          transform: `translateY(${phase >= 2 ? 0 : 30}px) scale(${phase >= 4 ? 1.1 : 1})`,
          transition: phase >= 4
            ? 'all 0.5s ease-in'
            : 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          filter: `drop-shadow(0 0 24px rgba(255,179,43,0.5))`,
        }}
      >
        Blast Off
      </div>

      {/* Subtitle */}
      <div
        className="relative z-10 mt-2"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(20px, 5vw, 26px)',
          letterSpacing: '0.12em',
          color: '#BB5098',
          opacity: phase >= 3 ? 1 : 0,
          transform: `translateY(${phase >= 3 ? 0 : 20}px)`,
          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        Starry Maze
      </div>

      {/* Tagline */}
      <div
        className="relative z-10 mt-4"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(240,236,248,0.3)',
          opacity: phase >= 3 ? 1 : 0,
          transform: `translateY(${phase >= 3 ? 0 : 15}px)`,
          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s',
        }}
      >
        Navigate · Explore · Conquer
      </div>

      {/* Tap to skip */}
      <div
        className="absolute bottom-12 z-10"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(240,236,248,0.2)',
          opacity: phase >= 3 ? 1 : 0,
          animation: phase >= 3 ? 'splash-pulse 2s ease-in-out infinite' : 'none',
        }}
      >
        Tap to skip
      </div>

      {/* Exit flash overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'white',
          opacity: phase >= 4 ? 0.15 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-30" style={{
        background: 'repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
        opacity: 0.35,
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        @keyframes splash-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: var(--star-op, 0.6); transform: scale(1.2); }
        }
        @keyframes splash-shoot {
          0% { opacity: 0; transform: translateX(-100px) rotate(inherit); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translateX(300px) rotate(inherit); }
        }
        @keyframes splash-ring-expand {
          0% { opacity: 0.6; transform: scale(0.5); }
          100% { opacity: 0; transform: scale(3.5); }
        }
        @keyframes splash-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.45; }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
