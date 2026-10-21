import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Rating from '../ui/Rating';
import PriceTag from '../ui/PriceTag';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product, layout = 'grid' }) {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  if (layout === 'list') {
    return (
      <article className="bg-surface-container-lowest border border-outline-variant rounded hover:border-outline hover:shadow-md transition-all duration-150 flex flex-col sm:flex-row group relative overflow-hidden">
        <Link to={`/product/${product.id}`} className="relative sm:w-48 aspect-square bg-surface-container-low p-3 flex-shrink-0 flex items-center justify-center">
          {product.badge && (
            <div className="absolute top-2 left-2 z-10">
              <Badge variant={product.badgeVariant || 'coral'} size="xs">
                {product.badge}
              </Badge>
            </div>
          )}
          <img
            src={product.image}
            alt={product.alt || product.title}
            loading="lazy"
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-body-sm text-outline uppercase tracking-wider text-[11px]">
                {product.brand}
              </span>
              <button
                type="button"
                onClick={handleToggleWishlist}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`p-1 text-outline hover:text-brand-coral transition-colors ${inWishlist ? 'text-brand-coral' : ''}`}
              >
                <span className={`material-symbols-outlined text-[20px] ${inWishlist ? 'fill' : ''}`}>
                  favorite
                </span>
              </button>
            </div>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-headline-sm font-headline-sm text-brand-navy line-clamp-2 leading-tight group-hover:text-brand-coral transition-colors mt-0.5">
                {product.title}
              </h3>
            </Link>
            <Rating rating={product.rating} reviewCount={product.reviewCount} showScore className="mt-1.5" />
            <PriceTag price={product.price} originalPrice={product.originalPrice} className="mt-2" />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            {product.deliveryPromise && (
              <p className="text-body-sm text-brand-navy flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-brand-coral">local_shipping</span>
                <span>Get it by <strong>{product.deliveryPromise}</strong></span>
              </p>
            )}
            <Button variant="primary" size="sm" onClick={handleAddToCart} icon="add_shopping_cart">
              Add to Bag
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-surface-container-lowest border border-outline-variant rounded hover:border-outline hover:shadow-elevation-1 transition-all duration-150 flex flex-col group relative">
      <div className="relative aspect-square w-full bg-surface-container-low p-3 overflow-hidden rounded-t">
        {product.badge && (
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            <Badge variant={product.badgeVariant || 'coral'} size="xs">
              {product.badge}
            </Badge>
          </div>
        )}
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-brand-coral transition-colors z-10"
        >
          <span className={`material-symbols-outlined text-[18px] ${inWishlist ? 'fill text-brand-coral' : ''}`}>
            favorite
          </span>
        </button>
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.alt || product.title}
            loading="lazy"
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <span className="text-body-sm font-body-sm text-outline uppercase tracking-wider text-[11px]">
          {product.brand}
        </span>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-headline-sm font-headline-sm text-brand-navy line-clamp-2 leading-tight group-hover:text-brand-coral transition-colors mt-0.5 min-h-[44px]">
            {product.title}
          </h3>
        </Link>

        <Rating rating={product.rating} reviewCount={product.reviewCount} showScore className="mt-1.5" />

        <PriceTag price={product.price} originalPrice={product.originalPrice} className="mt-2.5" />

        {product.deliveryPromise && (
          <p className="text-body-sm text-brand-navy mt-1.5 flex items-center gap-1 text-[13px]">
            <span className="material-symbols-outlined text-[16px] text-brand-coral">local_shipping</span>
            <span>Get it by <strong>{product.deliveryPromise}</strong></span>
          </p>
        )}

        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 mb-3">
            {product.colors.map((c, i) => (
              <span
                key={i}
                style={{ backgroundColor: c }}
                className={`w-3.5 h-3.5 rounded-full border border-outline-variant ${i === 0 ? 'ring-1 ring-brand-navy' : ''}`}
              />
            ))}
          </div>
        )}

        <div className="mt-auto pt-2">
          <Button variant="primary" fullWidth size="sm" onClick={handleAddToCart} icon="add_shopping_cart">
            Add to Bag
          </Button>
        </div>
      </div>
    </article>
  );
}
