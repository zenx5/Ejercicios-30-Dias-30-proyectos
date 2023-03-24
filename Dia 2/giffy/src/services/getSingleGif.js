/**
 * Este componente de Servicios, se encargará de obtener la data a traves de una API Endpoint,
 * mediante la utilización de fetch(). Solo se encargará de realizar ésta única petición.
 *
 */

const API_KEY = "UzAzcT7Xe7jKfBKuCGY9l7iU11GJJ01i";

export default function getSingleGif({ id }) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResp) => {
      const { data } = jsonResp;

      return {
        id: data.id,
        url: data.url,
        bitly_url: data.bitly_url,
        title: data.title,
        url_original_size: data.images.original.url,
        url_large_size: data.images.downsized_large.url,
        url_medium_size: data.images.downsized_medium.url,
        url_small_size: data.images.downsized_small.url,
      } 
    });
}
