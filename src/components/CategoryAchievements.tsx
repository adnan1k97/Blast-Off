import React from 'react';
import { CATEGORIES, LevelCategory } from './CategoryFilter';
import { levels } from '@/data/levels';
import { LevelProgress } from '@/types/game';
import { Trophy, Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface CategoryAchievementsProps {
  progress: Record<number, LevelProgress>;
}

interface CategoryStats {
  category: LevelCategory;
  name: string;
  icon: React.ElementType;
  totalLevels: number;
  completedWith3Stars: number;
  isComplete: boolean;
}

export const getCategoryStats = (progress: Record<number, LevelProgress>): CategoryStats[] => {
  return CATEGORIES.filter(c => c.id !== 'all').map(category => {
    const categoryLevels = levels.filter(l => l.category === category.id);
    const completedWith3Stars = categoryLevels.filter(l => 
      progress[l.id]?.stars === 3
    ).length;
    
    return {
      category: category.id,
      name: category.name,
      icon: category.icon,
      totalLevels: categoryLevels.length,
      completedWith3Stars,
      isComplete: categoryLevels.length > 0 && completedWith3Stars === categoryLevels.length,
    };
  });
};

export const CategoryAchievements: React.FC<CategoryAchievementsProps> = ({ progress }) => {
  const stats = getCategoryStats(progress);
  const completedCount = stats.filter(s => s.isComplete).length;
  
  return (
    <div className="px-6 py-4 border-t border-border">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between bg-card">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="font-medium">
                Achievements ({completedCount}/{stats.length})
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-[var(--radix-dropdown-menu-trigger-width)] bg-card border-border p-3"
          align="start"
        >
          <div className="grid grid-cols-2 gap-2">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.category}
                  className={cn(
                    'relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all',
                    'border',
                    stat.isComplete
                      ? 'border-primary bg-primary/10 text-primary shadow-md shadow-primary/20'
                      : 'border-border bg-background text-muted-foreground'
                  )}
                  title={`${stat.name}: ${stat.completedWith3Stars}/${stat.totalLevels} levels with 3 stars`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{stat.name}</span>
                  {stat.isComplete ? (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  ) : (
                    <span className="text-xs opacity-70 ml-auto">
                      {stat.completedWith3Stars}/{stat.totalLevels}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Get 3 stars on all levels in a category to unlock!
          </p>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
