let arr = [1, 3, 5, 6, 7, 8];

function pairSum(arr, target) {
  let ans = new Array(2).fill(0);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let pairSum = arr[i] + arr[j];
    if (pairSum > target) {
      j--;
    } else if (pairSum < target) {
      i++;
    } else {
      ans[0] = arr[i];
      ans[1] = arr[j];
      return ans;
    }
  }
  return ans;
}
console.log(pairSum(arr, 11));
