/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var lowerCaseString = string.toLowerCase();
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (
      lowerCaseString[i] === 'a' ||
      lowerCaseString[i] === 'e' ||
      lowerCaseString[i] === 'i' ||
      lowerCaseString[i] === 'o' ||
      lowerCaseString[i] === 'u'
    ) {
      counter++;
    }
  }
  return counter;
}
