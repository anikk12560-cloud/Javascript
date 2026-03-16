/*Problem 1: Find the largest of two numbers
Write a program to check which number is bigger between a and b*/
let a = 10;
let b = 20;

if(a > b){
    console.log(a + " is bigger");
} else {
    console.log(b + " is bigger");
}

//user input:
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

if(a > b){
    console.log(a + " is bigger");
} else {
    console.log(b + " is bigger");
}

//Problem 2: Check if a number is positive, negative, or zero

let num = -5;

if(num > 0){
    console.log("Positive number");
} else if(num < 0){
    console.log("Negative number");
} else {
    console.log("Zero");
}


//Problem 3: Check if a number is even or odd
let num = 7;

if(num % 2 === 0){
    console.log("Even number");
} else {
    console.log("Odd number");
}


/*Problem 4: Check eligibility to vote
Assume the voting age is 18. Check if a person can vote.*/

let age = 17;

if(age >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}


//Problem 5: Find the largest of three numbers
let a = 5;
let b = 12;
let c = 8;

if(a > b && a > c){
    console.log(a + " is the largest");
} else if(b > a && b > c){
    console.log(b + " is the largest");
} else {
    console.log(c + " is the largest");
}
