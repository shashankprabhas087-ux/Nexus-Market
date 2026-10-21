import React from 'react';

export default function ProductSpecs() {
  const specs = [
    { label: 'Acoustic Design', value: 'Closed-back circumaural' },
    { label: 'Driver Units', value: '40mm Custom Bio-Cellulose Diaphragms' },
    { label: 'Frequency Response', value: '4 Hz – 45,000 Hz' },
    { label: 'Active Noise Cancellation', value: 'Smart Adaptive Dual-Feedback ANC (-45dB)' },
    { label: 'Bluetooth Version & Range', value: 'Bluetooth 5.4 LE (Up to 20m / 65ft)' },
    { label: 'Supported Audio Codecs', value: 'LDAC, AAC, aptX Adaptive, SBC' },
    { label: 'Battery Runtime', value: '60 Hours (ANC Off) / 45 Hours (ANC On)' },
    { label: 'Charging Port & Time', value: 'USB-C Fast Charge (0 to 100% in 70 mins)' },
    { label: 'Total Weight', value: '248 grams (8.74 oz)' },
    { label: 'Included in the Box', value: 'Headphones, 3.5mm Aux Cable, USB-C Wire, Case' },
  ];

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded p-6 shadow-sm">
      <div className="border-b border-outline-variant pb-4 mb-6 flex items-center justify-between">
        <h2 className="text-headline-sm font-headline-sm font-bold text-brand-navy">
          Technical Specifications
        </h2>
        <span className="font-body-sm text-outline">Updated firmware v3.4.1 ready</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 font-body-sm text-body-sm">
        {specs.map((item) => (
          <div key={item.label} className="flex py-2 border-b border-outline-variant/40 justify-between">
            <span className="text-outline">{item.label}</span>
            <span className="font-semibold text-brand-navy text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
