function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch([4, 3, 6, 8, 3, 5], 6);
console.log(result);
