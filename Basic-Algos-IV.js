// Arrays Reintroduction

// 1.

// function one(arr,y) {
//     var count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > y) {
//             console.log(arr[i]);
//             count++;
//         }
//     }
//     console.log('Count is:',count);
// }

// one([76,25,23,4,13,25],20);

// ---------------------------------------------
// 2.

// function two(arr) {
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
//     console.log(max);
//     console.log(min);
//     console.log(sum / arr.length);
// }

// two([6,2,8,4,13]);

// ---------------------------------------------
// 3.

// function three(arr) {
//     newarr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 'Dojo';
//         }
//     }
//     newarr.push(arr);
//     return newarr;
// }

// console.log(three([1,2,-3,-5,5]));

// ---------------------------------------------
// 4.

// function four(arr,start,end) {
//     var diff = (end - start) + 1;
//     for(let i = start; i <= diff; i++) {
//         arr[i] = arr[i + diff];
//     }
//     console.log(arr);
//     arr.length = arr.length - diff;
//     return arr;
// }

// console.log(four([20,30,40,50,60,70],2,4));