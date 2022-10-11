import NewTaskTemplate from './task-template.js';
import localStorageUpdate from './dynamic-storage-update.js';
import reOrderTasks from './re-order-tasks.js';
import displayTaskNode from './display-task-node.js';
import allTask from './tasks-array-module.js';

export const populateAllTaskArray = (describe) => {
  localStorageUpdate(allTask);
  const newTaskObject = new NewTaskTemplate(describe);
  allTask.push(newTaskObject);
  reOrderTasks(allTask);
  displayTaskNode(newTaskObject);
  localStorageUpdate(allTask);
};

export default populateAllTaskArray;
