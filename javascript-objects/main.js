var student = {
  firstName: "Garrett",
  lastName: "Quathamer",
  age: 30
}
var fullName = student.firstName + " " + student.lastName;
console.log("fullname: ", fullName);
student.livesInIrvine = true;
student.previousOccupation = "Sales Engineer";
console.log("livesInIrvine: ", student.livesInIrvine);
console.log("previousOccupation: ", student.previousOccupation)

var vehicle = {
  make: "Tesla",
  model: "Model Y",
  year: 2022
}
vehicle["color"] = "Midnight Metallic Silver";
vehicle["isConvertible"] = false;
console.log("color: ", vehicle["color"]);
console.log("isConvertible: ", vehicle["isConvertible"]);
console.log("vehicle object: ", vehicle);

var pet = {
  name: "Indy",
  type: "Dog"
}
delete pet.name;
delete pet.type;
console.log("pet: ", pet);
