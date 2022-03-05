/* exported flatten */
// declare function flatten with on parameter, array
// declare an empty array to push values to
// create a for loop that will loop through the passed array
// each iteration check if the value is an array using Array.isArray()
// if it is, inside the code block of the conditional create another for loop that loops through that array
// push each value into empty array, since it's only asking for unwrapped direct children
// after all loops run return new array
function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
// declare function flatten with on parameter, array
// declare an empty array to push values to
// create a for loop that will loop through the passed array
// each iteration check if the value is an array using Array.isArray()
// if it is, inside the code block of the conditional create another for loop that loops through that array
// push each value into empty array, since it's only asking for unwrapped direct children
// after all loops run return new array
