import React from 'react';

interface ElectromagneticBackgroundProps {
  worldId?: string;
}

export const ElectromagneticBackground: React.FC<ElectromagneticBackgroundProps> = ({ worldId }) => {
  switch (worldId) {
    case 'techlab':
      return <AncientRuinsBackground />;
    case 'sunken-temple':
      return <SunkenTempleBackground />;
    case 'sky-fortress':
      return <SkyFortressBackground />;
    case 'volcanic-core':
      return <VolcanicCoreBackground />;
    case 'frozen-fortress':
      return <FrozenFortressBackground />;
    case 'dimension-nexus':
      return <DimensionNexusBackground />;
    default:
      return <DefaultBackground />;
  }
};

// ============ ANCIENT RUINS ============
const AncientRuinsBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 30% 20%, hsl(30 20% 18% / 0.8) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 80%, hsl(25 15% 15% / 0.6) 0%, transparent 50%), hsl(25 12% 8%)`,
    }} />
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `radial-gradient(circle at 20% 30%, hsl(35 20% 30%) 1px, transparent 1px),
        radial-gradient(circle at 60% 70%, hsl(30 15% 25%) 1px, transparent 1px)`,
      backgroundSize: '80px 80px, 120px 120px',
    }} />
    <svg className="absolute -top-16 -left-16 w-72 h-72 opacity-20" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(43 80% 50%)" strokeWidth="1" strokeDasharray="8 4" className="animate-spin" style={{ animationDuration: '60s' }} />
      <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(43 70% 45%)" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <text key={i} x={100 + 70 * Math.cos(rad)} y={100 + 70 * Math.sin(rad)} textAnchor="middle" dominantBaseline="middle" fill="hsl(43 90% 55%)" fontSize="10" className="animate-pulse" style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}>{'ᚱᛟᚠᛏᚢᛉ'[i]}</text>;
      })}
    </svg>
    <svg className="absolute -bottom-24 -right-24 w-96 h-96 opacity-15" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(43 70% 45%)" strokeWidth="1" strokeDasharray="6 6" className="animate-spin" style={{ animationDuration: '80s' }} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <text key={i} x={100 + 80 * Math.cos(rad)} y={100 + 80 * Math.sin(rad)} textAnchor="middle" dominantBaseline="middle" fill="hsl(43 80% 50%)" fontSize="8" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s`, animationDuration: '4s' }}>{'ᚦᚨᚲᚷᚹᚺᛃᛇ'[i]}</text>;
      })}
    </svg>
    <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs><linearGradient id="runeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="hsl(43 80% 50% / 0)" /><stop offset="50%" stopColor="hsl(43 80% 50% / 0.4)" /><stop offset="100%" stopColor="hsl(43 80% 50% / 0)" /></linearGradient></defs>
      <path d="M 10 20 L 40 20 L 45 25 L 50 20 L 90 20" fill="none" stroke="url(#runeGrad)" strokeWidth="0.15" className="animate-pulse" style={{ animationDuration: '4s' }} />
      <path d="M 5 50 L 30 50 L 35 45 L 40 50 L 95 50" fill="none" stroke="url(#runeGrad)" strokeWidth="0.15" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <path d="M 15 80 L 50 80 L 55 75 L 60 80 L 85 80" fill="none" stroke="url(#runeGrad)" strokeWidth="0.15" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
    </svg>
    {[...Array(15)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`,
        left: `${5 + i * 6.5}%`, top: `${15 + (i % 5) * 18}%`,
        background: `hsl(${35 + (i % 3) * 5} ${60 + (i % 2) * 20}% ${50 + (i % 3) * 10}%)`,
        boxShadow: '0 0 4px hsl(43 80% 55% / 0.4)',
        animationDelay: `${i * 0.4}s`, animationDuration: `${4 + (i % 4)}s`,
      }} />
    ))}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(30 15% 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 15% 35%) 1px, transparent 1px)`,
      backgroundSize: '60px 40px',
    }} />
    <div className="absolute top-0 left-0 w-32 h-full opacity-10" style={{ background: 'linear-gradient(90deg, hsl(120 30% 25% / 0.3) 0%, transparent 100%)' }} />
    <div className="absolute top-0 right-0 w-32 h-full opacity-10" style={{ background: 'linear-gradient(270deg, hsl(120 30% 25% / 0.3) 0%, transparent 100%)' }} />
  </div>
);

