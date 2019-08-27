// Predict the Output

// Code Sample 1 - function and return I

// function a(){
//     console.log('hello');
// }
// console.log('Dojo');

// Predicted Output:
// 'Dojo'

// Actual Output:
// 'Dojo'

// ---------------------------------------------
// Code Sample 2 - function and return I

// function a() {
//     console.log('hello');
//     return 15;
// }

// x = a();
// console.log('x is', x);

// Predicted Output:
// 'x is hello,15'

// Actual Output:
// 'hello,x is 15'

// ---------------------------------------------
// Code Sample 3 - function and return I

// function a(n) {
//     console.log('n is', n);
//     return n + 15;
// }

// x = a(3);
// console.log('x is',x);

// Predicted Output:
// 'n is 3,x is 18'

// Actual Output:
// 'n is 3,x is 18'

// ---------------------------------------------
// Code Sample 4 - function and return I

// function a(n) {
//     console.log('n is', n);
//     y = n * 2;
//     return y;
// }

// x = a(3) + a(5);
// console.log('x is', x);

// Predicted Output:
// 'n is 3,n is 5,x is 16'

// Actual Output:
// 'n is 3,n is 5,x is 16'

// ---------------------------------------------
// Code Sample 5 - order of operations I

// function op(a,b) {
//     c = a + b;
//     console.log('c is', c);
//     return c;
// }

// x = op(2,3) + op(3,5);
// console.log('x is', x);

// Predicted Output:
// 'c is 5,c is 8,x is 13'

// Actual Output:
// 'c is 5,c is 8,x is 13'

// ---------------------------------------------
// Code Sample 6 - order of operations II

// function op(a,b) {
//     c = a + b;
//     console.log('c is', c);
//     return c;
// }

// x = op(2,3) + op(3, op(2,1)) + op(op(2,1),op(2,3));
// console.log('x is', x);

// Predicted Output:
// 'c is 5,c is 6,c is 8,x is 19'

// Actual Output:
// 'c is 5,c is 3,c is 6,c is 3,c is 5,c is 8, x is 19'

// ---------------------------------------------
// Code Sample 7 - scoping

// var x = 15;
// function a() {
//     var x = 10;
// }
// console.log(x);
// a();
// console.log(x);

// Predicted Output:
// 15,15

// Actual Output:
// 15,15

// ---------------------------------------------
// Paper Algos I

// function multiply(x,y) {
//     console.log(x);
//     console.log(y);
// }
// b = multiply(2,3);
// console.log(b);

// Predicted Output:
// 2,3

// Actual Output:
// 2,3,undefined

// ---------------------------------------------
// function multiply(x,y) {
//     return x*y;
// }
// b = multiply(2,3);
// console.log(b);
// console.log(multiply(5,2));

// Predicted Output:
// 6,10

// Actual Output:
// 6,10

// ---------------------------------------------
// var x = [1,2,3,4,5,10];
// for(var i = 0; i < 5; i++) {
//     i = i + 3;
//     console.log(i);
// }

// Predicted Output:
// 3,7

// Actual Output:
// 3,7

// ---------------------------------------------
// var x = 15;
// console.log(x);
// function awesome() {
//     var x = 10;
//     console.log(x);
// }
// console.log(x);
// awesome();
// console.log(x);

// Predicted Output:
// 15,15,10,15

// Actual Output:
// 15,15,10,15

// ---------------------------------------------
// for(var i = 0; i < 15; i += 2) {
//     console.log(i);
//  }

// Predicted Output:
// 0,2,4,6,8,10,12,14

// Actual Output:
// 0,2,4,6,8,10,12,14

// ---------------------------------------------
// for(var i = 0; i < 3; i++) {
//     for(var j = 0; j < 2; j++) {  
//         console.log(i * j);
//     }
//  }

// Predicted Output:
// 0,0,0,1,0,2

// Actual Output:
// 0,0,0,1,0,2

// ---------------------------------------------
// function looping(x,y) {
//     for(var i = 0; i < x; i++) {
//         for(var j = 0; j < x; j++) {
//             console.log(i * j);
//         }
//     }
// }
// z = looping(3,3);
// console.log(z);

// Predicted Output:
// 0,0,0,0,1,2,0,2,4

// Actual Output:
// 0,0,0,0,1,2,0,2,4

// ---------------------------------------------
// function looping(x,y) {
//     for(var i = 0; i < x; i++) {
//         for(var j = 0; j < y; j++) {
//             console.log(i * j);
//         }
//     }
//     return x * y;
// }

// z = looping(3,5);
// console.log(z);

// Predicted Output:
// 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

// Actual Output:
// 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

// ---------------------------------------------
// Part 2

// Print 1 to x

// function printUpTo(x) {
//     if(x < 0) {
//         console.log('negative number');
//         return false;
//     } else {
//         for(let i = 1; i <= x; i++) {
//             console.log(i);
//         }
//     }
// }

// printUpTo(100);
// y = printUpTo(-10);
// console.log(y);

// ---------------------------------------------
// PrintSum

// function printSum(x) {
//     var sum = 0;
//     for(let i = 0; i <= 255; i++) {
//         console.log(i);
//         sum += i;
//         console.log(sum);
//     }
//     return sum;
// }

// y = printSum(255);
// console.log(y);

// ---------------------------------------------
// PrintSumArray

// function printSumArray(x) {
//     var sum = 0;
//     for(var i = 0; i < x.length; i++) {
//         sum += x[i];
//     }
//     return sum;
// }

// console.log(printSumArray([1,2,3]));

// ---------------------------------------------
// Bonus Problem

// function returnLargestElementInArr(arr) {
//     var max = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(returnLargestElementInArr([1,30,5,7]));