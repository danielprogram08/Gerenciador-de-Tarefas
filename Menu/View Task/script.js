function ViewTask() {

    let tasklist = localStorage.getItem("Key-Application");
    let Tasks = JSON.parse(tasklist);

    if (tasklist) {
        Tasks.forEach(task => {
            const Tasks = document.createElement("div");
            const term = task.Term;
            const parts = term.split('T');
            const dateString = parts[0];
            const date = new Date(dateString);
            const DateFormated = date.toLocaleDateString('pt-BR');
            const time = parts[1];

            Tasks.className = "tasks";
            Tasks.innerHTML = `
                <div class="titles">
                    <h1 id="title">${task.Title}</h1>
                    <p id="term">𝗣𝗿𝗮𝘇𝗼 𝗙𝗶𝗻𝗮𝗹: ${DateFormated} às ${time}</p>
                    <p id="description">${task.Description}</p>
                </div>
                <div class="buttons">
                    <div id="edit-button">
                        <img id="edit-img" src="../../Icons/edit_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </div>
                    <div id="delete-button">
                        <img id="delete-img" src="../../Icons/delete_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </div>
                </div>
            `;
        document.body.appendChild(Tasks);
        });

        const ButtonReturn = document.createElement("div");

            ButtonReturn.className = "Btn-return";
            ButtonReturn.innerHTML = `<button id="btn-return" onclick="Return()">↩︎</button>`;

        document.body.appendChild(ButtonReturn);

        } else {

            const ButtonReturn = document.createElement("div");

                ButtonReturn.className = "Btn-return";
                ButtonReturn.innerHTML = `<button id="btn-return" onclick="Return()">↩︎</button>`;

            document.body.appendChild(ButtonReturn);
        }
    }

ViewTask();

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