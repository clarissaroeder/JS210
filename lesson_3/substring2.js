function substring(string, start, end) {
  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start >= string.length) {
    start = string.length;
  }

  if (end >= string.length || end === undefined) {
    end = string.length;
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let result = "";
  for (let i = start; i < end; i++) {
    result += string[i];
  }

  console.log(result);
  return result;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"