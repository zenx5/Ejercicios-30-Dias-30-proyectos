import React from "react";
import ListOfGifs from "./components/ListOfGifs";
// import SearchTextBox from "./components/SearchTextBox";
import "./css/App.css";

export default function App() {
  
  return (
    <div className="App">
      {/* <section className="Searchtext-container">
        <SearchTextBox  />
      </section> */}
      <section className="App-content">
        <ListOfGifs keyword="coche"/>
      </section>
    </div>
  );
}
