const buttonNext = document.createElement("button");
buttonNext.id = "button__next_slider";
buttonNext.textContent = ">";
const buttonBefore = document.createElement("button");
buttonBefore.id = "button__before_slider";
buttonBefore.textContent = "<";

class Slider {
  constructor(idSlider) {
    this.slider = document.getElementById(idSlider);
    this.buttonsSlider = document.getElementById("div__buttons_slider");
    this.buttonsSlider.appendChild(buttonBefore);
    this.buttonsSlider.appendChild(buttonNext);
    this.img = this.slider.querySelectorAll("img");
    this.contact = 0;
    this.showImg(this.contact);
    this.beforeImage();
    this.nextImage();
  }

  showImg(index) {
    this.img.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
  nextImage() {
    buttonNext.addEventListener("click", () => {
      this.contact = (this.contact + 1) % this.img.length;
      this.showImg(this.contact);
    });
  }
  beforeImage() {
    buttonBefore.addEventListener("click", () => {
      if (this.contact === 0) {
        this.contact = this.img.length - 1;
      } else {
        this.contact = (this.contact - 1) % this.img.length;
      }
      this.showImg(this.contact);
    });
  }
}

new Slider("slider");
