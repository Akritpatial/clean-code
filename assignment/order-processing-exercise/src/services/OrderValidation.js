export function validateOrder(order) {
  if (!order || !Array.isArray(order.items)) {
    return { isValid: false, validItems: [] };
  }

  const validItems = order.items.filter((item) => {
    return (
      item &&
      typeof item.price === "number" &&
      typeof item.quantity === "number" &&
      item.price > 0 &&
      item.quantity > 0
    );
  });

  return {
    isValid: validItems.length > 0,
    validItems
  };
}