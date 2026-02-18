window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", function () {

        // 完全に消す（最強）
        titleScreen.style.display = "none";

        // スクロール解除
        document.body.style.overflow = "auto";

    });

});