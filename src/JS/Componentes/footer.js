async function cargarFooter() {
  try {
    const response = await fetch("/Html/footer.html");
    const html = await response.text();
    document.getElementById("contenedor__footer").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar el footer:", error);
  }
}

// Llama a la función para ejecutar la carga
cargarFooter();
