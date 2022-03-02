/* exported includes */
// declare function includes with 2 parameters, an array and a value
// create a loop inside of the function that loops through the entire array
// inside the loop code block use a conditional to see if the passed value is in the array
// if found, return true
// otherwise retur false
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
// declare function includes with 2 parameters, an array and a value
// create a loop inside of the function that loops through the entire array
// inside the loop code block use a conditional to see if the passed value is in the array
// if found, return true
// otherwise retur false
