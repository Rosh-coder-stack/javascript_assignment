
function calculateRectangleArea(length = 5, width = 4) {
  return length * width;
}


const calculateAreaArrow = (length = 5, width = 4) => length * width;


console.log(`Standard Function (Default: 5, 4): Area = ${calculateRectangleArea()}`);

console.log(`Arrow Function (Custom: 10, 3): Area = ${calculateAreaArrow(10, 3)}`);


{
  let blockVar = "I exist only inside this block scope";
}

try {

  console.log(blockVar);
} catch (error) {
  console.log(`Scope Test Error: ${error}`);
}
