export function enviarForm() {
  const dialog = document.getElementById("dialog");
  const imagenDialog = document.getElementById("dialog__img");
  const parrafoDialog = document.getElementById("dialog__p");
  const btnCerrar = document.getElementById("cerrar-dialog");

  const formulario = document.getElementById("formulario-registro");
  const botonEnviar = document.getElementById("enviar-form");

  const formData = {
    nombreUsuario: document.getElementById("nombre_usuario"),
    primerNombre: document.getElementById("primer_nombre"),
    primerApellido: document.getElementById("primer_apellido"),
    correoElectronico: document.getElementById("correo"),
    contrasena: document.getElementById("contrasena"),
    direccion: document.getElementById("direccion"),
    cedula: document.getElementById("cedula"),
    departamento: document.getElementById("select"),
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  botonEnviar.addEventListener("click", () => {
    const dataEntries = Object.entries(formData);

    const isDataValid = dataEntries.every((e) => e[1].checkValidity());
    if (!isDataValid) {
      console.log("mal");
      alert(`Por favor, proprociona correctamente la informacion`);
      return;
    } else {
      const dataValue = dataEntries.map((e) => [e[0], e[1].value]);
      const data = Object.fromEntries(dataValue);

      const enviarForm = fetch("http://localhost:3000/registrar", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      enviarForm
        .then((repuesta) => repuesta.json())
        .then((data) => {
          parrafoDialog.textContent = data.mensaje;
          dialog.showModal();
          if (data.isRegistrado) {
            imagenDialog.setAttribute(
              "src",
              "../../src/assets/icons/check.svg"
            );
          } else {
            imagenDialog.setAttribute(
              "src",
              "../../src/assets/icons/equis.svg"
            );
          }
        });
    }
  });

  btnCerrar.addEventListener("click", () => dialog.close());
}
