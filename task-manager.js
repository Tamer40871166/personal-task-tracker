
// Personal Task Tracker
// Add, Complete and Delete Tasks

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

    // Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function () {
        listItem.classList.toggle("completed");

        completeButton.textContent =
            listItem.classList.contains("completed")
                ? "Undo"
                : "Complete";
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}

// Connect Add Task button
document.getElementById("addButton")
    .addEventListener("click", addTask);

console.log("Task Manager loaded successfully!");
