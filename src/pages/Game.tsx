import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GameCanvas } from '@/components/GameCanvas';
import { LevelCompleteModal } from '@/components/LevelCompleteModal';
import { GameOverModal } from '@/components/GameOverModal';
import { GameBackground } from '@/components/GameBackground';
import { StarThresholdBar } from '@/components/StarThresholdBar';
import { getLevel, levels } from '@/data/levels';
import { saveProgress } from '@/lib/storage';
import { useGamePhysics } from '@/hooks/useGamePhysics';
import { getWorldTheme } from '@/data/worldThemes';
import { getStarThresholds } from '@/lib/starThresholds';
import { Pause, Play, Home, RotateCcw, Clock, Coins } from 'lucide-react';
import { useGyroscope } from '@/hooks/useGyroscope';
import { toast } from 'sonner';

const Game: React.FC = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [result, setResult] = useState<{ time: number; falls: number; stars: number; score: number; collected: number; total: number } | null>(null);
  const [key, setKey] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [collectedCount, setCollectedCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasFalls, setHasFalls] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);
  
  const { calculateStars } = useGamePhysics();
  const gyroscope = useGyroscope();
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const currentLevelId = parseInt(levelId || '1');

  // Level Gating check on mount & level change
  useEffect(() => {
    const hasNftPass = localStorage.getItem('has_nft_pass') === 'true';
    if (currentLevelId > 5 && !hasNftPass) {
      toast.info('NFT Mission Pass required to unlock Level 6+');
      navigate('/mint');
    }
  }, [currentLevelId, navigate]);

  // Parallax effect from mouse/tilt
  useEffect(() => {
    if (gyroscope.isEnabled) {
      setParallaxOffset({ x: gyroscope.tilt.x * 15, y: gyroscope.tilt.y * 15 });
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallaxOffset({ x: cx * 15, y: cy * 15 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gyroscope.isEnabled, gyroscope.tilt]);
  
  const level = getLevel(currentLevelId);
  const hasNextLevel = currentLevelId < levels.length;
  const totalCollectibles = level?.collectibles?.length || 0;
  const theme = useMemo(() => getWorldTheme(currentLevelId), [currentLevelId]);
  const starThresholds = useMemo(() => level ? getStarThresholds(level) : { three: 15, two: 30 }, [level]);

  useEffect(() => {
    setGameStatus('playing');
    setResult(null);
    setIsPaused(false);
    setKey(prev => prev + 1);
    setCurrentScore(0);
    setCollectedCount(0);
    setCurrentTime(0);
    setHasFalls(false);
    setShowMintModal(false);
  }, [currentLevelId]);

  const handleWin = useCallback((time: number, falls: number) => {
    const stars = calculateStars(time, falls, starThresholds);
    setResult({ time, falls, stars, score: currentScore, collected: collectedCount, total: totalCollectibles });
    setGameStatus('won');
    
    saveProgress(currentLevelId, {
      levelId: currentLevelId,
      stars,
      bestTime: time,
      completed: true,
      totalCollected: collectedCount,
      maxCollectibles: totalCollectibles,
    });
  }, [currentLevelId, calculateStars, currentScore, collectedCount, totalCollectibles, starThresholds]);

  const handleLose = useCallback(() => {
    setGameStatus('lost');
  }, []);

  const handleRetry = useCallback(() => {
    setGameStatus('playing');
    setResult(null);
    setCurrentScore(0);
    setCollectedCount(0);
    setCurrentTime(0);
    setHasFalls(false);
    setKey(prev => prev + 1);
  }, []);

  const handleNextLevel = useCallback(() => {
    const hasNftPass = localStorage.getItem('has_nft_pass') === 'true';
    if (currentLevelId === 5 && !hasNftPass) {
      setShowMintModal(true);
      return;
    }
    if (hasNextLevel) {
      navigate(`/game/${currentLevelId + 1}`);
    }
  }, [hasNextLevel, currentLevelId, navigate]);

  const handleMenu = useCallback(() => {
    navigate('/levels');
  }, [navigate]);

  if (!level) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Level not found</h1>
          <Button onClick={() => navigate('/levels')}>Back to Levels</Button>
        </div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500"
      style={{
        background: `linear-gradient(135deg, ${theme.pageBgFrom}, ${theme.pageBgVia}, ${theme.pageBgTo})`,
      }}
    >
      {/* World background image with parallax */}
      <div 
        className="fixed z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          inset: '-20px',
          backgroundImage: `url(${theme.backgroundImage})`,
          opacity: 0.4,
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) scale(1.05)`,
          transition: 'transform 0.3s ease-out, opacity 0.7s',
        }}
      />
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, ${theme.pageBgFrom}cc 0%, transparent 30%, transparent 70%, ${theme.pageBgTo}cc 100%)`,
        }}
      />

      {/* Ambient particle background */}
      <GameBackground theme={theme} />

      {/* Header */}
      <header 
        className="relative z-10 flex items-center justify-between p-4"
        style={{ borderBottom: `1px solid ${theme.borderAccent}`, background: 'rgba(0,0,0,0.2)' }}
      >
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleMenu} className="text-foreground hover:bg-white/10">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleRetry} className="text-foreground hover:bg-white/10" title="Reset Level">
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-widest opacity-60" style={{ color: theme.textAccent }}>Level {currentLevelId}</span>
          <h1 className="text-lg font-bold text-foreground leading-none">{level.name}</h1>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsPaused(!isPaused)} 
          className="text-foreground hover:bg-white/10"
          title={isPaused ? "Resume" : "Pause"}
        >
          {isPaused ? <Play className="w-5 h-5 ml-0.5" /> : <Pause className="w-5 h-5" />}
        </Button>
      </header>

      {/* Timer and Score Display */}
      <div className="relative z-10 flex justify-center gap-4 py-2 mt-2">
        <div 
          className="backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2"
          style={{ 
            background: theme.cardBg,
            border: `1px solid ${theme.borderAccent}`,
          }}
        >
          <Clock className="w-4 h-4" style={{ color: theme.textAccent }} />
          <span className="font-mono text-lg font-bold text-foreground" id="game-timer">0:00</span>
        </div>
        
        {totalCollectibles > 0 && (
          <div 
            className="backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2"
            style={{ 
              background: theme.cardBg,
              border: `1px solid ${theme.borderAccent}`,
            }}
          >
            <Coins className="w-4 h-4 text-yellow-500" />
            <span className="font-mono text-lg font-bold text-foreground">
              <span id="game-score">{currentScore}</span>
              <span className="text-muted-foreground text-sm ml-2">({collectedCount}/{totalCollectibles})</span>
            </span>
          </div>
        )}
      </div>

      {/* Star Threshold Countdown Bar */}
      <div className="relative z-10">
        <StarThresholdBar
          elapsedTime={currentTime}
          threeStarTime={starThresholds.three}
          twoStarTime={starThresholds.two}
          hasFalls={hasFalls}
        />
      </div>

      {/* Game Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        <GameCanvas
          key={key}
          level={level}
          onWin={handleWin}
          onLose={handleLose}
          isPaused={isPaused}
          onTimeUpdate={(time) => {
            setCurrentTime(time);
            const timerEl = document.getElementById('game-timer');
            if (timerEl) {
              timerEl.textContent = formatTime(time);
            }
          }}
          onScoreUpdate={(score, collected) => {
            setCurrentScore(score);
            setCollectedCount(collected);
          }}
        />
      </main>

      {/* Modals */}
      {gameStatus === 'won' && result && (
        <LevelCompleteModal
          stars={result.stars}
          time={result.time}
          levelName={level.name}
          onRetry={handleRetry}
          onNextLevel={handleNextLevel}
          hasNextLevel={hasNextLevel}
          score={result.score}
          collected={result.collected}
          totalCollectibles={result.total}
          worldTheme={theme}
        />
      )}

      {gameStatus === 'lost' && (
        <GameOverModal 
          onRetry={handleRetry} 
          onMenu={handleMenu}
          worldTheme={theme}
        />
      )}

      {/* Gated NFT Mint Modal Prompt */}
      {showMintModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 animate-in fade-in duration-400" style={{ background: 'rgba(0,0,0,0.85)' }}>
          <div className="relative z-20 rounded-2xl p-8 max-w-md w-full mx-4 text-center bg-[#1A1535] border border-yellow-500/30 shadow-[0_0_60px_rgba(255,179,43,0.15)]">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                <span className="text-3xl">🔒</span>
              </div>
            </div>
            <h2 className="text-3xl font-['Bebas_Neue'] tracking-wider text-white mb-2">NFT MISSION PASS REQUIRED</h2>
            <p className="text-sm text-white/60 mb-6 font-sans">
              You have successfully completed Level 5! Accessing Level 6 and the remaining 395 sectors requires minting the Mission Pass.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex justify-between items-center text-xs font-mono">
              <span className="text-white/40">MINT COST</span>
              <span className="text-[#FFB32B] font-bold">$0.01 (0.000003 ETH)</span>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" onClick={() => navigate('/home')} className="flex-1 bg-transparent border-white/10 text-white/60 hover:bg-white/5">
                Main Menu
              </Button>
              <Button size="lg" onClick={() => navigate('/mint')} className="flex-1 text-[#0D0A1A] font-bold animate-pulse" style={{ background: 'linear-gradient(135deg, #FFB32B, #F5C63C)' }}>
                MINT PASS
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
