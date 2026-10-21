import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';

export default function CategoryTiles() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-headline-md font-headline-md text-brand-navy">
          Explore Curated Departments
        </h2>
        <Link
          to="/search"
          className="text-brand-coral hover:underline font-label-md text-label-md flex items-center gap-1"
        >
          <span>Browse 40+ departments</span>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/search?category=${cat.id}`}
            className="group bg-surface-container-lowest border border-outline-variant hover:border-outline rounded-lg p-3 flex flex-col items-center text-center transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 bg-surface-container flex items-center justify-center border border-outline-variant">
              <img
                src={cat.image}
                alt={cat.alt || cat.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-label-md text-label-md text-brand-navy group-hover:text-brand-coral transition-colors font-semibold">
              {cat.name}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {cat.skuCount}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
