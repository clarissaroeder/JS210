function checkPassword() {
  let password = 'password'
  
  for (let attempt = 1; attempt <= 3; attempt++) {
    let answer = prompt('What is the password: ');

    if (answer === password) {
      console.log("You've been signed in.");
      return;
    }
  }

  console.log("You've been denied access.");
}