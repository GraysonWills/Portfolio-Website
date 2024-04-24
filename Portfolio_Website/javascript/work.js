document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.right-side img');
    const outline = document.querySelector('.right-side .image-outline');

    image.addEventListener('mouseover', function() {
        outline.style.transform = 'translateY(10px)';
    });

    image.addEventListener('mouseout', function() {
        outline.style.transform = 'translateY(0)';
    });
});