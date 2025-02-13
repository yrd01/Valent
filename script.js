const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    const maxX = window.innerWidth - buttonWidth - 20; // Żeby nie wychodził poza ekran
    const maxY = window.innerHeight - buttonHeight - 20;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Pobieramy aktualną pozycję przycisku
    const rect = noButton.getBoundingClientRect();
    const oldX = rect.left;
    const oldY = rect.top;

    // Jeśli nowa pozycja jest zbyt blisko starej, to wymuszamy większy ruch
    if (Math.abs(randomX - oldX) < 70) {
        randomX = Math.min(randomX + 100, maxX);
    }
    if (Math.abs(randomY - oldY) < 70) {
        randomY = Math.min(randomY + 100, maxY);
    }

    // Przypisujemy nową pozycję
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
