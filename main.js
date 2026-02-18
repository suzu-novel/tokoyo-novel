window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", function () {

        // フェードアウト
        titleScreen.style.opacity = "0";
        titleScreen.style.pointerEvents = "none";

        // 少し待ってから完全削除
        setTimeout(function () {
            titleScreen.remove();
        }, 500);

        // スクロール解除
        document.body.style.overflow = "auto";

    });

});