console.log('JavaScript loaded');

let currentIndex = 0;
const items = document.querySelectorAll('.slide');

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

function showPreviousItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 2000);

let startX;

document.querySelector('.carousel').addEventListener('mousedown', (event) => {
    startX = event.clientX;
});

document.querySelector('.carousel').addEventListener('mouseup', (event) => {
    const endX = event.clientX;
    if (startX > endX) {
        showNextItem();
    } else if (startX < endX) {
        showPreviousItem();
    }
});
