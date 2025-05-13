let contador = 0;
document.getElementById('botonclick').addEventListener('click', function() {
  contador++;
  document.getElementById('contadordeclick').textContent = `Clicks: ${contador}`;
});
