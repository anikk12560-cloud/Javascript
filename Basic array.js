//1. Sum of array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//2.Find largest number
let arr = [5, 10, 3, 8];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//3.Find smallest number
let arr = [5, 10, 3, 8];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

//4.Count even numbers:
let arr = [1, 2, 3, 4, 6, 7];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}
console.log(count);

//5.Reverse an array:
let arr = [1, 2, 3, 4];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(reversed); 


//6.Find a number in array :  
let arr = [2, 5, 7, 9];
let target = 7;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    found = true;
  }
}
console.log(found);
//7.Remove duplicates:
let arr = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(arr)];
console.log(unique);

//8:Multiply all numbers:
let arr = [1, 2, 3, 4];
let product = 1;
for (let i = 0; i < arr.length; i++) {
  product *= arr[i];
}
console.log(product)
️//9.Convert array to string
let arr = ["I", "love", "JavaScript"];

let result = arr.join(" ");

console.log(result);
//10.Find average
let arr = [10, 20, 30];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;
console.log(avg);

console.log(min);
