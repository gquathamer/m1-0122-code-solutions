//var typingPhrase = 'how vexingly quick daft zebras jump';

var typingPhraseCounter = 0;

var spanList = document.querySelectorAll('span');

var $completionMessage = document.querySelector('.completion-container');

var $completionButton = document.querySelector('.completion-button');

document.addEventListener('keydown', function(event) {
  if (event.key === spanList[typingPhraseCounter].textContent) {
    spanList[typingPhraseCounter].classList.remove('border-bottom', 'text-color-incorrect');
    spanList[typingPhraseCounter].classList.add('text-color-correct');
    typingPhraseCounter++;
    if (typingPhraseCounter === spanList.length) {
      $completionMessage.style.display = 'flex';
      return;
    }
    spanList[typingPhraseCounter].classList.add('border-bottom');
  } else {
    spanList[typingPhraseCounter].classList.add('text-color-incorrect');
  }
});

$completionButton.addEventListener('click', function (event) {
  location.reload();
})
