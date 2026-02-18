const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

button.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;
  li.style.color = "#1186b9";
  li.style.fontSize = "16px";
  li.setAttribute("class", "task-item");
  taskList.append(li);
  li.addEventListener("click", function () {
    li.remove();
  });
  input.value = "";
});
