export function DeleteTask() {

    const DeleteTask = JSON.parse(localStorage.getItem("EditApplication-Key"));
    const Task = JSON.parse(localStorage.getItem("Key-Application"));
    const KeyApplication = "Key-Application";

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

    const DeletedTask = Task.find(task => task.Id == DeleteTask.Id);

    //Deletando tarefa e atualizando o localstorage;
    if (DeletedTask) {
        tasklist.splice(DeletedTask, 1);
        localStorage.setItem(KeyApplication, JSON.stringify(tasklist));
        window.location.reload();
    } else {
        console.error("Erro ao encontrar tarefa");
    }
}