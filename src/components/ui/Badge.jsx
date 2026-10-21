import React from 'react';

export default function Badge({
  children,
  variant = 'coral',
  size = 'sm',
  icon,
  className = '',
}) {
  const variants = {
    coral: 'bg-brand-coral text-white',
    coralLight: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    navy: 'bg-brand-navy text-white',
    amber: 'bg-amber-500 text-white',
    amberLight: 'bg-amber-100 text-amber-900',
    green: 'bg-emerald-600 text-white',
    slate: 'bg-slate-200 text-slate-800',
    outline: 'border border-outline-variant text-on-surface bg-surface-container-lowest',
  };

  const sizes = {
    xs: 'text-[10px] font-bold px-1.5 py-0.5 leading-none',
    sm: 'text-label-sm font-label-sm px-2 py-0.5',
    md: 'text-label-md font-label-md px-2.5 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full uppercase tracking-wider font-semibold shrink-0 select-none ${variants[variant] || variants.coral} ${sizes[size] || sizes.sm} ${className}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[13px] leading-none">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
