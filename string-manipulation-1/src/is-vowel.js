/* exported isVowel */
// create an array that contains all the vowels [a, e, i, o, u]
// declare function isVowel with one parameter, char which represents a single character in a string
// inside function create a for loop that takes the argument passed and checks whether the character matches any of the 5 vowels
// to handle case make each vowel in array lowercase and convert that char to lowercase and assigning that to a new local variable inside of function
// if lowercase char matches any of the vowels then return true
// else return false
var vowels = ["a", "e", "i", "o", "u"];

function isVowel(char) {
  var charToLower = char.toLowerCase();
  for (var i = 0; i < vowels.length; i++) {
    if (charToLower === vowels[i]) {
      return true;
    }
  }
  return false;
}
// create an array that contains all the vowels [a, e, i, o, u]
// declare function isVowel with one parameter, char which represents a single character in a string
// inside function create a for loop that takes the argument passed and checks whether the character matches any of the 5 vowels
// to handle case make each vowel in array lowercase and convert that char to lowercase and assigning that to a new local variable inside of function
// if lowercase char matches any of the vowels then return true
// else return false and make sure to put this return statement outside of the loop
