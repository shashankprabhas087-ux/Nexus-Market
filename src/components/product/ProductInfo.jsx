import React, { useState } from 'react';
import Rating from '../ui/Rating';
import PriceTag from '../ui/PriceTag';
import formatPrice from '../../utils/formatPrice';

export default function ProductInfo({ product, selectedColor, onSelectColor, selectedStyle, onSelectStyle }) {
  const colors = [
    { name: 'Midnight Slate', hex: '#0f172a' },
    { name: 'Arctic Silver', hex: '#e2e8f0' },
    { name: 'Matte Olive', hex: '#44403c' },
  ];

  const styles = [
    { id: 'standard', name: 'Standard Edition', desc: 'Headphones + soft pouch', price: product.price },
    { id: 'pro', name: 'Pro Bundle', desc: 'Includes rigid travel case & DAC', price: product.price + 40 },
  ];

  return (
    <section className="lg:col-span-4 flex flex-col gap-4">
      {/* Brand & Store */}
      <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-brand-coral">
            {product.brand}
          </span>
          <span className="inline-flex items-center gap-0.5 text-on-surface-variant font-label-sm text-[11px] bg-slate-100 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px] text-brand-navy fill">verified</span>
            Official Store
          </span>
        </div>
        <span className="font-body-sm text-outline">SKU: NXS-{product.id.slice(-6).toUpperCase()}</span>
      </div>

      <h1 className="text-headline-md font-headline-md text-brand-navy font-extrabold tracking-tight leading-snug">
        {product.title}
      </h1>

      <div className="flex flex-wrap items-center gap-2 text-body-sm pb-2 border-b border-outline-variant/60">
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
          <Rating rating={product.rating} showScore />
        </div>
        <a href="#reviews" className="text-on-surface-variant hover:text-brand-coral underline underline-offset-2">
          {product.reviewCount?.toLocaleString() || 8240} ratings
        </a>
        <span className="text-outline-variant">&bull;</span>
        <span className="text-on-surface-variant">Answered Questions (142)</span>
      </div>

      {/* Pricing block */}
      <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant flex flex-col gap-2 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="bg-brand-coral text-white font-label-sm text-label-sm font-bold uppercase px-2 py-0.5 rounded">
            Limited Time Deal
          </span>
        </div>
        <PriceTag price={product.price} originalPrice={product.originalPrice} size="hero" />
        <div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant pt-1 border-t border-outline-variant/40">
          <span className="material-symbols-outlined text-[18px] text-outline">credit_card</span>
          <span>Or <strong>{formatPrice(product.price / 12)}/mo</strong> with 0% APR NEXUS Pay.</span>
        </div>
      </div>

      {/* Color Selection */}
      <div className="flex flex-col gap-2 pt-1">
        <span className="font-label-md text-label-md text-brand-navy">
          Color: <strong>{selectedColor}</strong>
        </span>
        <div className="flex items-center gap-2.5 flex-wrap">
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => onSelectColor(c.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-lowest text-left transition-all ${
                selectedColor === c.name
                  ? 'border-2 border-brand-navy font-bold text-brand-navy'
                  : 'border border-outline-variant text-on-surface-variant hover:border-outline'
              }`}
            >
              <span className="w-4 h-4 rounded-full border border-slate-300" style={{ backgroundColor: c.hex }} />
              <span className="font-label-md text-label-md">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Style Selection */}
      <div className="flex flex-col gap-2 pt-2">
        <span className="font-label-md text-label-md text-brand-navy">
          Style: <strong>{selectedStyle}</strong>
        </span>
        <div className="grid grid-cols-2 gap-3">
          {styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectStyle(s.name)}
              className={`p-3 rounded bg-surface-container-lowest text-left transition-all ${
                selectedStyle === s.name
                  ? 'border-2 border-brand-navy'
                  : 'border border-outline-variant hover:border-outline'
              }`}
            >
              <span className="font-label-md text-label-md block text-brand-navy font-bold">{s.name}</span>
              <span className="font-body-sm text-body-sm text-outline block text-[12px]">{s.desc}</span>
              <span className="font-label-md text-label-md text-brand-navy mt-1 block font-bold">{formatPrice(s.price)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="pt-3 border-t border-outline-variant/60">
        <span className="font-label-md text-label-md text-brand-navy font-bold block mb-2">Key Highlights</span>
        <ul className="space-y-2 font-body-sm text-body-sm text-brand-navy">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-brand-coral fill mt-0.5">check_circle</span>
            <span><strong>Hybrid Active Noise Cancellation:</strong> 4-microphone array cancels up to 45dB hum.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-brand-coral fill mt-0.5">check_circle</span>
            <span><strong>Lossless LDAC Codec:</strong> Hi-Res Audio wireless transmission at studio fidelity.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] text-brand-coral fill mt-0.5">check_circle</span>
            <span><strong>60-Hour Marathon Battery:</strong> 60 hours playback; 10-minute fast charge yields 5 hours.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
