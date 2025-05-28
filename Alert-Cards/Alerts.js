// Add Task;
export function CardSucess() {
    const card = document.createElement("div");

    card.className = "CardSucess";
    card.innerHTML = `<h2>Tarefa cadastrada com sucesso!</h2>`;

    document.body.insertBefore(card, document.body.firstChild);

    setTimeout(() => {
        card.style.top = "0";
    }, 20);

    setTimeout(() => {
        card.style.top = "-100px"
        setTimeout(() => {
            card.remove();
        }, 2000);
    }, 3000);
}

export function CardAlert() {
    const alert = document.createElement("div");

    alert.className = "CardAlert";
    alert.innerHTML = "<h2>Preencha todos os campos!</h2>";

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.top = "0";
    }, 20);

    setTimeout(() => {
        alert.style.top = "-100px"
        setTimeout(() => {
            alert.remove();
        }, 2000);
    }, 3000);
}