// // find max num

// let nums = [1, 5, 9, 1, 12];

// function findMax(arr) {
//   let max = arr[0];

//   for (let element of nums) {
//     if (element > max) {
//       max = element;
//     }
//   }

//   return max;
// }

// console.log(findMax(nums));
// //time complexity
// //worst case
// O(n);
// // best case
// O(n);

// //space complexity
// O(1);

// sort an array

// let arr = [2, 4, 5, 91, 33, 1, 3];

// 1
//         4
//         2,4,5,91,33,1,3
//         5
//         2,4,5,91,33,1,3
//         91
//         2,4,5,91,33,1,3
//         33
//         2,4,5,33,91,1,3
//         1
//         2,4,5,33,1,91,3
//         3
//         2,4,5,33,1,3,91

// 2      4
//        2,4,5,33,1,91
//        5
//        2,4,5,33,1,91
//        33
//        2,4,5,33,1,91
//        1
//        2,4,5,1,33,91
//        91
//        2,4,5,1,33,91

let nums = [8, 7, 3, 9];

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapArr(arr, j, j + 1);
      }
    }
  }

  function swapArr(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];

    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  return arr;
}

console.log(sortArray(nums));
