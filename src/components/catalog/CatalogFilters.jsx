import React, { useState } from 'react';

const ALL_BRANDS = ['Sony', 'Bose', 'Apple', 'Sennheiser', 'Nexus Audio'];
const ALL_FEATURES = [
  'Active Noise Cancellation',
  'Bluetooth 5.3',
  'Waterproof (IPX4+)',
  'Fast Charging USB-C',
];
const COLORS = [
  { name: 'Matte Black', hex: '#000000' },
  { name: 'Silver White', hex: '#f1f5f9' },
  { name: 'Midnight Navy', hex: '#0c4a6e' },
  { name: 'Warm Stone', hex: '#d6d3d1' },
  { name: 'Copper Gold', hex: '#b45309' },
];

export default function CatalogFilters({
  primeOnly,
  onTogglePrime,
  selectedBrands,
  onToggleBrand,
  minRating,
  onSelectRating,
  maxPrice,
  onChangeMaxPrice,
  selectedFeatures,
  onToggleFeature,
  onResetAll,
}) {
  const [brandSearch, setBrandSearch] = useState('');

  const filteredBrands = ALL_BRANDS.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <aside className="space-y-6 bg-surface-container-lowest p-4 rounded border border-outline-variant shadow-sm text-on-surface">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
        <span className="text-headline-sm font-headline-sm text-brand-navy font-bold">Filters</span>
        <button type="button" onClick={onResetAll} className="text-label-sm font-label-sm text-brand-coral hover:underline">
          Reset All
        </button>
      </div>

      {/* Fast Fulfillment / Nexus Prime Toggle */}
      <div className="p-3 bg-slate-50 rounded border border-slate-200">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={primeOnly}
            onChange={(e) => onTogglePrime(e.target.checked)}
            className="mt-0.5 rounded text-brand-navy focus:ring-0 w-4 h-4 border-slate-300 cursor-pointer"
          />
          <div>
            <div className="flex items-center gap-1 font-headline-sm text-[13px] text-brand-navy font-bold tracking-tight uppercase">
              <span className="text-brand-coral font-extrabold">NEXUS</span> PRIME
              <span className="material-symbols-outlined text-brand-coral text-[16px]">bolt</span>
            </div>
            <p className="font-body-sm text-on-surface-variant text-[11px]">Next-day guaranteed delivery</p>
          </div>
        </label>
      </div>

      {/* Customer Reviews Filter */}
      <div>
        <h2 className="text-label-md font-label-md text-outline uppercase tracking-wider text-[11px] mb-2.5">Customer Reviews</h2>
        <div className="space-y-2">
          {[4, 3].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="rating-filter"
                checked={minRating === r}
                onChange={() => onSelectRating(r)}
                className="text-brand-navy focus:ring-0 border-slate-300 w-4 h-4 cursor-pointer"
              />
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500 text-[16px]">
                  {[...Array(r)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill text-amber-500 text-[16px]">star</span>
                  ))}
                  {[...Array(5 - r)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-slate-300 text-[16px]">star</span>
                  ))}
                </div>
                <span className="text-body-sm text-on-surface group-hover:text-brand-navy">&amp; Up ({r}.0+)</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-outline-variant" />

      {/* Price Range */}
      <div>
        <h2 className="text-label-md font-label-md text-outline uppercase tracking-wider text-[11px] mb-2.5">
          Max Price: ${maxPrice}
        </h2>
        <input
          type="range"
          min="50"
          max="600"
          step="10"
          value={maxPrice}
          onChange={(e) => onChangeMaxPrice(Number(e.target.value))}
          className="w-full accent-brand-navy cursor-pointer"
        />
        <div className="flex justify-between text-body-sm text-outline mt-1">
          <span>$50</span>
          <span>$600</span>
        </div>
      </div>

      <hr className="border-outline-variant" />

      {/* Brand Filter */}
      <div>
        <h2 className="text-label-md font-label-md text-outline uppercase tracking-wider text-[11px] mb-2">Brand</h2>
        <div className="relative mb-2.5">
          <span className="material-symbols-outlined absolute left-2 top-2 text-[16px] text-outline">search</span>
          <input
            type="text"
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            placeholder="Search brands"
            className="w-full pl-7 pr-2 py-1 border border-outline-variant rounded text-body-sm text-on-surface focus:border-brand-navy focus:ring-0 placeholder:text-outline"
          />
        </div>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
          {filteredBrands.map((brand) => (
            <label key={brand} className="flex items-center justify-between text-body-sm cursor-pointer">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onToggleBrand(brand)}
                  className="rounded text-brand-navy focus:ring-0 border-slate-300 w-4 h-4 cursor-pointer"
                />
                <span>{brand}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-outline-variant" />

      {/* Features Filter */}
      <div>
        <h2 className="text-label-md font-label-md text-outline uppercase tracking-wider text-[11px] mb-2.5">Features</h2>
        <div className="space-y-2 text-body-sm">
          {ALL_FEATURES.map((feature) => (
            <label key={feature} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature)}
                onChange={() => onToggleFeature(feature)}
                className="rounded text-brand-navy focus:ring-0 border-slate-300 w-4 h-4 cursor-pointer"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-outline-variant" />

      {/* Color Swatches */}
      <div>
        <h2 className="text-label-md font-label-md text-outline uppercase tracking-wider text-[11px] mb-2.5">Color</h2>
        <div className="flex items-center gap-2.5 flex-wrap">
          {COLORS.map((color) => (
            <button
              key={color.name}
              type="button"
              title={color.name}
              style={{ backgroundColor: color.hex }}
              className="w-6 h-6 rounded-full border border-slate-300 hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
