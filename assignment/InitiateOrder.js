import {CustomerType} from "./enums/CustomerType.js";
import {Location} from "./enums/Location.js";
import {Order} from "./Order.js";
import {OrderItem} from "./OrderItem.js";
import { generateSummary } from "./orderProcessor.js";

const items = [
    new OrderItem("Shoes", 1, 2000, "FOOTWEAR"),
    new OrderItem("T-Shirt", 2, 500, "CLOTHING")
];
const order = new Order("101", CustomerType.REGULAR, "NEW10", items, Location.IN);

console.log(generateSummary(order));