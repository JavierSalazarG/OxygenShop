const background = document.getElementById("div__modal");
const button__esc = document.getElementById("button__esc");
const span__suscription = document.getElementById("span__suscription");
const form__newsletter = document.getElementById("form__newsletter");
const input__newsletter = document.getElementById("input__newsletter");

function markModal() {
  localStorage.setItem("flag", "true");
}
function checkShown() {
  return localStorage.getItem("flag") === "true";
}
if (!checkShown()) {
  const timeoutInit = setTimeout(() => {
    if (!checkShown()) {
      background.style.display = "flex";
    }
  }, 5000);

  const checkScrollPosition = () => {
    const bodyHeight = document.body.offsetHeight;
    const scrollY = window.scrollY;
    const scrollPercentage = (scrollY / bodyHeight) * 100;
    if (!checkShown())
      if (scrollPercentage >= 25) {
        clearTimeout(timeoutInit);
        background.style.display = "flex";
      }
  };
  window.addEventListener("scroll", checkScrollPosition);
  //-----------------------------
}

//Cierre del popup al hacer click en el bonto, con la tecla esc y al tocar //fuera
button__esc.addEventListener("click", () => {
  background.style.display = "none";
  markModal();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    background.style.display = "none";
    markModal();
  }
});
background.addEventListener("click", (event) => {
  if (event.target === background) {
    background.style.display = "none";
    markModal();
  }
});

//-----------------

//validacion y envio de mail
const mailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;
form__newsletter.addEventListener("submit", (event) => {
  event.preventDefault();

  if (mailValidate.test(input__newsletter.value)) {
    input__newsletter.style.borderBottom = "1px solid #55dfb4";
    setTimeout(() => {
      background.style.display = "none";
      input__newsletter.value = "";
      sendForm("https:jsonplaceholder.typicode.com/posts", input__newsletter);
      markModal();
    }, 2000);
  } else {
    input__newsletter.style.borderBottom = "2px solid #fb3b64";
  }
});
