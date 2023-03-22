import React, { useState, useEffect } from "react";

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
            <picture>
              <img
                key={gifItem.id}
                src={gifItem.url_medium_size}
                alt={gifItem.title}                
              />
              <h4>{gifItem.title}</h4>
            </picture>
          );
        })}
      </section>
    </div>
  );
}
