alert("main.js 読み込まれた");

window.addEventListener("DOMContentLoaded", function () {

    const logoArea = document.getElementById("logo-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", function () {

        alert("logo clicked");

        titleScreen.remove();

        document.body.style.overflow = "auto";

    });

});