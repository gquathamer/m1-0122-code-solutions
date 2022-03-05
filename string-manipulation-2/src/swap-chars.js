/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstIndexChar = '';
  var secondIndexChar = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      firstIndexChar += string[i];
    } else if (i === secondIndex) {
      secondIndexChar += string[i];
    }
  }
  var swappedWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedWord += secondIndexChar;
    } else if (i === secondIndex) {
      swappedWord += firstIndexChar;
    } else {
      swappedWord += string[i];
    }
  }
  return swappedWord;
}
