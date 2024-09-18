// let userName = "Bijaya  ";
// let age = 25;

// console.log(` my name is ${userName} and my age is ${age}`);
// // let newString = userName.trim();
// console.log(userName.length);

// console.log(userName.match());

// let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

// let email = "abc123gmail";

// console.log(email.match(emailPattern));

// if (email.match(emailPattern)) {
//   console.log("valid email");
// } else {
//   console.log("email is not valid");
// }

//palindrome numer

// 121 == 121;

// function isPalidrome(num) {
//   let text = String(num);
//   console.log(text);

//   //   console.log(typeof text);
//   //   let splitText = text.split("");
//   //   console.log(splitText);
//   //   let reveseSplitText = splitText.reverse();
//   //   console.log(reveseSplitText);
//   //   reverseText = reveseSplitText.join("");
//   //   console.log(reverseText);

//   return text.split("").reverse().join("") == text;
// }
// let ans = isPalidrome(12121);

// console.log(ans);

// let students = ["chandan", "biswa", "tapan"];

// console.log(students.length);

// //accesing element of array
// console.log(students[2]);

// students[1] = "sanjeeb";

// console.log(students);

// push pop shift unshift

// students.push("amritanshu");

// console.log(students);

// students.pop();

// console.log(students);

// students.unshift("deepa");

// console.log(students);

// students.shift();

// console.log(students);

//for of, for in, for each

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// let numbers = [2, 3, 56, 6, 7];
// for (element of numbers) {
//   console.log(element);
// }

// for (index in numbers) {
//   console.log(index, numbers[index]);
// }

// students.forEach((element, index) => {
//   //   console.log(element, index);

//   console.log(students[index]);
// });

let numbers = [2, 3, 5, 6, 7];

let target = 11;

function searchNum(arr, targetNumber) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetNumber) {
      return true;
    }
  }

  return false;
}

console.log(searchNum(numbers, target));
