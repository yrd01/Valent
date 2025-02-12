document.getElementById("yes").addEventListener("click", function() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.getElementById("hearts-container").appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
});

const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
