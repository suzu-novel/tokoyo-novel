window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");
    const menuArea = document.getElementById("menu-area");

    logoArea.addEventListener("click", function () {

        titleScreen.remove();          // タイトル完全削除
        menuArea.classList.add("show"); // メニュー表示
        document.body.style.overflow = "auto";

    });

});