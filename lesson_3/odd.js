/* function logOddNumbers(number) {
  for (i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
 */

/* function logOddNumbers(number) {
  for (i = 1; i <= number; i += 2) {
    console.log(i);
  }
} */

function logOddNumbers(number) {
  for(i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

logOddNumbers(19);