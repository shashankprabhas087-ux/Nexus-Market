import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AccountOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-brand-navy text-white rounded-xl p-6 md:p-8 border border-slate-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-coral text-white rounded font-label-sm text-label-sm uppercase font-bold tracking-wider">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>NEXUS Prime Active</span>
          </div>
          <h1 className="text-headline-lg font-headline-lg font-extrabold tracking-tight text-white">
            Welcome back, {user?.name || 'Marcus Vance'}
          </h1>
          <p className="text-slate-300 text-body-md font-body-md max-w-xl">
            Your NEXUS Prime membership is active through November 2026. Enjoy guaranteed next-day free delivery on millions of items.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 z-10">
          <Link
            to="/search?category=prime"
            className="px-5 py-2.5 bg-brand-coral hover:bg-orange-600 text-white font-label-md rounded font-bold transition-all shadow-md text-center"
          >
            Explore Prime Deals
          </Link>
        </div>
        <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Quick Statistics Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-label-sm uppercase tracking-wider text-outline font-semibold">Total Orders</p>
            <h3 className="text-price-hero font-price-hero text-brand-navy mt-1">28</h3>
            <p className="text-body-sm text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> 4 this month
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy shrink-0">
            <span className="material-symbols-outlined text-[24px]">inventory_2</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-label-sm uppercase tracking-wider text-outline font-semibold">Saved with Prime</p>
            <h3 className="text-price-hero font-price-hero text-brand-coral mt-1">$420.50</h3>
            <p className="text-body-sm text-on-surface-variant mt-0.5">Free shipping &amp; deals</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-brand-coral shrink-0">
            <span className="material-symbols-outlined text-[24px] fill">savings</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-label-sm uppercase tracking-wider text-outline font-semibold">Reward Points</p>
            <h3 className="text-price-hero font-price-hero text-brand-navy mt-1">1,840</h3>
            <p className="text-body-sm text-on-surface-variant mt-0.5">Worth $18.40 credit</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy shrink-0">
            <span className="material-symbols-outlined text-[24px]">toll</span>
          </div>
        </div>
      </div>

      {/* Active Shipment Tracker */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[22px]">local_shipping</span>
            <h2 className="text-headline-sm font-bold text-brand-navy">Active Package: Out for Delivery</h2>
          </div>
          <span className="text-body-sm font-semibold text-emerald-600">Arriving Today by 4:00 PM</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded bg-slate-100 border border-outline-variant p-2 shrink-0 flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv96qAEgZKswAujbRmMwmaQxuO__xXeAGPih7dsJbzJhcp3z7hsX7S0L61hxIYArwiJcSH-g7V1xkt1ntBkeabO4jYUea5RwwJEbQbOYJ-LTUs7JfDYvSbzeqCvO0Ft9-Z7mCsYHcbmDGWuRQfxm0P318ww5Ak3rrsoQ6xIK2I1J91X0rVNMLqrfXJRxYbY9bkNKD9pVR8ff5xfiXPiWpf06KwNTJyjoIFxob8VSiWeDIAbj7HG9LyDg"
              alt="Package Item"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-label-md font-bold text-brand-navy">Sony WH-1000XM5 Wireless Headphones</h4>
            <p className="text-body-sm text-outline">Tracking #: NXS-TRK-984210 &bull; Carrier: Nexus Express Fleet</p>
          </div>
          <Link
            to="/account/orders"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-brand-navy rounded font-label-md text-label-md font-semibold transition-colors"
          >
            Track Shipment
          </Link>
        </div>
      </div>
    </div>
  );
}
