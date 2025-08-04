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
