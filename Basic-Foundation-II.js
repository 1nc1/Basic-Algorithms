// Basic Foundation 2

// 1. Biggie Size

// function biggieSize(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             arr[i] = 'big';
//         }
//     }
//     return arr;
// }
// console.log(biggieSize([-1,3,5,-5]));

// -----------------------------------------------------------
// 2. Print Low, Return High

// function printLreturnH(arr) {
//     var max = arr[0];
//     var min = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         } else if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
// console.log(printLreturnH([1,2,3,4,5,6,7,8,9]));

// -----------------------------------------------------------
// 3. Print One, Return Another

// function printOneReturnAnother(arr) {
//     var oddOne = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0) {
//             oddOne = arr[i];
//             break;
//         }
//     }
//     console.log(arr[arr.length - 2]);
//     return oddOne;
// }
// console.log(printOneReturnAnother([1,2,3,4,5,6,7,8,9]));

// -----------------------------------------------------------
// 4. Double Vision

// function doubleVision(arr) {
//     var newarr = [];
//     var dblval = 0;
//     for(let i = 0; i < arr.length; i++) {
//         dblval = arr[i] + arr[i];
//         newarr.push(dblval);
//     }
//     return newarr;
// }
// console.log(doubleVision([1,2,3]));

// -----------------------------------------------------------
// 5. Count Positives

// function countPositives(arr) {
//     var posvalues = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             posvalues++;
//         }
//     }
//     arr[arr.length - 1] = posvalues;
//     return arr;
// }
// console.log(countPositives([-1,1,1,1]));

// -----------------------------------------------------------
// 6. Evens and Odds

// function evensAndOdds(arr) {
//     var oCount = 0;
//     var eCount = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0) {
//             oCount++;
//             if(oCount === 3) {
//                 console.log("That's odd!");
//             }
//         } else {
//             oCount = 0;
//         }
//         if(arr[i] % 2 === 0) {
//             eCount++;
//             if(eCount === 3) {
//                 console.log('Even more so!');
//             }
//         } else {
//             eCount = 0;
//         }
//     }
// }
// evensAndOdds([1,3,5,6,7,11,13,2,5,9,2,6,8]);

// -----------------------------------------------------------
// 7. Increment the Seconds

// function incrementSeconds(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(i % 2 !== 0) {
//             arr[i] = arr[i] + 1;
//         }
//         console.log(arr[i]);
//     }
//     return arr;
// }
// console.log(incrementSeconds([10,15,23,47,67,81,92]));

// -----------------------------------------------------------
// 8. Previous Lengths

// function previousLengths(arr) {
//     for(let i = arr.length - 1; i >= 0; i--) {
//         arr[i + 1] = arr[i].length;
//     }
//     arr.length = arr.length - 1;
//     return arr;
// }
// console.log(previousLengths(['hello','dojo','awesome']));

// -----------------------------------------------------------
// 9. Add Seven

// function addSeven(arr) {
//     var newarr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]);
//     }
//     for(let i = 0; i < newarr.length; i++) {
//         newarr[i] = newarr[i] + 7;
//     }
//     return newarr;
// }
// console.log(addSeven([1,2,3]));

// -----------------------------------------------------------
// 10. Reverse Array

// function reverseArr(arr) {
//     for(let i = 0; i < arr.length/2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(reverseArr([3,1,6,4,2]));

// -----------------------------------------------------------
// 11. Outlook: Negative

// function outlookNeegative(arr) {
//     var newarr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             arr[i] = -arr[i];
//         }
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }
// console.log(outlookNeegative([1,-3,5]));

// -----------------------------------------------------------
// 12. Always Hungry

// function alwaysHungry(arr) {
//     var foodCount = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 'food') {
//             console.log('yummy');
//             foodCount++;
//         }
//     }
//     if(foodCount === 0) {
//         console.log("I'm hungry");
//     }
// }
// alwaysHungry(['food',5,'food'])

// -----------------------------------------------------------
// 13. Swap Toward the Center

// function swapTowardCenter(arr) {
//     for(let i = 0; i < arr.length / 2; i+=2) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     console.log(arr);
// }
// swapTowardCenter([1,2,3,4,5,6])

// -----------------------------------------------------------
// 14. Scale the Array

// function scaleTheArray(arr,num) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] *= num;
//     }
//     return arr;
// }
// console.log(scaleTheArray([1,2,3],3));

// -----------------------------------------------------------