const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");
const slider = document.querySelector(".carrucel");
const sliderW = document.querySelector(".slider__section");
const sliderSection = document.querySelectorAll(".slider__section");

let widthSlider = 100 / sliderSection.length;
let widthCarrucel = 100 * sliderSection.length;

sliderW.style.setProperty("width", `${widthSlider}%`);
slider.style.setProperty("width", `${widthCarrucel}%`);

btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);

let operacion = 0;
let count = 0;
let widthImg = 100 / sliderSection.length; // tamanio de img / cantidad de img

function moveToRight() {
  if (count >= sliderSection.length - 1) {
    count = 0;
    operacion = 0;
    slider.style.setProperty("transform", `translate(-${operacion}%)`);
    slider.style.setProperty("transition", "none");

    return;
  }
  count++;
  operacion += widthImg;
  slider.style.setProperty("transform", `translate(-${operacion}%)`);
  slider.style.setProperty("transition", "all ease .6s");
}

function moveToLeft() {
  count--;

  if (count < 0) {
    count = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length - 1);
    slider.style.setProperty("transform", `translate(-${operacion}%)`);
    slider.style.setProperty("transition", "none");

    return;
  }
  operacion -= widthImg;
  slider.style.setProperty("transform", `translate(-${operacion}%)`);
  slider.style.setProperty("transition", "all ease .6s");
}

function setupSlider() {
  btnLeft.addEventListener("click", moveToLeft);
  btnRight.addEventListener("click", moveToRight);

  setInterval(() => {
    moveToRight();
  }, 3000);
}

export { setupSlider };
