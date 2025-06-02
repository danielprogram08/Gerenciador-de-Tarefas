import { CardAlert, CardSucess } from "../../../Alert-Cards/Alerts.js";

function Return() {
    window.location.href = '../index.html';
}
window.Return = Return;

function EditTask() {
    let NewTitle = document.getElementById("NewTitle").value;
    let NewTerm = document.getElementById("NewDateTime").value;
    let NewDescription = document.getElementById("NewDescription").value;

    if (NewTitle == "" && NewTerm == "" && NewDescription == "" || NewTitle == "" || NewTerm == "" || NewDescription == "") {
        CardAlert();
    } else {
        const task = {
            Title: NewTitle,
            Term: NewTerm,
            Description: NewDescription
        };
    
        const json = JSON.stringify(task);
    
        localStorage.setItem("Task", json);
        clear();
        CardSucess();
    }
}
window.EditTask = EditTask;

function clear() {
    document.getElementById("NewTitle").value = '';
    document.getElementById("NewDateTime").value = '';
    document.getElementById("NewDescription").value = '';
}