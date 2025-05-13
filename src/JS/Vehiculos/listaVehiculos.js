import { vehiculoFragmento } from "./vehiculosFragment";

export async function listaVehiculos() {
  try {
    const fetching = await fetch("http://localhost:3000/getVehiculos");
    if (!fetching.ok) console.log("Problemas del server");
    const lista = await fetching.json();

    const main = document.querySelector(".main");

    for (let i = 0; i < lista.vehiculosDisponibles.length; i++) {
      const cardVehiculo = vehiculoFragmento.cloneNode(true);
      const dataModelo = cardVehiculo.querySelector(".data__modelo");
      const dataDescripcion = cardVehiculo.querySelector(".data__descripcion");
      const img = cardVehiculo.querySelector(".vehiculo__img");
      const rentaPrecio = cardVehiculo.querySelector(".renta__precio");
      const retaFecha = cardVehiculo.querySelector(".renta__fecha");

      const {
        Marca: { marca },
        Modelo: { modelo },
        Tipo: { tipo },
        asientos,
        imagenURL,
        Tipo: { precioDiario },
      } = lista.vehiculosDisponibles[i];

      dataModelo.textContent = `${marca} ${modelo}`;
      dataDescripcion.innerHTML = `${tipo} <br /> hasta ${asientos} personas`;
      img.setAttribute("src", imagenURL);
      rentaPrecio.textContent = `$${precioDiario} / dia`;
      img.setAttribute("src", `${lista.URL}${imagenURL}`);
      main.append(cardVehiculo);
    }
  } catch (e) {
    console.log("No se puede establecer conexion con el server");
  }
}
