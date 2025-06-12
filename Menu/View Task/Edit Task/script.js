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

    if (!NewTitle || !NewTerm || !NewDescription) {
        CardAlert();
    } else {
        const Object = Task.find(task => task.Id == EditTask.Id);
        if (Object) {
            Object.Title = NewTitle;
            Object.Term = NewTerm;
            Object.Description = NewDescription;
            clear();
            CardSucess();
            console.log(Object);
        }
    }
}
window.EditTask = EditTask;

function clear() {
    document.getElementById("NewTitle").value = '';
    document.getElementById("NewDateTime").value = '';
    document.getElementById("NewDescription").value = '';
}