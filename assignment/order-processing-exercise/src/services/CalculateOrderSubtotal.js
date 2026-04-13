export function calculateOrderSubtotal(items) {
  if (!Array.isArray(items)) return 0;

  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}