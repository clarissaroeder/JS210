function isNotANumber(number) {
  return number !== number;
}

console.log(isNotANumber(5));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));
console.log(isNotANumber([]));
console.log(isNotANumber('hello'));
console.log(isNotANumber(-1));
console.log(isNotANumber(NaN));