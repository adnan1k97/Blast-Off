import React, { useState, useMemo, useCallback, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ballSkins, getRarityColor, getRarityGradient } from '@/data/balls';
import { loadShopState, saveSelectedBall, unlockBall } from '@/lib/storage';
import { getTotalStars, loadProgress } from '@/lib/storage';
import { BallSkin } from '@/types/shop';
import BallPreview from './BallPreview';
import BallUnlockCelebration from './BallUnlockCelebration';
import { Lock, Check, Crown, Gem, Zap, Circle, ArrowLeft } from 'lucide-react';
import { CustomStar, CustomSparkle } from '@/components/CustomIcons';
import { cn } from '@/lib/utils';

interface BallShopProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const rarityTabs = [
  { value: 'all', label: 'All' },
  { value: 'common', label: 'C', icon: Circle, color: '220 14% 70%' },
  { value: 'rare', label: 'R', icon: Gem, color: '200 85% 55%' },
  { value: 'epic', label: 'E', icon: Zap, color: '280 85% 65%' },
  { value: 'legendary', label: 'L', icon: Crown, color: '43 100% 58%' },
] as const;

const getRarityIcon = (rarity: BallSkin['rarity']) => {
  switch (rarity) {
    case 'common': return <Circle className="w-3 h-3" />;
    case 'rare': return <Gem className="w-3 h-3" />;
    case 'epic': return <Zap className="w-3 h-3" />;
    case 'legendary': return <Crown className="w-3 h-3" />;
  }
};

const getRarityLabel = (rarity: BallSkin['rarity']) => {
  switch (rarity) {
    case 'common': return 'Common';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legend';
  }
};

