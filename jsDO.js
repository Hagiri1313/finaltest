const INPUT = document.getElementById("message");
const ADD_BUTTON = document.getElementById("add");
const ADD_TODO_TASK = document.getElementById("todo");
let arrTasks = [];

ADD_BUTTON.addEventListener("click", function addTask() {
    let task = {
        todo:INPUT.value
    }
    arrTasks.push(task);
    showTasksToDisplay();
});

function showTasksToDisplay() {
    let TaskToD = ""
    arrTasks.forEach(function(item, index) {
       TaskToD += `<li class="asf">
       
            <label for="item1${index}">${item.todo}</label>
        </li>`;

        ADD_TODO_TASK.innerHTML = TaskToD

    })

}

ADD_TODO_TASK.addEventListener("click", function deleteMassege(event){
    event.preventDefault();
    arrTasks.forEach(function (item, index) {
        if (item.todo === event.target.innerHTML){
            arrTasks.splice(index,1);
            showTasksToDisplay();
        }
    })
})