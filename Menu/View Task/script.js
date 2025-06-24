import { DeleteTask } from "./Delete Task/script.js";

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
                <label class="checkbox-container">
                    <input type="checkbox" id="checkbox-${task.Id}">
                    <span class="checkmark"></span>
                </label>

                <div class="titles">
                    <h1 id="title">${task.Title}</h1>
                    <p id="term">𝗣𝗿𝗮𝘇𝗼 𝗙𝗶𝗻𝗮𝗹: ${DateFormated} às ${time}</p>
                    <p id="description">${task.Description}</p>
                </div>
                
                <div class="buttons">
                    <button onclick="EditTask()" id="edit-button">
                        <img id="edit-img" src="../../Icons/edit_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </button>
                    <button onclick="DeleteTask()" id="delete-button">
                        <img id="delete-img" src="../../Icons/delete_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </button>
                </div>
            `;

            document.body.appendChild(Tasks);
            
            const taskEditKey = "EditApplication-Key";
            
            Tasks.addEventListener("mouseover", function (event) {
                const HoveredElement = event.target.closest("#title");
                if (!HoveredElement) { return; }
                localStorage.setItem(taskEditKey, JSON.stringify(task));
            });

            const checkbox = Tasks.querySelector(`#checkbox-${task.Id}`);

            if (checkbox) {
                checkbox.addEventListener("change", function (event) {
                    const checkboxMarked = event.target.checked;
                    if (checkboxMarked) { Tasks.style.borderColor = 'green';} 
                    else { Tasks.style.borderColor = '#00c3ff';}
                });
            } else {
                console.error("Elemento não encontrado!");
            }

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

window.DeleteTask = DeleteTask;
window.ViewTask = ViewTask;

function EditTask() {
    window.location.href = './Edit Task/index.html';
}

window.EditTask = EditTask;

function Return () {
    window.location.href = '../index.html';
}

window.Return = Return;