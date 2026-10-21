import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'All Categories', path: '/search', icon: 'menu', highlight: false },
  { label: 'Trending Deals', path: '/search?category=deals', icon: 'bolt', iconColor: 'text-brand-coral' },
  { label: 'New In', path: '/search?category=new-in' },
  { label: 'Tech', path: '/search?category=tech' },
  { label: 'Men', path: '/search?category=men' },
  { label: 'Women', path: '/search?category=women' },
];

export default function NavBar() {
  return (
    <nav
      className="border-t border-outline-variant bg-surface-container-lowest"
      aria-label="Category Navigation"
    >
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto flex items-center gap-6 overflow-x-auto py-2 text-label-md font-label-md scrollbar-none">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `font-label-md text-label-md pb-1 shrink-0 flex items-center gap-1 transition-colors ${
                isActive && item.path === '/search'
                  ? 'border-b-2 border-brand-coral text-brand-navy font-semibold'
                  : 'text-on-surface-variant hover:text-brand-coral'
              }`
            }
          >
            {item.icon && (
              <span
                className={`material-symbols-outlined text-[18px] ${
                  item.iconColor || ''
                }`}
              >
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </NavLink>
        ))}

        <span className="h-4 w-[1px] bg-outline-variant shrink-0" aria-hidden="true" />

        <NavLink
          to="/search?category=prime"
          className="text-brand-coral font-label-md text-label-md pb-1 shrink-0 flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-[16px]">
            verified
          </span>
          <span>Nexus Prime</span>
        </NavLink>
      </div>
    </nav>
  );
}
