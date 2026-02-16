function bubbleSort(arr) {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let result = bubbleSort([3, 4, 6, 2, 4, 1]);
console.log(result);
