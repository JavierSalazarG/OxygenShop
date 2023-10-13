const scrollerPrigress = document.getElementById("scrollerPrigress");
const bodyWidth = document.body.offsetWidth;
const bodyHeigth = document.body.offsetHeight;

console.log(bodyHeigth);
window.onscroll = () => {
  let scrollY = window.scrollY;
  if (bodyWidth <= 768) {
    console.log(scrollY);
    const porcentaje = (scrollY / 4000) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else if (bodyWidth <= 1024) {
    console.log(scrollY);
    const porcentaje = (scrollY / 3219) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else if (bodyWidth <= 2560) {
    console.log(scrollY);
    const porcentaje = (scrollY / 3400) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  } else {
    const porcentaje = (scrollY / 3700) * 100;
    scrollerPrigress.style.width = `${porcentaje.toFixed(0)}%`;
  }
};
