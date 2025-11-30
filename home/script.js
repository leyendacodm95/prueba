// 1. Bienvenida
function darBienvenida() {
    // alert("¡Bienvenido/a a la página de Fans de T1!");
}
darBienvenida();


// 2. Lógica del Scroll
const element = document.querySelector(".animacion");

function checkScroll() {
    // Si no encuentra el elemento, no hace nada para evitar errores
    if (!element) return; 

    // Calculamos la altura de la ventana en el momento del scroll
    const viewportHeight = window.innerHeight;
    
    // Obtenemos la posición actual del elemento
    const positionFromTop = element.getBoundingClientRect().top;

    // Condición: Si el elemento entra en pantalla (ajusté a -50 para que se active justo antes del final)
    if (positionFromTop - viewportHeight <= -50) {
        
        // Agregamos las clases de animación de Animate.css
        element.classList.add("animate__animated", "animate__backInLeft");
        
        // IMPORTANTE: Hacemos visible el elemento cambiando la opacidad a 1
        element.style.opacity = "1";

        // Dejamos de escuchar el scroll porque la animación ya ocurrió
        window.removeEventListener("scroll", checkScroll);
    }
}

// Inicializamos el evento
if (element) {
    window.addEventListener("scroll", checkScroll);
    // Ejecutamos una vez al inicio por si el footer ya es visible sin hacer scroll
    checkScroll();
}