let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password_repeat = document.querySelector("#password_repeat");
let form = document.querySelector("#form");
const alertDiv = document.querySelector("#alert");
console.log(alertDiv);
function borrar_mensaje(e) {
  setTimeout(function () {
    alertDiv.innerHTML = "";
  }, 3000);
}
function alertaCompletarCampos(e) {
  console.log("Hola");
  alertDiv.innerHTML =
    '<div class="alert alert-warning" role="alert"> Debes completar todos los campos!';
  borrar_mensaje();
}
function alertaDebesPonerUnEmailValido(e) {
  console.log("Hola");
  alertDiv.innerHTML =
    '<div class="alert alert-warning" role="alert"> Debes poner un Email Valido!';
  borrar_mensaje();
}
function alertaContrasenasNoCoinciden(e) {
  console.log("Hola");
  alertDiv.innerHTML =
    '<div class="alert alert-warning" role="alert"> Las contrasenas deben ser iguales!';
  borrar_mensaje();
}
function alertaContrasenasNoValida(e) {
  console.log("Hola");
  alertDiv.innerHTML =
    '<div class="alert alert-warning" role="alert"> La contraseña debe tener al menos 8 caracteres de longitud <br>Debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial!';
  borrar_mensaje();
}

function validarCorreo(correo) {
  var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);

}
function validarContrasena(contrasena) {
  // La contraseña debe tener al menos 8 caracteres de longitud
  // Debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
  var patron =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return patron.test(contrasena);
}

function guardadoExitoso() {
  console.log("Hola123");
  alertDiv.innerHTML =
  '<div class="alert alert-success" role="alert"> Usuario creado con exito. <br>Redirigiendo <div class="spinner-border text-success" role="status"> <span class="visually-hidden">Redirigiendo...</span></div>';
  }

function redirigirHaciaUsuarios() {
  console.log("Hola111");
  guardadoExitoso ()
  console.log("Hola122");
  setTimeout(function () {
    window.location.href = "./usuarios.html"
  }, 3000);
}

function guardar_cliente(e) {
  e.preventDefault();
  name_usuario = name.value;
  email_usuario = email.value;
  password_usuario = password.value;
  password_repeat_usuario = password_repeat.value;
  if (
    name_usuario === "" ||
    email_usuario === "" ||
    password_usuario === "" ||
    password_repeat_usuario === ""
  ) {
    alertaCompletarCampos();
    
    console.log("Debes completar todos los campos");
  } else if (validarCorreo(email_usuario) != true) {
    alertaDebesPonerUnEmailValido();
    console.log("pone un mail");
  } else if (password_usuario !== password_repeat_usuario) {
    alertaContrasenasNoCoinciden();
    console.log("Las contra no coinciden");
  } else if (validarContrasena(password_usuario) != true) {
    alertaContrasenasNoValida();
    console.log(
      "La contraseña debe tener al menos 8 caracteres de longitud. Debe contener al menos una letra minúscula, una letra mayúscula, un número y un ca rácter especial"
    );
  } else {
    let user = {
      name_usuario,
      email_usuario,
      password_usuario,
      password_repeat_usuario,
    };
    console.log("hola");
    let i = localStorage.length + 1;
    localStorage.setItem("User" + [i], JSON.stringify(user));
    redirigirHaciaUsuarios()
  }
}
form.addEventListener("submit", guardar_cliente);
