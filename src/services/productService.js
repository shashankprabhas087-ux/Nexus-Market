import { products } from '../data/products';
import { lightningDeals } from '../data/deals';
import { categories } from '../data/categories';

// Simulate async network latency
const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  async getProducts(params = {}) {
    await delay();
    const {
      query = '',
      category = '',
      primeOnly = false,
      brands = [],
      minRating = 0,
      maxPrice = 1000,
      features = [],
      sortBy = 'Featured',
      page = 1,
      limit = 8,
    } = params;

    let filtered = [...products];

    // Search query filter
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (category && category !== 'All') {
      const cat = category.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.category.toLowerCase() === cat ||
          (p.subCategory && p.subCategory.toLowerCase() === cat) ||
          (cat === 'deals' && p.badge && p.badge.toLowerCase().includes('deal')) ||
          (cat === 'prime' && p.prime) ||
          (cat === 'new-in' && p.badge && (p.badge.includes('Trending') || p.badge.includes('Exclusive'))) ||
          (cat === 'tech' && (p.category === 'audio' || p.category === 'gaming'))
      );
    }

    // Prime only
    if (primeOnly) {
      filtered = filtered.filter((p) => p.prime);
    }

    // Brand filter
    if (brands.length > 0) {
      filtered = filtered.filter((p) => brands.includes(p.brand));
    }

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    // Price filter
    if (maxPrice > 0) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    // Feature filter
    if (features.length > 0) {
      filtered = filtered.filter((p) =>
        features.every((f) => p.features && p.features.includes(f))
      );
    }

    // Sorting
    if (sortBy === 'Price: Low to High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Avg. Customer Review') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'Newest Arrivals') {
      filtered.reverse();
    }

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return {
      products: paginated,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  },

  async getProductById(id) {
    await delay();
    return products.find((p) => p.id === id) || null;
  },

  async getLightningDeals() {
    await delay();
    return lightningDeals;
  },

  async getCategories() {
    await delay();
    return categories;
  },

  async getRecentlyViewed() {
    await delay();
    return products.slice(0, 4);
  },
};

export default productService;
