// Aca voy a hacer un carrito

let botones = document.querySelectorAll(".comprar");
let carrito = document.querySelector(".card-carrito");

var total = 0;
let burgaPrecioFinal = "";

botones.forEach(boton => {
    boton.addEventListener("click", anadir);
});

function anadir(event){
    card = event.target.closest(".card");
    console.log(card);

    card.querySelector(".card-title").innerHTML;
    let cardBurga = cardBurgaIncial.cloneNode(true);
    
    cardBurga.querySelector("input").value = 1;

    cardBurga.querySelector(".titulo").innerHTML = card.querySelector(".card-title").innerHTML;
    cardBurga.querySelector(".card-burga-carrito img").src = card.querySelector(".imagen img").src;
    let precio = card.querySelector(".precio").innerHTML;
    cardBurga.querySelector(".precio").innerHTML = precio;

    carrito.prepend(cardBurga);

    funcTotal();

    function funcTotal(){
        let burgas = document.querySelectorAll(".card-burga-carrito");
        total=0;
        burgas.forEach(burga => {
            let burgaPrecio = burga.querySelector(".precio").innerHTML;
            burgaPrecioFinal = "";
            for(let i = 1; i<burgaPrecio.length; i++){
                burgaPrecioFinal = burgaPrecioFinal+burgaPrecio[i];
            }
            console.log(burgaPrecioFinal);
            total = total+(burgaPrecioFinal * burga.querySelector("input").value)
        })
        console.log(total)
        carrito.querySelector(".precio-total").innerHTML = "Total: $" + total;
    }
}

function funcTotal(){
    let burgas = document.querySelectorAll(".card-burga-carrito");
    total=0;
    burgas.forEach(burga => {
        let burgaPrecio = burga.querySelector(".precio").innerHTML;
        burgaPrecioFinal = "";
        for(let i = 1; i<burgaPrecio.length; i++){
            burgaPrecioFinal = burgaPrecioFinal+burgaPrecio[i];
        }
        console.log(burgaPrecioFinal);
        total = total+(burgaPrecioFinal * burga.querySelector("input").value)
    })
    console.log(total)

    carrito.querySelector(".precio-total").innerHTML = "Total: $" + total;
}

var cardBurgaIncial = document.querySelector(".card-burga-carrito").cloneNode(true);
document.querySelector(".card-burga-carrito").remove();