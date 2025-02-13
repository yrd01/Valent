document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const title = document.querySelector("h1");
    const buttonsContainer = document.querySelector(".buttons");
    const background = document.querySelector(".background");

    let noSize = 1; // Początkowy rozmiar "Nie"
    let yesSize = 1; // Początkowy rozmiar "Tak"

    // Kliknięcie "Tak" - zmiana tła i napisu
    yesButton.addEventListener("click", () => {
        title.textContent = "KOCHAM CIĘ ❤️";
        buttonsContainer.style.display = "none"; 

        background.style.opacity = "0";
        setTimeout(() => {
            background.style.background = "url('20240809_213832.jpg') no-repeat center center/cover";
            background.style.opacity = "1";
        }, 1000);

        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    });

    // Funkcja do animacji zmiany rozmiaru
    function animateSize(button, scale) {
        button.style.transition = "transform 0.3s ease-in-out";
        button.style.transform = `scale(${scale})`;
    }

    // Po najechaniu na "Nie" - zmniejsza się, a "Tak" rośnie
    noButton.addEventListener("mouseenter", () => {
        noSize *= 0.8; // Zmniejsz o 20%
        noSize = Math.max(0.3, noSize); // Nie mniejsze niż 30%

        yesSize *= 1.2; // Powiększ "Tak" o 20%
        yesSize = Math.min(2, yesSize); // Nie większe niż 200%

        animateSize(noButton, noSize);
        animateSize(yesButton, yesSize);
    });

    // Funkcja do latających serc
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        const size = Math.random() * 40 + 30;
        const startX = Math.random() * (window.innerWidth - size);
        const startY = Math.random() * (window.innerHeight - size);

        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.fontSize = `${size}px`;

        const animationDuration = Math.random() * 2 + 3;
        heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

        setTimeout(() => heart.remove(), animationDuration * 1000);
    }
});
