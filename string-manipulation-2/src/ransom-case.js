/* exported ransomCase */
// declare function ransomCase with one parameter, string
// create a variable that stores the result of calling toLowerCase method on string parameter
// create a loop that iterates over every character in string
// have a conditional that checks if i modulo 2 has no remainder
// if so, capitalize that character in the string (every other)
// return this variable
function ransomCase(string) {
  var lowercaseString = string.toLowerCase();
  var ransomcaseString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomcaseString += lowercaseString[i];
    } else {
      ransomcaseString += lowercaseString[i].toUpperCase();
    }
  }
  return ransomcaseString;
}
// declare function ransomCase with one parameter, string
// create a variable that stores the result of calling toLowerCase method on string parameter
// create a variable that stores an empty string, to be concatenated with appropriate letters later
// create a loop that iterates over every character in string
// have a conditional that checks if i modulo 2 has no remainder
// if so, concat that character in the string (every other)
// if not, concat the uppercase version of letter
// return this variable
