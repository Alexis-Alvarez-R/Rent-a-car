export async function cargarCiudades() {
  const fetchin = await fetch("http://localhost:3000/departamentos");
  const listadpts = await fetchin.json();
  return listadpts;
}
