import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WORLDS } from '@/components/WorldSelector';
import { WorldMap } from '@/components/WorldMap';
import { CategoryAchievements, getCategoryStats } from '@/components/CategoryAchievements';
import { AchievementCelebration } from '@/components/AchievementCelebration';
import { LevelCard } from '@/components/LevelCard';
import { ElectromagneticBackground } from '@/components/ElectromagneticBackground';
import { ElectricArcs } from '@/components/ElectricArcs';
import { levels } from '@/data/levels';
import { loadProgress, isLevelUnlocked, getTotalStars, getCompletedLevels, loadUnlockedAchievements, saveUnlockedAchievement } from '@/lib/storage';
import { ArrowLeft, Trophy } from 'lucide-react';
import { LevelCategory } from '@/components/CategoryFilter';
import { useIsMobile } from '@/hooks/use-mobile';

const LevelSelect: React.FC = () => {
  const navigate = useNavigate();
  const progress = useMemo(() => loadProgress(), []);
  const totalStars = getTotalStars(progress);
  const completedCount = getCompletedLevels(progress);
  const [selectedWorld, setSelectedWorld] = useState<string>('techlab');
  const [celebratingCategory, setCelebratingCategory] = useState<LevelCategory | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Calculate grid columns based on screen size
  const getColumns = () => {
    if (typeof window === 'undefined') return 2;
    const width = window.innerWidth;
    if (width < 640) return 2;
    if (width < 768) return 3;
    if (width < 1024) return 4;
    return 5;
  };

  const [columns, setColumns] = useState(getColumns);

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check for newly unlocked achievements
  useEffect(() => {
    const stats = getCategoryStats(progress);
    const previouslyUnlocked = loadUnlockedAchievements();
    
    // Find newly completed categories
    for (const stat of stats) {
      if (stat.isComplete && !previouslyUnlocked.includes(stat.category)) {
        // New achievement unlocked!
        saveUnlockedAchievement(stat.category);
        setCelebratingCategory(stat.category);
        break; // Only celebrate one at a time
      }
    }
  }, [progress]);

  const currentWorld = WORLDS.find(w => w.id === selectedWorld);

  const filteredLevels = useMemo(() => {
    if (!currentWorld) return [];
    return levels.filter(level => 
      level.id >= currentWorld.levelRange[0] && 
      level.id <= currentWorld.levelRange[1]
    );
  }, [selectedWorld, currentWorld]);

  // Get unlocked level indices in the filtered grid
  const unlockedIndices = useMemo(() => {
    return filteredLevels
      .map((level, index) => ({ level, index }))
      .filter(({ level }) => isLevelUnlocked(level.id, progress))
      .map(({ index }) => index);
  }, [filteredLevels, progress]);

  const handleLevelClick = (levelId: number) => {
    navigate(`/game/${levelId}`);
  };

  const worldLevelCount = currentWorld ? currentWorld.levelRange[1] - currentWorld.levelRange[0] + 1 : 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Electromagnetic chamber background */}
      <ElectromagneticBackground worldId={selectedWorld} />

      {/* Achievement Celebration Modal */}
      {celebratingCategory && (
        <AchievementCelebration 
          category={celebratingCategory}
          onClose={() => setCelebratingCategory(null)}
        />
      )}

      {/* Header with glass effect */}
      <header 
        className="relative z-10 flex items-center justify-between p-6 border-b"
        style={{
          borderColor: 'hsl(var(--neon) / 0.2)',
          background: 'linear-gradient(180deg, hsl(var(--metal) / 0.9) 0%, hsl(var(--metal) / 0.7) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="hover:bg-neon/10 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        <h1 
          className="text-2xl font-bold tracking-wide"
          style={{
            color: 'hsl(var(--neon))',
            textShadow: '0 0 20px hsl(var(--neon) / 0.5)',
          }}
        >
          SELECT LEVEL
        </h1>
        
        <div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: 'hsl(var(--metal-highlight))',
            border: '1px solid hsl(var(--neon) / 0.3)',
            boxShadow: '0 0 15px hsl(var(--neon) / 0.2)',
          }}
        >
          <Trophy className="w-4 h-4 text-primary" />
          <span className="font-bold font-mono text-primary">{totalStars}/{levels.length * 3}</span>
        </div>
      </header>


      {/* Category Achievements */}
      <div className="relative z-10">
        <CategoryAchievements progress={progress} />
      </div>

      {/* World Map */}
      <div className="relative z-10">
        <WorldMap
          selectedWorld={selectedWorld}
          onWorldChange={setSelectedWorld}
          totalStars={totalStars}
          progress={progress}
        />
      </div>

      {/* World info and level count */}
      <div className="relative z-10 px-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 
              className="text-lg font-bold"
              style={{ color: currentWorld?.color ? `var(--${currentWorld.color.replace('text-', '')})` : 'hsl(var(--foreground))' }}
            >
              {currentWorld?.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {currentWorld?.description}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredLevels.length} / {worldLevelCount} levels
          </p>
        </div>
      </div>

      {/* Level Grid with ferrofluid cards */}
      <main className="relative z-10 p-6 pt-2 pb-20">
        {filteredLevels.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>No levels available in this world yet.</p>
          </div>
        ) : (
          <div className="relative" ref={gridRef}>
            {/* Electric arcs connecting unlocked levels */}
            {!isMobile && (
              <ElectricArcs
                containerRef={gridRef}
                unlockedIndices={unlockedIndices}
                columns={columns}
                worldId={selectedWorld}
              />
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 relative z-10">
              {filteredLevels.map((level, index) => {
                const levelProgress = progress[level.id];
                const unlocked = isLevelUnlocked(level.id, progress);
                
                return (
                  <LevelCard
                    key={level.id}
                    level={level}
                    levelProgress={levelProgress}
                    unlocked={unlocked}
                    gameMode="normal"
                    onClick={() => handleLevelClick(level.id)}
                    index={index}
                    gridIndex={index}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Electric path line decoration at bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-1 z-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(var(--neon)) 50%, transparent 100%)',
          boxShadow: '0 0 20px hsl(var(--neon)), 0 -5px 30px hsl(var(--neon) / 0.3)',
          animation: 'electric-pulse 2s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default LevelSelect;
