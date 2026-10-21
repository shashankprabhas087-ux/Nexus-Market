import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';

export default function AccountSidebar() {
  const { user, logout } = useAuth();
  const { count: wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { to: '/account', label: 'Overview / Dashboard', icon: 'dashboard', end: true },
    { to: '/account/orders', label: 'My Orders & Tracking', icon: 'local_shipping', badge: 'Active' },
    { to: '/account/wishlist', label: 'Wishlist & Saved', icon: 'favorite_border', count: `${wishlistCount} items` },
    { to: '/account/addresses', label: 'Saved Addresses', icon: 'location_on' },
    { to: '/account/profile', label: 'Profile & Security', icon: 'person' },
  ];

  return (
    <aside className="lg:col-span-3 space-y-4">
      {/* User Quick Profile Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-slate-100 shrink-0">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'}
              alt={user?.name || 'User'}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-headline-sm font-headline-sm text-brand-navy truncate font-bold">
                {user?.name || 'Marcus Vance'}
              </h2>
              <span className="material-symbols-outlined text-brand-coral text-[18px] fill" title="Verified Member">
                verified
              </span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant truncate">
              {user?.email || 'marcus.vance@nexus.io'}
            </p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-outline-variant flex items-center justify-between text-label-sm font-label-sm">
          <span className="px-2 py-0.5 bg-brand-navy text-white rounded font-bold uppercase tracking-wider text-[10px]">
            {user?.tier || 'Prime Platinum'}
          </span>
          <span className="text-brand-coral font-semibold">Tier 4 Global</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <ul className="py-2 space-y-0.5">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 text-label-md font-label-md border-l-4 transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-brand-coral border-brand-coral font-bold'
                      : 'text-brand-navy border-transparent hover:bg-slate-50 hover:text-brand-coral'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 bg-brand-coral text-white text-[10px] font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className="text-outline text-label-sm">{item.count}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sign Out Button */}
        <div className="p-3 bg-slate-50 border-t border-outline-variant">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-red-600 hover:bg-red-50 rounded-lg text-label-md font-label-md transition-colors font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>Sign Out of NEXUS</span>
          </button>
        </div>
      </nav>

      {/* Priority Concierge Support Card */}
      <div className="bg-slate-50 p-4 rounded-xl border border-outline-variant">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-brand-coral text-[24px]">support_agent</span>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-brand-navy font-bold leading-tight">Priority Concierge</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-[13px]">
              24/7 Dedicated Prime customer resolution &amp; instant replacements.
            </p>
            <a href="#chat" className="inline-flex items-center gap-1 text-label-sm font-label-sm text-brand-coral font-bold hover:underline mt-2">
              Launch Live Chat <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
