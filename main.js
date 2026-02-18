window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", function () {

        // タイトル画面を完全削除
        titleScreen.remove();

        // スクロール解除
        document.body.style.overflow = "auto";

    });

});