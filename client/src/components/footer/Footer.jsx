import style from "./Footer.module.scss";
import henryIcon from "../../assets/images/favicon.ico";
import dogsIcon from "../../assets/images/dogsApi.ico";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.textWrapper}>
        <span>BootCamp {"->"}</span>
        <Link
          to="https://blog.soyhenry.com/que-es-el-prep-course-de-henry/"
          className={style.a}
        >
          <img src={henryIcon} alt="" />
        </Link>
      </div>
      <div className={style.dots}></div>
      <div className={style.dots}></div>
      <div className={style.dots}></div>
      <h3 className={style.h3}>Made with ♥ by Jesús Roa</h3>
      <div className={style.dots}></div>
      <div className={style.dots}></div>
      <div className={style.dots}></div>
      <div className={style.textWrapper}>
        <Link to="https://thedogapi.com/" className={style.a}>
          <img src={dogsIcon} alt="" />
        </Link>
        <span>{"<-"} api</span>
      </div>
    </footer>
  );
}
