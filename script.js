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

    // Funkcja do płynnej animacji zmiany rozmiaru
    function animateSize(button, newSize) {
        button.style.transition = "transform 0.2s ease-in-out";
        requestAnimationFrame(() => {
            button.style.transform = `scale(${newSize})`;
        });
    }

    // Po najechaniu na "Nie" - zmniejsza się, a "Tak" rośnie
    noButton.addEventListener("mouseenter", () => {
        noSize *= 0.85; // Zmniejsz o 15%
        noSize = Math.max(0.2, noSize); // Nie mniejsze niż 20%

        yesSize *= 1.15; // Powiększ "Tak" o 15%
        yesSize = Math.min(2.5, yesSize); // Nie większe niż 250%

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
