/* exported dropRight */
function dropRight(array, count) {
  var dropRightArray = [];
  var arrayIndex = array.length - 1 - count;
  while (arrayIndex >= 0) {
    dropRightArray.unshift(array[arrayIndex]);
    arrayIndex--;
  }
  return dropRightArray;
}
