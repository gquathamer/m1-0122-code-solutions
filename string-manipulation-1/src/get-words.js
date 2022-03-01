/* exported getWords */
// create the getWords function with one parameter, a string
// return the string with the split method called, and passing a space to the split method
function getWords(string) {
  if (string === "") {
    return [];
  }
  return string.split(" ");
}
// create the getWords function with one parameter, a string
// check the condition of the string parameter being a completely empty string, and return an empty array if true
// return the string with the split method called, and passing a space to the split method
