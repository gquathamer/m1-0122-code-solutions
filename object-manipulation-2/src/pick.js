/* exported pick */
// declare function pick with 2 parameters, source object and an array of keys
// create a for in loop to loop through the properties of source object
// inside of the code block create a for loop that will loop through array of keys
// inside of that code block have a conditional that if the property in the array matches current iteration of for/in loop add to a new object
// return new object
function pick(source, keys) {
  var pickObject = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        pickObject[key] = source[key];
      }
    }
  }
  return pickObject;
}
// declare function pick with 2 parameters, source object and an array of keys
// create a for in loop to loop through the properties of source object
// inside of the code block create a for loop that will loop through array of keys
// inside of that code block have a conditional that if the property in the array matches current iteration/key of for/in loop add to a new object
// another condition in that conditional to check for udnefiend values
// return new object
