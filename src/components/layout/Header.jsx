import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState('');
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobileQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(mobileQuery.trim())}`);
      setMobileSearchOpen(false);
    }
  };

  const accountLink = isAuthenticated ? '/account' : '/login';
  const firstName = user ? user.name.split(' ')[0] : 'Sign In';

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-outline-variant shadow-sm">
      {/* Top Utility & Search Tier */}
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto flex items-center justify-between gap-4 py-3">
        {/* Brand Logo & Delivery Context */}
        <div className="flex items-center gap-6 shrink-0">
          <Link
            to="/"
            className="text-headline-lg font-headline-lg font-extrabold text-brand-navy tracking-tight uppercase hover:text-brand-coral transition-colors duration-150"
          >
            NEXUS Market
          </Link>
          <div className="hidden xl:flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">
              location_on
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-label-sm text-label-sm text-outline">
                Deliver to
              </span>
              <span className="font-label-md text-label-md text-brand-navy font-semibold">
                New York 10001
              </span>
            </div>
          </div>
        </div>

        {/* Integrated Precision Search Bar with Category Dropdown */}
        <SearchBar />

        {/* Trailing Action Badges & Hubs */}
        <div className="flex items-center gap-3 lg:gap-5 shrink-0">
          {/* Mobile Search Toggle */}
          <button
            type="button"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Toggle mobile search"
            className="md:hidden flex items-center justify-center text-on-surface-variant hover:text-brand-coral p-1.5 rounded-lg"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileSearchOpen ? 'close' : 'search'}
            </span>
          </button>

          {/* Wishlist */}
          <Link
            to="/account/wishlist"
            className="flex items-center gap-1.5 text-on-surface-variant hover:text-brand-coral transition-colors duration-150 py-1 relative"
            aria-label={`View Wishlist with ${wishlistCount} items`}
          >
            <span className="material-symbols-outlined text-[22px]">
              favorite
            </span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-coral rounded-full" />
            )}
            <span className="hidden lg:inline font-label-md text-label-md">
              Wishlist
            </span>
          </Link>

          {/* Orders & Account */}
          <Link
            to={accountLink}
            className="flex items-center gap-1.5 text-on-surface-variant hover:text-brand-coral transition-colors duration-150 py-1"
            aria-label="Account and Orders"
          >
            <span className="material-symbols-outlined text-[22px]">
              person
            </span>
            <div className="flex flex-col text-left leading-tight hidden lg:flex">
              <span className="font-label-sm text-label-sm text-outline">
                Hello, {firstName}
              </span>
              <span className="font-label-md text-label-md text-brand-navy font-semibold">
                Account &amp; Orders
              </span>
            </div>
          </Link>

          {/* Cart Primary Trailing Action */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-brand-coral hover:bg-orange-600 text-surface-container-lowest px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-all duration-150 shadow-sm"
            aria-label={`Shopping Cart with ${itemCount} items`}
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            <span>Cart ({itemCount})</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Dropdown Bar */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-outline-variant bg-surface">
          <form onSubmit={handleMobileSubmit} className="flex items-center gap-2">
            <div className="flex-1 flex items-center border border-outline-variant rounded-lg bg-surface-container-lowest px-3 py-1.5">
              <span className="material-symbols-outlined text-outline text-[20px] mr-2">
                search
              </span>
              <input
                type="text"
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Mobile search"
                className="w-full bg-transparent border-none text-on-surface text-body-md focus:outline-none p-0"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-brand-navy text-primary-fixed rounded-lg font-label-md text-label-md"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
