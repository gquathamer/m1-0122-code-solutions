/* exported titleCase */
var lowerCaseWord = [
  'and',
  'or',
  'nor',
  'but',
  'a',
  'an',
  'the',
  'as',
  'at',
  'by',
  'for',
  'in',
  'of',
  'on',
  'per',
  'to'
]

function titleCase(title) {
  var titleArray = title.split(' ');
  var titleCase = [];
  for (var i = 0; i < titleArray.length; i++) {
    if (lowerCaseWord.includes(titleArray[i].toLowerCase()) && i != 0 && titleArray[i - 1][titleArray[i - 1].length - 1] !== ':') {
      titleCase.push(titleArray[i].toLowerCase());
    } else if (titleArray[i].includes('-')) {
      var splitWordArray = titleArray[i].split('-');
      splitWordArray[0] = capitalizeWord(splitWordArray[0]);
      splitWordArray[1] = capitalizeWord(splitWordArray[1]);
      var splitWordString = splitWordArray.join('-');
      titleCase.push(splitWordString);
    } else if (titleArray[i].toLowerCase() === 'javascript') {
      titleCase.push('JavaScript');
    } else if (titleArray[i].toLowerCase() === 'javascript:') {
      titleCase.push('JavaScript:');
    } else if (titleArray [i].toLowerCase() === 'api') {
      titleCase.push('API');
    } else {
      titleCase.push(capitalizeWord(titleArray[i]));
    }

  }
  var capitalizedTitle = titleCase.join(' ');
  return capitalizedTitle;
}

function capitalizeWord(word) {
  var capitalizedWord = word[0].toUpperCase();
  capitalizedWord += word.toLowerCase().slice(1);
  return capitalizedWord;
}
