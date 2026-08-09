```javascript
const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


/* ÖPPNA MENYN */

menuButton.addEventListener("click", function () {

    sideMenu.classList.add("active");
    overlay.classList.add("active");

});


/* STÄNG MENYN MED X */

closeButton.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

});


/* KLICKA PÅ BLURRADE OMRÅDET */

overlay.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

});


/* ESC STÄNGER MENYN */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        sideMenu.classList.remove("active");
        overlay.classList.remove("active");

    }

});
```
