const tasks = [];

const addTask = function () {
  const taskName = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;
  //Validation
  const task = { name: taskName, priority: priority };
  const isValid = validate(task);

  if (!isValid) {
    alert("Please enter a valid data");
    return;
  }

  addTaskToList(task);
  renderTaskTable();
};

const validate = function (task) {
  if (!task.name.trim()) return false;
  if (isNaN(Number(task.priority)) || Number(task.priority) < 1) return false;
  return true;
};

const addTaskToList = function (task) {
  tasks.push(task);
};

const renderTaskTable = function () {
  let tbody = "";
  for (let i = 0; i < tasks.length; i++) {
    tbody += getTableRow(i, tasks[i]);
  }
  document.getElementById("task-list").innerHTML = tbody;
};

const getTableRow = function (i, task) {
  let tr = `<tr><td>${i + 1}</td><td>${task.name.trim()}</td><td>${
    task.priority
  }</td>
  <td><button onclick="deleteTask(${i})">Delete</button></td></tr>`;
  return tr;
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) {
    return;
  }
  tasks.splice(i, 1);
  renderTaskTable();
};
