
var contadores = [0, 0, 0];

    function contarLikes(indice) {
      contadores[indice - 1]++;
      document.getElementById('cuadro' + indice).querySelector('.contador').innerHTML = contadores[indice - 1];
    }
  






