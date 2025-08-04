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



/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here
if (lastDay > 3 && lastDay <= 30) {
  for (var i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
      console.log(i + " - medicine");
    } else {
      console.log(i + " - rest");
    }
  }
} else {
  console.log("");
}



/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var forDocx = fileName.slice(-5);
var forPdf = fileName.slice(-4);
if (fileName[0] === "#" || forDocx === ".docx" || forPdf === ".pdf") {
  console.log("Store");
} else {
  console.log("Delete");
}