const BallShop = forwardRef<HTMLDivElement, BallShopProps>(({ open, onOpenChange }, ref) => {
  const [shopState, setShopState] = useState(() => loadShopState());
  const [totalStars] = useState(() => getTotalStars(loadProgress()));
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [celebratingBall, setCelebratingBall] = useState<BallSkin | null>(null);

  const handleSelectBall = useCallback((ball: BallSkin) => {
    if (shopState.unlockedBalls.includes(ball.id)) {
      saveSelectedBall(ball.id);
      setShopState(prev => ({ ...prev, selectedBallId: ball.id }));
    }
  }, [shopState.unlockedBalls]);

  const handleUnlockBall = useCallback((ball: BallSkin) => {
    if (totalStars >= ball.price && !shopState.unlockedBalls.includes(ball.id)) {
      unlockBall(ball.id);
      setCelebratingBall(ball);
      setShopState(prev => ({
        ...prev,
        unlockedBalls: [...prev.unlockedBalls, ball.id]
      }));
    }
  }, [totalStars, shopState.unlockedBalls]);

  const handleCelebrationComplete = useCallback(() => {
    setCelebratingBall(null);
  }, []);

  const filteredBalls = useMemo(() => {
    if (selectedTab === 'all') return ballSkins;
    return ballSkins.filter(ball => ball.rarity === selectedTab);
  }, [selectedTab]);

  const selectedBall = useMemo(() =>
    ballSkins.find(b => b.id === shopState.selectedBallId) || ballSkins[0],
    [shopState.selectedBallId]
  );

  if (!open) return null;

  return (
    <>
      {celebratingBall && (
        <BallUnlockCelebration
          ball={celebratingBall}
          onComplete={handleCelebrationComplete}
        />
      )}

      <div className="fixed inset-0 z-50 flex flex-col" style={{
        backgroundColor: '#0D0A1A',
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(83,68,169,0.45) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 90% 80%, rgba(187,80,152,0.2) 0%, transparent 60%)
        `,
        fontFamily: "'Barlow Condensed', sans-serif",
        color: '#F0ECF8',
      }}>
        {/* Header */}
        <header className="flex items-center justify-between px-5 pt-6 pb-4">
          <button
            onClick={() => onOpenChange(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <ArrowLeft className="w-5 h-5" style={{ color: '#F0ECF8' }} />
          </button>

          <h1 className="text-xl font-bold tracking-wide flex items-center gap-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <CustomSparkle className="w-5 h-5" style={{ color: '#B08CFF' }} />
            Ball Collection
          </h1>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <CustomStar className="w-4 h-4" style={{ color: '#FFD700' }} />
            <span className="font-bold text-sm tabular-nums">{totalStars}</span>
          </div>
        </header>

        {/* Equipped Ball Banner */}
        <div className="mx-5 mb-4 flex items-center gap-4 px-4 py-3 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(176,140,255,0.15), rgba(255,179,43,0.1))',
          border: '1px solid rgba(176,140,255,0.2)',
        }}>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-lg opacity-40"
              style={{ background: getRarityGradient(selectedBall.rarity) }}
            />
            <BallPreview ball={selectedBall} size={44} animated />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240,236,248,0.5)' }}>Equipped</p>
            <p className="font-bold text-sm truncate">{selectedBall.name}</p>
          </div>
          <Badge
            variant="outline"
            className="text-[10px] gap-1 shrink-0"
            style={{
              borderColor: `hsl(${getRarityColor(selectedBall.rarity)} / 0.5)`,
              color: `hsl(${getRarityColor(selectedBall.rarity)})`,
              background: `hsl(${getRarityColor(selectedBall.rarity)} / 0.1)`,
            }}
          >
            {getRarityIcon(selectedBall.rarity)}
            {getRarityLabel(selectedBall.rarity)}
          </Badge>
        </div>

        {/* Rarity Filter Tabs */}
        <div className="flex gap-2 px-5 mb-4">
          {rarityTabs.map((tab) => {
            const isActive = selectedTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: isActive ? 'rgba(176,140,255,0.25)' : 'rgba(255,255,255,0.06)',
                  border: isActive ? '1px solid rgba(176,140,255,0.5)' : '1px solid transparent',
                  color: isActive ? '#D4BFFF' : 'rgba(240,236,248,0.5)',
                }}
              >
                {'icon' in tab && tab.icon && <tab.icon className="w-3 h-3" style={'color' in tab && tab.color ? { color: isActive ? `hsl(${tab.color})` : undefined } : undefined} />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Ball Grid - Bento Grid */}
        <div className="flex-1 overflow-y-auto px-5 pb-8 custom-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="grid grid-cols-4 auto-rows-min grid-flow-dense gap-px bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm self-stretch shadow-2xl shadow-black/40">
            {filteredBalls.map((ball, index) => {
              const isUnlocked = shopState.unlockedBalls.includes(ball.id);
              const isSelected = shopState.selectedBallId === ball.id;
              const canAfford = totalStars >= ball.price;
              const rarityHsl = getRarityColor(ball.rarity);
              
              // Bento sizing based on rarity and index for a 4-column grid
              const isGrand = ball.rarity === 'legendary' && (index % 12 === 0);
              const isWide = !isGrand && (ball.rarity === 'legendary' || (ball.rarity === 'epic' && index % 3 === 0));
              const isTall = !isGrand && !isWide && (ball.rarity === 'epic' || (ball.rarity === 'rare' && index % 4 === 1));

              return (
                <div
                  key={ball.id}
                  className={cn(
                    "relative flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden group",
                    isGrand ? "col-span-2 row-span-2" : 
                    isWide ? "col-span-2 row-span-1" : 
                    isTall ? "col-span-1 row-span-2" : "col-span-1 row-span-1"
                  )}
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(176,140,255,0.25), rgba(255,179,43,0.15))'
                      : 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    padding: isGrand ? '24px' : isWide ? '16px 20px' : isTall ? '20px 12px' : '16px 8px',
                    minHeight: isGrand ? '240px' : isTall ? '240px' : '120px',
                  }}
                  onClick={() => isUnlocked ? handleSelectBall(ball) : canAfford ? handleUnlockBall(ball) : undefined}
                >
                  {/* Subtle inner border for the gapless effect */}
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                  
                  {/* Selection/Status Indicator Glow */}
                  {isSelected && (
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{ background: getRarityGradient(ball.rarity) }}
                    />
                  )}
                  {/* Rarity accent line at top */}
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: `hsl(${rarityHsl} / 0.5)` }}
                  />

                  {/* Ball Preview & Main Content Layout */}
                  <div className={cn(
                    "relative flex w-full h-full items-center justify-center",
                    isWide ? "flex-row gap-6 px-4" : "flex-col"
                  )}>
                    <div className="relative">
                      {(ball.rarity === 'legendary' || ball.rarity === 'epic') && (
                        <div
                          className={cn(
                            "absolute inset-0 rounded-full blur-2xl -z-10 animate-pulse transition-opacity duration-500",
                            isUnlocked ? "opacity-40" : "opacity-0"
                          )}
                          style={{ background: getRarityGradient(ball.rarity) }}
                        />
                      )}
                      <BallPreview ball={ball} size={isGrand ? 120 : isTall ? 90 : isWide ? 80 : 58} animated={isUnlocked} />
                      {!isUnlocked && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-[1px]">
                          <Lock className="w-4 h-4 text-white/40" />
                        </div>
                      )}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-violet-500 border-2 border-[#0D0A1A] shadow-lg shadow-violet-500/50">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>

                    <div className={cn(
                      "flex flex-col items-center",
                      isWide ? "items-start flex-1 min-w-0" : "mt-4 w-full"
                    )}>
                      <h4 className={cn(
                        "font-bold text-center leading-tight tracking-tight",
                        isWide ? "text-left text-lg" : isGrand ? "text-xl mb-1" : "text-[11px]",
                        isSelected ? "text-violet-300" : "text-[#F0ECF8]"
                      )}>
                        {ball.name}
                      </h4>

                      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-1">
                        <Badge
                          variant="outline"
                          className={cn(
                            "gap-1 font-bold border-none",
                            isWide || isGrand ? "text-[10px] px-2 py-0.5" : "text-[8px] px-1.5 py-0"
                          )}
                          style={{
                            color: `hsl(${rarityHsl})`,
                            background: `hsl(${rarityHsl} / 0.15)`,
                          }}
                        >
                          {getRarityIcon(ball.rarity)}
                          {getRarityLabel(ball.rarity)}
                        </Badge>
                        
                        {!isUnlocked && (
                          <div className={cn(
                            "flex items-center gap-1.5 px-2 py-0.5 rounded-full font-bold transition-colors",
                            canAfford ? "bg-amber-400/20 text-amber-400 border border-amber-400/30" : "bg-white/5 text-white/30",
                            isWide || isGrand ? "text-xs" : "text-[10px]"
                          )}>
                            <CustomStar className={cn(isWide || isGrand ? "w-3 h-3" : "w-2.5 h-2.5")} />
                            <span className="tabular-nums">{ball.price}</span>
                          </div>
                        )}
                        
                        {isUnlocked && isSelected && (
                          <span className="text-[9px] uppercase tracking-[0.15em] font-black text-violet-400">ACTIVE</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});

BallShop.displayName = 'BallShop';

export default BallShop;
