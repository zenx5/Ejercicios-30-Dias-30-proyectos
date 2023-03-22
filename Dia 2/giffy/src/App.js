import React, { useState, useEffect } from "react";
import GifElement from "./components/GifElement";

import "./css/App.css";
import getGifs from "./services/getGifs";

export default  function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs().then((gifItems) => setGifs(gifItems));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gifItem) => {
          return (
            <GifElement key={gifItem.id} id={gifItem.id} url={gifItem.url_medium_size} title={gifItem.title} />            
          );
        })}
      </section>
    </div>
  );
}
