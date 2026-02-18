window.addEventListener("DOMContentLoaded", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        // メニュー表示
        menuArea.classList.add("show");

        // スクロール解除
        document.body.style.overflow = "auto";

        // タイトル画面を完全削除（←これが重要）
        titleScreen.remove();

    });

});