const productos = [
    {nombre: "Taza", precio: 200},
    {nombre: "Vaso", precio: 350},
    {nombre: "Cubiertos", precio: 500},
    {nombre: "Platos", precio: 750},
    {nombre: "Jarra", precio: 950},
];

let carrito = []

let seleccion = prompt("Hola, ¿Usted quiere añadir al carrito un producto?")

while (seleccion != "si" && seleccion !="no") {
    alert ("Por favor ingrese su respuesta")
    seleccion = prompt("Ingrese si o no")
}

if(seleccion == "si") {
    alert ("Esta es la lista de productos de nuestro bazar")
    let listadePrecios = productos.map ((productos) => productos.nombre + " " + productos.precio + "$");

    alert (listadePrecios.join (" - "))
} else if (seleccion == "no") {
    alert ("Gracias por visitar nuestra web, esperamos pronto su compra")
}

while (seleccion != "no") {
    let producto = prompt ("Seleccioná y agrega un producto")
    let precio = 0

    if(producto == "Taza" || producto == "Vaso" || producto == "Cubiertos" || producto == "Platos" || producto == "Jarra"){
        switch (producto) {
            case "Taza":
                precio = 200;
                break;
            case "Vasos":
                precio = 350;
                break;
            case "Cubiertos":
                precio = 500;
                break;
            case "Platos":
                precio = 750;
                break;
            case "Jarra":
                precio = 950;
                break;
        }
        
        let cantidades = parseInt (prompt("¿Cuanta cantidad desea comprar?"))
        carrito.push ({producto, cantidades, precio})
    }

    seleccion = prompt("¿Desea seguir añadiendo productos?")

    while(seleccion === "no") {
        alert("Gracias por su compra")
        carrito.forEach((carritoLleno) => {
            console.log (`producto: ${carritoLleno.producto}, cantidades: ${carritoLleno.cantidades}, Total a pagar en su compra ${carritoLleno.cantidades * carritoLleno.precio}`)
        })
    break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidades, 0)
console.log(`Total a pagar por su compra es: ${total}`)