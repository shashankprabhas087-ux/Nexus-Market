import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSteps({ currentStep = 1 }) {
  const steps = [
    { number: 1, label: 'Cart', path: '/cart' },
    { number: 2, label: 'Delivery Address', path: '/checkout' },
    { number: 3, label: 'Payment & Review', path: '/checkout' },
  ];

  return (
    <nav aria-label="Checkout Progress" className="flex items-center gap-3 sm:gap-6 py-4 justify-center">
      {steps.map((step, idx) => {
        const isCurrent = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <React.Fragment key={step.number}>
            {idx > 0 && (
              <span
                className={`w-8 sm:w-12 h-[2px] ${
                  isCompleted ? 'bg-brand-coral' : 'bg-slate-200'
                }`}
              />
            )}
            <div className="flex items-center gap-2">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  isCompleted
                    ? 'bg-emerald-600 text-white'
                    : isCurrent
                    ? 'bg-brand-coral text-white'
                    : 'border border-slate-300 text-slate-500 bg-white'
                }`}
              >
                {isCompleted ? (
                  <span className="material-symbols-outlined text-[16px]">check</span>
                ) : (
                  step.number
                )}
              </span>
              <span
                className={`text-label-md font-label-md ${
                  isCurrent
                    ? 'text-brand-navy font-bold border-b-2 border-brand-coral pb-0.5'
                    : isCompleted
                    ? 'text-brand-navy font-medium'
                    : 'text-outline'
                }`}
              >
                {step.label}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
