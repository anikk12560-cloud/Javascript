
1.Basic loops 
2.Condition loops 
3.Nested loops 
4.Array loops 
5.Function + loops 
6.JavaScript loops 100% clear✅



//Problem 1: Print numbers 1–5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Problem 2: Print numbers 5–1
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
//Problem 3: Print numbers 10–20
for (let i = 10; i <= 20; i++) {
    console.log(i);
}
//Problem 4: Print numbers 20–10
for (let i = 20; i >= 10; i--) {
    console.log(i);
}
//Problem 5: Print numbers 2–12, step 2
for (let i = 2; i <= 12; i += 2) {
    console.log(i);
}
//Problem 6: Print numbers 12–2, step 2
for (let i = 12; i >= 2; i -= 2) {
    console.log(i);
}
//Problem 7: Print numbers 5–25, step 5
for (let i = 5; i <= 25; i += 5) {
    console.log(i);
}
//Problem 8: Countdown 25–5, step 5
for (let i = 25; i >= 5; i -= 5) {
    console.log(i);
}
//Problem 9: Print numbers 1–10, step 3
for (let i = 1; i <= 10; i += 3) {
    console.log(i);
}
//Problem 10: Countdown 10–1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

/*Part 2: Odd / Even / Multiples (10 Problems)
Problem 11: Print even numbers 2–10*/

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}
//Problem 12: Print odd numbers 1–9
for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) console.log(i);
}
//Problem 13: Print multiples of 3 from 3–15
for (let i = 3; i <= 15; i++) {
    if (i % 3 === 0) console.log(i);
}
//Problem 14: Print multiples of 5 from 5–25
for (let i = 5; i <= 25; i++) {
    if (i % 5 === 0) console.log(i);
}
//Problem 15: Print numbers 1–12, skip multiples of 4
for (let i = 1; i <= 12; i++) {
    if (i % 4 !== 0) console.log(i);
}
//Problem 16: Countdown 12–1, print only odd numbers
for (let i = 12; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}
//Problem 17: Print numbers 1–15, replace multiples of 3 with "JS"
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) console.log("JS");
    else console.log(i);
}
//Problem 18: Print numbers 1–15, replace multiples of 5 with "Five"
for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0) console.log("Five");
    else console.log(i);
}
//Problem 19: Print numbers 1–20, skip multiples of 4
for (let i = 1; i <= 20; i++) {
    if (i % 4 !== 0) console.log(i);
}
//Problem 20: Countdown 15–5, skip multiples of 3
for (let i = 15; i >= 5; i--) {
    if (i % 3 !== 0) console.log(i);
}
/*Part 3: String Printing (5 Problems)
Problem 21: Print "Hello" 3 times*/
for (let i = 1; i <= 3; i++) console.log("Hello");

//Problem 22: Print "JS" 5 times
for (let i = 1; i <= 5; i++) console.log("JS");

//Problem 25: Print "Web Dev" 6 times
for (let i = 1; i <= 6; i++) console.log("Web Dev");
Part 4: Number Calculations (5 Problems)
//Problem 26: Print numbers 1–10, double each number
for (let i = 1; i <= 10; i++) console.log(i * 2);

//Problem 27: Print numbers 1–10, square each number
for (let i = 1; i <= 10; i++) console.log(i * i);

//Problem 28: Print numbers 1–10, cube each number
for (let i = 1; i <= 10; i++) console.log(i * i * i);

//Problem 29: Print numbers 5–15, subtract 1 from each
for (let i = 5; i <= 15; i++) console.log(i - 1);

//Problem 30: Countdown 10–1, double each number
for (let i = 10; i >= 1; i--) console.log(i * 2);


                               JavaScript For Loop Practice – Part 5

//Problem 31: Print numbers 1–5 in one line
let result = "";
for (let i = 1; i <= 5; i++) {
    result += i + " ";
}
console.log(result);

