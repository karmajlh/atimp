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

function abrirVentanaWhatsApp() {

    const ventana =
        document.getElementById(
            "ventanaWhatsApp"
        );
    ventana.style.display = "flex";
    document
        .getElementById("numeroWhatsApp")
        .focus();
}

function cerrarVentanaWhatsApp() {

    document
        .getElementById("ventanaWhatsApp")
        .style.display = "none";

}


function enviarWhatsApp() {

    const campo =
        document.getElementById(
            "numeroWhatsApp"
        );


    const numero =
        campo.value.trim();

    if (!/^\d{9}$/.test(numero)) {

        alert(
            "Ingrese un número válido de 9 dígitos."
        );

        campo.focus();

        return;

    }


    const enlace =
        window.location.href;


    const mensaje =
`Hola, ingrese al siguiente enlace y seleccione el nombre del especialista informático que desea contactar:

${enlace}

Saludos.`;

    const url =
        "https://wa.me/51" +
        numero +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(
        url,
        "_blank"
    );


    cerrarVentanaWhatsApp();

    campo.value = "";

}


window.addEventListener(
    "click",
    function(event) {

        const ventana =
            document.getElementById(
                "ventanaWhatsApp"
            );


        if (event.target === ventana) {

            cerrarVentanaWhatsApp();

        }

    }
);



document.addEventListener(
    "keydown",
    function(event) {

        const ventana =
            document.getElementById(
                "ventanaWhatsApp"
            );


        if (
            event.key === "Enter" &&
            ventana.style.display === "flex"
        ) {

            enviarWhatsApp();

        }

    }
);


