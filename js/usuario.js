let lista = document.querySelector(".listas")
let keys = Object.keys(localStorage);

console.log(keys);

function mostrar_usuario(e) {
  lista.innerHTML = "";
  for (const clave of keys) {
    let obj_localStorage = JSON.parse(localStorage.getItem(clave));
    lista.innerHTML += "<ul class=' list-group-item list-group-item-action'>" + clave + ": " + obj_localStorage.name_usuario + "</ul>";
  }
}
mostrar_usuario ()
// localStorage.clear();
