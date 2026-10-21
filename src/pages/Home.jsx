import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryTiles from '../components/home/CategoryTiles';
import LightningDeals from '../components/home/LightningDeals';
import BentoCuration from '../components/home/BentoCuration';

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex flex-col gap-8">
      {/* 1. Dynamic Hero Banner / Editorial Drop */}
      <HeroBanner />

      {/* 2. Quick Category Departments Grid */}
      <CategoryTiles />

      {/* 3. Flash Sales & Lightning Deals */}
      <LightningDeals />

      {/* 4. Curated Bento: Streetwear Lookbook & Personalized Recommendations */}
      <BentoCuration />
    </div>
  );
}
