const nav__menu = document.getElementById("nav__menu");
const nav__opcions = document.getElementById("nav__opcions");
let activate = false;

nav__menu.addEventListener("click", () => {
  if (activate === false) {
    nav__opcions.style.display = "flex";
    activate = true;
  } else {
    nav__opcions.style.display = "none";
    activate = false;
  }
});
