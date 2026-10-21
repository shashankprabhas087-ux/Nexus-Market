import React from 'react';
import formatPrice from '../../utils/formatPrice';
import calcDiscount from '../../utils/calcDiscount';

export default function PriceTag({
  price,
  originalPrice,
  size = 'card',
  color = 'coral',
  showDiscount = true,
  className = '',
}) {
  const discount = calcDiscount(originalPrice, price);

  const sizeClasses = {
    hero: 'text-price-hero font-price-hero',
    card: 'text-price-card font-price-card',
    sm: 'text-headline-sm font-headline-sm',
  };

  const colorClasses = {
    coral: 'text-brand-coral',
    navy: 'text-brand-navy',
  };

  return (
    <div className={`flex items-baseline gap-2 flex-wrap ${className}`}>
      <span className={`${sizeClasses[size] || sizeClasses.card} ${colorClasses[color] || colorClasses.coral} tracking-tight font-extrabold tabular-nums`}>
        {formatPrice(price)}
      </span>

      {originalPrice && originalPrice > price && (
        <span className="text-price-strikethrough font-price-strikethrough text-outline line-through tabular-nums">
          {formatPrice(originalPrice)}
        </span>
      )}

      {showDiscount && discount > 0 && (
        <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-1.5 py-0.5 rounded uppercase leading-none">
          -{discount}%
        </span>
      )}
    </div>
  );
}
