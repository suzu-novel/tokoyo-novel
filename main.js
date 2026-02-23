window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");
    const menuArea = document.getElementById("menu-area");

    logoArea.addEventListener("click", function () {

        // タイトル消す
        titleScreen.style.display = "none";

        // メニュー表示
        menuArea.classList.add("show");

        // スクロール解除
        document.body.style.overflow = "auto";

    });

});