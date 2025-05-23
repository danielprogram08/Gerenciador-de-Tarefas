function ViewTask() {
    const StringTask = localStorage.getItem("Task");

    if (StringTask) {
        const Task = JSON.parse(StringTask);
        let task = document.createElement("div");

        task.className = "task";
        task.innerHTML = `
        
            <h1>${Task.Title}</h1>
            <h4>${Task.Term}</h4>
            <h4>${Task.Description}</h4>
            <button id="edit-button">
                <img src="../../icons/edit_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
            </button>
            <button id="delete-button">
                <img src="../../icons/delete_16dp_E3E3E3_FILL0_wght400_GRAD0_opsz20.png">
            </button>
        `;

        document.body.appendChild(task);
    } else {
        console.error("Erro ao tentar acessar a tarefa.");
    }
}

ViewTask();