

console.log("--- Initializing Inventory System");


const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];


const inputName = typeof prompt !== "undefined" 
  ? prompt("Enter new product name:", "Monitor") 
  : "Monitor";

const inputPrice = typeof prompt !== "undefined" 
  ? prompt("Enter product price ($):", "150") 
  : "150";


const sanitizedName = String(inputName ? inputName.trim() : "Monitor");
const sanitizedPrice = Number(inputPrice ? inputPrice.trim() : 150);

inventory.push({ name: sanitizedName, price: sanitizedPrice });

console.log(`[Prompt executed: User adds "${sanitizedName}" at "$${sanitizedPrice}"]`);

function categorizeProduct(price) {
  switch (true) {
    case price >= 500:
      return "Premium";
    case price >= 100 && price <= 499:
      return "Standard";
    case price < 100:
    default:
      return "Budget";
  }
}


console.log("Processing Inventory Roster (forEach)");
inventory.forEach(item => {
  const category = categorizeProduct(item.price);
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

const totalInventoryValue = inventory.reduce((total, item) => total + item.price, 0);


const affordableItems = inventory
  .filter(item => item.price < 200)
  .map(item => item.name);

const formattedReportList = inventory.map(
  item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Financial Analytics");
console.log(`Total Inventory Value: $${totalInventoryValue}`);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems).replace(/,/g, ", ")}`);
console.log(`Formatted Report List: ${JSON.stringify(formattedReportList).replace(/,/g, ", ")}`);
