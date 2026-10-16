


const billInput = (typeof prompt !== "undefined" 
  ? prompt("Enter bill amount ($):", "100") 
  : "100") || "100";

const tipPercentInput = (typeof prompt !== "undefined" 
  ? prompt("Enter tip percentage (%):", "15") 
  : "15") || "15";

// 2. Explicitly convert inputs using Number()
const billAmount = Number(billInput);
const tipPercentage = Number(tipPercentInput);

// 3. Calculate tip and total
const calculatedTip = (billAmount * tipPercentage) / 100;
const totalAmount = billAmount + calculatedTip;

// 4. Output results matching the specified format
console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