// ============ SUNKEN TEMPLE ============
const SunkenTempleBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 50% 0%, hsl(195 60% 18% / 0.6) 0%, transparent 60%),
        radial-gradient(ellipse at 30% 100%, hsl(200 50% 10% / 0.8) 0%, transparent 50%),
        linear-gradient(180deg, hsl(200 40% 12%) 0%, hsl(210 50% 6%) 100%)`,
    }} />
    {/* Caustic light rays */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 200 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="caustic" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(190 80% 60%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(190 80% 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[15, 45, 75, 110, 145, 175].map((x, i) => (
        <polygon key={i} points={`${x},0 ${x + 8},0 ${x + 20},200 ${x + 5},200`} fill="url(#caustic)" className="animate-pulse" style={{ animationDelay: `${i * 0.7}s`, animationDuration: '5s' }} />
      ))}
    </svg>
    {/* Floating bubbles */}
    {[...Array(18)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: `${2 + (i % 4) * 2}px`, height: `${2 + (i % 4) * 2}px`,
        left: `${3 + i * 5.5}%`, bottom: `${5 + (i % 6) * 15}%`,
        background: 'hsl(190 70% 70% / 0.3)',
        border: '1px solid hsl(190 80% 75% / 0.3)',
        animationDelay: `${i * 0.5}s`, animationDuration: `${5 + (i % 4)}s`,
      }} />
    ))}
    {/* Coral/seaweed silhouettes at bottom */}
    <svg className="absolute bottom-0 left-0 w-full h-40 opacity-15" viewBox="0 0 400 80" preserveAspectRatio="none">
      <path d="M 0 80 Q 20 40 30 60 Q 40 30 50 55 Q 55 20 65 50 Q 70 35 80 80 Z" fill="hsl(170 40% 25%)" />
      <path d="M 100 80 Q 110 50 115 65 Q 120 35 130 55 Q 135 25 145 60 Q 150 40 160 80 Z" fill="hsl(160 35% 20%)" />
      <path d="M 250 80 Q 265 35 275 50 Q 280 20 290 45 Q 300 30 310 80 Z" fill="hsl(170 40% 22%)" />
      <path d="M 340 80 Q 350 45 360 60 Q 365 30 375 55 Q 385 40 400 80 Z" fill="hsl(165 35% 18%)" />
    </svg>
    {/* Water surface shimmer at top */}
    <div className="absolute top-0 left-0 right-0 h-2 opacity-30" style={{
      background: 'linear-gradient(90deg, transparent 0%, hsl(190 80% 60%) 30%, hsl(195 70% 50%) 50%, hsl(190 80% 60%) 70%, transparent 100%)',
      animation: 'electric-pulse 3s ease-in-out infinite',
    }} />
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'radial-gradient(circle, hsl(190 60% 40%) 1px, transparent 1px)',
      backgroundSize: '30px 30px',
    }} />
  </div>
);

// ============ SKY FORTRESS ============
const SkyFortressBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `linear-gradient(180deg, hsl(215 40% 25%) 0%, hsl(220 35% 18%) 40%, hsl(225 30% 12%) 100%)`,
    }} />
    {/* Cloud layers */}
    {[...Array(6)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: `${120 + (i % 3) * 80}px`, height: `${30 + (i % 2) * 15}px`,
        left: `${-5 + i * 18}%`, top: `${10 + (i % 4) * 22}%`,
        background: `radial-gradient(ellipse, hsl(215 30% 50% / ${0.06 + (i % 3) * 0.02}) 0%, transparent 70%)`,
        animationDelay: `${i * 1.2}s`, animationDuration: `${8 + (i % 3) * 3}s`,
      }} />
    ))}
    {/* Wind streaks */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 200 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="windStreak" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(210 50% 70%)" stopOpacity="0" />
          <stop offset="30%" stopColor="hsl(210 50% 70%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(210 50% 70%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 35, 55, 70, 85].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="200" y2={y + ((i % 2) * 3 - 1)} stroke="url(#windStreak)" strokeWidth="0.3" className="animate-pulse" style={{ animationDelay: `${i * 0.6}s`, animationDuration: '4s' }} />
      ))}
    </svg>
    {/* Floating golden sparkles */}
    {[...Array(10)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: '2px', height: '2px',
        left: `${8 + i * 9}%`, top: `${15 + (i % 5) * 17}%`,
        background: 'hsl(45 90% 70%)',
        boxShadow: '0 0 6px hsl(45 90% 70% / 0.5)',
        animationDelay: `${i * 0.6}s`, animationDuration: `${4 + (i % 3)}s`,
      }} />
    ))}
    {/* Subtle gear silhouettes */}
    <svg className="absolute -bottom-12 -right-12 w-56 h-56 opacity-[0.05]" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(210 30% 50%)" strokeWidth="3" strokeDasharray="12 6" className="animate-spin" style={{ animationDuration: '30s' }} />
      <circle cx="50" cy="50" r="22" fill="none" stroke="hsl(210 30% 50%)" strokeWidth="2" strokeDasharray="8 4" className="animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
    </svg>
    <svg className="absolute -top-8 -left-8 w-40 h-40 opacity-[0.04]" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(215 35% 55%)" strokeWidth="2" strokeDasharray="10 5" className="animate-spin" style={{ animationDuration: '25s' }} />
    </svg>
  </div>
);

// ============ VOLCANIC CORE ============
const VolcanicCoreBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 50% 100%, hsl(15 70% 15% / 0.8) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 60%, hsl(0 60% 12% / 0.5) 0%, transparent 40%),
        linear-gradient(180deg, hsl(0 20% 6%) 0%, hsl(10 40% 8%) 60%, hsl(20 60% 10%) 100%)`,
    }} />
    {/* Lava glow from bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20" style={{
      background: 'linear-gradient(0deg, hsl(15 90% 45%) 0%, hsl(25 80% 35% / 0.5) 40%, transparent 100%)',
    }}>
      <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '3s', background: 'linear-gradient(0deg, hsl(30 100% 50% / 0.2) 0%, transparent 60%)' }} />
    </div>
    {/* Magma cracks */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 200 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lavaCrack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(20 90% 50% / 0)" />
          <stop offset="50%" stopColor="hsl(20 90% 50% / 0.8)" />
          <stop offset="100%" stopColor="hsl(20 90% 50% / 0)" />
        </linearGradient>
      </defs>
      <path d="M 30 0 L 35 40 L 28 80 L 40 120 L 32 200" fill="none" stroke="url(#lavaCrack)" strokeWidth="0.5" className="animate-pulse" style={{ animationDuration: '4s' }} />
      <path d="M 120 0 L 115 50 L 125 100 L 110 150 L 130 200" fill="none" stroke="url(#lavaCrack)" strokeWidth="0.4" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <path d="M 170 0 L 165 60 L 175 130 L 160 200" fill="none" stroke="url(#lavaCrack)" strokeWidth="0.3" className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
    </svg>
    {/* Floating embers */}
    {[...Array(16)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: `${1 + (i % 2)}px`, height: `${1 + (i % 2)}px`,
        left: `${4 + i * 6}%`, bottom: `${10 + (i % 5) * 18}%`,
        background: `hsl(${15 + (i % 3) * 10} ${80 + (i % 2) * 15}% ${55 + (i % 3) * 10}%)`,
        boxShadow: `0 0 4px hsl(20 90% 55% / 0.5)`,
        animationDelay: `${i * 0.3}s`, animationDuration: `${3 + (i % 4)}s`,
      }} />
    ))}
    {/* Obsidian texture */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `radial-gradient(circle, hsl(0 10% 25%) 1px, transparent 1px)`,
      backgroundSize: '25px 25px',
    }} />
    {/* Heat haze top */}
    <div className="absolute bottom-0 left-0 right-0 h-1 opacity-50" style={{
      background: 'linear-gradient(90deg, transparent 0%, hsl(20 90% 50%) 30%, hsl(30 100% 55%) 50%, hsl(20 90% 50%) 70%, transparent 100%)',
      animation: 'electric-pulse 2s ease-in-out infinite',
    }} />
  </div>
);

