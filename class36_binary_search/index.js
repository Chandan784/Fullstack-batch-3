function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + Math.floor((end - start) / 2));

    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }

  return -1;
}

let nums = [2, 3, 4, 5, 6, 7];

let target = 2;

console.log(binarySearch(nums, target));
