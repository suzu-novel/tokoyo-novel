window.addEventListener("DOMContentLoaded", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        // メニュー表示
        menuArea.classList.add("show");

        // タイトル画面を消す
        titleScreen.classList.add("hide");

        // スクロール許可
        document.body.style.overflow = "auto";

    });

});