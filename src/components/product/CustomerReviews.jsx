import React from 'react';
import Rating from '../ui/Rating';

export default function CustomerReviews({ product }) {
  const reviews = [
    {
      id: 1,
      author: 'Marcus Vance',
      verified: true,
      rating: 5,
      date: 'February 12, 2026',
      title: 'Sound stage is unmatched — blows Bose 700 away',
      comment: 'The ANC algorithm is eerie in how well it silences low rumble on trains and flights. Battery life easily lasted my entire 4-day Tokyo commute.',
      helpful: 142,
    },
    {
      id: 2,
      author: 'Elena Rostova',
      verified: true,
      rating: 5,
      date: 'January 28, 2026',
      title: 'Industrial design feels ultra-premium and lightweight',
      comment: 'Wore these for an 8-hour editing session without a hint of headband fatigue. The memory foam cushions breathe surprisingly well.',
      helpful: 89,
    },
  ];

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-sm" id="reviews">
      <div className="border-b border-outline-variant pb-4 mb-6">
        <h2 className="text-headline-sm font-headline-sm font-bold text-brand-navy">
          Customer Reviews &amp; Ratings
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Histogram (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-outline-variant pb-6 lg:pb-0 lg:pr-8">
          <div className="flex items-center gap-4">
            <span className="text-display-hero font-display-hero text-brand-navy">{product.rating}</span>
            <div>
              <Rating rating={product.rating} size={18} />
              <span className="font-body-sm text-body-sm text-outline">{product.reviewCount?.toLocaleString()} verified ratings</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            {[
              { star: 5, pct: 86 },
              { star: 4, pct: 10 },
              { star: 3, pct: 2 },
              { star: 2, pct: 1 },
              { star: 1, pct: 1 },
            ].map((row) => (
              <div key={row.star} className="flex items-center gap-3 text-body-sm">
                <span className="w-12 text-outline shrink-0">{row.star} star</span>
                <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-10 text-right text-brand-navy font-semibold">{row.pct}%</span>
              </div>
            ))}
          </div>

          <button type="button" className="w-full h-10 border border-slate-300 hover:bg-slate-50 text-brand-navy font-label-md font-bold rounded mt-2 transition-colors">
            Write a Customer Review
          </button>
        </div>

        {/* Reviews Stream (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {reviews.map((rev) => (
              <div key={rev.id} className="border-b border-outline-variant/60 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-label-md font-bold text-brand-navy">{rev.author}</span>
                    {rev.verified && (
                      <span className="text-[11px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-semibold">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <span className="text-body-sm text-outline">{rev.date}</span>
                </div>
                <Rating rating={rev.rating} size={14} className="mb-1" />
                <h4 className="font-headline-sm font-semibold text-brand-navy">{rev.title}</h4>
                <p className="font-body-sm text-on-surface-variant mt-1">{rev.comment}</p>
                <div className="flex items-center gap-2 mt-2 text-body-sm text-outline text-[12px]">
                  <span>{rev.helpful} people found this helpful</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
