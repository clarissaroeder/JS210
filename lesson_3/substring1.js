function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let result = "";
  for (let i = start; i < start + length; i++) {
    if (i >= string.length) {
      break;
    }

    result += string[i];
  }

  console.log(result);
  return result;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""