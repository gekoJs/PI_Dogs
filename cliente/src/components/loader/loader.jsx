import style from "./loader.module.scss";
import paw from "../../assets/svg/Paw.svg";
export default function Loader() {
  return (
    <div className={style.center}>
        <img className={style.paw} src={paw} alt="" />
    </div>
  );
}
