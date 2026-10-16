
console.log("--- For Loop: Multiplication Table of 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


console.log("\n--- While Loop: Break Statement ---");
let candidate = 11;
while (true) {
  if (candidate % 6 === 0) {
    console.log(`Found: ${candidate}`);
    break;
  }
  candidate++;
}


console.log("\n--- Do...While Loop: Continue Statement ---");
let count = 0;
do {
  count++;
  if (count === 3) {
    console.log(`Skipping iteration ${count}`);
    continue;
  }
  console.log(`Iteration: ${count}`);
} while (count < 5);
