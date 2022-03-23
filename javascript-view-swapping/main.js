var tabContainer = document.querySelector('.tab-container');

var tabElements = document.querySelectorAll('.tab');

var viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function () {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (tabElements[i] === event.target) {
        tabElements[i].classList.add('active');
      } else {
        tabElements[i].classList.remove('active');
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var i = 0; i < viewElements.length; i++) {
      if (dataView === viewElements[i].getAttribute('data-view')) {
        viewElements[i].classList.remove('hidden');
        viewElements[i].classList.add('active');
      } else {
        viewElements[i].classList.remove('active');
        viewElements[i].classList.add('hidden');
      }
    }
  }
})
