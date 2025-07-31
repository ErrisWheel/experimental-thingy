console.log("You are now hacked. JK -E")

const layer = document.querySelector('.parallax-layer');
const objects = document.querySelectorAll('.parallax-object');

let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;
let resizing = false;

window.addEventListener('mousemove', e => {
    if (resizing) return;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    moveParallax(e.clientX, e.clientY);
});

window.addEventListener('resize', () => {
    resizing = true;
    setTimeout(() => { resizing = false; }, 300);
});

function moveParallax(x, y) {
    const xRatio = (x / window.innerWidth) * 2 - 1;
    const yRatio = (y / window.innerHeight) * 2 - 1;

    const bgStrength = 10;
    layer.style.transform = `translate3d(${-xRatio * bgStrength}px, ${-yRatio * bgStrength}px, 0)`;

    objects.forEach(obj => {
        let strength = obj.classList.contains('bat') ? 40 : 20;
        let transformExtra = obj.classList.contains('wolf') ? ' scaleX(-1)' : '';
        const xMove = -xRatio * strength;
        const yMove = -yRatio * strength;
        obj.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)${transformExtra}`;
    });
}
