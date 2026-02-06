let arr = [1, 3, -4, 6, 2, -3];

// Brute Force
let maxSum = 0;
function subArray(n) {
  for (let st = 0; st < n; st++) {
    let currSum = 0;
    for (let end = st; end < n; end++) {
      currSum += arr[end];
      maxSum = Math.max(maxSum, currSum);
    }
  }
  console.log(maxSum);
}

subArray(arr.length);
