import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import AccountSidebar from '../components/account/AccountSidebar';
import AccountOverview from '../components/account/AccountOverview';
import AccountOrders from '../components/account/AccountOrders';
import AccountWishlist from '../components/account/AccountWishlist';
import AccountAddresses from '../components/account/AccountAddresses';
import AccountProfile from '../components/account/AccountProfile';

export default function Account() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const renderActiveView = () => {
    if (path.includes('/orders')) return <AccountOrders />;
    if (path.includes('/wishlist')) return <AccountWishlist />;
    if (path.includes('/addresses')) return <AccountAddresses />;
    if (path.includes('/profile')) return <AccountProfile />;
    return <AccountOverview />;
  };

  const getSubTitle = () => {
    if (path.includes('/orders')) return 'My Orders';
    if (path.includes('/wishlist')) return 'Wishlist';
    if (path.includes('/addresses')) return 'Addresses';
    if (path.includes('/profile')) return 'Profile';
    return 'Dashboard';
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex-1">
      {/* Breadcrumb & Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-outline-variant/60">
        <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
          <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/account" className="hover:text-brand-navy transition-colors">My Account</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-brand-navy font-semibold">{getSubTitle()}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-brand-navy text-label-sm font-label-sm border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NEXUS UltraSync Active</span>
          </div>
          <span className="text-label-sm font-label-sm text-outline">Member since Oct 2024</span>
        </div>
      </div>

      {/* Main Grid: Sidebar + Subpage Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <AccountSidebar />
        <section className="lg:col-span-9">
          {renderActiveView()}
        </section>
      </div>
    </div>
  );
}
