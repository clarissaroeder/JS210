function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function pop(array) {
  let element = array[array.length - 1];
  array.length = array.length - 1;

  return element;
}

function unshift(array, value) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  } 
  
  array[0] = value;
  return array.length;
}

function shift(array) {
  let element = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return element;
}

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function slice(array, start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    push(result, array[i]);
  }

  return result;
}

function splice(array, start, length) {
  let removed = []

  for (let i = start; i < array.length; i++) {
    if (i < start + length) {
      push(removed, array[i]);
    }

    array[i] = array[i + length];
  }

  array.length = array.length - removed.length;
  return removed;
}

function concat(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    push(result, arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    push(result, arr2[i]);
  }

  return result;
}

function join(array, string) {
  let result = '';

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += String(array[i])
    } else {
      result += String(array[i])
      result += string;
    }
  }

  return result;
}