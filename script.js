document.getElementById("yes").addEventListener("click", () => {
    // Zmiana tła na drugie zdjęcie
    document.querySelector(".background").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".background").style.background = "url('20240809_213832.jpg') no-repeat center center/cover";
        document.querySelector(".background").style.opacity = "1";
    }, 1000);

    // Tworzenie większej ilości serc
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

// PRZYCISK "NIE" UCIEKA
const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 50 + 30; // Większe serca 30-80px
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.fontSize = `${size}px`;

    const animationDuration = Math.random() * 2 + 3;
    heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

    setTimeout(() => heart.remove(), animationDuration * 1000);
}
