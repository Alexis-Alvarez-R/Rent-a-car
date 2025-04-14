import carrucel from "./home";

const imagenCarrusel = document.querySelector(".img__main");

function cambiarImagenConTransicion() {
  imagenCarrusel.classList.remove("desplazar");

  setTimeout(() => {
    carrucel.changeImg();

    imagenCarrusel.classList.add("desplazar");
  }, 20);
}

cambiarImagenConTransicion();

setInterval(cambiarImagenConTransicion, 3000);
