let n = 5; //Global n variable
/*
# Print the following pattern for the given number of rows.

Q. n = 5
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

Answer:
*/
//
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// -------------------------------------------------------------

/*

Q. n = 5
* 
* * 
* * * 
* * * * 
* * * * *

Answer:
  */
//
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// -------------------------------------------------------------

/*
Q. n = 5
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Answer:
  */

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += j + 1;
//   }
//   console.log(row);
// }

// -------------------------------------------------------------
/*
Q. n = 5
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

Answer:
  */

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += j + 1;
//   }
//   console.log(row);
// }

// ----------------------------------------------------------------
/*
Q. n = 5
        *
      * *
    * * *
  * * * *
* * * * *

i=0 -> *(i+1), " "(n-(i+1))
Answer:
  */

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row += "  ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row += " *";
//   }
//   console.log(row);
// }

// -------------------------------------------
/*
Q. n = 5
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1

Answer:
  */

// for (let i = 0; i < n; i++) {
//   let row = "";
//   let flag = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row += flag + " ";
//     if (flag == 1) {
//       flag = 0;
//     } else {
//       flag = 1;
//     }
//   }
//   console.log(row);
// }

// ---------------------------------------------------
/*
Q. n = 5
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1

Answer:
  */
// let flag = 1;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += flag + " ";

//     flag = flag == 1 ? 0 : 1;
//   }
//   console.log(row);
// }

// -----------------------------------
/*
Q. n = 5
* * * * *
  * * * *
    * * *
      * *
        *

Answer:
  */
// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += "  ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// ---------------------------------------------------
/*
Q. n = 5
* * * * * *
  * * * * * *
    * * * * * *
      * * * * * *
        * * * * * *

Answer:
  */
// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += "  ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     str += "* ";
//   }
//   for (let l = 0; l < i + 1; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// -------------------------------------------------
/*
Q. n = 5
        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * * 

Answer:
  */
// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     str += "  ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     str += "* ";
//   }
//   for (let l = 0; l < i; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }
