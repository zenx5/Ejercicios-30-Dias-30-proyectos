import "../css/Gif.css";

export default function GifElement({ id, title, url }) {
  return (
    <div className="container">
      <img key={id} src={url} alt={title} />
      <h5 className="text-title">{title}</h5>
    </div>
  );
}
