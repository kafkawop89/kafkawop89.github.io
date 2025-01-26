// Selecciona el contenedor de la galería
const gallery = document.querySelector('.gallery');

// Selecciona todas las imágenes dentro de la galería
const images = gallery.querySelectorAll('img');

// Agregar funcionalidad de zoom
images.forEach(image => {
  image.addEventListener('click', () => {
    // Crear el overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Ampliar la imagen
    image.classList.add('zoomed');

    // Cerrar el zoom al hacer clic en el overlay
    overlay.addEventListener('click', () => {
      image.classList.remove('zoomed');
      document.body.removeChild(overlay); // Eliminar el overlay
    });
  });
});
