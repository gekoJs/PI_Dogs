import style from "./LandingPage.module.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.background}></div>
      <div className={style.opacity}></div>

      <div className={style.content}>
        <h1>Welcome to my dogs-pi</h1>
        <Link to="/home">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}