// ============ FROZEN FORTRESS ============
const FrozenFortressBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 40% 20%, hsl(200 40% 22% / 0.6) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 80%, hsl(210 45% 18% / 0.5) 0%, transparent 50%),
        linear-gradient(180deg, hsl(210 35% 12%) 0%, hsl(215 40% 8%) 100%)`,
    }} />
    {/* Ice crystal formations */}
    <svg className="absolute -top-10 -right-10 w-64 h-64 opacity-15" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(195 70% 70%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(210 60% 50%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Hexagonal snowflake */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <line key={i} x1="100" y1="100" x2={100 + 80 * Math.cos(rad)} y2={100 + 80 * Math.sin(rad)} stroke="url(#iceGrad)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s`, animationDuration: '4s' }} />;
      })}
      <circle cx="100" cy="100" r="30" fill="none" stroke="hsl(195 60% 65% / 0.2)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="55" fill="none" stroke="hsl(195 60% 65% / 0.15)" strokeWidth="0.5" />
    </svg>
    <svg className="absolute -bottom-16 -left-16 w-56 h-56 opacity-10" viewBox="0 0 200 200">
      {[30, 90, 150, 210, 270, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return <line key={i} x1="100" y1="100" x2={100 + 70 * Math.cos(rad)} y2={100 + 70 * Math.sin(rad)} stroke="hsl(200 50% 65% / 0.4)" strokeWidth="0.8" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s`, animationDuration: '5s' }} />;
      })}
    </svg>
    {/* Falling snow particles */}
    {[...Array(20)].map((_, i) => (
      <div key={i} className="absolute rounded-full animate-float" style={{
        width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`,
        left: `${2 + i * 5}%`, top: `${5 + (i % 7) * 14}%`,
        background: 'hsl(200 60% 85% / 0.5)',
        boxShadow: '0 0 3px hsl(200 70% 80% / 0.3)',
        animationDelay: `${i * 0.35}s`, animationDuration: `${5 + (i % 4)}s`,
      }} />
    ))}
    {/* Frost overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `radial-gradient(circle, hsl(200 50% 60%) 1px, transparent 1px)`,
      backgroundSize: '35px 35px',
    }} />
    {/* Icy shimmer at top */}
    <div className="absolute top-0 left-0 right-0 h-1 opacity-40" style={{
      background: 'linear-gradient(90deg, transparent 0%, hsl(195 80% 70%) 30%, hsl(200 90% 80%) 50%, hsl(195 80% 70%) 70%, transparent 100%)',
      animation: 'electric-pulse 4s ease-in-out infinite',
    }} />
    {/* Icy edge vignette */}
    <div className="absolute top-0 left-0 w-24 h-full opacity-[0.06]" style={{ background: 'linear-gradient(90deg, hsl(195 50% 60%) 0%, transparent 100%)' }} />
    <div className="absolute top-0 right-0 w-24 h-full opacity-[0.06]" style={{ background: 'linear-gradient(270deg, hsl(195 50% 60%) 0%, transparent 100%)' }} />
  </div>
);

