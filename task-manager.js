
// Personal Task Tracker

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

        if (listItem.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }

    });

    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);

    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}

// Connect Add Task button
document.getElementById("addButton").addEventListener("click", addTask);

console.log("Task Manager JavaScript loaded successfully!");
