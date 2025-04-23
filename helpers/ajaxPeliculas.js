import { endpoints } from './API.js';
import { API_KEY } from './api_key.js'; // si estás usando una constante API_KEY separada

// Funciones para obtener películas de la API de TMDB
export async function getPeliculasTendencias() {
  try {
    let res = await fetch(endpoints.peliculasTendencias, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    let data = await res.json();
    return data.results;

  } catch (error) {
    console.error('Error al obtener películas de tendencias:', error);
  }
}

export async function getPeliculasPopulares(page = 1) {
  try {
    let res = await fetch(`${endpoints.peliculasPopulares}?page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    let data = await res.json();
    return data; // devolvemos el objeto completo, no solo results

  } catch (error) {
    console.error('Error al obtener películas populares:', error);
  }
}

export async function getPeliculasProximas() {
  try {
    // Endpoint para obtener películas próximas
    let res = await fetch(endpoints.peliculasProximas, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    let data = await res.json();
    return data.results;

  } catch (error) {
    console.error('Error al obtener películas próximas:', error);
  }
}