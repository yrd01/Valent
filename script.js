document.getElementById("yes").addEventListener("click", () => {
    document.querySelector(".background").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".background").style.background = "url('20240809_213832.jpg') no-repeat center center/cover";
        document.querySelector(".background").style.opacity = "1";
    }, 500);

    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    const size = Math.random() * 30 + 20;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.fontSize = `${size}px`;

    const animationDuration = Math.random() * 2 + 3;
    heart.style.animation = `floatUp ${animationDuration}s ease-in-out forwards`;

    setTimeout(() => heart.remove(), animationDuration * 1000);
}
