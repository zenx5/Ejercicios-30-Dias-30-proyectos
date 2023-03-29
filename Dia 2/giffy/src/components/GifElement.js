import "../css/Gif.css";

/**
 * Este es el componente que renderizará cada gif obtenido a traves de la capa de servicio "getGifs".
 * @param {id} id bla bla bla
 * @param {title} titulo bla bla bla
 * @param {url} url bla bla bla
 */
export default function GifElement({ id, title, url, original_size }) {
  return (
    <div className="container">
      <img key={id} src={url} alt={title} />
      <a href={original_size} ><h5 className="text-title">{title}</h5></a>      
    </div>
  );
}
