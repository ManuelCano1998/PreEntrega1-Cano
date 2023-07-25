function calcularIVA(precio) {
  const iva = 0.15; // IVA del 16%
  return precio * iva;
}

const precioTaza1 = 250;
const precioTaza2 = 500;

const ivaTaza1 = calcularIVA(precioTaza1);
const ivaTaza2 = calcularIVA(precioTaza2);

const totalTaza1 = precioTaza1 + ivaTaza1;
const totalTaza2 = precioTaza2 + ivaTaza2;


console.log(`Precio Taza 1: $${precioTaza1}`);
console.log(`IVA Taza 1: $${ivaTaza1}`);
console.log(`Total Taza 1: $${totalTaza1}`);

console.log(`Precio Taza 2: $${precioTaza2}`);
console.log(`IVA Taza 2: $${ivaTaza2}`);
console.log(`Total Taza 2: $${totalTaza2}`);


