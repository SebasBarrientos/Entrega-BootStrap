let lista = document.querySelector(".listas");
let keys = Object.keys(localStorage);

console.log(keys);
console.log(keys);

function separandoEnArrays(keys) {
  let arrImg = [];
  let arrKeys = [];
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].includes("img") == true) {
      arrImg.push(keys[i]);
    } else {
      arrKeys.push(keys[i]);
    }
  }
  console.log(arrImg + "     " + arrKeys);
  uniendoImagenes(arrImg, arrKeys);
}

function uniendoImagenes(arrImg, arrKeys) {
  if (arrImg != "undefined") {
    for (let i = 0; i < arrImg.length; i++) {
      let usuarioConImagen = arrImg[i].replace("img", "");
      console.log(usuarioConImagen);

      if (arrKeys.includes(usuarioConImagen) == true) {
        let indice = arrKeys.indexOf(usuarioConImagen); // obtenemos el indice
        arrKeys.splice(indice, 1);
        let user_localStorage = JSON.parse(
          localStorage.getItem(usuarioConImagen)
        );
        let img_user_localStorage = JSON.parse(localStorage.getItem(arrImg[i]));
        console.log(lista);
        lista.innerHTML += `
        <div class="card text-white bg-dark mb-3" style="width: 18rem;">
        <img class="mt-2 card-img-top img-fluid img-thumbnail" src="../assets/${img_user_localStorage}" alt="Foto Usuario">
        <div class="card-body">
        <h5 class="card-title">${usuarioConImagen}: ${user_localStorage.name_usuario} </h5>
        <p class="card-text">Email: ${user_localStorage.email_usuario}</p>
        </div>
        </div>`;
      }
    }
  }
  for (const clave of arrKeys) {
    let obj_localStorage = JSON.parse(localStorage.getItem(clave));

    lista.innerHTML += `
    <div class="card text-white bg-dark mb-3" style="width: 18rem;>
    <div class="card-body">
    <h5 class="card-title">${clave}: ${obj_localStorage.name_usuario} </h5>
    <p class="card-text">Email: ${obj_localStorage.email_usuario}</p>
    </div>
    </div>`;
  }
}
separandoEnArrays(keys);



