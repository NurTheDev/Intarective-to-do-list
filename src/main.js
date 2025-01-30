const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");
const taskContainer = document.querySelector("#taskContainer");
const demoText = document.querySelector("#demoText");
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
  }
  taskInput.value = "";
  saveTask();
});
taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
    saveTask();
  }
  if (e.target.tagName === "IMG") {
    e.target.parentElement.parentElement.remove();
    saveTask();
  }
});
let saveTask = () => {
  localStorage.setItem("data", taskContainer.innerHTML);
};
let showTask = () => {
  const data = localStorage.getItem("data");
  if (data) {
    taskContainer.innerHTML = data;
  }
};
if (taskContainer.innerHTML == "") {
  demoText.classList.add("hidden");
}
showTask();
