const scrollerPrigress = document.getElementById("scrollerPrigress");
const bodyWidth = document.body.offsetWidth;
const bodyHeigth = document.body.offsetHeight;

window.onscroll = () => {
  let scrollY = window.scrollY;
  if (bodyWidth <= 768) {
    const porcentaje = (scrollY / 4000) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else if (bodyWidth <= 1024) {
    const porcentaje = (scrollY / 3219) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else if (bodyWidth <= 2560) {
    const porcentaje = (scrollY / 3400) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else {
    const porcentaje = (scrollY / 3700) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  }
};
