// Selecciona el contenedor de la galería
const gallery = document.querySelector('.gallery');

// Lista de nombres de archivos (puedes generarla automáticamente)
const fotos = [
  'foto1.JPG',
  'foto2.JPG',
  'foto3.JPG',
  'foto4.JPG',
  'foto5.JPG',
  'foto6.JPG',
  'foto7.JPG',
  'foto8.JPG',
  'foto9.JPG',
  'foto10.JPG'
  // Agrega aquí todos los nombres de tus fotos
];

// Crear dinámicamente las imágenes
fotos.forEach(foto => {
  const img = document.createElement('img');
  img.src = `imagenes/${foto}`; // Ruta relativa de cada foto
  img.alt = `Foto ${foto}`;    // Texto alternativo descriptivo
  img.classList.add('gallery-item'); // Asegúrate de añadir la clase 'gallery-item'
  gallery.appendChild(img);    // Añade la imagen al contenedor
});

// Agregar funcionalidad de zoom
gallery.addEventListener('click', (event) => {
  if (event.target && event.target.tagName === 'IMG') {
    const image = event.target;

    // Crear overlay
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
  }
});
