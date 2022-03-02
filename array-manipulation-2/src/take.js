/* exported take */
// declare function take with 2 parameters, an input array and the count integer
// inside the function create a new empty array that values will be pushed to
// create a for loop that will loop through the passed array
// in the conditional expression set i < count integer passed into function
// push values from passed array into new empty array
// return new empty array
function take(array, count) {
  var countedElements = [];
  for (var i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return [];
    }
    countedElements.push(array[i]);
  }
  return countedElements;
}
// declare function take with 2 parameters, an input array and the count integer
// inside the function create a new empty array that values will be pushed to
// create a for loop that will loop through the passed array
// in the conditional expression set i < count integer passed into function
// prior to pushing need to check for a condition, if the array being passed in empty, if first element is undefined then return an empty array
// push values from passed array into new empty array
// return new empty array
