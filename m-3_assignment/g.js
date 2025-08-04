/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var CurrentSalary;
if ((startingSalary > 0 && startingSalary <= 1000000) && (experience > 0 && experience <= 50))
{
    CurrentSalary = startingSalary *Math.pow(1.05,experience);
    console.log(CurrentSalary.toFixed(2));
}
else{
    console.log('');
}
