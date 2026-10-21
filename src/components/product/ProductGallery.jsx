import React, { useState } from 'react';
import Badge from '../ui/Badge';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const images = product.gallery || [
    product.image,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqgeT1w0RXLqC3CpYCYjr2GuVm1W2rWKVulo6xniz0q76I_3krQR3pDavjNWSnYDPPIO9lQFuWcGlMg8jHW0_ZYv7Q-5i9vLzl7mAfaUYqEqK0hltZeIlvLdksEGxOT6STHL3bpMRBfK7tM8qi8-FG-u2VZ5Y-kN5gEqR7YsYJaZ5j-TZlBD7ujl1mGVKLVs2yPMaLY0e1GzZarJeCbkHbxy_cArSyVo_46nF9Q_ZUP7j68m6_qSPEPA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCb8NjVkW6kkjJefdeFfyeY862-3mvYy4txUHKbJcKHE6uoH-Hi8tz5KXKb4MjUIpAUG74QNWBbkUDxer3KG2fTvY8PohM7to-vaO9Xr267vTG5EhezUweWfQH8MfDOe4AVF_1snVFPyIMHIWsMlqtKi3fGXreRE65dELELdBFWjBPqGz4tY8bVvOlXHqrfbIMjX_wl3cUjDQrCITSIDe5PptNF-Kp8r_WyMl5SbVOBys_v85iamiDwcg',
  ];

  return (
    <section aria-label="Product Media Gallery" className="lg:col-span-5 flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImage(idx)}
            className={`w-16 h-16 rounded overflow-hidden p-1 bg-surface-container-lowest transition-all ${
              activeImage === idx
                ? 'border-2 border-brand-navy'
                : 'border border-outline-variant hover:border-outline'
            }`}
          >
            <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain" />
          </button>
        ))}
        <button
          type="button"
          className="w-16 h-16 rounded border border-outline-variant hover:border-outline bg-slate-50 flex flex-col items-center justify-center text-center p-1"
        >
          <span className="material-symbols-outlined text-[20px] text-brand-coral">play_circle</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">Demo</span>
        </button>
        <button
          type="button"
          className="w-16 h-16 rounded border border-outline-variant hover:border-outline bg-slate-50 flex flex-col items-center justify-center text-center p-1"
        >
          <span className="material-symbols-outlined text-[20px] text-brand-navy">360</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">360&deg; View</span>
        </button>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded p-4 relative group flex items-center justify-center min-h-[420px] md:min-h-[500px]">
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <Badge variant="coral">Flash Deal</Badge>
          <Badge variant="navy">Editor&apos;s Choice</Badge>
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-outline-variant flex items-center justify-center text-on-surface hover:text-brand-coral shadow-sm transition-colors z-10"
        >
          <span className={`material-symbols-outlined text-[20px] ${inWishlist ? 'fill text-brand-coral' : ''}`}>
            favorite
          </span>
        </button>

        <div className="w-full h-full max-h-[440px] flex items-center justify-center overflow-hidden">
          <img
            src={images[activeImage]}
            alt={product.title}
            className="w-full h-full max-h-[420px] object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm border border-outline-variant px-2.5 py-1 rounded text-body-sm text-on-surface-variant flex items-center gap-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[16px]">zoom_in</span>
          <span className="font-label-sm text-label-sm">Roll over image to zoom</span>
        </div>
      </div>
    </section>
  );
}
