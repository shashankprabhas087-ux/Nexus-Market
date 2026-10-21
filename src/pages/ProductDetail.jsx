import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productService from '../services/productService';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductBuyBox from '../components/product/ProductBuyBox';
import FrequentlyBoughtTogether from '../components/product/FrequentlyBoughtTogether';
import ProductSpecs from '../components/product/ProductSpecs';
import CustomerReviews from '../components/product/CustomerReviews';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('Midnight Slate');
  const [selectedStyle, setSelectedStyle] = useState('Standard Edition');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    productService.getProductById(id).then((found) => {
      if (isMounted) {
        if (found) {
          setProduct(found);
        } else {
          // Fallback to first product if ID doesn't match mock directly
          productService.getProducts().then((res) => {
            if (isMounted) setProduct(res.products[0]);
          });
        }
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading || !product) {
    return (
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-16 flex items-center justify-center">
        <div className="flex items-center gap-3 text-on-surface-variant font-body-md">
          <span className="material-symbols-outlined animate-spin text-brand-coral text-[24px]">
            progress_activity
          </span>
          <span>Loading Product Details...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto py-4 flex-1">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-2 mb-2">
        <ol className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
          <li><Link to="/" className="hover:text-brand-coral">Home</Link></li>
          <li><span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span></li>
          <li><Link to="/search" className="hover:text-brand-coral">Catalog</Link></li>
          <li><span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span></li>
          <li className="font-semibold text-brand-navy truncate max-w-xs md:max-w-none">{product.title}</li>
        </ol>
      </nav>

      {/* 3-Column Core Grid: Gallery | Info | Buy Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <ProductGallery product={product} />
        <ProductInfo
          product={product}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          selectedStyle={selectedStyle}
          onSelectStyle={setSelectedStyle}
        />
        <ProductBuyBox
          product={product}
          selectedColor={selectedColor}
          selectedStyle={selectedStyle}
        />
      </div>

      {/* Below the fold modules */}
      <div className="flex flex-col gap-12 border-t border-outline-variant pt-12">
        <FrequentlyBoughtTogether product={product} />
        <ProductSpecs />
        <CustomerReviews product={product} />
      </div>
    </div>
  );
}
