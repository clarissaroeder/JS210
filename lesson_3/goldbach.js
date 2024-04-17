function isPrime(number) {
  if (number <= 1) {
    return false;
  } 
  
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    } 
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  for (let i = 2; i < expectedSum; i++) {
    for (let j = 2; j < expectedSum; j++) {
      if (i > j) {
        continue;
      }

      if ((isPrime(i) && isPrime(j)) && i + j === expectedSum) {
        console.log(`${i} ${j}`);
      }
    }
  }
}


checkGoldbach(3);   // logs: null
checkGoldbach(4);   // logs: 2 2
checkGoldbach(12);  // logs: 5 7
checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53