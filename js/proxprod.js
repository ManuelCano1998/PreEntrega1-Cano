let lista = document.getElementById("proximos");

fetch("./proxprod.json")
  .then((response) => response.json())
  .then((data) => {
    
    const itemsContent = document.createElement("div");
    itemsContent.className = "items-content"; 

    data.forEach((item) => {
      const li = document.createElement("li");
      li.className = "rectang"; 
      li.innerHTML = `
        <img src="${item.img}">
        <h3>${item.nombre}</h3>
        <p class="precio">$${item.precio}</p>
      `;

      itemsContent.appendChild(li); 
    });

    lista.appendChild(itemsContent);
  })
  .catch((error) => {
    console.error('Error:', error);
  });