fetch('libros.json')
    .then(response => response.json())
    .then(data => {
        const tarjetaContainer = document.querySelector('.tarjeta-container');

        data.forEach(libro => {
            // Crear elementos para la tarjeta
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('row', 'm-0', 'tarjeta');

            const imagen = document.createElement('div');
            imagen.classList.add('col-md-4', 'd-flex', 'justify-content-center', 'p-3');
            const img = document.createElement('img');
            img.classList.add('img');
            img.src = libro.imagen;
            imagen.appendChild(img);

            const contenido = document.createElement('div');
            contenido.classList.add('col-md-4', 'd-flex', 'justify-content-center', 'p-3', 'tipografia', 'nombre');
            const nombre = document.createElement('p');
            nombre.textContent = `${libro.nombre}\n\nNovela de ${libro.autor}`;
            contenido.appendChild(nombre);

            const descripcion = document.createElement('div');
            descripcion.classList.add('col-md-4', 'd-flex', 'justify-content-center', 'p-3', 'tipografia', 'nombre');
            descripcion.textContent = libro.descripcion;

            const boton = document.createElement('button');
            boton.classList.add('btn', 'btn-dark', 'col-md-12', 'd-flex', 'justify-content-center', 'tipografia');
            boton.textContent = 'Ver detalle';
            boton.addEventListener('click', () => {
                // Lógica para mostrar el detalle del libro
                console.log(`Mostrar detalle del libro: ${libro.nombre}`);
            });

            // Agregar los elementos a la tarjeta
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(contenido);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(boton);

            // Agregar la tarjeta al contenedor
            tarjetaContainer.appendChild(tarjeta);

            // Agregar espacio entre tarjetas
            const espacio = document.createElement('div');
            espacio.classList.add('mt-4');
            tarjetaContainer.appendChild(espacio);
        });
    })
    .catch(error => console.log(error));
