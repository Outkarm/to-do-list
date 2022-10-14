// import allTask from "../modules/tasks-array-module";
// import localStorageUpdate from "../modules/dynamic-storage-update";
/* eslint-disable */
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

const checkCompleted = (nod) => {
  const checker = nod.querySelector("input");

  const indexHolder = Number(nod.dataset.index);
  const descriptionHolder = nod.querySelector(".description");

  if (checker.checked) {
    nod.dataset.completed = true;
    allTask.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = true;
      }
    });
    descriptionHolder.classList.add("cross-out");
  } else {
    nod.dataset.completed = false;
    allTask.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = false;
      }
    });
    descriptionHolder.classList.remove("cross-out");
  }
  localStorageUpdate(allTask);
};

export default { checkCompleted, editTask };
