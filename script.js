
const hamburger = document.querySelector(".menu-icon");
const navbar =document.querySelector(".nav-bar");

hamburger.addEventListener("click", () =>  {
    navbar.classList.toggle("active");
});

