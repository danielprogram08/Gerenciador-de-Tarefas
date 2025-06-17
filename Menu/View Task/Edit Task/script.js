import { CardAlert, CardSucess } from "../../../Alert-Cards/Alerts.js";

function Return() {
    window.location.href = '../index.html';
}

window.Return = Return;

function EditTask() {
    
    let NewTitle = document.getElementById("NewTitle").value;
    let NewTerm = document.getElementById("NewDateTime").value;
    let NewDescription = document.getElementById("NewDescription").value;
    const EditTask = JSON.parse(localStorage.getItem("EditApplication-Key"));
    const Task = JSON.parse(localStorage.getItem("Key-Application"));
    const KeyApplication = "Key-Application";

    if (!NewTitle || !NewTerm || !NewDescription) {
        CardAlert();
    } else {

        //Adicionando outras tarefas a lista;
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
        
        const EditedTask = Task.find(task => task.Id == EditTask.Id);

        if (EditedTask) {

            //Editando tarefa e atualizando o localstorage;
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
window.EditTask = EditTask;

function clear() {
    document.getElementById("NewTitle").value = '';
    document.getElementById("NewDateTime").value = '';
    document.getElementById("NewDescription").value = '';
}