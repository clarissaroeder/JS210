function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error: please enter an integer.');
    return;
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

evenOrOdd(5);
evenOrOdd(8);
evenOrOdd('hello');
