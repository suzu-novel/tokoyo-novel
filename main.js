// 鈴の音
function playSound() {
    const bell = document.getElementById("bell");
    bell.play();
}

// タイトル画面クリックでメニュー表示
window.addEventListener("load", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        menuArea.classList.add("show");
        titleScreen.classList.add("hide");

    });

});