/* exported initial */
function initial(array) {
  var allButLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    allButLast.push(array[i]);
  }
  return allButLast;
}
