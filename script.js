const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", function(){

let texto = buscar.value.toLowerCase();

let tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(card=>{

let nombre = card.innerText.toLowerCase();

if(nombre.includes(texto))

card.style.display="block";

else

card.style.display="none";

});

});






const boton = document.getElementById("btnConexion");

if (disponible) {
    estado.innerHTML = "🟢 Disponible";
    estado.style.color = "#28a745";

    boton.style.pointerEvents = "auto";
    boton.style.opacity = "1";
    boton.href = "https://anydesk.com"; // o el enlace que uses
} else {
    estado.innerHTML = "🔴 No disponible";
    estado.style.color = "#dc3545";

    boton.style.pointerEvents = "none";
    boton.style.opacity = "0.5";
    boton.removeAttribute("href");
}


function actualizarEstado() {

    const estado = document.getElementById("estado");
    const enlace = document.getElementById("btnConexion");
    const boton = document.getElementById("botonConexion");

    const ahora = new Date();

    const dia = ahora.getDay(); //0=Domingo
    const hora = ahora.getHours();
    const minuto = ahora.getMinutes();

    const horaActual = hora + minuto / 60;

    // Lunes a Viernes
    const esDiaLaboral = dia >= 1 && dia <= 5;

    // 08:00 - 16:00
    const disponible = esDiaLaboral &&
                       horaActual >= 8 &&
                       horaActual < 16;

    if (disponible) {

        estado.innerHTML = "🟢 Disponible";
        estado.style.color = "#28a745";

        enlace.href = "https://meet.google.com/gxm-ejjm-nea";
        enlace.target = "_blank";

        boton.disabled = false;
        boton.innerHTML = "💻 Conectarse";
        boton.classList.remove("deshabilitado");

    } else {

        estado.innerHTML = "🔴 No disponible";
        estado.style.color = "#dc3545";

        enlace.removeAttribute("href");
        enlace.removeAttribute("target");

        boton.disabled = true;
        boton.innerHTML = "💻 No disponible";
        boton.classList.add("deshabilitado");

    }

}

actualizarEstado();
setInterval(actualizarEstado,60000);
