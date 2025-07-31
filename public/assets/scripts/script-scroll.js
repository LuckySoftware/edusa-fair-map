document.addEventListener('DOMContentLoaded', function() {
    const compactNav = document.getElementById('compactNav');
    let lastScroll = window.scrollY;
    let ticking = false;
    
    // Controlador de scroll optimizado
    function handleScroll() {
        const currentScroll = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Mostrar al bajar después de 100px
                if (currentScroll > 100 && currentScroll > lastScroll) {
                    compactNav.classList.add('visible');
                } 
                // Ocultar al subir al tope
                else if (currentScroll <= 0) {
                    compactNav.classList.remove('visible');
                }
                
                lastScroll = currentScroll;
                ticking = false;
            });
            
            ticking = true;
        }
    }
    
    // Evento con passive para mejor performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Opcional: Ocultar inmediatamente al hacer click en logo para ir al inicio
    compactNav.addEventListener('click', function() {
        if (window.scrollY === 0) {
            compactNav.classList.remove('visible');
        }
    });
});