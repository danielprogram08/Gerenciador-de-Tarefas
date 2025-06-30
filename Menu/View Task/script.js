import { CardAlertDelete } from "../../Alert-Cards/Alerts.js";

// Exibindo todas as Tarefas
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
                    <button onclick="Edit()" id="edit-button">
                        <img id="edit-img" src="../../Icons/edit_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </button>
                    <button onclick="CardAlertDelete(this)" id="delete-button">
                        <img id="delete-img" src="../../Icons/delete_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
                    </button>
                </div>
            `;

            document.body.appendChild(Tasks);

            // Comparação da data e hora atuais com prazo da tarefa e implementação da lógica de negócio
            const DateNow = new Date();
            const ValidationTerm = new Date(term);
            const Term = Tasks.querySelector(`#term`);

            if (DateNow > ValidationTerm || ValidationTerm == DateNow) {
                Tasks.style.borderColor = 'red';
                Term.style.color = 'red';
            } else {
                Tasks.style.borderColor = '#00c3ff';
                Term.style.color = 'white';
            }
            
            // Adicionando tarefa selecionada para o localstorage responsável por tarefas a editar
            const taskEditKey = "EditApplication-Key";
            
            Tasks.addEventListener("mouseover", (event) => {
                const HoveredElement = event.target.closest("#title");
                if (!HoveredElement) { return; }
                localStorage.setItem(taskEditKey, JSON.stringify(task));
            });

            // Verificação de CheckBox e validando a tarefa selecionada
            const checkbox = Tasks.querySelector(`#checkbox-${task.Id}`);
                
            checkbox.addEventListener("change", (event) => {
                const checkboxMarked = event.target.checked;

                if (checkboxMarked) { 
                    Tasks.style.borderColor = '#00FF00'; 
                    Term.textContent = `𝗖𝗼𝗻𝗰𝗹𝘂í𝗱𝗼!`;
                    Term.style.color = `#00FF00`;
                } else if (DateNow > ValidationTerm || ValidationTerm == DateNow) {
                    Tasks.style.borderColor = 'red';
                    Term.textContent = `𝗣𝗿𝗮𝘇𝗼 𝗙𝗶𝗻𝗮𝗹: ${DateFormated} às ${time}`;
                    Term.style.color = 'red';
                } else { 
                    Tasks.style.borderColor = '#00c3ff';
                    Term.textContent = `𝗣𝗿𝗮𝘇𝗼 𝗙𝗶𝗻𝗮𝗹: ${DateFormated} às ${time}`;
                    Term.style.color = 'white';
                }
            });

        });

        // Botão de retorno à página inicial
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

window.CardAlertDelete = CardAlertDelete;
window.ViewTask = ViewTask;

function Edit() {
    window.location.href = './Edit Task/index.html';
}

window.Edit = Edit;

function Return () {
    window.location.href = '../index.html';
}

window.Return = Return;