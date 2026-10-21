/**
 * Calculate percentage discount from original price and discounted price
 */
export function calcDiscount(originalPrice, salePrice) {
  if (!originalPrice || !salePrice || originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

export default calcDiscount;
