let rlSync = require('readline-sync');

// function greet(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}!`);
// }

// greet(rlSync.question("What's your first name? "), rlSync.question("What's your last name? "));

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);