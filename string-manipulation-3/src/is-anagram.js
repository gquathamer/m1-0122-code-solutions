/* exported isAnagram */
// declare function with 2 parameters
// check if length of both strings is the same, if not return false
// create a loop that iterates over the first string char by char
// inside of code block each time check if the includes method being passed second string on the char of first returns true
// if it doesn't return false
// return true
function isAnagram(first, second) {
  var firstNoSpaces = removeSpaces(first);
  var secondNoSpaces = removeSpaces(second);
  firstNoSpaces = firstNoSpaces.split('').sort().join('');
  secondNoSpaces = secondNoSpaces.split('').sort().join('');
  if (firstNoSpaces === secondNoSpaces) {
    return true;
  } else {
    return false;
  }
}

function removeSpaces(string) {
  var noSpaceString = string.split(' ');
  noSpaceString = noSpaceString.join('');
  return noSpaceString;
}

// declare function isAnagram with 2 parameters, first and second
// declare a second helper function called removeSpaces with 1 parameter
// inside isAnagram assign a var to the result of calling remove spaces with first as argument
// do the same for second
// reassign firstNoSpaces to the result of calling the split method on itself, then calling the sort method (array), then calling the join method (array)
// do the same for secondNoSpaces
// check if they are the same strings!
// if so return true, if not return false
