// 1. 
let radiansToDegrees = radians => radians / (Math.PI / 180);

// 2. 
let number = -180;
console.log(Math.abs(number));

// 3. 
let square = 16777216;
console.log(Math.sqrt(square));

// 4. 
console.log(Math.pow(16, 6));

// 5. 
let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// 6.
function randomBetween(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference + min);
}

console.log(randomBetween(1, 5));