import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import productService from '../services/productService';
import CatalogToolbar from '../components/catalog/CatalogToolbar';
import CatalogFilters from '../components/catalog/CatalogFilters';
import CatalogActiveFilters from '../components/catalog/CatalogActiveFilters';
import ProductGrid from '../components/product/ProductGrid';
import RecentlyViewed from '../components/catalog/RecentlyViewed';

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [layout, setLayout] = useState('grid');
  const [sortBy, setSortBy] = useState('Featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters state
  const [primeOnly, setPrimeOnly] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  // Fetch data
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    productService
      .getProducts({
        query: queryParam,
        category: categoryParam,
        primeOnly,
        brands: selectedBrands,
        minRating,
        maxPrice,
        features: selectedFeatures,
        sortBy,
        page,
        limit: 8,
      })
      .then((res) => {
        if (isMounted) {
          setProducts(res.products);
          setTotalResults(res.total);
          setTotalPages(res.totalPages);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [queryParam, categoryParam, primeOnly, selectedBrands, minRating, maxPrice, selectedFeatures, sortBy, page]);

  // Active filters list
  const activeFilters = useMemo(() => {
    const list = [];
    if (primeOnly) list.push({ id: 'prime', label: 'Prime Delivery', variant: 'coral', type: 'prime' });
    selectedBrands.forEach((b) => list.push({ id: `brand-${b}`, label: b, type: 'brand', value: b }));
    if (minRating > 0) list.push({ id: 'rating', label: `${minRating}★ & Up`, type: 'rating' });
    selectedFeatures.forEach((f) => list.push({ id: `feat-${f}`, label: f, type: 'feature', value: f }));
    return list;
  }, [primeOnly, selectedBrands, minRating, selectedFeatures]);

  const handleRemoveFilter = (filter) => {
    if (filter.type === 'prime') setPrimeOnly(false);
    if (filter.type === 'brand') setSelectedBrands((prev) => prev.filter((b) => b !== filter.value));
    if (filter.type === 'rating') setMinRating(0);
    if (filter.type === 'feature') setSelectedFeatures((prev) => prev.filter((f) => f !== filter.value));
  };

  const handleClearAll = () => {
    setPrimeOnly(false);
    setSelectedBrands([]);
    setMinRating(0);
    setMaxPrice(600);
    setSelectedFeatures([]);
  };

  const pageTitle = queryParam
    ? `Results for "${queryParam}"`
    : categoryParam
    ? `${categoryParam.toUpperCase()} Catalog`
    : 'Wireless Noise-Canceling Headphones';

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex-1">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="py-2">
        <ol className="flex items-center gap-2 text-body-sm font-body-sm text-outline">
          <li><Link to="/" className="hover:text-brand-navy">Home</Link></li>
          <li><span className="material-symbols-outlined text-[14px]">chevron_right</span></li>
          <li><Link to="/search" className="hover:text-brand-navy">Catalog</Link></li>
          {categoryParam && (
            <>
              <li><span className="material-symbols-outlined text-[14px]">chevron_right</span></li>
              <li className="text-brand-navy font-semibold uppercase text-label-sm">{categoryParam}</li>
            </>
          )}
        </ol>
      </nav>

      {/* Toolbar */}
      <CatalogToolbar
        title={pageTitle}
        totalResults={totalResults}
        layout={layout}
        onLayoutChange={setLayout}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="w-full py-2.5 bg-surface-container-low border border-outline-variant rounded font-label-md text-brand-navy flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          {activeFilters.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-brand-coral text-white text-[11px] font-bold flex items-center justify-center">
              {activeFilters.length}
            </span>
          )}
        </button>
      </div>

      {/* 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar */}
        <div className={`lg:col-span-3 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <CatalogFilters
            primeOnly={primeOnly}
            onTogglePrime={setPrimeOnly}
            selectedBrands={selectedBrands}
            onToggleBrand={(b) =>
              setSelectedBrands((prev) =>
                prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
              )
            }
            minRating={minRating}
            onSelectRating={setMinRating}
            maxPrice={maxPrice}
            onChangeMaxPrice={setMaxPrice}
            selectedFeatures={selectedFeatures}
            onToggleFeature={(f) =>
              setSelectedFeatures((prev) =>
                prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]
              )
            }
            onResetAll={handleClearAll}
          />
        </div>

        {/* Main Content */}
        <section className="lg:col-span-9">
          <CatalogActiveFilters
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
          />

          <ProductGrid
            products={products}
            layout={layout}
            loading={loading}
            onResetFilters={handleClearAll}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Pagination" className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 py-4 border-t border-b border-outline-variant bg-surface-container-lowest px-4 rounded">
              <span className="text-body-sm text-on-surface-variant">
                Page <strong className="text-brand-navy">{page}</strong> of <strong>{totalPages}</strong> ({totalResults} items)
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 border border-outline-variant rounded font-label-md text-label-md text-outline hover:text-brand-navy disabled:opacity-40"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    type="button"
                    onClick={() => setPage(i + 1)}
                    className={`w-9 h-9 rounded font-label-md text-label-md ${
                      page === i + 1
                        ? 'bg-brand-navy text-white'
                        : 'border border-outline-variant text-brand-navy hover:bg-slate-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 border border-outline-variant rounded font-label-md text-label-md text-brand-navy hover:bg-slate-100 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </section>
      </div>

      {/* Recently Viewed */}
      <RecentlyViewed />
    </div>
  );
}
