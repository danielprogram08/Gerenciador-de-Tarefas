import { CardSucess, CardAlert } from "../../Alert-Cards/Alerts.js";

// Retornar a página inicial
function Return() {
    window.location.href = '../index.html';
}

// Adicionar Tarefa
function Add() {

    let title = document.getElementById("title").value;
    let term = document.getElementById("datetime").value;
    const DateTerm = new Date(term);
    const date = new Date();
    let description = document.getElementById("description").value;
    let id = Date.now();

    const key = "Key-Application";
    const task = {
        Title: title,
        Term: term,
        Description: description,
        Id: id
    };

    console.log(DateTerm);

    // Verificação dos campos e data válida
    if (!title || !term || !description || DateTerm < date) {

        CardAlert();

    } else {

        // Verificando tarefas existentes e adicionando ao Array; 
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
        
        // Adicionando nova tarefa ao Array e ao localStorage;
        tasklist.push(task);
        localStorage.setItem(key, JSON.stringify(tasklist));

        clear();
        CardSucess();
    }
}

// Apagar todos os campos
function clear() {
    document.getElementById("title").value = '';
    document.getElementById("datetime").value = '';
    document.getElementById("description").value = '';
}

window.Return = Return;
window.Add = Add;