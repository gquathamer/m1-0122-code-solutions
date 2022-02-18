function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(60);

console.log("convertMinutesToSecondsResut: ", convertMinutesToSecondsResult);

function greet(name) {
  return "Hey " + name;
}

var greetPerson = greet("Elvis");

console.log("greetPerson: ", greetPerson);

function getArea(width, height) {
  return width * height;
}

var area = getArea(14, 66);

console.log("area: ", area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({firstName: 'Garrett', lastName: 'Quathamer'});

console.log("firstname: ", firstName);

function getLastName(array) {
  return array[array.length - 1];
}

var lastName = getLastName(["stepping", "on", "the", "beach", "dootaladootdootdo", "test"]);

console.log("lastname: ", lastName);
