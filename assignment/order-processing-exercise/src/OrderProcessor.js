import { validateOrder } from "./services/OrderValidation.js";
import { calculateOrderSubtotal } from "./services/CalculateOrderSubtotal.js";
import { calculateDiscountTotal } from "./services/CalculateDiscountTotal.js";
import { Location } from "./constants/Location.js";

export function generateSummary(order) {

  const { isValid, validItems } = validateOrder(order);

  if (!isValid) {
    throw new Error("Invalid order: No valid items");
  }

  const subtotal = calculateOrderSubtotal(validItems);

  const discount = calculateDiscountTotal(order, subtotal);

  const amountAfterDiscount = subtotal - discount;

  const locationObj = Location[order.location];
  const taxRate = locationObj ? locationObj.getTaxRate() : 0;

  const tax = amountAfterDiscount * taxRate;

  const finalAmount = amountAfterDiscount + tax;

  const totalItems = validItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    orderId: order.id,
    items : validItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      category: item.category
    })),
    totalItems,
    subtotal,
    discount,
    tax,
    finalAmount
  };
}