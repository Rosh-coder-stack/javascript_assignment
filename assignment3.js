
const score = 85;

let letterGrade;
if (score >= 90) {
  letterGrade = "A";
} else if (score >= 80) {
  letterGrade = "B";
} else if (score >= 70) {
  letterGrade = "C";
} else if (score >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}


let evaluatedGrade;
switch (letterGrade) {
  case "A":
    evaluatedGrade = "A";
    break;
  case "B":
    evaluatedGrade = "B";
    break;
  case "C":
    evaluatedGrade = "C";
    break;
  case "D":
    evaluatedGrade = "D";
    break;
  case "F":
  default:
    evaluatedGrade = "F";
    break;
}


const status = score >= 60 ? "Passed" : "Failed";

// 5. Output results matching the specified format
console.log(`Score: ${score}`);
console.log(`Grade: ${evaluatedGrade}`);
console.log(`Status: ${status}`);
