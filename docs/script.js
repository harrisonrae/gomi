const images = document.querySelectorAll('.floating-image');

images.forEach(image => {
    let x = Math.random() * window.innerWidth; // Random x position
    let y = Math.random() * (window.innerHeight * 0.5); // Random y position (only in the top 50% of the screen)
    let dx = (Math.random() - 0.5) * 4; // Random horizontal movement
    let dy = (Math.random() - 0.5) * 4; // Random vertical movement

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    function moveImage() {
        x += dx;
        y += dy;

        // Bounce off the side walls
        if (x + image.offsetWidth > window.innerWidth || x < 0) dx = -dx;

        // Bounce off the "walls" at the top and halfway down the screen
        const maxY = window.innerHeight * 0.5; // Limit to top 50% of the screen
        if (y + image.offsetHeight > maxY || y < 0) dy = -dy;

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
});


// Splash screen functionality
const splashScreen = document.getElementById('splash-screen');
const enterImage = document.getElementById('enter-image');
const mainContent = document.getElementById('main-content');

enterImage.addEventListener('click', () => {
    splashScreen.style.display = 'none'; // Hide splash screen
    mainContent.style.display = 'block'; // Show main content
});
