function playSound() {
    const bell = document.getElementById("bell");
    bell.play();
}

const logoArea = document.getElementById("logo-area");
const menuArea = document.getElementById("menu-area");
const titleScreen = document.getElementById("title-screen");

logoArea.addEventListener("click", () => {

    menuArea.classList.add("show");

    setTimeout(() => {
        titleScreen.style.display = "none"; // ← 完全に消す
    }, 1200);

});