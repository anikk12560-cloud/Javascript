//1.Sum of Array Elements
function sumArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([6,6]));

//2.Find Maximum Number in Array:
function findMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([5,6,80]));
