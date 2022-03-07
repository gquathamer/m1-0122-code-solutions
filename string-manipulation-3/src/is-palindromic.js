/* exported isPalindromic */
// declare function with one parameter
// create a for loop that iterates over the argument passed
// create a variable that stores the length or argument
// in first iteration of loop check if argument at i is equal to last word using length variable
// continue if it returns true
// return false if not
function isPalindromic(string) {
  var noSpaceString = string;
  if (string.includes(' ')) {
    noSpaceString = string.split(' ');
    noSpaceString = noSpaceString.join('');
  }
  var stringLength = noSpaceString.length - 1;
  for (var i = 0; i < noSpaceString.length; i++) {
    if (noSpaceString[i] === noSpaceString[stringLength]) {
      stringLength--;
      continue;
    } else {
      return false
    }
  }
  return true;
}
// declare function with one parameter
// create a var to store the argument
// check if the string includes any spaces
// if it does, split the string at spaces
// then join the array of strings
// store this string length in a var
// loop over the string and check if string at i and string at length are the same
// continue and decrement the length value by 1
// if false then return false
// return true from function
