// function objectHasProperty(object, string) {
//   for (let property in object) {
//     if (property === string) {
//       console.log(true);
//       return true;
//     }
//   }

//   console.log(false);
//   return false;
// }

function objectHasProperty(object, string) {
  let properties = Object.keys(object);
  console.log(properties.includes(string));
  return properties.includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true