import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import SearchTextBox from "./components/SearchTextBox";
import "./css/App.css";

export default function App() {
  const [keyword, setKeyword] = useState("");

  function handleOnSearch(value) {
    setKeyword(value);
  }

  return (
    <div className="App">
      <section className="Searchtext-container">
        <SearchTextBox onSearch={handleOnSearch} />
      </section>
      <section className="Searchtext-title">
        {keyword !== "" ? "Result for " + keyword : "No Result"}
      </section>
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}
