/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const prompt = require("prompt-sync")();
let age, isStudent, isSenior, discount, price, actual_price;
actual_price = 800;
age = parseInt(prompt("Enter your age: "));
if (age < 10) {
  console.log("Ticket Price : Free");
} else if (10 < age && age<= 60) {
  isStudent = prompt("Are you a student? (yes/no): ").toLowerCase() === "yes";
  if (isStudent) {
    discount = actual_price * 0.5;
    price = actual_price - discount;
    console.log("Ticket Price : ", price);
  } else {
    console.log("Ticket Price : ", actual_price);
  }
} else if (age > 60) {
  isSenior = prompt("Are you a senior? (yes/no): ").toLowerCase() === "yes";
  discount = actual_price * 0.15;
  price = actual_price - discount;
  console.log("Ticket Price : ", price);
} else {
  console.log("Ticket Price :", actual_price);
}
