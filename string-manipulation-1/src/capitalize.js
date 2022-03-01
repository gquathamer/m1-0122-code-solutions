/* exported capitalize */
// declare capitalize function with one paramter, word
// create a local variable that is equal to word parameter
// modify the first letter of the string to make it uppercase
// create a loop with initialization function equal to second character in string
// conditional expression rest of the string length
// increment by next character in string
// inside the code block of the function make each subsequent letter lowercase using toLowerCase method
function capitalize(word) {
  var wordCopy = "";
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      wordCopy += word[i].toUpperCase();
    } else {
      wordCopy += word[i].toLowerCase();
    }
  }
  return wordCopy;
}
// declare capitalize function with one parameter, word
// create a variable inside of the function that is set to a blank string
// loop through all character in the word parameter
// when i === 0 we are on the first letter so concat that to blank string variable with the toUpperCase method being called on that char in word parameter
// all else scenarios same as above but use the toLowerCase method
// return the newly formed string
