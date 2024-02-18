import { getLocalStorage, setLocalStorage } from './ls-helpers';

export function removeElements(TASK_KEY, list) {
  list.addEventListener('click', onDeleteElement);

  function onDeleteElement(e) {
    if (e.target.nodeName !== 'BUTTON') return;

    const keysArray = getLocalStorage(TASK_KEY);
    const newArray = keysArray.filter(
      elem => e.target.parentNode.id !== elem.id
    );
    setLocalStorage(TASK_KEY, newArray);

    e.target.parentNode.remove();
  }
}
