export function footer() {
  // Evitamos duplicar el footer si ya existe
  if (document.querySelector('footer')) return;

  const $footer = document.createElement('footer'),
        $p = document.createElement('p'),
        $main = document.getElementById('main');

  $p.innerHTML = `  © 2025 Mi Movie SPA · Hecho con Vanilla JS + TMDB API.`;

  $footer.appendChild($p);

  // Insertamos el footer después del main
  document.body.appendChild($footer);
}