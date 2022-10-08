import allTask from "./tasks-array-module.js";
import localStorageUpdate from "./dynamic-storage-update.js";

const editTask = (obj, indx) => {
  obj.contentEditable = "true";
  obj.onkeydown = (event) => {
    if (event.key === "Enter") {
      obj.contentEditable = "false";
      allTask.forEach((e) => {
        if (e.index === Number(indx)) {
          e.description = obj.innerText;
        }
      });
      localStorageUpdate(allTask);
    }
  };
};

export default editTask;
