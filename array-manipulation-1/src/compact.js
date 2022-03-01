/* exported compact */
// declare function compact with 2 parameters, the first is an array and the second is what you want omitted from the array
// inside the function declare a new emtpy array to be return
// create a loop that starts at the beginning of the passed array
// check the condition of each element in the array and do not push to new empty array if it matches
// return the now compact array from the function
function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    } else {
      continue;
    }
  }
  return compactArray;
}
// declare function compact with one parameter, an array
// inside the function declare an empty array for correct values to be pushed to
// create a loop that that looks at every element of the passed array
// inside the code block for the function create a conditional statement that simply check the current index in a boolean contaxt
  // if (array[i])
// if it returns true then push that element to the new empty array
// if it returns false then just continue with the loop
// return the compact array from the function
