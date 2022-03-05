/* exported unique */
// declare function unique with one parameter, array
// create an emtpy array and assign to a variable
// create a for loop that iterates over passed array
// inside of code block have a conditional that checks if the element is already in the empty array using includes method
// if it is then continue
// else push it into empty array
// return new empty array
function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.includes(array[i])) {
      continue;
    } else {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
// declare function unique with one parameter, array
// create an emtpy array and assign to a variable
// create a for loop that iterates over passed array
// inside of code block have a conditional that checks if the element is already in the empty array using includes method
// if it is then continue
// else push it into empty array
// return new empty array
