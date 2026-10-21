import React from 'react';
import { Link } from 'react-router-dom';
import lightningDeals from '../../data/deals';
import useCountdown from '../../hooks/useCountdown';
import Rating from '../ui/Rating';
import formatPrice from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function LightningDeals() {
  const { hours, minutes, seconds } = useCountdown(1, 28, 45);
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-brand-coral flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-headline-md font-headline-md text-brand-navy">
                Lightning Deals
              </h2>
              <span className="bg-red-100 text-red-700 font-label-sm text-label-sm px-2 py-0.5 rounded-full uppercase font-bold">
                Fast Selling
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Handpicked price drops reserved for Prime &amp; Fast-Track members
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="font-label-sm text-label-sm text-outline">
            Fresh deals expire in:
          </span>
          <div className="flex gap-1 font-headline-sm text-headline-sm text-white font-bold tabular-nums">
            <span className="bg-brand-navy px-2 py-0.5 rounded">{hours}</span>:
            <span className="bg-brand-navy px-2 py-0.5 rounded">{minutes}</span>:
            <span className="bg-brand-navy px-2 py-0.5 rounded">{seconds}</span>
          </div>
        </div>
      </div>

      {/* 4-Column SKU Deal Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {lightningDeals.map((deal) => {
          const inWishlist = isInWishlist(deal.id);
          return (
            <div
              key={deal.id}
              className="border border-outline-variant hover:border-outline rounded-lg p-3 bg-surface flex flex-col justify-between transition-all hover:shadow-elevation-1 relative group"
            >
              <div className="relative w-full aspect-square bg-surface-container-lowest rounded overflow-hidden mb-3">
                <Link to={`/product/${deal.id}`} className="block w-full h-full">
                  <img
                    src={deal.image}
                    alt={deal.alt || deal.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <span className="absolute top-2 left-2 bg-brand-coral text-white font-label-sm text-label-sm px-1.5 py-0.5 rounded uppercase font-bold">
                  -{deal.discountPercent}% OFF
                </span>
                <button
                  type="button"
                  onClick={() => toggleWishlist(deal.id)}
                  aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-brand-coral transition-colors ${
                    inWishlist ? 'text-brand-coral' : ''
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${inWishlist ? 'fill text-brand-coral' : ''}`}>
                    favorite
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-1.5 flex-1 justify-between">
                <div>
                  <span className="text-outline font-label-sm text-label-sm uppercase">
                    {deal.brand}
                  </span>
                  <Link to={`/product/${deal.id}`}>
                    <h3 className="font-headline-sm text-headline-sm text-brand-navy line-clamp-2 leading-snug group-hover:text-brand-coral transition-colors">
                      {deal.title}
                    </h3>
                  </Link>

                  <Rating rating={deal.rating} reviewCount={deal.reviewCount} className="mt-1" />

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-price-card text-price-card text-brand-coral font-extrabold tabular-nums">
                      {formatPrice(deal.price)}
                    </span>
                    <span className="font-price-strikethrough text-price-strikethrough text-outline line-through tabular-nums">
                      {formatPrice(deal.originalPrice)}
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-1 mt-2">
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="bg-brand-coral h-full rounded-full transition-all duration-300"
                        style={{ width: `${deal.claimPercent}%` }}
                      />
                    </div>
                    <div className="flex justify-between font-label-sm text-label-sm text-outline">
                      <span className="text-brand-coral font-bold">{deal.claimPercent}% claimed</span>
                      <span>{deal.stockStatus}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addItem(deal, 1)}
                  className="mt-3 w-full bg-brand-navy hover:bg-slate-800 text-white font-label-md text-label-md py-2 rounded transition-colors flex items-center justify-center gap-1 active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
