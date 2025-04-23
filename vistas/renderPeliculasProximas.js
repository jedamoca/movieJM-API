export function renderPeliculasProximas(peliculas, titulo) {
  const $main = document.getElementById('main');
  $main.innerHTML = `<h2>${titulo}</h2>`; // Limpia y coloca título

  const $container = document.createElement('section');
  $container.classList.add('peliculas-grid');

  peliculas.forEach(peli => {
    const $card = document.createElement('div');
    $card.classList.add('pelicula-card');
    $card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300${peli.poster_path}" alt="${peli.title}" />
      <h3>${peli.title}</h3>
      <p>${peli.release_date || 'Sin fecha'}</p>
    `;
    $container.appendChild($card);
  });
  
  $main.appendChild($container);
}