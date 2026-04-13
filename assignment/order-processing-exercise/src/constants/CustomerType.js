export const CustomerType = Object.freeze({
    REGULAR: {
        discount: 0.0,
        getDiscount() {
            return this.discount;
        },
        getCustomerType() {
            return "REGULAR";
        }
    },
    PREMIUM: {
        discount: 0.1,
        getDiscount() {
            return this.discount;
        },
        getCustomerType() {
            return "PREMIUM";
        }
    }
});
export default CustomerType;