export class Order {
    constructor(orderId, customerType, coupon, items, orderLocation) {

        if (!items || items.length === 0) {
            throw new Error("Order must contain at least one item");
        }
        if (!orderId || orderId.trim() === "") {
            throw new Error("Order ID is required");
        }
        if (!customerType) {
            throw new Error("Customer type is required");
        }

        if (!orderLocation) {
            throw new Error("Order location is required");
        }

        this.orderId = orderId;
        this.customerType = customerType;
        this.items = [...items];
        this.coupon = coupon;
        this.orderLocation = orderLocation;
    }

    getOrderId() {
        return this.orderId;
    }

    getCustomerType() {
        return this.customerType;
    }

    getCoupon() {
        return this.coupon;
    }

    getLocation() {
        return this.orderLocation;
    }

    getItems() {
        return this.items;
    }

    getTaxRate() {
        return this.orderLocation;
    }
    totalAmount() {
        return this.items
            .map(item => item.getTotalPrice())
            .reduce((sum, value) => sum + value, 0);
    }
}