function wordCount(string) {
  let words = string.split(' ');
  let object = {};

  let countOccurences = function(value, words) {
    return words.filter(word => word === value).length;
  }

  for (let i in words) {
    object[words[i]] = countOccurences(words[i], words);
  }

  return object;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }