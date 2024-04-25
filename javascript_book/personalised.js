let rlSync = require('readline-sync');

let firstName = rlSync.question("What's your name?\n");
let dayTimes = ['Morning', 'Afternoon', 'Evening'];

for (let index = 0; index < dayTimes.length; index++) {
  console.log(`Good ${dayTimes[index]}, ${firstName}.`);
}