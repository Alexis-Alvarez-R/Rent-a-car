async function cargarHeader() {
  try {
    const response = await fetch("/Html/Header.html");
    const html = await response.text();
    document.getElementById("contenedor__header").innerHTML = html;

    // Lógica del menú
    const btnMenu = document.querySelector("#btn-menu");
    const menu = document.querySelector("#menu");
    let estadoMenu = false;

    btnMenu.addEventListener("click", () => {
      if (estadoMenu) {
        menu.style.display = "none";
        estadoMenu = false;
        return;
      }
      menu.style.display = "flex";
      estadoMenu = true;
    });

    function ocultarMenu() {
      if (window.innerWidth > 480) {
        menu.style.display = "none";
        estadoMenu = false;
      }
    }

    window.addEventListener("resize", ocultarMenu);
    ocultarMenu();
  } catch (error) {
    console.error("Error al cargar el header:", error);
  }
}

// Ejecutar
cargarHeader();
