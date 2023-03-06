import { useState } from "react";
import style from "./NavBar.module.scss";
export default function NavBar() {
  
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput("");
  };
  return (
    <div className={style.container}>
      <h6>Dogs-PI</h6>
      <form>
        <input
          type="text"
          value={searchInput}
          placeholder="Golden Retriever"
          className={style.searchBar}
          onChange={(e) => handleInput(e)}
        />
        <button
          type="submit"
          className={style.searchButton}
          onClick={(e) => handleSubmit(e)}
        >
          send
        </button>
      </form>
    </div>
  );
}
