/** Problem -02 ( Cycle or Laptop ) */
var money = 100000;
//write your code here
if (money > 0 && money <= 1000000000) {
  if (money >= 25000) {
    console.log("Laptop");
  } else if (money >= 10000) {
    console.log("Cycle");
  } else if (money < 10000) {
    console.log("Chocolate");
  }
} else {
  console.log("");
}
