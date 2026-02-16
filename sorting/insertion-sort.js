// Brute Force
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let j = 1; j < n; j++) {
//     let curr = j;
//     for (let i = curr - 1; i >= 0; i--) {
//       if (arr[i] > arr[curr]) {
//         let temp = arr[i];
//         arr[i] = arr[curr];
//         arr[curr] = temp;
//         curr--;
//       }
//     }
//   }
//   return arr;
// }

// Optimise
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;
    while ((j >= 0) & (arr[j] > curr)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

let res = insertionSort([5, 4, 2, 6, 8]);
console.log(res);
