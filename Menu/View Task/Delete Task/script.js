export function Delete() {

    const TaskToDelete = JSON.parse(localStorage.getItem("EditApplication-Key"));
    let Tasks = JSON.parse(localStorage.getItem("Key-Application"));
    const KeyApplication = "Key-Application";

    // Verificando a Lista de Tarefas se é um Array válido;
    if (!Array.isArray(Tasks)) {
        console.error(Tasks + " não é um Array.");
        Tasks = [];

    } else {

        // Deletando a tarefa e atualizando o localstorage;
        const IndexToDeleted = Tasks.findIndex(task => task.Id == TaskToDelete.Id);
        if (IndexToDeleted != -1) {
            Tasks.splice(IndexToDeleted, 1);
            localStorage.setItem(KeyApplication, JSON.stringify(Tasks));
            window.location.reload();

        } else {
            console.error("Tarefa não encontrada!");
        }
    }
}