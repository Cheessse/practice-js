const form = document.querySelector('#task-form');
const list = document.querySelector('.task-list');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (inputValue === '') return;
  console.dir(inputValue);
  e.target.reset();
}
