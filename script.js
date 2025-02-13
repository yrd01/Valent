document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const title = document.querySelector("h1");
    const buttonsContainer = document.querySelector(".buttons");
    const background = document.querySelector(".background");

    // Zmiana na "KOCHAM CIĘ" po kliknięciu "Tak"
    yesButton.addEventListener("click", () => {
        title.textContent = "KOCHAM CIĘ ❤️"; // Zmiana napisu
        buttonsContainer.style.display = "none"; // Ukrycie przycisków
        
        // Animacja zmiany tła
        background.style.opacity = "0";
        setTimeout(() => {
            background.style.background = "url('20240809_213832.jpg') no-repeat center center/cover";
            background.style.opacity = "1";
        }, 1000);

        // Dodanie latających serc
        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    });

    // PRZYCISK "NIE" – UCIEKA, ALE NIE PRZESKAKUJE CIĄGLE
    noButton.addEventListener("mouseenter", () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        const maxX = window.innerWidth - buttonWidth - 10; // Margines 10px
        const maxY = window.innerHeight - buttonHeight - 10;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        // Pobranie aktualnej pozycji
        const rect = noButton.getBoundingClientRect();
        const oldX = rect.left;
        const oldY = rect.top;

        // Jeśli nowa pozycja jest zbyt blisko starej, wymuszamy większy ruch
        if (Math.abs(randomX - oldX) < 50) {
            randomX += randomX > oldX ? 50 : -50;
        }
        if (Math.abs(randomY - oldY) < 50) {
            randomY += randomY > oldY ? 50 : -50;
        }

        // Zapobieganie wyjściu poza ekran
        randomX = Math.max(0, Math.min(randomX, maxX));
        randomY = Math.max(0, Math.min(randomY, maxY));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Funkcja do generowania latających serc
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        const size = Math.random() * 40 + 30; // Większe serca 30-70px
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
