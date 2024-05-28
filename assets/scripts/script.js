document.addEventListener('DOMContentLoaded', () => {
    // Manejador para el formulario de registro
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (event) => {
            event.preventDefault();
            // Aquí puedes agregar el código para manejar el registro
            alert('Formulario de registro enviado');
        });
    }
});
