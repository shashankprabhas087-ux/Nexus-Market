import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.append('q', query.trim());
    if (category && category !== 'All') params.append('category', category);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 max-w-2xl relative hidden md:block"
      role="search"
    >
      <div className="flex items-center border-[1.5px] border-outline-variant hover:border-outline focus-within:border-brand-navy rounded-lg bg-surface-container-lowest transition-colors h-[44px]">
        {/* Nested Category Select */}
        <div className="relative flex items-center pl-3 pr-2 border-r border-outline-variant h-full bg-surface-container-low rounded-l-lg shrink-0">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Select product category"
            className="bg-transparent font-label-md text-label-md text-on-surface cursor-pointer focus:outline-none pr-3 border-none appearance-none"
          >
            <option value="All">All</option>
            <option value="Tech & Gadgets">Tech &amp; Gadgets</option>
            <option value="Streetwear">Streetwear</option>
            <option value="Footwear">Footwear</option>
            <option value="Prime Express">Prime Express</option>
          </select>
          <span className="material-symbols-outlined text-outline text-[16px] pointer-events-none -ml-2">
            expand_more
          </span>
        </div>

        {/* Input */}
        <div className="flex-1 flex items-center px-3 gap-2 min-w-0">
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0">
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brands, styles, instant deals..."
            aria-label="Search products, brands and deals"
            className="w-full bg-transparent border-none text-on-surface placeholder:text-outline text-body-md font-body-md focus:ring-0 focus:outline-none p-0"
          />
        </div>

        {/* Search Submit Button */}
        <button
          type="submit"
          aria-label="Submit search"
          className="h-full px-5 bg-brand-navy text-primary-fixed hover:bg-slate-800 transition-colors flex items-center justify-center rounded-r-lg shrink-0"
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
