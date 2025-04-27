fetch("/Html/Header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("contenedor__header").innerHTML = html;

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
      return;
    });

    //Ete si salio de chat
    function ocultarMenu() {
      const menu = document.getElementById("menu");
      if (window.innerWidth > 480) {
        menu.style.display = "none";
        estadoMenu = false;
      }
    }
    window.addEventListener("resize", ocultarMenu);
    ocultarMenu();
  })
  .catch((error) => {
    console.error("Error al cargar el header:", error);
  });
