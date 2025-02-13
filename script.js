document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const title = document.querySelector("h1");
    const buttonsContainer = document.querySelector(".buttons");
    const background = document.querySelector(".background");

    // Zmiana napisu i tła po kliknięciu "Tak"
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

    // PRZYCISK "NIE" – UCIEKA I ZAWSZE ZMIENIA POZYCJĘ
    noButton.addEventListener("mouseenter", () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        const maxX = window.innerWidth - buttonWidth - 10;
        const maxY = window.innerHeight - buttonHeight - 10;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        const rect = noButton.getBoundingClientRect();
        const oldX = rect.left;
        const oldY = rect.top;

        // Jeśli nowa pozycja jest zbyt blisko starej, wymuszamy większy ruch
        if (Math.abs(randomX - oldX) < 70) {
            randomX = (randomX + 100) % maxX;
        }
        if (Math.abs(randomY - oldY) < 70) {
            randomY = (randomY + 100) % maxY;
        }

        randomX = Math.max(0, Math.min(randomX, maxX));
        randomY = Math.max(0, Math.min(randomY, maxY));

        noButton.style.pointerEvents = "none"; // Blokuje spam kliknięć
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        setTimeout(() => {
            noButton.style.pointerEvents = "auto"; // Przywraca działanie przycisku
        }, 100);
    });

    // Latające serca
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
