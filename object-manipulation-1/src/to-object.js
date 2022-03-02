/* exported toObject */
function toObject(array) {
  var newObject = {};
  newObject[array[0]] = array[1];
  console.log(newObject);
  return newObject;
}
