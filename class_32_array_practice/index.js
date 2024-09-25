// reverse array

// let arr = [2, 4, 5, 9, 3];

// function revArr(arr) {
//   let newArr = [];
//   let j = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr[j] = arr[i];
//     j++;
//   }

//   return newArr;
// }

// console.log(revArr(arr));

// function revArr2(arr) {
//   let output = [];

//   for (let i = 1; i <= arr.length; i++) {
//     let a = arr.length - i;
//     output.push(arr[a]);
//   }

//   return output;
// }

// console.log(revArr2(arr));

//reverse array

// let nums = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     swap(arr, start, end);

//     start = start + 1;
//     end = end - 1;
//   }

//   function swap(arr, startIndex, secondIndex) {
//     let temp = arr[startIndex];
//     arr[startIndex] = arr[secondIndex];
//     arr[secondIndex] = temp;
//   }

//   return arr;
// }

// console.log(reverseArray(nums));

//sum of all elements of an array

// let nums = [1, 2, 3, 4, 5, 20];

// function findSum(nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }

//   return sum;
// }

// console.log(findSum(nums));
