function merge(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  // console.log(arr1)

  let res = new Array(m + n).fill(0);

  let p1 = 0;
  let p2 = 0;
  let i = 0;

  while (i < m + n) {
    if (p1 < m && arr1[p1] <= arr2[p2]) {
      res[i++] = arr1[p1++];
    } else {
      res[i++] = arr2[p2++];
    }
    console.log(res);
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// 0,6,3,-1,-5,69,00
let result = mergeSort([94, 2, 6, 2, 45]);
// console.log(result);
