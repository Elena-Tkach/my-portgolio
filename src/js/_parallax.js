
const images = document.querySelectorAll('.js-parallax');
console.log(images);
new simpleParallax(images, {
    scale: 1.2,
    delay: .6,
    transition: 'linear'
});
