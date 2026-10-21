import React from 'react';

export default function Chip({
  label,
  selected = false,
  onClick,
  onRemove,
  icon,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-8 px-3 rounded text-label-sm font-label-sm inline-flex items-center gap-1.5 transition-colors select-none ${
        selected
          ? 'bg-brand-navy text-white shadow-xs'
          : 'bg-surface-container-lowest border border-outline-variant text-brand-navy hover:border-outline hover:bg-surface-container-low'
      } ${className}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[16px]">
          {icon}
        </span>
      )}
      <span>{label}</span>
      {selected && onRemove && (
        <span
          role="button"
          tabIndex={0}
          aria-label={`Remove filter ${label}`}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 text-slate-300 hover:text-white text-base leading-none focus:outline-none"
        >
          &times;
        </span>
      )}
    </button>
  );
}
