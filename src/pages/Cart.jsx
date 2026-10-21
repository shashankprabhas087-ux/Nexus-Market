import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import CheckoutSteps from '../components/cart/CheckoutSteps';
import formatPrice from '../utils/formatPrice';

export default function Cart() {
  const { cart, itemCount, subtotal, removeItem, updateQuantity, addItem } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [savedForLater, setSavedForLater] = useState([
    {
      id: 'prod-cyberkey-75',
      brand: 'NEXUS KEYBOARDS',
      title: 'Nexus CyberKey Pro 75% Mechanical Keyboard',
      price: 149.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4rdw7RXk9wwI8GWunroDtVmLi2ltjSqzbOh_o2d9IBxCqffsagPUPF_RgZd3447xMo0vHytEKQOshdvODcLU8MfWcQbgufjHdlKMSb8qUyitYB3OI9owfa3or0U6UhEQWY9DHjchqcFm_RCTub8g0hxHSubP_YrN6y7UJpurlVUdWbK5UeIX5eK1bG0oBpa7ReFW5kEnQIzJa-ZbJxupvPcLcfsbgRv49gZslzl9YhzhQ8_ckwHqYFQ',
    },
    {
      id: 'prod-braided-cable',
      brand: 'HARDWARE & ACCESSORIES',
      title: 'Heavy-Duty Braided 240W Cable (2m)',
      price: 19.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYpZt15MCTyttt2TnmLajMVxgSlTR6zkIHj33vtWs6xZDGIdZQNqqmtBeDsanM9LdrVouNlXCvZx-7god-gGwD0Fyt6_ow8EnRbmMFgzXFTzhuS8tPsL-MBFpub9U7-q3W70sXlk80zDZK96KEbJaQ0HGRqW4B0B-p1GUWHGoauW01Q2qhHAUXVfSIQVkS9T1YGBFSlIellJZydteYiCr23-NUpAmEyZzQRCfuFSTU0lA2h_m4sv_Nww',
    },
  ]);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'FLASH20') {
      setPromoApplied(true);
    }
  };

  const handleSaveForLater = (item) => {
    removeItem(item.id);
    setSavedForLater((prev) => [...prev, item]);
  };

  const handleMoveToCart = (item) => {
    addItem(item, 1);
    setSavedForLater((prev) => prev.filter((p) => p.id !== item.id));
  };

  const handleRemoveSaved = (id) => {
    setSavedForLater((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex-1">
      <CheckoutSteps currentStep={1} />

      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3 border-b border-outline-variant pb-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-headline-lg font-headline-lg text-brand-navy font-extrabold tracking-tight">
              Shopping Cart
            </h1>
            <span className="bg-slate-100 text-brand-navy font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold">
              {itemCount} {itemCount === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Review your selections, select warranty upgrades, and finalize order details.
          </p>
        </div>
        <Link to="/search" className="font-label-md text-label-md text-brand-coral hover:underline inline-flex items-center gap-1 font-semibold">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Continue Shopping
        </Link>
      </div>

      {itemCount === 0 ? (
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-12 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-[64px] text-outline mb-4">shopping_bag</span>
          <h2 className="text-headline-md font-bold text-brand-navy mb-2">Your Cart is Empty</h2>
          <p className="font-body-md text-on-surface-variant max-w-md mb-6">
            Looks like you haven&apos;t added any items to your bag yet. Explore our curated collections to get started!
          </p>
          <Link to="/search" className="px-6 py-3 bg-brand-coral text-white font-label-md rounded font-bold hover:bg-orange-600 transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart items & Saved */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            {/* Free Shipping Tracker */}
            <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-brand-coral">
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  </span>
                  <p className="font-headline-sm text-headline-sm text-brand-navy font-bold">
                    <span className="text-emerald-600 font-extrabold">FREE Priority Express Delivery</span> unlocked for this order!
                  </p>
                </div>
                <span className="font-label-sm text-label-sm bg-slate-100 text-brand-navy px-2 py-1 rounded font-bold">
                  100% Unlocked
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-full" />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-lowest">
                <span className="font-headline-sm font-bold text-brand-navy">Standard &amp; Express Items</span>
                <span className="font-label-sm text-outline">Price</span>
              </div>
              <div className="divide-y divide-outline-variant">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                    onSaveForLater={handleSaveForLater}
                  />
                ))}
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="material-symbols-outlined text-brand-coral text-[24px]">redeem</span>
                <div>
                  <p className="font-headline-sm text-headline-sm font-bold text-brand-navy">Discount Code or Voucher</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Try using code <strong>FLASH20</strong> for promo savings.</p>
                </div>
              </div>
              <form onSubmit={handleApplyPromo} className="flex w-full sm:w-80 gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. FLASH20"
                  className="w-full px-3 py-2 border border-outline-variant rounded font-body-md text-brand-navy focus:outline-none focus:border-brand-navy"
                />
                <button type="submit" className="px-5 py-2 bg-brand-navy text-white font-label-md rounded hover:bg-slate-800 transition-colors">
                  {promoApplied ? 'Applied!' : 'Apply'}
                </button>
              </form>
            </div>

            {/* Saved for Later */}
            {savedForLater.length > 0 && (
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-headline-md font-headline-md font-bold text-brand-navy">Saved for Later</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Items you are tracking for future orders ({savedForLater.length} items)</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedForLater.map((item) => (
                    <div key={item.id} className="border border-outline-variant rounded-lg p-4 flex gap-4 hover:border-outline transition-colors">
                      <div className="w-20 h-20 bg-surface-container-low rounded border border-outline-variant overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                      </div>
                      <div className="flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="font-headline-sm text-[14px] leading-tight font-bold text-brand-navy line-clamp-1">{item.title}</h3>
                          <div className="font-price-card text-[15px] font-bold text-brand-navy mt-1">{formatPrice(item.price)}</div>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <button type="button" onClick={() => handleMoveToCart(item)} className="font-label-md text-brand-coral hover:underline font-bold text-[13px]">
                            Move to Cart
                          </button>
                          <span className="text-outline-variant">|</span>
                          <button type="button" onClick={() => handleRemoveSaved(item.id)} className="font-label-sm text-outline hover:text-red-600 text-[12px]">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </section>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <OrderSummary subtotal={subtotal} itemCount={itemCount} />
          </div>
        </div>
      )}
    </div>
  );
}
