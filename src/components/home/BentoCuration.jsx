import React from 'react';
import { Link } from 'react-router-dom';

export default function BentoCuration() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Bento Left Column: ASOS-Style Streetwear Lookbook (7 Columns) */}
      <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-brand-coral font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Editorial Curation
              </span>
              <h2 className="text-headline-md font-headline-md text-brand-navy">
                Trending in Streetwear: Volume 04
              </h2>
            </div>
            <Link
              to="/search?category=streetwear"
              className="text-brand-navy hover:text-brand-coral font-label-md text-label-md flex items-center gap-1 font-semibold"
            >
              <span>View full lookbook</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </Link>
          </div>

          {/* Featured Editorial Image with Floating Quick-Shop Tags */}
          <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-outline-variant mb-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU2yq7wA7Crw43jiG1PZ5F2ZmfOAQLZIjeVu_Ii-1mYzECMsFkpyWGlNXsXCLZwUCzfbNsRa7C3nij5VsemrgtF0ataie6D_jD16Oy5YvhiOqmttC7ltpg0Tw5c5HOe-4o2zjdmICVpLD5PUhDFx0pw1D89MHkqdeU1M_gf037oZ6t1cEQ546z7fM3v_TMHXshmHJ_pTeQK_IO13MuAf8-hKZdT8osMMLy2K8cRFjzQlHakEinz5Szzg"
              alt="Streetwear models styled in relaxed neutral tone utility wear"
              loading="lazy"
              className="w-full h-full object-cover"
            />

            {/* Quick Shop Interactive Tag 1 */}
            <div className="absolute top-1/3 left-1/4 group cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-surface-container-lowest/90 backdrop-blur shadow-md flex items-center justify-center border border-outline-variant hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px] text-brand-coral">
                  sell
                </span>
              </div>
              <div className="hidden group-hover:flex absolute left-8 top-0 bg-brand-navy text-white p-2.5 rounded shadow-lg text-left w-40 flex-col z-20">
                <span className="font-label-sm text-label-sm">Cropped Tech Vest</span>
                <span className="font-price-card text-price-card text-secondary-fixed">$64.00</span>
              </div>
            </div>

            {/* Quick Shop Interactive Tag 2 */}
            <div className="absolute bottom-1/4 right-1/3 group cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-surface-container-lowest/90 backdrop-blur shadow-md flex items-center justify-center border border-outline-variant hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px] text-brand-coral">
                  sell
                </span>
              </div>
              <div className="hidden group-hover:flex absolute right-8 bottom-0 bg-brand-navy text-white p-2.5 rounded shadow-lg text-left w-44 flex-col z-20">
                <span className="font-label-sm text-label-sm">Wide-Leg Parachute Pant</span>
                <span className="font-price-card text-price-card text-secondary-fixed">$78.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Mini Carousel items under the Look */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/search?category=streetwear" className="border border-outline-variant rounded p-2 flex flex-col gap-1 bg-surface hover:border-brand-coral transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQGEOA7Q0cVqrwmf9oEENAREfMpYTRht6CxqBW1MtWO-EOHzfxLa0jTbVAdRv5udlIlkCqe4eGJbzNXyUclVEBkZQ7r8ziBdQF51hyeWRK5GEDkTwLWuxZheJJESmHVps_rpF_FwrJMa8EpWbY1e8wPUAESnTThqfcOnufsTQDOLQpKwZ6X3R1Pc5rgk7PZ-gj6IE2euYKv3IDXoRxzVG-MbflalMYe3gakwdZtkOZniLrpNkLt_DAg"
              alt="Unisex heavyweight washed grey oversized cotton tee"
              loading="lazy"
              className="w-full h-24 object-cover rounded mb-1"
            />
            <span className="font-label-sm text-label-sm text-brand-navy font-semibold truncate">Washed Boxy Tee</span>
            <span className="font-headline-sm text-headline-sm text-brand-navy font-bold">$32.00</span>
          </Link>

          <Link to="/search?category=streetwear" className="border border-outline-variant rounded p-2 flex flex-col gap-1 bg-surface hover:border-brand-coral transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCulfCSt65FkFAs_dok0tD0qsJkVsmxCEvcys5Tm4Q6OWSiUQT-srmJbpkHNDQLt1Ss5XaW0_qERuRuURgVWobnYbkTnWLPkLC1bnGzghxN6-jVFUSeF9fYHPKhuZKUynOmyuRUmn1rZLbXxP-cnFidTpLSoZ4tOrBHuRFgF5dIYWt8iknwdnq54vu58HW3wt8GIjnvEAD1DtSqEV9ib02fOLMtZT8_aL6z7ZyZma6IZPrXI2vd5PrO1A"
              alt="Beige technical bucket hat with removable chin strap"
              loading="lazy"
              className="w-full h-24 object-cover rounded mb-1"
            />
            <span className="font-label-sm text-label-sm text-brand-navy font-semibold truncate">Tactical Bucket Hat</span>
            <span className="font-headline-sm text-headline-sm text-brand-navy font-bold">$28.00</span>
          </Link>

          <Link to="/search?category=sneakers" className="border border-outline-variant rounded p-2 flex flex-col gap-1 bg-surface hover:border-brand-coral transition-colors">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG4C3rwWe_vetG9f0kPba29PlasJVOPbqCBtEKZinfci_tNxKFKVVzSBVp83-JQzNVh8R9Ho-si4HCLaTR9cVezwYZiz3jRyRkYSbhjudbIldGIkzqGDRHuAc7eH8aXYU8g_evLp_eVCkMmDD6nZC4hA8dIN6hbLRjhGH60vPLydHyp_XDoWJufGlm0sc6gD_rFIE64qF9pBkS-giqtUa3aFGDJQCEbQAjlSCkIE_nvuOqhmMY4Q98Ng"
              alt="Chunky platform retro runner sneaker"
              loading="lazy"
              className="w-full h-24 object-cover rounded mb-1"
            />
            <span className="font-label-sm text-label-sm text-brand-navy font-semibold truncate">Orbit Low Sneakers</span>
            <span className="font-headline-sm text-headline-sm text-brand-navy font-bold">$120.00</span>
          </Link>
        </div>
      </div>

      {/* Bento Right Column: "Keep Shopping For You" & Nexus Prime VIP (5 Columns) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Personalized Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-headline-sm text-headline-sm text-brand-navy font-semibold">
              Keep Shopping For You
            </h3>
            <Link to="/search" className="font-label-sm text-label-sm text-outline hover:text-brand-coral">
              View History
            </Link>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Based on your recent interest in Workspace Gadgets
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/search?q=Monitor+Arm" className="border border-outline-variant rounded-lg p-2.5 hover:border-outline transition-colors bg-surface group">
              <div className="w-full h-28 bg-surface-container-lowest rounded overflow-hidden mb-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMikYgF8m70LZaOai5KgDjAQqmSaE-DKb-mpvEcyJQ4OZifSvX1Rom-JdgXi39GFjMx4n6Ex9jncxdbz5UkRC8kaOJWG70v-YnKEZTmVv0geN12BoFO5VmN6UhH7TVgc7QKkJyVNPZx6kwxgjlahasQz2YYZyKcSHyeqzo-t_LbsRkVzh22FyV9xfCwPMdVFPIV8I84u0D_8sms_GfELkBXaEdmtZxijdU0_xsqPj8hgGcpsU8xQoetw"
                  alt="Anodized aluminum dual monitor desk mount"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-label-md text-label-md text-brand-navy font-semibold line-clamp-1">Aluminum Monitor Arm</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-price-card text-price-card text-brand-navy font-bold">$79.99</span>
                <span className="text-label-sm font-label-sm text-brand-coral font-bold">Prime</span>
              </div>
            </Link>

            <Link to="/search?q=Desk+Mat" className="border border-outline-variant rounded-lg p-2.5 hover:border-outline transition-colors bg-surface group">
              <div className="w-full h-28 bg-surface-container-lowest rounded overflow-hidden mb-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcqkDxX-qsq7G_FZcLcdYbJg5A7eGu4lj9nx_nmCQZeG0WindjQh6wL5-DxJBFUE6zSMCS7-rJ-gND_CGr9K9AD6sujjrgHpYm-7CRKhhBctYuIutkCpOD1ocS8whGBZhIRk7AGfEUXT2ZPxmR1GVBKLXi2GLKhXXGzDIjvbVbmu44xtAl45-WOoDtkR07q02khOLcapGkg8sru5EGd5AUwBhbsGs-QL4fRTBClKqk8mQp-3myyVuz-g"
                  alt="Natural woven wool felt desk pad protector"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-label-md text-label-md text-brand-navy font-semibold line-clamp-1">Wool Felt Desk Mat</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="font-price-card text-price-card text-brand-navy font-bold">$29.50</span>
                <span className="text-label-sm font-label-sm text-brand-coral font-bold">Prime</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Nexus Prime VIP Membership Banner */}
        <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-xl p-5 border border-slate-700 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-1 max-w-[280px]">
            <span className="text-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
              Fast-Track Fulfillment
            </span>
            <h4 className="font-headline-md text-headline-md text-white leading-snug font-bold">
              Nexus Prime: Zero-Fee Express Delivery
            </h4>
            <p className="font-body-sm text-body-sm text-slate-300">
              Unlimited 1-day shipping + early access to midnight drop tiers.
            </p>
            <Link
              to="/search?category=prime"
              className="mt-2 bg-brand-coral hover:bg-orange-600 text-white font-label-md text-label-md px-4 py-2 rounded self-start transition-colors"
            >
              Try 30 Days Free
            </Link>
          </div>
          <div className="hidden sm:flex w-20 h-20 rounded-full bg-white/10 border border-white/20 items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[42px] text-secondary-fixed">
              rocket_launch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
