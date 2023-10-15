const background = document.getElementById("div__modal");
const button__esc = document.getElementById("button__esc");
const span__suscription = document.getElementById("span__suscription");
const form__newsletter = document.getElementById("form__newsletter");
let flag = false;

//Hacer que aparezca a los 5s o al 25%

/*
Primero comprueba si lo puede mostrar con flag y luego cambia el displey a flex a los 5s
*/
const timeoutInit = setTimeout(() => {
  if (!flag) {
    background.style.display = "flex";
    flag = true;
  }
}, 5000);

/*
La funcion primero comprueba si esta activado flag, para poder mostrar, despues comprueba tu posicion de scroll y la maxima, compara y si estas por encima del 25% te lo muestra
*/
function checkScrollPosition() {
  if (!flag) {
    const bodyHeight = document.body.offsetHeight;
    const scrollY = window.scrollY;
    const scrollPercentage = (scrollY / bodyHeight) * 100;

    if (scrollPercentage >= 25) {
      clearTimeout(timeoutInit);
      background.style.display = "flex";
      flag = true;
    }
  }
}
window.addEventListener("scroll", checkScrollPosition);

//-----------------------------

//Cierre del popup al hacer click en el bonto, con la tecla esc y al tocar //fuera
button__esc.addEventListener("click", () => {
  background.style.display = "none";
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    background.style.display = "none";
  }
});
background.addEventListener("click", (event) => {
  if (event.target === background) {
    background.style.display = "none";
  }
});

//-----------------

//validacion y envio de mail
const mailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/;
const input__newsletter = document.getElementById("input__newsletter");

form__newsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  if (mailValidate.test(input__newsletter.value)) {
    input__newsletter.style.borderBottom = "1px solid #55dfb4";
    setTimeout(() => {
      background.style.display = "none";
      input__newsletter.value = "";
      sendForm("https:jsonplaceholder.typicode.com/posts", input__newsletter);
    }, 2000);
  } else {
    input__newsletter.style.borderBottom = "2px solid #fb3b64";
  }
});
