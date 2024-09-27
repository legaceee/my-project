let tasks = [];
const addTask = () => {
  const taskInput = document.getElementById("task");
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ text: task, completed: false });
    console.log(tasks);
    updateTaskList();
  }
};
/* const updateTaskList = () => {
  const tasList = document.getElementById("task-list");
  //   tasList.innerHTML = " ";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = ` <div class="taskItem">
<div class="task ${task.completed ? "completed" : ""}>
<input type="checkbox" class="checkbox"${task.completed ? "checked" : ""}>
<p>${task.text}</p>
</div>
<div class="emojis">
<p onclick="editTask(${index})">📝</p>
<p onclick="editTask(${index})">🗑️</p>
</div>
</div>`;
    listItem.addEventListener("change", () => toggleTaskComplete(index));
    tasList.append(listItem);
  });
}; */
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
            <p>${tas.text}</p>
          </div>
          <div class="emojis">
            <p onclick="editTask(${index})">📝</p>
            <p onclick="deleteTask(${index})">🗑️</p> <!-- Use deleteTask function here -->
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
