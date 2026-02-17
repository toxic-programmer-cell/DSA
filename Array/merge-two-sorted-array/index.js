function mergeTwoSortedArray(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let res = new Array(m + n).fill(0);

  let p1 = 0;
  let p2 = 0;
  let i = 0;

  while (p1 < m && p2 < n) {
    if (arr1[p1] <= arr2[p2]) {
      res[i++] = arr1[p1++];
    } else {
      res[i++] = arr2[p2++];
    }
  }

  while (p1 < m) {
    res[i++] = arr1[p1++];
  }

  while (p2 < n) {
    res[i++] = arr2[p2++];
  }

  return res;
}

let mergedArray = mergeTwoSortedArray([1, 3, 4], [1, 5, 6]);
console.log(mergedArray);
