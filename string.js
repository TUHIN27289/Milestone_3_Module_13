const country= 'Bangladesh';
const city = "Dhaka City";
const area = `Dhanmondi, ${city}, ${country}`;
const thana= new String('Dhanmondi Thana');

console.log(country);
console.log(city);
console.log(area);
console.log(thana);  // object type

console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof area); // string
console.log(typeof thana); // object


// string  work as a array but immutable
console.log(country[0]); // B
console.log(city[1]); // h
console.log(area[2]); // n
console.log(thana[3]); // m 
console.log(country.length); // 10
console.log(city.length); // 11
console.log(area.length); // 27 
console.log(thana.length); // 14    

thana[0] = 'b'; // this will not change the value because string is immutable
console.log(thana); // Dhanmondi Thana


// string comparison
const subject= 'JavaScript';
const anotherSubject = 'javaScript';

// string is case-sensitive
if(subject=== anotherSubject) {
    console.log('Both subjects are equal.');
}
else {
    console.log('Subjects are not equal.');
}

// to solve this, we can convert both strings to lower case or upper case
if(subject.toLowerCase() === anotherSubject.toLowerCase()) {
    console.log('Both subjects are equal.');
}
else {  
    console.log('Subjects are not equal.');
}

//SAME FOR UPPER CASE
if(subject.toUpperCase() === anotherSubject.toUpperCase()) {
    console.log('Both subjects are equal.');
}
else {
    console.log('Subjects are not equal.');
}


// sometimes we have extra spaces in strings which can cause issues in comparison
const drinks=" water";
const favDrinks = "water  ";
if(drinks === favDrinks) {
    console.log('Both drinks are equal.');
}
else {
    console.log('Drinks are not equal.');
}


// to solve this, we can use trim() to remove extra spaces
if(drinks.trim() === favDrinks.trim()) {
    console.log('Both drinks are equal.');
}
else {
    console.log('Drinks are not equal.');
}

// slice() method to extract a part of a string 
const text = 'hi ,i am toukir ahmed from dhaka city and i am a student of Daffodil International University';
const slicedText = text.slice(10, 20); // extracts from index 10 to 20
console.log(slicedText); // oukir ahme
// substring() method to extract a part of a string
const substringText = text.substring(10, 20); // extracts from index 10 to 20
console.log(substringText); // oukir ahme

const mysentence = 'I love programming in JavaScript. JavaScript is fun!';
console.log(mysentence.split(' '));
// split() method to split a string into an array of substrings
const words = mysentence.split(' '); // splits by space
console.log(words); // [ 'I', 'love', 'programming', 'in', 'JavaScript.', 'JavaScript', 'is', 'fun!' ]
console.log(mysentence.split('.')); // splits by period
console.log(mysentence.split('a')); // splits by 'a'    

// join() method to join an array of strings into a single string
const friends = ['avi', 'toukir', 'samiul', 'sabbir', 'shamim', 'shohag','salma','moon','1229'];
console.log(friends.join());// joins with comma by default
console.log(friends.join(', ')); // joins with comma and space
console.log(friends.join(' | ')) // joins with ' | '
const joinedFriends = friends.join(' - '); // joins with ' - '
console.log(joinedFriends); // avi - toukir - samiul - sabbir - sham
console.log(joinedFriends.length); // 70

//string  concat() method to concatenate two or more strings
const firstName = 'Toukir';
const lastName = 'Avi';
console.log(firstName + lastName); // ToukirAvi
const fullName= firstName + ' ' + lastName; // concatenates with space
console.log(fullName); // Toukir Avi
console.log(fullName.length); // 10
const fulName = firstName.concat(' ', lastName); // concatenates with space
console.log(fulName); // Toukir Avi
console.log(fulName.length); // 10
console.log(firstName.concat(' ', lastName, ' is a student.')); // Toukir Avi is a student.

console.log(fullName.includes('Toukir')); // true
console.log(fullName.includes('Avi')); // true
console.log(fullName.includes('Avi', 5)); // false, starts checking from index 5
console.log(fullName.includes('Avi', 0)); // true, starts checking from index 0
console.log(fullName.includes('avi')); // false, case-sensitive
console.log(fullName.startsWith('Toukir')); // true
console.log(fullName.startsWith('Avi')); // false
console.log(fullName.endsWith('Avi')); // true
console.log(fullName.endsWith('Toukir')); // false
console.log(fullName.indexOf('Avi')); // 7, returns the index of the first occurrence of 'Avi'
console.log(fullName.lastIndexOf('Avi')); // 7, returns the index of the last occurrence of 'Avi'
console.log(fullName.indexOf('Avi', 8)); // -1, starts checking from index 8    


console.log(firstName.repeat(3)); // repeats the string 3 times
console.log(lastName.repeat(2)); // repeats the string 2 times
console.log(fullName.repeat(4)); // repeats the full name 4 times
console.log(fulName.repeat(5)); // repeats the full name 5 times    
