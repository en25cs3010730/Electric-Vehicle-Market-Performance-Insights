
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navbar.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    // Automatically update footer year
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});
