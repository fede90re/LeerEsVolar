// Obtener el índice del libro desde la URL
const urlParams = new URLSearchParams(window.location.search);
const libroIndex = parseInt(urlParams.get('id'));

// Buscar el libro correspondiente en el archivo JSON
fetch('/libros.json')
    .then(response => response.json())
    .then(data => {
        const libro = data[libroIndex];

        // Mostrar los detalles del libro en la página
        const nombreLibro = document.getElementById('nombreLibro');
        const descripcionLibro = document.getElementById('descripcionLibro');
        const autorLibro = document.getElementById('autorLibro');
        const precioLibro = document.getElementById('precioLibro');

        nombreLibro.textContent = libro.nombre;
        descripcionLibro.textContent = libro.descripcion;
        autorLibro.textContent = `Autor: ${libro.autor}`;
        precioLibro.textContent = `Precio: ${libro.precio}`;
    })
    .catch(error => {
        console.log('Error:', error);
    });