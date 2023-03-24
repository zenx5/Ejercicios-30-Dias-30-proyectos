import { useEffect, useState } from 'react'; 
import getSingleGif from '../services/getSingleGif';


/**
 * Este es el componente que renderizará cada gif obtenido a traves de la capa de servicio "getGifs".
 * @param {id, title, url} param
 */
export default function SingleGif({id}) {

    const [gif, setGif] = useState(null);
    useEffect(() => {
        getSingleGif( id ).then((item) => setGif(item));
      }, [id]);

  return (
    <div>
      <img src={gif.url} alt={gif.title} />
      <h5 className="text-title">{gif.title}</h5>      
    </div>
  );
}