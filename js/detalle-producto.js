// Obtener el índice del libro desde la URL
const urlParams = new URLSearchParams(window.location.search);
const libroIndex = parseInt(urlParams.get('index'));

// Buscar el libro correspondiente en el archivo JSON
fetch('libros.json')
    .then(response => response.json())
    .then(data => {
        const libro = data[libroIndex];

        // Mostrar los detalles del libro en la página
        const detalleLibro = document.getElementById('detalleLibro');
        detalleLibro.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${libro.nombre}</h5>
                <p class="card-text">${libro.descripcion}</p>
                <p class="card-text">Autor: ${libro.autor}</p>
                <p class="card-text">Precio: ${libro.precio}</p>
            </div>
        `;
    })
    .catch(error => {
        console.log('Error:', error);
    });