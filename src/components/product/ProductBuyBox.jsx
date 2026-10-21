import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

export default function ProductBuyBox({ product, selectedColor, selectedStyle }) {
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(
      {
        ...product,
        variant: `${selectedColor} - ${selectedStyle}`,
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    addItem(
      {
        ...product,
        variant: `${selectedColor} - ${selectedStyle}`,
      },
      quantity
    );
    navigate('/checkout');
  };

  return (
    <section className="lg:col-span-3 sticky top-24">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-5 shadow-sm flex flex-col gap-4">
        {/* Price & Stock */}
        <div className="flex items-baseline justify-between border-b border-outline-variant/60 pb-3">
          <span className="text-headline-sm font-price-card font-extrabold text-brand-navy">
            {formatPrice(product.price)}
          </span>
          <span className="font-label-sm text-label-sm text-brand-coral font-bold">In Stock</span>
        </div>

        {/* Stock Alert */}
        <div className="flex items-center gap-1.5 text-brand-coral font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <span>Only 6 left in stock - order soon.</span>
        </div>

        {/* Delivery Details */}
        <div className="flex flex-col gap-1 text-body-sm text-brand-navy">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-[20px] text-brand-navy shrink-0 mt-0.5">
              local_shipping
            </span>
            <div>
              <span><strong>FREE Delivery tomorrow</strong> to <strong>New York 10001</strong>.</span>
              <span className="block text-outline text-[11px] mt-0.5">Order within 3 hrs 42 mins</span>
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between">
          <label htmlFor="pdp-quantity" className="font-label-md text-label-md text-brand-navy">
            Quantity:
          </label>
          <select
            id="pdp-quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-24 h-9 bg-surface-container-lowest border border-outline-variant rounded font-label-md text-label-md text-brand-navy px-2 focus:ring-1 focus:ring-brand-navy"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5 pt-2">
          <Button variant="primary" fullWidth size="md" onClick={handleAddToCart} icon="add_shopping_cart">
            Add to Cart
          </Button>
          <Button variant="secondary" fullWidth size="md" onClick={handleBuyNow} icon="bolt">
            Buy Now
          </Button>
        </div>

        {/* Gift Option */}
        <div className="pt-2 border-t border-outline-variant/60">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={giftWrap}
              onChange={(e) => setGiftWrap(e.target.checked)}
              className="w-4 h-4 rounded border-outline-variant text-brand-navy focus:ring-0"
            />
            <span className="font-body-sm text-on-surface-variant text-[13px]">
              Add gift packaging at checkout
            </span>
          </label>
        </div>

        {/* Trust info */}
        <div className="bg-slate-50 p-3 rounded flex flex-col gap-2 text-body-sm text-[12px] text-on-surface-variant">
          <div className="flex items-center justify-between">
            <span className="text-outline">Ships from:</span>
            <span className="font-semibold text-brand-navy">NEXUS Global Fulfillment</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-outline">Sold by:</span>
            <span className="font-semibold text-brand-navy">Nexus Official Store</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-outline">Returns:</span>
            <span className="text-brand-navy">30-day refund / replacement</span>
          </div>
          <div className="flex items-center gap-1.5 text-brand-navy pt-1 border-t border-outline-variant/40 font-medium">
            <span className="material-symbols-outlined text-[16px] text-brand-navy fill">lock</span>
            <span>Secure, encrypted transaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
