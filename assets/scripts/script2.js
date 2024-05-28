document.addEventListener('DOMContentLoaded', () => {
    // Manejador para el formulario de autenticación
    const formAutenticacion = document.getElementById('formAutenticacion');
    if (formAutenticacion) {
        formAutenticacion.addEventListener('submit', (event) => {
            event.preventDefault();
            // Aquí puedes agregar el código para manejar la autenticación
            alert('Formulario de inicio de sesión enviado');
        });
    }
});
