document.getElementById("yes").addEventListener("click", () => {
    // Zmiana tła na drugie zdjęcie
    document.querySelector(".background").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".background").style.background = "url('20240809_213832.jpg') no-repeat center center/cover";
        document.querySelector(".background").style.opacity = "1";
    }, 1000);

    // Zmiana napisu na "KOCHAM CIĘ"
    document.querySelector("h1").textContent = "KOCHAM CIĘ ❤️";

    // Ukrycie przycisków po kliknięciu "Tak"
    document.querySelector(".buttons").style.display = "none";

    // Tworzenie większej ilości serc
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

// PRZYCISK "NIE" UCIEKA I NIE WYCHODZI POZA EKRAN NA TELEFONIE
const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    const maxX = window.innerWidth - buttonWidth - 20; // -20 żeby mieć margines
    const maxY = window.innerHeight - buttonHeight - 20;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Sprawdzamy, czy nowa pozycja nie jest za blisko aktualnej
    const rect = noButton.getBoundingClientRect();
    if (Math.abs(randomX - rect.left) < 50) randomX += 50;
    if (Math.abs(randomY - rect.top) < 50) randomY += 50;

    // Upewniamy się, że nie przekraczamy ekranu
    randomX = Math.min(randomX, maxX);
    randomY = Math.min(randomY, maxY);

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
    const startX = Math.random() * (window.innerWidth - size); // Żeby nie wychodziły poza ekran
    const startY = Math.random() * (window.innerHeight - size);

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.fontSize = `${size}px`;

    const animationDuration = Math.random() * 2 + 3;
    heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

    setTimeout(() => heart.remove(), animationDuration * 1000);
}
