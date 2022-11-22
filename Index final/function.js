let cardCarrito = document.querySelector(".card-carrito");
let botonCarrito = document.querySelector(".navbar-carrito");
let botonanadir = document.querySelectorAll(".card-body a");
var isDesplegado = false;

botonCarrito.addEventListener("click", desplegar);
botonanadir.forEach(boton => {
    boton.addEventListener("click", () => {
        cardCarrito.style = "display:block";
        isDesplegado = true;
    })
})

function desplegar(){
    if(isDesplegado){
        cardCarrito.style = "display:none";
        isDesplegado = false;
    }
    else{
        cardCarrito.style = "display:block";
        isDesplegado = true;
    }
}