import { TASK_KEY } from './js/constants';
import { renderTasks } from './js/render';
import refs from './js/refs';
import { removeElements } from './js/remove-elements';

renderTasks(TASK_KEY, refs.favoriteList);
removeElements(TASK_KEY, refs.favoriteList);
