/* exported reverseWord */
// declare the function reverseWord with one parameter, word
// inside of the function declare a variable that has an empty string as its value
// create a for loop with initialization expression setting var i = word.length - 1
// conditional expression of i >= 0
// final expresion of i-- to decrement
// concatenate the current string char at i to the empty string created earlier
// return the string after the loop completes
function reverseWord(word) {
  var reversedWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
// declare the function reverseWord with one parameter, word
// inside of the function declare a variable that has an empty string as its value
// create a for loop with initialization expression setting var i = word.length - 1
// conditional expression of i >= 0
// final expresion of i-- to decrement
// concatenate the current string char at i to the empty string created earlier
// return the string after the loop completes
