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