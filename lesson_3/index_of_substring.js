function indexOf(firstString, secondString) {
  for (let i = 0; i <= (firstString.length - secondString.length); i++) {
    let substring = '';
    for (let j = 0; j < secondString.length; j++) {
      substring += firstString[i + j];
    }

    if (substring === secondString) {
      console.log(i);
      return i;
    }
  }

  console.log(-1);
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let indexes = [];

  for (let i = 0; i <= (firstString.length - secondString.length); i++) {
    let substring = '';
    for (let j = 0; j < secondString.length; j++) {
      substring += firstString[i + j];
    }

    if (substring === secondString) {
      indexes.push(i);
    }
  }

  if (indexes.length === 0) {
    console.log(-1);
    return -1;
  } else {
    console.log(indexes[indexes.length - 1]);
    return indexes.length - 1;
  }
}


indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1