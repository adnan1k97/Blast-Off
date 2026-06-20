import React from 'react';
import { RatingStar } from '@/components/CustomIcons';

interface StarRatingProps {
  stars: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  stars, 
  maxStars = 3, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxStars }).map((_, i) => (
        <RatingStar
          key={i}
          className={`${sizeClasses[size]} ${
            i < stars 
              ? 'text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]' 
              : 'text-muted-foreground'
          } transition-all duration-300`}
        />
      ))}
    </div>
  );
};
