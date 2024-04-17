function repeat(string, times) {
  if (typeof times !== "number" || times < 0) {
    console.log(undefined);
    return undefined;
  }

  let result = "";

  while (times > 0) {
    result += string;
    times--;
  }

  console.log(result);
  return result;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined