/* exported addSuffixToAll */
function addSuffixToAll(array, suffix) {
  var suffixedWords = [];
  for (var i = 0; i < array.length; i++) {
    suffixedWords.push(array[i] + suffix);
  }
  return suffixedWords;
}
