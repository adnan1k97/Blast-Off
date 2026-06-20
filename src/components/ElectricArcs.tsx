import React, { useEffect, useRef, useState } from 'react';

interface ArcConnection {
  from: { x: number; y: number };
  to: { x: number; y: number };
}

interface ElectricArcsProps {
  containerRef: React.RefObject<HTMLDivElement>;
  unlockedIndices: number[];
  columns: number;
  worldId?: string;
}

export const ElectricArcs: React.FC<ElectricArcsProps> = ({
  containerRef,
  unlockedIndices,
  columns,
  worldId,
}) => {
  const [connections, setConnections] = useState<ArcConnection[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateConnections = () => {
      if (!containerRef.current) return;
      const newConnections: ArcConnection[] = [];

      unlockedIndices.forEach((index) => {
        const currentCard = containerRef.current?.querySelector(`[data-level-index="${index}"]`) as HTMLElement;
        if (!currentCard) return;
        const currentRect = currentCard.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();

        const rightIndex = index + 1;
        if (unlockedIndices.includes(rightIndex) && (index + 1) % columns !== 0) {
          const rightCard = containerRef.current?.querySelector(`[data-level-index="${rightIndex}"]`) as HTMLElement;
          if (rightCard) {
            const rightRect = rightCard.getBoundingClientRect();
            newConnections.push({
              from: { x: currentRect.right - containerRect.left, y: currentRect.top + currentRect.height / 2 - containerRect.top },
              to: { x: rightRect.left - containerRect.left, y: rightRect.top + rightRect.height / 2 - containerRect.top },
            });
          }
        }

        const bottomIndex = index + columns;
        if (unlockedIndices.includes(bottomIndex)) {
          const bottomCard = containerRef.current?.querySelector(`[data-level-index="${bottomIndex}"]`) as HTMLElement;
          if (bottomCard) {
            const bottomRect = bottomCard.getBoundingClientRect();
            newConnections.push({
              from: { x: currentRect.left + currentRect.width / 2 - containerRect.left, y: currentRect.bottom - containerRect.top },
              to: { x: bottomRect.left + bottomRect.width / 2 - containerRect.left, y: bottomRect.top - containerRect.top },
            });
          }
        }
      });

      setConnections(newConnections);
    };

    updateConnections();
    window.addEventListener('resize', updateConnections);
    const timeout = setTimeout(updateConnections, 100);
    return () => { window.removeEventListener('resize', updateConnections); clearTimeout(timeout); };
  }, [containerRef, unlockedIndices, columns]);

  if (connections.length === 0) return null;

  const getTheme = () => {
    switch (worldId) {
      case 'techlab': return 'ruins';
      case 'sunken-temple': return 'water';
      case 'sky-fortress': return 'wind';
      case 'volcanic-core': return 'lava';
      case 'frozen-fortress': return 'ice';
      case 'dimension-nexus': return 'rift';
      default: return 'electric';
    }
  };

  const theme = getTheme();

  return (
    <svg ref={svgRef} className="absolute inset-0 pointer-events-none z-0" style={{ overflow: 'visible' }}>
      <defs>
        {theme === 'ruins' && (
          <>
            <filter id="vine-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="vine-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(120 35% 30%)" stopOpacity="0.6" /><stop offset="50%" stopColor="hsl(90 40% 40%)" stopOpacity="0.9" /><stop offset="100%" stopColor="hsl(120 35% 30%)" stopOpacity="0.6" /></linearGradient>
            <linearGradient id="root-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(30 30% 25%)" stopOpacity="0.7" /><stop offset="50%" stopColor="hsl(25 35% 35%)" stopOpacity="1" /><stop offset="100%" stopColor="hsl(30 30% 25%)" stopOpacity="0.7" /></linearGradient>
          </>
        )}
        {theme === 'water' && (
          <>
            <filter id="water-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(190 70% 45%)" stopOpacity="0.4" /><stop offset="50%" stopColor="hsl(185 80% 55%)" stopOpacity="0.8" /><stop offset="100%" stopColor="hsl(190 70% 45%)" stopOpacity="0.4" /></linearGradient>
            <linearGradient id="water-outer" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(195 60% 35%)" stopOpacity="0.3" /><stop offset="50%" stopColor="hsl(190 65% 45%)" stopOpacity="0.5" /><stop offset="100%" stopColor="hsl(195 60% 35%)" stopOpacity="0.3" /></linearGradient>
          </>
        )}
        {theme === 'wind' && (
          <>
            <filter id="wind-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="wind-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(210 50% 60%)" stopOpacity="0.2" /><stop offset="40%" stopColor="hsl(210 60% 70%)" stopOpacity="0.6" /><stop offset="100%" stopColor="hsl(210 50% 60%)" stopOpacity="0.1" /></linearGradient>
          </>
        )}
        {theme === 'lava' && (
          <>
            <filter id="lava-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="lava-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(15 80% 40%)" stopOpacity="0.5" />
              <stop offset="30%" stopColor="hsl(25 90% 50%)" stopOpacity="0.9" />
              <stop offset="60%" stopColor="hsl(40 100% 55%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(15 80% 40%)" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="lava-outer" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(0 70% 30%)" stopOpacity="0.4" /><stop offset="50%" stopColor="hsl(15 80% 40%)" stopOpacity="0.6" /><stop offset="100%" stopColor="hsl(0 70% 30%)" stopOpacity="0.4" /></linearGradient>
          </>
        )}
        {theme === 'ice' && (
          <>
            <filter id="ice-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="ice-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="hsl(195 70% 60%)" stopOpacity="0.4" /><stop offset="50%" stopColor="hsl(200 80% 75%)" stopOpacity="0.9" /><stop offset="100%" stopColor="hsl(195 70% 60%)" stopOpacity="0.4" /></linearGradient>
          </>
        )}
        {theme === 'rift' && (
          <>
            <filter id="rift-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="rift-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(280 80% 55%)" stopOpacity="0.3"><animate attributeName="stop-color" values="hsl(280 80% 55%);hsl(320 70% 55%);hsl(280 80% 55%)" dur="3s" repeatCount="indefinite" /></stop>
              <stop offset="50%" stopColor="hsl(300 90% 65%)" stopOpacity="0.9"><animate attributeName="stop-color" values="hsl(300 90% 65%);hsl(260 80% 65%);hsl(300 90% 65%)" dur="2s" repeatCount="indefinite" /></stop>
              <stop offset="100%" stopColor="hsl(280 80% 55%)" stopOpacity="0.3"><animate attributeName="stop-color" values="hsl(280 80% 55%);hsl(320 70% 55%);hsl(280 80% 55%)" dur="3s" repeatCount="indefinite" /></stop>
            </linearGradient>
          </>
        )}
        {theme === 'electric' && (
          <>
            <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--neon))" stopOpacity="0.3"><animate attributeName="stop-opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" /></stop>
              <stop offset="50%" stopColor="hsl(var(--neon-glow))" stopOpacity="1"><animate attributeName="offset" values="0.3;0.5;0.7;0.5;0.3" dur="1s" repeatCount="indefinite" /></stop>
              <stop offset="100%" stopColor="hsl(var(--neon))" stopOpacity="0.3"><animate attributeName="stop-opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" /></stop>
            </linearGradient>
          </>
        )}
      </defs>

      {connections.map((conn, i) => {
        switch (theme) {
          case 'ruins': return <VineConnection key={i} from={conn.from} to={conn.to} index={i} />;
          case 'water': return <WaterStream key={i} from={conn.from} to={conn.to} index={i} />;
          case 'wind': return <WindTrail key={i} from={conn.from} to={conn.to} index={i} />;
          case 'lava': return <LavaFlow key={i} from={conn.from} to={conn.to} index={i} />;
          case 'ice': return <IceBridge key={i} from={conn.from} to={conn.to} index={i} />;
          case 'rift': return <RiftBeam key={i} from={conn.from} to={conn.to} index={i} />;
          default: return <ElectricArc key={i} from={conn.from} to={conn.to} delay={i * 0.2} />;
        }
      })}
    </svg>
  );
};

