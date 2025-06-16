export async function iniciarSesion() {
  const dialog = document.getElementById("dialog");
  const imagenDialog = document.getElementById("dialog__img");
  const parrafoDialog = document.getElementById("dialog__p");
  const btnCerrar = document.getElementById("cerrar-dialog");
  try {
    const $formulario = document.querySelector("form");
    let registroExitoso;

    $formulario.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData($formulario);
      const urlParams = new URLSearchParams(formData);

      const fetching = await fetch("http://localhost:3000/iniciarSesion", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlParams.toString(),
      });

      const repuesta = await fetching.json();
      console.log(repuesta);

      parrafoDialog.textContent = repuesta.mensaje;
      dialog.showModal();
      registroExitoso = repuesta.isRegistrado;
      if (repuesta.isRegistrado) {
        imagenDialog.setAttribute("src", "../../src/assets/icons/check.svg");
      } else {
        imagenDialog.setAttribute("src", "../../src/assets/icons/equis.svg");
      }
    });

    btnCerrar.addEventListener("click", () => {
      dialog.close();
      if (registroExitoso) {
        window.location.href = "../index.html";
      }
    });
  } catch (error) {}
}
