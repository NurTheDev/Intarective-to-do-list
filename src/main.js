const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");
const taskContainer = document.querySelector("#taskContainer");
const demoText = document.querySelector("#demoText");
const count = document.querySelector("#count");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("Please enter any task first");
  } else {
    const li = document.createElement("li");
    li.classList.add("task");
    li.textContent = taskInput.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "<img src='./public/close.svg' />";
    li.appendChild(span);
    taskInput.value = "";
    saveTask();
    toggleDemoText();
    updateCount(1);
  }
});

let updateCount = (change) => {
  const currentCount = parseInt(count.innerText);
  const newCount = currentCount + change;
  count.innerText = newCount;
};
taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
    saveTask();
  }
  if (e.target.tagName === "IMG") {
    e.target.parentElement.parentElement.remove();
    saveTask();
    toggleDemoText();
    updateCount(-1);
  }
});
let saveTask = () => {
  localStorage.setItem("task", taskContainer.innerHTML);
};
let showTask = () => {
  const task = localStorage.getItem("task");
  if (task) {
    taskContainer.innerHTML = task;
  }
  toggleDemoText();
};
let toggleDemoText = () => {
  if (taskContainer.innerHTML === "") {
    demoText.classList.remove("hidden");
    count.innerContent = 0;
  } else {
    demoText.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", showTask);
