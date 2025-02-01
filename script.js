function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task! ✍️");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    let taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}
