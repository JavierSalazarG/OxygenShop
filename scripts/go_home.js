const button_scroll = document.getElementById("button__go_home");
const body = document.getElementById("body");

button_scroll.addEventListener("click", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 200);
});
