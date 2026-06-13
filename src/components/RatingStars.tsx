import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviews?: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, reviews }) => {
  const filledStars = Math.round(rating);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-amber-400">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className={`${index < filledStars ? 'fill-current' : 'text-slate-300'} h-4 w-4`} />
        ))}
      </div>
      {reviews ? <span className="text-sm text-slate-500 dark:text-slate-400">({reviews})</span> : null}
    </div>
  );
};
export default RatingStars;
