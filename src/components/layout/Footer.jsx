import React from 'react';
import { Link } from 'react-router-dom';
import TrustStrip from './TrustStrip';

export default function Footer() {
  return (
    <>
      <TrustStrip />
      <footer className="bg-brand-navy border-t border-slate-700 text-primary-fixed">
        <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto py-12 flex flex-col gap-8">
          {/* Top Row: Brand & Secondary Category Directory */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-slate-700">
            {/* Brand column */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <span className="text-headline-md font-headline-md font-extrabold text-white tracking-tight uppercase">
                NEXUS Market
              </span>
              <p className="font-body-sm text-body-sm text-on-primary-container max-w-sm">
                The next-generation mega-marketplace combining hyper-speed global logistics with curated high-contrast apparel and cutting-edge tech hardware.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#share"
                  aria-label="Share Nexus Market"
                  className="w-8 h-8 rounded bg-surface-container-highest/10 hover:bg-surface-container-highest/20 flex items-center justify-center text-primary-fixed transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </a>
                <a
                  href="#global"
                  aria-label="Nexus Global Network"
                  className="w-8 h-8 rounded bg-surface-container-highest/10 hover:bg-surface-container-highest/20 flex items-center justify-center text-primary-fixed transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
                <a
                  href="#community"
                  aria-label="Nexus Community"
                  className="w-8 h-8 rounded bg-surface-container-highest/10 hover:bg-surface-container-highest/20 flex items-center justify-center text-primary-fixed transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                </a>
              </div>
            </div>

            {/* Links Column 1: Marketplace */}
            <div className="flex flex-col gap-2">
              <span className="font-headline-sm text-headline-sm text-white font-semibold">
                Shop &amp; Discover
              </span>
              <Link to="/search?category=deals" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Trending Deals
              </Link>
              <Link to="/search?category=new" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                New Arrivals
              </Link>
              <Link to="/search?category=tech" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Tech &amp; Computing
              </Link>
              <Link to="/search?category=streetwear" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Fashion Lookbooks
              </Link>
            </div>

            {/* Links Column 2: Merchant & Nexus Services */}
            <div className="flex flex-col gap-2">
              <span className="font-headline-sm text-headline-sm text-white font-semibold">
                Merchant Services
              </span>
              <a href="#sell" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Sell on Nexus
              </a>
              <a href="#fulfillment" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Nexus Fulfillment (FBN)
              </a>
              <a href="#ads" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Advertise Your Products
              </a>
              <a href="#affiliates" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Affiliate Creator Hub
              </a>
            </div>

            {/* Links Column 3: Policy & Support */}
            <div className="flex flex-col gap-2">
              <span className="font-headline-sm text-headline-sm text-white font-semibold">
                Customer Care
              </span>
              <a href="#help" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Help Center
              </a>
              <a href="#protection" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Buyer Protection
              </a>
              <Link to="/account/orders" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Track Returns
              </Link>
              <a href="#security" className="text-on-primary-container hover:text-white font-body-sm text-body-sm transition-colors">
                Security Center
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm">
            <p className="text-on-primary-container text-center md:text-left">
              &copy; {new Date().getFullYear()} NEXUS Market Inc. All rights reserved. Ultra-fast global fulfillment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#about" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                About Us
              </a>
              <a href="#sell" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                Sell on Nexus
              </a>
              <a href="#help" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                Help Center
              </a>
              <a href="#protection" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                Buyer Protection
              </a>
              <a href="#terms" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-on-primary-container hover:text-white font-label-sm text-label-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
