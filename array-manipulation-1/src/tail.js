/* exported tail */
function tail(array) {
  var allButFirst = [];
  for (var i = 1; i < array.length; i++) {
    allButFirst.push(array[i]);
  }
  return allButFirst;
}
