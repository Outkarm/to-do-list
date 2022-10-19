import './style.css';
import allTask from '../modules/tasks-array-module.js';
import { populateAllTaskArray } from '../modules/create-tasks-array.js';
import displayTaskNode, { toDoList } from '../modules/display-task-node.js';
import localStorageUpdate from '../modules/dynamic-storage-update.js';
import reOrderTasks from '../modules/re-order-tasks.js';

const taskInput = document.querySelector('#task');
const resetBtn = document.querySelector('#reset-button');
const clearCompleted = document.querySelector('#clear-btn');

allTask.forEach((e) => {
  displayTaskNode(e);
});

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (taskInput.value.length <= 1) {
      return;
    }
    populateAllTaskArray(taskInput.value);
    taskInput.value = '';
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  allTask.splice(allTask[0]);
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
});

clearCompleted.addEventListener('click', () => {
  const filterComplete = allTask.filter((e) => e.completed === false);
  reOrderTasks(filterComplete);
  localStorageUpdate(filterComplete);

  window.location.reload();
});
