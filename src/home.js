export default {
  changeImg() {
    const imagenes = [
      "src/assets/image/hiluxRed.png",
      "src/assets/image/PradoDarkGray.png",
      "src/assets/image/Coaster.png",
      "src/assets/image/KiaWhite.png",
      "src/assets/image/HiaceBus.png",
    ];

    const img = document.querySelector(".img__main");

    let indiceUsado = -1;
    let indice;

    do {
      indice = Math.floor(Math.random() * imagenes.length);
    } while (indice === indiceUsado);

    img.src = imagenes[indice];
    indiceUsado = indice;
  },
};
