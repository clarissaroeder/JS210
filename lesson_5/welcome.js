function greetings(name, status) {
  let hello = "Hello, " + name.join(' ') + "! ";
  let nice = "Nice to have a " + status.title + " " + status.occupation + " around.";

  console.log(hello + nice);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
//  Hello, John Q Doe! Nice to have a Master Plumber around.