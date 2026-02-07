// 169. Majority Element
// Brute Force
let majorityElement = function (nums) {
  let hash = {};
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  //   console.log(hash);

  for (let key in hash) {
    if (hash[key] > Math.floor(n / 2)) {
      console.log(key);
    }
  }
};

let nums = [1, 2, 2, 2, 2, 2, 3, 3];

// console.log(majorityElement(nums));
majorityElement(nums);
