/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
    if(i%2===0 || i%5==0) {
        continue;
    }else {
        console.log(i);
    }
}