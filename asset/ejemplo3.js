let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
      case "Camila":
      alert("Si! Adivinaste! Hola Camila");
     break;
     case "Manuel":
      alert("Si! Adivinaste! Hola Manuel");
      break;
    default:
      alert("¿Cual es el nombre correcto?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}