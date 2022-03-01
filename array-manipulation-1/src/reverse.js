/* exported reverse */
// declare function reverse with one parameter, an array
// inside of the function create a new empty array to be return from the function
// create a loop with the initialization express having a variable set to the last element in the array, var i = array.length - 1
// conditional expression of the loop set to the i variable greater than or equal to 0, since arrays are zero indexed need to include zero in the conditional
// final expression will be decrementing the i variable by 1
// inside the code block of the loop push the array[i] value into the empty array
// return the array that contains the reversed order
function reverse(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
// declare function reverse with one parameter, an array
// inside of the function create a new empty array to be return from the function
// create a loop with the initialization express having a variable set to the last element in the array, var i = array.length - 1
// conditional expression of the loop set to the i variable greater than or equal to 0, since arrays are zero indexed need to include zero in the conditional
// final expression will be decrementing the i variable by 1
// inside the code block of the loop push the array[i] value into the empty array
// return the array that contains the reversed order
