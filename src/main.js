import { nanoid } from 'nanoid';

console.log(nanoid());

const form = document.querySelector('#task-form');
const list = document.querySelector('.task-list');

const TASK_KEY = 'taskKey';

form.addEventListener('submit', onFormSubmit);

renderTasks();

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.elements.taskName.value.trim();
  if (inputValue === '') return;

  const id = nanoid();

  addTaskSubmit(inputValue, id);

  savetoLS(inputValue, id);

  e.target.reset();
}

function addTaskSubmit(inputValue, id) {
  const elementLi = `<li id='${id}'>${inputValue} <button type='button'>X</button></li>`;
  list.insertAdjacentHTML('beforeend', elementLi);
}

function savetoLS(inputValue, id) {
  const arr = getLocalStorage(TASK_KEY) || [];

  arr.push({
    text: inputValue,
    id,
  });

  setLocalStorage(TASK_KEY, arr);
}

function renderTasks() {
  const localValue = getLocalStorage(TASK_KEY);
  if (!localValue) return;
  const arrays = localValue
    .map(
      el => `<li id='${el.id}'>${el.text} <button type='button'>X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', arrays);
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

list.addEventListener('click', onDeleteElement);

function onDeleteElement(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  e.target.parentNode.remove();
}
