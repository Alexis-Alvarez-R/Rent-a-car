export async function detalleVehiculo() {
  try {
    const id_vehiculo = localStorage.getItem("id_vehiculo");
    const fetchVehiculo = await fetch(
      `http://localhost:3000/getVehiculo?id_vehiculo=${id_vehiculo}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    console.log(fetchVehiculo);

    if (!fetchVehiculo.ok) {
      if (fetchVehiculo.status == 404) {
        alert("Vehiculo no encontrado");
      }

      if (fetchVehiculo.status == 401) {
        console.log(window.Location.href);
        console.log("Ando aqui");
        window.location.href = "./iniciarSesion.html";
        return;
      }
    }
    document.body.style.display = "block";

    // window.location.href = "../../../HTML/detalleVehiculo.html";

    const fetchPromo = await fetch("http://localhost:3000/getDescuento", {
      method: "GET",
      credentials: "include",
    });
    const promo = await fetchPromo.json();
    console.log(promo);
    if (!promo.isValid) {
      const $descuentos = document.querySelector("#descuentos");
      console.log($descuentos);
      const $codigo = document.querySelector("#codigo");
      $codigo.disabled = true;
      $descuentos.style.display = "none";
    }

    const vehiculoJson = await fetchVehiculo.json();
    console.log(vehiculoJson);
    const vehiculo = vehiculoJson.vehiculo;
    const $contendedorDetalles = document.querySelector(
      ".contenedor__detalles"
    );

    const $form = document.querySelector("form");
    const $text = $contendedorDetalles.querySelector(".text");
    const $subText = $contendedorDetalles.querySelector(".sub__text");
    const $subTextSpan = $subText.querySelector("span");

    const $descripcion = $contendedorDetalles.querySelector(".descripcion");
    const $precio = $contendedorDetalles.querySelector(".precio");
    const $img = $contendedorDetalles.querySelector("img");

    const $numeroAsientos = $contendedorDetalles.querySelector(
      ".value_numero_asientos"
    );
    const $numeroPuertas = $contendedorDetalles.querySelector(
      ".value_numero_puertas"
    );
    const $color = $contendedorDetalles.querySelector(".value_color");
    const $colorInput = $color.querySelector("input");
    const $yeear = $contendedorDetalles.querySelector(".value_yeear");
    const $transmision =
      $contendedorDetalles.querySelector(".value_transmision");
    const $estado = $contendedorDetalles.querySelector(".value_estado");

    const $motor = $contendedorDetalles.querySelector(".value_motor");
    const $potencia = $contendedorDetalles.querySelector(".value_potencia");
    const $velocidadMax = $contendedorDetalles.querySelector(
      ".value_velocidad_max"
    );
    const $carga = $contendedorDetalles.querySelector(".value_carga");
    const $litros = $contendedorDetalles.querySelector(".value_litros");
    const $combustible =
      $contendedorDetalles.querySelector(".value_combustible");

    const $ac = $contendedorDetalles.querySelector(".value_ac");
    const $sensores = $contendedorDetalles.querySelector(".value_sensores");
    const $camaras = $contendedorDetalles.querySelector(".value_camaras");

    const $airbags = $contendedorDetalles.querySelector(".value_airbags");
    const $abs = $contendedorDetalles.querySelector(".value_abs");
    const $controlEstabilidad = $contendedorDetalles.querySelector(
      ".value_control_estabilidad"
    );
    const $asistenciaFrenado = $contendedorDetalles.querySelector(
      ".value_asistencia_frenado"
    );

    $text.textContent = `${vehiculo.Marca.marca} ${vehiculo.Modelo.modelo}`;

    if (
      $subTextSpan.nextSibling &&
      $subTextSpan.nextSibling.nodeType === Node.TEXT_NODE
    ) {
      $subTextSpan.nextSibling.remove();
    }
    $subTextSpan.insertAdjacentText("afterend", ` ${vehiculo.Tipo.tipo}`);

    $descripcion.textContent = vehiculo.descripcion;
    $precio.textContent = `$${vehiculo.Tipo.precioDiario}`;
    $img.setAttribute("src", vehiculo.imagenURL);

    // Generales
    $numeroAsientos.textContent = vehiculo.asientos;
    $numeroPuertas.textContent = vehiculo.puertas;
    $colorInput.value = vehiculo.color;
    $yeear.textContent = vehiculo.yeear;
    $transmision.textContent = vehiculo.mecanica.transmision || "Automática";
    $estado.textContent =
      vehiculo.estado === 1 ? "Disponible" : "No disponible";

    // Mecánica
    $motor.textContent = vehiculo.mecanica.motor;
    $potencia.textContent = vehiculo.mecanica.potenciaHP;
    $velocidadMax.textContent = `${vehiculo.mecanica.velocidadMaximaKm}km`;
    $carga.textContent = `${vehiculo.mecanica.capacidadCargaKg || 0}kg`;
    $litros.textContent = `${vehiculo.mecanica.capacidadLitrosTanque || 0}ltr`;
    $combustible.textContent = vehiculo.mecanica.tipoCombustible || "Gasolina";

    // Tecnología
    $ac.textContent = vehiculo.tecnologia.isAC ? "SI" : "NO";
    $sensores.textContent = vehiculo.tecnologia.isSensores ? "SI" : "NO";
    $camaras.textContent = vehiculo.tecnologia.isCamaras ? "SI" : "NO";

    // Seguridad
    $airbags.textContent = vehiculo.seguridad.numeroAirbags;
    $abs.textContent = vehiculo.seguridad.isFrenoABS ? "SI" : "NO";
    $controlEstabilidad.textContent = vehiculo.seguridad.isControlEstabilidad
      ? "SI"
      : "NO";
    $asistenciaFrenado.textContent = vehiculo.seguridad.isAsistenciaFrenado
      ? "SI"
      : "NO";

    //form Datos
    document
      .querySelector("#fechaFinal")
      .addEventListener("change", (event) => {
        const hoy = new Date().toISOString().split("T")[0];
        console.log(hoy);

        if (event.target.value < hoy) {
          event.target.value = "";
          alert("Fecha de Devoluvion incorrecta");
        }
        if (event.target.value == hoy) {
          event.target.value = "";
          alert("La devolucion no puede ser el mismo dia del alquiler");
        }
      });

    document
      .querySelector("#fechaInicio")
      .addEventListener("change", (event) => {
        const hoy = new Date().toISOString().split("T")[0];
        console.log(hoy);

        if (new Date(event.target.value) < new Date(hoy)) {
          event.target.value = "";
          alert("Fecha de alquiler incorrecta");
        }
      });

    document
      .querySelector("#horaRecoleccion")
      .addEventListener("change", (e) => {
        if (!e.target.checkValidity()) {
          alert("Seleccioná una hora entre 07:00 y 16:00.");
          e.target.value = "";
        }
      });
    document
      .querySelector("#horaDevolucion")
      .addEventListener("change", (e) => {
        if (!e.target.checkValidity()) {
          alert("Seleccioná una hora entre 07:00 y 16:00.");
          e.target.value = "";
        }
      });

    $form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData($form);
      const urlParams = new URLSearchParams(formData);
      urlParams.append("id_Vehiculo", localStorage.getItem("id_vehiculo"));
      console.log(localStorage);

      const fetchReserva = await fetch("http://localhost:3000/postRenta", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlParams.toString(),
      });

      const repuesta = await fetchReserva.json();

      if (!repuesta.Repuesta.isValid) {
        alert(repuesta.Repuesta.mensaje);
        return;
      }
      console.log(repuesta);
      localStorage.setItem("imgV", $img.getAttribute("src"));
      localStorage.setItem("facturaId", repuesta.reservaId);
      window.location.href = repuesta.checkoutUrl;
    });
  } catch (e) {}
}
