import { renderPeliculasPopulares } from "../vistas/renderPeliculasPopulares.js";
import { renderPeliculasProximas } from "../vistas/renderPeliculasProximas.js";
import { renderPeliculasTendencias } from "../vistas/renderPeliculasTendencias.js";
import { getPeliculasPopulares, getPeliculasProximas, getPeliculasTendencias } from "./ajaxPeliculas.js";

export async function router() {
  if (location.hash === '' || location.hash === '#/') {
    const data = await getPeliculasTendencias(); // Página inicial
    renderPeliculasTendencias(data, '⭐ Películas Populares');
  } else if (location.hash === '#/tendencias') {
    const peliculas = await getPeliculasTendencias();
    renderPeliculasTendencias(peliculas, '🎬 Películas en Tendencia');
  } else if (location.hash === '#/populares') {
    const data = await getPeliculasPopulares(1); // Página inicial
    renderPeliculasPopulares(data, '⭐ Películas Populares');
  } else if (location.hash === '#/proximo') {
    const peliculas = await getPeliculasProximas();
    renderPeliculasProximas(peliculas, '📅 Próximamente');
  } else {
    document.getElementById('main').innerHTML = `<h2>(U_U) Error 404 - Sección no encontrada (U_U) </h2>`;
  }
}