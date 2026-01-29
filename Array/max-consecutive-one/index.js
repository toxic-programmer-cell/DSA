// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let nums = [1, 1, 0, 1, 1, 1];

let maxCount = 0;
let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 1) {
    count++;
  } else {
    maxCount = Math.max(maxCount, count);
    count = 0;
  }
}

maxCount = Math.max(maxCount, count);
console.log(maxCount);
