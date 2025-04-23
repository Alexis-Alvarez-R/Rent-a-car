import { cargarCiudades } from "./fetchCiudades.js";

export function cargarCiudadesForm() {
  document.addEventListener("DOMContentLoaded", async () => {
    const lista = await cargarCiudades();

    const select = document.getElementById("select");

    for (let i = 0; i < lista.length; i++) {
      let option = document.createElement("option");
      const nombreDpt = lista[i].nombreDepartamento;
      const idDpt = lista[i].id_Departamento;

      option.value = idDpt;
      option.text = nombreDpt;

      select.add(option);
    }
  });
}
