function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 'A' && string[i] <= 'Z') {
      let ascii = string.charCodeAt(i) + CONVERSION_OFFSET;
      result += String.fromCharCode(ascii);
    } else {
      result += string[i];
    }
  }

  console.log(result);
  return result;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"