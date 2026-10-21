import React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';

export default function CartItem({ item, onUpdateQuantity, onRemove, onSaveForLater }) {
  return (
    <article className="p-6 flex flex-col sm:flex-row gap-5 hover:bg-slate-50/50 transition-colors duration-150">
      <Link
        to={`/product/${item.id}`}
        className="w-full sm:w-28 sm:h-28 h-48 bg-surface-container-low rounded-lg border border-outline-variant flex-shrink-0 relative overflow-hidden flex items-center justify-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2"
        />
        <span className="absolute top-1 left-1 bg-brand-navy text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
          PRO
        </span>
      </Link>

      <div className="flex-grow flex flex-col justify-between gap-3">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div>
            <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
              {item.brand}
            </span>
            <Link to={`/product/${item.id}`}>
              <h2 className="text-headline-sm font-headline-sm font-bold text-brand-navy hover:text-brand-coral transition-colors">
                {item.title}
              </h2>
            </Link>
            <div className="flex items-center gap-3 mt-1 text-body-sm text-on-surface-variant">
              {item.variant && (
                <span>Variant: <strong className="text-brand-navy">{item.variant}</strong></span>
              )}
              <span className="inline-flex items-center gap-1 font-label-sm text-emerald-600 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                In Stock
              </span>
            </div>
          </div>

          <div className="text-right sm:flex-shrink-0">
            <span className="font-price-card text-price-card text-brand-navy font-extrabold tabular-nums">
              {formatPrice(item.price * item.quantity)}
            </span>
            {item.originalPrice && item.originalPrice > item.price && (
              <div className="font-price-strikethrough text-price-strikethrough text-outline line-through tabular-nums">
                {formatPrice(item.originalPrice * item.quantity)}
              </div>
            )}
          </div>
        </div>

        {/* Action Controls: Qty & Mutators */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div className="flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-brand-navy hover:bg-slate-100 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="w-10 text-center font-headline-sm text-headline-sm font-bold text-brand-navy tabular-nums">
              {item.quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-brand-navy hover:bg-slate-100 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-body-sm">
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-on-surface-variant hover:text-red-600 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
              <span>Delete</span>
            </button>
            <span className="text-outline-variant">|</span>
            <button
              type="button"
              onClick={() => onSaveForLater && onSaveForLater(item)}
              className="text-on-surface-variant hover:text-brand-coral transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
