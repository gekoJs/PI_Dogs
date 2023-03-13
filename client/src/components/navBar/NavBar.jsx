import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./NavBar.module.scss";
import { getAllDogs, getDogByName, loaderHandler } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ currentPage, paginate }) {
  const [searchInput, setSearchInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Rottweiler");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(loaderHandler(true));
      dispatch(getDogByName(searchInput));
      setSearchInput("");
      navigate("/dogs");
      if (currentPage > 1) {
        paginate(1);
      }
    }
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
      <Link
        to="/dogs"
        onClick={() => dispatch(getAllDogs())}
        className={style.link}
      >
        <h6>Dogs-PI</h6>
      </Link>
      <form className={style.form}>
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
