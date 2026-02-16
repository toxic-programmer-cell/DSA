function insertionSort(arr) {
  let n = arr.length;
  for (let j = 0; j < n; j++) {
    let curr = j;
    for (let i = curr - 1; i >= 0; i--) {
      if (arr[i] > arr[curr]) {
        let temp = arr[i];
        arr[i] = arr[curr];
        arr[curr] = temp;
        curr--;
      }
    }
  }
  return arr;
}

let res = insertionSort([5, 4, 2, 6, 8]);
console.log(res);
