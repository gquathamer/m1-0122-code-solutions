var $modalButton = document.querySelector('.modal-button');
var $survey = document.querySelector('.survey-container');
$surveyButton = document.querySelector('.survey-button');
var $body = document.querySelector('body');

$modalButton.addEventListener('click', function (event) {
  if ($survey.style.display !== 'flex') {
    $survey.style.display = 'flex';
    $survey.style.background = 'rgba(0, 0, 0, 0.75)';
  } else {
    $survey.style.display = 'none';
    $survey.style.background = 'white';
  }
});

$surveyButton.addEventListener('click', function (event) {
  $survey.style.display = 'none';
  $survey.style.background = 'white';
});
