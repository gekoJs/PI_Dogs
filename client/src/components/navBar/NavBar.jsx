import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./NavBar.module.scss";
import { getDogByName } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function NavBar({ paginate }) {
  const [searchInput, setSearchInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Rottweiler");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchInput && dispatch(getDogByName(searchInput));
    paginate(1);
    setSearchInput("");
  };

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
      <Link to="/dogs" className={style.link}>
        <h6>Dogs-PI</h6>
      </Link>
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
