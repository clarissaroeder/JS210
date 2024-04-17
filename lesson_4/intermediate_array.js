function oddElementsOf(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  console.log(result);
  return result;
}

// let digits = [4, 8, 15, 16, 23, 42];
// oddElementsOf(digits);    // returns [8, 16, 42]

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

function sortDescending(arr) {
  let copy = arr.slice();

  return copy.sort((a, b) => b - a);
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subarray = arr[i];
    let sum = 0;
    
    for (let j = 0; j < subarray.length; j++) {
      sum += subarray[j];
    }

    result.push(sum);
  }

  console.log(result);
  return result;
}

// matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function uniqueElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    }

    result.push(arr[i]);
  }

  console.log(result);
  return result;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]