const API_KEY = "UzAzcT7Xe7jKfBKuCGY9l7iU11GJJ01i";

export default function getGifs({ keyword = "relax" } = {}) {

  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=r&lang=es`;

  console.log(keyword)
  return fetch(API_URL)
    .then((res) => res.json())
    .then((jsonResp) => {
      const { data } = jsonResp; 
      if (Array.isArray(data)) {
        const arrGifs = data.map((gif) => {
          return {
            id: gif.id,
            url: gif.url,
            bitly_url: gif.bitly_url,
            title: gif.title,
            url_original_size: gif.images.original.url,
            url_large_size: gif.images.downsized_large.url,
            url_medium_size: gif.images.downsized_medium.url,
            url_small_size: gif.images.downsized_small.url,
          };
        });

        return arrGifs;
      }
    });
}
