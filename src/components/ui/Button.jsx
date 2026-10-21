import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-label-md transition-all duration-150 rounded active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary: 'bg-brand-coral hover:bg-orange-600 active:bg-orange-700 text-white shadow-sm',
    secondary: 'bg-brand-navy hover:bg-slate-800 active:bg-slate-900 text-white shadow-sm',
    outline: 'border border-outline-variant bg-surface-container-lowest text-brand-navy hover:bg-surface-container-low hover:border-outline',
    ghost: 'text-on-surface hover:bg-surface-container-low',
    dark: 'bg-primary-container text-primary-fixed hover:bg-primary',
  };

  const sizes = {
    sm: 'h-8 px-3 text-label-sm gap-1',
    md: 'h-11 px-4 text-label-md gap-1.5',
    lg: 'h-12 px-6 text-label-md gap-2',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${width} ${className}`}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined text-[18px]">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