// === Shared types ===
interface ConnectionProps { from: { x: number; y: number }; to: { x: number; y: number }; index: number; }

// Helper: smooth cubic bezier between two points with controlled wave
const curvePath = (from: { x: number; y: number }, to: { x: number; y: number }, wave: number, seed: number) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const perpX = -dy / dist;
  const perpY = dx / dist;
  const w = wave + (seed % 5);
  return `M ${from.x} ${from.y} C ${from.x + dx * 0.3 + perpX * w} ${from.y + dy * 0.3 + perpY * w}, ${from.x + dx * 0.7 - perpX * w * 0.6} ${from.y + dy * 0.7 - perpY * w * 0.6}, ${to.x} ${to.y}`;
};

// === ANCIENT RUINS: Vine ===
const VineConnection: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const seed = index * 137.5;
  const mainPath = curvePath(from, to, 8, seed);
  const dx = to.x - from.x; const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const branchCount = Math.max(1, Math.floor(dist / 40));

  return (
    <g>
      <path d={mainPath} fill="none" stroke="url(#root-gradient)" strokeWidth="5" strokeLinecap="round" opacity="0.4" filter="url(#vine-glow)" />
      <path d={mainPath} fill="none" stroke="url(#vine-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      <path d={mainPath} fill="none" stroke="hsl(100 50% 55%)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      {Array.from({ length: branchCount }, (_, i) => {
        const t = 0.2 + (i / branchCount) * 0.6;
        const bx = from.x + dx * t; const by = from.y + dy * t;
        const side = ((seed + i) % 2 === 0 ? 1 : -1);
        const len = 6 + ((seed + i) % 8);
        const angle = Math.atan2(dy, dx) + side * (0.5 + ((seed + i) % 3) * 0.3);
        return <path key={i} d={`M ${bx} ${by} Q ${(bx + bx + Math.cos(angle) * len) / 2 + side * 3} ${(by + by + Math.sin(angle) * len) / 2 - 2}, ${bx + Math.cos(angle) * len} ${by + Math.sin(angle) * len}`} fill="none" stroke="hsl(110 30% 35%)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />;
      })}
      <circle cx={from.x} cy={from.y} r="2" fill="hsl(43 80% 50%)" opacity="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx={to.x} cy={to.y} r="2" fill="hsl(43 80% 50%)" opacity="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" begin="1s" /></circle>
    </g>
  );
};

