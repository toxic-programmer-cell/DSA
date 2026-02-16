// Reverse bits of a given 32 bits signed integer.

function reverseBits(n) {
  let reverseBits = n
    .toString(2)
    .padStart(32, "0")
    .split("")
    .reverse()
    .join("");
  let res = parseInt(reverseBits, 2);
  return res;
}

let ans = reverseBits(43261596);
console.log(ans);
