document.getElementById("yes").addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 30 + 20; // Wielkość serc 20-50px
    const startX = Math.random() * window.innerWidth; // Losowa pozycja startowa X
    const startY = Math.random() * window.innerHeight; // Losowa pozycja startowa Y

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.fontSize = `${size}px`;

    const animationDuration = Math.random() * 2 + 3; // 3-5 sekund
    heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

    setTimeout(() => heart.remove(), animationDuration * 1000);
}