// ============ DIMENSION NEXUS ============
const DimensionNexusBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 50% 50%, hsl(270 40% 15% / 0.6) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 30%, hsl(290 50% 12% / 0.5) 0%, transparent 40%),
        radial-gradient(ellipse at 80% 70%, hsl(260 45% 10% / 0.5) 0%, transparent 40%),
        linear-gradient(135deg, hsl(280 30% 6%) 0%, hsl(260 25% 8%) 50%, hsl(300 20% 6%) 100%)`,
    }} />
    {/* Portal rings */}
    <svg className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.08]" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(280 70% 60%)" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '40s' }} />
      <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(300 60% 55%)" strokeWidth="0.5" strokeDasharray="3 6" className="animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
      <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(270 80% 65%)" strokeWidth="0.5" strokeDasharray="2 4" className="animate-spin" style={{ animationDuration: '20s' }} />
    </svg>
    {/* Rift tears */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.1]" viewBox="0 0 200 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="riftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(280 90% 65% / 0)" />
          <stop offset="50%" stopColor="hsl(280 90% 65% / 0.7)" />
          <stop offset="100%" stopColor="hsl(280 90% 65% / 0)" />
        </linearGradient>
      </defs>
      <path d="M 40 20 Q 42 50 38 80 Q 44 110 40 140" fill="none" stroke="url(#riftGrad)" strokeWidth="0.4" className="animate-pulse" style={{ animationDuration: '3s' }} />
      <path d="M 150 40 Q 148 70 155 100 Q 145 130 150 170" fill="none" stroke="url(#riftGrad)" strokeWidth="0.3" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
    </svg>
    {/* Phase particles */}
    {[...Array(14)].map((_, i) => (
      <div key={i} className="absolute animate-float" style={{
        width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
        left: `${6 + i * 7}%`, top: `${10 + (i % 6) * 15}%`,
        background: `hsl(${270 + (i % 4) * 15} ${60 + (i % 3) * 15}% ${55 + (i % 3) * 10}%)`,
        borderRadius: (i % 2 === 0) ? '50%' : '2px',
        boxShadow: `0 0 6px hsl(280 70% 60% / 0.4)`,
        transform: `rotate(${i * 25}deg)`,
        animationDelay: `${i * 0.4}s`, animationDuration: `${3 + (i % 4)}s`,
      }} />
    ))}
    {/* Grid warp */}
    <div className="absolute inset-0 opacity-[0.025]" style={{
      backgroundImage: `linear-gradient(hsl(280 50% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(280 50% 50%) 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
    }} />
  </div>
);

