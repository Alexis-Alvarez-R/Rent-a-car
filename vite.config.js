import { defineConfig } from "vite";
import { resolve } from "path"; // Necesitas 'path' para resolver rutas si usas input con múltiples HTML

export default defineConfig({
  // 1. CONFIGURACIÓN CLAVE PARA LAS RUTAS DE ASSETS EN VERCELL
  base: "/",

  // 2. Si tienes múltiples HTML fuera del index.html, esto es importante
  //    Si solo usas el index.html y todo lo demás se carga vía JS,
  //    puedes omitir la sección 'build.rollupOptions.input'.
  build: {
    outDir: "dist", // Asegúrate de que Vite compile a la carpeta 'dist'
    rollupOptions: {
      input: {
        // Asegúrate de que index.html sea el punto de entrada principal
        main: resolve(__dirname, "index.html"),
        // Si tienes otros archivos HTML en tu carpeta 'Html' que quieres que Vite procese
        // y los incluya en la salida 'dist', añádelos aquí.
        // Por ejemplo:
        // login: resolve(__dirname, 'Html/IniciarSesion.html'),
        // register: resolve(__dirname, 'Html/Registrar.html'),
        // etc.
      },
    },
  },

  // 3. Puedes añadir aquí plugins si usas librerías como React o Vue
  // plugins: [
  //   // Por ejemplo: react() si usas React
  // ],

  // ... otras configuraciones que puedas necesitar más adelante
});
