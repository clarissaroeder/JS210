function getNumber(prompt) {
  let rlSync = require('readline-sync');

  return parseFloat(rlSync.question(prompt));
}


function multiply(left, right) {
  return left * right;
}

let num1 = getNumber("Enter first number: ");
let num2 = getNumber("Enter second number: ");
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);