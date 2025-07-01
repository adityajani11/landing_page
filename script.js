
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const cards = document.querySelectorAll('.product-card');

let currentIndex = 0;
let cardsPerView = 1;

function updateCardsPerView() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    cardsPerView = Math.floor(containerWidth / cardWidth);
}

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    updateCardsPerView();
    currentIndex += cardsPerView;
    if (currentIndex >= cards.length) currentIndex = 0;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    updateCardsPerView();
    currentIndex -= cardsPerView;
    if (currentIndex < 0) {
        currentIndex = Math.max(cards.length - cardsPerView, 0);
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    updateCardsPerView();
    updateCarousel();
});

// Initialize
updateCardsPerView();
updateCarousel();

// TOP BUTTON
const topButton = document.querySelector('.btn-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
});
