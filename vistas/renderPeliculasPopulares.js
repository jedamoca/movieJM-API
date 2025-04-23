import { getPeliculasPopulares } from "../helpers/ajaxPeliculas.js";

export function renderPeliculasPopulares(data, titulo) {
  const peliculas = data.results;
  const paginaActual = data.page;

  const $main = document.getElementById('main');
  $main.innerHTML = `<h2>${titulo}</h2>`;

  const $container = document.createElement('section');
  $container.classList.add('peliculas-grid');

  peliculas.forEach(peli => {
    const $card = document.createElement('div');
    $card.classList.add('pelicula-card');
    $card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${peli.poster_path}" alt="${peli.title}" />
      <h3>${peli.title}</h3>
      <p>${peli.vote_average || 'Sin votos'}</p>
    `;
    $container.appendChild($card);
  });

  const $nav = document.createElement('div');
  $nav.classList.add('paginacion');

  const $btnAnterior = document.createElement('button');
  $btnAnterior.textContent = '⬅ Página anterior';
  $btnAnterior.disabled = paginaActual <= 1;

  const $indicador = document.createElement('span');
  $indicador.classList.add('indicador-pagina');
  $indicador.textContent = `Página ${paginaActual}`;

  const $btnSiguiente = document.createElement('button');
  $btnSiguiente.textContent = 'Página siguiente ➡';

  $nav.appendChild($btnAnterior);
  $nav.appendChild($indicador);
  $nav.appendChild($btnSiguiente);
  $main.appendChild($container);
  $main.appendChild($nav);

  $btnAnterior.addEventListener('click', async () => {
    const nuevaData = await getPeliculasPopulares(paginaActual - 1);
    renderPeliculasPopulares(nuevaData, titulo);
  });

  $btnSiguiente.addEventListener('click', async () => {
    const nuevaData = await getPeliculasPopulares(paginaActual + 1);
    renderPeliculasPopulares(nuevaData, titulo);
  });
}


