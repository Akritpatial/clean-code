import { generateSummary } from "./Orderprocessor.js";

const order = {
  id: "ORD1",
  customerType: "PREMIUM",
  items: [
    {
      name: "Shoes",
      price: 2000,
      quantity: 1,
      category: "FOOTWEAR"
    },
    {
      name: "T-shirt",
      price: 500,
      quantity: 2,
      category: "CLOTHING"
    }
  ],
  coupon: "NEW10",
  location: "IN"
};

try {
  const summary = generateSummary(order);

  console.log("✅ Order Summary:");
  console.log(summary);
} catch (error) {
  console.error("❌ Error processing order:", error.message);
}