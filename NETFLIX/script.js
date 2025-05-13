// Obtener elementos del DOM
const slider = document.querySelector('.slider-wrapper');
const btnLeft = document.querySelector('.left-btn');
const btnRight = document.querySelector('.right-btn');

// Verificar existencia de elementos antes de asignar eventos
if (slider && btnLeft && btnRight) {
  // Calcular dinámicamente el desplazamiento según el ancho del primer hijo del carrusel
  const firstItem = slider.querySelector('.trending-poster');
  const scrollAmount = firstItem ? firstItem.offsetWidth + 20 : 180; // Ajusta 20 si tienes márgenes

  // Agregar accesibilidad básica
  btnLeft.setAttribute('aria-label', 'Desplazar carrusel hacia la izquierda');
  btnRight.setAttribute('aria-label', 'Desplazar carrusel hacia la derecha');

  // Desplazamiento hacia la izquierda
  btnLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Desplazamiento hacia la derecha
  btnRight.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}
