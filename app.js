import { contenido } from "./componentes/contenido.js";
import { footer } from "./componentes/footer.js";
import { header } from "./componentes/header.js";

export function app(){
  // const $main = document.getElementById('main');
  // $main.innerHTML = ''; // Limpiar el contenido del main
  header();      // Carga el header
  contenido();   // Carga el contenido dinámico
  footer();     // Carga el footer
}