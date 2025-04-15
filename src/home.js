const slider = document.querySelector(".carrucel");
const sliderSection = document.querySelectorAll(".slider__section");

let widthSlider = 100 / sliderSection.length;
let widthCarrucel = 100 * sliderSection.length;

sliderSection.forEach((section) => {
  section.style.setProperty("width", `${widthSlider}%`); //ajuste automatico de cada section
});

slider.style.setProperty("width", `${widthCarrucel}%`); // ajuste automatico del carrucel

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

export function setupSlider() {
  setInterval(() => {
    moveToRight();
  }, 3000);
}
