function evenElements(array) {
  array.forEach(function(element) {
    if (element % 2 == 0) {
      console.log(element);
    }
  });
}

// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

// let myArray = [
//     [1, 3, 6, 11],
//     [4, 2, 4],
//     [9, 17, 16, 0],
//   ];

// myArray.forEach(function(subarray) {
//   evenElements(subarray);
// });


let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(element) {
  if (element % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(newArray);