// === SUNKEN TEMPLE: Water stream with bubbles ===
const WaterStream: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const mainPath = curvePath(from, to, 6, index * 97);
  const dx = to.x - from.x; const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const bubbleCount = Math.max(2, Math.floor(dist / 30));

  return (
    <g>
      <path d={mainPath} fill="none" stroke="url(#water-outer)" strokeWidth="8" strokeLinecap="round" filter="url(#water-glow)" />
      <path d={mainPath} fill="none" stroke="url(#water-gradient)" strokeWidth="3" strokeLinecap="round" />
      <path d={mainPath} fill="none" stroke="hsl(185 90% 75%)" strokeWidth="1" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Bubbles along path */}
      {Array.from({ length: bubbleCount }, (_, i) => {
        const t = 0.15 + (i / bubbleCount) * 0.7;
        const bx = from.x + dx * t + ((index + i) % 5 - 2) * 2;
        const by = from.y + dy * t + ((index + i) % 4 - 2) * 2;
        const r = 1.5 + (i % 3);
        return (
          <circle key={i} cx={bx} cy={by} r={r} fill="none" stroke="hsl(190 70% 70% / 0.5)" strokeWidth="0.5" opacity="0.6">
            <animate attributeName="r" values={`${r};${r + 1};${r}`} dur={`${2 + (i % 2)}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${2 + (i % 2)}s`} repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
        );
      })}
    </g>
  );
};

