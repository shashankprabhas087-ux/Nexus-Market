import React from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';

export default function OrderSummary({
  subtotal,
  itemCount,
  onCheckout,
  buttonText = 'Proceed to Checkout',
  buttonIcon = 'lock',
  isCheckoutPage = false,
}) {
  const tax = subtotal * 0.085;
  const total = subtotal > 0 ? subtotal + tax : 0;
  const estimatedSavings = subtotal * 0.25;

  return (
    <aside className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col gap-5">
      <h2 className="font-headline-md text-headline-md font-extrabold text-brand-navy pb-4 border-b border-outline-variant flex items-center justify-between">
        <span>Order Summary</span>
        <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">USD ($)</span>
      </h2>

      <div className="space-y-3 border-b border-outline-variant pb-4 font-body-md text-body-md">
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span className="font-semibold text-brand-navy tabular-nums">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            Shipping &amp; Handling
            <span className="material-symbols-outlined text-[16px] text-outline cursor-pointer" title="Free Prime delivery">info</span>
          </span>
          <div className="text-right">
            <span className="font-bold text-emerald-600 uppercase text-xs tracking-wider">FREE</span>
            <span className="block font-body-sm text-[11px] text-on-surface-variant">(Nexus Prime)</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            Estimated Tax
            <span className="material-symbols-outlined text-[16px] text-outline cursor-pointer" title="Estimated tax rate: 8.5%">info</span>
          </span>
          <span className="font-semibold text-brand-navy tabular-nums">{formatPrice(tax)}</span>
        </div>

        {subtotal > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-coral text-[20px]">savings</span>
            <p className="font-label-md text-label-md text-orange-950">
              You saved <strong>{formatPrice(estimatedSavings)}</strong> today!
            </p>
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between pt-1">
        <div>
          <span className="font-headline-md text-headline-md font-extrabold text-brand-navy block">Total</span>
          <span className="font-body-sm text-body-sm text-outline">Includes all duties and fees</span>
        </div>
        <span className="font-price-hero text-price-hero text-brand-navy font-extrabold tabular-nums">
          {formatPrice(total)}
        </span>
      </div>

      {onCheckout ? (
        <button
          type="button"
          onClick={onCheckout}
          disabled={subtotal === 0}
          className="w-full h-12 bg-brand-coral text-white hover:bg-orange-600 font-label-md text-label-md font-bold rounded-lg shadow transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
        >
          <span>{buttonText}</span>
          <span className="material-symbols-outlined text-[18px]">{buttonIcon}</span>
        </button>
      ) : (
        <Link
          to="/checkout"
          className="w-full h-12 bg-brand-coral text-white hover:bg-orange-600 font-label-md text-label-md font-bold rounded-lg shadow transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <span>Proceed to Checkout</span>
          <span className="material-symbols-outlined text-[18px]">lock</span>
        </Link>
      )}

      {!isCheckoutPage && (
        <div className="mt-2 text-center">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-outline-variant" />
            <span className="flex-shrink mx-3 text-[11px] text-outline uppercase tracking-wider font-bold">
              Guaranteed Safe Checkout
            </span>
            <div className="flex-grow border-t border-outline-variant" />
          </div>
          <p className="text-body-sm text-[12px] text-outline mt-1">
            256-bit SSL encrypted &bull; 30-day money-back guarantee
          </p>
        </div>
      )}
    </aside>
  );
}
