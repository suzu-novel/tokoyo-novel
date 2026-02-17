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

window.addEventListener("load", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");

    logoArea.addEventListener("click", () => {
        menuArea.classList.add("show");
    });

});