Problem 32: Print star pattern (5 stars)
for (let i = 1; i <= 5; i++) {
    console.log("*");
}
Problem 33: Print increasing stars
*
**
***
****
*****
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
Problem 34: Print decreasing stars
*****
****
***
**
*
for (let i = 5; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
Problem 35: Print numbers pattern
1
12
123
1234
12345
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);
}
Part 6 – Array + Loop (Web Dev Useful)
Problem 36: Print array elements
let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
Problem 37: Find sum of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);
Problem 38: Find largest number in array
let arr = [10, 50, 30, 80, 20];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);
Problem 39: Print even numbers from array
let arr = [1,2,3,4,5,6,7,8];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
Problem 40: Double array values
let arr = [2,4,6,8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
}
Part 7 – Function + Loop
Problem 41: Print numbers using function
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbers();
Problem 42: Sum numbers using function
function sumNumbers() {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNumbers();
Problem 43: Print even numbers using function
function printEven() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEven();
Problem 44: Multiply numbers using loop
function multiply() {
    for (let i = 1; i <= 5; i++) {
        console.log(i * 3);
    }
}

multiply();
Problem 45: Print array using function
function printArray() {
    let arr = [5,10,15,20];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray();



Part 8 – More Loop Practice
Problem 46: Print numbers 1–10 with their squares
for (let i = 1; i <= 10; i++) {
    console.log(i, i*i);
}
Problem 47: Print numbers 1–10 with their cubes
for (let i = 1; i <= 10; i++) {
    console.log(i, i*i*i);
}
Problem 48: Print numbers divisible by 7 from 1–50
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}
Problem 49: Print first 10 multiples of 4
for (let i = 1; i <= 10; i++) {
    console.log(i * 4);
}
Problem 50: Sum numbers 1–20
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += i;
}

console.log(sum);
Part 9 – More Array + Loop
Problem 51: Print array in reverse
let arr = [1,2,3,4,5];

for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}
Problem 52: Count array elements
let arr = [10,20,30,40];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    count++;
}

console.log(count);
Problem 53: Sum even numbers in array
let arr = [1,2,3,4,5,6];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i];
    }
}

console.log(sum);
Problem 54: Print odd numbers in array
let arr = [5,8,9,12,7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}
Problem 55: Multiply all array numbers
let arr = [1,2,3,4];

let result = 1;

for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}

console.log(result);
Part 10 – Nested Loop Practice
Problem 56: Print square stars
*****
*****
*****
*****
*****
for (let i = 1; i <= 5; i++) {

    let line = "";

    for (let j = 1; j <= 5; j++) {
        line += "*";
    }

    console.log(line);
}
Problem 57: Print number square
11111
22222
33333
44444
55555
for (let i = 1; i <= 5; i++) {

    let line = "";

    for (let j = 1; j <= 5; j++) {
        line += i;
    }

    console.log(line);
}
Problem 58: Print number pattern
1
22
333
4444
55555
for (let i = 1; i <= 5; i++) {

    let line = "";

    for (let j = 1; j <= i; j++) {
        line += i;
    }

    console.log(line);
}
Problem 59: Print reverse number pattern
55555
4444
333
22
1
for (let i = 5; i >= 1; i--) {

    let line = "";

    for (let j = 1; j <= i; j++) {
        line += i;
    }

    console.log(line);
}
Problem 60: Print numbers grid
12345
12345
12345
12345
12345
for (let i = 1; i <= 5; i++) {

    let line = "";

    for (let j = 1; j <= 5; j++) {
        line += j;
    }

    console.log(line);
}

Problem 61: Print numbers 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
Problem 62: Print even numbers 1–100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
Problem 63: Print odd numbers 1–100
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
Problem 64: Sum numbers 1–100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);
Problem 65: Print multiples of 6 (1–100)
for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0) {
        console.log(i);
    }
}
Problem 66: Reverse numbers 20–1
for (let i = 20; i >= 1; i--) {
    console.log(i);
}
Problem 67: Print squares 1–15
for (let i = 1; i <= 15; i++) {
    console.log(i * i);
}
Problem 68: Print cubes 1–10
for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
}
Problem 69: Find largest number in array
let arr = [10, 50, 30, 80, 20];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

}

console.log(max);
Problem 70: Count odd numbers in array
let arr = [1,2,3,4,5,6,7,8];

let count = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        count++;
    }

}

console.log(count);
