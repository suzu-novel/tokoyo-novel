window.addEventListener("DOMContentLoaded", () => {

    const logoArea = document.getElementById("logo-area");
    const menuArea = document.getElementById("menu-area");
    const titleScreen = document.getElementById("title-screen");

    logoArea.addEventListener("click", () => {

        menuArea.classList.add("show");

        setTimeout(() => {
            titleScreen.classList.add("hide");
            document.body.style.overflow = "auto";
        }, 1200);

    });

});