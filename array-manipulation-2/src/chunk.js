/* exported chunk */
function chunk(array, size) {
  var chunkyArray = [];
  for (var i = 0; i < array.length; i += size) {
    var subArray = [];
    for (var j = i; j < size + i; j++) {
      if (j >= array.length) {
        break;
      }
      subArray.push(array[j]);
    }
    chunkyArray.push(subArray);
  }
  return chunkyArray;
}
