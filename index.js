const imageArrays = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 1],
    [4, 5, 1, 2],
    [5, 1, 2, 3]
];

let currentIndex = 0;
const carousel = document.getElementById('img');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');
const indicatorsContainer = document.getElementById('indicators');

function updateCarousel() {
    carousel.innerHTML = imageArrays[currentIndex]
        .map(imageNumber => `<img src="imagens/img_${imageNumber}.png" alt="img_${imageNumber}">`)
        .join('');
    updateIndicators();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imageArrays.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + imageArrays.length) % imageArrays.length;
    updateCarousel();
}

function createIndicators() {
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < imageArrays.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

createIndicators();
updateCarousel();
