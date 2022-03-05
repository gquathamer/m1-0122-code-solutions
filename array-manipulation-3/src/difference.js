/* exported difference */
function difference(first, second) {
  var differentArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      differentArray.push(first[i]);
    }
  }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      differentArray.push(second[i]);
    }
  }
  return differentArray;
}
