import React from 'react';

export default function CatalogActiveFilters({
  activeFilters = [],
  onRemoveFilter,
  onClearAll,
}) {
  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap mb-4 pb-3 border-b border-outline-variant text-label-sm font-label-sm">
      <span className="text-outline uppercase text-[10px] font-bold">
        Active Filters:
      </span>
      {activeFilters.map((filter) => (
        <span
          key={filter.id}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold ${
            filter.variant === 'coral'
              ? 'bg-brand-coral text-white'
              : 'bg-brand-navy text-white'
          }`}
        >
          <span>{filter.label}</span>
          <button
            type="button"
            onClick={() => onRemoveFilter(filter)}
            aria-label={`Remove filter ${filter.label}`}
            className="hover:text-amber-200 text-sm leading-none ml-0.5 focus:outline-none"
          >
            &times;
          </button>
        </span>
      ))}
      <button
        type="button"
        onClick={onClearAll}
        className="text-brand-coral font-label-md text-label-md hover:underline ml-2"
      >
        Clear all
      </button>
    </div>
  );
}
