// Basic Foundation I

// 1. Get 1 to 255

// function get1to255() {
//     var arr = [];
//     for(let i = 1; i <= 255; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(get1to255());

// -----------------------------------------------------------
// 2. Get even 1000

// function getEven1000() {
//     var sum = 0;
//     for(let i = 0; i <= 1000; i+=2) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(getEven1000());

// -----------------------------------------------------------
// 3. Sum odd 5000

// function sumOdd5000() {
//     var sum = 0;
//     for(let i = 1; i <= 5000; i+=2) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOdd5000());

// -----------------------------------------------------------
// 4. Iterate an array

// function iterateArray(arr) {
//     var sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(iterateArray([-5,2,5,12]));

// -----------------------------------------------------------
// 5. Find max

// function findMax(arr) {
//     var max = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([-3,3,5,7]));

// -----------------------------------------------------------
// 6. Find average

// function findAvg(arr) {
//     var sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(findAvg([1,3,5,7,20]));

// -----------------------------------------------------------
// 7. Array odd

// function arrOdd() {
//     var arr = [];
//     for(let i = 1; i <= 50; i+=2) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(arrOdd());

// -----------------------------------------------------------
// 8. Greater than Y

// function greaterThanY(arr,y) {
//     var count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > y) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(greaterThanY([1,3,5,7],3));

// -----------------------------------------------------------
// 9. Squares

// function squares(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] *= arr[i];
//     }
//     return arr;
// }
// console.log(squares([1,5,10,-2]));

// -----------------------------------------------------------
// 10. Negatives

// function negatives(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// console.log(negatives([1,5,10,-2]));

// -----------------------------------------------------------
// 11. Max/Min/Avg

// function maxMinAvg(arr) {
//     var newarr = [];
//     var max = arr[0];
//     var min = arr[0];
//     var sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if(arr[i] > max) {
//             max = arr[i];
//         } else if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     newarr.push(max);
//     newarr.push(min);
//     newarr.push(sum / arr.length);
//     return newarr;
// }
// console.log(maxMinAvg([1,5,10,-2]));

// -----------------------------------------------------------
// 12. Swap Values

// function swapValues(arr) {
//     var temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     return arr;
// }
// console.log(swapValues([1,5,10,-2]));

// -----------------------------------------------------------
// 13. Number to String

// function numberToString(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 'Dojo';
//         }
//     }
//     return arr;
// }
// console.log(numberToString([-1,-3,2]));

// -----------------------------------------------------------