var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function () {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
})
