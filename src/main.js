import { setLocalStorage, getLocalStorage } from './js/ls-helpers.js';
import './js/remove-elements.js';
import refs from './js/refs.js';
import { TASK_KEY } from './js/constants.js';

import { nanoid } from 'nanoid';

const { form, list } = refs;

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
