function ViewTask() {

    const StringTask = localStorage.getItem("Task");

    if (StringTask) {

        const Task = JSON.parse(StringTask);
        const datehour = Task.Term;
        const parts = datehour.split('T');
        const date = parts[0];
        const hour = parts[1];
        const DateHour = new Date(date);
        const DateFormated = DateHour.toLocaleDateString('pt-br');
        
        let task = document.createElement("div");

        task.className = "task";
        task.innerHTML = `
        <div class="titles">
            <h1>${Task.Title}</h1>
            <h4>${"Data: " + DateFormated + "<br>Hora: " + hour}</h4>
            <h4>${Task.Description}</h4>
        </div>
        <div class="buttons">
            <button id="edit-button" onclick="EditTask()">
                <img src="../../Icons/edit_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
            </button>
            <button id="delete-button">
                <img src="../../Icons/delete_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
            </button>
        </div>`;

        document.body.appendChild(task);
        
    } else {
        console.error("Erro ao tentar acessar a tarefa.");
    }
}
ViewTask();

function EditTask() {
    window.location.href = './Edit Task/index.html';
}

window.EditTask = EditTask;