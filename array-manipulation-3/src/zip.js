/* exported zip */
// declare function zip with 2 parameters, first and second arrays
// create an empty array and store that in a variable
// inside declare a variable called length that will hold shorter length
// inside function check for the shorter of the 2 arrays with some if/else conditions
// if first.length < second.length set length = first.length
// else if second.length < first.length set length = second.length
// else set length = first.length becuase they are the same in this case
// create a for loop to iterate over the arrays, the conditional expression will be i < length
// inside of the loop create a variable that is equal to an empty array
// push first[i] and second[i] into this array
// now push that array into the outer empty array
// return outer array
function zip(first, second) {
  var zippedArray = [];
  var length = 0;
  if (first.length < second.length) {
    length = first.length;
  } else if (second.length < first.length) {
    length = second.length;
  } else {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    zippedArray.push(subArray);
  }
  return zippedArray;
}
// declare function zip with 2 parameters, first and second arrays
// create an empty array and store that in a variable
// inside declare a variable called length that will hold shorter length
// inside function check for the shorter of the 2 arrays with some if/else conditions
// if first.length < second.length set length = first.length
// else if second.length < first.length set length = second.length
// else set length = first.length becuase they are the same in this case
// create a for loop to iterate over the arrays, the conditional expression will be i < length
// inside of the loop create a variable that is equal to an empty array
// push first[i] and second[i] into this array
// now push that array into the outer empty array
// return outer array
