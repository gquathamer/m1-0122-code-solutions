/* exported reverseWords */
function reverseWords(string) {
  var stringArray = string.split(' ');
  var reversedWordsArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    var reversedWord = '';
    for (var j = stringArray[i].length - 1; j >= 0; j--) {
      reversedWord += stringArray[i][j];
    }
    reversedWordsArray.push(reversedWord);
  }
  reversedWordsArray = reversedWordsArray.join(' ');
  return reversedWordsArray;
}
