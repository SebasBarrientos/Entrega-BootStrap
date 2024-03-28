let name = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let password_repeat = document.querySelector("#password_repeat")
let form = document.querySelector("#form")
let keys = Object.keys(localStorage);

function validarCorreo(correo) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(correo);
}
function validarContrasena(contrasena) {
    // La contraseña debe tener al menos 8 caracteres de longitud
    // Debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
    var patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return patron.test(contrasena);
}

function guardar_cliente(e) {
    e.preventDefault();
    name_usuario=name.value
    email_usuario=email.value
    password_usuario=password.value
    password_repeat_usuario=password_repeat.value
    if (name_usuario === ""||email_usuario === ""||password_usuario === ""||password_repeat_usuario === "") {
        console.log("Completar todos los campos");
    } else if (validarCorreo(email_usuario)!= true) {
        console.log("pone un mail"); 
    } else if (password_usuario !== password_repeat_usuario) {
        console.log("Las contra no coinciden"); 
    } else if (validarContrasena(password_usuario)) {
        "La contraseña debe tener al menos 8 caracteres de longitud Debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial"
    } else {
            let user = {
            name_usuario,
            email_usuario,
            password_usuario,
            password_repeat_usuario
        }
        console.log("hola");
        let i = localStorage.length +1
        localStorage.setItem("User" + [i], JSON.stringify(user))
        }
    }
    // Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.
    // Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
    // Muestra los mensajes utilizando los alerts de Bootstrap.


// localStorage.clear();

form.addEventListener("submit", guardar_cliente)