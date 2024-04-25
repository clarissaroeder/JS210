// function oddLengths(arr) {
//   return arr.map((element) => element.length).filter((element) => element % 2 !== 0);
// }

function oddLengths(arr) {
  return arr.reduce((accumulator, string) => {
    if (string.length % 2 !== 0) {
      accumulator.push(string.length)
    }

    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]