let nums = [4, 3, 2, 7, 8, 2, 3, 1];
//  nums = [0, 1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < nums.length; i++) {
  let index = Math.abs(nums[i]) - 1;
  if (nums[index] > 0) {
    nums[index] = -nums[index];
  }
}

// i ->0->1->2->3->4->5->6->7
// index = 0
// [-4, -3, -2, -7, 8, 2, -3, -1]
