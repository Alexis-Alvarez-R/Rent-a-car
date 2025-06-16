document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  let sessionId = urlParams.get("session_id");

  const dialog = document.getElementById("dialog");
  const imagenDialog = document.getElementById("dialog__img");
  const parrafoDialog = document.getElementById("dialog__p");
  const btnCerrar = document.getElementById("cerrar-dialog");

  const $idRenta = document.querySelector(".id-renta");
  const $idCliente = document.querySelector(".id-cliente");
  const $nombre = document.querySelector(".nombre");
  const $cedula = document.querySelector(".cedula");
  const $fInicio = document.querySelector(".fInicio");
  const $fFinal = document.querySelector(".fFinal");
  const $descuentoPorcentaje = document.querySelector(".descuento-porcentaje");
  const $descuentoValor = document.querySelector(".descuento-valor");
  const $subTotal = document.querySelector(".sub-total");
  const $total = document.querySelector(".total");

  const $img = document.querySelector(".det-img");

  try {
    if (!sessionId) {
      console.error("No se encontró el session_id en la URL");

      sessionId = localStorage.getItem("facturaId");
      console.log(sessionId);
      const response = await fetch(
        `http://localhost:3000/getFactura?facturaId=${sessionId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const repuesta = await response.json();
      console.log("Resultado:", repuesta);

      const renta = repuesta.Renta;

      $idRenta.textContent = renta.id_Renta;
      $idCliente.textContent = renta.id_Cliente;
      $nombre.textContent = `${renta.Cliente.primerNombre} ${renta.Cliente.primerApellido}`;
      $cedula.textContent = renta.Cliente.cedula || "No definida"; // si no trae cedula

      $fInicio.textContent = renta.fechaInicio;
      $fFinal.textContent = renta.fechaFinal;

      $descuentoPorcentaje.textContent = renta.descuentoAplicado;
      $descuentoValor.textContent = renta.descuentoMonto;

      $subTotal.textContent = renta.subTotal;
      $total.textContent = renta.costoTotal;
      const url = `${repuesta.Renta.URL}${repuesta.Renta.Vehiculo.imagenURL}`;
      console.log(url);

      $img.setAttribute("src", url);

      parrafoDialog.textContent = repuesta.Repuesta.mensaje;

      dialog.showModal();
      console.log(repuesta);
      if (repuesta.Repuesta.isValid) {
        imagenDialog.setAttribute("src", "../../src/assets/icons/check.svg");
      } else {
        imagenDialog.setAttribute("src", "../../src/assets/icons/equis.svg");
      }
      btnCerrar.addEventListener("click", () => {
        dialog.close();
      });
      return;
    }

    const response = await fetch(
      `http://localhost:3000/verificar?session_id=${sessionId}`
    );

    const repuesta = await response.json();
    console.log("Resultado:", repuesta);

    const renta = repuesta.Renta;
    console.log(sessionId);
    console.log(renta);
    console.log($idRenta);
    $idRenta.textContent = renta.id_Renta || "nose";
    $idCliente.textContent = renta.id_Cliente;
    $nombre.textContent = `${renta.Cliente.primerNombre} ${renta.Cliente.primerApellido}`;
    $cedula.textContent = renta.Cliente.cedula || "No definida";

    $fInicio.textContent = renta.fechaInicio;
    $fFinal.textContent = renta.fechaFinal;

    $descuentoPorcentaje.textContent = renta.descuentoAplicado;
    $descuentoValor.textContent = renta.descuentoMonto;

    $subTotal.textContent = renta.subTotal;
    $total.textContent = renta.costoTotal;
    const url = `${repuesta.Renta.URL}${repuesta.Renta.Vehiculo.imagenURL}`;

    $img.setAttribute("src", url);

    parrafoDialog.textContent = repuesta.Repuesta.mensaje;

    dialog.showModal();
    console.log(repuesta);
    if (repuesta.Repuesta.isValid) {
      imagenDialog.setAttribute("src", "../../src/assets/icons/check.svg");
    } else {
      imagenDialog.setAttribute("src", "../../src/assets/icons/equis.svg");
    }
    btnCerrar.addEventListener("click", () => {
      dialog.close();
    });
    return;
    // const repuesta = await response.json();
    // console.log("Resultado:", repuesta);

    // parrafoDialog.textContent = repuesta.mensaje;

    // dialog.showModal();
    // if (repuesta.isValid) {
    //   imagenDialog.setAttribute("src", "../../src/assets/icons/check.svg");
    // } else {
    //   imagenDialog.setAttribute("src", "../../src/assets/icons/equis.svg");
    // }
    // btnCerrar.addEventListener("click", () => {
    //   dialog.close();
    // });
  } catch (e) {
    alert("Uppss algo salio mal");
  }
});
