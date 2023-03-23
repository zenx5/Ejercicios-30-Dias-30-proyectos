import { useState } from "react";
import "../css/SearchTextBox.css";

export default function SearchTextBox() {
  const [keyword, setKeyword] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log('cambiando keyword: ' + keyword);
  }

  function handleOnChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-box"> 
      <div>
        <input type="text" onChange={handleOnChange} placeholder=". . ." required />
        
      </div>
      <button type="submit" onClick={handleOnSubmit}>Go!</button>
    </div>
  );
}
