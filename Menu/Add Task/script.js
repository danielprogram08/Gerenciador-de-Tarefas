import { CardSucess, CardAlert } from "../../Alert-Cards/Alerts.js";

function Return() {
    window.location.href = '../index.html';
}

function AddTask() {
    let title = document.getElementById("title").value;
    let term = document.getElementById("datetime").value;
    let description = document.getElementById("description").value;

    if (title == "" && term == "" && description == "" || title == "" || term == "" || description == "") {
        CardAlert();
    } else {
        const task = {
            Title: title,
            Term: term,
            Description: description
        };
    
        const json = JSON.stringify(task);
    
        localStorage.setItem("Task", json);
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