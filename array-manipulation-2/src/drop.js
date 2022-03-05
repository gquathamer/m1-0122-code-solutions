/* exported drop */
// declare function drop with 2 parameters, array and counter
// inside function create a new empty array
// create a for loop with the conditional expression looking for an i value greater than counter passed to function
// then in the code block push the values from passed array into the new array
// return new array
function drop(array, count) {
  var countedElements = [];
  for (var i = count; i < array.length; i++) {
    countedElements.push(array[i]);
  }
  return countedElements;
}
// declare function drop with 2 parameters, array and counter
// inside function create a new empty array
// create a for loop with the initialization expression set to the count parameter passed, and the conditional expression set to array.length
// then in the code block push the values from passed array into the new array
// return new array
