/* exported isLowerCased */
function isLowerCased(word) {
  var wordCopy = word.toLowerCase();
  if (wordCopy === word) {
    return true;
  } else {
    return false;
  }
}
