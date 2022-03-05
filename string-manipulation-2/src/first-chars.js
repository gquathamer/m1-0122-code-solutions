/* exported firstChars */
function firstChars(length, string) {
  var firstCharsString = '';
  var counter = 0;
  while (counter < length) {
    if (string[counter] !== undefined) {
      firstCharsString += string[counter];
    }
    counter++;
  }
  return firstCharsString;
}
