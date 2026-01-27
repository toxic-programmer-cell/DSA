// Given a person's age, find if they should get a driving license

function checkAge(n) {
  let minAge = 18;
  let maxAge = 80;
  if (n >= minAge && n < maxAge) {
    return "Eligable to get Driving License";
  } else return "Not Eligable";
}

console.log(checkAge(17.6));
