/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 2; i <= 100; i++) {
    let squareRoot = Math.sqrt(i);

    if (Number.isInteger(squareRoot)) {
        console.log('First square number found:', i);
        break;
    }

    console.log(i);
}
