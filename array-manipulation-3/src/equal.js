/* exported equal */
// declare function equal with 2 parameters, 2 arrays
// first create a conditional to check if length properties are the same, if not return false
// inside the function create a loop that iterates over element in either array
// inside the loop for each iteration check if element in array 1 is equal to same element in array 2
// if true continue
// if false return false
// if it makes it through the loop return true
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
// declare function equal with 2 parameters, 2 arrays
// first create a conditional to check if length properties are the same, if not return false
// inside the function create a loop that iterates over element in either array
// inside the loop for each iteration check if element in array 1 is equal to same element in array 2
// if true continue
// if false return false
// if it makes it through the loop return true
