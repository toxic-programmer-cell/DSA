/*
count digits
*/

// Q 1)
// function countDigits(n) {
//   let count = 0;

//   //corner case: if n=0 return 1
//   if (n == 0) return 1;

//   //corner case: converting negative number to positive
//   n = Math.abs(n);

//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }

// let n = -473;

// console.log(countDigits(n));
