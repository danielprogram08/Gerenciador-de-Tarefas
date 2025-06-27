import { CardAlert, CardSucess } from "../../../Alert-Cards/Alerts.js";

function Return() {
    window.location.href = '../index.html';
}

window.Return = Return;

// Editar Tarefa
function Edit() {
    
    let NewTitle = document.getElementById("NewTitle").value;
    let NewTerm = document.getElementById("NewDateTime").value;
    const DateTerm = new Date(NewTerm);
    const date = new Date();
    let NewDescription = document.getElementById("NewDescription").value;
    const EditTask = JSON.parse(localStorage.getItem("EditApplication-Key"));
    const Task = JSON.parse(localStorage.getItem("Key-Application"));
    const KeyApplication = "Key-Application";

    // Validação dos campos e data válida
    if (!NewTitle || !NewTerm || !NewDescription || DateTerm < date) {

        CardAlert();
        
    } else {

        // Adicionando tarefas existentes ao Array
        let tasklist = [];

        try {
            tasklist = Task;
            if (!Array.isArray(tasklist)) {
                tasklist = [];
            }
        } catch (error) {
            console.error(error);
            tasklist = [];
        }
        
        // Editando tarefa e atualizando o localstorage
        const EditedTask = Task.find(task => task.Id == EditTask.Id);

        if (EditedTask) {

            Task.splice(EditedTask, 1);
            EditTask.Title = NewTitle;
            EditTask.Term = NewTerm;
            EditTask.Description = NewDescription;
            
            tasklist.push(EditTask);
            localStorage.setItem(KeyApplication, JSON.stringify(tasklist));

            clear();
            CardSucess();
            
        } else {
            console.error("Erro ao encontrar tarefa!");
        }
    }
}

window.Edit = Edit;

function clear() {
    document.getElementById("NewTitle").value = '';
    document.getElementById("NewDateTime").value = '';
    document.getElementById("NewDescription").value = '';
}