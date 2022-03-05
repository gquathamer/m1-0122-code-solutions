/* exported omit */
// declare function pick with 2 parameters, source object and an array of keys
// create a for in loop to loop through the properties of source object
// inside of the code block create a for loop that will loop through array of keys
// inside of that code block have a conditional that if the property in the array matches current iteration of for/in loop add to a new object
// return new object
function omit(source, keys) {
  var omitObject = {};
  for (var key in source) {
    if (keys.includes(key)) {
      continue;
    } else {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
// declare function with 2 parameters, source object and an array of keys
// create an emtpy object and store that to a variable
// create a for in loop to loop through passed source object
// create a conditional that checks if the includes method being called on the keys array with current for/in key returns true
// if so continue looping
// if not add that current key to the empty object
// return omitObject
