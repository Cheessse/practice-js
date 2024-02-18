import { setLocalStorage, getLocalStorage } from './js/ls-helpers.js';
import refs from './js/refs.js';
import { TASK_KEY } from './js/constants.js';
import { renderTasks } from './js/render.js';
import { removeElements } from './js/remove-elements.js';

import { nanoid } from 'nanoid';

const { form, list } = refs;

form.addEventListener('submit', onFormSubmit);

renderTasks(TASK_KEY, list);
removeElements(TASK_KEY, list);

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
