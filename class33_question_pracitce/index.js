// //count vowels in string

// let value = "aeiouhfuryiuytiuyer";

// function countVowel(val) {
//   let count = 0;

//   let splitValue = val.split("");

//   console.log(splitValue);

//   splitValue.forEach((element) => {
//     if (
//       element == "a" ||
//       element == "e" ||
//       element == "i" ||
//       element == "o" ||
//       element == "u"
//     ) {
//       count++;
//     }
//   });

//   return count;
// }

// console.log(countVowel(value));

//palidrome string

// let word = "level";

// function isPalidrome(val) {
//   console.log(val);

//   let splitValue = val.split("");
//   console.log(splitValue);

//   reverseValue = splitValue.reverse();
//   console.log(reverseValue);

//   let newWord = reverseValue.join("");
//   console.log(newWord);

//   return val == newWord;
// }

// console.log(isPalidrome(word));

//Length of Last Word

function findLengthOfLastWord(data) {
  let splitData = data.trim().split(" ");

  return splitData[splitData.length - 1].length;
}
