function isPrime(n) {
  if (n <= 1) return `${n} is not a Prime Number`;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return `${n} is not a Prime Number`;
    }
  }
  return `${n} is a Prime Number`;
}

console.log(isPrime(2));
