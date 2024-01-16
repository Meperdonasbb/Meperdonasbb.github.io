const noButton = document.getElementById('No');

noButton.addEventListener('mouseover', moveButton);

function moveButton() {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    noButton.style.position = 'absolute';
    noButton.style.top = `${randomY}px`;
    noButton.style.left = `${randomX}px`;
}