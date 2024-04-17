function isXor(arg1, arg2) {
  if (!!arg1 === !!arg2) {
    console.log("false");
    return false;
  } else {
    console.log("true");
    return true;
  }
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false