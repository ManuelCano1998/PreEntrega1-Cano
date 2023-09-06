    const nombreInput = document.getElementById('nombre');

    const apellidoInput = document.getElementById('apellido');

    const emailInput = document.getElementById('email');

    const mensajeInput = document.getElementById('mensaje');

    const enviarButton = document.getElementById('enviar');
    
    const borrarButton = document.getElementById('borrar');

    const guardarDatosEnLocalStorage = () => {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const email = emailInput.value;
        const mensaje = mensajeInput.value;

        const datos = {
            nombre,
            apellido,
            email,
            mensaje
        };

        localStorage.setItem('formularioDatos', JSON.stringify(datos));
    };

    const cargarDatosDesdeLocalStorage = () => {
        const datosGuardados = localStorage.getItem('formularioDatos');
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            nombreInput.value = datos.nombre || '';
            apellidoInput.value = datos.apellido || '';
            emailInput.value = datos.email || '';
            mensajeInput.value = datos.mensaje || '';
        }
    };

    cargarDatosDesdeLocalStorage();
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
            });
        } else {
            const mensajeEnviado = `Mensaje enviado por ${nombre} ${apellido}. Gracias por contactarnos.`;
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'El mensaje ha sido enviado satisfactoriamente',
                showConfirmButton: false,
                timer: 1500
            });

            nombreInput.value = '';
            apellidoInput.value = '';
            emailInput.value = '';
            mensajeInput.value = '';

        guardarDatosEnLocalStorage();
        }
    });

    borrarButton.addEventListener('click', function () {
        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';

        localStorage.removeItem('formularioDatos');

        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'El mensaje ha sido borrado',
            showConfirmButton: false,
            timer: 1500
        });
    });