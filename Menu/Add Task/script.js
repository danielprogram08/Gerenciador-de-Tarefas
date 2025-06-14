import { CardSucess, CardAlert } from "../../Alert-Cards/Alerts.js";

function Return() {
    window.location.href = '../index.html';
}

function AddTask() {

    let title = document.getElementById("title").value;
    let term = document.getElementById("datetime").value;
    let description = document.getElementById("description").value;
    let id = Date.now();

    const key = "Key-Application";
    const task = {
        Title: title,
        Term: term,
        Description: description,
        Id: id
    };

    if (!title || !term || !description) {
        CardAlert();
    } else {

        //Verificando tarefas existentes; 
        let tasklist = [];
        const StorageTasks = localStorage.getItem(key);
        if (StorageTasks) {
            try {
                tasklist = JSON.parse(StorageTasks);
                if (!Array.isArray(tasklist)) {
                    tasklist = [];
                }
            } catch (error) {
                console.error("Erro ao tentar converter ")
                tasklist = [];
            }
        }
        
        //Adicionando nova tarefa;
        tasklist.push(task);
        localStorage.setItem(key, JSON.stringify(tasklist));

        clear();
        CardSucess();
    }
}

function clear() {
    document.getElementById("title").value = '';
    document.getElementById("datetime").value = '';
    document.getElementById("description").value = '';
}

window.Return = Return;
window.AddTask = AddTask;