// === SKY FORTRESS: Wind trails with dashes ===
const WindTrail: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const dx = to.x - from.x; const dy = to.y - from.y;
  // Multiple parallel wind lines
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const perpX = -dy / dist; const perpY = dx / dist;

  return (
    <g>
      {[-3, 0, 3].map((offset, li) => {
        const f = { x: from.x + perpX * offset, y: from.y + perpY * offset };
        const t = { x: to.x + perpX * offset, y: to.y + perpY * offset };
        const path = curvePath(f, t, 4 + li * 2, index * 73 + li);
        return (
          <path key={li} d={path} fill="none" stroke="url(#wind-gradient)" strokeWidth={li === 1 ? 2 : 1} strokeLinecap="round" strokeDasharray={li === 1 ? 'none' : '8 6'} opacity={li === 1 ? 0.6 : 0.3} filter="url(#wind-glow)">
            <animate attributeName="stroke-dashoffset" values="0;-28" dur={`${1.5 + li * 0.3}s`} repeatCount="indefinite" />
          </path>
        );
      })}
      {/* Sparkle at midpoint */}
      <circle cx={from.x + dx * 0.5} cy={from.y + dy * 0.5} r="2" fill="hsl(45 90% 70%)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  );
};

// === VOLCANIC CORE: Lava flow ===
const LavaFlow: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const mainPath = curvePath(from, to, 5, index * 61);

  return (
    <g>
      <path d={mainPath} fill="none" stroke="url(#lava-outer)" strokeWidth="10" strokeLinecap="round" filter="url(#lava-glow)" />
      <path d={mainPath} fill="none" stroke="url(#lava-gradient)" strokeWidth="4" strokeLinecap="round">
        <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </path>
      <path d={mainPath} fill="none" stroke="hsl(45 100% 70%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
      </path>
      {/* Ember dots at endpoints */}
      <circle cx={from.x} cy={from.y} r="3" fill="hsl(25 90% 50%)" opacity="0.6"><animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx={to.x} cy={to.y} r="3" fill="hsl(25 90% 50%)" opacity="0.6"><animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin="0.5s" /></circle>
    </g>
  );
};

// === FROZEN FORTRESS: Ice bridge ===
const IceBridge: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const dx = to.x - from.x; const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  // Straighter path — ice is rigid
  const mainPath = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  const crystalCount = Math.max(2, Math.floor(dist / 35));

  return (
    <g>
      <path d={mainPath} fill="none" stroke="hsl(200 50% 55% / 0.3)" strokeWidth="8" strokeLinecap="round" filter="url(#ice-glow)" />
      <path d={mainPath} fill="none" stroke="url(#ice-gradient)" strokeWidth="3" strokeLinecap="round" strokeDasharray="12 4" />
      <path d={mainPath} fill="none" stroke="hsl(200 90% 90%)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Ice crystals along the bridge */}
      {Array.from({ length: crystalCount }, (_, i) => {
        const t = 0.2 + (i / crystalCount) * 0.6;
        const cx = from.x + dx * t; const cy = from.y + dy * t;
        const size = 3 + (i % 3);
        return (
          <g key={i}>
            <polygon points={`${cx},${cy - size} ${cx + size * 0.6},${cy} ${cx},${cy + size * 0.4} ${cx - size * 0.6},${cy}`} fill="hsl(195 70% 75% / 0.4)" stroke="hsl(200 80% 80% / 0.5)" strokeWidth="0.5">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${3 + (i % 2)}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
            </polygon>
          </g>
        );
      })}
      {/* Frost sparkles at ends */}
      <circle cx={from.x} cy={from.y} r="2" fill="hsl(195 80% 80%)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" /></circle>
      <circle cx={to.x} cy={to.y} r="2" fill="hsl(195 80% 80%)" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="1s" /></circle>
    </g>
  );
};

