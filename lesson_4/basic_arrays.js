function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  if (count > arr.length) {
    count = 0;
  }

  return arr.slice(arr.length - count);
}

function endsOf(arr1, arr2) {
  return [arr1[0], arr2[arr2.length - 1]];
}