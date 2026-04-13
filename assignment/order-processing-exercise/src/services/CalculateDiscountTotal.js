import { CustomerType } from "../constants/CustomerType.js";

const COUPONS = {
  NEW10: (amount) => amount * 0.1,
  FLAT200: () => 200
};

export function calculateDiscountTotal(order, subtotal) {
  let totalDiscount = 0;

  const customer = CustomerType[order.customerType];
  if (customer) {
    totalDiscount += subtotal * customer.getDiscount();
  }

  // 🎟 Coupon discount
  if (order.coupon && COUPONS[order.coupon]) {
    totalDiscount += COUPONS[order.coupon](subtotal);
  }

  return totalDiscount;
}