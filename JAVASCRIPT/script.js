const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const boa = document.querySelector("#boa");
const back = document.querySelector("#back");

// Evento de atualização do relógio a cada segundo
setInterval(updateClock, 1000);

// Função para atualizar o relógio
function updateClock() {
    let agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();
    let dd = agora.getDate();
    let mm = agora.getMonth() + 1;
    let yy = agora.getFullYear();

    // Exibição de horas, minutos e segundos
    horas.textContent = (h < 10) ? "0" + h : h;
    minutos.textContent = (m < 10) ? "0" + m : m;
    segundos.textContent = (s < 10) ? "0" + s : s;

    // Exibição de dia, mês e ano
    dia.textContent = (dd < 10) ? "0" + dd : dd;
    mes.textContent = (mm < 10) ? "0" + mm : mm;
    ano.textContent = yy;

    // Determinação do momento do dia e atualização da animação de fundo e da mensagem
    let bom;
    let momento;

    if (h >= 5 && h < 12) {
        bom = "bom dia";
        momento = 'weather1';
    } else if (h >= 12 && h < 18) {
        bom = "boa tarde";
        momento = 'weather2';
    } else {
        bom = "boa noite";
        momento = 'weather3';
    }

    boa.textContent = bom;
    updateBackground(momento);
}

// Função para atualizar a classe do fundo
function updateBackground(momento) {
    back.classList.remove('weather1', 'weather2', 'weather3'); // Remove todas as classes de momento
    back.classList.add(momento); // Adiciona a classe do momento atual
}
