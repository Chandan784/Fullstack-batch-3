//find laregest element

function findMaxNum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

let nums = [2, 4, 56, 72];

console.log(findMaxNum(nums));
