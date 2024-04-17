function leftTrim(string) {
  let result = '';
  let copyMode = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      copyMode = true;
    }

    if (copyMode) {
      result += string[i];
    }
  }

  return result;
}

function rightTrim(string) {
  let result = '';
  let copyMode = false;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      copyMode = true;
    } 

    if (copyMode) {
      result = string[i] + result;
    }

  }
  
  return result;
}

function trim(string) {
  let result = leftTrim(string);
  result = rightTrim(result);

  console.log(result + ".");
  return result;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""