var ten = 10;
var twenty = 20;
var thirty = 30;
var maximumValue = Math.max(ten, twenty, thirty);
console.log("maximumValue: ", maximumValue);

var heroes = ["Spiderman", "Ironman", "Thor", "Captain America"];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log("randomIndex: ", randomIndex);
var randomHero = heroes[randomIndex];
console.log("randomHero: ", randomHero);

var library = [
  {
    title: "The Stand",
    author: "Stephen King"
  },
  {
    title: "11/22/63",
    author: "Stephen King"
  },
  {
    title: "Shantaram",
    author: "Gregory David Roberts"
  }
];
var lastBook = library.pop();
console.log("lastBook: ", lastBook);
var firstBook = library.shift();
console.log("firstBook: ", firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log("library: ", library);

var fullName = "Garrett Quathamer";
var firstAndLastName = fullName.split(" ");
console.log("firstAndLastName: ", firstAndLastName);
var firstName = firstAndLastName[0];
console.log("fistName: ", firstName);
var sayMyName = firstName.toUpperCase();
console.log("sayMyName: ", sayMyName);
