import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutSteps from '../components/cart/CheckoutSteps';
import OrderSummary from '../components/cart/OrderSummary';
import formatPrice from '../utils/formatPrice';

export default function Checkout() {
  const { cart, itemCount, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(2); // 2: Address, 3: Payment, 4: Success
  const [address, setAddress] = useState({
    fullName: 'Jane Doe',
    street: '725 5th Ave',
    apt: 'Apt 14B',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    phone: '+1 (555) 234-5678',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '•••• •••• •••• 4242',
    name: 'Jane Doe',
    expiry: '12/28',
    cvv: '•••',
  });

  const [orderNumber, setOrderNumber] = useState('');

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePlaceOrder = () => {
    const newOrderNumber = `NXS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderNumber);

    // Save order to localStorage for dashboard history
    try {
      const existing = JSON.parse(window.localStorage.getItem('nexus_orders') || '[]');
      const newOrder = {
        id: newOrderNumber,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        items: [...cart],
        total: subtotal * 1.085,
        status: 'Preparing for Dispatch',
        shippingAddress: `${address.street}, ${address.city}, ${address.state} ${address.zip}`,
      };
      window.localStorage.setItem('nexus_orders', JSON.stringify([newOrder, ...existing]));
    } catch (e) {
      console.warn('Failed to save order to localStorage', e);
    }

    clearCart();
    setStep(4);
  };

  if (step === 4) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>
          <span className="text-label-sm font-label-sm uppercase tracking-wider text-brand-coral font-bold">
            Order Confirmed
          </span>
          <h1 className="text-headline-lg font-headline-lg text-brand-navy font-extrabold mt-1 mb-2">
            Thank you for your purchase!
          </h1>
          <p className="text-on-surface-variant font-body-md text-body-md mb-6">
            We&apos;ve sent a confirmation receipt to your email. Your order is being prepared for fast-track dispatch.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left mb-6 flex flex-col gap-2">
            <div className="flex justify-between text-body-sm">
              <span className="text-outline">Order Reference:</span>
              <span className="font-bold text-brand-navy">{orderNumber}</span>
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-outline">Estimated Delivery:</span>
              <span className="font-bold text-emerald-600">Tomorrow by 2:00 PM</span>
            </div>
            <div className="flex justify-between text-body-sm">
              <span className="text-outline">Shipping Address:</span>
              <span className="text-brand-navy">{address.street}, {address.city}, {address.state}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/account/orders"
              className="px-6 py-3 bg-brand-navy text-white rounded font-label-md font-bold hover:bg-slate-800 transition-colors"
            >
              Track in My Orders
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border border-outline-variant hover:bg-slate-50 text-brand-navy rounded font-label-md transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex-1">
      <CheckoutSteps currentStep={step} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
        {/* Left Column: Form Steps */}
        <section className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
          {step === 2 && (
            <form onSubmit={handleAddressSubmit} className="space-y-6">
              <div className="border-b border-outline-variant pb-3 flex items-center justify-between">
                <h2 className="text-headline-md font-bold text-brand-navy">1. Delivery Address</h2>
                <span className="text-body-sm text-outline">Step 1 of 2</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">Apt, Suite, Unit</label>
                  <input
                    type="text"
                    value={address.apt}
                    onChange={(e) => setAddress({ ...address, apt: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-label-md font-semibold text-brand-navy mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={address.zip}
                    onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:border-brand-navy focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-coral text-white font-label-md font-bold rounded hover:bg-orange-600 transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="border-b border-outline-variant pb-3 flex items-center justify-between">
                <h2 className="text-headline-md font-bold text-brand-navy">2. Payment &amp; Review</h2>
                <button type="button" onClick={() => setStep(2)} className="text-body-sm text-brand-coral hover:underline">
                  Edit Address
                </button>
              </div>

              {/* Delivery Address Summary */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-body-sm flex justify-between items-center">
                <div>
                  <span className="font-bold text-brand-navy block">Delivering to {address.fullName}</span>
                  <span className="text-on-surface-variant">{address.street}, {address.city}, {address.state} {address.zip}</span>
                </div>
                <span className="text-emerald-600 font-bold text-[12px] uppercase">Nexus Prime: FREE</span>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-3.5 rounded border cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'border-brand-navy bg-slate-50' : 'border-outline-variant'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-brand-navy focus:ring-0"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-label-md font-semibold text-brand-navy">Credit or Debit Card</span>
                    <span className="material-symbols-outlined text-outline">credit_card</span>
                  </div>
                </label>

                <label className={`flex items-center gap-3 p-3.5 rounded border cursor-pointer transition-colors ${
                  paymentMethod === 'cod' ? 'border-brand-navy bg-slate-50' : 'border-outline-variant'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="text-brand-navy focus:ring-0"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-label-md font-semibold text-brand-navy">Cash on Delivery / Pay on Arrival</span>
                    <span className="material-symbols-outlined text-outline">payments</span>
                  </div>
                </label>
              </div>

              <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                <button type="button" onClick={() => setStep(2)} className="text-label-md text-brand-navy hover:underline">
                  &larr; Back to Address
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="px-8 py-3 bg-brand-coral text-white font-label-md font-bold rounded hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Place Order ({formatPrice(subtotal * 1.085)})
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <OrderSummary
            subtotal={subtotal}
            itemCount={itemCount}
            isCheckoutPage
            buttonText={step === 2 ? 'Continue to Payment' : 'Place Order'}
            onCheckout={step === 2 ? () => setStep(3) : handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
}
