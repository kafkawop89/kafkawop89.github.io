// Selecciona el contenedor de la galería
const gallery = document.querySelector('.gallery');

// Lista de nombres de archivos (puedes generarla automáticamente)
const fotos = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg',
  'foto4.jpg',
  'foto5.jpg',
  'foto6.jpg',
  'foto7.jpg',
  'foto8.jpg',
  'foto9.jpg',
  'foto10.jpg'
  // Agrega aquí todos los nombres de tus fotos
];

// Crear dinámicamente las imágenes
fotos.forEach(foto => {
  const img = document.createElement('img');
  img.src = `imagenes/${foto}`; // Ruta relativa de cada foto
  img.alt = `Foto ${foto}`;    // Texto alternativo descriptivo
  gallery.appendChild(img);    // Añade la imagen al contenedor
});
