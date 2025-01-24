if (window.location.pathname.endsWith('/')) {
    // Seleccionar los elementos clave
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    // Variables para controlar el índice actual
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.carousel-item').length;

    // Función para actualizar la posición del carousel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Mueve en base al ancho del contenedor
        carouselInner.style.transform = `translateX(${offset}%)`;

        // Actualizar los indicadores activos
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Evento para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Ciclar al inicio si llega al final
        updateCarousel();
    });

    // Evento para el botón "Anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclar al final si está al inicio
        updateCarousel();
    });

    // Evento para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Inicializar la posición del carousel
    updateCarousel();
}

if (window.location.pathname.endsWith('menu')) {

   function mostrarPedido(){
        const infoDiv = document.getElementById('infoDiv');
        const overlayDiv = document.getElementById('overlay');
        if(infoDiv && overlayDiv){
           
            infoDiv.style.display = 'flex';
            infoDiv.style.justifyContent ='center';
            overlayDiv.style.display = 'block';
        }
   }
   function cerrarPedido(){
        const infoDiv = document.getElementById('infoDiv');    
        const overlayDiv = document.getElementById('overlay');

        if(infoDiv && overlayDiv){
            infoDiv.style.display = 'none';
            overlayDiv.style.display= 'none';
            
        }
   }
}