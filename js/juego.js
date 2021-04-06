window.enviarMensaje = function (codigo){
    let tablaProducto = JSON.parse(localStorage.getItem('listaProductoKey'));
    let detalle = document.getElementById('imagenDetalle');
    for(let i in tablaProducto){
      if(tablaProducto[i].codigo == codigo){
        console.log("dentro de for");
        detalle.innerHTML = "";
      }
    }
  }