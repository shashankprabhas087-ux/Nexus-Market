import React from 'react';
import formatPrice from '../../utils/formatPrice';
import { useCart } from '../../context/CartContext';

export default function FrequentlyBoughtTogether({ product }) {
  const { addItem } = useCart();

  const addOns = [
    {
      id: 'addon-case-1',
      title: 'ArmorGuard Travel Case',
      price: 34.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS98TJPIh3JgGOUZdVXNFzlPAA6tXGpMGcXXbl2-RATQlFsrxjMbOkVazub1Bsku4TIyCCADuoVJDKJTy6Ox6tJrTAjSSQjLuxcoJNQnj3mT5bc0fHmPXAQfCRrKyl1tPpE4FEIeFgC9fKx-6bFRR-slUzGJMwh1xk3QWhG2yZjaJxXGUQ2U36J1XvqT3GO0kbC5b4LWiiO-tRyn333zQsRV2-ONNGVqO1ytXighf33jBvQzuGv2tAaA',
    },
    {
      id: 'addon-stand-1',
      title: 'AlloyDesk Audio Stand',
      price: 39.50,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqYOdHTowpThjau5eG4Ttfl-Zvp2yIonNJpYt_uIZ6Yic1k7LPcfOwFeGP4yMLqCHdyQ45QQpDKEV2EWITT9ccCB3ckX8winhPQiuFhYhcEE1OVJJXeq-KCjn0caiclCTHfGXDNd7Aeme3wqUWZzbqooyfx--lRV6Hdjri6Y7B6KCKaulhNIPeps5oOSQwywrq-SFdZN3QoV_cLnIf-v1_znAaLIYxECUO0n9F1Y7WU28Al0wt7TqI9g',
    },
  ];

  const totalBundlePrice = product.price + addOns[0].price + addOns[1].price - 24.49;
  const originalBundlePrice = product.price + addOns[0].price + addOns[1].price;

  const handleAddAll = () => {
    addItem(product, 1);
    addItem(addOns[0], 1);
    addItem(addOns[1], 1);
  };

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-sm">
      <h2 className="text-headline-sm font-headline-sm font-bold text-brand-navy mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-brand-coral">auto_awesome</span>
        Frequently Bought Together
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="flex flex-wrap items-center gap-4">
          {/* Main Item */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 border border-outline-variant rounded p-2 bg-surface-container-lowest shrink-0">
              <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[160px]">
              <span className="text-[10px] uppercase font-bold text-brand-coral block">This item</span>
              <p className="font-label-md text-label-md text-brand-navy truncate">{product.title}</p>
              <span className="font-price-card font-bold text-brand-navy">{formatPrice(product.price)}</span>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline text-[20px]">add</span>

          {/* Add-on 1 */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 border border-outline-variant rounded p-2 bg-surface-container-lowest shrink-0">
              <img src={addOns[0].image} alt={addOns[0].title} className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[160px]">
              <span className="text-[10px] uppercase font-bold text-outline block">Add-on</span>
              <p className="font-label-md text-label-md text-brand-navy truncate">{addOns[0].title}</p>
              <span className="font-price-card font-bold text-brand-navy">{formatPrice(addOns[0].price)}</span>
            </div>
          </div>

          <span className="material-symbols-outlined text-outline text-[20px]">add</span>

          {/* Add-on 2 */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 border border-outline-variant rounded p-2 bg-surface-container-lowest shrink-0">
              <img src={addOns[1].image} alt={addOns[1].title} className="w-full h-full object-contain" />
            </div>
            <div className="max-w-[160px]">
              <span className="text-[10px] uppercase font-bold text-outline block">Add-on</span>
              <p className="font-label-md text-label-md text-brand-navy truncate">{addOns[1].title}</p>
              <span className="font-price-card font-bold text-brand-navy">{formatPrice(addOns[1].price)}</span>
            </div>
          </div>
        </div>

        {/* Bundle Summary */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 p-4 bg-slate-50 rounded border border-outline-variant w-full lg:w-auto shrink-0">
          <div className="text-left lg:text-right">
            <span className="font-body-sm text-body-sm text-on-surface-variant block">Total Bundle Price:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-headline-md font-price-hero font-extrabold text-brand-navy">
                {formatPrice(totalBundlePrice)}
              </span>
              <span className="text-price-strikethrough font-price-strikethrough text-outline line-through">
                {formatPrice(originalBundlePrice)}
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-brand-coral font-bold">Save $24.49 with combo</span>
          </div>

          <button
            type="button"
            onClick={handleAddAll}
            className="h-10 px-5 bg-brand-coral hover:bg-orange-600 text-white font-label-md text-label-md font-bold rounded flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_basket</span>
            <span>Add all three to Cart</span>
          </button>
        </div>
      </div>
    </section>
  );
}
