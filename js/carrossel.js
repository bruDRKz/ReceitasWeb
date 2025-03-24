let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}


setInterval(nextSlide, 5000);
