function ViewTask() {
    let tasklist = localStorage.getItem("Key-Application");
    let Tasks = JSON.parse(tasklist);

    Tasks.forEach(task => {
        const Tasks = document.createElement("div");

        Tasks.className = "tasks";
        Tasks.innerHTML = `
            <div class="titles">
                <h1>${task.Title}</h1>
            </div>
            <div class="buttons">
            
            </div>
        `;
    document.body.appendChild(Tasks);
    });
}

ViewTask();

const ButtonReturn = document.createElement("div");

    ButtonReturn.className = "Btn-return";
    ButtonReturn.innerHTML = `<button id="btn-return" onclick="Return()">↩︎</button>`;

document.body.appendChild(ButtonReturn);


function EditTask() {
    window.location.href = './Edit Task/index.html';
}

window.EditTask = EditTask;

function DeleteTask() {
    const StringTask = localStorage.getItem("Task");

    if (StringTask) {
        localStorage.removeItem("Task");
        location.reload();
    } else {
        console.error("Erro ao buscar tarefa!");
    }
}

window.DeleteTask = DeleteTask;

function Return () {
    window.location.href = '../index.html';
}

window.Return = Return;