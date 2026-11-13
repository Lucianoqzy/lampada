const lampada = document.querySelector("#lampada");
const mensagemStatus = document.querySelector("#status");
const botao = document.querySelector("#botao");

let ligada = false;

botao.addEventListener("click", () => {
    ligada = !ligada;
    lampada.classList.toggle("apagada");

    if (ligada) {
        mensagemStatus.textContent = "A lampada está acesa";
        botao.textContent = "Desligar";
    } else {
        mensagemStatus.textContent = "A lampada está apagada";
        botao.textContent = "acender";
    }
});