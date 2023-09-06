const pinCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
     <h1 class="modal-header-titulo">Carrito</h1> 
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
     let carritoContent = document.createElement("div")
     carritoContent.className = "modal-content"
     carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total:$${product.cantidad * product.precio}</p>
      `;

      modalContainer.append(carritoContent);

      let eliminar = document.createElement("span");
      eliminar.innerText = "🗑";
      eliminar.className = "delete-product";
      carritoContent.append(eliminar);

      eliminar.addEventListener("click", deleteProduct);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);

    const finalizarCompraButton = document.createElement("button");
    finalizarCompraButton.innerText = "Finalizar Compra";
    finalizarCompraButton.className = "finalizar-compra-button";

    finalizarCompraButton.addEventListener("click", () => {
        Swal.fire(
            '¡Compra confirmada!',
            '¡Has finalizado tu compra con éxito!',
            'success'
          );
        modalContainer.style.display = "none";
    });

    modalContainer.append(finalizarCompraButton);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("carrito");
    });
}


verCarrito.addEventListener("click", pinCarrito);

const deleteProduct = () => {
    const foundId = carrito.find ((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCont ();
    Swal.fire({
        position: 'top-center',
        icon: 'warning',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1000
    });
    pinCarrito ();
};

const carritoCont = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}