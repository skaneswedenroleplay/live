```javascript
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


/* ÖPPNA MENYN */

function openMenu() {

    sideMenu.classList.add("active");
    overlay.classList.add("active");

}


/* STÄNG MENYN */

function closeMenu() {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

}


/* KLICKA PÅ MENYKNAPPEN */

menuButton.addEventListener("click", openMenu);


/* KLICKA PÅ X */

closeButton.addEventListener("click", closeMenu);


/* KLICKA UTANFÖR MENYN */

overlay.addEventListener("click", closeMenu);


/* ESC STÄNGER MENYN */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});
```
