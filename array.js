const numbers=[2,7,8,4,5,6,3,1 ,90,56,44,34,23,12,11,10,9,8,7,6,5,4,3,2,1];
console.log(numbers);
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

console.log('length of array: ',numbers.length);
//  get by index
console.log('5th element: ',numbers[5]);
console.log('last element: ',numbers[numbers.length-1]);
// set by index
numbers[0]=100;
console.log('after setting 0th element: ',numbers[0]);
console.log('numbers : ',numbers);
// add element at the end
numbers.push(200);
console.log('after push: ',numbers);
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
// remove last element
numbers.pop();
console.log('after pop: ',numbers);
// add element at the beginning
numbers.unshift(300);
console.log('after unshift: ',numbers);
// remove first element
numbers.shift();
console.log('after shift: ',numbers);
// splice to remove elements
numbers.splice(2,3);
console.log('after splice: ',numbers);
// slice to get a part of the array
const slicedArray=numbers.slice(2,5);
console.log('sliced array: ',slicedArray);
// sort the array
numbers.sort((a, b) => a - b);
console.log('sorted array: ',numbers);
// reverse the array
numbers.reverse();
console.log('reversed array: ',numbers);
// find index of an element
const indexOfElement=numbers.indexOf(7);
console.log('index of 100: ',indexOfElement);
// find index of an element 
const indexOfElement2=numbers.indexOf(100);     
console.log('index of 100: ',indexOfElement2);
// check if an element exists
const exists=numbers.includes(100);
console.log('does 100 exist? ',exists);
// check if an element exists   
const exists2=numbers.includes(7);
console.log('does 7 exist? ',exists2);
// join the array into a string
const joinedString=numbers.join('-');
console.log('joined string: ',joinedString);
// split the string back into an array
const splitArray=joinedString.split('-');
console.log('split array: ',splitArray);    
// iterate using forEach
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});
// map to create a new array
const mappedArray=numbers.map(num => num * 2);
console.log('mapped array: ',mappedArray);
// filter to create a new array with elements greater than 10
const filteredArray=numbers.filter(num => num > 10);
console.log('filtered array: ',filteredArray);
// reduce to sum all elements
const sum=numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('sum of elements: ',sum);

console.log(numbers.join('|')); // true
console.log(Array.isArray(numbers)); // true
console.log(numbers instanceof Array); // true
console.log(numbers instanceof Object); // true
console.log(numbers instanceof String); // false
console.log(numbers instanceof Number); // false
console.log(numbers instanceof Boolean); // false   

const t="hello";
t[0]='H'; // This will not change the string as strings are immutable in JavaScript
console.log(t); // Output: hello