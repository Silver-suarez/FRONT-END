



function clicklinux() {
  alert("This game is supported on linux");
}



var contador = 0;

function contarCompras() {

  contador++;

  document.getElementById('contador').innerHTML = contador;
}



var indiceImagenActual = 0;
var imagenes = document.getElementsByClassName('img-carrusel');


function cambiarImagen() {
  imagenes[indiceImagenActual].style.display = 'none';
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
  imagenes[indiceImagenActual].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () { cambiarImagen(); });

