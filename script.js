const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const boa = document.querySelector("#boa"); 
const back = document.querySelector("#back"); 
//event
setInterval(atualizar_relogio);

//função
function atualizar_relogio ()  {
    let agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();
    let dd = agora.getDate();
    let mm = agora.getMonth() + 1;
    let yy = agora.getFullYear();

    mostrar_horas(h,m,s);
    mostrar_data(dd,mm,yy);
    periodo_dia(h);

}

    function mostrar_horas (h,m,s) {

        horas.textContent= h;
        minutos.textContent = m;
        segundos.textContent = s;


    if (h < 10) {
        horas.textContent = "0" + h;
    }
    if (m < 10) {
        minutos.textContent = "0" + m;
    }
    if (s < 10) {
        segundos.textContent = "0" + s;
    }

}

function mostrar_data (dd,mm,yy){

    dia.textContent = dd;
    mes.textContent = mm;
    ano.textContent = yy;

    if (mm <= 10) {
        mes.textContent = "0" + mm;
    }

    if (dd < 10) {
        dia.textContent= "0" + dd;
    }
   
    
}

  
function periodo_dia (h){
    


    let bom;
    let imageurl;

    if (h >= 5 && h < 12) {
        bom = "bom dia";
        animationName = "weather1";
        imageurl ="../images/sky.jpg";
    } else if (h >= 12 && h < 18) {
        bom = "boa tarde";
        animationName = "weather2";
        imageurl = "../images/por_do_sol.jpeg";
    } else {
        bom = "boa noite";
        animationName = "weather3";
        imageurl = "../images/lua_cheia.jpg";
    }

    boa.textContent = bom;
    back.style.backgroundImage = "url('" + imageurl + "')";
    back.style.animationName = animationName;

    
}

