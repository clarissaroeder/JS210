function generatePattern(number) {
  let index = 1;

  do {
    let result = '';
    for (let i = 1; i <= index; i++) {
      result += String(i);
    }

    for (let i = number; i > index; i--) {
      result += "*";
    }

    index++;

    console.log(result);
  } while (index <= number);
}

generatePattern(7);