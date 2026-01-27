const arr = [1, 3, 4, 5, 6];

function calculateSum(arr) {
  let sum = 0;
  //   let count = 1;

  while (count < arr.length) {
    sum += arr[count];
    count++;
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSum(arr));
