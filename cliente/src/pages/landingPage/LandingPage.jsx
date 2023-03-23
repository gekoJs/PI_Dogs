import style from "./LandingPage.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";

export default function LandingPage() {
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className={style.container}>
          <div className={style.background}></div>
          <div className={style.opacity}></div>

          <div className={style.content}>
            <h1>Welcome to my dogs-pi</h1>
            <Link to="/dogs">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
