document.getElementById('botonconvertir').addEventListener('click', function() {
  const textoingresado = document.getElementById('textousuario').value;
  const textomayusculas = textoingresado.toUpperCase();
  document.getElementById('textoresultado').textContent = textomayusculas;
});
