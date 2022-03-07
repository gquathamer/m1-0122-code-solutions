/* exported union */
function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      unionArray.push(second[i]);
    }
  }
  return unionArray;
}
