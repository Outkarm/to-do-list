import "./style.css";

const toDoList = [
  {
    description: "study javascript",
    completed: false,
    index: 0,
  },
  {
    description: "complete my task",
    completed: false,
    index: 1,
  },
  {
    description: "avoid repeating the week",
    completed: true,
    index: 2,
  },
];

const toDoListContainer = document.querySelector(".to-do-list");
const task = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const item = document.createElement("div");
    item.innerHTML = `
    <div class="container" id="${toDoList[i].index}"><input type="checkbox" name=""check-box" id="check-box"><br>
    <p class="descripton">${toDoList[i].description}</p>
    </div>
    `;
    toDoListContainer.appendChild(item);
  }
};
task();
