let arr = [-1, -3, -4, -6, -2, -3];

// Brute Force
let maxSum = arr[0];
function subArray(n) {
  for (let st = 0; st < n; st++) {
    let currSum = 0;
    for (let end = st; end < n; end++) {
      currSum = Math.max(arr[end], currSum + arr[end]);
      maxSum = Math.max(maxSum, currSum);
    }
  }
  console.log(maxSum);
}

subArray(arr.length);

// Kadane's Algorithm
let maxSum1 = arr[0];
let currSum = arr[0];
for (let i = 1; i < arr.length; i++) {
  currSum = Math.max(arr[i], currSum + arr[i]);
  maxSum1 = Math.max(currSum, maxSum1);
}
console.log(maxSum1);
