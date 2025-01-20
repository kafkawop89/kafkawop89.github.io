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
  gallery.appendChild(img);    // Añade la imagen al contenedor
});
