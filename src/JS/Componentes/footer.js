fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("contenedor__footer").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error al cargar el footer:", error);
  });
