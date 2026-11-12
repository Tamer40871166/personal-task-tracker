
// Add New Task Functionality

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
        listItem.classList.toggle("completed");
    });

    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);

    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}

document.getElementById("addButton")
    .addEventListener("click", addTask);
