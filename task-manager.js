
// Add New Task Functionality

function addTask() {

    // Get the task input
    const input = document.getElementById("taskInput");

    // Get the task name
    const task = input.value.trim();

    // Prevent empty tasks
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Set the task text
    listItem.textContent = task;

    // Add task to the list
    document.getElementById("taskList")
        .appendChild(listItem);

    // Clear the input
    input.value = "";

    console.log("Task added: " + task);
}

// Connect button to function
document.getElementById("addButton")
    .addEventListener("click", addTask);
