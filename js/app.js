// Selecciona el div "next"
const nextDiv = document.querySelector('.main-course');
const nextDiv2 = document.querySelector('.specials');

// Función para manejar la visibilidad del div
const handleScroll = () => {
    const rect = nextDiv.getBoundingClientRect(); // Obtiene la posición del div en relación con el viewport
    const windowHeight = window.innerHeight; // Altura del viewport
    
    if (rect.top <= windowHeight * 0.8) { // Si está dentro del 80% del viewport
        nextDiv.style.opacity = 1; // Hazlo completamente visible
    } else {
        nextDiv.style.opacity = 0; // Manténlo opaco
    }
    
    if (rect.top <=  windowHeight * 0.1) { // Si está dentro del 80% del viewport
        nextDiv2.style.opacity = 1;
    } else {
        nextDiv2.style.opacity = 0;
    }
};



// Escucha el evento scroll
window.addEventListener('scroll', handleScroll);