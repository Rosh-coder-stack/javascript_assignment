
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("--- Product List (forEach) ---");
products.forEach(product => {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
});


console.log("\n--- Affordable Products Under $50 (filter) ---");
const itemsUnder50 = products.filter(product => product.price < 50);
console.log(itemsUnder50);

console.log("\n--- Formatted Product Tags (map) ---");
const productTags = products.map(product => `${product.name.toUpperCase()} costs $${product.price}`);
console.log(productTags);
