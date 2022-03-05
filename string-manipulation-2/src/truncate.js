/* exported truncate */
// declare function truncate with 2 parameters, length and string
// use the splice method on the passed string and assign the result to a new variable
// give the splice method and argument of length
// return the new variable
function truncate(length, string) {
  var truncatedWord = string.slice(0, length);
  truncatedWord += "...";
  console.log(truncatedWord);
  return truncatedWord;
}
// declare function truncate with 2 parameters, length and string
// use the slice (not splice, that is for arrays) method on the passed string
// pass a 0 and the length parameter as arguments to slice method
// assign the result to a new variable
// concatenate a ... to end of that new variable
// return the new variable
