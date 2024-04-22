//  1.
let today = new Date();

// 2. 
console.log(`Today's date is ${today.getDay()}`);

// 3. 
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today's date is ${daysOfWeek[today.getDay()]}`);

// 4. 
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}th.`);

// 5. 
function dateSuffix(number) {
  let suffix; 
  if (number % 10 === 1) {
    suffix = "st";
  } else if (number % 10 === 2) {
    suffix = "nd";
  } else if (number % 10 === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return String(number) + suffix;
}

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}.`);

// 6. 
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}.`);

// 7. 
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}.`);

// 8. 
function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDate(date) {
  let day = formattedDay(date)
  let month = formattedMonth(date)

  console.log(`Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}.`);
}

// 9. 
console.log(today.getFullYear());
console.log(today.getYear());

// 10.
console.log(today.getTime());

// 11. 
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

// 12.
let nextWeek = new Date(today.getTime());
console.log(nextWeek === today);

// 13. 
console.log(nextWeek.toDateString() === today.toDateString());
nextWeek.setDate(today.getDate() + 7);
formattedDate(nextWeek);
console.log(nextWeek.toDateString());
console.log(nextWeek.toDateString() === today.toDateString());

// 14.
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

console.log(formatTime(today));