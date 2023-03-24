import React, { useState, useEffect } from "react";
import { Link, Route } from "wouter";
import getGifs from "../services/getGifs";
import GifElement from "./GifElement";
import SingleGif from "./SingleGif";


/**
 * Este componente se encargara exclusivamente del comportamiento del renderizado de la lista de Gifs,
 * por lo cual controlará los hooks useState y useEffect. Para asi dejar el componente principal, o sea
 * App.js solo con la responsabilidad de incluir la capa de componentes.
 */
export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifItems) => setGifs(gifItems));
  }, [keyword]);

  return gifs.map((gifItem) => (
    <>
      <GifElement
        key={gifItem.id}
        id={gifItem.id}
        url={gifItem.url_medium_size}
        title={<Link to={`/gif/${gifItem.id}`}> {gifItem.title}</Link>}
      />
      <Route
        path="/gif/:id"
        component={SingleGif}
      />
    </>
  ));
}
