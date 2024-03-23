// script.js
const btn_gallery = document.getElementById('btn_gallery');
const btn_carousel = document.getElementById('btn_carousel');

btn_gallery.addEventListener('click', () => {
    carouselExampleIndicators.style.display = 'none'; 
    gallery.style.display = 'block';
});
btn_carousel.addEventListener('click', () => {
    carouselExampleIndicators.style.display = 'block'; 
    gallery.style.display = 'none';
});
