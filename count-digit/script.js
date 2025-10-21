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

// --------------------------------------------------------------

// Q 2) find palidrone

// function pelidrone(n) {
//   let rev = 0;
//   let copy = Math.abs(n);
//   while (copy > 0) {
//     let rem = copy % 10;
//     rev = 10 * rev + rem;
//     copy = Math.floor(copy / 10);
//   }

//   if (rev == Math.abs(n)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let n = -118211;
// console.log(pelidrone(n));
