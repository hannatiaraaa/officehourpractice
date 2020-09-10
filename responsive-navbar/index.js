const btn = document.querySelector(".menu-icon");
const navContainer = document.querySelector("nav");
const respOverlay = document.querySelector(".responsive-overlay");
const navItems = document.querySelector(".nav-items-container");

btn.addEventListener("click", () => {
  if (navContainer.className === "nav container") {
    navContainer.classList.add("responsive");
    respOverlay.style.display = "block";
    navItems.style.display = "block";
  } else {
    navContainer.classList.remove("responsive");
    respOverlay.style.display = "none";
    navItems.style.display = "none";
  }
});
