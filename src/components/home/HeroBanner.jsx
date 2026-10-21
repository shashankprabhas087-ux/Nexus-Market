import React from 'react';
import { Link } from 'react-router-dom';
import useCountdown from '../../hooks/useCountdown';

export default function HeroBanner() {
  const { hours, minutes, seconds } = useCountdown(4, 38, 19);

  return (
    <section className="relative rounded-xl overflow-hidden bg-brand-navy text-surface-container-lowest border border-outline-variant min-h-[420px] flex items-center shadow-sm">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-45 mix-blend-luminosity"
          alt="Cinematic widescreen commercial composition showing futuristic tech accessories and avant-garde streetwear fashion"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpyXX-KXo4foKlGQAyQKnEFfDj-BL_98pJmjRdBXG38VhyKIICKS_lSiADSf8OgoUdu1nHvHdEkditMgn80RH9j1eJvWLA8xNth71RKStgQKWfnZjoHt3miOuk0GQesO8LUi8aG8FnD7kQ9TIQOET77i6emKzrozHpH1pf1oqXwLWaH3D8MceasFriJkzPUya6zMVCysFfOH-mra4hxx9PXS9vOREoOaYfzZS8GjFope7zN2hX-3eNdg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent" />
      </div>

      <div className="relative z-10 p-6 md:p-12 max-w-2xl flex flex-col gap-4">
        {/* Live Alert Badge & Flash Sale Countdown */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-brand-coral text-white font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 font-bold">
            <span className="material-symbols-outlined text-[14px]">
              local_fire_department
            </span>
            <span>Lightning Drop</span>
          </span>
          <div className="flex items-center gap-1.5 text-slate-200 font-label-sm text-label-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-slate-700/50">
            <span>Ends in:</span>
            <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold tabular-nums">
              {hours}:{minutes}:{seconds}
            </span>
          </div>
        </div>

        <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero tracking-tight leading-none text-white">
          Global Tech &amp; Summer Style Drop
        </h1>

        <p className="text-slate-300 font-body-lg text-body-lg max-w-lg">
          Up to 50% off headline designer gear, ultra-portable workstation gear, and tactile minimalist street curations. Next-day delivery unlocked.
        </p>

        {/* CTA Cluster */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/search?category=deals"
            className="bg-brand-coral hover:bg-orange-600 text-white px-6 py-3 rounded font-label-md text-label-md flex items-center gap-2 active:scale-95 transition-all shadow-md"
          >
            <span>Shop Deals</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
          <Link
            to="/search?category=streetwear"
            className="bg-white/10 backdrop-blur text-white hover:bg-white/20 px-6 py-3 rounded font-label-md text-label-md flex items-center gap-2 border border-white/20 transition-colors"
          >
            <span>Explore Curated</span>
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
