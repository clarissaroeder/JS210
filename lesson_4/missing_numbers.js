function missing(array) {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    let currentElement = array[i];
    let nextElement = array[i + 1];
    let difference = nextElement - currentElement;

    if (difference > 1) {
      for (let j = currentElement + 1; j < nextElement; j++) {
        result.push(j);
      }
    }
  }

  console.log(result);
  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []