const circle = document.querySelector('.circle');

document.addEventListener('mousemove', function(e) {
    const x = e.pageX; 
    const y = e.pageY;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});