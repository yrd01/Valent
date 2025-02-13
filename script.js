document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const title = document.querySelector("h1");
    const buttonsContainer = document.querySelector(".buttons");
    const background = document.querySelector(".background");

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

    // PRZYCISK "NIE" - UCIEKA, ALE NIE WYCHODZI POZA EKRAN
    noButton.addEventListener("mouseenter", () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let maxX = viewportWidth - buttonWidth - 20;
        let maxY = viewportHeight - buttonHeight - 20;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        const rect = noButton.getBoundingClientRect();
        const oldX = rect.left;
        const oldY = rect.top;

        // Unikanie minimalnych ruchów
        if (Math.abs(randomX - oldX) < 50) {
            randomX = (randomX + 80) % maxX;
        }
        if (Math.abs(randomY - oldY) < 50) {
            randomY = (randomY + 80) % maxY;
        }

        // Zapobieganie wyjściu poza ekran
        randomX = Math.max(10, Math.min(randomX, maxX));
        randomY = Math.max(10, Math.min(randomY, maxY));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
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
