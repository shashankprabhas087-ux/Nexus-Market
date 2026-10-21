import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products = [],
  layout = 'grid',
  loading = false,
  emptyMessage = 'No products found matching your selection.',
  onResetFilters,
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col gap-3 animate-pulse"
          >
            <div className="w-full aspect-square bg-slate-200 rounded" />
            <div className="h-3 w-16 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-3/4 bg-slate-200 rounded" />
            <div className="h-5 w-24 bg-slate-200 rounded mt-2" />
            <div className="h-9 w-full bg-slate-200 rounded mt-auto" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-12 text-center flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-[48px] text-outline mb-3">
          search_off
        </span>
        <h3 className="text-headline-md font-headline-md text-brand-navy mb-1">
          No matching products
        </h3>
        <p className="text-on-surface-variant font-body-md text-body-md max-w-md mb-6">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 bg-brand-navy text-white rounded font-label-md text-label-md hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  if (layout === 'list') {
    return (
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} layout="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} layout="grid" />
      ))}
    </div>
  );
}
