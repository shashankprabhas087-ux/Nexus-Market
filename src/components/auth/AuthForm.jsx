import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AuthForm({ initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('marcus.vance@nexuscorp.io');
  const [name, setName] = useState('Marcus Vance');
  const [password, setPassword] = useState('NexusShield#2024');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      login(email, password);
    } else {
      register(name, email, password);
    }
    navigate('/account/profile');
  };

  const handleDemoSignIn = () => {
    login('marcus.vance@nexuscorp.io', 'NexusShield#2024');
    navigate('/account/profile');
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col justify-center">
      {/* Breadcrumb & Trust Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-label-sm font-label-sm text-outline">
          <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-brand-navy font-semibold">Account Authentication</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-brand-navy border border-outline-variant text-label-sm font-label-sm">
            <span className="material-symbols-outlined text-sm text-brand-coral">lock</span>
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-brand-navy border border-outline-variant text-label-sm font-label-sm">
            <span className="material-symbols-outlined text-sm text-brand-navy">verified_user</span>
            <span>Buyer Protection Guarantee</span>
          </div>
        </div>
      </div>

      {/* 2-Column Auth Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-coral" />

          {/* Segmented Control */}
          <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-200 mb-8 max-w-md">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-label-md font-label-md rounded transition-all flex items-center justify-center gap-2 ${
                mode === 'login'
                  ? 'text-brand-navy bg-white shadow-sm font-bold'
                  : 'text-on-surface-variant hover:text-brand-navy'
              }`}
            >
              <span className="material-symbols-outlined text-base">login</span>
              <span>Sign In</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-label-md font-label-md rounded transition-all flex items-center justify-center gap-2 ${
                mode === 'register'
                  ? 'text-brand-navy bg-white shadow-sm font-bold'
                  : 'text-on-surface-variant hover:text-brand-navy'
              }`}
            >
              <span className="material-symbols-outlined text-base">person_add</span>
              <span>Create Account</span>
            </button>
          </div>

          <div className="mb-6">
            <h1 className="text-headline-lg font-headline-lg text-brand-navy tracking-tight mb-2 font-bold">
              {mode === 'login' ? 'Welcome back to NEXUS' : 'Create your NEXUS Account'}
            </h1>
            <p className="text-body-md font-body-md text-on-surface-variant">
              {mode === 'login'
                ? 'Access your saved shopping cart, track real-time dispatches, and redeem marketplace rewards.'
                : 'Join millions of shoppers with free next-day express delivery, member discounts, and instant buyer protection.'}
            </p>
          </div>

          {/* Fast Social Buttons */}
          <div className="space-y-3 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={handleDemoSignIn}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-outline-variant hover:border-outline text-brand-navy rounded-lg text-label-md font-label-md transition-all hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-brand-coral text-[18px]">account_circle</span>
                <span>Demo User</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-outline-variant hover:border-outline text-brand-navy rounded-lg text-label-md font-label-md transition-all hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                <span>Passkey</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-outline-variant hover:border-outline text-brand-navy rounded-lg text-label-md font-label-md transition-all hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[18px]">security</span>
                <span>Fast ID</span>
              </button>
            </div>

            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink mx-4 text-outline text-label-sm font-label-sm tracking-widest uppercase">
                Or continue with credentials
              </span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-1.5">
                <label className="text-label-md font-label-md text-brand-navy block font-semibold">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                    badge
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full h-11 pl-11 pr-4 bg-white border border-outline-variant rounded-lg text-body-md focus:border-brand-navy focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-label-md font-label-md text-brand-navy block font-semibold">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                  mail
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-11 pl-11 pr-4 bg-white border border-outline-variant rounded-lg text-body-md focus:border-brand-navy focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-label-md font-label-md text-brand-navy block font-semibold">Password</label>
                {mode === 'login' && (
                  <span className="text-label-sm font-label-sm text-brand-coral hover:underline font-semibold cursor-pointer">
                    Forgot password?
                  </span>
                )}
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-lg">
                  key
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pl-11 pr-11 bg-white border border-outline-variant rounded-lg text-body-md focus:border-brand-navy focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-outline hover:text-brand-navy"
                >
                  <span className="material-symbols-outlined text-lg">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-navy border-outline-variant focus:ring-0"
                />
                <span className="text-body-sm font-body-sm text-brand-navy font-medium">Keep me signed in</span>
              </label>
              <div className="text-label-sm text-outline flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">shield</span>
                <span>Encrypted Session</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-brand-coral hover:bg-orange-600 text-white font-label-md text-label-md rounded-lg shadow-sm transition-all duration-150 flex items-center justify-center gap-2 font-bold tracking-wide mt-2"
            >
              <span>{mode === 'login' ? 'Sign In to Account' : 'Complete Registration'}</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>

          <p className="text-label-sm font-label-sm text-outline mt-6 text-center leading-relaxed">
            By signing in or registering, you acknowledge compliance with NEXUS Market&apos;s Terms of Service and Privacy Policy.
          </p>
        </div>

        {/* Right Prime Benefit Bento (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-brand-navy text-white rounded-xl p-6 md:p-8 border border-slate-700 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 bg-brand-coral text-white text-label-sm uppercase rounded font-bold tracking-wider">
                Prime Exclusive
              </span>
              <span className="material-symbols-outlined text-brand-coral text-2xl fill">stars</span>
            </div>
            <h2 className="text-headline-md font-headline-md font-bold tracking-tight text-white mb-2">
              Unlock NEXUS Prime Privileges
            </h2>
            <p className="text-body-sm text-slate-300 mb-6">
              Join over 4.8 million verified digital shoppers accessing instantaneous dispatch, algorithmic price-lock alerts, and zero-fee logistics.
            </p>

            <div className="space-y-4 border-t border-slate-700/60 pt-5">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-brand-coral border border-white/20 shrink-0">
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                </div>
                <div>
                  <h3 className="text-label-md font-semibold text-white">Free Priority Delivery</h3>
                  <p className="text-body-sm text-slate-300">Next-day guaranteed arrival across 120+ metropolitan hub zones.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-brand-coral border border-white/20 shrink-0">
                  <span className="material-symbols-outlined text-lg">electric_bolt</span>
                </div>
                <div>
                  <h3 className="text-label-md font-semibold text-white">Early Access to Lightning Drops</h3>
                  <p className="text-body-sm text-slate-300">Secure limited-run electronics drops 60 minutes before general release.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-brand-coral border border-white/20 shrink-0">
                  <span className="material-symbols-outlined text-lg">percent</span>
                </div>
                <div>
                  <h3 className="text-label-md font-semibold text-white">5% Instant Cashback Pool</h3>
                  <p className="text-body-sm text-slate-300">Direct store credit credited back to your NEXUS wallet at checkout.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-label-sm font-label-sm">
              <span className="text-slate-300">Avg. Annual Member Savings</span>
              <span className="text-white font-bold text-headline-sm">$640.00 / yr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
