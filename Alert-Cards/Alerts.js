import { Delete } from "../Menu/View Task/Delete Task/script.js";

// Card -> Cadastrado com Sucesso!
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

// Card -> Alerta sobre os campos!
export function CardAlert() {
    const alert = document.createElement("div");

    alert.className = "CardAlert";
    alert.innerHTML = "<h2>Campos vazios ou data inválida. Tente novamente!</h2>";

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

// Card -> Alerta de Exclusão de Tarefa!
export function CardAlertDelete() {
    const alert = document.createElement("div");

    alert.className = "CardAlert";
    alert.innerHTML = `
        <h2>Tem certeza que deseja excluir esta tarefa ?</h2>
        <div id="buttons">
            <button onclick="Delete()">Sim</button>
            <button>Não</button>
        </div>
    `

    document.body.insertBefore(alert, document.body.firstChild);

    setTimeout(() => {
        alert.style.top = "0";
    }, 20);   
}

window.Delete = Delete;