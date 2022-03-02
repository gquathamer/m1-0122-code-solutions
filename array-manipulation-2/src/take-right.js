/* exported takeRight */
function takeRight(array, count) {
  var takeRightArray = [];
  var arrayIndex = array.length - 1;
  if (count > array.length) {
    count = array.length;
  }
  while (count > 0) {
    takeRightArray.unshift(array[arrayIndex]);
    arrayIndex--;
    count--;
  }
  return takeRightArray;
}
