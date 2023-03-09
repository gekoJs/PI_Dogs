import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import {
  weightInputHandler,
  temperamentInputHandler,
  inputHandler,
} from "../../helpers";

export default function Card({
  id,
  name,
  image,
  temperament,
  weight,
}) {
  return (
    <div className={style.container}>
      <Link to={`/dogs/${id}`}>
        <div className={style.imgContainer}>
          <img src={image} alt="" />
        </div>
        <div className={style.textContainer}>
          <h3 className={style.name}>{inputHandler(name)}</h3>
          <h5 className={style.temperament}>
            {temperamentInputHandler(temperament)}
          </h5>
          <h5 className={style.weight}>{weightInputHandler(weight)}</h5>
        </div>
      </Link>
    </div>
  );
}
