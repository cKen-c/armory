const menuBtn = document.querySelector(".menu");
const closeBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});