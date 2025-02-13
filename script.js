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

    // Po najechaniu na "Nie" - zmniejsza się płynnie
    noButton.addEventListener("mouseenter", () => {
        noSize *= 0.8; // Zmniejsz rozmiar o 20%
        noSize = Math.max(0.3, noSize); // Nie pozwól, by był mniejszy niż 30% oryginalnego rozmiaru
        noButton.style.transition = "transform 0.3s ease-in-out";
        noButton.style.transform = `scale(${noSize})`;
    });

    // Po najechaniu na "Tak" - rośnie płynnie
    yesButton.addEventListener("mouseenter", () => {
        yesSize *= 1.2; // Powiększ o 20%
        yesSize = Math.min(2, yesSize); // Nie pozwól, by był większy niż 200% oryginalnego rozmiaru
        yesButton.style.transition = "transform 0.3s ease-in-out";
        yesButton.style.transform = `scale(${yesSize})`;
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
