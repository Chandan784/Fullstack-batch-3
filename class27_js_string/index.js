// function sayHello() {
//   console.log("hello");
// }

// sayHello();

let fname = "chandan";
let lname = "samantaray";
let age = 26;

console.log(fname, lname);
console.log(fname + "   " + lname);

console.log(fname.length);
console.log(fname[0]);
console.log(fname.indexOf("n"));

//string template

// console.log(`my name is ${fname} and my age is ${age}`);

// let x = "2";
// console.log(typeof x);

// x = Number(x);
// console.log(typeof x);

// let y = 3;

// y = y + " ";
// y = String(y);

// let num1 = "4";
// let num2 = "5";

// console.log(num1 + num2);

let userName = "Rakesh";

console.log(userName.charAt(0));
// console.log(userName.split("e"));
console.log(userName.concat("t"));

let name = "chandan";

let splitName = name.split("");
console.log(splitName);

let reverseValue = splitName.reverse();
console.log(reverseValue);

let name2 = reverseValue.join("");
console.log(name2);

// console.log(splitName);

// let arr = ["c", "h", "a", "n", "d", "a", "n"];
// console.log(arr.join(""));

// console.log(newName);

// console.log(userName.replace("Rakesh", "Chandan"));
// console.log(userName.toUpperCase());

// let my_word = " my name is chandan";
// console.log(userName.startsWith("R"));
// console.log(userName.endsWith("t"));
// console.log(my_word.includes(" to"));

// console.log(userName.join());

// 121 = 121

// palidrome number

let myNum = 123;
"123"[("1", "2", "3")] - ["3", "2", "1"] - "321";

function isPalidrome(num) {
  let stringvalue = String(num);

  console.log(stringvalue);

  return stringvalue.split("").reverse().join("") == stringvalue;
}

console.log(isPalidrome(myNum));

userName.match();
