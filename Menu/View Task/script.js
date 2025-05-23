function ViewTask() {
    const StringTask = localStorage.getItem("Task");

    if (StringTask) {
        const Task = JSON.parse(StringTask);
        let task = document.createElement("div");

        task.className = "task";
        task.innerHTML = `
            <h1>${Task.Title}</h1>
            <div id="descriptions">
                <h4>${Task.Term}</h4>
                <h4>${Task.Description}</h4>
            </div>
        `;

        document.body.appendChild(task);
    } else {
        console.error("Erro ao tentar acessar a tarefa.");
    }
}

ViewTask();