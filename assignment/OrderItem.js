export class OrderItem {
    constructor(itemName, quantity, price, category) {

        if (quantity == null || quantity <= 0) {
            throw new Error("Quantity must be greater than zero");
        }

        if (!itemName || itemName.trim() === "") {
            throw new Error("Item name is required");
        }

        if (price == null || price < 0) {
            throw new Error("Price cannot be negative");
        }
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }

    getItemName() {
        return this.itemName;
    }

    getCategory() {
        return this.category;
    }

    getQuantity() {
        return this.quantity;
    }

    getPrice() {
        return this.price;
    }

    getTotalPrice() {
        return this.quantity * this.price;
    }
}