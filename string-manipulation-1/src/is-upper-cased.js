/* exported isUpperCased */
// declare function isUpperCased with one parameter, word
// inside the function declare a variable that is the word parameter with toUpperCase method being called on word
// check in a conditional if the new variable that is uppercase of word is equal to word
// if true then return true
// if false then return false
function isUpperCased(word) {
  var wordCopy = word.toUpperCase();
  if (wordCopy === word) {
    return true;
  } else {
    return false;
  }
}
// declare function isUpperCased with one parameter, word
// inside the function declare a variable that is the word parameter with toUpperCase method being called on word
// check in a conditional if the new variable that is uppercase of word is equal to word
// if true then return true
// if false then return false
