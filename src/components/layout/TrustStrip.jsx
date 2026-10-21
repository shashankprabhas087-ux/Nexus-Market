import React from 'react';

const trustItems = [
  {
    icon: 'published_with_changes',
    title: '30-Day Hassle-Free Returns',
    description: 'Pre-printed return labels included in every parcel, no questions asked.',
  },
  {
    icon: 'shield',
    title: 'Nexus Buyer Protection',
    description: 'Full refunds on items not matching catalog specs or damaged in transit.',
  },
  {
    icon: 'support_agent',
    title: '24/7 Live Concierge',
    description: 'Instant human resolution for shipping, size swaps, and billing.',
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full bg-surface-container-lowest border-t border-b border-outline-variant py-8">
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant flex items-center justify-center text-brand-navy shrink-0">
              <span className="material-symbols-outlined text-[22px]">
                {item.icon}
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-brand-navy font-semibold">
                {item.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
