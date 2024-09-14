// console.log("jay jagannath");

// function defination
// function funName() {

// }

// function printHello() {
//   console.log("hello world");
// }

// printHello();

//find square

// function findSqr(num) {
//   console.log(num * num);
// }

// findSqr(5);

//addition program

// function addNum(x, y) {
//   return x + y;
// }

// let ans = addNum(200, 300);

// console.log(ans);

//function returniung

// function sqr(num) {
//   let bonous = 10000;
//   return num * num + bonous;
// }

// let res = sqr(100);

// console.log(res);

//anonymous fun and fun expression
// let hii = function () {
//   console.log("hii");
// };

// // hii();

// function fun1(fun) {
//   console.log("i am function 1");
//   console.log(fun);

//   fun();
// }

// function fun2() {
//   console.log(" i am function 2");
// }

// fun1(hii);

// let printHello = () => {
//   console.log("hello world");
// };

// printHello();

// let findSqr = (num) => num * num;

// let ans = findSqr(10);

// console.log(ans);

// console.log(findSqr);

// parameter spread feature
// function findNum(x, ...y) {
//   console.log(x);

//   console.log(y);
// }

// findNum(2, 3, 4);

// function countBinaryNumbers(max) {
//   let count = 0;

//   // Function to check if a number contains only 0s and 1s
//   function isBinary(num) {
//     const str = num.toString(); // Convert the number to a string
//     for (let char of str) {
//       if (char !== "0" && char !== "1") {
//         return false; // If any character is not '0' or '1', return false
//       }
//     }
//     return true; // All characters are '0' or '1'
//   }

//   // Iterate through numbers from 1 to max
//   for (let i = 1; i <= max; i++) {
//     // Convert number to string and check if it's a binary number
//     if (isBinary(i.toString())) {
//       count++;
//     }
//   }

//   return count;
// }

// // Example usage
// const maxNumber = 10;
// const result = countBinaryNumbers(maxNumber);

// console.log(result);

// 5
// 1,2,3,4,5

// 1

// 10

// 1,2,3,4,5,6,7,8,9,10

// 1000
// 9999

// 1;
// 10;
// 11;
// 100;

// console.log(9 % 10);

// function countBinaryOnlyNum(num){

// }

let targetNum = 1000;
let count = 0;

function countBinaryNum(num) {
  for (let i = 1; i <= num; i++) {
    let k = i;
    while (k != 0) {
      j = k % 10;

      if (j == 1 || j == 0) {
        k = Math.floor(k / 10);

        if (k == 0) {
          count = count + 1;
        }
      } else {
        break;
      }
    }
  }
}
countBinaryNum(targetNum);
console.log(count);

1;
10;
11;
100;
101;
110;
111;
1000;
