/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code her
if (area > 0 && area <= 1000000000) {
  var portion = area / 2;
  console.log(portion);
} else {
  console.log("");
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money > 0 && money <= 1000000000) {
  if (money >= 25000 && money < 1000000000) {
    console.log("Laptop");
  } else if (money >= 100000 && money < 25000) {
    console.log("Cycle");
  } else if (money < 10000 && money >= 0) {
    console.log("Chocolate");
  }
} else {
  console.log("");
}
