const buttonMenu = document.getElementById("navigation_hamburgerMenu");

let menuOpen = false;
let display = "none";

document.getElementById("navigation_menu").style.display = display;

buttonMenu.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if(menuOpen) {
        display = "flex"
    } else {
        display = "none"
    }
    document.getElementById("navigation_menu").style.display = display;
})
