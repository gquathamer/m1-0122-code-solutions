var contactForm = document.forms[0];

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formControl = {};
  for (var i = 0; i < contactForm.elements.length - 1; i++) {
    formControl[contactForm.elements[i].name] = contactForm.elements[i].value;
  }
  console.log(formControl);
  contactForm.reset();
})
