document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");

    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");


    /* ================================= */
    /* ÖPPNA MENYN */
    /* ================================= */

    function openMenu() {

        sideMenu.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    /* ================================= */
    /* STÄNG MENYN */
    /* ================================= */

    function closeMenu() {

        sideMenu.classList.remove("active");
        overlay.classList.remove("active");

        document.body.style.overflow = "";
    }


    /* ================================= */
    /* MENYKNAPP */
    /* ================================= */

    menuButton.addEventListener("click", function () {

        openMenu();

    });


    /* ================================= */
    /* X-KNAPP */
    /* ================================= */

    closeButton.addEventListener("click", function () {

        closeMenu();

    });


    /* ================================= */
    /* KLICKA UTANFÖR MENYN */
    /* ================================= */

    overlay.addEventListener("click", function () {

        closeMenu();

    });


    /* ================================= */
    /* ESC STÄNGER MENYN */
    /* ================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

});
