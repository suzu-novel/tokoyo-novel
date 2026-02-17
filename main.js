window.addEventListener("DOMContentLoaded", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        // メニュー表示
        menuArea.classList.add("show");

        // タイトル削除
        titleScreen.classList.add("hide");

        // overflow強制解除（!important対策）
        document.body.style.setProperty("overflow", "auto", "important");

    });

});