import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadProgress, getTotalStars, getCompletedLevels, getSelectedBallId } from '@/lib/storage';
import { levels } from '@/data/levels';
import { getBallById } from '@/data/balls';
import { cn } from '@/lib/utils';
import BallShop from '@/components/BallShop';
import BallPreview from '@/components/BallPreview';
import { RocketIcon, GearIcon, RefreshIcon, MapIcon, DiamondIcon, CustomSparkle, PlanetIcon } from '@/components/CustomIcons';
import { WalletButton } from './wallet/WalletButton';
import { useWallet } from './wallet/WalletProvider';
import { toast } from 'sonner';

const BlastoffHome: React.FC = () => {
  const navigate = useNavigate();
  const { connected, connect } = useWallet();
  const progress = useMemo(() => loadProgress(), []);
  const totalStars = getTotalStars(progress);
  const completedLevels = getCompletedLevels(progress);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  
  const selectedBall = useMemo(() => getBallById(getSelectedBallId()), []);
  const nextLevel = completedLevels < levels.length ? completedLevels + 1 : 1;
  const progressPercent = levels.length > 0 ? ((completedLevels / levels.length) * 100).toFixed(2) : '0';

  const hasNftPass = useMemo(() => localStorage.getItem('has_nft_pass') === 'true', []);

  // Automatic wallet connection on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const triggerAutoConnect = async () => {
      if (!connected) {
        try {
          await connect();
        } catch (err) {
          console.log('Silent autoconnect bypassed:', err);
        }
      }
    };
    triggerAutoConnect();

    return () => clearTimeout(timer);
  }, [connected, connect]);

  const getRankTitle = () => {
    if (totalStars >= 100) return 'Star Admiral';
    if (totalStars >= 50) return 'Galaxy Captain';
    if (totalStars >= 20) return 'Space Ranger';
    if (totalStars >= 5) return 'Super Explorer';
    return 'Cadet';
  };

  const handleLaunchMission = () => {
    if (nextLevel > 5 && !hasNftPass) {
      toast.info('NFT Mission Pass required to unlock Level 6+');
      navigate('/mint');
    } else {
      navigate(`/game/${nextLevel}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative" style={{
      backgroundColor: '#0D0A1A',
      backgroundImage: `
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(83,68,169,0.55) 0%, transparent 70%),
        radial-gradient(ellipse 50% 40% at 90% 80%, rgba(187,80,152,0.25) 0%, transparent 60%),
        radial-gradient(ellipse 40% 30% at 10% 60%, rgba(83,68,169,0.2) 0%, transparent 60%)
      `,
      fontFamily: "'Barlow Condensed', sans-serif",
      color: '#F0ECF8',
    }}>
      <StarField />
      <div className="fixed inset-0 pointer-events-none z-[100]" style={{
        background: 'repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
        opacity: 0.4,
      }} />

      <div className="relative z-[1] w-full max-w-[420px] mx-auto min-h-screen flex flex-col pb-10">
        {/* Header */}
        <header className={cn(
          "relative px-7 pt-5 pb-8 overflow-hidden transition-all duration-600 ease-out",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )} style={{ borderBottom: 'none' }}>
          <div className="flex justify-end items-center mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10" onClick={() => navigate('/settings')}>
              <GearIcon className="w-5 h-5 text-white/40 hover:text-white transition-colors" />
            </div>
          </div>
          <div className="absolute bottom-0 left-7 right-7 h-px" style={{
            background: 'linear-gradient(90deg, transparent, #5344A9, #BB5098, transparent)'
          }} />
          <div className="flex items-center gap-2 mb-2.5" style={{
            fontFamily: "'Space Mono', monospace", fontSize: '10px',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FFB32B',
          }}>
            <span className="inline-block w-[18px] h-px" style={{ background: '#FFB32B' }} />
            Stellar Navigation System
          </div>
          <div className="flex items-baseline gap-4 flex-wrap">
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 16vw, 72px)',
              lineHeight: 0.9, letterSpacing: '0.01em',
              background: 'linear-gradient(135deg, #F5C63C 0%, #FFB32B 40%, #F47F6B 80%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(255,179,43,0.4))',
            }}>Blast Off</span>
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(26px, 7vw, 32px)',
              lineHeight: 1, color: '#BB5098', letterSpacing: '0.04em',
              alignSelf: 'flex-end', paddingBottom: '6px',
            }}>Starry Maze</span>
          </div>
          <div className="absolute top-5 right-6 w-[52px] h-[52px]" style={{
            animation: 'hover-float 4s ease-in-out infinite',
            filter: 'drop-shadow(0 0 18px rgba(255,179,43,0.6))',
          }}><RocketIcon className="w-full h-full" style={{ color: '#FFB32B' }} /></div>
        </header>


        {/* Stats Strip */}
        <div className={cn(
          "flex mx-7 mt-2 rounded-[14px] overflow-hidden transition-all duration-600 delay-100",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )} style={{ border: '1px solid rgba(240,236,248,0.08)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}>
          <div className="flex-1 flex flex-col items-center gap-1 py-4 px-3">
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,248,0.35)' }}>Stars</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '34px', lineHeight: 1, color: '#FFB32B', filter: 'drop-shadow(0 0 8px rgba(255,179,43,0.5))' }}>{totalStars}</span>
            <span className="px-1.5 py-0.5 rounded" style={{ background: 'linear-gradient(135deg, #FFB32B, #F5C63C)', color: '#0D0A1A', fontFamily: "'Space Mono', monospace", fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{getRankTitle()}</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 py-4 px-3" style={{ borderLeft: '1px solid rgba(240,236,248,0.08)' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,248,0.35)' }}>Level</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '34px', lineHeight: 1, color: '#BB5098', filter: 'drop-shadow(0 0 8px rgba(187,80,152,0.5))' }}>{completedLevels}</span>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(240,236,248,0.35)' }}>of {levels.length}</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 py-4 px-3" style={{ borderLeft: '1px solid rgba(240,236,248,0.08)' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,236,248,0.35)' }}>Progress</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', lineHeight: 1, color: '#F47F6B', paddingTop: '7px' }}>{progressPercent}%</span>
            <div className="w-full rounded-[3px] h-1 mt-1" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-full rounded-[3px]" style={{ width: `${Math.max(parseFloat(progressPercent), 0.5)}%`, background: 'linear-gradient(90deg, #BB5098, #FFB32B)' }} />
            </div>
          </div>
        </div>

        {/* Mission Control */}
        <SectionLabel text="Mission Control" isLoaded={isLoaded} delay="delay-200" />
        <div className={cn("flex flex-col gap-2.5 px-7 transition-all duration-600 delay-200", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
          <button onClick={handleLaunchMission} className="relative w-full border-none cursor-pointer text-center rounded-xl flex items-center justify-center gap-2.5 transition-all duration-150 hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '20px 24px', background: 'linear-gradient(135deg, #BB5098 0%, #FFB32B 100%)', color: '#0D0A1A', boxShadow: '0 8px 32px rgba(187,80,152,0.4), 0 2px 8px rgba(0,0,0,0.4)' }}>
            <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 50%)' }} />
            <div className="absolute -inset-px rounded-[13px]" style={{ border: '2px solid rgba(255,179,43,0.6)', animation: 'pulse-ring 2.5s ease-out infinite' }} />
            <RocketIcon className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Launch Mission</span>
          </button>
          <div className="flex gap-2.5">
            <button onClick={() => navigate('/game/1')} className="flex-1 relative border cursor-pointer rounded-xl flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 12px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: '#F0ECF8' }}>
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(83,68,169,0.15), transparent)' }} />
              <RefreshIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">New Game</span>
            </button>
            <button onClick={() => setMapOpen(true)} className="flex-1 relative border cursor-pointer rounded-xl flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 12px', whiteSpace: 'nowrap', background: 'rgba(83,68,169,0.18)', borderColor: 'rgba(83,68,169,0.45)', color: '#F0ECF8' }}>
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(122,81,151,0.25), transparent)' }} />
              <MapIcon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Stellar Map</span>
            </button>
          </div>
          <div className="flex items-stretch gap-2.5">
            <button onClick={() => navigate('/settings')} className="relative border cursor-pointer rounded-xl flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ width: '22%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 8px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: '#F0ECF8' }}>
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(83,68,169,0.15), transparent)' }} />
              <GearIcon className="w-4 h-4 relative z-10 shrink-0" />
              <span className="relative z-10">Base</span>
            </button>
            <div className="flex-1 min-w-0 [&>button]:w-full [&>button]:h-full [&>button]:rounded-xl" style={{ width: '38%' }}>
              <WalletButton />
            </div>
            <button onClick={() => setShopOpen(true)} className="relative border-none cursor-pointer rounded-xl flex items-center justify-center gap-2 transition-all duration-150 hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ width: '40%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '17px', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '13px 12px', background: 'linear-gradient(135deg, #5344A9, #BB5098)', color: '#F0ECF8', boxShadow: '0 4px 20px rgba(83,68,169,0.4)' }}>
              <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 50%)' }} />
              <CustomSparkle className="w-3.5 h-3.5 relative z-10 shrink-0" />
              <span className="relative z-10">Summon</span>
              {selectedBall && (
                <div className="absolute -top-1 -right-1 z-10 w-6 h-6 rounded-full overflow-hidden" style={{ border: '2px solid rgba(255,255,255,0.25)', boxShadow: '0 0 8px rgba(187,80,152,0.5)' }}>
                  <BallPreview ball={selectedBall} size={24} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* NFT Mint */}
        <SectionLabel text="Web3 · Base" isLoaded={isLoaded} delay="delay-[280ms]" />
        <div className={cn("flex flex-col gap-2.5 px-7 transition-all duration-600 delay-[280ms]", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
          <button onClick={() => navigate('/mint')} className="relative w-full cursor-pointer rounded-xl flex items-center justify-center gap-2.5 transition-all duration-150 overflow-hidden hover:-translate-y-0.5 hover:brightness-115 active:scale-[0.97]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '18px 24px', background: 'linear-gradient(135deg, #7A5197 0%, #FFB32B 100%)', border: 'none', color: '#0D0A1A', boxShadow: '0 6px 28px rgba(122,81,151,0.4)' }}>
            <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
            <DiamondIcon className="w-4 h-4 relative z-10" />
            <span className="relative z-10" style={{ fontSize: '19px', letterSpacing: '0.08em' }}>{hasNftPass ? 'NFT Pass Owned' : 'Mint NFT Pass ($0.01)'}</span>
            {!hasNftPass && <span className="absolute top-0.5 right-0.5 rounded-bl-[10px] rounded-tr-xl z-10" style={{ background: '#FFB32B', color: '#0D0A1A', fontFamily: "'Space Mono', monospace", fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', padding: '4px 8px', lineHeight: 1 }}>NEW</span>}
          </button>
        </div>

        {/* Footer Credits */}
        <footer className={cn(
          "mt-auto px-7 pt-8 pb-4 flex flex-col items-center gap-1 transition-all duration-600 delay-[400ms]",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <div style={{ 
            fontFamily: "'Space Mono', monospace", 
            fontSize: '10px', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            color: 'rgba(240,236,248,0.3)' 
          }}>
            Powered by <span style={{ color: '#0052FF', fontWeight: 600 }}>Base</span>
          </div>
        </footer>
      </div>

      <BallShop open={shopOpen} onOpenChange={setShopOpen} />

      {/* Stellar Map Modal */}
      <div className={cn("fixed inset-0 z-[150] flex items-end justify-center transition-opacity duration-300", mapOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }} onClick={(e) => { if (e.target === e.currentTarget) setMapOpen(false); }}>
        <div className={cn("w-full max-w-[420px] rounded-t-3xl transition-transform duration-350", mapOpen ? "translate-y-0" : "translate-y-10")} style={{ background: '#1A1535', borderTop: '1px solid rgba(240,236,248,0.08)', padding: '20px 28px 40px' }}>
          <div className="w-9 h-1 rounded-full mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', letterSpacing: '0.06em', color: '#F0ECF8', marginBottom: '4px' }}>Stellar Map</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(240,236,248,0.35)', marginBottom: '20px' }}>
            {levels.length} SECTORS — {completedLevels} CLEARED — SELECT DESTINATION
          </div>
          <div className="grid grid-cols-5 gap-2 mb-5">
            {Array.from({ length: 20 }, (_, i) => {
              const num = i + 1;
              const isDone = progress[num]?.completed;
              const isCurrent = num === nextLevel;
              const isLocked = num > 5 && !hasNftPass;
              return (
                <div key={num} onClick={() => { 
                  if (isLocked) {
                    toast.info('NFT Mission Pass required to unlock Level 6+');
                    navigate('/mint');
                  } else {
                    navigate(`/game/${num}`); 
                    setMapOpen(false); 
                  }
                }} className="aspect-square rounded-[10px] flex flex-col items-center justify-center gap-0.5 cursor-pointer relative transition-all duration-100 hover:scale-[1.08]" style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.05em',
                  border: `1px solid ${isLocked ? 'rgba(239,68,68,0.2)' : isCurrent ? 'rgba(255,179,43,0.6)' : isDone ? 'rgba(83,68,169,0.6)' : 'rgba(240,236,248,0.08)'}`,
                  background: isLocked ? 'rgba(239,68,68,0.03)' : isCurrent ? 'rgba(255,179,43,0.15)' : isDone ? 'rgba(83,68,169,0.3)' : 'rgba(255,255,255,0.03)',
                  opacity: isLocked ? 0.5 : 1,
                }}>
                  {isLocked ? (
                    <span className="text-[10px] text-red-400">🔒</span>
                  ) : (
                    <>
                      {isCurrent && <span className="absolute top-0.5 right-1 text-[7px]" style={{ color: '#FFB32B' }}>▶</span>}
                      <PlanetIcon variant={i % 10} className="w-[14px] h-[14px]" style={{ color: isCurrent ? '#FFB32B' : isDone ? '#BB5098' : 'rgba(240,236,248,0.5)' }} />
                    </>
                  )}
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: isLocked ? 'rgba(240,236,248,0.2)' : isCurrent ? '#FFB32B' : isDone ? '#BB5098' : '#F0ECF8' }}>{num}</span>
                </div>
              );
            })}
          </div>
          <button onClick={() => { setMapOpen(false); navigate('/levels'); }} className="w-full rounded-xl cursor-pointer transition-all duration-150 hover:brightness-115" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(240,236,248,0.08)', color: 'rgba(240,236,248,0.35)', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px' }}>
            View All Levels
          </button>
          <button onClick={() => setMapOpen(false)} className="w-full rounded-xl cursor-pointer transition-all duration-150 hover:brightness-115 mt-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(240,236,248,0.08)', color: 'rgba(240,236,248,0.35)', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px' }}>
            Close Map
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow+Condensed:wght@300;400;600;700;800&display=swap');
        @keyframes hover-float {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        @keyframes pulse-ring {
          0% { opacity: 0.7; transform: scale(1); }
          80% { opacity: 0; transform: scale(1.04); }
          100% { opacity: 0; transform: scale(1.04); }
        }
        @keyframes twinkle {
          0%,100% { opacity: 0; transform: scale(0.6); }
          50% { opacity: var(--op, 0.6); transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

/* Section label component */
const SectionLabel: React.FC<{ text: string; isLoaded: boolean; delay: string }> = ({ text, isLoaded, delay }) => (
  <div className={cn("flex items-center gap-2.5 mx-7 mt-7 mb-2.5 transition-all duration-600", delay, isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")} style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,236,248,0.35)' }}>
    {text}
    <span className="flex-1 h-px" style={{ background: 'rgba(240,236,248,0.08)' }} />
  </div>
);

/* Star field background component */
const StarField: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 90 }, (_, i) => {
      const size = Math.random() * 2.5 + 0.5;
      return {
        id: i, size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dur: `${(Math.random() * 4 + 2).toFixed(1)}s`,
        del: `${(Math.random() * 5).toFixed(1)}s`,
        op: (Math.random() * 0.5 + 0.2).toFixed(2),
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <div key={s.id} className="absolute rounded-full" style={{
          width: s.size, height: s.size, left: s.left, top: s.top,
          background: '#F0ECF8',
          animation: `twinkle ${s.dur} ease-in-out infinite`,
          animationDelay: s.del, opacity: 0,
          // @ts-ignore
          '--op': s.op,
        } as React.CSSProperties} />
      ))}
    </div>
  );
};

export default BlastoffHome;
