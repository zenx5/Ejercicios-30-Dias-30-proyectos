import { useState } from "react";
import "../css/SearchTextBox.css";

export default function SearchTextBox({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  function handleOnChange(event) {
    setKeyword(event.target.value);
  }

  function handleOnClick() {
    onSearch(keyword);
    setKeyword("");
  }

  return (
    <div className="search-box">
      <div>
        <input
          type="text"
          onChange={handleOnChange}
          placeholder=". . ."
          value={keyword}
        />
      </div>
      <button onClick={handleOnClick}> GO! </button>
    </div>
  );
}
