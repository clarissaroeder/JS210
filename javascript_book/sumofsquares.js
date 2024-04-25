function sumOfSquares(arr) {
  let result = arr.reduce((accumulator, element) => accumulator + element * element, 0);
  return result;
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83