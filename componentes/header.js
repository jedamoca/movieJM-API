// export function header() {
//   // Si ya existe un header, no lo volvemos a insertar
//   if (document.querySelector('header')) return;

//   const $header = document.createElement('header'),
//         $h1 = document.createElement('h1'),
//         $nav = document.createElement('nav'),
//         $ul = document.createElement('ul'),
//         $main = document.getElementById('main');

//   $ul.innerHTML = `
//     <li><a href="#/tendencias">Tendencias</a></li>
//     <li><a href="#/populares">Populares</a></li>
//     <li><a href="#/proximo">Próximo</a></li>
//   `;

//   $h1.textContent = 'Movies-JM';

//   $nav.appendChild($ul);
//   $header.appendChild($h1);
//   $header.appendChild($nav);

//   document.body.insertBefore($header, $main); // Insertar el header antes del main
// }

export function header() {
  if (document.querySelector('header')) return;

  const $header = document.createElement('header'),
        $h1 = document.createElement('h1'),
        $nav = document.createElement('nav'),
        $ul = document.createElement('ul'),
        $btnToggle = document.createElement('button'),
        $main = document.getElementById('main');

  $ul.innerHTML = `
    <li><a href="#/tendencias">Tendencias</a></li>
    <li><a href="#/populares">Populares</a></li>
    <li><a href="#/proximo">Próximo</a></li>
  `;

  $h1.textContent = 'Movies-JM';

  // Botón hamburguesa
  $btnToggle.classList.add('menu-toggle');
  $btnToggle.innerHTML = '&#9776;'; // ☰

  $nav.appendChild($btnToggle);
  $nav.appendChild($ul);
  $header.appendChild($h1);
  $header.appendChild($nav);

  document.body.insertBefore($header, $main);

  // Funcionalidad del botón hamburguesa
  $btnToggle.addEventListener('click', () => {
    $ul.classList.toggle('show');
  });
}