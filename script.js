console.log("You are now hacked. JK -E")

const layer = document.querySelector('.parallax-layer');
const objects = document.querySelectorAll('.parallax-object');

window.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth) * 2 - 1;
    const yRatio = (e.clientY / window.innerHeight) * 2 - 1;

    const bgStrength = 10;
    layer.style.transform = `translate3d(${-xRatio * bgStrength}px, ${-yRatio * bgStrength}px, 0)`;

    objects.forEach(obj => {
        let strength;
        if (obj.classList.contains('bat')) {
            strength = 40;

            const xMove = -xRatio * strength;
            const yMove = -yRatio * strength;
            obj.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
        }
        else if (obj.classList.contains('wolf')) {
            strength = 20;

            const xMove = -xRatio * strength;
            const yMove = -yRatio * strength;
            obj.style.transform = `translate3d(${xMove}px, ${yMove}px, 0) scaleX(-1)`;
        }
    });
});
