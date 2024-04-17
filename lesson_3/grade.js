function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function toLetterGrade(grades) {
  let average = sum(grades) / grades.length;
  let grade;

  if (average >= 90) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  return grade;
}

// Main
function main() {
  let grades = [];

  for (let i = 0; i <= 2; i++) {
    let grade = prompt(`Enter score ${i + 1}:`);
    grades.push(parseInt(grade));
  }

  let letterGrade = toLetterGrade(grades);

  console.log("Based on the average of your 3 scores your letter grade is:" + letterGrade);
}

main();