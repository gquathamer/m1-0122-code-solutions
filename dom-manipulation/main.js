var buttonClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', function () {
  buttonClicked++;
  $clickCount.textContent = 'Click: ' + buttonClicked;
  if (buttonClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (buttonClicked < 7) {
    $hotButton.className = 'cool hot-button';
  } else if (buttonClicked < 10) {
    $hotButton.className = 'tepid hot-button';
  } else if (buttonClicked < 13) {
    $hotButton.className = 'warm hot-button';
  } else if (buttonClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
