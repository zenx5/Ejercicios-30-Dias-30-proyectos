import "../css/Gif.css";

/**
 * Este es el componente que renderizará cada gif obtenido a traves de la capa de servicio "getGifs".
 * @param {id, title, url} param
 */
export default function GifElement({ id, title, url }) {
  return (
    <div className="container">
      <img key={id} src={url} alt={title} />
      <h5 className="text-title">{title}</h5>
    </div>
  );
}
