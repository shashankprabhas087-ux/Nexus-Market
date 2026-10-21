import React from 'react';

export default function Rating({
  rating = 5,
  reviewCount,
  size = 14,
  showScore = false,
  className = '',
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.3 && rating - fullStars < 0.8;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex text-amber-500 items-center" style={{ gap: '2px' }}>
        {[...Array(fullStars)].map((_, i) => (
          <span
            key={`full-${i}`}
            className="material-symbols-outlined text-amber-500 fill"
            style={{ fontSize: `${size}px` }}
          >
            star
          </span>
        ))}
        {hasHalfStar && (
          <span
            className="material-symbols-outlined text-amber-500"
            style={{ fontSize: `${size}px` }}
          >
            star_half
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span
            key={`empty-${i}`}
            className="material-symbols-outlined text-outline-variant"
            style={{ fontSize: `${size}px` }}
          >
            star
          </span>
        ))}
      </div>

      {showScore && (
        <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
          {rating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className="font-body-sm text-body-sm text-outline">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
