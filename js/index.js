import { Producto } from "./producto.js";

cargarJuego();

window.juegoDestacado = function (event) {
  let listaJuego = JSON.parse(localStorage.getItem("listaProductoKey"));
  console.log(listaJuego);

  if (listaJuego.length > 0) {
    for (let i in listaJuego) {
      if (listaJuego[i].destacar === true) {
        let destacado = document.getElementById("juegoDestacado");
        destacado.innerHTML = `<section class="mt-5" id="juegoDestacado">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-8">
                      <img
                        src=" img/Juegos/${listaJuego[i].imagen}"
                        class="w-100"
                        alt="${listaJuego[i].nombre}"
                      />
                    </div>
                    <div class="col-md-4 bg-dark d-flex align-items-center">
                      <div class="card-body">
                        <h5 class="card-title mt-3">${listaJuego[i].nombre}</h5>
                        <p class="card-text mt-3">${listaJuego[i].categoria}</p>
                        <p class="card-text">
                          ${listaJuego[i].descripcion}
                        </p>
                        <div>
                          <button class="btn btn-primary">
                            <a class="estilo text-light" href="juegodetalle.html" >Ver mas</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>`;
      }
    }
  }
};

function cargarJuego() {
  console.log("Cargar Juego");
  let fila = "";
  let listaJuegos = JSON.parse(localStorage.getItem('listaProductoKey'));
  console.log(listaJuegos);
  let padre = document.getElementById('padreShotter');
  padre.innerHTML = "";
  console.log(padre);
  let padre2 = document.getElementById('padreShotter2');
  padre2.innerHTML = "";
  let padreMultijugador = document.getElementById('padreMultijugador');
  padreMultijugador.innerHTML = "";
  let padreMultijugador2 = document.getElementById('padreMultijugador2');
  padreMultijugador2.innerHTML = "";
  let padreDeportes = document.getElementById('padreDeportes');
  padreDeportes.innerHTML = "";
  let padreDeportes2 = document.getElementById('padreDeportes2');
  padreDeportes2.innerHTML = "";
  let padreHistoria = document.getElementById('padreHistoria');
  padreHistoria.innerHTML = "";
  let padreHistoria2 = document.getElementById('padreHistoria2');
  padreHistoria2.innerHTML = "";
  if (listaJuegos.length > 0) {
    let contador = 0;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    for (let i in listaJuegos) {
      if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Shotter' && contador < 4) {
        contador++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
        onclick="enviarMensaje(${listaJuegos[i].codigo})"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padre.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Shotter' && contador >= 4) {
        contador++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padre2.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Multijugador' && contador1 < 4) {
        contador1++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreMultijugador.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Multijugador' && contador1 >= 4) {
        contador1++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreMultijugador2.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Deportes' && contador2 < 4) {
        contador2++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreDeportes.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Deportes' && contador2 >= 4) {
        contador2++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreDeportes2.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Modohistoria' && contador3 < 4) {
        contador3++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreHistoria.innerHTML += fila;
      } else if (listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'Modohistoria' && contador >= 4) {
        contador3++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="juegodetalle.html"
        id="${listaJuegos[i].codigo}"
          ><img
            src="img/Juegos/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreHistoria2.innerHTML += fila;
      }

    }
  }
}

window.pasarId = function (event) {
  event.preventDefault();
  console.log(event);
}