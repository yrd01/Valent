document.getElementById("yes").addEventListener("click", () => {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10; // Wielkość serca (10-30px)
    const startX = Math.random() * window.innerWidth; // Losowa pozycja startowa

    heart.style.left = `${startX}px`;
    heart.style.fontSize = `${size}px`;

    const animationDuration = Math.random() * 2 + 3; // 3-5 sekund
    heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

    setTimeout(() => heart.remove(), animationDuration * 1000);
}
