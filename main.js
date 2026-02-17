function playSound() {
    const bell = document.getElementById("bell");
    bell.play();
}

const title = document.getElementById("title");

title.style.opacity = 0;

setTimeout(() => {
    title.style.transition = "opacity 3s";
    title.style.opacity = 1;
}, 500);

window.addEventListener("load", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    // 最初にスクロール禁止
    document.body.classList.add("lock");

    logoArea.addEventListener("click", () => {

        // メニュー表示
        menuArea.classList.add("show");

        // スクロール解放
        document.body.classList.remove("lock");

        // タイトル画面を通常レイアウトに戻す
        titleScreen.style.position = "relative";
        titleScreen.style.height = "auto";

    });

});