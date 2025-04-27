fetch("Header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("contenedor__header").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error al cargar el header:", error);
  });
