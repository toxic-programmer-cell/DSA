/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.
*/

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
let m = nums1.length;
let n = nums2.length;
/* 
function merge(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m); //slice is a array method to copy a array where(0 -> starting, m -> ending)
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if ((nums1Copy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  console.log(nums1);
}

merge(nums1, m, nums2, n);
*/

// second method

let p1 = m - 1;
let p2 = n - 1;

for (let i = m + n - 1; i >= 0; i--) {
  if ((nums1[p1] > nums2[p2] && p1 >= 0) || p2 < 0) {
    nums1[i] = nums1[p1];
    p1--;
  } else {
    nums1[i] = nums2[p2];
    p2--;
  }
}
console.log(nums1);
