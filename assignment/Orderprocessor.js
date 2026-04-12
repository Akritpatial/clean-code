
function validateOrder(order) {
    if (!order.items || order.items.length === 0) {
        throw new Error("Order must have at least one item");
    }

    return order.items.filter(item => {
        return item.price > 0 && item.quantity > 0;
    });
}

function calculateSubtotal(items) {
    return items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

const COUPONS = {
    NEW10: (amount) => amount * 0.10,
    FLAT200: () => 200
};

function applyDiscount(order, subtotal) {
    let discount = 0;

    // Customer discount
    discount += subtotal * order.customerType.getDiscount();

    // Coupon discount
    if (order.coupon && COUPONS[order.coupon]) {
        discount += COUPONS[order.coupon](subtotal);
    }

    return discount;
}

function calculateTax(order, amount) {
    return amount * order.orderLocation.getTaxRate();
}

function generateSummary(order) {

    const validItems = validateOrder(order);

    const totalItems = validItems.reduce((sum, item) => sum + item.quantity, 0);

    const subtotal = calculateSubtotal(validItems);

    const discount = applyDiscount(order, subtotal);

    const taxedAmount = subtotal - discount;

    const tax = calculateTax(order, taxedAmount);

    const finalAmount = taxedAmount + tax;

   return {
    orderId: order.orderId || order.id,

    customerType:
        typeof order.customerType === "string"
            ? order.customerType
            : order.customerType.getCustomerType(),

    items: validItems,

    coupon: order.coupon,

    location:
        typeof order.orderLocation === "string"
            ? order.orderLocation
            : order.orderLocation.getLocation(),

    subtotal,
    discount,
    tax,
    finalAmount
};
}

export { generateSummary };