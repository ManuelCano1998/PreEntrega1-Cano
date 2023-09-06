const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const enviarButton = document.getElementById('enviar');
const borrarButton = document.getElementById('borrar');
const mensajeEnviadoDiv = document.getElementById('mensaje-enviado');
const mensajeModal = document.getElementById('mensajeModal');
const closeModalButton = document.getElementById('close-mensajeModal'); 
const mensajeModalContent = document.getElementById('mensaje-modal-content'); 

enviarButton.addEventListener('click', function () {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;

    if (nombre === '' || apellido === '' || email === '' || mensaje === '') {
        Swal.fire({
            position: 'top-center',
            icon: 'info',
            title: 'Por favor, complete todos los campos',
            showConfirmButton: false,
            timer: 1500
          })
 
    } else {
        const mensajeEnviado = `Mensaje enviado por ${nombre} ${apellido}. Gracias por contactarnos.`;
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'El mensaje ha sido enviado satisfactoriamente',
            showConfirmButton: false,
            timer: 1500
          })

        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';
    }
});

borrarButton.addEventListener('click', function () {
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'El mensaje ha sido borrado',
        showConfirmButton: false,
        timer: 1500
      })

    nombreInput.value = '';
    apellidoInput.value = '';
    emailInput.value = '';
    mensajeInput.value = '';

    mensajeEnviadoDiv.innerText = '';
});

closeModalButton.addEventListener('click', function () {
    closeModal();
});

function showModal(message) {
    mensajeModalContent.innerText = message;
    mensajeModal.style.display = 'block';
}

function closeModal() {
    mensajeModal.style.display = 'none';
}