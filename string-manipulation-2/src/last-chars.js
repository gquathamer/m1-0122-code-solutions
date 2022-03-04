/* exported lastChars */
function lastChars(length, string) {
  var lastCharsString = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string[i] !== undefined) {
      lastCharsString += string[i];
    }
  }
  return lastCharsString;
}
