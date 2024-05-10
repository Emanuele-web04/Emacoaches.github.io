const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".fullmenu");
const menuItems = document.querySelectorAll(".menuItem");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {	 
        menu.classList.remove("showMenu");
        hamburger.classList.remove("open");
        console.log("Toggling");
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add("open");  // Corrected line
        console.log("notToggling");
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

    