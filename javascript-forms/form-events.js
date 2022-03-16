function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var userName = document.querySelector('#user-name');
var userEmail = document.querySelector('#user-email');
var userMessage = document.querySelector('#user-message');

userName.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);
