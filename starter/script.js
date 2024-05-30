const currentDate = document.getElementById("currentDate");
const taskDescription = document.getElementById("taskDescription");
const taskTime = document.getElementById("taskTime");
const addTask = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

class ToDo {
  constructor(_description, _time) {
    this.description = _description;
    this.time = _time;
  }
}

function addCurrentDateToScreen() {
  const now = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = months[now.getMonth()];
  const dayOfWeek = days[now.getDay()];
  const year = now.getFullYear();
  const dayOfMonth = now.getDate();

  currentDate.innerText = `Today is ${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
}

const tasks = loadTasksFromLocalStorage();

function getDate() {
  if (taskDescription.value.trim() === "" || taskTime.value.trim() === "") {
    alert("Please add task description and time.");
    return;
  }

  const task = new ToDo(taskDescription.value, taskTime.value);
  tasks.push(task);
  saveTasksToLocalStorage();
  addDateToDom();
  taskDescription.value = "";
  taskTime.value = "";
}

function addDateToDom() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const liItem = document.createElement("li");
    const listBtn = document.createElement("button");

    liItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    liItem.innerText = `${task.time}: Task ${task.description}`;

    const taskTimeParts = task.time.split(":");
    console.log(taskTimeParts);
    const taskHours = parseInt(taskTimeParts[0], 10);
    const taskMinutes = parseInt(taskTimeParts[1], 10);

    listBtn.classList.add("btn", "btn-danger");
    listBtn.innerText = "Remove";

    listBtn.addEventListener("click", function () {
      const deleteConfirmation = confirm(
        "Are you sure you want to delete this task?"
      );

      if (deleteConfirmation) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
        addDateToDom();
      }
    });

    taskList.appendChild(liItem);
    liItem.appendChild(listBtn);

    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    if (
      taskHours < currentHours ||
      (taskHours === currentHours && taskMinutes <= currentMinutes)
    ) {
      liItem.classList.add("bg-warning", "bg-opacity-25", "text-dark");
    }
  });
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateTasks() {
  setInterval(addDateToDom, 1000);
}

addTask.addEventListener("click", getDate);
addCurrentDateToScreen();
addDateToDom();

updateTasks();
