const productos = [
    {
     id: 1,
     nombre: "Taza", 
     precio: 200,
     img: "../img/tazas.png",
     cantidad:1,
    },

    {
     id: 2,
     nombre: "Vaso", 
     precio: 350,
     img: "../img/vasos.png",
     cantidad:1,
    },

    {
     id: 3,
     nombre: "Cubiertos", 
     precio: 500,
     img: "../img/cubiertos.png",
     cantidad:1,
    },

    {
     id: 4,
     nombre: "Platos", 
     precio: 750,
     img: "../img/platos.png",
     cantidad:1,
    },

    {
     id: 5,
     nombre: "Jarra", 
     precio: 950,
     img: "../img/jarra.png",
     cantidad:1,
    },

    {
     id: 6,
     nombre: "Canasto", 
     precio: 1200,
     img: "../img/canasto.png",
     cantidad:1,
    },

    {
     id: 7,
     nombre: "Rallador", 
     precio: 650,
     img: "../img/ralla.png",
     cantidad:1,
    },

    {
     id: 8,
     nombre: "Escurridor", 
     precio: 680,
     img: "../img/escurri.png",
     cantidad:1,
    },

    {
     id: 9,
     nombre: "Batidor", 
     precio: 465,
     img: "../img/batidor.png",
     cantidad:1,
    },

    {
     id: 10,
     nombre: "Molde", 
     precio: 880,
     img: "../img/molde.png",
     cantidad:1,
    },

    {
     id: 11,
     nombre: "Pisa papa", 
     precio: 275,
     img: "../img/pisa.png",
     cantidad:1,
    },

    {
     id: 12,
     nombre: "Saca corcho", 
     precio: 350,
     img: "../img/saca.png",
     cantidad:1,
    },
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosGuardados = JSON.parse(localStorage.getItem("productos"));
