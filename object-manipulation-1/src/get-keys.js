/* exported getKeys */
// create a function called getKeys with one parameter, object
// inside of the function create a new empty array
// use a for/in loop to loop through the object
// push each key into the empty array
// return the array after loop is done
function getKeys(object) {
  var objectKeys = [];
  for (var key in object) {
    objectKeys.push(key);
  }
  return objectKeys;
}
// create a function called getKeys with one parameter, object
// inside of the function create a new empty array
// use a for/in loop to loop through the object
// push each key into the empty array (making sure to only push the var key, not object[key] which would be the value)
// return the array after loop is done
