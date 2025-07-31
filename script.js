console.log("You are now hacked. JK -E")

const layer = document.querySelector('.parallax-layer');

window.addEventListener('mousenive', (e) => {
    const xRatio = (e.clientX / window.innerWidth) * 2 - 1;
    const yRatio = (e.clientY / window.innerHeight) * 2 - 1;

    const movementStrength = 30;

    const xMove = -xRatio * movementStrength;
    const yMove = -yRatio * movementStrength;

    layer.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
});
