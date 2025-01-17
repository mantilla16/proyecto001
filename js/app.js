// // Selecciona el div "next"
// const nextDiv = document.querySelector('.main-course');
// const nextDiv2 = document.querySelector('.specials');

// // Función para manejar la visibilidad del div
// const handleScroll = () => {
//     const rect = nextDiv.getBoundingClientRect(); // Obtiene la posición del div en relación con el viewport
//     const windowHeight = window.innerHeight; // Altura del viewport
    
//     if (rect.top <= windowHeight * 0.8) { // Si está dentro del 80% del viewport
//         nextDiv.style.opacity = 1; // Hazlo completamente visible
//     } else {
//         nextDiv.style.opacity = 0; // Manténlo opaco
//     }
    
//     if (rect.top <=  windowHeight * 0.1) { // Si está dentro del 80% del viewport
//         nextDiv2.style.opacity = 1;
//     } else {
//         nextDiv2.style.opacity = 0;
//     }
// };



// // Escucha el evento scroll
// window.addEventListener('scroll', handleScroll);

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