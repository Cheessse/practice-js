const form = document.querySelector('#task-form');
const list = document.querySelector('.task-list');

const TASK_KEY = 'taskKey';

form.addEventListener('submit', onFormSubmit);

renderTasks()

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (inputValue === '') return;
  console.dir(inputValue);
  addTaskSubmit(inputValue);
  savetoLS(inputValue);
  e.target.reset();
}

function addTaskSubmit(inputValue) {
  const elementLi = `<li>${inputValue}</li>`;
  list.insertAdjacentHTML('beforeend', elementLi);
}

function savetoLS(inputValue) {
  const arr = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

  arr.push(inputValue);

  console.log(arr);

  const toLS = JSON.stringify(arr);
  localStorage.setItem(TASK_KEY, toLS);
}

function renderTasks() {
  const localValue = JSON.parse(localStorage.getItem(TASK_KEY));
  if (!localValue) return;
  const arrays = localValue.map((el) => `<li>${el}</li>`).join("");
  list.insertAdjacentHTML('beforeend', arrays);
}