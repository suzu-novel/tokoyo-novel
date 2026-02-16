function playSound() {
    const bell = document.getElementById("bell");
    bell.play();
}

const title = document.getElementById("title");

title.style.opacity = 0;

setTimeout(() => {
    title.style.transition = "opacity 3s";
    title.style.opacity = 1;
}, 500);
