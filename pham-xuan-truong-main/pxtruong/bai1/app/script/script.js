window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        } else {
            
        }
    });
});
let word = () => {
    const name = ['e', 'l', 'd', 'e', 'r', ' ', 'r', 'i', 'n', 'g'];
    let a = '';
    
    name.forEach((char, i) => {
        setTimeout(() => {
            a += char;
            document.getElementById("ttle").innerHTML = a;
        }, i * 200);
    });
};
word();

  const c = document.querySelector('.cursor');
  let x = 0, y = 0;
  window.onmousemove = e => { x = e.clientX; y = e.clientY; };
  
  function loop() {
    c.style.left = x + 'px';
    c.style.top  = y + 'px';
    requestAnimationFrame(loop);
  }
  loop();
