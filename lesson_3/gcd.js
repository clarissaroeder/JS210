// Euclidian algorithm
function gcd(num1, num2) {
  let temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  console.log(num1);
  return num1;
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1