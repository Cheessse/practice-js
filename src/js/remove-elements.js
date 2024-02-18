import { getLocalStorage, setLocalStorage } from './ls-helpers';
import { TASK_KEY } from './constants';

import refs from './refs.js';
const { list } = refs;

list.addEventListener('click', onDeleteElement);

function onDeleteElement(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const keysArray = getLocalStorage(TASK_KEY);
  const newArray = keysArray.filter(elem => e.target.parentNode.id !== elem.id);
  setLocalStorage(TASK_KEY, newArray);

  e.target.parentNode.remove();
}
