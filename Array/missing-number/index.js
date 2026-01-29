// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let nums = [3, 0, 1, 2, 5, 4, 7];

let n = nums.length;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;

for (let i = 0; i < n; i++) {
  actualSum += nums[i];
}

console.log(expectedSum - actualSum);