// === DIMENSION NEXUS: Rift beam ===
const RiftBeam: React.FC<ConnectionProps> = ({ from, to, index }) => {
  const [pathD, setPathD] = useState('');
  const [key, setKey] = useState(0);

  const generatePath = () => {
    const dx = to.x - from.x; const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    const segments = Math.max(4, Math.floor(distance / 20));
    let d = `M ${from.x} ${from.y}`;
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      const perpX = -dy / distance; const perpY = dx / distance;
      const offset = (Math.sin(t * Math.PI * 3 + index) * 6) + (Math.random() - 0.5) * 4;
      d += ` L ${from.x + dx * t + perpX * offset} ${from.y + dy * t + perpY * offset}`;
    }
    d += ` L ${to.x} ${to.y}`;
    return d;
  };

  useEffect(() => {
    setPathD(generatePath());
    const interval = setInterval(() => { setPathD(generatePath()); setKey(k => k + 1); }, 300);
    return () => clearInterval(interval);
  }, [from.x, from.y, to.x, to.y]);

  return (
    <g>
      <path key={`outer-${key}`} d={pathD} fill="none" stroke="hsl(280 60% 50% / 0.3)" strokeWidth="8" strokeLinecap="round" filter="url(#rift-glow)" />
      <path key={`main-${key}`} d={pathD} fill="none" stroke="url(#rift-gradient)" strokeWidth="3" strokeLinecap="round" filter="url(#rift-glow)" />
      <path key={`core-${key}`} d={pathD} fill="none" stroke="hsl(300 80% 80%)" strokeWidth="1" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1s" repeatCount="indefinite" />
      </path>
      {/* Phase portals at endpoints */}
      <circle cx={from.x} cy={from.y} r="4" fill="none" stroke="hsl(280 70% 60% / 0.5)" strokeWidth="1"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx={to.x} cy={to.y} r="4" fill="none" stroke="hsl(280 70% 60% / 0.5)" strokeWidth="1"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s" /></circle>
    </g>
  );
};

// === DEFAULT: Electric Arc ===
interface ElectricArcProps { from: { x: number; y: number }; to: { x: number; y: number }; delay: number; }

const ElectricArc: React.FC<ElectricArcProps> = ({ from, to, delay }) => {
  const [pathD, setPathD] = useState('');
  const [key, setKey] = useState(0);

  const generatePath = () => {
    const dx = to.x - from.x; const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    const segments = Math.max(3, Math.floor(distance / 15));
    let d = `M ${from.x} ${from.y}`;
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      const perpX = -dy / distance; const perpY = dx / distance;
      const offset = (Math.random() - 0.5) * 12;
      d += ` L ${from.x + dx * t + perpX * offset} ${from.y + dy * t + perpY * offset}`;
    }
    d += ` L ${to.x} ${to.y}`;
    return d;
  };

  useEffect(() => {
    setPathD(generatePath());
    const interval = setInterval(() => { setPathD(generatePath()); setKey(k => k + 1); }, 150 + Math.random() * 100);
    return () => clearInterval(interval);
  }, [from.x, from.y, to.x, to.y]);

  return (
    <g style={{ animationDelay: `${delay}s` }}>
      <path key={`glow-${key}`} d={pathD} fill="none" stroke="hsl(var(--neon))" strokeWidth="6" strokeLinecap="round" opacity="0.3" filter="url(#electric-glow)" />
      <path key={`main-${key}`} d={pathD} fill="none" stroke="url(#arc-gradient)" strokeWidth="2" strokeLinecap="round" filter="url(#electric-glow)"><animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite" /></path>
      <path key={`core-${key}`} d={pathD} fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeLinecap="round" opacity="0.8"><animate attributeName="opacity" values="0.5;1;0.5" dur="0.3s" repeatCount="indefinite" /></path>
    </g>
  );
};
