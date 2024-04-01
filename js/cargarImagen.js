let keys = Object.keys(localStorage);
let imagen = document.getElementById("imagen");

console.log(imagen);

function funciones(e) {
  e.preventDefault();
  const imagen = this.files;
  console.log("Archivos seleccionados:", imagen[0]);
}

console.log(keys);

function filtrar_usuario(e) {
  e.preventDefault();
  alert("La imagen debe llamarse igual que tu Usuario");

  const foto = this.files;
  console.log("Archivos seleccionado:", foto[0]);
  let usuario = foto[0].name;
  console.log(typeof usuario);
  let usuarioBuscado = usuario.replace(".jpg", "");
  console.log(usuarioBuscado);
  let filtro = keys.includes(usuarioBuscado);
  if (filtro != true) {
    console.log("No existe ese usuario");
  } else {
    cargar_imagen(usuario,usuarioBuscado);
  }
}

function cargar_imagen(usuario,usuarioBuscado) {
    console.log(usuario + " " + usuarioBuscado);
  localStorage.setItem(usuarioBuscado+"img", JSON.stringify(usuario));
}

imagen.addEventListener("change", filtrar_usuario);
