function Return() {
    window.location.href = '../index.html';
}

function AddTask() {
    let title = document.getElementById("title").value;
    let term = document.getElementById("datetime").value;
    let description = document.getElementById("description").value;

    const task = {
        Title: title,
        Term: term,
        Description: description
    };

    json = JSON.stringify(task);

    localStorage.setItem("Task", json);
    clear();
}

function clear() {
    document.getElementById("title").value = '';
    document.getElementById("datetime").value = '';
    document.getElementById("description").value = '';
}