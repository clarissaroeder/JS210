const ROTATION = 13;
const ALPHABET_LENGTH = 26;
const UPPER_OFFSET = 65;
const LOWER_OFFSET = 97;

function rotateChar(char, offset) {
  let charCode = char.charCodeAt(0) - offset;
  let rotatedCharCode = ((charCode + ROTATION) % ALPHABET_LENGTH) + offset;
  return String.fromCharCode(rotatedCharCode);
}

function rot13(string) {
  let chars = string.split('');

  let result = chars.map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      let offset = char === char.toUpperCase() ? UPPER_OFFSET : LOWER_OFFSET;
      return rotateChar(char, offset);
    } else {
      return char;
    }
  });

  return result.join('');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.