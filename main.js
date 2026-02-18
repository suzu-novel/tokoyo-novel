window.addEventListener("DOMContentLoaded", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        // メニュー表示
        menuArea.classList.add("show");

        // フェードアウト
        titleScreen.classList.add("hide");

        // フェード後に完全削除
        setTimeout(() => {
            titleScreen.style.display = "none";
        }, 1000);

        // スクロール解除
        document.body.style.overflow = "auto";

    });

});