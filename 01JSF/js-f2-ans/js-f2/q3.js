let weight = 88;
let height = 1.8;

let bmi = weight / height ** 2;
// let bmi = weight / (height * height)
// let bmi = weight / Math.pow(height, 2)
let result = "";
if (bmi < 18.5) {
  result = "Underweight";
} else if (bmi < 24.9) {
  result = "Normal";
} else if (bmi < 29.9) {
  result = "Overweight";
} else {
  result = "Obese";
}

console.log("Weight (kg): " + weight);
console.log(`Height (m): ${height}`);
console.log(`BMI: ${Math.round(bmi)}`);
console.log(`Result: ${result}`);
