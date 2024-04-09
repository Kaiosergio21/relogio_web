const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const boa = document.querySelector("#boa");
const back = document.querySelector("#back");

//event
setInterval(updateClock);

//função
function updateClock() {
    let agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();
    let dd = agora.getDate();
    let mm = agora.getMonth() + 1;
    let yy = agora.getFullYear();

    // Display hours, minutes, and seconds
    horas.textContent = (h < 10) ? "0" + h : h;
    minutos.textContent = (m < 10) ? "0" + m : m;
    segundos.textContent = (s < 10) ? "0" + s : s;

    // Display day, month, and year
    dia.textContent = (dd < 10) ? "0" + dd : dd;
    mes.textContent = (mm < 10) ? "0" + mm : mm;
    ano.textContent = yy;

    // Determine time of day and update background and message
    let bom;
    let imageurl;

    if (h >= 5 && h < 12) {
        bom = "bom dia";
        imageurl = "../images/sky.jpg";
    } else if (h >= 12 && h < 18) {
        bom = "boa tarde";
        imageurl = "../images/por_do_sol.jpeg";
    } else {
        bom = "boa noite";
        imageurl = "../images/lua_cheia.jpg";
    }

    boa.textContent = bom;
    back.style.backgroundImage = "url('" + imageurl + "')";
}
