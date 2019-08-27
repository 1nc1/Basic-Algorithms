// More Arrays
// 1.

// function one(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }

// console.log(one([1,2,-1,-3]));

// ---------------------------------------------
// 2.

// function two(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = 0;
//     return arr;
// }

// console.log(two([1,2,3]));

// ---------------------------------------------
// 3.

// function three(arr) {
//     var newarr = [];
//     for(let i = arr.length - 1; i >= 0; i--) {
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }

// console.log(three([1,2,3]));

// ---------------------------------------------
// 4.

// function four(arr) {
//     var newarr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]);
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }

// console.log(four([4,'Ulysses',42,false]));