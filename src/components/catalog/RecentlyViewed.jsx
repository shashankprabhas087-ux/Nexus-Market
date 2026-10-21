import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';
import ProductCard from '../product/ProductCard';

export default function RecentlyViewed() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    productService.getRecentlyViewed().then(setItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-outline-variant">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-headline-md font-headline-md text-brand-navy">
            Recently Viewed &amp; Recommendations
          </h2>
          <p className="text-body-sm font-body-sm text-outline">
            Based on your recent product discovery history
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
