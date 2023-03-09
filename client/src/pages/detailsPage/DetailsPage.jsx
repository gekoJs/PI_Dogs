import style from "./DetailsPage.module.scss";
import Loader from "../../components/loader/loader";
import NavBar from "../../components/navBar/NavBar";

import { weightInputHandler, heightInputHandler } from "../../helpers";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getDogDetails, loaderHandler } from "../../redux/actions";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);
  const loader = useSelector((state) => state.loader);

  const { idRaza } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loaderHandler(true));
    dispatch(getDogDetails(idRaza));
  }, [dispatch, idRaza]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
            <NavBar />
          <div className={style.containerAll}>
            {Object.keys(dog).length ? (
              <div className={style.containerBoxes}>
                <div className={style.containerText}>
                  <h1 className={style.title}>{dog[0].name}</h1>
                  <p className={style.lifeTime}>
                    {" "}
                    <div></div> <b>Life time:</b> {dog[0].lifeTime}
                  </p>
                  <p className={style.weight}>
                    <div></div> <b>Weight: </b>{" "}
                    {weightInputHandler(dog[0].weight)}
                  </p>
                  <p className={style.height}>
                    <div></div> <b>Height: </b>{" "}
                    {heightInputHandler(dog[0].height)}
                  </p>
                  <p className={style.temperament}>
                    <div></div> <b>Temperament:</b> <br /> {dog[0].temperament}
                  </p>
                </div>
                <img className={style.img} src={dog[0].image.url} alt="" />
              </div>
            ) : (
              navigate("/error")
            )}
          </div>
        </div>
      )}
    </div>
  );
}
