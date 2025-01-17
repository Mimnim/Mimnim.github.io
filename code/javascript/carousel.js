const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function showSlide(idx) {
    const offset = -idx * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    showSlide(index);
});

nextBtn.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    showSlide(index);
});
