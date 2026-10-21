/**
 * Format price number with currency symbol
 * Default: INR, switchable to USD/EUR
 */
export function formatPrice(amount, currency = 'USD') {
  if (typeof amount !== 'number') return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default formatPrice;
