import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16 flex justify-center">
      <div className="max-w-md text-center bg-surface-container-lowest border border-outline-variant rounded-lg p-8 shadow-sm">
        <span className="material-symbols-outlined text-brand-coral text-[48px] mb-2">
          error_outline
        </span>
        <h1 className="text-display-hero-mobile font-display-hero-mobile font-extrabold text-brand-navy mb-2">
          404
        </h1>
        <p className="text-on-surface-variant font-body-md text-body-md mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-navy text-primary-fixed hover:bg-slate-800 px-5 py-2.5 rounded font-label-md text-label-md transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
