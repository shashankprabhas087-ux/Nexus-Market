import React from 'react';

export default function CatalogToolbar({
  title,
  totalResults,
  layout,
  onLayoutChange,
  sortBy,
  onSortChange,
}) {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-outline-variant mb-6">
      <div>
        <h1 className="text-headline-lg font-headline-lg text-brand-navy">
          {title}
        </h1>
        <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
          Showing <span className="font-bold text-brand-navy">{totalResults} results</span> with ultra-fast Prime delivery options
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {/* Density Toggle */}
        <div className="flex items-center border border-outline-variant rounded bg-surface-container-lowest p-0.5">
          <button
            type="button"
            onClick={() => onLayoutChange('grid')}
            title="Grid View"
            aria-label="Grid 4-up view"
            className={`p-1.5 rounded transition-colors ${
              layout === 'grid'
                ? 'bg-slate-200 text-brand-navy font-bold'
                : 'text-outline hover:text-brand-navy'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              grid_view
            </span>
          </button>
          <button
            type="button"
            onClick={() => onLayoutChange('list')}
            title="List View"
            aria-label="List view"
            className={`p-1.5 rounded transition-colors ${
              layout === 'list'
                ? 'bg-slate-200 text-brand-navy font-bold'
                : 'text-outline hover:text-brand-navy'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              view_list
            </span>
          </button>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-dropdown"
            className="text-label-md font-label-md text-on-surface-variant whitespace-nowrap"
          >
            Sort by:
          </label>
          <div className="relative">
            <select
              id="sort-dropdown"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-surface-container-lowest border border-outline rounded py-1.5 pl-3 pr-8 text-label-md font-label-md text-brand-navy focus:ring-1 focus:ring-brand-navy focus:border-brand-navy cursor-pointer appearance-none"
            >
              <option value="Featured">Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Avg. Customer Review">Avg. Customer Review</option>
              <option value="Newest Arrivals">Newest Arrivals</option>
            </select>
            <span className="material-symbols-outlined text-[18px] text-outline absolute right-2 top-2 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
