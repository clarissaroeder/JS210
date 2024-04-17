let lastInArray = arr => arr[arr.length - 1];

function rollCall(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function reverseArray(array) {
  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function toString(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += String(array[i]);
  }

  return result;
}