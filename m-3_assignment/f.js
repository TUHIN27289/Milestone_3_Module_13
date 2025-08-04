/** Problem -01 ( Divide the Asset ) */
var area = 800;
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
  if (money >= 25000) {
    console.log("Laptop");
  } else if (money >= 10000) {
    console.log("Cycle");
  } else {
    console.log("Chocolate");
  }
} else {
  console.log("");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
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

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
console.log(
  student.name + student.roll + "." + student.department + "@ph.ac.bd"
);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var CurrentSalary;
if (
  startingSalary > 0 &&
  startingSalary <= 1000000 &&
  experience > 0 &&
  experience <= 50
) {
  CurrentSalary = startingSalary * Math.pow(1.05, experience);
  console.log(CurrentSalary.toFixed(2));
} else {
  console.log("");
}
