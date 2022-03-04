/* exported capitalizeWords */
// declare function capitalizeWords with one parameter, string
// inside function call the split method on string, and pass it a space
// assign result of this to a variable
// create a loop that iterates over the returned array from split method
// for each element call toLowerCase method and assign that to itself
// then call to uppercase on first char in string and assign that to itself
// create a variable that holds an empty string
// loop through array again and push to empty string
function capitalizeWords(string) {
  var splicedArray = string.split(' ');
  var capitalizedWords = '';
  for (var i = 0; i < splicedArray.length; i++) {
    var lowerCaseWords = splicedArray[i].toLowerCase();
    splicedArray[i] = splicedArray[i][0].toUpperCase();
    splicedArray[i] += lowerCaseWords.slice(1);
    capitalizedWords += splicedArray[i];
    if (i != splicedArray.length - 1) {
      capitalizedWords += ' ';
    }
  }
  return capitalizedWords;
}
// declare function capitalizeWords with one parameter, string
// call split method on string and pass it a single space as argument
// assign result to variable
// assign a blank string to another variable
// create a loop to iterate over split array
// inside loop store lowercase version of the word in a var
// set element at i equal to toUpperCase method being called on first char at i
// concat the lowercase version of the rest of the word to splicedArray
// concat result to empty string
// have a conditional check for last element
// if it is, then do not concat a space at the end
