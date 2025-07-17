document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    setInterval(showNextItem, 3000); // Cambia cada 3 segundos

    // Mostrar el primer elemento durante 2 segundos
    setTimeout(showNextItem, 2000);
});