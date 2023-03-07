import { useEffect, useState } from "react";
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

  const [placeHolder, setPlaceHolder] = useState("Rottweiler");
  useEffect(() => {
    const interval = setInterval(() => {
      let phArray = [
        "Miniature Pinscher",
        "German Shepherd Dog",
        "Golden Retriever",
        "akita",
      ];
      setPlaceHolder(phArray[Math.round(Math.random() * 3)]);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeHolder]);

  return (
    <div className={style.container}>
      <h6>Dogs-PI</h6>
      <form>
        <input
          type="text"
          value={searchInput}
          placeholder={placeHolder}
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
