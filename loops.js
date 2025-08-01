const numbers=[12,67,4,9,78,55,67,34,98,34,67]
console.log(numbers)

for(const num of numbers){
    console.log(num)
}

const fruits =['mango','lichi','orange','apple','lemon','orange']
console.log(fruits);
for(const fruit of fruits){
    console.log(fruit);
    console.log('I will eat');
}

// while loop
let num1=0;
while(num1<=7){
    console.log(num1);
    num1++;
}


let n,sum=0;
n=0;

while(n<=100){
    sum=sum+n;
    n++;
}
console.log(n,sum);

// for loop
for(let i=0; i<=10; i++){
    console.log(i);
}

// even number
for(let i=0; i<=2000; i+=2){
    console.log(i);
}
// odd number
for(let i=1; i<=2000; i+=2){
    console.log(i);
}

// prime number
for(let i=2; i<=2000; i++)
{
    let isPrime=true;
    for(let j=2; j<=Math.sqrt(i); j++)
    {
        if(i%j===0)
        {
            isPrime=false;
            break
        }
    }
    if(isPrime){
        console.log('prime number :',i);
    }
}



// do while loop

let t=0;
do{ 
    console.log(t);
    t++;
}while(t<=10);