import allTask from "./tasks-array-module.js";
import localStorageUpdate from "./dynamic-storage-update.js";
import reOrderTasks from "./re-order-tasks.js";

const removeNode = (obj, currNode) => {
  let flag = 0;
  allTask.forEach((e) => {
    if (e.index === obj) {
      flag = allTask.indexOf(e);
      currNode.parentNode.removeChild(currNode.nextSibling);
      currNode.parentNode.removeChild(currNode);
    }
  });
  allTask.splice(flag, 1);
  reOrderTasks(allTask);
  localStorageUpdate(allTask);
};

export default removeNode;
