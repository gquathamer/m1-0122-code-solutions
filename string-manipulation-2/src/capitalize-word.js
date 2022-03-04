/* exported capitalizeWord */
// declare function capitalizeWord with one parameter, word
// use the toLowerCase method on the string parameter passed
// assign that result to itself
// use a conditional to see if lowercase version is equal to javascript
// if so, return alternative spelling given
// use the toUpperCase method on the word now to create the uppercased version
// return the uppercase word
function capitalizeWord(word) {
  var lowercaseWord = word.toLowerCase();
  if (lowercaseWord === 'javascript') {
    return 'JavaScript';
  }
  var capitalizedWord = lowercaseWord[0].toUpperCase();
  capitalizedWord += word.toLowerCase().slice(1);
  return capitalizedWord;
}
// declare function capitalizeWord with one parameter, word
// create a variable and assign it the result of calling toLowerCase method on word parameter
// conditional check to see if value of lowercaseWord is equal to javascript
// if it is return 'JavaScript'
// create a variable called capitalizeWord and assign result of toUpperCase method on first character of word
// concat result of calling first toLowerCase and then slice with argument 1 (to start at second character)
// return this varible
