import style from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ image, name, temperament, weight }) {
  
  function inputHandler(input) {
    if (!input) return null;
    if (input.length > 15) {
      const nombre = input.split("").splice(0, 15);
      nombre.push("...");
      return nombre.join("");
    }
    return input;
  }

  function temperamentInputHandler(input) {
    if (!input) return null;
    if (input.length > 20) {
      const nombre = input.split("").splice(0, 20);
      nombre.push("...");
      return nombre.join("");
    }
    return input;
  }

  function weightInputHandler(input) {
    const weight = input.split("-").map(e=>e.trim()).map(e=> `${e}Kg`).join(" - ")
    return weight;
  }

  return (
    <div className={style.container}>
      <Link to="/">
        <div className={style.imgContainer}>
          <img src={image} alt="" />
        </div>
        <div className={style.textContainer}>
          <h3 className={style.name}>{inputHandler(name)}</h3>
          <h5 className={style.temperament}>{temperamentInputHandler(temperament)}</h5>
          <h5 className={style.weight}>{weightInputHandler(weight)}</h5>
        </div>
      </Link>
    </div>
  );
}
