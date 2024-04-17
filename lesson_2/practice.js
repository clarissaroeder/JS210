function sum(array) {
  let total = 0;
  
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total
}

function average(array) {
  return sum(array) / array.length
}

let result = average([5, 9, 6, 8, 7]);
console.log(result);

let temperatures = [24, 10, 20, 19, 8];
console.log(average(temperatures));