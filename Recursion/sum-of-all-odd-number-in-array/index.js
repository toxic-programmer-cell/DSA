function sumOdd(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOdd(n - 1);
}

let arr = [3, 2, 6, 4, 5];

console.log(sumOdd(arr.length - 1));
