var $documentBody = document.querySelector('body');
var $lightBulb = document.querySelector('#light-div');

$lightBulb.addEventListener('click', function(event) {
  if ($lightBulb.className === 'light-bulb-dark') {
    $lightBulb.className = 'light-bulb-light';
    $documentBody.style.backgroundColor = '#FEF9F1';
  } else {
    $lightBulb.className = 'light-bulb-dark';
    $documentBody.style.backgroundColor = 'black';
  }
});
