import { getLocalStorage } from './ls-helpers';

export function renderTasks(TASK_KEY, list) {
  const localValue = getLocalStorage(TASK_KEY);
  if (!localValue) return;
  const arrays = localValue
    .map(
      el => `<li id='${el.id}'>${el.text} <button type='button'>X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', arrays);
}
