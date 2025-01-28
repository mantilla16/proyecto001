function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}



if (window.location.pathname.endsWith('/') || window.location.pathname.includes('index')) {
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

  
if (window.location.pathname.includes('menu')) {

    var platos = [];

   function mostrarPedido(){
        const infoDiv = document.getElementById('infoDiv');
        const overlayDiv = document.getElementById('overlay');
        document.querySelector('.menu__opciones').reset();
        if(infoDiv && overlayDiv){
            infoDiv.style.display = 'flex';
            infoDiv.style.justifyContent ='center';
            overlayDiv.style.display = 'block';
        }
   }
   

   var pedido = [];
   document.getElementById('guardar-pedido').addEventListener('click', function () {
       const radioArroz = document.querySelector('input[name="arroz"]:checked');
       const radioEnsaladas = document.querySelector('input[name="ensalada"]:checked');
       const radioGranos = document.querySelector('input[name="granos"]:checked');
       const radioSopas= document.querySelector('input[name="sopa"]:checked');
       const plato = document.getElementById('nombre__plato').textContent;
        if(radioArroz && radioEnsaladas && radioGranos && radioSopas){
            let nuevoPedido ={
                plato: plato,
                arroz: radioArroz.value,
                ensalada: radioEnsaladas.value,
                granos: radioGranos.value,
                sopa: radioSopas.value
            }
            pedido.push(nuevoPedido);
        }
    });
   
   
    function listarPedidos(){
        const pedidos = document.getElementById('Listapedidos');
        const overlayDiv = document.getElementById('overlay');
        if(pedidos && overlayDiv){
            pedidos.style.display = 'flex';
            pedidos.style.justifyContent ='center';
            overlayDiv.style.display = 'block';
        }
        console.log(pedido);
        const verOrden = document.getElementById('enviarOrden');
        verOrden.innerHTML = '';

        pedido.forEach((p, index) => {
            const pedidoHTML = `
                <div class="pedido" style="display:block">
                    <h4>Pedido ${index + 1}</h4>
                    <p><strong>Plato:</strong> ${p.plato}</p>
                    <p><strong>Arroz:</strong> ${p.arroz}</p>
                    <p><strong>Ensalada:</strong> ${p.ensalada}</p>
                    <p><strong>Grano:</strong> ${p.granos}</p>
                    <p><strong>Sopa:</strong> ${p.sopa}</p>
                    <hr>
                </div>
            `;
            verOrden.innerHTML += pedidoHTML;
        });
   }


    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefono = '3115697605';

        
   
   function cerrarPedido(){
        const infoDiv = document.getElementById('infoDiv');    
        const overlayDiv = document.getElementById('overlay');        
        if(infoDiv && overlayDiv){
            infoDiv.style.display = 'none';
            overlayDiv.style.display= 'none';
        }
    }

    function enviarPedidoWP(){
        const overlayDiv = document.getElementById('overlay');
        const pedidos = document.getElementById('Listapedidos');

        if(pedidos && overlayDiv){
            pedidos.style.display = 'none';
            overlayDiv.style.display= 'none';
        }

        let mensajeCompleto='*PEDIDO COMPLETO*%0A';
        pedido.forEach((p, index) => {
            mensajeCompleto += `*Pedido ${index + 1}:*%0A`;
            mensajeCompleto += `- Plato: ${p.plato}%0A`;
            mensajeCompleto += `- Arroz: ${p.arroz}%0A`;
            mensajeCompleto += `- Ensalada: ${p.ensalada}%0A`;
            mensajeCompleto += `- Granos: ${p.sopa}%0A`;
            mensajeCompleto += `- Granos: ${p.granos}%0A%0A`;
        });
        let mensaje = 'send?phone=' + telefono + '&text=' + mensajeCompleto;
        
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
    }

}