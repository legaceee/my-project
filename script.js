let tasks = [];
const addTask = () => {
  const taskInput = document.getElementById("task");
  const task = taskInput.value.trim();
  taskInput.value = "";
  if (task) {
    tasks.push({ text: task, completed: false });
    updateTaskList();
  }
};

const updateTaskList = () => {
  const tasList = document.getElementById("task-list");
  tasList.innerHTML = "";
  tasks.forEach((tas, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="taskItem">
          <div class="task ${tas.completed ? "completed" : ""}">
            <input type="checkbox" class="checkbox" ${
              tas.completed ? "checked" : ""
            }>
            <p class="delete" >${tas.text}</p>
          </div>
          <div class="emojis">
            <p onclick="editTask(${index})">📝</p>
            <p  onclick="deleteTask(${index})">🗑️</p> <!-- Use deleteTask function here -->
          </div>
        </div>`;

    const checkbox = listItem.querySelector(".checkbox");
    checkbox.addEventListener("change", () => toggleTaskComplete(index)); // Listen for changes on the checkbox
    tasList.append(listItem);
  });
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskList();
};
const editTask = (index) => {
  const taskInput = document.getElementById("task");
  taskInput.value = tasks[index].text;
  tasks.splice(index, 1);
  updateTaskList();
};
