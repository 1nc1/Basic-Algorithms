// Intermediate Foundation

// 1. Sigma

// function sigma(num) {
//     var sum = 0;
//     for(let i = 0; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sigma(5));

// -------------------------------------------------
// 2. Factorial

// function factorial(num) {
//     if(num === 0) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));

// -------------------------------------------------
// 3. Fibonacci

// function fib(n) {
//     if(n === 0 || n === 1) {
//         return n;
//     }
//     return fib(n - 2) + fib(n - 1);
// }
// n = fib(6);
// console.log(n);

// -------------------------------------------------
// 4. Array: Second-to-Last

// function arr2ndToLast(arr) {
//     if(arr.length === 1) {
//         return null;
//     }
//     return arr[arr.length - 2];
// }
// console.log(arr2ndToLast([42, true, 4, "Liam", 7]));

// -------------------------------------------------
// 5. Array: Nth-to-Last

// function arrNthToLast(arr,n) {
//     if(arr.length < n) {
//         return null;
//     }
//     return arr[arr.length - n];
// }
// console.log(arrNthToLast([5,2,3,6,4,9,7],3));

// -------------------------------------------------
// 6. Array: Second-Largest

// function secondLargest(arr) {
//     var max = arr[0];
//     var secondMax = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//         if(arr[i] > secondMax && arr[i] !== max) {
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
// }
// console.log(secondLargest([5,2,3,6,4,9,7]));

// -------------------------------------------------
// 7. Double Trouble

// function doubleTrouble(arr) {
//     var newarr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]);
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }
// console.log(doubleTrouble([4,"Ulysses",42,false]));

// -------------------------------------------------