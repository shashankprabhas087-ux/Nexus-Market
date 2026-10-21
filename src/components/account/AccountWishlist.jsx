import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';
import formatPrice from '../../utils/formatPrice';

export default function AccountWishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product) => {
    addItem(product, 1);
    toggleWishlist(product.id);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm space-y-6">
      <div className="border-b border-outline-variant pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-headline-md font-headline-md font-bold text-brand-navy">My Wishlist &amp; Saved</h1>
          <p className="text-body-sm text-outline">Items saved for later purchases.</p>
        </div>
        <span className="bg-slate-100 text-brand-navy font-bold text-label-sm px-2.5 py-1 rounded-full">
          {wishlistProducts.length} Saved
        </span>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-[48px] text-outline mb-2">favorite_border</span>
          <p className="text-brand-navy font-bold text-headline-sm mb-1">Your wishlist is currently empty</p>
          <p className="text-body-sm text-outline mb-4">Click the heart icon on any product to save it here.</p>
          <Link to="/search" className="px-5 py-2.5 bg-brand-navy text-white rounded font-label-md">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlistProducts.map((p) => (
            <div key={p.id} className="border border-outline-variant rounded-lg p-3 flex flex-col justify-between hover:shadow-sm transition-all">
              <div className="relative aspect-square w-full bg-slate-50 p-2 rounded mb-2">
                <img src={p.image} alt={p.title} className="w-full h-full object-contain" />
                <button
                  type="button"
                  onClick={() => toggleWishlist(p.id)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white text-red-500 shadow flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[16px] fill">favorite</span>
                </button>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-outline">{p.brand}</span>
                <Link to={`/product/${p.id}`}>
                  <h3 className="text-label-md font-bold text-brand-navy line-clamp-1 hover:text-brand-coral">{p.title}</h3>
                </Link>
                <div className="font-price-card font-extrabold text-brand-navy mt-1">{formatPrice(p.price)}</div>
              </div>

              <div className="mt-3 pt-2 border-t border-outline-variant/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleMoveToCart(p)}
                  className="w-full py-1.5 bg-brand-coral hover:bg-orange-600 text-white font-label-md text-label-md rounded font-bold text-center transition-colors"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
