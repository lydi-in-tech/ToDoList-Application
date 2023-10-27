let newTask = document.querySelector("#push");
let inputElement = document.querySelector('#new-task input');

newTask.addEventListener('click', addNewTask);

function addNewTask() {
    if (inputElement.value.length == 0) {
        alert("Please Enter a Task");
    }
}