// ============ DEFAULT (electromagnetic) ============
const DefaultBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0" style={{
      background: `radial-gradient(ellipse at 20% 20%, hsl(var(--metal-highlight) / 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, hsl(var(--metal-highlight) / 0.2) 0%, transparent 50%), hsl(var(--metal))`,
    }} />
    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full animate-coil-glow" style={{
      border: '2px solid hsl(var(--neon) / 0.3)', boxShadow: '0 0 30px hsl(var(--neon) / 0.2), inset 0 0 30px hsl(var(--neon) / 0.1)',
    }} />
    <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full animate-coil-glow" style={{ border: '1px solid hsl(var(--neon) / 0.4)', animationDelay: '0.5s' }} />
    <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full animate-coil-glow" style={{
      border: '2px solid hsl(var(--neon) / 0.2)', boxShadow: '0 0 40px hsl(var(--neon) / 0.15)', animationDelay: '1s',
    }} />
    <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full animate-coil-glow" style={{ border: '1px solid hsl(var(--neon) / 0.3)', animationDelay: '1.5s' }} />
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs><linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="hsl(142 76% 52% / 0)" /><stop offset="50%" stopColor="hsl(142 76% 52% / 0.5)" /><stop offset="100%" stopColor="hsl(142 76% 52% / 0)" /></linearGradient></defs>
      <path d="M 0 30 Q 50 10 100 30" fill="none" stroke="url(#fieldGradient)" strokeWidth="0.1" className="animate-electric-pulse" />
      <path d="M 0 50 Q 50 30 100 50" fill="none" stroke="url(#fieldGradient)" strokeWidth="0.1" className="animate-electric-pulse" style={{ animationDelay: '0.3s' }} />
      <path d="M 0 70 Q 50 50 100 70" fill="none" stroke="url(#fieldGradient)" strokeWidth="0.1" className="animate-electric-pulse" style={{ animationDelay: '0.6s' }} />
    </svg>
    {[...Array(12)].map((_, i) => (
      <div key={i} className="absolute w-1 h-1 rounded-full animate-float" style={{
        left: `${10 + i * 8}%`, top: `${20 + (i % 4) * 20}%`,
        background: 'hsl(var(--neon))', boxShadow: '0 0 6px hsl(var(--neon)), 0 0 12px hsl(var(--neon) / 0.5)',
        animationDelay: `${i * 0.3}s`, animationDuration: `${3 + (i % 3)}s`,
      }} />
    ))}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(hsl(var(--neon) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon) / 0.3) 1px, transparent 1px)`,
      backgroundSize: '50px 50px',
    }} />
  </div>
);
