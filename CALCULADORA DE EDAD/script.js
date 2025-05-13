document.getElementById('botondecalcular').addEventListener('click', function() {
  const añodenacimiento = document.getElementById('añodenacimiento').value;
  const añoactual = new Date().getFullYear();
  const edad = añoactual - añodenacimiento;
  document.getElementById('resultadoedad').textContent = `Tienes ${edad} años.`;
});